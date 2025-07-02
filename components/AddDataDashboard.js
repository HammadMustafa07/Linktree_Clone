import { useState } from "react";
import { Plus } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import toast, { Toaster } from "react-hot-toast";

const AddDataDashboard = () => {
  const { user, isLoaded } = useUser();
  const [formData, setformData] = useState({ linkText: "", link: "" });

  if (!isLoaded) {
    return <div>Loading user...</div>;
  }

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async () => {
    if (formData.link.trim() && formData.linkText.trim() && user.id) {
      try {
        const res = await fetch("/api/postLinks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            linkText: formData.linkText,
            link: formData.link,
            userId: user?.id,
            imgUrl: user?.imageUrl,
            userName: user?.fullName,
          }),
        });

        if (!res.ok) {
          const errorText = await res.text(); 
          console.error("❌ Server Error:", errorText);
          throw new Error("Failed to send data");
        }

        const result = await res.json();
        toast.success("✅Link added successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 2000); 

        console.log("✅ Success:", result);
        setformData({ linkText: "", link: "" }); // Reset form only on success
      } catch (error) {
        console.error("❌ Error:", error);
        toast.error("❌ Adding link failed");
      }
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add Link</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Link title"
            name="linkText"
            value={formData.linkText}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:border-black outline-none"
          />

          <input
            type="text"
            value={formData.link}
            name="link"
            onChange={handleChange}
            placeholder="https://yourlink.com"
            className="w-full p-3 border border-gray-200 rounded-lg focus:border-black outline-none"
          />

          <button
            onClick={handleAdd}
            className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Link</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddDataDashboard;

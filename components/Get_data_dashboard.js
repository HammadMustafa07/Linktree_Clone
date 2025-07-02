"use client";
import React, { useEffect, useState } from "react";
import { Plus, Link2, Globe, Edit3, Trash2, Eye } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import toast, { Toaster } from "react-hot-toast";

const GetDataDashboard = () => {
  const { user, isLoaded } = useUser();
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    // ✅ Added isLoaded and user.id in dependency array
    if (!isLoaded || !user?.id) return;

    fetch(`/api/getLinks?userId=${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setCredentials(data.data);
      });
  }, [isLoaded, user?.id]); // ✅ added dependencies here

  const deleteLink = async (linkId) => {
    try {
      // ✅ Fixed missing '/' in route
      const res = await fetch(`/api/deleteLinks`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: linkId }),
      });

      // ✅ Optional: check for success/failure response
      if (!res.ok) {
        throw new Error("Failed to delete link");
      }

      setCredentials((prev) => prev.filter((link) => link._id !== linkId));
      toast.success("✅ Deleted link successfully");
    } catch (err) {
      console.error("Error deleting link", err); // ✅ added error log
      toast.error("❌ Deleting link failed");
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <Link2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Your Links</h2>
        </div>

        {credentials.length === 0 ? (
          <div className="text-center py-16">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-10 h-10 text-slate-500" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">
              No links yet
            </h3>
            <p className="text-slate-500 max-w-sm mx-auto">
              Add your first credential above to get started with your link
              collection!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {credentials.map((credential, index) => (
              <div
                key={credential._id || index} // ✅ fallback to index if _id is missing
                className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Globe className="w-5 h-5 text-emerald-600" />
                        </div>
                        <h3 className="font-semibold text-slate-800 text-lg truncate group-hover:text-slate-900 transition-colors">
                          {credential.linkText}
                        </h3>
                      </div>
                      <div className="pl-13">
                        <p
                          onClick={() =>
                            window.open(credential.link, "_blank")
                          }
                          className="text-sm text-slate-600 hover:underline hover:text-blue-500 font-mono bg-slate-50 px-3 py-2 rounded-lg break-all border"
                        >
                          {credential.link}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 ml-6 opacity-70 group-hover:opacity-100 transition-opacity">
                      <button className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-105">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 hover:scale-105">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteLink(credential._id)}
                        className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 hover:scale-105"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GetDataDashboard;


---

# 🌐 Linktree Clon
A fully functional **Linktree Clone** where authenticated users can **add**, **delete**, and **manage** their personal links. Each user gets a **unique shareable URL** displaying their active links — perfect for social media bios or personal branding!

## 🚀 Features

* ✅ User authentication with **Clerk**
* ➕ Add new links (with title and URL)
* ❌ Delete existing links
* 📤 Shareable profile page (public view of all links)
* 🌐 Built with **Next.js**, **MongoDB**, and **JavaScript**

---

## 🧱 Tech Stack

| Tech                    | Description                             |
| ----------------------- | --------------------------------------- |
| Next.js                 | React framework for full-stack web apps |
| MongoDB                 | NoSQL database to store user links      |
| Clerk                   | Authentication and user management      |
| JavaScript              | Programming language                    |
| Tailwind CSS (optional) | For UI styling                          |

---

## 🔐 Authentication (Powered by Clerk)

* Users **sign up or log in** using Clerk
* Each user has a **unique user ID**
* Only authenticated users can manage (add/delete) their links

---

## 🛠️ Installation & Setup

```bash
git clone https://github.com/yourusername/linktree-clone.git
cd linktree-clone
npm install
```

### Set up environment variables:

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
MONGODB_URI=
```

> Get Clerk keys from: [https://clerk.dev](https://clerk.dev)

---

## ▶️ Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

---


---

## 🔗 Public Share Link

Each user has a **public profile page** where all their links are visible.

Example:

```
https://yourdomain.com/user_abc123
```

You can copy this URL and share it anywhere (Instagram, Twitter, LinkedIn).

---

## 🙌 Contributing

Feel free to open issues or submit pull requests if you'd like to improve this project!

---

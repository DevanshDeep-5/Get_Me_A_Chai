"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container mx-auto py-5">
      <h1 className="text-center my-5 text-3xl font-bold">
        Welcome to your Dashboard
      </h1>

      <form className="max-w-2xl mx-auto">
        <div className="my-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            value={form.name ? form.name : ""}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blu-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark: placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"  
          />
        </div>

        <div className="my-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            value={form.email ? form.email : ""}
            onChange={handleChange}
            type="text"
            name="email"
            id="email"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blu-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark: placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"  
          />
        </div>

        <div className="my-2">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <input
            value={form.username ? form.username : ""}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blu-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark: placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"  
          />
        </div>

        <div className="my-2">
          <label htmlFor="profilePicture" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Profile Picture
          </label>
          <input
            value={form.profilePicture ? form.profilePicture : ""}
            onChange={handleChange}
            type="text"
            name="profilePicture"
            id="profilePicture"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blu-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark: placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"  
          />
        </div>

        <div className="my-2">
          <label htmlFor="coverPicture" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Cover Picture
          </label>
          <input
            value={form.coverPicture ? form.coverPicture : ""}
            onChange={handleChange}
            type="text"
            name="coverPicture"
            id="coverPicture"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blu-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark: placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"  
          />
        </div>

        {/* Submit button */}
        <div className="my-6">
            <button
          type="submit"
          className="block w-full p-2 text-white bg-blue-500 rounded-lg text-sm hover:bg-blue-600 focus:ring-4 font-medium focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-700 dark:focus:ring-blue-800 dark:focus:border-blue-800"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;

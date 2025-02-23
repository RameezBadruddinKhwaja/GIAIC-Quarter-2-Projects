"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MyAccountPage() {
  // Simulated user state; null means not logged in.
  const [user, setUser] = useState<{
    email: string;
    name: string;
    phone: string;
    address: string;
    avatar: string;
  } | null>(null);

  // Login form fields.
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Account details fields.
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Simulated login handler.
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      const userData = {
        email: loginEmail,
        name: "John Doe",
        phone: "123-456-7890",
        address: "123 Main Street, Anytown, USA",
        avatar: "https://via.placeholder.com/150", // Placeholder avatar URL.
      };
      setUser(userData);
      setName(userData.name);
      setPhone(userData.phone);
      setAddress(userData.address);
    }
  };

  // Simulated account update handler.
  const handleUpdateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      setUser({ ...user, name, phone, address });
      alert("Account details updated!");
    }
  };

  // Simulated logout.
  const handleLogout = () => {
    setUser(null);
    setLoginEmail("");
    setLoginPassword("");
    setName("");
    setPhone("");
    setAddress("");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Login</h1>
        <form
          className="w-full max-w-sm bg-white p-8 shadow rounded"
          onSubmit={handleLogin}
        >
          <div className="mb-4">
            <label htmlFor="login-email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="login-email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="login-password"
              className="block text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="login-password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-pink-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-pink-600 hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    );
  }

  // If logged in, show the My Account Dashboard.
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
        <div className="flex items-center mb-8">
          <Image
            src={user.avatar}
            alt={user.name}
            width={100}
            height={100}
            className="rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Account Details
        </h3>
        <form onSubmit={handleUpdateAccount}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-2">
              Shipping Address
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            Update Account
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={handleLogout}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

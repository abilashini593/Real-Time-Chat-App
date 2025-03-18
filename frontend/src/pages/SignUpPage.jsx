import React, { useState } from "react";
import AuthImagePattern from "../components/AuthImagePattern";
import { useAuthStore } from "../store/useAuthStore.js";
import toast from "react-hot-toast"; // Make sure toast is imported

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) {
      signup(formData);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Side - Signup Form */}
      <div className="flex flex-col justify-center items-center w-1/2 px-10">
        <div className="text-center mb-6">
          <p className="text-3xl font-bold">Create Account</p>
          <p className="text-gray-400">Get started with your free account</p>
        </div>

        <div className="w-full max-w-md">
          {/* Full Name */}
          <div className="mb-4">
            <label className="block font-semibold">Full Name</label>
            <div className="flex items-center border border-gray-700 rounded-lg p-2 bg-gray-800">
              <span className="mr-2">👤</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <div className="flex items-center border border-gray-700 rounded-lg p-2 bg-gray-800">
              <span className="mr-2">📧</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block font-semibold">Password</label>
            <div className="flex items-center border border-gray-700 rounded-lg p-2 bg-gray-800">
              <span className="mr-2">🔒</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="●●●●●●●"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
            onClick={handleSubmit}
            disabled={isSigningUp}
          >
            {isSigningUp ? "Creating..." : "Create Account"}
          </button>

          {/* Sign In Link */}
          <p className="text-center text-gray-400 mt-4">
            Already have an account? <span className="text-blue-500 cursor-pointer">Sign in</span>
          </p>
        </div>
      </div>

      {/* Right Side - Grid & Community Text */}
      <div className="flex flex-col justify-center items-center w-1/2">
        <AuthImagePattern
          title="Join our community"
          subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
        />
      </div>
    </div>
  );
};

export default SignUpPage;

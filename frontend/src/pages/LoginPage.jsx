import React, { useState } from "react";
import AuthImagePattern from "../components/AuthImagePattern";
import { useAuthStore } from "../store/useAuthStore.js";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center w-1/2 px-10">
        <div className="text-center mb-6">
          <p className="text-3xl font-bold">Welcome Back</p>
          <p className="text-gray-400">Sign in to continue your conversations</p>
        </div>

        <div className="w-full max-w-md">
          {/* Email */}
          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <div className="flex items-center border border-gray-700 rounded-lg p-2 bg-gray-800">
              <Mail className="mr-2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block font-semibold">Password</label>
            <div className="flex items-center border border-gray-700 rounded-lg p-2 bg-gray-800">
              <Lock className="mr-2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="●●●●●●●"
                className="w-full bg-transparent outline-none"
              />
              <button onClick={() => setShowPassword(!showPassword)} className="ml-2">
                {showPassword ? <EyeOff className="text-gray-400" /> : <Eye className="text-gray-400" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
            onClick={handleSubmit}
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Signing in..." : "Sign In"}
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-400 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <div className="flex flex-col justify-center items-center w-1/2">
        <AuthImagePattern
          title="Welcome Back!"
          subtitle="Sign in to continue your conversations and stay connected."
        />
      </div>
    </div>
  );
};

export default LoginPage;

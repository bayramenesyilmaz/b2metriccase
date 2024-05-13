"use client";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAuth } from "@/contexts/AuthContext";

const adminEmail = "admin@b2metric.com";
const adminPassword = "admin123";

export default function LoginForm() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (email === adminEmail && password === adminPassword) {
      const user = { email, password };
      console.log({ email, password });
      await login(user);
    } else {
      setTimeout(() => {
        setLoading(false);
        setError("Username or password is wrong");
      }, 2000);
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm space-y-4">
        {error && (
          <div className="text-red-500 font-semibold text-sm">
            Error : {error}
          </div>
        )}
        <div className="space-y-2">
          <label
            htmlFor="email-address"
            className="text-xs text-gray-500 font-semibold"
          >
            EMAIL
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-1 relative space-y-2">
          <label
            htmlFor="password"
            className="text-xs text-gray-500 font-semibold"
          >
            PASSWORD
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-2 top-5 flex items-center text-sm leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center p-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading ? "Loading..." : "Log in"}
        </button>
      </div>
      <div className="flex flex-col bg-red-400 text-white p-2 rounded-md shadow-md font-semibold text-sm">
        <p>Email : admin@b2metric.com</p>
        <p>Password : admin123</p>
      </div>
    </form>
  );
}

"use client";
import Link from "next/link";
import PieChartIcon from "@mui/icons-material/PieChart";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { name: "Overview", url: "/dashboard", icon: PieChartIcon },
  { name: "Users", url: "/dashboard/users", icon: PersonIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="w-16 sm:w-56 bg-gray-800 flex flex-col items-center">
      <div className="w-full flex items-center justify-center gap-2 py-6">
        <div className="w-[40px] h-[40px] rounded-full bg-blue-700"></div>
        <h4 className="text-gray-300 text-lg font-semibold hidden sm:block ">
          B2Metric
        </h4>
      </div>
      <nav className="mt-8 w-full h-full flex flex-col justify-between">
        <ul>
          {navLinks.map((link) => {
            const LinkIcon = link.icon;
            return (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className={`flex items-center p-4 border-l-4  hover:text-white hover:bg-gray-700 transition duration-300 ${
                    pathname === link.url
                      ? "bg-gray-700 text-white border-gray-200"
                      : "text-gray-400 border-gray-800"
                  }`}
                >
                  <LinkIcon className="w-7 mr-2" />
                  <p className="hidden sm:block ">{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={logout}
          className="flex items-center p-4 border-l-4 hover:text-white hover:bg-gray-700 transition duration-300 text-gray-400 border-gray-800 w-full"
        >
          <ExitToAppIcon className="w-7 mr-2" />
          <p className="hidden sm:block ">Logout</p>
        </button>
      </nav>
    </div>
  );
}

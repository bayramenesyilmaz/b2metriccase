import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-slate-200">
      {/* Sidebar */}
      <Sidebar />
      {/* Content */}
      <main className="flex-1 p-4 px-2 sm:px-8 overflow-auto">{children}</main>
    </div>
  );
}

import { Avatar } from "@mui/material";

export default function Header({ title }) {
  return (
    <header className="w-full h-16 flex items-center justify-between">
      <h1 className="text-black text-2xl font-semibold">{title}</h1>
      <div className="flex items-center space-x-4">
        <p className="text-black text-sm">John Doe</p>
        <Avatar alt={"John Doe"} src={"/johnImage"} />
      </div>
    </header>
  );
}

import React from "react";

export default function DetailBox({ title, value }) {
  return (
    <div className="min-h-max h-[130px] p-4 flex flex-col items-center justify-center space-y-3 text-center border-2 border-gray-300 bg-slate-50 rounded-md hover:border-blue-500 hover:text-blue-500 cursor-pointer">
      <p className="opacity-70 font-semibold">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

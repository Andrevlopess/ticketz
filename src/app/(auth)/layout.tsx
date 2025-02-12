import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  console.log("rendered");



  return (
    <div className="min-h-screen">
      <header className="p-4 bg-zinc-900">
        <h5>andrevlopes</h5>
      </header>
      {children}
    </div>
  );
}

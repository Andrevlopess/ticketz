'use client';

import React from 'react';
import { Suspense, use } from "react";
import { Loader2 } from "lucide-react";

const UserDetails = ({ promise }: { promise: Promise<IUser> }) => {
  const user = use(promise);
  
  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-xl font-bold">{user.name}</h1>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};

export default function UserDetailsContainer({ promise }: { promise: Promise<IUser> }) {
  return (
    <Suspense fallback={<Loader2 className="animate-spin" />}>
      <UserDetails promise={promise} />
    </Suspense>
  );
}

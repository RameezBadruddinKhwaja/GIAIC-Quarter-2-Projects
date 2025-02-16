'use client';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProtectedPage() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    } else {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Protected Content</h1>
      <p>You are logged in as: {user?.username}</p>
      <p className="mt-2 text-green-600">This is a protected route!</p>
    </div>
  );
}

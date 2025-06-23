import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch users.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">🔄 Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">👥 User List</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-1">{user.name}</h3>
            <p className="text-sm text-gray-700">📧 {user.email}</p>
            <p className="text-sm text-gray-700">📞 {user.phone}</p>
            <p className="text-sm text-blue-600 underline">🔗 {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

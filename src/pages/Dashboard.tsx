export default function Dashboard() {
  const stats = [
    { label: "GPA", value: "3.85", color: "bg-blue-500" },
    { label: "Attendance", value: "90%", color: "bg-green-500" },
    { label: "Subjects", value: "12 / 15", color: "bg-purple-500" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">📊 Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-white ${stat.color} p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 dark:shadow-gray-900`}
          >
            <h3 className="text-lg font-semibold">{stat.label}</h3>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

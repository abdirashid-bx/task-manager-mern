
export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white border-b border-gray-200 shadow-sm">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
        Task Manager
      </h1>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <p className="text-gray-600 text-sm font-medium">Welcome, Admin</p>
        <button className="bg-blue-600 px-6 py-2 text-white rounded-full hover:bg-blue-500 transition">
          Logout
        </button>
      </div>
    </div>
  );
}

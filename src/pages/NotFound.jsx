import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold text-red-500">404</h2>
      <p className="text-gray-600 mt-2">Page Not Found</p>

      <Link to="/" className="btn mt-5 bg-green-900 text-white">
        Back Home
      </Link>
    </div>
  );
}
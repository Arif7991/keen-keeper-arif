import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold text-red-500">404</h2>
        <p className="text-gray-700 mt-3 text-lg font-semibold">
          Oops! This page doesn't exist.
        </p>
        <p className="text-gray-500 mt-2 text-sm max-w-md text-center">
          The page you are looking for might have been removed, renamed, or is temporarily unavailable.
        </p>

      <Link to="/" className="btn mt-5 bg-green-900 text-white">
        Back Home
      </Link>
    </div>
  );
}
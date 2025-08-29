import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4">
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link href="/">
        <span className="mt-6 inline-block px-6 py-3 text-white bg-orange-500 rounded-xl shadow hover:bg-orange-600 transition">
          Back to Home
        </span>
      </Link>
    </div>
  );
}

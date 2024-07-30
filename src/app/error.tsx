"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center p-6 border border-red-500 rounded-lg bg-red-100">
      <h2 className="text-red-500 text-xl font-bold">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Try again
      </button>
    </div>
  );
}

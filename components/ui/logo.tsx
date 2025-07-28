import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center space-x-2 group" aria-label="Frame101">
      <svg
        className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon background - Black */}
        <path
          d="M16 0L31 8v16L16 32 1 24V8L16 0z"
          className="fill-black group-hover:fill-neutral-900"
        />
        {/* Letter F - Green */}
        <path
          d="M12 10h8v2h-6v3h5v2h-5v5h-2V10z"
          className="fill-green-500 group-hover:fill-green-600"
        />
      </svg>

      {/* Brand name text - Green */}
      <span className="text-xl font-bold text-green-600 group-hover:text-green-700 tracking-tight">
        Frame101
      </span>
    </Link>
  );
}

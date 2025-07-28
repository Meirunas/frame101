import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`flex flex-col gap-8 py-8 md:flex-row md:justify-between md:items-start md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          {/* Left block */}
          <div className="space-y-2">
            <Logo />
            <div className="text-sm text-gray-600">
              &copy; Frame101 - All rights reserved.
            </div>
          </div>

          {/* Right block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-2">
              {/* LinkedIn */}
              <li>
                <Link
                  href="https://www.linkedin.com/in/meirunas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                >
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 12h5.535v2.337h.079c.771-1.378 2.654-2.831 5.466-2.831 5.847 0 6.92 3.65 6.92 8.395V28h-5.78v-7.682c0-1.833-.035-4.196-2.557-4.196-2.566 0-2.96 1.985-2.96 4.055V28H12V12zm-6.4 0H1.6V28h4V12zM4.8 4a2.4 2.4 0 110 4.8A2.4 2.4 0 014.8 4z" />
                  </svg>
                </Link>
              </li>

              {/* GitHub */}
              <li>
                <Link
                  href="https://github.com/meirunas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                >
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 2C8.28 2 2 8.28 2 16c0 6.16 3.975 11.385 9.475 13.225.693.127.948-.3.948-.668 0-.33-.012-1.204-.019-2.363-3.855.838-4.668-1.858-4.668-1.858-.63-1.6-1.54-2.026-1.54-2.026-1.26-.86.096-.843.096-.843 1.396.099 2.13 1.433 2.13 1.433 1.237 2.12 3.244 1.507 4.037 1.152.126-.896.485-1.507.882-1.854-3.08-.35-6.318-1.54-6.318-6.852 0-1.513.543-2.75 1.432-3.718-.144-.352-.621-1.77.137-3.69 0 0 1.167-.374 3.825 1.42a13.31 13.31 0 013.486-.468c1.183.005 2.376.16 3.486.468 2.655-1.794 3.82-1.42 3.82-1.42.76 1.92.283 3.338.14 3.69.892.968 1.43 2.205 1.43 3.718 0 5.325-3.244 6.497-6.336 6.842.499.428.946 1.27.946 2.563 0 1.85-.018 3.34-.018 3.793 0 .372.25.802.957.665C26.03 27.38 30 22.157 30 16c0-7.72-6.28-14-14-14z" />
                  </svg>
                </Link>
              </li>

              {/* CodePen */}
              <li>
                <Link
                  href="https://codepen.io/meirunas_smitas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodePen"
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                >
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M30 10.7c0-.1 0-.1 0 0 0-.1 0-.1 0 0v-.1c0-.1 0-.2-.1-.3v-.1c0-.1-.1-.2-.2-.2 0-.1-.1-.1-.1-.2l-12-8c-.5-.3-1.1-.3-1.6 0l-12 8c-.1 0-.1.1-.2.2s-.1.2-.1.2c0 .1-.1.2-.1.3v.1c0 .1 0 .1 0 0s0 .1 0 0v10.7c0 .1 0 .1 0 0 0 .1 0 .1 0 0v.1c0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1.1.1.2.2l12 8c.5.3 1.1.3 1.6 0l12-8c.1 0 .1-.1.2-.2s.1-.2.1-.2c0-.1.1-.2.1-.3v-.1c0-.1 0-.1 0 0V10.7zM16 4.5l9.6 6.4-4.3 2.8-5.3-3.5v-5.7zm-2 0v5.7l-5.3 3.5-4.3-2.8L14 4.5zM6.3 13.8L9.1 15.6l-2.8 1.8v-3.6zm9.7 13.7l-9.6-6.4 4.3-2.8 5.3 3.5v5.7zm1-7.3l-4.3-2.8 4.3-2.8 4.3 2.8-4.3 2.8zm1 7.3v-5.7l5.3-3.5 4.3 2.8-9.6 6.4zm10-7.3-2.8-1.8 2.8-1.8v3.6zm-3.4-5.6l-4.3-2.8 4.3-2.8 4.3 2.8-4.3 2.8z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text and glow effect */}
      <div className="relative -mt-16 h-60 w-full -z-10" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:bg-clip-text before:text-transparent before:content-['Frame101'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Frame101'] after:[text-shadow:0_1px_0_white]"></div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px] will-change-[filter]"></div>
        </div>
      </div>
    </footer>
  );
}

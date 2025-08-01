import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <Link
                  href="/"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/frameworks-guide"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Frameworks Guide
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/reviews"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Reviews
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/documentation"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Docs
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

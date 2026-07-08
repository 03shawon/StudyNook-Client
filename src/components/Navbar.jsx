import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-2xl font-black text-white shadow-lg shadow-emerald-200">
              S
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Study<span className="text-emerald-600">Nook</span>
              </h1>
              <p className="hidden text-xs font-medium text-slate-500 sm:block">
                Library Study Room Booking
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/60 px-2 py-2 lg:flex">
            <Link
              href="/"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-emerald-600 hover:shadow-sm"
            >
              Home
            </Link>

            <Link
              href="/rooms"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-emerald-600 hover:shadow-sm"
            >
              Rooms
            </Link>

            <Link
              href="/add-room"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-emerald-600 hover:shadow-sm"
            >
              Add Room
            </Link>

            <Link
              href="/my-listings"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-emerald-600 hover:shadow-sm"
            >
              My Listings
            </Link>

            <Link
              href="/my-bookings"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-emerald-600 hover:shadow-sm"
            >
              My Bookings
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="rounded-full border border-emerald-500 px-6 py-2.5 text-sm font-bold text-emerald-600 transition hover:bg-emerald-50"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:shadow-emerald-300"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Icon - UI Only */}
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-2xl font-bold text-slate-800 lg:hidden">
            ☰
          </div>
        </div>

        {/* Mobile Navigation - Always visible on mobile, UI only */}
        <div className="pb-5 lg:hidden">
          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-emerald-100 bg-white p-4 shadow-lg shadow-emerald-100/60 sm:grid-cols-3">
            <Link
              href="/"
              className="rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:text-emerald-600"
            >
              Home
            </Link>

            <Link
              href="/rooms"
              className="rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:text-emerald-600"
            >
              Rooms
            </Link>

            <Link
              href="/add-room"
              className="rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:text-emerald-600"
            >
              Add Room
            </Link>

            <Link
              href="/my-listings"
              className="rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:text-emerald-600"
            >
              My Listings
            </Link>

            <Link
              href="/my-bookings"
              className="rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:text-emerald-600"
            >
              My Bookings
            </Link>

            <Link
              href="/login"
              className="rounded-2xl border border-emerald-500 px-4 py-3 text-center text-sm font-bold text-emerald-600 transition hover:bg-emerald-50"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="col-span-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 text-center text-sm font-bold text-white shadow-md shadow-emerald-100 sm:col-span-3"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
import AllRoomsCard from "@/components/AllRoomsCard";
import Link from "next/link";

const AllRoomPage = async () => {
  const res = await fetch("http://localhost:5000/rooms", {
    cache: "no-store",
  });

  const rooms = await res.json();

  return (
    <section className="min-h-screen bg-[#0b1120] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-gray-300">
            📚 Browse Study Spaces
          </span>

          <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
            Available{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Study Rooms
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Find quiet, private, and comfortable study rooms for your next
            focused study session.
          </p>
        </div>

        {/* Top Bar */}
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold">All Rooms</h2>
            <p className="mt-1 text-sm text-gray-400">
              {rooms.length} room{rooms.length > 1 ? "s" : ""} available
            </p>
          </div>

          <Link
            href="/add-room"
            className="rounded-xl bg-yellow-400 px-5 py-3 text-center font-bold text-black transition hover:bg-yellow-300"
          >
            Add Room
          </Link>
        </div>

        {/* Rooms */}
        {rooms.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <AllRoomsCard key={room._id} room={room} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400/10 text-4xl">
              📖
            </div>

            <h2 className="text-2xl font-bold">No rooms found</h2>

            <p className="mt-3 text-gray-400">
              There are no study rooms available right now.
            </p>

            <Link
              href="/add-room"
              className="mt-6 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Add First Room
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllRoomPage;
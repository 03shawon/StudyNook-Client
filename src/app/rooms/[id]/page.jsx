import Image from "next/image";
import Link from "next/link";

const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/rooms/${id}`, {
    cache: "no-store",
  });

  const room = await res.json();

  const amenities = room?.amenities || [];

  return (
    <section className="min-h-screen bg-[#0a0a0a] px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/rooms"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#111827] px-5 py-2 text-sm font-medium text-gray-300 transition hover:border-blue-500 hover:text-white"
        >
          ← Back to Rooms
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-gray-700/80 bg-[#111827] shadow-2xl">
            <div className="h-[280px] w-full overflow-hidden sm:h-[380px] lg:h-[520px]">
              <Image
                src={room?.image}
                alt={room?.roomName || "Study Room"}
                className="h-full w-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-gray-700/80 bg-[#111827] p-6 shadow-2xl md:p-8">
            <div className="mb-5 inline-flex rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-400">
              Study Room Details
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              {room?.roomName}
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-400">
              {room?.description}
            </p>

            <div className="mt-6 rounded-2xl border border-blue-500/30 bg-blue-600/10 p-5">
              <p className="text-sm text-gray-400">Hourly Rate</p>
              <h2 className="mt-1 text-3xl font-bold text-blue-400">
                ${room?.hourlyRate}
                <span className="text-base font-medium text-gray-400"> /hr</span>
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-700 bg-[#1f2937] p-4">
                <p className="text-sm text-gray-400">Floor</p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {room?.floor}
                </h3>
              </div>

              <div className="rounded-2xl border border-gray-700 bg-[#1f2937] p-4">
                <p className="text-sm text-gray-400">Capacity</p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {room?.capacity} People
                </h3>
              </div>

              <div className="rounded-2xl border border-gray-700 bg-[#1f2937] p-4">
                <p className="text-sm text-gray-400">Booking Count</p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {room?.bookingCount || 0}
                </h3>
              </div>

              <div className="rounded-2xl border border-gray-700 bg-[#1f2937] p-4">
                <p className="text-sm text-gray-400">Status</p>
                <h3 className="mt-1 text-lg font-semibold text-green-400">
                  Available
                </h3>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="mb-4 text-xl font-bold text-white">Amenities</h2>

              {amenities.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="rounded-full border border-gray-700 bg-[#1f2937] px-4 py-2 text-sm font-medium text-gray-300"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  No amenities listed for this room.
                </p>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="h-14 w-full rounded-2xl bg-blue-600 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500">
                Book Now
              </button>

              <button className="h-14 w-full rounded-2xl border border-gray-600 bg-[#1f2937] text-lg font-semibold text-white transition hover:border-blue-500 hover:bg-[#243244]">
                Edit Room
              </button>
            </div>

            <button className="mt-4 h-14 w-full rounded-2xl bg-red-600 text-lg font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500">
              Delete Room
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-gray-700/80 bg-[#111827] p-6 shadow-2xl md:p-8">
          <h2 className="text-2xl font-bold text-white">
            About This Study Space
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            This room is suitable for focused study sessions, group discussions,
            online classes, exam preparation, and peaceful reading. Please check
            the room capacity, amenities, and hourly rate before booking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailsPage;
import { Button } from "@heroui/react";
import Link from "next/link";

const AllRoomsCard = ({ room }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-yellow-400/10">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-800">
        <img
          src={room?.image}
          alt={room?.roomName}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-black shadow-lg">
          ${room?.hourlyRate}/hr
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-white">
          {room?.roomName}
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          {room?.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
            <p className="text-xs text-gray-500">Floor</p>
            <p className="mt-1 font-semibold text-gray-200">
              {room?.floor}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
            <p className="text-xs text-gray-500">Capacity</p>
            <p className="mt-1 font-semibold text-gray-200">
              {room?.capacity} people
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {room?.amenities?.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-gray-300"
            >
              {amenity}
            </span>
          ))}
        </div>

        <Link
          href={`/rooms/${room._id}`}
          className="mt-6 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllRoomsCard;
import Image from "next/image";
import Link from "next/link";

const AllRoomsCard = ({ rooms }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rooms.map((room) => (
        <div
          key={room._id}
          className="bg-[#1a1a2e] rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all"
        >
          <div className="h-56 w-full">
            <Image
              src={room?.image}
              alt={room?.name || "Room Image"}
              height={500}
              width={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{room.name}</h3>
            <p className="text-gray-400 text-sm mb-4 h-10">
              {room.description.substring(0, 100)}...
            </p>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 mb-4">
              <p>📍 {room.floor}</p>
              <p>👥 {room.capacity} people</p>
              <p className="text-blue-400 font-bold col-span-2 text-lg">
                ${room.hourlyRate}/hr
              </p>
            </div>

            {/* Amenities Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {/* এখানে (room.amenities || []) দিয়ে চেক করে নিচ্ছি যে amenities যদি না-ও থাকে, তবে কোড ক্র্যাশ করবে না */}
              {(room.amenities || []).slice(0, 3).map((item, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-800 text-xs rounded-md"
                >
                  {item}
                </span>
              ))}

              {(room.amenities || []).length > 3 && (
                <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-md">
                  +{(room.amenities || []).length - 3} more
                </span>
              )}
            </div>

            <Link
              href={`/rooms/${room._id}`}
              className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllRoomsCard;

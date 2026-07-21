import AllRoomsCard from "@/components/AllRoomsCard";
import { allRooms } from "@/lib/rooms/data";

const AllRoomsPage = async ({ searchParams }) => {
  const query = await searchParams;
  const search = query?.search || "";
  
  const rooms = await allRooms(search);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Available Study Rooms</h1>
          
          <form className="max-w-md mx-auto">
            <input
              type="text"
              name="search"
              defaultValue={search}
              placeholder="Search by room name..."
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a2e] border border-gray-700 focus:outline-none focus:border-blue-500 transition-all"
            />
          </form>
        </div>

        {rooms.length > 0 ? (
          <AllRoomsCard rooms={rooms} />
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-2xl">No rooms found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRoomsPage;
import RoomDetailsCard from "@/components/RoomDetailsCard";
import { singleRoom } from "@/lib/rooms/data";

const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;
  const room = await singleRoom({ id });

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <RoomDetailsCard room={room} />
      </div>
    </div>
  );
};

export default RoomDetailsPage;
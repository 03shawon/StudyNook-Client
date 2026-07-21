import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import EditRoomForm from "@/components/EditRoomForm";

const EditRoomPage = async ({ params }) => {
  const { id } = await params;


  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`, {
    cache: "no-store",
  });
  const room = await res.json();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-10 px-4 sm:px-6">
      <div className="w-full lg:w-[70%] mx-auto">
        <div className="mb-6">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors bg-[#1a1a2e] px-4 py-2.5 rounded-xl border border-gray-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Details</span>
          </Link>
        </div>

        <EditRoomForm room={room} />
      </div>
    </div>
  );
};

export default EditRoomPage;

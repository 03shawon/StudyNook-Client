import AddRoomForm from "@/components/AddRoomForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const AddRoomPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors bg-[#1a1a2e] px-4 py-2.5 rounded-xl border border-gray-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Rooms</span>
          </Link>
        </div>

        <AddRoomForm />
      </div>
    </div>
  );
};

export default AddRoomPage;
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Flame, 
  Building2, 
  MapPin, 
  Users, 
  FileText, 
  Check, 
  Sparkles, 
  Pencil 
} from 'lucide-react';
import { Button } from '@heroui/react';
import DeleteProductModal from './DeleteProductModal';
import BookingRoomModal from './BookingRoomModal';

const RoomDetailsCard = ({ room }) => {
  const roomId = room?._id || room?.id;

  return (
    <div className="bg-[#1a1a2e] rounded-3xl border border-gray-800/80 overflow-hidden shadow-2xl transition-all">
      
      <div className="relative h-64 md:h-80 w-full bg-gray-900">
        {room?.image ? (
          <Image
            src={room.image}
            alt={room?.name || 'Room Image'}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 gap-2">
            <Building2 className="w-10 h-10 text-gray-600" />
            <p className="text-xs font-medium">No Image Available</p>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-black/60"></div>

        <div className="absolute top-5 left-5 flex flex-wrap gap-2.5 z-10">
          <div className="bg-blue-600/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-blue-400/30 shadow-lg flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-300" />
            <span>{room?.bookingCount || 0} Total Bookings</span>
          </div>
          <div className="bg-emerald-500/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-emerald-400/30 shadow-lg flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-emerald-100" />
            <span>Floor {room?.floor || 'N/A'}</span>
          </div>
        </div>

        <Link
          href="/rooms"
          className="absolute top-5 right-5 z-10 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-medium px-3.5 py-2 rounded-xl border border-white/10 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Rooms</span>
        </Link>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-800/80">
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-2">
              {room?.name || 'Untitled Room'}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 font-medium">
              <span className="flex items-center gap-1.5 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                {room?.location || 'Main Campus Library'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <Users className="w-4 h-4 text-blue-400" />
                Capacity: {room?.capacity || '1-4'} People
              </span>
            </div>
          </div>

          <div className="bg-[#0f172a] px-5 py-3 rounded-2xl border border-gray-800/80 flex items-center gap-3 self-start lg:self-auto shadow-inner">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Hourly Rate</p>
              <p className="text-2xl font-black text-blue-400">
                ${room?.hourlyRate || 0}
                <span className="text-xs font-normal text-gray-400">/hr</span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-200 mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>About This Space</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm font-normal">
            {room?.description || 'No detailed description available for this study room.'}
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-200 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Amenities & Features</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {room?.amenities && room.amenities.length > 0 ? (
              room.amenities.map((item, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 bg-[#0f172a] border border-gray-800 hover:border-gray-700 text-gray-300 rounded-xl text-xs font-medium tracking-wide flex items-center gap-1.5 transition-all"
                >
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  {item}
                </span>
              ))
            ) : (
              <p className="text-gray-500 text-xs">No amenities listed.</p>
            )}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          
        <BookingRoomModal room={room}></BookingRoomModal>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link 
              href={`/rooms/${roomId}/edit`}
              className="flex-1 sm:flex-initial"
            >
              <Button
                className="w-full px-5 py-3.5 bg-[#0f172a] hover:bg-gray-800/90 text-gray-200 hover:text-white font-semibold text-sm rounded-2xl border border-gray-800/90 transition-all flex items-center justify-center gap-2"
              >
                <Pencil className="w-4 h-4 text-amber-400" />
                <span>Edit Room</span>
              </Button>
            </Link>

            <DeleteProductModal id={room?._id} roomName={room?.name} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default RoomDetailsCard;
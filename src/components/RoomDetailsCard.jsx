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
  Pencil, 
  Trash2 
} from 'lucide-react';
import { Button } from '@heroui/react';
import EditRoomPage from '@/app/rooms/[id]/edit/page';

const RoomDetailsCard = ({ room }) => {
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

        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-black/50"></div>

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
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-800">
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

        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <Button
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-blue-600/25 active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book Now</span>
          </Button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
           <Link 
           href={`/rooms/${room?._id || room?.id}/edit`}>
            <Button
              className="flex-1 sm:flex-initial px-5 py-3.5 bg-gray-800/80 hover:bg-gray-700 text-white font-semibold text-sm rounded-2xl border border-gray-700/80 transition-all flex items-center justify-center gap-2"
             
            >
              <Pencil className="w-4 h-4 text-gray-300" />
              <span>Edit Room</span>
            </Button>
           </Link>
            <Button
              className="flex-1 sm:flex-initial px-5 py-3.5 bg-rose-500/10 hover:bg-rose-600/20 border border-rose-500/30 text-rose-400 hover:text-rose-300 font-semibold text-sm rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4 text-rose-400" />
              <span>Delete</span>
            </Button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default RoomDetailsCard;








// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// const RoomDetailsCard = ({ room, currentUser }) => {
//   const router = useRouter();
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);

//   // চেক করা ইউজার লগইন আছে কি না এবং ইউজার ওনার কি না
//   const isLoggedIn = !!currentUser;
//   const isOwner = currentUser?.email === room?.ownerEmail;

//   // Book Now বাটনের ক্লিক হ্যান্ডলার
//   const handleBookingClick = () => {
//     if (!isLoggedIn) {
//       router.push('/login');
//     } else {
//       setIsBookingModalOpen(true);
//     }
//   };

//   // রুম ডিলেট করার কাজ
//   const handleDeleteRoom = async () => {
//     setIsDeleting(true);
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || ''}/rooms/${room?._id}`, {
//         method: 'DELETE',
//       });
//       if (res.ok) {
//         router.push('/rooms');
//       }
//     } catch (error) {
//       console.error('Failed to delete room:', error);
//     } finally {
//       setIsDeleting(false);
//       setIsDeleteModalOpen(false);
//     }
//   };

//   return (
//     <div className="bg-[#1a1a2e] rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
//       {/* Top Banner Image & Badges */}
//       <div className="relative h-80 md:h-[420px] w-full">
//         {room?.image ? (
//           <Image
//             src={room.image}
//             alt={room?.name || 'Room Image'}
//             fill
//             priority
//             className="object-cover"
//           />
//         ) : (
//           <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">
//             No Image Available
//           </div>
//         )}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-black/40"></div>

//         {/* Top Floating Badges */}
//         <div className="absolute top-6 left-6 flex flex-wrap gap-3">
//           <span className="bg-blue-600/90 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full border border-blue-400/30 shadow-lg">
//             🔥 {room?.bookingCount || 0} Total Bookings
//           </span>
//           <span className="bg-emerald-500/90 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full border border-emerald-400/30 shadow-lg">
//             Floor: {room?.floor || 'N/A'}
//           </span>
//         </div>

//         {/* Back Button */}
//         <Link
//           href="/rooms"
//           className="absolute top-6 right-6 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white text-sm px-4 py-2 rounded-xl border border-white/10 transition-all"
//         >
//           ← Back to Rooms
//         </Link>
//       </div>

//       {/* Main Content Details */}
//       <div className="p-6 md:p-10">
//         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-gray-800">
//           <div>
//             <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
//               {room?.name}
//             </h1>
//             <p className="text-gray-400 text-sm md:text-base flex items-center gap-2">
//               <span>📍 {room?.location || 'Library Study Zone'}</span> •{' '}
//               <span>👥 Capacity: {room?.capacity || '1-2'} People</span>
//             </p>
//           </div>

//           <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl border border-gray-800">
//             <div>
//               <p className="text-xs text-gray-400 font-medium">Hourly Rate</p>
//               <p className="text-3xl font-black text-blue-400">
//                 ${room?.hourlyRate}
//                 <span className="text-sm font-normal text-gray-400">/hr</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Description Section */}
//         <div className="mb-8">
//           <h2 className="text-xl font-bold mb-3 text-gray-200">About This Room</h2>
//           <p className="text-gray-300 leading-relaxed text-base">
//             {room?.description}
//           </p>
//         </div>

//         {/* Amenities Section */}
//         <div className="mb-10">
//           <h2 className="text-xl font-bold mb-4 text-gray-200">Amenities & Features</h2>
//           <div className="flex flex-wrap gap-3">
//             {room?.amenities && room.amenities.length > 0 ? (
//               room.amenities.map((item, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 bg-[#0f172a] border border-gray-800 text-gray-300 rounded-xl text-sm font-medium flex items-center gap-2"
//                 >
//                   ✨ {item}
//                 </span>
//               ))
//             ) : (
//               <p className="text-gray-500 text-sm">No specific amenities listed.</p>
//             )}
//           </div>
//         </div>

//         {/* Action Controls Section */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-800">
//           {/* Main Booking Action Button */}
//           <Button
//             onClick={handleBookingClick}
//             className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-2xl transition-all shadow-lg shadow-blue-600/30 active:scale-95 flex items-center justify-center gap-2"
//           >
//             {isLoggedIn ? '⚡ Book Now' : '🔐 Login to Book'}
//           </Button>

//           {/* Owner Only Controls (Edit & Delete) */}
//           {isOwner && (
//             <div className="flex items-center gap-3 w-full sm:w-auto">
//               <Link
//                 href={`/rooms/${room?._id}/edit`}
//                 className="flex-1 sm:flex-initial px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-2xl border border-gray-700 transition-all text-center"
//               >
//                 ✏️ Edit Room
//               </Link>
//               <Button
//                 onClick={() => setIsDeleteModalOpen(true)}
//                 className="flex-1 sm:flex-initial px-6 py-4 bg-rose-600/20 hover:bg-rose-600 border border-rose-500/30 text-rose-400 hover:text-white font-semibold rounded-2xl transition-all"
//               >
//                 🗑️ Delete
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ----------------- MODALS ----------------- */}

//       {/* Delete Confirmation Modal */}
//       {isDeleteModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
//           <div className="bg-[#1a1a2e] border border-gray-800 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl text-center">
//             <h3 className="text-2xl font-bold text-white mb-2">Are you sure?</h3>
//             <p className="text-gray-400 text-sm mb-6">
//               This action cannot be undone. This will permanently delete <strong className="text-white">"{room?.name}"</strong>.
//             </p>
//             <div className="flex items-center gap-4">
//               <Button
//                 onClick={() => setIsDeleteModalOpen(false)}
//                 className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-all"
//               >
//                 Cancel
//               </Button>
//               <Button
//                 onClick={handleDeleteRoom}
//                 disabled={isDeleting}
//                 className="flex-1 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold transition-all disabled:opacity-50"
//               >
//                 {isDeleting ? 'Deleting...' : 'Yes, Delete'}
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Booking Form Modal */}
//       {isBookingModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
//           <div className="bg-[#1a1a2e] border border-gray-800 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-2xl font-bold text-white">Book {room?.name}</h3>
//               <Button
//                 onClick={() => setIsBookingModalOpen(false)}
//                 className="text-gray-400 hover:text-white text-xl"
//               >
//                 ✕
//               </Button>
//             </div>
            
//             <form onSubmit={(e) => { e.preventDefault(); alert("Booking request submitted!"); setIsBookingModalOpen(false); }}>
//               <div className="space-y-4 mb-6">
//                 <div>
//                   <label className="block text-xs font-semibold text-gray-400 mb-2">Booking Date</label>
//                   <input type="date" className="w-full bg-[#0f172a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" required />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold text-gray-400 mb-2">Duration (Hours)</label>
//                   <input type="number" min="1" defaultValue="1" className="w-full bg-[#0f172a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" required />
//                 </div>
//               </div>
//               <Button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/30">
//                 Confirm Booking (${room?.hourlyRate})
//               </Button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoomDetailsCard;
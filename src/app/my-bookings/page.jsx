"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { Loader2, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";

const MyBookingPage = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyBookings = async () => {
      if (!user?.id) return;
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`
        );
        const data = await res.json();

        if (res.ok) {
          setBookings(Array.isArray(data) ? data : []);
        } else {
          toast.error("Failed to load bookings");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        toast.error("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchMyBookings();
    }
  }, [user?.id]);

  const handleCancel = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`,
        {
          method: "PATCH",
        }
      );
      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Booking cancelled successfully!");
        
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === id ? { ...booking, status: "cancelled" } : booking
          )
        );
      } else {
        toast.error("Could not cancel booking!");
      }
    } catch (error) {
      console.error("Cancel Error:", error);
      toast.error("Something went wrong!");
    }
  };

  if (loading || isPending) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className=" bg-blue-950 max-w-6xl mx-auto px-4 py-8 text-white min-h-[70vh]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-amber-500">My Bookings</h1>
        <span className="text-sm text-gray-400">
          Total: {bookings.length}{" "}
          {bookings.length === 1 ? "Booking" : "Bookings"}
        </span>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-16 bg-[#1a1a2e] rounded-2xl border border-gray-800">
          <Calendar className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <p className="text-gray-400 text-lg">You have no bookings yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-[#1a1a2e] border border-gray-800 rounded-2xl shadow-xl">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-[#0f172a] text-gray-400 uppercase text-xs border-b border-gray-800">
              <tr>
                <th className="px-6 py-4">Room</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Total Cost</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {bookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="hover:bg-gray-900/50 transition-colors"
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 border border-gray-700">
                      <Image
                        src={
                          booking.roomImage ||
                          booking.roomId?.image ||
                          "/placeholder.jpg"
                        }
                        alt="Room Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <Link
                        href={`/rooms/${booking.roomId?._id || booking.roomId}`}
                        className="inline-block"
                      >
                        <p className="font-semibold text-white hover:text-blue-400 hover:underline transition-colors">
                          {booking.roomName ||
                            booking.roomId?.name ||
                            "Study Room"}
                        </p>
                      </Link>
                      {booking.durationHours && (
                        <p className="text-xs text-gray-400">
                          Duration: {booking.durationHours} hrs
                        </p>
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-white flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {booking.date}
                    </p>
                    <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {booking.startTime} - {booking.endTime}
                    </p>
                  </td>

                  <td className="px-6 py-4 text-emerald-400 font-bold text-base">
                    ${booking.totalCost}
                  </td>

                  <td className="px-6 py-4">
                    {booking.status === "cancelled" ? (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                        Cancelled
                      </span>
                    ) : (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Confirmed
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <Button
                      disabled={booking.status === "cancelled"}
                      onClick={() => handleCancel(booking._id)}
                      className={`px-3 py-1.5 rounded-xl font-medium text-xs transition-all ${
                        booking.status === "cancelled"
                          ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                          : "bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white cursor-pointer"
                      }`}
                    >
                      {booking.status === "cancelled" ? "Cancelled" : "Cancel"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookingPage;
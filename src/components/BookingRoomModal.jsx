
"use client";

import React, { useState, useMemo } from "react";
import { Button, Modal } from "@heroui/react";
import {
  Sparkles,
  Calendar as CalendarIcon,
  Clock,
  FileText,
  DollarSign,
  CheckCircle2,
} from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

const TIME_SLOTS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

const BookingRoomModal = ({ room }) => {
  const hourlyRate =
    room?.hourlyRate || room?.pricePerHour || room?.price || 15;
  const { data: session } = useSession();
  const user = session?.user;

  const todayStr = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(todayStr);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const [specialNote, setSpecialNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const startHourNum = parseInt(startTime.split(":")[0], 10);

  const availableEndTimes = useMemo(() => {
    return TIME_SLOTS.filter((slot) => {
      const hour = parseInt(slot.split(":")[0], 10);
      return hour > startHourNum;
    });
  }, [startHourNum]);

  const handleStartTimeChange = (e) => {
    const selectedStart = e.target.value;
    setStartTime(selectedStart);
    const newStartHour = parseInt(selectedStart.split(":")[0], 10);
    const currentEndHour = parseInt(endTime.split(":")[0], 10);

    if (currentEndHour <= newStartHour) {
      const nextHour = String(newStartHour + 1).padStart(2, "0") + ":00";
      setEndTime(nextHour);
    }
  };

  const endHourNum = parseInt(endTime.split(":")[0], 10);
  const durationHours = useMemo(() => {
    return endHourNum > startHourNum ? endHourNum - startHourNum : 0;
  }, [startHourNum, endHourNum]);

  const totalCost = durationHours * hourlyRate;

  const handleBooking = async () => {
    if (!user) {
      toast.error("Please login to book a room!");
      return;
    }

    if (!date || !startTime || !endTime) {
      toast.error("Please select a date and time slot!");
      return;
    }

    if (durationHours < 1) {
      toast.error("Minimum booking duration is 1 hour!");
      return;
    }

    setIsLoading(true);

    try {
      const bookingData = {
        userId: user?.id,
        userName: user?.name,
        userEmail: user?.email,
        userImage: user?.image,

        roomId: room?._id,
        roomName: room?.name ,
        roomImage: room?.image,
        roomRate: hourlyRate,
        roomCapacity: room?.capacity,
        roomFloor: room?.floor,

        date,
        startTime,
        endTime,
        durationHours,
        totalCost,
        specialNote,
        status: "confirmed",
      };

      console.log("Submitting Booking Data:", bookingData);


      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to book room or slot unavailable!");
        return;
      }

      toast.success("Room booked successfully!");
      setSpecialNote("");
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error(error.message || "Failed to book room!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal>
      <Button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-blue-600/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
        <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
        <span>Book Now</span>
      </Button>

      <Modal.Backdrop className="bg-black/70 backdrop-blur-sm">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[480px] bg-[#1a1a2e] border border-gray-800 shadow-2xl rounded-3xl p-6 text-white">
            <Modal.CloseTrigger className="text-gray-400 hover:text-white transition-colors" />

            <Modal.Header className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Direct Reservation
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Book {room?.name || room?.title || "Study Room"}
              </h3>
              <p className="text-xs text-gray-400 font-normal">
                Hourly Rate:{" "}
                <span className="text-emerald-400 font-semibold">
                  ${hourlyRate}/hr
                </span>
              </p>
            </Modal.Header>

            <Modal.Body className="py-4 space-y-4">
              {/* Date Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-300 flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-blue-400" /> Select
                  Date
                </label>
                <input
                  type="date"
                  min={todayStr}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-gray-900/80 border border-gray-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" /> Start Time
                  </label>
                  <select
                    value={startTime}
                    onChange={handleStartTimeChange}
                    className="w-full bg-gray-900/80 border border-gray-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    {TIME_SLOTS.slice(0, -1).map((slot) => (
                      <option key={slot} value={slot} className="bg-[#1a1a2e]">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" /> End Time
                  </label>
                  <select
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full bg-gray-900/80 border border-gray-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    {availableEndTimes.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#1a1a2e]">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-950/30 border border-blue-500/20 flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />{" "}
                    Total Cost Summary
                  </p>
                  <p className="text-xs text-blue-300">
                    ${hourlyRate} × {durationHours}{" "}
                    {durationHours === 1 ? "hour" : "hours"}
                  </p>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-emerald-400">
                    ${totalCost}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-gray-400" /> Special
                  Note (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  placeholder="Any specific instructions..."
                  className="w-full bg-gray-900/80 border border-gray-700 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
            </Modal.Body>

            <Modal.Footer className="pt-3 flex items-center gap-3">
              <Button
                slot="close"
                className="flex-1 py-3 bg-[#0f172a] hover:bg-gray-800 text-gray-300 font-semibold text-sm rounded-xl border border-gray-800 transition-colors cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                slot="close"
                disabled={isLoading}
                onClick={handleBooking}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm (${totalCost})</span>
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingRoomModal;

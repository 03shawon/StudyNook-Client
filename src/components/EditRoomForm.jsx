"use client";

import { Input, Button } from "@heroui/react";
import {
  Building2,
  FileText,
  ImageIcon,
  Layers,
  Users,
  DollarSign,
  Pencil,
  Save,
} from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const EditRoomForm = ({ room }) => {
    const router = useRouter();
  const amenityOptions = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  const currentAmenities = room?.amenities || [];

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    const amenities = form.getAll("amenities");

    // console.log(form);

   const updatedRoomData = {
    name: formData.name,
    image: formData.image,
    floor: formData.floor,
    capacity: Number(formData.capacity) || 0,    
    hourlyRate: Number(formData.hourlyRate) || 0, 
    description: formData.description,
    amenities: amenities,
  };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${room?._id}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(updatedRoomData)
    })

    if(res.ok){
        toast.success("Room data updated succful")
        e.target.reset();
        router.push('/rooms')
    }
    else{
        toast.error("Room data update fail")
    }
  };

  return (
    <div className="bg-[#1a1a2e] border border-gray-800/80 shadow-2xl p-6 md:p-10 rounded-3xl">
      <div className="flex flex-col items-start gap-1 pb-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
          <Pencil className="w-3.5 h-3.5" />
          <span>Edit Mode</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          Update Room Details
        </h1>
        <p className="text-gray-400 text-sm">
          Modify the information below to update this study room space.
        </p>
      </div>

      <div className="w-full h-[1px] bg-gray-800/80 my-5" />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-gray-300 font-semibold text-xs uppercase tracking-wider">
            Room Name <span className="text-rose-500">*</span>
          </label>
          <Input
            isRequired
            type="text"
            name="name"
            placeholder="e.g. Quiet Corner Study Pod A"
            defaultValue={room?.name}
            variant="bordered"
            startContent={<Building2 className="w-4 h-4 text-gray-400" />}
            classNames={{
              inputWrapper:
                "bg-[#0f172a] border-gray-800 hover:border-gray-700 focus-within:!border-blue-500 rounded-xl py-3",
              input: "text-white placeholder:text-gray-500 text-sm",
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 font-semibold text-xs uppercase tracking-wider">
              Image URL
            </label>
            <Input
              type="url"
              name="image"
              placeholder="https://images.unsplash.com/..."
              defaultValue={room?.image}
              variant="bordered"
              startContent={<ImageIcon className="w-4 h-4 text-gray-400" />}
              classNames={{
                inputWrapper:
                  "bg-[#0f172a] border-gray-800 hover:border-gray-700 focus-within:!border-blue-500 rounded-xl py-3",
                input: "text-white placeholder:text-gray-500 text-sm",
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 font-semibold text-xs uppercase tracking-wider">
              Floor
            </label>
            <Input
              type="text"
              name="floor"
              placeholder="e.g. 3rd Floor"
              defaultValue={room?.floor}
              variant="bordered"
              startContent={<Layers className="w-4 h-4 text-gray-400" />}
              classNames={{
                inputWrapper:
                  "bg-[#0f172a] border-gray-800 hover:border-gray-700 focus-within:!border-blue-500 rounded-xl py-3",
                input: "text-white placeholder:text-gray-500 text-sm",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 font-semibold text-xs uppercase tracking-wider">
              Capacity (People)
            </label>
            <Input
              type="number"
              name="capacity"
              min={1}
              placeholder="e.g. 4"
              defaultValue={room?.capacity}
              variant="bordered"
              startContent={<Users className="w-4 h-4 text-gray-400" />}
              classNames={{
                inputWrapper:
                  "bg-[#0f172a] border-gray-800 hover:border-gray-700 focus-within:!border-blue-500 rounded-xl py-3",
                input: "text-white placeholder:text-gray-500 text-sm",
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 font-semibold text-xs uppercase tracking-wider">
              Hourly Rate ($ USD)
            </label>
            <Input
              type="number"
              name="hourlyRate"
              min={0}
              step={0.01}
              placeholder="e.g. 5"
              defaultValue={room?.hourlyRate}
              variant="bordered"
              startContent={<DollarSign className="w-4 h-4 text-gray-400" />}
              classNames={{
                inputWrapper:
                  "bg-[#0f172a] border-gray-800 hover:border-gray-700 focus-within:!border-blue-500 rounded-xl py-3",
                input: "text-white placeholder:text-gray-500 text-sm",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-300 font-semibold text-xs uppercase tracking-wider">
            Description <span className="text-rose-500">*</span>
          </label>
          <div className="relative flex items-start bg-[#0f172a] border border-gray-800 hover:border-gray-700 focus-within:!border-blue-500 rounded-xl p-3.5 transition-colors">
            <FileText className="w-4 h-4 text-gray-400 mt-0.5 mr-2.5 shrink-0" />
            <textarea
              required
              name="description"
              rows={4}
              placeholder="Describe the room ambiance, features, rules, etc."
              defaultValue={room?.description}
              className="w-full bg-transparent text-white placeholder:text-gray-500 text-sm focus:outline-none resize-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-300 font-semibold text-xs uppercase tracking-wider">
            Amenities
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {amenityOptions.map((item) => {
              const isChecked = currentAmenities.includes(item);
              return (
                <label
                  key={item}
                  className="relative flex items-center gap-3 bg-[#0f172a] border border-gray-800 hover:border-blue-500/50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500/10 p-3.5 rounded-xl cursor-pointer transition-all group"
                >
                  <input
                    type="checkbox"
                    name="amenities"
                    value={item}
                    defaultChecked={isChecked}
                    className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900 cursor-pointer accent-blue-600"
                  />
                  <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="pt-3">
          <Button
            type="submit"
            size="lg"
            startContent={<Save className="w-5 h-5" />}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-sm rounded-2xl shadow-lg shadow-amber-500/20 active:scale-95 py-6"
          >
            Update Room
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditRoomForm;

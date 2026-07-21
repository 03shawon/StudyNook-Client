'use client';

import { Button } from '@heroui/react';
import { 
  Building2, 
  FileText, 
  ImageIcon, 
  Layers, 
  Users, 
  DollarSign, 
  Sparkles, 
  PlusCircle 
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const AddRoomForm = () => {
    const router = useRouter();
  const amenityOptions = [
    'Whiteboard',
    'Projector',
    'Wi-Fi',
    'Power Outlets',
    'Quiet Zone',
    'Air Conditioning',
  ];





  const handleSubmit = async(e) =>{
    e.preventDefault();
    const form =  new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    const amenities = form.getAll('amenities');
    // console.log(formData)

    const roomData = {
    ...formData,
    hourlyRate: Number(formData.hourlyRate),
    capacity: Number(formData.capacity),
    amenities: amenities, 
  };
  // console.log(roomData)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(roomData)
    })
    if(res.ok){
        toast.success("Room added Successfully")
        e.target.reset();
        router.push('/rooms')
    }
    else{
        toast.error("Failed to add room !!")
    }
  }

  return (
    <div className="bg-[#1a1a2e] rounded-3xl border border-gray-800/80 p-6 md:p-10 shadow-2xl">
      
      <div className="mb-8 border-b border-gray-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>New Space</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          Add a New Study Room
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Fill in the room details below to create a new study space listing.
        </p>
      </div>

      <form 
      onSubmit={handleSubmit}
      className="space-y-6">
        
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
            Room Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Quiet Corner Study Pod A"
              className="w-full bg-[#0f172a] border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
              Image URL
            </label>
            <div className="relative">
              <ImageIcon className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                name="image"
                placeholder="https://images.unsplash.com/..."
                className="w-full bg-[#0f172a] border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
              Floor
            </label>
            <div className="relative">
              <Layers className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="floor"
                placeholder="e.g. 3rd Floor"
                className="w-full bg-[#0f172a] border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
              Capacity (People)
            </label>
            <div className="relative">
              <Users className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="number"
                name="capacity"
                min="1"
                placeholder="e.g. 4"
                className="w-full bg-[#0f172a] border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
              Hourly Rate ($ USD)
            </label>
            <div className="relative">
              <DollarSign className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="number"
                name="hourlyRate"
                min="0"
                step="0.01"
                placeholder="e.g. 5"
                className="w-full bg-[#0f172a] border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
            Description <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <FileText className="w-5 h-5 text-gray-500 absolute left-4 top-4" />
            <textarea
              name="description"
              required
              rows="4"
              placeholder="Describe the room ambiance, features, rules, etc."
              className="w-full bg-[#0f172a] border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            ></textarea>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3">
            Amenities
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {amenityOptions.map((item, index) => (
              <label
                key={index}
                className="flex items-center gap-3 bg-[#0f172a] border border-gray-800 hover:border-gray-700 p-3.5 rounded-xl cursor-pointer group transition-all"
              >
                <input
                  type="checkbox"
                  name="amenities"
                  value={item}
                  className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900 cursor-pointer"
                />
                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-blue-600/25 active:scale-95 flex items-center justify-center gap-2"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Add Room</span>
          </Button>
        </div>

      </form>
    </div>
  );
};

export default AddRoomForm;
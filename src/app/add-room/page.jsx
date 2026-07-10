"use client";

import { useState } from "react";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Form,
  Input,
  TextArea,
  Textarea,
} from "@heroui/react";
import { toast } from "react-hot-toast";

const AddRoomPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [amenities, setAmenities] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Room added successfully!");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">
            Add Your Study Room
          </h1>
          <p className="text-gray-400 text-lg">
            Share your space and help students find their perfect study sanctuary
          </p>
        </div>

        <div className="bg-[#111827] border border-gray-700/80 rounded-3xl p-8 md:p-12 shadow-2xl">
          <Form onSubmit={handleSubmit} className="space-y-8">
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Room Name
              </label>
              <Input
                name="roomName"
                isRequired
                placeholder="Free Zone Hangout"
                className="w-full bg-[#1f2937] border border-gray-600 focus:border-blue-500 text-white placeholder:text-gray-500 rounded-2xl"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Description
              </label>
              <TextArea
                name="description"
                isRequired
                minRows={6}
                placeholder="Describe the room environment, lighting, seating arrangement, rules, and why students will love it..."
                className="w-full bg-[#1f2937] border-2 border-gray-600 focus:border-blue-500 text-white placeholder:text-gray-500 rounded-2xl"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Image URL
              </label>
              <Input
                name="image"
                isRequired
                type="url"
                placeholder="https://example.com/room-image.jpg"
                className="w-full bg-[#1f2937] border border-gray-600 focus:border-blue-500 text-white placeholder:text-gray-500 rounded-2xl"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Floor</label>
                <Input
                  name="floor"
                  isRequired
                  placeholder="3rd Floor"
                  className="w-full bg-[#1f2937] border border-gray-600 focus:border-blue-500 text-white rounded-2xl"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Capacity</label>
                <Input
                  name="capacity"
                  isRequired
                  type="number"
                  placeholder="4"
                  className="w-full bg-[#1f2937] border border-gray-600 focus:border-blue-500 text-white rounded-2xl"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Hourly Rate ($)</label>
                <Input
                  name="hourlyRate"
                  isRequired
                  type="number"
                  placeholder="5"
                  className="w-full bg-[#1f2937] border border-gray-600 focus:border-blue-500 text-white rounded-2xl"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-4 text-gray-300">
                Amenities
              </label>
              <CheckboxGroup
                value={amenities}
                onChange={setAmenities}
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                {[
                  "Whiteboard",
                  "Projector",
                  "Wi-Fi",
                  "Power Outlets",
                  "Quiet Zone",
                  "Air Conditioning",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#1f2937] border border-gray-600 hover:border-gray-400 rounded-2xl p-4 transition-colors"
                  >
                    <Checkbox value={item} className="text-white">
                      {item}
                    </Checkbox>
                  </div>
                ))}
              </CheckboxGroup>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg rounded-2xl mt-6 shadow-lg shadow-blue-600/30 transition-all"
            >
              {isSubmitting ? "Publishing Room..." : "Publish Room"}
            </Button>
            <Button variant="danger-soft" type="reset" className="w-full h-14 bg-red-600 hover:bg-red-500 text-white font-semibold text-lg rounded-2xl mt-6 shadow-lg shadow-red-600/30 transition-all">
              Reset
            </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddRoomPage;
"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";

const DeleteProductModal = ({ id, roomName }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`,
        {
          method: "DELETE",
        },
      );

      if (res.ok) {
        toast.success("Room Deleted Successfully");
        router.push("/rooms");
        router.refresh();
      } else {
        toast.error("Failed to delete room !!");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <AlertDialog>
      <Button className="w-full sm:w-auto px-5 py-3.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 font-semibold text-sm rounded-2xl border border-rose-500/20 hover:border-rose-500/40 transition-all flex items-center justify-center gap-2">
        <Trash2 className="w-4 h-4 text-rose-400" />
        <span>Delete</span>
      </Button>

      <AlertDialog.Backdrop className="bg-black/70 backdrop-blur-sm">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[420px] bg-[#1a1a2e] border border-gray-800 shadow-2xl rounded-3xl p-6 text-white">
            <AlertDialog.CloseTrigger className="text-gray-400 hover:text-white transition-colors" />

            <AlertDialog.Header className="flex flex-col gap-2">
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-xl font-bold text-white tracking-tight">
                Delete room permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body className="py-2">
              <p className="text-gray-300 text-sm leading-relaxed">
                This will permanently delete{" "}
                <strong className="text-white font-semibold">
                  {roomName || "this room"}
                </strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="pt-4 flex items-center gap-3">
              <Button
                slot="close"
                className="flex-1 py-3 bg-[#0f172a] hover:bg-gray-800 text-gray-300 font-semibold text-sm rounded-xl border border-gray-800 transition-colors"
              >
                Cancel
              </Button>
              <Button
                slot="close"
                onClick={handleDelete}
                className="flex-1 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-rose-600/25 transition-all"
              >
                Delete Room
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteProductModal;

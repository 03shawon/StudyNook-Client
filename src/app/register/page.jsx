"use client";

import Link from "next/link";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Sparkles } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; 
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const RegisterPage = () => {
    const handleSubmit =async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries());
        // console.log(user)
        const {data, error} = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image
        })
       if (error) {
        toast.error(error.message || "Signup failed");
        return;
    }

    if (data) {
        toast.success("Registration successful! Please login.");
        e.target.reset();
        redirect('/')
    }
    }
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 md:p-8">
      <Card className="bg-[#1a1a2e] border border-gray-800/80 shadow-2xl p-6 md:p-10 rounded-3xl w-full max-w-md text-white">
        
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join StudyNook</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Create an Account
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Enter your details to get started with study rooms.
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          
          <TextField isRequired name="name" type="text">
            <Label className="text-gray-300 font-semibold text-xs uppercase tracking-wider mb-1 block">Full Name</Label>
            <Input placeholder="John Doe" className="bg-[#0f172a] text-white border-gray-800 rounded-xl py-2 px-3" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-300 font-semibold text-xs uppercase tracking-wider mb-1 block">Email</Label>
            <Input placeholder="john@example.com" className="bg-[#0f172a] text-white border-gray-800 rounded-xl py-2 px-3" />
            <FieldError />
          </TextField>

          <TextField isRequired name="photoURL" type="url">
            <Label className="text-gray-300 font-semibold text-xs uppercase tracking-wider mb-1 block">Photo URL</Label>
            <Input placeholder="https://example.com/photo.jpg" className="bg-[#0f172a] text-white border-gray-800 rounded-xl py-2 px-3" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              return null;
            }}
          >
            <Label className="text-gray-300 font-semibold text-xs uppercase tracking-wider mb-1 block">Password</Label>
            <Input placeholder="••••••••" className="bg-[#0f172a] text-white border-gray-800 rounded-xl py-2 px-3" />
            <Description className="text-[11px] text-gray-500 mt-1">
              Must be at least 6 characters with 1 uppercase and 1 lowercase letter.
            </Description>
            <FieldError />
          </TextField>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-2xl shadow-lg shadow-blue-600/30 py-4 mt-2 transition-all cursor-pointer"
          >
            Register
          </Button>
        </Form>

        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-gray-800"></div>
          <span className="px-3 text-gray-500 text-xs uppercase tracking-wider">Or</span>
          <div className="flex-grow border-t border-gray-800"></div>
        </div>

        <Button
          type="button"
          className="w-full bg-[#0f172a] hover:bg-gray-800 text-white font-semibold text-sm rounded-2xl border border-gray-800 transition-all flex items-center justify-center gap-3 py-4 cursor-pointer"
        >
          <FcGoogle className="w-5 h-5" />
          <span>Continue with Google</span>
        </Button>

        <div className="text-center mt-5">
          <p className="text-gray-400 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4">
              Login
            </Link>
          </p>
        </div>

      </Card>
    </div>
  );
};

export default RegisterPage;
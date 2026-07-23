"use client";

import Link from "next/link";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Sparkles } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        // console.log(user)
        const {data, error} = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        })
        if(error){
            console.log("Login Error Details:", error); 
            toast.error(error.message || "Invalid email or password !!");
            
        }
        if(data){
            toast.success("Login Successful")
            router.push('/')
            router.refresh();
        }
    }
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 md:p-8">
      <Card className="bg-[#1a1a2e] border border-gray-800/80 shadow-2xl p-6 md:p-10 rounded-3xl w-full max-w-md text-white">
        
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome Back</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Login to Your Account
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Enter your credentials to access study rooms.
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          
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

          <TextField
            isRequired
            name="password"
            type="password"
          >
            <Label className="text-gray-300 font-semibold text-xs uppercase tracking-wider mb-1 block">Password</Label>
            <Input placeholder="••••••••" className="bg-[#0f172a] text-white border-gray-800 rounded-xl py-2 px-3" />
            <FieldError />
          </TextField>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-2xl shadow-lg shadow-blue-600/30 py-4 mt-2 transition-all cursor-pointer"
          >
            Login
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
            Don’t have an account?{' '}
            <Link href="/register" className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4">
              Register
            </Link>
          </p>
        </div>

      </Card>
    </div>
  );
};

export default LoginPage;
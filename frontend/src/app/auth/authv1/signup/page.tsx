"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { FaCheck } from "react-icons/fa";
import { z } from "zod";
import InputFields from "../../../components/authComponents/InputFields";
import * as React from "react";
import Auth0Options from "@/app/components/authComponents/Auth0Options";
import { useRouter } from "next/navigation";
import axios from "axios"; 
import { res } from "@/app/interface/interface";

const schema = z.object({
  name: z.string().min(3, {message: "Full Name must be more than 3 characters long!"}).toLowerCase(),
  email: z.string().email({message: "Invalid email address!"}),
  password: z.string().min(8, {message: "Password must be atleast 8 characters long!"}),
  phoneNumber: z.string().regex(/^\+254\d{9}/, {message: "Must be a valid phone number i.e +254..."})
                .length(13, {message: "Not a valid phone number!"})
});

type Inputs = z.infer<typeof schema>;

const SignUpPage = () => {

  // Clear the browsers storage.
  localStorage.clear();

  // Handle data input in the form.
  const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  // Handles the checkbox on the form.
  const [checkBox, setcheckBox] = React.useState<boolean>(false);
  const handleCheck = () => {
    setcheckBox((check: boolean) => {
      check = !check;
      return check;
    });
  }

  // Uploads user data
  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    axios.post<res>("http://localhost:3001/auth/signup", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("userId", JSON.stringify(res.data.user._id));
        localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));

        // Reroute user to the details pages.
        window.location.href = "/auth/setup/role";
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div className="h-screen p-6 flex justify-center items-center relative overflow-hidden">
      <div className="w-[512px] rounded-md shadow-lg shadow-gray-300 p-10">
        <div className="flex gap-4 justify-center">
          <img src="/logo/logo-white.png" alt="" className="w-48 h-14"/>
        </div>
        {/* Form Details */}
        <form onSubmit={onSubmit}>
          <InputFields
            name="name"
            label="Full Name"
            type="text"
            register={register}
            error={errors.name}
            placeholder="John Doe"
          />
          <InputFields
            name="email"
            label="Email Address"
            type="email"
            register={register}
            error={errors.email}
            placeholder="Johndoe@gmail.com"
          />
          <InputFields
            name="password"
            label="Password"
            type="password"
            register={register}
            error={errors.password}
          />
          <InputFields
            name="phoneNumber"
            label="PhoneNumber"
            type="text"
            register={register}
            error={errors.phoneNumber}
          />
          <div className="flex gap-2 my-2 p-2">
            <span onClick={() => handleCheck()} className="flex justify-center items-center w-6 h-6 border border-black rounded-md cursor-pointer">
              <FaCheck style={ checkBox === false ? { visibility: "hidden" } : { visibility: "visible" }}/>
            </span>
            <p>I want to receive updates through this email.</p>
          </div>
          <button className="w-full h-12 rounded-full bg-black text-white font-semibold my-4 active:bg-white active:border active:border-black active:text-black">Sign Up</button>
        </form>
        {/* Auth0Options */}
        <Auth0Options
          auth={"signup"}
        />
      </div>
    </div>
  )
}

export default SignUpPage;
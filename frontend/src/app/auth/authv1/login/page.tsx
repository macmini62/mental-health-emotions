"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputFields from "../../../components/authComponents/InputFields";
import Auth0Options from "@/app/components/authComponents/Auth0Options";
import axios from "axios";
import ErrorNotification from "@/app/components/notifications/notificationAlert";
import React from "react";
 

const schema = z.object({
  email: z.string().email({message: "Invalid email address!"}),
  password: z.string().min(8, {message: "Password must be atleast 8 characters long!"})
});

type Inputs = z.infer<typeof schema>;

const LogInPage = () => {

  const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  // handles the error feedback.
  const[failed, setFailed] = React.useState<boolean>(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined);
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  // Verify user.
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const userId = await axios.post("http://localhost:3001/users/verify", 
      data
    ).then((res) => {
      console.log(res);
      return res.data;
    }).catch((e) => {
      console.log(e);
      setFailed(true);
      timer.current = setTimeout(() => {
        setFailed(false);
      }, 5000);
    });

    console.log(userId);
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
            label="Email Address"
            name="email"
            register={register}
            error={errors.email}
            placeholder="johndoe@gmail.com"
            type="email"
          />
          <InputFields
            label="Password"
            name="password"
            register={register}
            error={errors.password}
            type="password"
          />
          <button
            className="w-full h-12 rounded-full bg-black text-white font-semibold my-4 active:bg-white active:border active:border-black active:text-black"
          >
            Log In
          </button>
        </form>
        {/* Auth0Options */}
        <Auth0Options
          auth={"login"}
        />
      </div>
      <ErrorNotification
        action={"Log In"}
        failed={failed}
      />
    </div>
  )
}

export default LogInPage;
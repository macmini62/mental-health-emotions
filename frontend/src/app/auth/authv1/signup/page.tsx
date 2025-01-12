"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { FaCheck } from "react-icons/fa";
import { z } from "zod";
import InputFields from "../../../components/authComponents/InputFields";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const schema = z.object({
  name: z.string().min(3, {message: "Full Name must be more than 3 characters long!"}).toLowerCase(),
  email: z.string().email({message: "Invalid email address!"}),
  password: z.string().min(8, {message: "Password must be atleast 8 characters long!"}),
  phoneNumber: z.string().regex(/^\+254\d{9}/, {message: "Must be a valid phone number i.e +254..."})
                .length(13, {message: "Not a valid phone number!"})
});

type Inputs = z.infer<typeof schema>;

const SignUpPage = () => {

  // Handle data input in the form.
  const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  // Handles the checkbox on the form.
  const [checkBox, setcheckBox] = useState<boolean>(false);
  const handleCheck = () => {
    setcheckBox((check: boolean) => {
      check = !check;
      return check;
    });
  }

  // Uploads user data
  async function uploadData(data: object): Promise<number> {
    const res = await fetch("http://localhost:3001/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(res);
    return res.status;
  }

  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const userId = uuidv4();
    const status = await uploadData({_id: userId, ...data});

    status === 201 && router.push(`/auth/setup/${userId}`);
  });
  


  return (
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
  )
}

export default SignUpPage;
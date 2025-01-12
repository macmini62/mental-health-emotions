"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputFields from "../../../components/authComponents/InputFields";
import { useRouter } from "next/navigation";

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

  // Verify user.
  async function verifyUser(email: string, password: string): Promise<boolean>{
    const res = await fetch(`http://localhost:3001/users/verify?email=${email}&password=${password}`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json"
      }
    });
  
    console.log(res);
    if(res.status === 200){ return true; }else{ return false; }
  }

  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const userValid: boolean = await verifyUser(data.email, data.password);
    // userValid && router.push("/articles");
  });

  return (
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
  )
}

export default LogInPage;
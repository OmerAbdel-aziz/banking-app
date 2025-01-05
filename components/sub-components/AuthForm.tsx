"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"
import { useState } from "react"


import Link from "next/link"
import Image from "next/image"
import Logo from '@/public/icons/Logo.png'



const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email()
  })


 

const AuthForm = ({type} :{ type: string}) => {

    const [user, setUser] = useState(null);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          email:"",
        },
      })


      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }


  return (
    <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
            <Link href="/" className="flex cursor-pointer items-center gap-1">
            <Image src={Logo} alt="Logo" width={32} height={32} />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
            </Link>
            <div className="flex flex-col gap-1 md:gap-3">
                <h1>
                    {user ? "Link Your Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
                </h1>
                <p>
                    {user ? "Link Your Bank Account" : "Please Enter Your Details"}
                </p>
            </div>
        </header>
    </section>
  )
}

export default AuthForm
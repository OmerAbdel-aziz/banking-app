"use client"
 //zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
//react
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Loader2 } from "lucide-react"
//next
import { useRouter } from 'next/navigation';
import Link from "next/link"
import Image from "next/image"



//shadcn
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
//local imports
import CustomInput from "./CustomInput"
import { authFormSchema } from "@/lib/utils"
import { signIn , signUp , getLoggedInUser } from "@/lib/actions/user.actions"
import Logo from '@/public/icons/Logo.png'



 

const AuthForm = ({type} :{ type: string}) => {
  const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const formSchema =  authFormSchema(type);
   
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email:"",
          password:"",
         
        },
      })


      const onSubmit = async (data: any) => {
        console.log("Form submitted with values:", data);
        setLoading(true);
        
        try {
          if (type === "sign-in") {
            const response = await signIn({
              email: data.email,
              password: data.password,
            });
          
            // Check for the presence of error
            if (!response.error) {
              router.push('/'); // Navigate only if sign-in was successful
            } else {
              console.error('Sign-in failed:', response.error);
              // Optionally, display an error message to the user
              alert(`Sign-in failed: ${response.error}`);
            }
          }
          if (type === "sign-up") {

            const userData = {
              firstName: data.firstName!,
              lastName: data.lastName!,
              address1: data.address1!,
              city: data.city!,
              state: data.state!,
              postalCode: data.postalCode!,
              dateOfBirth: data.dateOfBirth!,
              ssn: data.ssn!,
              email: data.email,
              password: data.password
            }
            const newUser = await signUp(userData);
            router.push('/sign-in');

          }
        } catch (error) {
          console.error("Authentication error:", error);
          setUser(null); // Reset to null on error
        } finally {
          setLoading(false);
        }
      }


  return (
    <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
            <Link href="/" className="flex cursor-pointer items-center gap-1">
            <Image className ="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" width={40} height={40}/>

            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
            </Link>
            <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="font-semibold font-inter text-2xl">
                    {user ? "Link Your Account" : type === "sign-in" ? "Log in" : "Sign Up"}
                </h1>
                <p className="text-md font-inter text-gray-600">
                    {user ? "Link Your Bank Account" : "Welcome back! Please enter your details."}
                </p>
            </div>
        </header>
       {user ? ( <div className="flex flex-col gap-4">
            {/* Plaid Link */}
        </div>): (
          <div>
             <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <>
        { type === "sign-up"  && (<>
          <div className="flex gap-4 ">
              <CustomInput name = "fiestName" label="First Name" Description="" control={form.control} placeholder="Enter Your First Name" />
              <CustomInput  name="lastName" label="Last Name" Description="" control={form.control} placeholder="Enter Your Last Name"/>
          </div>
             <CustomInput name = "adress" label="Adress" Description="" control={form.control} placeholder="Cairo, Giza" />
             <div className="flex  gap-4 ">
              <CustomInput name = "state" label="State" Description="" control={form.control} placeholder="" />
              <CustomInput  name="postalCode" label="Postal Code" Description="" control={form.control} placeholder="1234"/>

          </div> <div className="flex  gap-4 ">
              <CustomInput name = "dateOfBirth" label="Date of Birth" Description="" control={form.control} placeholder="YYYY-MM-DD" />
              <CustomInput  name="idNum" label="ID Nmber" Description="" control={form.control} placeholder="123-456"/>
          </div>
       </> )
      }
        </>
        <CustomInput name = "email" label="Email" Description="" control={form.control} placeholder="Enter Your Email" />
        <CustomInput  name="password" label="Password" Description="" control={form.control} placeholder="************"/>
      <div className="flex flex-col gap-4">
      <Button type="submit" className="form-btn" disabled={loading}>
          { loading ? (
            <>
            <Loader2 className="animate-spin" size={20} />&nbsp;Loading...
            </>
          ): type === "sign-in" ? "Log in" : "Sign Up"}       
          </Button>
      </div>
      </form>
    </Form>
    <footer className="flex justify-center items-center gap-1 py-4">
     <p className="text-14 font-normal text-gray-600 ">
      {type === "sign-in" ? "Doesn't have an account ?" : "Already Have an Account ?"}
     </p>
     <Link className="form-link" href={type === "sign-in" ? "/sign-up" : "sign-in"} > {type === "sign-in" ? "Sign Up" : "Sign In"}</Link>
    </footer>
          </div>
        )}
    </section>
  )
}

export default AuthForm
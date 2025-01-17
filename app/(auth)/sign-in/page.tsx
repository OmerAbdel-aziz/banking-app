import React from 'react'
import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import AuthForm from '@/components/sub-components/AuthForm'

const SignInPage = () => {
  return (
   <section className='flex-center w-full max-sm:px-6'>
    <AuthForm type='sign-in'/>
   </section>
  )
}

export default SignInPage
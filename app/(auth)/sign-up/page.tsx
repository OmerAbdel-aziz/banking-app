import AuthForm from '@/components/sub-components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const  SignUpPage = async () => {
  const user = await getLoggedInUser();
  return (
    <section className='flex-center w-full max-sm:px-6'>
    <AuthForm type='sign-up'/>
   </section>
  )
}

export default SignUpPage
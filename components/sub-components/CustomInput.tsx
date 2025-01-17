import React from 'react'
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
import { Control, FieldPath } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';
import { z } from 'zod';

const formSchema =  authFormSchema("sign-up");

interface CustomInputProps {
    label: string;
    Description: string;
    placeholder: string;
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
}

const  CustomInput = ({ label, Description, name ,placeholder, control}: CustomInputProps) => {
  
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input className="py-2" placeholder={placeholder} {...field} type={ name === 'password' ? "password" : "text"} />
        </FormControl>
        <FormDescription>
          {Description}
        </FormDescription>
        <FormMessage />
      </FormItem>
      
    )}
  />)
}


export default CustomInput
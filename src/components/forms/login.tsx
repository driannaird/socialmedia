"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Email tidak valid"),
  password: z
    .string()
    .min(1, "Kata sandi wajib diisi")
    .min(8, "Kata sandi harus lebih dari 8 karakter"),
});

const FormLogin = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-3/4 mx-auto">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Kata sandi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-right">
          <Link
            href="/auth/forgotpassword"
            className="text-sm font-medium hover:text-[#16BEBB]">
            Lupa kata sandi?
          </Link>
        </div>
        <Button type="submit" className="bg-primary w-full hover:bg-partial">
          Masuk
        </Button>
        <div className="relative flex items-center text-xs">
          <div className="flex-grow border-t"></div>
          <span className="flex-shrink mx-4 text-slate-400">
            Belum punya akun
          </span>
          <div className="flex-grow border-t"></div>
        </div>
        <Link
          href="/auth/register"
          className="border-2 w-full block border-primary rounded-md text-center text-sm text-primary py-2 hover:text-partial hover:border-partial">
          Buat akun
        </Link>
      </form>
    </Form>
  );
};

export default FormLogin;

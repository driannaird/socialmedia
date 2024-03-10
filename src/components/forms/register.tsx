"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z
  .object({
    username: z
      .string()
      .min(1, "Nama pengguna wajib diisi")
      .max(100)
      .refine((s) => !s.includes(" "), "Nama pengguna tidak boleh ada spasi!"),
    email: z.string().min(1, "Email wajib diisi").email("Email tidak valid!"),
    password: z
      .string()
      .min(1, "Kata sandi wajib diisi")
      .min(8, "Kata sandi harus lebih dari 8 karakter"),
    confirmPassword: z.string().min(1, "Konfirmasi kata sandi wajib diisi"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Kata sandi dan konfirmasi kata sandi tidak sesuai",
  });
const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      await axios.post("/api/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      });

      toast("Berhasil membuat akun");
      setLoading(false);
      router.push("/auth/login");
    } catch (error: any) {
      setLoading(false);
      return toast(error.response?.data?.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-3/4 mx-auto">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nama Pengguna" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Konfirmasi kata sandi"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          className="bg-primary w-full hover:bg-partial">
          {loading ? "Loading..." : "Daftar"}
        </Button>
        <div className="relative flex items-center text-xs">
          <div className="flex-grow border-t"></div>
          <span className="flex-shrink mx-4 text-slate-400">
            Sudah punya akun?
          </span>
          <div className="flex-grow border-t"></div>
        </div>
        <Link
          href="/auth/login"
          className="border-2 w-full block border-primary rounded-md text-center text-sm text-primary py-2 hover:text-partial hover:border-partial">
          Masuk
        </Link>
      </form>
    </Form>
  );
};

export default FormRegister;

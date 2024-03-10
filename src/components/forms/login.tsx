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
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Email tidak valid"),
  password: z
    .string()
    .min(1, "Kata sandi wajib diisi")
    .min(8, "Kata sandi harus lebih dari 8 karakter"),
});

const FormLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.error) {
      setLoading(false);
      toast("Terjadi masalah, gagal login");
    } else {
      toast("Berhasil login");
      setLoading(false);
      router.refresh();
      router.push("/");
    }
  };

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
        <Button
          type="submit"
          disabled={loading}
          className="bg-primary w-full hover:bg-partial">
          {loading ? "Loading..." : "Masuk"}
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

"use client";
import { credentialsLogin, googleLogin } from "@/actions/auth/login";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import ErrorAlert from "./ErrrorAlert";

export function LoginForm() {
  const searchParams = useSearchParams()
  const urlError = searchParams.get("error")
  let authError = urlError === "OAuthAccountNotLinked" ? "Email already registered with different provider" : urlError

  const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);


  const handleSubmit = async () => {
    setLoading(true);
    if (!email) {
      return toast.error("email is required");
    }
    if (!password) {
      return toast.error("password is required");
    }
    try {
      const response = await credentialsLogin({ email, password });

      if (response && response.error) {
        return toast.error(response.error);
      }

      toast.success("login successfull");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await googleLogin();

      if (response && response.error) {
        return toast.error(response.error);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card className="my-10 md:my-1">
      <CardHeader>
        <CardTitle className="text-xl">Sign In</CardTitle>
        <CardDescription>
          Enter your details to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {/* <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div> */}
          {authError && <ErrorAlert errorMessage={authError} />}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={loading} className="w-full" onClick={handleSubmit}>
            {loading ? "processing.." : "Log In"}
          </Button>
          <div className="my-1 flex items-center">
            <div className="flex-grow border-t border-muted" />
            <div className="mx-2 text-muted-foreground">or</div>
            <div className="flex-grow border-t border-muted" />
          </div>
          <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

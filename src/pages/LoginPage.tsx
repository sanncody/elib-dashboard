import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/http/api";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import useTokenStore from "@/store/tokenstore";

const LoginPage = () => {
  const navigate = useNavigate();
  const setToken = useTokenStore((state) => state.setToken);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      // Invalidate and refetch
      console.log("Login Successful!!");
      setToken(response.data.accessToken);

      // redirect to dashboard
      navigate("/dashboard/home");
    },
  });

  const handleLoginSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log("data", { email, password });

    // For data fetching, we use useQuery hook.
    // For data sending to server, we use mutation

    if (!email || !password) {
      toast.error("Email and password is required");
      return '';
    }

    mutation.mutate({ email, password });

  };

  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl mb-1">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account. <br />
            {/* {mutation.isPending && <div className="text-md text-pink-300">Loading...</div>} */}
            {mutation.isError && <div className="text-red-500 text-sm pt-2">{"Something went wrong"}</div>}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              ref={emailRef}
              id="email"
              type="email"
              placeholder="example@example.com"
              required={true}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input ref={passwordRef} id="password" type="password" placeholder="Enter Password" required />
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <Button
              onClick={handleLoginSubmit}
              className="w-full"
              disabled={mutation.isPending}
            >
              {mutation.isPending && <LoaderCircle className="animate-spin" />}

              <span>Sign in</span>
            </Button>

            <div className="mt-4 text-center text-sm">
              Don't have an account?{' '}
              <Link to={'/auth/register'} className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}

export default LoginPage;
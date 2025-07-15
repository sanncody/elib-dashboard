import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/http/api";
import useTokenStore from "@/store/tokenstore";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";


const RegisterPage = () => {
    const navigate = useNavigate();
    const setToken = useTokenStore((state) => state.setToken);

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const mutation = useMutation({
        mutationFn: register,
        onSuccess: (response) => {
            // Invalidate and refetch
            console.log("Register Successful!!");

            setToken(response.data.accessToken);
            // redirect to dashboard
            navigate("/dashboard/home");
        },
    });

    const handleRegisterSubmit = async () => {
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        console.log("data", { name, email, password });

        // For data fetching, we use useQuery hook.
        // For data sending to server, we use mutation

        if (!name || !email || !password) {
            toast.error("Name, email and password is required");
            return '';
        }

        mutation.mutate({ name, email, password });

    };

    return (
        <section className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl mb-1">Sign Up</CardTitle>
                    <CardDescription>Enter your information to create an account</CardDescription>
                    {mutation.isError && (
                      <span className="text-red-500 text-sm">{'Something went wrong'}</span>
                  )}
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input ref={nameRef} id="name" placeholder="John Doe" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                ref={emailRef}
                                id="email"
                                type="email"
                                placeholder="example@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input ref={passwordRef} id="password" type="password" placeholder="Create your Password" />
                        </div>

                        <Button
                            onClick={handleRegisterSubmit}
                            className="w-full"
                            disabled={mutation.isPending}
                        >
                            {mutation.isPending && <LoaderCircle className="animate-spin" />}
                            <span>Create an account</span>
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{' '}
                        <Link to={'/auth/login'} className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default RegisterPage;
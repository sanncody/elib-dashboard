import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";


const RegisterPage = () => {
    return (
        <section className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl mb-1">Sign Up</CardTitle>
                    <CardDescription>Enter your information to create an account</CardDescription>
                    {/* {mutation.isError && (
                      <span className="text-red-500 text-sm">{'Something went wrong'}</span>
                  )} */}
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                //   ref={emailRef}
                                id="email"
                                type="email"
                                placeholder="example@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Create your Password" />
                        </div>

                        <Button
                            //   onClick={handleRegisterSubmit}
                            className="w-full"
                        //   disabled={mutation.isPending}
                        >
                            {/* {mutation.isPending && <LoaderCircle className="animate-spin" />} */}

                            <span className="ml-2">Create an account</span>
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{' '}
                        <Link to={'/login'} className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default RegisterPage;
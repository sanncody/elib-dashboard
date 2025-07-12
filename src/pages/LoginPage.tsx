import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl mb-1">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account. <br />
            {/* {mutation.isError && (
              <span className="text-red-500 text-sm">{'Something went wrong'}</span>
            )} */}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              // ref={emailRef}
              id="email"
              type="email"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter Password" required />
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <Button
              // onClick={handleLoginSubmit}
              className="w-full"
              // disabled={mutation.isPending}
              >
              {/*  {mutation.isPending && <LoaderCircle className="animate-spin" />} */}

              <span className="ml-2">Sign in</span>
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
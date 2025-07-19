import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, CircleX } from "lucide-react";

const CreateBook = () => {
    return (
        <section>
            <div className="flex justify-between items-center">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard/home">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard/books">Books</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Create</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="flex items-center gap-4">
                    <Button className="bg-red-500 hover:bg-red-400 hover:cursor-pointer">
                        <CircleX size={20} />
                        <span className="">Cancel</span>
                    </Button>
                    <Button className="bg-blue-500 hover:bg-blue-400 hover:cursor-pointer">
                        <Check />
                        <span>Submit</span>
                    </Button>
                </div>
            </div>

            <Card className="mt-6">
                <CardHeader>
                    <CardTitle className="tracking-tight">Create a New Book</CardTitle>
                    <CardDescription>
                        Fill out the form below to create a new book.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action="">
                        {/* we'll add description field and then write this */}
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" className="w-full" defaultValue="Book Controller"/>
                            </div>
                        </div>
                    </form>
                    
                </CardContent>
            </Card>
        </section>
    )
}

export default CreateBook;
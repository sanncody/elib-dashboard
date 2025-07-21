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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, CircleX } from "lucide-react";
import { useForm } from "react-hook-form";

const CreateBook = () => {
    const form = useForm();

    return (
        <section>
            <Form {...form}>
                <form action="">
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
                            <Button type="submit" className="bg-blue-500 hover:bg-blue-400 hover:cursor-pointer">
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
                            {/* we'll add description field and then write this */}
                            <div className="grid gap-6">
                                <FormField 
                                    control={form.control} 
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input type="text" className="w-full" placeholder="Hurdle Space" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} 
                                
                                />
                                <FormField 
                                    control={form.control} 
                                    name="genre"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Genre</FormLabel>
                                            <FormControl>
                                                <Input type="text" className="w-full" placeholder="Genre" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} 
                                
                                />
                                <FormField 
                                    control={form.control} 
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea className="min-h-32" placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia perferendis ullam?" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} 
                                
                                />
                                <FormField 
                                    control={form.control} 
                                    name="coverImage"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Cover Image</FormLabel>
                                            <FormControl>
                                                <Input type="file" className="w-full hover:cursor-pointer" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} 
                                
                                />
                                <FormField 
                                    control={form.control} 
                                    name="file"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Book File</FormLabel>
                                            <FormControl>
                                                <Input type="file" className="w-full hover:cursor-pointer" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} 
                                
                                />
                            </div>

                        </CardContent>
                    </Card>
                </form>
            </Form>

        </section>
    )
}

export default CreateBook;
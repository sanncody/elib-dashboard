import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
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
import { createBook } from "@/http/api";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
    title: z.string().min(2, { 
        message: "Title must be atleast 2 characters." 
    }),
    genre: z.string().min(2, {
        message: "Genre must be atleast 2 characters."
    }),
    description: z.string().min(2, {
        message: "Description must be atleast 2 characters."
    }),
    coverImage: z.instanceof(FileList).refine(file => {
        return file.length === 1
    }, "Cover Image is required"),
    file: z.instanceof(FileList).refine(file => {
        return file.length === 1
    }, "Book PDF is required")
});

const CreateBook = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            genre: "",
            description: ""
        },
    });

    const coverImageRef = form.register('coverImage');
    const fileRef = form.register('file');

    const mutation = useMutation({
        mutationFn: createBook,
        onSuccess: () => {
            console.log("Book created successfully");
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const formdata = new FormData();
        
        formdata.append("title", values.title);
        formdata.append("genre", values.genre);
        formdata.append("description", values.description);
        formdata.append("coverImage", values.coverImage[0]);
        formdata.append("file", values.file[0]);

        mutation.mutate(formdata);

        console.log(values);
    }

    return (
        <section>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
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
                                    render={() => (
                                        <FormItem>
                                            <FormLabel>Cover Image</FormLabel>
                                            <FormControl>
                                                <Input type="file" className="w-full hover:cursor-pointer" {...coverImageRef} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} 
                                
                                />
                                <FormField 
                                    control={form.control} 
                                    name="file"
                                    render={() => (
                                        <FormItem>
                                            <FormLabel>Book File</FormLabel>
                                            <FormControl>
                                                <Input type="file" className="w-full hover:cursor-pointer" {...fileRef} />
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Navigate, NavLink, Outlet } from "react-router";
import { Bell, BookOpenText, Home, LineChart, Menu, MessageCircle, Package, Package2, Search, ShoppingCart, Users } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import useTokenStore from "@/store/tokenstore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const DashboardLayout = () => {
    const { token, setToken } = useTokenStore(state => state);

    if (!token) {
        return <Navigate to={"/auth/login"} replace />
    }

    const logout = () => {
        console.log("Logging out...");
        setToken("");
    };

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link to="/dashboard/home" className="flex items-center gap-2 font-semibold">
                            <Package2 className="h-6 w-6" />
                            <span className="">Coder's Library</span>
                        </Link>                            
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" size="icon" className="ml-auto h-8 w-8 hover:cursor-pointer">
                                    <Bell className="h-4 w-4" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-4 space-y-3">
                                <div className="max-w-full font-semibold text-sm text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b-2">
                                    Notifications
                                </div>

                                {/* Dummy Notification 1 */}
                                <div className="flex items-start space-x-3 rounded-md p-2 hover:bg-muted hover:cursor-pointer">
                                    <BookOpenText className="text-muted-foreground mt-1 h-5 w-5" />
                                    <div>
                                        <p className="text-sm font-medium">New Book Added: "The AI Era"</p>
                                        <p className="text-xs text-muted-foreground">2 minutes ago</p>
                                    </div>
                                </div>

                                {/* Dummy Notification 2 */}
                                <div className="flex items-start space-x-3 rounded-md p-2 hover:bg-muted hover:cursor-pointer">
                                    <MessageCircle className="text-muted-foreground mt-1 h-5 w-5" />
                                    <div>
                                        <p className="text-sm font-medium">You have 3 new comments</p>
                                        <p className="text-xs text-muted-foreground">10 minutes ago</p>
                                    </div>
                                </div>

                                {/* Dummy Notification 3 */}
                                <div className="flex items-start space-x-3 rounded-md p-2 hover:bg-muted hover:cursor-pointer">
                                    <Bell className="text-muted-foreground mt-1 h-5 w-5" />
                                    <div>
                                        <p className="text-sm font-medium">Reminder: Review pending books</p>
                                        <p className="text-xs text-muted-foreground">1 hour ago</p>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <NavLink 
                                to="/dashboard/home"
                                className={({ isActive }) => isActive ? "flex items-center gap-3 rounded-lg px-3 py-2 bg-muted transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"}>
                                <Home className="h-4 w-4" />
                                Home
                            </NavLink>
                            <NavLink
                                to="/dashboard/books"
                                className={({ isActive }) => isActive ? "flex items-center gap-3 rounded-lg px-3 py-2 bg-muted transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"}>
                                <Package className="h-4 w-4" />
                                Books{' '}
                            </NavLink>
                        </nav>
                    </div>
                    <div className="mt-auto p-4">
                        <Card x-chunk="dashboard-02-chunk-0">
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>
                                    Unlock all features and get unlimited access to our support
                                    team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col h-full">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    to="#"
                                    className="flex items-center gap-2 text-lg font-semibold">
                                    <Package2 className="h-6 w-6" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    to="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    to="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
                                    <ShoppingCart className="h-5 w-5" />
                                    Orders
                                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        6
                                    </Badge>
                                </Link>
                                <Link
                                    to="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <Package className="h-5 w-5" />
                                    Products
                                </Link>
                                <Link
                                    to="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <Users className="h-5 w-5" />
                                    Customers
                                </Link>
                                <Link
                                    to="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <LineChart className="h-5 w-5" />
                                    Analytics
                                </Link>
                            </nav>
                            <div className="mt-auto">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Upgrade to Pro</CardTitle>
                                        <CardDescription>
                                            Unlock all features and get unlimited access to our
                                            support team.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button size="sm" className="w-full">
                                            Upgrade
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form>
                    </div>
                    <ModeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full hover:cursor-pointer grayscale">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={"https://github.com/shadcn.png"} alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Button onClick={logout} className="mx-auto hover:cursor-pointer">
                                    Logout
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;
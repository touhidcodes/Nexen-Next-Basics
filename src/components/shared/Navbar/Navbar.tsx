"use client";

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: { url: string; src: string; alt: string; title: string };
  menu?: MenuItem[];
  auth?: {
    login: { title: string; url: string };
    signup: { title: string; url: string };
    logout?: { title: string; url: string };
  };
}

// Mock function to get auth state (replace with your auth logic)
const useAuth = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  useEffect(() => {
    // Example: fetch user from API or localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);
  return user;
};

export const Navbar = ({
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "MyApp",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "ToDos", url: "/todos" },
    { title: "Add", url: "/todos/create" },

    { title: "Pricing", url: "/pricing" },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/signup" },
    logout: { title: "Logout", url: "/logout" },
  },
}: NavbarProps) => {
  const pathname = usePathname();
  const user = useAuth();

  const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-popover text-popover-foreground">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title}>
                <a
                  href={subItem.url}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
                >
                  {subItem.icon}
                  <div>
                    <div className="font-medium">{subItem.title}</div>
                    {subItem.description && (
                      <div className="text-sm text-muted-foreground">
                        {subItem.description}
                      </div>
                    )}
                  </div>
                </a>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink
          href={item.url}
          className={`inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-medium transition-colors ${
            pathname === item.url
              ? "bg-muted text-accent-foreground"
              : "hover:bg-muted"
          }`}
        >
          {item.title}
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };

  return (
    <section className="py-4">
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex justify-between items-center">
          <a href={logo.url} className="flex items-center gap-2">
            <img
              src={logo.src}
              className="max-h-8 dark:invert"
              alt={logo.alt}
            />
            <span className="font-semibold text-lg">{logo.title}</span>
          </a>

          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-2">
            {user ? (
              <Button asChild variant="outline" size="sm">
                <a href={auth.logout?.url}>{auth.logout?.title}</a>
              </Button>
            ) : (
              <>
                <Button asChild variant="outline" size="sm">
                  <a href={auth.login.url}>{auth.login.title}</a>
                </Button>
                <Button asChild size="sm" className="bg-black text-white">
                  <a href={auth.signup.url}>{auth.signup.title}</a>
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden flex justify-between items-center">
          <a href={logo.url} className="flex items-center gap-2">
            <img
              src={logo.src}
              className="max-h-8 dark:invert"
              alt={logo.alt}
            />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className="flex items-center gap-2">
                    <img
                      src={logo.src}
                      className="max-h-8 dark:invert"
                      alt={logo.alt}
                    />
                  </a>
                </SheetTitle>
              </SheetHeader>

              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-2 p-4"
              >
                {menu.map((item) =>
                  item.items ? (
                    <AccordionItem key={item.title} value={item.title}>
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent>
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.url}
                            className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
                          >
                            {subItem.icon}
                            <div>
                              <div className="font-medium">{subItem.title}</div>
                              {subItem.description && (
                                <div className="text-sm text-muted-foreground">
                                  {subItem.description}
                                </div>
                              )}
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <a
                      key={item.title}
                      href={item.url}
                      className="p-2 font-semibold"
                    >
                      {item.title}
                    </a>
                  )
                )}
              </Accordion>

              <div className="flex flex-col gap-2 p-4">
                {user ? (
                  <Button asChild variant="outline">
                    <a href={auth.logout?.url}>{auth.logout?.title}</a>
                  </Button>
                ) : (
                  <>
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

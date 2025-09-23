"use client";

import { cn } from "@/lib/utils";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spinner } from "@/components/spinner";
import { mainRoutes } from "../_data/routes";

export const NavBar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 border-b shadow-sm",
      )}
    >
      <div><Link href="/">Colibri</Link></div>
      <div className="flex gap-2 items-center ml-10">
        {
          mainRoutes.map((route, idx) => (
            <Button variant="ghost" key={idx}><Link href={route.url} className="text-secondary-foreground font-medium hover:text-primary">{route.title}</Link></Button>
          ))
        }
      </div>

      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Sign Up</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </div>
  );
};

"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) return <p>Loading...</p>;

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex bg-zinc-50 dark:bg-zinc-950">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard">{user.fullName} {user.emailAddresses[0].emailAddress}</Link>
        </Button>
        <UserButton afterSignOutUrl="/" />
      </div>
      <main className="md:pl-56 pt-[80px] flex-1 h-full overflow-auto">{children}</main>
    </div>
  );
};

export default MainLayout;

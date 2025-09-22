"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Spinner } from "@/components/spinner";
import { NavBar } from "../(marketing)/components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

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
        <NavBar/>
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        hello
      </div>
      <main className="md:pl-56 pt-[80px] flex-1 h-full overflow-auto">{children}</main>       
    </div>
  );
};

export default MainLayout;

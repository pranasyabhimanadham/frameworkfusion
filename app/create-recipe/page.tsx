"use client";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import RecipeForm from "./components/RecipeForms";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function CreateRecipe() {
  const router = useRouter();
  useEffect(() => {
    const currentUser = Cookies.get("currentUser");
    if (!currentUser) {
      router.push("/login");
      router.refresh();
    }
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg px-5 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-gray-800 font-extrabold md:text-4xl">
            Create new recipe
          </h1>
        </div>
        <Separator className="my-5" />
        <RecipeForm />
      </div>
    </>
  );
}
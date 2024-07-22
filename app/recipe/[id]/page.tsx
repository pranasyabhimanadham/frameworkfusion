"use client";
import Navbar from "@/components/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import RecipeDetails from "../components/RecipeDetails";
import { useState, useEffect } from "react";
import Axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { dateFormat } from "@/utils/dateFormat";
import NetworkError from "@/components/NetworkError";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

interface VoteLoad {
  [recipeId: string]: boolean;
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const [recipe, setRecipe] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [voteLoad, setVoteLoad] = useState<VoteLoad>({});
  const router = useRouter();

  useEffect(() => {
    const currentUser = Cookies.get("currentUser");
    if (!currentUser) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    setLoading(true);
    const fetchRecipe = async () => {
      try {
        let url;
        if (process.env.NODE_ENV === "production") {
          url = "https://recipe-sharing-942n.onrender.com";
        } else {
          url = "http://localhost:7000";
        }
        const response = await Axios.get(`${url}/api/recipe/${params.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("currentUser")}`,
          },
        });
        console.log(response.data);
        const { recipe } = response.data;
        setRecipe(recipe);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error instanceof AxiosError) {
          console.log(error.message);
          if (error.message.toLowerCase() === "network error") {
            setError(error.message);
          } else {
            setError(error.response?.data.error);
          }
        }
      }
    };
    fetchRecipe();
  }, [params.id]);

  const handleVotes = async (recipeId: any) => {
    setVoteLoad((prevState) => ({ ...prevState, [recipeId]: true }));
    try {
      let url;
      if (process.env.NODE_ENV === "production") {
        url = "https://recipe-sharing-942n.onrender.com";
      } else {
        url = "http://localhost:7000";
      }
      const upvote = await Axios.put(
        `${url}/api/recipes/${recipeId}/upvote`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("currentUser")}`,
          },
        }
      );
      const response = await Axios.get(`${url}/api/recipe/${recipeId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("currentUser")}`,
        },
      });
      const { recipe } = response.data;
      setRecipe(recipe);
      console.log(upvote.data);
      setVoteLoad((prevState) => ({ ...prevState, [recipeId]: false }));
    } catch (error) {
      console.error(error);
      setVoteLoad((prevState) => ({ ...prevState, [recipeId]: false }));
    }
  };

  if (error !== null) {
    return <NetworkError error={error} />;
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem
              onClick={() => router.back()}
              className="hover:cursor-pointer"
            >
              Recipe
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{recipe?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="py-10">
          <h1 className="text-4xl font-extrabold text-gray-800">
            {recipe?.title}
          </h1>
          <div className="md:flex md:items-center md:gap-2 md:py-5 grid grid-cols-2 py-5 gap-2">
            <div className="inline-flex items-center space-x-2">
              <svg
                fill="#7e525f"
                className="w-6 flex-shrink-0"
                viewBox="0 0 512 512"
                id="_x30_1"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,90  c37.02,0,67.031,35.468,67.031,79.219S293.02,248.438,256,248.438s-67.031-35.468-67.031-79.219S218.98,90,256,90z M369.46,402  H142.54c-11.378,0-20.602-9.224-20.602-20.602C121.938,328.159,181.959,285,256,285s134.062,43.159,134.062,96.398  C390.062,392.776,380.839,402,369.46,402z" />
              </svg>
              <p className="text-gray-800 text-sm font-semibold overflow-auto">
                {recipe?.recipeOwner}
              </p>
            </div>
            <div className="inline-flex items-center space-x-2">
              <svg
                className="w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                  stroke="#7e525f"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-gray-800 text-sm font-semibold">
                {dateFormat(recipe?.createdAt)}
              </p>
            </div>
            <div className="inline-flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 64 64"
                aria-hidden="true"
                role="img"
                className="iconify iconify--emojione-monotone w-6"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm5.143 28.305V49H26.857V30.305H16L32 15l16 15.305H37.143z"
                  fill="#7e525f"
                ></path>
              </svg>
              <p className="text-gray-800 text-sm font-semibold">
                {recipe?.upvotes?.length} upvotes
              </p>
            </div>
          </div>
          <RecipeDetails
            imageUrl={recipe?.imageUrl}
            timeFrame={recipe?.timeFrame}
            description={recipe?.description}
            ingredients={recipe?.ingredients}
            instructions={recipe?.instructions}
            upvotes={recipe?.upvotes}
            handleVotes={() => handleVotes(recipe?._id)}
            voteLoad={
              voteLoad[recipe?._id] !== undefined
                ? voteLoad[recipe?._id]
                : false
            }
            recipeId={recipe?._id}
          />
        </div>
      </div>
    </>
  );
}

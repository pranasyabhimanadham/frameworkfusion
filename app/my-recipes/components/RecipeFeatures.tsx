"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";

export default function RecipeFeatures({ handleDelete, link }: any) {
  const [copied, setCopied] = useState<string>("");
  const copyToClipBoard = () => {
    const linkInput: any = document.getElementById("link");
    linkInput.select();
    navigator.clipboard.writeText(linkInput.value);
    setCopied("Link copied to clipboard");
  };
  useEffect(() => {
    setTimeout(() => {
      setCopied("");
    }, 3000);
  }, [copied]);

  return (
    <div className="absolute my-auto right-0 top-0 mt-2 mr-2 w-10 flex items-center justify-center p-1 bg-gray-200 border-2 border-[#7e525f] rounded-md shadow-lg hover:cursor-pointer hover:bg-white active:bg-gray-200">
      <Dialog>
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-8">
              <span className="">
                <svg
                  fill="#7e525f"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M498.844,265.933c5.364-4.09,8.835-10.543,8.835-17.795c0-9.747-6.27-18.054-14.987-21.111
			c-3.344-85.019-73.54-153.157-159.364-153.157H178.672c-85.843,0-156.051,68.168-159.368,153.215
			c-8.628,3.105-14.816,11.368-14.816,21.053c0,7.208,3.43,13.626,8.741,17.72C5.027,273.344,0,284.112,0,295.995
			c0,14.588,7.705,27.402,19.253,34.609v46.665c0,33.559,27.302,60.86,60.861,60.86h351.77c33.559,0,60.861-27.302,60.861-60.86
			v-46.665C504.295,323.396,512,310.582,512,295.995C512,284.156,507.002,273.418,498.844,265.933z M26.857,240.977h61.73h0.001
			v-15.208h-0.001H34.576c3.965-76.044,67.081-136.691,144.096-136.691h154.656c77.014,0,140.131,60.646,144.096,136.691H110.678
			h-0.001v15.208h0.001h374.633c3.949,0,7.161,3.212,7.161,7.16c0,3.949-3.212,7.162-7.161,7.162c-2.997,0-5.783,0.113-8.397,0.313
			l-0.008-0.002l-0.174,0.015c-15.443,1.214-24.644,5.625-32.9,9.588c-9.409,4.516-17.534,8.416-34.896,8.416
			c-2.171,0-4.196-0.061-6.098-0.176c-13.316-0.808-20.566-4.289-28.798-8.24c-9.681-4.647-20.655-9.915-41.479-9.915
			c-3.905,0-7.463,0.185-10.732,0.517c-14.164,1.437-22.882,5.621-30.749,9.398c-2.277,1.093-4.48,2.148-6.757,3.123
			c-7.026,3.007-14.77,5.222-27.592,5.286c-0.179,0.001-0.346,0.007-0.527,0.007l-0.119-0.002l-0.198,0.002
			c-0.481-0.001-0.928-0.015-1.395-0.021c-0.583-0.008-1.18-0.009-1.743-0.026c-0.157-0.005-0.3-0.015-0.455-0.021
			c-6.855-0.239-12.18-1.14-16.769-2.456c-5.364-1.539-9.739-3.639-14.434-5.892c-9.681-4.647-20.654-9.915-41.481-9.915
			c-20.825,0-31.798,5.267-41.479,9.915c-8.233,3.951-15.483,7.432-28.798,8.24c-1.902,0.116-3.928,0.176-6.098,0.176
			c-17.364,0-25.489-3.9-34.896-8.416c-8.274-3.971-17.497-8.393-33.001-9.595l-0.188-0.016l-0.007,0.001
			c-2.581-0.195-5.329-0.304-8.282-0.304c-3.949,0-7.161-3.213-7.161-7.162C19.696,244.189,22.908,240.977,26.857,240.977z
			 M477.539,354.692H315.352V369.9h162.186v7.369c0,25.173-20.48,45.652-45.653,45.652H80.115c-25.173,0-45.653-20.48-45.653-45.652
			v-40.503h6.31H58.07l108.265,58.499l108.264-58.499h196.629h6.31V354.692z M90.062,336.767h152.544l-76.27,41.213L90.062,336.767z
			 M471.228,321.558H302.744l0.002-0.001H40.733c-14.079-0.021-25.525-11.48-25.525-25.563c0-12.309,8.594-22.713,20.561-25.072
			c11.62,1.125,18.598,4.471,25.974,8.008c9.075,4.352,19.286,9.245,37.663,9.846c1.238,0.041,2.512,0.062,3.826,0.062
			c20.824,0,31.797-5.267,41.478-9.914c9.409-4.517,17.534-8.417,34.898-8.417c4.341,0,8.105,0.244,11.456,0.68
			c1.676,0.218,3.247,0.485,4.737,0.792c0.744,0.154,1.469,0.318,2.175,0.493c6.353,1.565,11.24,3.911,16.532,6.452
			c6.354,3.05,13.263,6.366,23.149,8.285c1.412,0.275,2.885,0.52,4.426,0.733c1.027,0.142,2.085,0.269,3.173,0.379
			c3.269,0.331,6.827,0.517,10.732,0.517h0.191c4.555,0,8.64-0.252,12.342-0.694c12.695-1.517,20.899-5.272,28.227-8.783
			c0.305-0.146,0.609-0.292,0.911-0.437c9.409-4.516,17.535-8.416,34.899-8.416c4.341,0,8.105,0.244,11.455,0.68
			c1.675,0.218,3.247,0.485,4.737,0.792c0.744,0.154,1.469,0.318,2.175,0.493c6.353,1.565,11.239,3.911,16.531,6.452
			c6.354,3.05,13.263,6.366,23.148,8.285c1.412,0.275,2.885,0.52,4.425,0.733c1.027,0.142,2.085,0.269,3.173,0.379
			c3.269,0.332,6.826,0.517,10.731,0.517c1.302,0,2.564-0.02,3.791-0.061c18.4-0.595,28.616-5.494,37.698-9.848
			c7.353-3.525,14.308-6.86,25.858-7.996c11.938,2.378,20.51,12.776,20.51,25.06C496.792,310.09,485.324,321.558,471.228,321.558z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect
                        x="168.799"
                        y="107.004"
                        width="23.749"
                        height="15.208"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect
                        x="206.464"
                        y="140.137"
                        width="23.749"
                        height="15.208"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect
                        x="131.123"
                        y="140.137"
                        width="23.749"
                        height="15.208"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect
                        x="357.125"
                        y="140.137"
                        width="23.749"
                        height="15.208"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect
                        x="281.794"
                        y="140.137"
                        width="23.749"
                        height="15.208"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect
                        x="244.129"
                        y="107.004"
                        width="23.75"
                        height="15.208"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect
                        x="319.459"
                        y="107.004"
                        width="23.749"
                        height="15.208"
                      />
                    </g>
                  </g>
                </svg>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DialogTrigger asChild>
                <DropdownMenuItem>
                  <svg
                    className="w-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12C9 13.3807 7.88071 14.5 6.5 14.5C5.11929 14.5 4 13.3807 4 12C4 10.6193 5.11929 9.5 6.5 9.5C7.88071 9.5 9 10.6193 9 12Z"
                      stroke="#7e525f"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M14 6.5L9 10"
                      stroke="#7e525f"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 17.5L9 14"
                      stroke="#7e525f"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z"
                      stroke="#7e525f"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z"
                      stroke="#7e525f"
                      strokeWidth="1.5"
                    />
                  </svg>
                  Share
                </DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuItem className="text-red-600">
                <AlertDialogTrigger className="inline-flex items-center w-full">
                  <svg
                    className="w-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.75C11.0215 2.75 10.1871 3.37503 9.87787 4.24993C9.73983 4.64047 9.31134 4.84517 8.9208 4.70713C8.53026 4.56909 8.32557 4.1406 8.46361 3.75007C8.97804 2.29459 10.3661 1.25 12 1.25C13.634 1.25 15.022 2.29459 15.5365 3.75007C15.6745 4.1406 15.4698 4.56909 15.0793 4.70713C14.6887 4.84517 14.2602 4.64047 14.1222 4.24993C13.813 3.37503 12.9785 2.75 12 2.75Z"
                      fill="#DC2626"
                    />
                    <path
                      d="M2.75 6C2.75 5.58579 3.08579 5.25 3.5 5.25H20.5001C20.9143 5.25 21.2501 5.58579 21.2501 6C21.2501 6.41421 20.9143 6.75 20.5001 6.75H3.5C3.08579 6.75 2.75 6.41421 2.75 6Z"
                      fill="#DC2626"
                    />
                    <path
                      d="M5.91508 8.45011C5.88753 8.03681 5.53015 7.72411 5.11686 7.75166C4.70356 7.77921 4.39085 8.13659 4.41841 8.54989L4.88186 15.5016C4.96735 16.7844 5.03641 17.8205 5.19838 18.6336C5.36678 19.4789 5.6532 20.185 6.2448 20.7384C6.83639 21.2919 7.55994 21.5307 8.41459 21.6425C9.23663 21.75 10.2751 21.75 11.5607 21.75H12.4395C13.7251 21.75 14.7635 21.75 15.5856 21.6425C16.4402 21.5307 17.1638 21.2919 17.7554 20.7384C18.347 20.185 18.6334 19.4789 18.8018 18.6336C18.9637 17.8205 19.0328 16.7844 19.1183 15.5016L19.5818 8.54989C19.6093 8.13659 19.2966 7.77921 18.8833 7.75166C18.47 7.72411 18.1126 8.03681 18.0851 8.45011L17.6251 15.3492C17.5353 16.6971 17.4712 17.6349 17.3307 18.3405C17.1943 19.025 17.004 19.3873 16.7306 19.6431C16.4572 19.8988 16.083 20.0647 15.391 20.1552C14.6776 20.2485 13.7376 20.25 12.3868 20.25H11.6134C10.2626 20.25 9.32255 20.2485 8.60915 20.1552C7.91715 20.0647 7.54299 19.8988 7.26957 19.6431C6.99616 19.3873 6.80583 19.025 6.66948 18.3405C6.52891 17.6349 6.46488 16.6971 6.37503 15.3492L5.91508 8.45011Z"
                      fill="#DC2626"
                    />
                    <path
                      d="M9.42546 10.2537C9.83762 10.2125 10.2051 10.5132 10.2464 10.9254L10.7464 15.9254C10.7876 16.3375 10.4869 16.7051 10.0747 16.7463C9.66256 16.7875 9.29502 16.4868 9.25381 16.0746L8.75381 11.0746C8.71259 10.6625 9.0133 10.2949 9.42546 10.2537Z"
                      fill="#DC2626"
                    />
                    <path
                      d="M15.2464 11.0746C15.2876 10.6625 14.9869 10.2949 14.5747 10.2537C14.1626 10.2125 13.795 10.5132 13.7538 10.9254L13.2538 15.9254C13.2126 16.3375 13.5133 16.7051 13.9255 16.7463C14.3376 16.7875 14.7051 16.4868 14.7464 16.0746L15.2464 11.0746Z"
                      fill="#DC2626"
                    />
                  </svg>
                  Delete
                </AlertDialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this
                delicious looking recipe
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600 text-white"
                onClick={handleDelete}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label className="sr-only">Link</Label>
              <Input
                id="link"
                defaultValue={`https://cookandshare.vercel.app/recipe/${link}`}
                readOnly
              />
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={copyToClipBoard}
            >
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          {copied !== "" && <p className="text-green-700 text-sm">{copied}</p>}
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <button
                type="button"
                className="bg-gray-800 py-2 px-3 text-white rounded-lg hover:bg-gray-700"
              >
                Close
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
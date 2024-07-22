import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className="text-gray-500 bg-[#f5f5f5] px-4 py-5 mx-auto lg:px-8 w-full">
      <div className="max-w-xl sm:mx-auto sm:text-center">
        <div className="flex flex-col items-center justify-center">
          <svg
            className="sm:mx-auto w-[7rem]"
            viewBox="0 0 210 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG paths here */}
          </svg>
          <p className="leading-relaxed mt-2 text-[15px]">
            Discover a world of culinary delights, where flavors unite and
            creativity thrives. Join our vibrant community of food enthusiasts
            and embark on a delicious journey of shared recipes and culinary
            inspiration.
          </p>
        </div>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0 text-sm">
        <li className="hover:text-gray-800">
          <Link href="/">About us</Link>
        </li>
        <li className="hover:text-gray-800">
          <Link href="mailto:saipranasya@gmail.com">Contact</Link>
        </li>
        <li className="hover:text-gray-800">
          <Link href="/recipes">Recipes</Link>
        </li>
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">&copy; {year} All rights reserved.</div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="https://x.com/SPranasya5279" target="_blank" rel="noopener noreferrer">
                <svg
                  fill="none"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0.254 0.25 500 451.954"
                >
                  <path
                    d="M394.033.25h76.67L303.202 191.693l197.052 260.511h-154.29L225.118 294.205 86.844 452.204H10.127l179.16-204.77L.254.25H158.46l109.234 144.417zm-26.908 406.063h42.483L135.377 43.73h-45.59z"
                    fill="#000"
                  />
                </svg>
              </Link>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="https://github.com/pranasyabhimanadham" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 256 249"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <g fill="#161614">
                    <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23...">
                    </path>
                  </g>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

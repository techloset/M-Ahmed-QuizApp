import Link from "next/link";

export default function Home() {
  return (
    <>

      <div className="flex justify-center items-center h-[60vh] ">
        <Link href={"/quiz"} className="flex bg-blue-500 py-3 px-3 rounded-md text-white hover:bg-blue-600 hover:shadow-xl">
          Start Quiz
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 mt-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </>
  )
}

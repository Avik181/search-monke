import Head from 'next/head'
import Avatar from '../components/Avatar'
import {MicrophoneIcon, ViewGridIcon} from "@heroicons/react/solid"
import {SearchIcon} from "@heroicons/react/outline"
import Image from "next/image"
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)
  const search  = (e) =>{
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Search Monke</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
          <Avatar url="https://scontent.fccu1-1.fna.fbcdn.net/v/t39.30808-6/258267333_3053637514916223_5937193679325620047_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OhPcbpvc540AX9FhjTR&_nc_ht=scontent.fccu1-1.fna&oh=a691ab999c41101711a08cfc082ac5cf&oe=61ACC6C2"/>
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image 
          src='/SearchMonke.png'
          height={100}
          width={600}
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5
        py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow"/>
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col width-1/2 space-y-2 justify-center mt-8
        sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Wow, Such Search</button>
          <button onClick={search} className="btn">Much Results</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}

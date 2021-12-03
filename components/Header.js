import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter } from 'next/router'
import { useRef } from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"

function Header() {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search  = (e) =>{
        e.preventDefault();
        const term = searchInputRef.current.value;
    
        if(!term) return;
    
        router.push(`/search?term=${term}`)
      }

    return (
        
        <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
        <Image src='/SearchMonke.png'
            alt="logo"
            height={40}
            width={180} className="cursor-pointer"
                onClick={()=> router.push("/")}
            />

            <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center
            px-6 py-3 ml-10 mr-5">
                <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />

                <XIcon className="h-7 text-gray-500 cursor-pointer  transition duration-100 transform hover:scale-125
                sm:mr-3" onClick={()=>(searchInputRef.current.value = "")}/>
                <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 
                border-gray-300"/>
                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex "/>
                <button hidden type='submit' onClick={search}>Search</button>
            </form>
            <Avatar className="ml-auto" url="https://scontent.fccu1-1.fna.fbcdn.net/v/t39.30808-6/258267333_3053637514916223_5937193679325620047_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OhPcbpvc540AX9FhjTR&_nc_ht=scontent.fccu1-1.fna&oh=a691ab999c41101711a08cfc082ac5cf&oe=61ACC6C2" />
        </div>
            
          <HeaderOptions />

        </header>
    )
}

export default Header

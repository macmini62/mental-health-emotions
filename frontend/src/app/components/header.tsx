import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import CreateOptions from "./dropDownOptions/createOptions";
import UserOptions from "./dropDownOptions/userOptions";

const Header = ({
  imageURL,
  userId,
  role
}:{
  imageURL: string | undefined,
  userId: string | undefined,
  role: string,
}) => {
  // console.log(role)
  return (
    <div className="w-full flex justify-between py-3 px-4 border-b-2 sticky z-50 left-0 top-0 bg-white shadow-sm">
      <div className="flex gap-6 items-center">
        <Link href=""><img src="/logo/logo-white.png" alt="" className="w-36 h-10"/></Link>
        <div className="max-w-fit h-10 flex px-3 gap-3 items-center bg-gray-100 rounded-full group">
          <button className="hover:rounded-full hover:bg-gray-300 p-1 group-focus-within:text-black"><IoSearchOutline className="w-6 h-6"/></button>
          <input type="text" name="" id="" className="px-2 w-52 outline-none bg-transparent group-focus-within:text-black" placeholder="Search"/>
        </div>
      </div>
      <div className="max-w-fit flex gap-6 items-center mr-2">
        { role && <CreateOptions/> }
        <UserOptions
          imageURL={imageURL}
          userId={userId}
        />
      </div>
    </div>
  )
}

export default Header;

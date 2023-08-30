import { Link } from "react-router-dom";
import { PostButtonNav } from "../Button";


export function NavBar() {   
    return(
        <div className="flex flex-col fixed border h-screen w-[318px] pl-[35px] pt-3 bg-white">
            <div className="">
                <img src="./icon/x.svg" alt="" className="w-[30px] ml-4 mb-4" />
                <ul className="box-border">
                    <Link to={"/home"}>
                        <li className="flex gap-4 text-lg p-[12px] px-5 w-fit hover:bg-[#E6E7E8] rounded-full cursor-pointer">
                            <img src="./icon/home.svg" alt="" className="w-[26.25px]"/>
                            Home
                        </li>
                    </Link>
                    
                    <li className="flex gap-4 text-lg p-[12px] px-5 w-fit hover:bg-[#E6E7E8] rounded-full cursor-pointer">
                        <img src="./icon/explore.svg" alt="" className="w-[26.25px]"/>
                        Explore
                    </li>
                    <li className="flex gap-4 text-lg p-[12px] px-5 w-fit hover:bg-[#E6E7E8] rounded-full cursor-pointer">
                        <img src="./icon/notifications.svg" alt="" className="w-[26.25px]"/>
                        Notifications
                    </li>
                    <li className="flex gap-4 text-lg p-[12px] px-5 w-fit hover:bg-[#E6E7E8] rounded-full cursor-pointer">
                        <img src="./icon/messages.svg" alt="" className="w-[26.25px]"/>
                        Messages
                    </li>
                    <li className="flex gap-4 text-lg p-[12px] px-5 w-fit hover:bg-[#E6E7E8] rounded-full cursor-pointer">
                        <img src="./icon/lists.svg" alt="" className="w-[26.25px]"/>
                        Lists
                    </li>
                    <li className="flex gap-4 text-lg p-[12px] px-5 w-fit hover:bg-[#E6E7E8] rounded-full cursor-pointer">
                        <img src="./icon/communities.svg" alt="" className="w-[26.25px]"/>
                        Communities
                    </li>
                    <li className="flex gap-4 text-lg p-[12px] px-5 w-fit hover:bg-[#E6E7E8] rounded-full cursor-pointer">
                        <img src="./icon/verified.svg" alt="" className="w-[26.25px]"/>
                        Verified
                    </li>
                    <Link to={"/user"}>
                        <li className="flex gap-4 text-lg p-[12px] px-5 w-fit hover:bg-[#E6E7E8] rounded-full cursor-pointer">
                            <img src="./icon/profile.svg" alt="" className="w-[26.25px]"/>
                            Profile
                        </li>
                    </Link>
                    <li className="flex gap-4 text-lg p-[12px] px-5 w-fit hover:bg-[#E6E7E8] rounded-full cursor-pointer">
                        <img src="./icon/moreOutline.svg" alt="" className="w-[26.25px]"/>
                        More
                    </li>
                         
                </ul>
                <PostButtonNav />
            </div>
        </div>
    )
}
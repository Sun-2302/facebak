import { PostButton } from "./Button";

export function NavBar() {    
    
    let links = ["Home","Explore","Notifications","Messages","Lists","Communities","Verified","Profile","More"];
    let icons =["./icon/home.svg","./icon/explore.svg","./icon/notifications.svg","./icon/messages.svg","./icon/lists.svg","./icon/communities.svg","./icon/verified.svg","./icon/profile.svg","./icon/more.svg"]
    
    return(
        <div className="flex flex-col relative border h-screen w-[318px] pl-[43px] ">
            <div className="px-[8px]">
                <img src="./icon/x.svg" alt="" className="w-[30px]" />
                <ul className="">
                    {links.map(link =>(
                            <li className="text-lg p-[12px] hover:bg-slate-200 rounded-full">
                                {link}
                            </li>
                    ))}     
                </ul>
                <PostButton />
            </div>
        </div>
    )
}
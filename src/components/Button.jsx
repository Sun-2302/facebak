export function ButtonFill({children}) {
    return(
        <button className="h-[2.375rem] text-white bg-[#1d9bf0] hover:bg-[#1A8CD8] mt-2 py-1 rounded-full w-[300px] mb-[8px]">{children}</button>
    )
}

export function ButtonOutline({children}){
    return(
        <button className="text-[#1d9bf0] mt-2 py-1 rounded-full border h-[2.375rem] w-[300px] hover:bg-[#E8F5FD]">{children}</button>
    )
}

export function ButtonOutlineBlack({children}) {
    return(
        <button className="flex flex-row justify-center mt-1 text-black py-1 rounded-full border h-[2.375rem] w-[300px] font-medium hover:bg-[#E6E7E8]"> {children}</button>
    )
}

export function PostButtonNav() {
    return(
        <button className="h-[50px] rounded-full text-white bg-[#1d9bf0] hover:bg-[#1A8CD8] mt-2 px-[90px]">Post</button>
    )
}

export function CloseButton({onclick}) {
    return(
        <button onClick={onclick} className="hover:bg-[#E7E7E8] w-fit ml-5 p-2 rounded-full"><img src="/icon/close.svg" alt="" className="w-[20px]"/></button>
    )
}

export function ArrowButton() {
    return(
        <button className="hover:bg-[#E7E7E8] ml-5 p-2 rounded-full"><img src="/icon/arrowLeft.svg" alt="" className="w-[20px]"/></button>
    ) 
}
export function SignUpButton() {
    return(
        <button className="h-[50px] rounded-full text-white bg-black hover:bg-[#272C30] mt-2 px-[90px] w-[423px]" type="submit">Sign Up</button>
    )
}

export function NextButton({children}) {
    return(
        <button className="h-[2.375rem] text-white bg-black hover:bg-[#272C30] mt-2 py-1 rounded-full w-[300px] mb-[8px]">{children}</button>
    )
}

export function ReplyButton(){
    return(
        <button className='bg-[#1d9bf0] hover:bg-[#1A8CD8] text-white rounded-full font-bold pl-4 pr-4 pt-1 pb-1 ml-28' type="submit">Reply</button>
    )
}

export function PostButton(){
    return(
        <button className='bg-[#1d9bf0] hover:bg-[#1A8CD8] text-white rounded-full font-bold pl-4 pr-4 pt-1 pb-1 ml-auto' type="submit">Post</button>
    )
}

export function EditProfileButtons(){
    return (
        <button className="h-[40px] mr-5 rounded-full shadow-md text-black bg-[#fdfdfd] mt-2 px-[20px] border border-opacity-10 border-gray-900 font-bold relative transition overflow-hidden">Edit profile
        <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 hover:opacity-100 transition"></div>
      
        </button>
    )
}

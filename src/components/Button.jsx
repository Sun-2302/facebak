export function ButtonFill({children}) {
    return(
        <button className="h-[2.375rem] text-white bg-[#1d9bf0] mt-2 py-1 rounded-full w-[300px] mb-[8px]">{children}</button>
    )
}

export function ButtonOutline({children}){
    return(
        <button className="text-[#1d9bf0] mt-2 py-1 rounded-full border h-[2.375rem] w-[300px]">{children}</button>
    )
}

export function AppleSignUpButton() {
    return(
        <button className="flex flex-row justify-center text-black mt-2 py-1 rounded-full border h-[2.375rem] w-[300px] font-semibold"><img src="icon/apple.svg" alt="" className="h-[20px] pr-2" /> Sign up with Apple</button>
    )
}

export function GoogleSignUpButton() {
    return(
        <button className="flex flex-row justify-center text-black mt-2 py-1 rounded-full border h-[2.375rem] w-[300px] mb-[20px] font-semibold"><img src="icon/google.svg" alt="" className="h-[20px] pr-2" /> Sign up with Google</button>
    )
}

export function PostButton() {
    return(
        <button className="h-[50px] rounded-full text-white bg-[#1d9bf0] mt-2 px-[32px]">Post</button>
    )
}
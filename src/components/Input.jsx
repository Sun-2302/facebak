export function UsernameInput({onChange, value}) {
    return(
        <input className="py-[16px] pl-2 w-[423px] outline outline-1 outline-slate-400 rounded-sm focus:outline-2 focus:outline-[#1d9bf0]" id="username" name="username" type="text" placeholder="Username" onChange={onChange} value={value}/>
    )
}

export function EmailInput({onChange, value}) {
    return(
        <input className="py-[16px] pl-2 w-[423px] outline outline-1 outline-slate-400 rounded-sm focus:outline-2 focus:outline-[#1d9bf0]" id="email" name="email" type="email" placeholder="Email" onChange={onChange} value={value}/>
    )
}

export function PasswordInput({onChange, value}) {
    return(
        <input className="py-[16px] pl-2 w-[423px] outline outline-1 outline-slate-400 rounded-sm focus:outline-2 focus:outline-[#1d9bf0]" id="password" name="password" type="password" placeholder="Password" onChange={onChange} value={value}/>
    )
}


export function ConfirmPasswordInput({onChange, value}) {
    return(
        <input className="py-[16px] pl-2 w-[423px] outline outline-1 outline-slate-400 rounded-sm focus:outline-2 focus:outline-[#1d9bf0]" id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" onChange={onChange} value={value}/>
    )
}

export function UsernameInputLogin(params) {
    return(
        <input className="py-[16px] pl-2 w-[300px] mb-2 outline outline-1 outline-slate-400 rounded-sm focus:outline-2 focus:outline-[#1d9bf0]" type="text" placeholder="Username"/>
    )
}

export function PasswordInputLogin(params) {
    return(
        <input className="py-[16px] pl-2 w-[300px] outline outline-1 outline-slate-400 rounded-sm focus:outline-2 focus:outline-[#1d9bf0]" type="password" placeholder="Password"/>
    )
}

export function CommentInput({value, onChange}){
    return(
        <textarea className="outline-none text-lg px-3 w-80 auto-expand" placeholder="Post your reply!" id="" value={value} cols="30" onChange={onChange} required></textarea>
    )
}

export function PostInput({value, onChange}){
    return(
        <textarea className="outline-none text-lg px-3 w-80 auto-expand py-1" placeholder="What is happening?!" value={value} cols="40" onChange={onChange} required></textarea>
    )
}
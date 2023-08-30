import Popup from "reactjs-popup";
import { ButtonOutlineBlack, CloseButton, NextButton } from "../Button";
import { PasswordInputLogin, UsernameInputLogin } from "../Input";
import { SignUp } from "./SignUp";
import { Link } from "react-router-dom";

export function Login({onclick}) {


    return(
        <div className="w-[600px] h-[568px] pb-6 pt-5 shadow-xl bg-gray-50 flex flex-col rounded-xl overflow-y-scroll">
           <div className="flex gap-56">
                <CloseButton onclick={onclick}/>
                <img src="icon/x.svg" alt="" className="w-8" />
           </div>
           
            <div className="flex flex-col items-center gap-2 mt-5">
                <h1 className="text-[31px] font-medium mb-4">Login to X</h1>
                <ButtonOutlineBlack><img src="icon/google.svg" alt="" className="h-[20px] pr-2" /> Log in with Google</ButtonOutlineBlack>
                <ButtonOutlineBlack><img src="icon/apple.svg" alt="" className="h-[20px] pr-2" /> Log in with Apple</ButtonOutlineBlack>
                <p className="flex flex-row mt-1">
                        <hr className="w-32 mt-3 mr-2"/>Or<hr className="w-32 mt-3 ml-2"/>
                </p>
                <UsernameInputLogin />
                <PasswordInputLogin />
                <Link to="/home">
                    <NextButton>Log in</NextButton>
                </Link>
                <ButtonOutlineBlack>Forgot your password? </ButtonOutlineBlack>
                <div className="flex mt-5 gap-3">
                    <p>You do not have an account ?</p>
                    <Popup trigger={<p className="cursor-pointer text-[#1d9bf0] hover:underline">Sign Up</p>} 
                            position="center center" modal nested
                        >
                            {close => (
                                <SignUp onClick={close}/>
                            )}
                    </Popup>
                </div>
            </div>
        </div>
    )
}
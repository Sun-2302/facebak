import { AppleSignUpButton, ButtonFill, ButtonOutline, GoogleSignUpButton } from "./Button";
import { LoginFooterLink } from "./LoginFooterLink";

export function Login() {
    return(
        <div>
            <div className="flex flex-row my-[20px]">
                    <div className="flex flex-col w-[619px] justify-center ">
                        <img src="./icon/x.svg" alt="" className="h-[338px]"/>
                    </div>
                    <div className="">
                        <h1 className="text-[64px] my-[48px] font-black">It's happening now</h1>
                        <h2 className="text-[31px] mb-[32px] font-black">Register.</h2>
                        <GoogleSignUpButton />
                        <AppleSignUpButton />
                        <p className="flex flex-row mt-1">
                            <hr className="w-32 mt-3 mr-2"/>Or<hr className="w-32 mt-3 ml-2"/>
                        </p>
                        <ButtonFill>Create an account</ButtonFill>
                        <p className="text-[11px] mb-[20px] w-[300px]">By signing up, you agree to the Terms of Service and Privacy Policy , including the Use of Cookies .</p>
                        <p className="mt-[40px] mb-[20px]">Already have an account ?</p>
                        <ButtonOutline>To log in</ButtonOutline>
                    </div>
            </div>
            <ul className="flex flex-row flex-wrap pt-[32px] px-[16px] justify-center">
                <LoginFooterLink />
            </ul>
        </div>
 
    )
}
import React from 'react';
import Popup from 'reactjs-popup';
import { ButtonOutlineBlack } from '../components/Button';
import { SignUp } from '../components/forms/SignUp';
import { Login } from '../components/forms/Login';
import { TwitterFooterLink } from '../components/TwitterFooterLink';

export function Twitter() {
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

    return(
        <div>
            <div className="flex flex-row my-[20px]">
                    <div className="flex flex-col w-[619px] justify-center ">
                        <img src="./icon/x.svg" alt="" className="h-[338px]"/>
                    </div>
                    <div className="">
                        <h1 className="text-[64px] my-[48px] font-black">It's happening now</h1>
                        <h2 className="text-[31px] mb-[32px] font-black">Register.</h2>
                        <ButtonOutlineBlack><img src="icon/google.svg" alt="" className="h-[20px] pr-2" /> Sign up with Google</ButtonOutlineBlack>
                        <ButtonOutlineBlack><img src="icon/apple.svg" alt="" className="h-[20px] pr-2" /> Sign up with Apple</ButtonOutlineBlack>
                        <div className="flex flex-row mt-1">
                            <hr className="w-32 mt-3 mr-2"/>Or<hr className="w-32 mt-3 ml-2"/>
                        </div>

                        <Popup trigger={<button className="h-[2.375rem] text-white bg-[#1d9bf0] hover:bg-[#1A8CD8] mt-2 py-1 rounded-full w-[300px] mb-[8px]">Create an account</button>} 
                                position="center center" modal nested closeOnDocumentClick
                                {...{overlayStyle} }
                        >
                            {close => (
                                <SignUp onClick={close}/>
                            )}  
                        </Popup>

                        <p className="text-[11px] mb-[20px] w-[300px]">By signing up, you agree to the Terms of Service and Privacy Policy , including the Use of Cookies .</p>
                        <p className="mt-[40px] mb-[20px]">Already have an account ?</p>
                        
                        <Popup trigger={<button className="text-[#1d9bf0] mt-2 py-1 rounded-full border h-[2.375rem] w-[300px] hover:bg-[#E8F5FD]">To log in</button>} 
                                position="center center" modal nested closeOnDocumentClick
                                {...{overlayStyle} }
                        >
                            {close => (
                                <Login onclick={close}/>
                            )}
                        </Popup>
                        
                    </div>
            </div>
            <ul className="flex flex-row flex-wrap pt-[32px] px-[16px] justify-center">
                <TwitterFooterLink />
            </ul>
        </div>
 
    )
}
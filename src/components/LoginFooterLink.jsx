export function LoginFooterLink() {
    let links = ["About","Support Center","Terms of use","Privacy Policy",
    "Cookie Policy","Accessibility","Information about advertisements","Blog",
    "Status","Carrers","Brand Resources","Advertisement","Marketing","X for professionals",
    "Developers","Directory","Settings","© 2023 X Corp."];

    for (let i = 0; i < links.length; i++) {
        return links.map(link =>(
            <li className="pr-[16px] my-[4px] text-[13px] text-[#536471] hover:underline hover:cursor-pointer">{link}</li>
        )) 
    }
}
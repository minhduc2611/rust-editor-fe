import { AppWindow } from "lucide-react";
import { FileText } from "lucide-react";
import { Settings } from "lucide-react";
import { Sun } from "lucide-react";

export default function Navbar() {
    const style = {
        menu: "flex h-8 w-40 p-2 rounded-md hover:bg-slate-100 cursor-pointer",
        footerMenuSpan: "ml-3 font-medium text-sm pb-1",
        footerLink: "font-medium underline h-12 pb-4",
    };

    return (
        <div className="Navbar grid h-full h-screen ">

            <div className="nav grid grid-cols-1 gap-y-8 h-16 mt-20 ml-24 h-[72vh] ">
                <div className="menu grid grid-cols-1 gap-y-3 h-16 mt-1 ml-4 h-12">
                    <div className={style.menu}>
                        <FileText size={18} />
                        <span className={style.footerMenuSpan}>Post</span>
                    </div>
                    <div className={style.menu}>
                        <AppWindow size={18} />
                        <span className={style.footerMenuSpan}>Billing</span>
                    </div>
                    <div className={style.menu}>
                        <Settings size={18} />
                        <span className={style.footerMenuSpan}>Setting</span>
                    </div>
                </div>
            </div>

            <div className="footer flex items-end w-screen justify-between font border-t h-16">
                
                <div className="icon flex items-center text-xl mr-20  ml-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6 mb-2 mr-4"
                    >
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>

                    <span className = 'text-sm mb-2 '>
                         Built by
                          <a href="" className={style.footerLink}> shadcn. </a> 
                         Hosted on
                          <a href="" className={style.footerLink}> Vercel. </a>
                         Illustrations by
                          <a href="" className={style.footerLink}> Popsy. </a> 
                         The source code is available on
                         <a href="" className={style.footerLink}> GitHub. </a>
                     </span>
                </div>

                <Sun className="text-xl mr-20  w-8 h-8 rounded-md hover:bg-slate-100 p-1.5 " />

            </div>
        </div>
    );
}

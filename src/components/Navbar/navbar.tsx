import { BiCreditCard } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

export default function Navbar() {
    const style = {
        span: "ml-3 font-medium text-sm pb-1",
        iconMenu: "text-lg",
        menu: "flex h-8 w-40 p-2 rounded-md hover:bg-slate-100 cursor-pointer",
        aFooter: "font-medium underline h-12 pb-4",
    };

    return (
        <div className="Navbar grid h-full h-screen ">
            <div className="nav grid grid-cols-1 gap-y-8 h-16 mt-20 ml-24 h-[72vh] ">
                <div className="menu grid grid-cols-1 gap-y-3 h-16 mt-1 ml-4 h-12">
                    <div className={style.menu}>
                        <FiFileText className={style.iconMenu} />
                        <span className={style.span}>Post</span>
                    </div>
                    <div className={style.menu}>
                        <BiCreditCard className={style.iconMenu} />
                        <span className={style.span}>Billing</span>
                    </div>
                    <div className={style.menu}>
                        <FiSettings className={style.iconMenu} />
                        <span className={style.span}>Setting</span>
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

                    <span className="text-sm mb-2 ">
                        Built by
                        <a href="" className={style.aFooter}>
                            {" "}
                            shadcn.{" "}
                        </a>
                        Hosted on
                        <a href="" className={style.aFooter}>
                            {" "}
                            Vercel.{" "}
                        </a>
                        Illustrations by
                        <a href="" className={style.aFooter}>
                            {" "}
                            Popsy.{" "}
                        </a>
                        The source code is available on
                        <a href="" className={style.aFooter}>
                            {" "}
                            GitHub.{" "}
                        </a>
                    </span>
                </div>

                <FiSun className="text-xl mr-20  w-8 h-8 rounded-md hover:bg-slate-100 p-1.5 " />
            </div>
        </div>
    );
}

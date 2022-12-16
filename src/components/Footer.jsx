import React from "react"
import { default as footerMobile } from "../images/bg-footer-top-mobile.svg"
import { default as footerDesktop } from "../images/bg-footer-top-desktop.svg"
import { default as whiteLogo } from "../images/white-logo.svg"

import { default as email } from "../images/icon-email.svg"
import { default as phone } from "../images/icon-phone.svg"



class Footer extends React.Component {
    constructor(){
        super()
    }

    componentDidMount(){
        const form = document.querySelector("#form")
        const email = document.querySelector("#email")
        const msg = document.querySelector("#msg")

        email.addEventListener("keyup", (e) => {
            if (e.target.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi)) {
                msg.classList.add("hidden")
            }else{
                msg.classList.remove("hidden")
            }
        })

    }

    render() {

        return (
            <>
                <footer className="relative w-full mt-32 block">
                    <div className="w-full">
                        <img src={footerMobile} alt="" className="md:hidden block w-full" />
                        <img src={footerDesktop} alt="" className="md:block hidden w-full" />
                        <div className="bg-custom-very-dark-cyan w-full grid grid-cols-1 md:grid-cols-2 text-white px-8 py-16">
                            
                            <article className="flex flex-col mt-16 mx-auto order-2 md:mt-0  md:order-1">
                                <img className="w-32" src={whiteLogo} alt="" />
                                <p className="mt-4 text-sm max-w-xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia
                                    vestibulum a, ultrices quis sem.
                                </p>
                                <div className="mt-4 flex gap-4">
                                    <img src={phone} alt="" className="" />
                                    <span>Phone: +1-543-123-4567</span>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <img src={email} alt="" />
                                    <span>example@huddle.com</span>
                                </div>

                                <article className="flex gap-4 justify-center items-center w-fit mt-16">
                                <i className="fa-brands fa-facebook text-2xl hover:text-sky-500 hover:cursor-pointer"></i>
                                <i className="fa-brands fa-instagram text-2xl hover:text-sky-500 hover:cursor-pointer"></i>
                                <i className="fa-brands fa-twitter text-2xl hover:text-sky-500 hover:cursor-pointer"></i>
                                </article>

                            </article>

                            <article className="flex flex-col mx-auto order-1 md:order-2">
                            <h3 className="font-bold text-2xl">Newsletter</h3>
                            <p className="mt-4 text-sm max-w-xs">To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never
                                send you spam or pass on your email address</p>
                                
                            <form id="form" className="relative flex gap-4 mt-4 flex-col md:flex-row">
                                <input className="h-8 pl-4 text-black" type="email" name="" id="email" placeholder="Enter your email..."/>
                                <button className="hover:bg-custom-light-pink bg-custom-pink text-white font-bold ml-auto w-32 h-8">Subscribe</button>
                                <span id="msg" className="text-red-600 absolute top-10 hidden">Check Your Email Please</span>
                            </form>
                         

                            </article>
                        </div>
                    </div>
                </footer>

            </>
        );
    }
}

export default Footer
import React from "react"
import { default as logo } from "../images/logo.svg"
import { default as mockups} from "../images/screen-mockups.svg"
import Button from "./Button";

class Header extends React.Component {
  render() {
    return (
      <>
        <header>

          <nav className="p-4 flex justify-between items-center">
            <img src={logo} alt="" className="w-32" />
            <button className="block hover:shadow-custom-pink hover:shadow-md bg-white border border-custom-pink rounded-2xl h-8 w-32 text-custom-pink cursor-pointer font-custom-opensans">
              Try it Free
            </button>
          </nav>

          <section className="px-8 text-center">
            <h1 className="mt-16 font-custom-poppins md:text-4xl">Build The Community Your Fans Will Love</h1>
            <p className="leading-6 mt-4 font-custom-opensans md:max-w-2xl md:mx-auto">Huddle re-imagines the way we build communities. You have a voice, but so does
              your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <Button />
            <img className="w-full mt-16 md:w-4/6 md:mx-auto block" src={mockups} alt="" />
          </section>
        </header>
      </>
    );
  }
}

export default Header
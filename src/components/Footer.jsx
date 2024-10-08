import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <div className="h-[45vh] bg-[#313131]">
      <div className="flex justify-around  items-center pt-10">
        <div className="flex flex-col">
          <div className="flex"> 
          <img className="w-[90px]" src="src\assets\images\BookNest logo.png" alt="" />
          <h1 className="text-white">BookNest</h1>
        </div>
        <div className="pt-10 text-white text-base"> 
          <span><FaLocationDot /></span>
        osu close, plot n. 7
        <span><IoIosCall /></span>
        <p>+233 50 854 3215</p>
        <p>+233 55 869 6221</p>
        <span><IoMail /></span>
        <p>anewurasi@gmail.com</p></div>
      </div>
      <div className="flex flex-col text-white text-base">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Book</a>
        <a href="">Contact Us</a>
      </div>
      <div className="text-white text-base">
       <h1> FOLLOW US</h1>
       <p><FaFacebook /></p>
       <p><FaXTwitter /></p>
       <p><FaWhatsapp /></p>
       <p><FaLinkedin /></p>
      </div>
      </div>
    </div>
  )
}

export default Footer

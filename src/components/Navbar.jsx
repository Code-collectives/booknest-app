
import { Link } from "react-router-dom"
import { BsTelephonePlusFill } from "react-icons/bs"
function Navbar() {
  return (
    <div className="bg-white pt-0 h-[10%]">
    <div className="flex w-[80%] items-center gap-x-8 justify-around pl-20">
     <div className="flex gap-x-2  items-center  ">
      <span><img className="w-[35%]" src="src\assets\images\Booknest__1_-removebg-preview.png" alt="Logo"/></span></div>
     <div className="flex gap-x-6 h-20px w-[40%] pl-20">
     <div><Link to="#" className="text-[#3AB4FA]">Home</Link></div>
     <div><Link to="/aboutUs" className="text-[#3AB4FA]">About Us</Link></div>
     <div><Link to="/contactUs" className="text-[#3AB4FA]">Contact Us</Link></div>
      </div>
      <div className="flex gap-x-2 w-[20%] pl-10 text-[#3AB4FA]">
<span className="pt-1"><BsTelephonePlusFill /></span>
<h1 className="text-[#3AB4FA]"> 233 26 052 7007</h1>
      </div>
    </div>
    </div>
  )
}

export default Navbar

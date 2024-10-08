import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"


function AboutUs() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <div>
      <div class="about-header-wrapper postion-relative pb-10 ">
        <h1 class=" text-stroke text-white">ABOUT</h1>
         <h1 class="text-f position-absolute">ABOUT ME</h1>
      </div>
      <div className="flex justify-around">
      <div>
        <img src="src\assets\images\img2.png"  />
        </div>
      <div className="w-[40%]">
       <h1>OUR MISSION</h1>
       <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
        et quasi architecto beatae vitae dicta sunt explicabo.<br/>
     Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
 adipisci velit, sed quia non numquam eius modi tempora incid</p>
      </div>
      </div>
      <div className="pt-20">
        <div className="flex flex-col justify-center  items-center w-[86%] pl-50">
            <h1>MEET OUR TEAM</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply 
                random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        </div>
        <div className="flex justify-around mt-[2rem]">
            <div className="flex flex-col justify-center">
                <img  className="box-border h-100 w-100 p-4 rounded-full" src="src\assets\images\img3.png" alt="" />
                <h1 className="pl-14"> Ewurasi Ayanful</h1>
                <h1 className="pl-14">Front-end Developer</h1>
            </div>
            <div>
                <img  className="box-border h-100 w-100 p-4 rounded-full" src="src\assets\images\img3.png" alt="" />
                <h1 className="pl-14">Ewurasi Ayanful</h1>
                <h1 className="pl-14">Front-end Developer</h1>
            </div>
            <div>
                <img  className="box-border h-100 w-100 p-4 rounded-full" src="src\assets\images\img3.png" alt="" />
                <h1 className="pl-14">Ewurasi Ayanful</h1>
                <h1 className="pl-14">Front-end Developer</h1>
            </div>
            <div>
                <img  className="box-border h-100 w-100 p-4 rounded-full" src="src\assets\images\img3.png" alt="" />
                <h1 className="pl-14">Ewurasi Ayanful</h1>
                <h1 className="pl-14">Front-end Developer</h1>
            </div>
        </div>
        <div className="flex justify-around mt-[8.5rem]">
      <div>
        <img src="src\assets\images\img4.png"  />
        </div>
      <div className="w-[40%]">
       <h1>OUR SERVICES </h1>
       <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
        et quasi architecto beatae vitae dicta sunt explicabo.<br/>
     Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
 adipisci velit, sed quia non numquam eius modi tempora incid</p>
      </div>
      </div>
        </div>
      </div>
      </div>
      <Footer />
      </div>
  )
}

export default AboutUs
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"

const BookList = () => {
  return (
    <div>
     <Navbar />
     <Hero />
      <div><Link to="/add-new">Add Book</Link></div>
      <Footer />
    </div>
  )
}

export default BookList

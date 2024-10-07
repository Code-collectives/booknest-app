import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const BookList = () => {
  return (
    <div>
     <Navbar />
      <div><Link to="/add-new">Add Book</Link></div>
      <Footer />
    </div>
  )
}

export default BookList

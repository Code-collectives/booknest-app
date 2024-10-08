import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import K from "../../constants"

const BookList = () =>{
  return (
    <div>
      {
        K.BOOKS.map((book,index) =>{
          console.log(`${index}: ${book.text}`);
          return (
            <div key={index} className="">
              <span>{book.author}
                <h1>{book.review}</h1>
                <p>{book.description}</p>
              </span>

            </div>
          )
        })
      }
    </div>
  )
}
export default BookList

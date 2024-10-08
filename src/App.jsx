
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BookList from './pages/bookList'
import AddBook from './pages/addBook'
import BookDetails from './pages/bookDetails'
import AboutUs from './pages/aboutUs'
import Contact from './pages/contactUs'

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<BookList />
  },
  {
    path:"/add-new",
    element:<AddBook />
  },
  {
    path:"/books/:id",
    element:<BookDetails />
  },
  {
    path:"/aboutUs",
    element:<AboutUs />
  },
  {
    path:"/contactUs",
    element:<Contact />
  },


])

  return (
     <RouterProvider router={router}/>
  
  )
}

export default App

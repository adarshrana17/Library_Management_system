import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookDetails from './Components/BookDetails.jsx'
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom'
import BookList from './Components/BookList.jsx'
import AllBooks from './Components/AllBooks.jsx'
import FictionBooks from './Components/FictionBooks.jsx'
import NonFictionBooks from './Components/Non-Fiction.jsx'
import BrowseBook from './Components/BrowseBook.jsx'
import SciFiBooks from './Components/Sci-Fi.jsx'
import AddBook from './Components/AddBook.jsx'
import ErrorComponent from './Components/ErrorComponent.jsx'
import { Provider } from 'react-redux'
import bookStore from './utlis/bookStore.js'



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<ErrorComponent />
  },
  {
    path:"/book/:id",
    element:<BookDetails />
  },
  {
    path:"/browsebook",
    element:<BrowseBook />
  },
  {
    path:"/allbooks",
    element:<AllBooks />
  },
  {
    path:"/allcategories",
    element:<AllBooks />
  },
  {
    path:"/fiction",
    element:<FictionBooks />
  },
  {
    path:"/non-fiction",
    element:<NonFictionBooks />
  },
  {
    path:"/sci-fi",
    element:<SciFiBooks />
  },
  {
    path:"/addbook",
    element:<AddBook />
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={bookStore}>
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
   </Provider>
)

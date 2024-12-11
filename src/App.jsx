
import './App.css'
import Inbox from './components/Inbox'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mail from './components/Mail'
import SendEmail from './components/SendEmail'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import { Toaster } from 'react-hot-toast'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/', // No need for leading slash in nested routes
        element: <Inbox />
      },
      {
        path: "/mail/:id", // No need for leading slash in nested routes
        element: <Mail />
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  }
]);


function App() {


  return (
    <div className='bg-[#F6F8FC h-screen'>
      {/* <Navbar/> */}
      <RouterProvider router={appRouter}/>
      <div className='absolute w-[30%] bottom-0 right-20 z-10'>
        <SendEmail />
      </div>
      <Toaster/>
    
    </div>
  )
}

export default App

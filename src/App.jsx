import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="text-xl font-bold">Testing Router now</h1>,
    errorElement: <h1 className="text-3xl font-bold text-red-600">Error Buddy, Pal</h1>
  },
  {
    path: "projects",
    element: <h1 className="text-xl font-bold">Project Brother</h1>,
  },
  {
    path: "experience",
    element: <h1 className="text-xl font-bold">Experience Brother</h1>,
  },
  {
    path: "contact",
    element: <h1 className="text-xl font-bold">Contact Brother</h1>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
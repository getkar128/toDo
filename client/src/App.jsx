import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

import RootLayout from "./components/layouts/RootLayout"
import Home from "./pages/Home"
import Loader from "./components/shared/Loader"

const CreateTodo = lazy(() => import("./pages/CreateTodo"))
const UpdateTodo = lazy(() => import("./pages/UpdateTodo"))


const App = () => {
    return (
        <main className="h-screen mx-auto max-w-5xl w-full flex flex-col ">
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="create" element={<Suspense fallback={<Loader />}><CreateTodo /></Suspense>} />
                    <Route path="update/:id?" element={<Suspense fallback={<Loader />}><UpdateTodo /></Suspense>} />
                </Route>
            </Routes>
        </main>
    )
}

export default App
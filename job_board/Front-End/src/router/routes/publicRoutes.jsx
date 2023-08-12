
import { lazy, Suspense } from "react"
const LandingPage = lazy(() => import("../../views/pages/LandingPage"))

const publicRoute = [
    {
        path:"/",
        element:<Suspense fallback="loading..." >
            <LandingPage />
        </Suspense>
    }
]


export default publicRoute
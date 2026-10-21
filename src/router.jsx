import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Overview from "./components/Overview";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import SystemDesign from "./components/SystemDesign";
import TechStack from "./components/TechStack";
const router= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element: <Overview/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/experience",
                element:<Experience/>
            },
            {
                path:"/projects",
                element:<Projects/>
            },
            {
                path:"/tech-stack",
                element:<TechStack/>
            },
            {
                path:"/system-design",
                element:<SystemDesign/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    }
])
export default router;
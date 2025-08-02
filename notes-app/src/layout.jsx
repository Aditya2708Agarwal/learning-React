import { Outlet } from "react-router-dom";  
import { Sidebar } from "./components/sidebar";
import { Navbar } from "./components/Navbar";

export const Layout =() =>{
    return(
        <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="fixed top-0 left-0 right-0 z-50 navbar-container">
                <Navbar />
            </div>
            <main className="flex gap-6 h-full pt-18">
                <div className="fixed top-18 left-0 bottom-0 z-40 sidebar-container">
                    <Sidebar />
                </div>
                <div className="flex-1 p-6 ml-70 overflow-y-auto main-content">
                    {/* This is where your page content will be rendered */}
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
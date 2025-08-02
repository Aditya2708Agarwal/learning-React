import { Outlet } from "react-router-dom";  
import { Sidebar } from "./components/sidebar";
import { Navbar } from "./components/Navbar";

export const Layout =() =>{
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Navbar />
            <main className="flex gap-6">
                <Sidebar />
                <div className="flex-1 p-6">
                    {/* This is where your page content will be rendered */}
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
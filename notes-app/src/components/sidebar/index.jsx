import { NavLink } from "react-router-dom"

export const Sidebar = () => {

    const sidebarStyle = ({isActive}) => {
        return isActive ? "flex items-center gap-3 px-4 py-3 mx-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 transform translate-x-1 transition-all duration-300 ease-out" 
            : "flex items-center gap-3 px-4 py-3 mx-3 rounded-xl hover:bg-blue-500/10 hover:transform hover:translate-x-1 transition-all duration-300 ease-out text-slate-300 hover:text-blue-300";
    }
    return (
        <aside className="flex flex-col gap-2 text-white w-80 h-screen p-4 bg-slate-900/50 backdrop-blur-xl border-r border-slate-700/50">
            <NavLink className={sidebarStyle} to='/'>
                <span className="material-symbols-outlined text-4xl">
                    home
                </span>Home</NavLink>
            <NavLink className={sidebarStyle} to='/important'>
                <span className="material-symbols-outlined text-4xl">
                    label_important
                </span>Important</NavLink>
            <NavLink  className={sidebarStyle} to='/archive'>
                <span className="material-symbols-outlined text-4xl">
                    archive
                </span>Archive</NavLink>
            <NavLink className={sidebarStyle} to='/bin'>
                <span className="material-symbols-outlined text-4xl">
                    auto_delete
                </span>Bin</NavLink>
        </aside>
    )
} 
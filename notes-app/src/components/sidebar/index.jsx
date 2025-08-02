import { NavLink } from "react-router-dom"

export const Sidebar = () => {

    const sidebarStyle = ({isActive}) => {
        return isActive ? "flex items-center gap-3 px-4 py-3 mx-2 text-2xl rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-200/30 text-blue-300 transform transition-all duration-200 ease-out" 
            : "flex items-center gap-3 px-4 py-3 mx-3 rounded-xl text-2xl hover:bg-blue-500/10 hover:transform transition-all duration-200 ease-out text-slate-200 hover:text-blue-200";
    }
    return (
        <aside className="flex flex-col gap-2 text-white w-70 h-full py-4 px-2.5 bg-slate-900/50 backdrop-blur-xl border-r border-slate-700/50">
            <NavLink className={sidebarStyle} to='/'>
                <span className="material-icons-outlined !text-3xl">
                    home
                </span>Home</NavLink>
            <NavLink  className={sidebarStyle} to='/archive'>
                <span className="material-icons-outlined !text-3xl">
                    archive
                </span>Archive</NavLink>
            <NavLink className={sidebarStyle} to='/bin'>
                <span className="material-icons-outlined !text-3xl">
                    auto_delete
                </span>Bin</NavLink>
        </aside>
    )
} 
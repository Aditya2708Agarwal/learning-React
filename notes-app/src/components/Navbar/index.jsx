import logo from '../../assets/logo.png'

export const Navbar = () => {
    return (
        <header className="border-b-2 border-slate-700/50 px-2 py-2 bg-slate-900/50 backdrop-blur-xl">
            <div className="flex">
                <img src={logo} alt="logo" className="w-14 mr-3" />
                <h1 className="text-white text-5xl font-bold">Noted-It</h1>
            </div>
        </header>
    )
}
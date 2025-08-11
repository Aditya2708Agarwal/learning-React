import { useState } from 'react'
import './App.css'

function App() {

  const[search, setSearch] = useState("");
  const[user, setUser] = useState(null);
  
  const searchUser = async() => {

    if(!search.trim()) return;
    const res = await fetch(`https://api.github.com/users/${search}`);
    const data = await res.json();
    setUser(data);
  }



  return (
    <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-gray-900 p-6'>
      <h1 className='text-blue-500 text-6xl font-bold my-10 tracking-wide'>GITHUB USER FINDER</h1>
      <div className="mt-5 mb-5 flex justify-between w-full max-w-2xl">
        <input
          className="mr-2.5 h-[44px] w-full rounded-lg border px-4 py-3 text-xl font-bold focus:outline-0 border-zinc-500 bg-transparent text-white placeholder:text-zinc-400" value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="enter username..." onKeyDown={(e) => {
    if (e.key === "Enter") {
      searchUser();
    }}} />
          <button
          className="mt-auto w-[150px] rounded-lg px-4 py-5 text-base font-medium bg-white hover:bg-white/80 active:bg-white/90 border-b-blue-600" onClick={searchUser}
        >
          Find
        </button>
      </div>

      {user && !user.message && (
        <div className="p-4 rounded-lg bg-gray-800 text-white min-w-[650px] mt-6">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full" />
          <h2 className="text-2xl font-bold mt-2">{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <p className="mt-1">Followers: {user.followers} | Following: {user.following}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-400 underline">
            View Profile
          </a>
        </div>
      )}

      {user?.message && (
        <p className="text-red-500">User not found!</p>
      )}
    </div>
  )
}
export default App

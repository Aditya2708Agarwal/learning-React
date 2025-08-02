import { Navbar } from "../../components/Navbar"
import { Fragment, useState } from "react"
import { Sidebar } from "../../components/sidebar"
import { notesReducer } from "../../reducers/notesReducer"

export const Home = () => {



    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="flex flex-col gap-3 p-4 w-full">
                    <div className="flex flex-col w-[350px] border-indigo-500	 border-3 rounded-lg relative">
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className="border text-white" placeholder="Enter Title" />
                        <textarea value={text} onChange={(e) => setText(e.target.value)} className="border text-white" placeholder=" Enter text" />
                        <button className="absolute bottom-0 right-0"><span class="material-symbols-outlined text-white">
                            add_box
                        </span></button>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
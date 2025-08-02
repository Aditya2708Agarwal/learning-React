import { Navbar } from "../../components/Navbar"
import { Fragment, useState, useReducer } from "react"
import { Sidebar } from "../../components/sidebar"
import { notesReducer } from "../../reducers/notesReducer"

export const Home = () => {

    const initialState = {
        title: "",
        text: "",   
        notes: [],
        isArchived: false,
        pinnedNotes: [],
        unpinnedNotes: [],
        isDeleted: false, 
    }

    const [{title, text, notes}, notesDispatch] = useReducer(notesReducer, initialState);

    const onTitleChange = (e) => {
        notesDispatch({
            type: "TITLE",
            payload: e.target.value
        })
    }

    const onTextChange = (e) => {
        notesDispatch({
            type: "TEXT",
            payload: e.target.value
        })
    }

    const onAddClick = () => {
        notesDispatch({
            type: "ADD_NOTE"
        })
        notesDispatch({
            type: "CLEAR_INPUT"
        })
    }

    console.log(notes);

    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="flex flex-col gap-3 p-4 w-full">
                    <div className="flex flex-col  w-[350px] bg-slate-900 border-3 rounded-lg relative border-neutral-800 px-2 min-h-[150px]">
                        <input value={title} onChange={onTitleChange} className=" text-white" placeholder="Enter Title" />
                        <textarea value={text} onChange={onTextChange} className="border-neutral-800 text-white" placeholder=" Enter text" />
                        <button disabled = {title.length === 0} onClick={onAddClick} className="absolute bottom-0 right-0"><span className="material-symbols-outlined text-white">
                            add_box
                        </span></button>
                    </div>
                    <div className="mt-12 flex flex-wrap gap-4 ">
                        {
                            notes?.length > 0 && notes.map( note => (
                                <div key={note.id} className="border p-3 rounded-lg mb-2 bg-slate-800 w-[350px] min-h-[175px]">
                                   <div className="flex items-center justify-between mb-1 border-b-2 p-2 border-sky-400">
                                        <h3 className="text-2xl text-sky-400 font-bold">{note.title}</h3> 
                                        <span className="material-symbols-outlined text-sky-400">
                                            push_pin
                                        </span>
                                    </div>
                                    <div className="flex items-start justify-between min-h-2/3 text-xl py-1">
                                        <p className="mr-1 text-sky-100">{note.text}</p>
                                        <div className="text-sky-400">
                                            <button>
                                            <span className="material-symbols-outlined ">
                                                archive
                                            </span>
                                            <span className="material-symbols-outlined ">
                                                delete
                                            </span>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
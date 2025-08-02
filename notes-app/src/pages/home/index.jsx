import { Navbar } from "../../components/Navbar"
import { Fragment, useReducer } from "react"
import { Sidebar } from "../../components/sidebar"
import { notesReducer } from "../../reducers/notesReducer"
import { NotesCard } from "../../components/notesCard/notesCard"
import { useNotes } from "../../reducers/notesContext"

export const Home = () => {

    const { title, text, notes, archived, notesDispatch } = useNotes();

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

    const pinnedNotes = notes?.length > 0 && notes.filter((note) => note.isPinned);
    const otherNotes = notes?.length > 0 && notes.filter((note) => !note.isPinned);

    console.log(archived);

    return (
        <div className="flex flex-col gap-3 p-4 w-full">
            <div className="flex flex-col  w-[350px] bg-slate-900 border-3 rounded-lg relative border-neutral-800 px-2 py-4 min-h-[175px]">
                <input value={title} onChange={onTitleChange} className=" text-white bg-transparent pb-2 mb-2" placeholder="Enter Title" />
                <textarea value={text} onChange={onTextChange} className="text-white resize-none" placeholder=" Enter text" />
                 <button disabled={title.length === 0} onClick={onAddClick} className="absolute bottom-1 right-2"><span className="material-icons-outlined text-white !text-3xl cursor-pointer">
                    add_box
                </span></button>
            </div>

            {pinnedNotes?.length > 0 && <h3 className="mt-14 text-2xl text-sky-400 font-bold"> 📌 Pinned Notes</h3>}

            <div className="mt-1 flex flex-wrap gap-4 ">
                {
                    pinnedNotes?.length > 0 && pinnedNotes.map(note => (
                        <NotesCard key={note.id} id={note.id} title={note.title} text={note.text} isPinned={note.isPinned} />
                    ))
                }
            </div>
            <div className="mt-12 flex flex-wrap gap-4 ">
                {
                    otherNotes?.length > 0 && otherNotes.map(note => (
                        <NotesCard key={note.id} id={note.id} title={note.title} text={note.text} isPinned={note.isPinned} />
                    ))
                }
            </div>
        </div>
    )
}
import { notesReducer } from "../../reducers/notesReducer"
import { NotesCard } from "../../components/notesCard/notesCard"
import { useNotes } from "../../reducers/notesContext"
import Masonry from "react-masonry-css"

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

    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        768: 1,
    }

    return (
        <div className="flex flex-col gap-3 p-4 w-full">
            <div className="flex flex-col  w-[350px] bg-slate-900 border-3 rounded-lg relative border-neutral-800 px-2 py-4 min-h-[175px]">
                <input
                    value={title}
                    onChange={onTitleChange}
                    className=" text-white bg-transparent pb-2 mb-2 focus:outline-none border-b-2 placeholder:text-slate-300 border-slate-600 focus:border-sky-400"
                    placeholder="Enter Title" />
                <textarea
                    value={text}
                    onChange={onTextChange}
                    rows={1}
                    className="text-white w-full h-20 bg-transparent text-base resize-none focus:outline-none placeholder:text-slate-400 overflow-hidden "
                    placeholder=" Enter text"
                    style={{
                        maxHeight: "200px",
                        overflowY: "auto"
                    }}
                    onInput={(e) => {
                        e.target.style.height = "auto"; // reset height
                        e.target.style.height = `${e.target.scrollHeight}px`; // grow with content
                    }} />
                <button disabled={title.length === 0} onClick={onAddClick} className="absolute bottom-1 right-2 hover:scale-110 transition-transform m-2 "><span className="material-icons-outlined text-white !text-3xl cursor-pointer">
                    add_box
                </span></button>
            </div>


            {pinnedNotes?.length > 0 && <h3 className="mt-14 text-2xl text-sky-400 font-bold"> 📌 Pinned Notes</h3>}

            <div className="mt-1 flex flex-wrap gap-1 ">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-full gap-1"
                    columnClassName="masonry-column">
                    {
                    pinnedNotes?.length > 0 && pinnedNotes.map(note => (
                        <NotesCard key={note.id} id={note.id} title={note.title} text={note.text} isPinned={note.isPinned} />
                    ))
                }
                </Masonry>
            </div>
            <div className="mt-12 flex flex-wrap gap-1 ">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-full gap-1"
                    columnClassName="masonry-column">
                        {
                    otherNotes?.length > 0 && otherNotes.map(note => (
                        <NotesCard key={note.id} id={note.id} title={note.title} text={note.text} isPinned={note.isPinned} />
                    ))
                }
                </Masonry>
            </div>
        </div>
    )
}
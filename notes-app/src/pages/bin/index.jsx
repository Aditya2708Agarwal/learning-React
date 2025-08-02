import { useNotes } from "../../reducers/notesContext";
import { NotesCard } from "../../components/notesCard/notesCard";
import Masonry from "react-masonry-css";

export const Bin = () => {

    const { deleted, notesDispatch } = useNotes();

    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        768: 1,
    }


    return (
        <div className="flex gap-8 p-4 w-full">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-full gap-1"
                columnClassName="masonry-column">
                {
                    deleted?.length > 0 && deleted.map(note => (
                        <div className="flex items-start gap-2 mx-3" >
                        <NotesCard key={note.id} id={note.id} title={note.title} text={note.text} />
                        <button onClick = {() => confirm("Permanently delete this note?" ) && notesDispatch({
                            type: "DELETE_FOREVER",
                            payload: { id: note.id }
                        })} className="flex-shrink-0 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 hover:animate-pulse hover:ring-4 hover:ring-red-300 hover:ring-opacity-75 transition-all duration-300 material-icons-outlined h-[175px] w-10 flex items-center justify-center">
                        delete_forever</button>
                        </div>
                    ))
                }
            </Masonry>
        </div>
    )
}
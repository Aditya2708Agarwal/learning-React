import { useNotes } from "../../reducers/notesContext";
import { NotesCard } from "../../components/notesCard/notesCard";

export const Bin = () => {

    const { deleted } = useNotes();

    return (
        <div className="flex gap-8 p-4 w-full">
            {
                deleted?.length > 0 && deleted.map(note => (
                    <NotesCard key={note.id} id={note.id} title={note.title} text={note.text} isPinned={note.isPinned} />
                ))
            }
        </div>
    )
}
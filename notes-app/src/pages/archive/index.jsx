import { useNotes } from '../../reducers/notesContext';
import { NotesCard } from '../../components/notesCard/notesCard';

export const Archive = () => {
    const {archived} = useNotes();


    return(
            <div className="flex flex-col gap-3 p-4 w-full">
                {
                    archived?.length > 0 && archived.map(note => (
                        <NotesCard key={note.id} id={note.id} title={note.title} text={note.text} isPinned={note.isPinned} />
                    ))
                }
            </div>    
    )
}
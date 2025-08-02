import { useNotes } from '../../reducers/notesContext';
import { NotesCard } from '../../components/notesCard/notesCard';
import Masonry from 'react-masonry-css';

export const Archive = () => {
    const { notes, archived } = useNotes();

    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        768: 1,
    }

    return (
        <div className="mt-1 flex flex-wrap gap-6 p-4 w-full">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-full gap-1"
                columnClassName="masonry-column">
            {
                archived?.length > 0 && archived.map(note => (
                    note && <NotesCard key={note.id} id={note.id} title={note.title} text={note.text} />
                ))
            }
            </Masonry>
        </div>
    )
}
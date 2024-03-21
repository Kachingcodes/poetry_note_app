import { MdDeleteForever } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import NotesList from './NotesList';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
    return (
        <div className="note">
            <span>{text}</span>

            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever 
                onClick={()=> handleDeleteNote(id)}
                className='delete-icon' 
                size='1.3em'/>

                

            </div>
        </div>
    );
};

export default Note;
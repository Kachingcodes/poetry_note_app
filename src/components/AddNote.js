import { useState } from 'react';


const AddNote = ({handleAddNote}) => {
    const[noteText, setNoteText] =useState('');
    const charLimit = 800;

    const handleChange = (event) => {
        if(charLimit - event.target.value.length>=0){
            setNoteText(event.target.value);
        }
        
    };

    const handleSaveClick =() =>{
        if(noteText.trim().length >0) {
            handleAddNote(noteText);
            setNoteText('');
        }
           
          
        
    };
    return(
        <div className="note new">
            <textarea rows='8' columns={10} 
            placeholder="Add a New Poem"
            onChange={handleChange} value={noteText}>
            
            </textarea>
        <div className="note-footer">

            <small>{charLimit - noteText.length} Remaining</small>
            <small>Happy Writing</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
        
        </div>
        

    )
}

export default AddNote;
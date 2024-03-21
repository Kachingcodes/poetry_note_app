import Note from "./components/Note";
import NotesList from "./components/NotesList";
import { useState } from "react";
import {nanoid} from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";


const App = () => {
  const [notes, setNotes] =useState ([
    {
    id: nanoid(),
    text: 'This is my first poem',
    date: '09/02/2024'
  },

  {
    id: nanoid(),
    text: 'This is my second poem',
    date: '09/02/2024'
  },

  {
    id: nanoid(),
    text: 'This is my third poem',
    date: '09/02/2024'
  },

]);

const [searchText, setSearchText] = useState('');
const [darkMode, setDarkMode] = useState(false);

const addNote = (text) => {
  const date = new Date();
  const newNote ={
    id:nanoid(),
    text:text,
    date: date.toLocaleDateString()
}
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};
  const deleteNote = (id) => {
    const newNotes=  notes.filter((note)=> note.id !==id);
    setNotes(newNotes);
  };

  //You are here!!!


  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className='container'>
      <Header handleToogleDarkMode={setDarkMode}/>
        <Search handleSearchNote ={setSearchText}/>
    <NotesList 
    notes={notes.filter((note) => note.text.toLowerCase().includes(searchText)
      )} 
    handleAddNote={addNote}
    handleDeleteNote={deleteNote}
    // handleEditNote={editNote}
    />

  </div>

    </div>
    

  

  );
  
};

export default App;
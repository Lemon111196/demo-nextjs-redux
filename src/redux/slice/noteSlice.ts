import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INote, NoteState } from "./interface";
const initialState: NoteState = {
    notes: [],
}
const notesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<INote>) => {
            state.notes.push(action.payload)
        },
        updateNote: (state, action: PayloadAction<INote>) => {
            const { id, title, content, status } = action.payload;
            const existingNote = state.notes.find((note) => note.id === id);
            if (existingNote) {
                existingNote.title = title;
                existingNote.content = content;
                existingNote.status = status;
            }
        },
        deleteNote: (state, action: PayloadAction<string>) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload);
        },
    }
})
export const { addNote, updateNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
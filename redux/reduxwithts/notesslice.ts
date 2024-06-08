// we need slice to change state based on action. it will take initial state

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"


export interface Note {
    title: string,
    desc: string
}


const initialState : Array<Note> = []

// like initiaState is name for key -value so you can write one
export const notesSlice = createSlice({
    name: 'Notes',
    initialState,
    reducers: { // it will ask you to add action.action is we have to add note

        addNote(state, action:PayloadAction<Note>){
            console.log(`data is ${action.payload}`)
            state.push(action.payload) // we have push action in state
        } // action will get two things state and action
    }
})

// now we have to export the action & reduce
export const {addNote} = notesSlice.actions;
export const noteSelector =(state: RootState) => state.notes;
export default notesSlice.reducer;

// now next step is we need to give  provider to app from where we calling notes
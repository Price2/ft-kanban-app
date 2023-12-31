import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ModalInitialState {
    addNewBoardToggle: boolean;
    editBoardToggle: boolean;
    deleteBoardToggle: boolean;
    addTasksToggle: boolean;
    viewTasksToggle: boolean;
    editTasksToggle: boolean;
    deleteTasksToggle: boolean;

}

const initialState: ModalInitialState = {
    addNewBoardToggle: false,
    editBoardToggle: false,
    deleteBoardToggle: false,
    addTasksToggle: false,
    viewTasksToggle: false,
    editTasksToggle: false,
    deleteTasksToggle: false,

}


export const modalSlice = createSlice({
    name: 'modal_slice',
    initialState,
    reducers: {
        toggleCreateBoard: (state, action) => {
            state.addNewBoardToggle = action.payload;
        },
        toggleEditBoard: (state, action) => {
            state.editBoardToggle = action.payload
        },
        toggleDeleteBoard: (state, action) => {
            state.deleteBoardToggle = action.payload
        },
        toggleAddTasks: (state, action) => {
            state.addTasksToggle = action.payload
        },
        toggleViewTasks: (state, action) => {
            state.viewTasksToggle = action.payload
        },
        toggleEditTasks: (state, action) => {
            state.editTasksToggle = action.payload
        },
        toggleDeleteTasks: (state, action) => {
            state.deleteTasksToggle = action.payload
        },


    },

});


export const { toggleCreateBoard, toggleEditBoard, toggleDeleteBoard, toggleAddTasks, toggleViewTasks, toggleEditTasks, toggleDeleteTasks } = modalSlice.actions;
export default modalSlice.reducer;


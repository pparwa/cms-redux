import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Course from "../../page/course";

export const getcoursefromeserver=createAsyncThunk(
    "course/getcoursefromserver",
    async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const removecoursefromserver=createAsyncThunk(
    "course/removecoursefromserver",
    async(id)=>{
        return fetch(`https://redux-cms.iran.liara.run/api/courses/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
      .then((data) => data);
    }
)











const slice = createSlice({

    name:"courses",
    initialState:[],
    reducers:{},
     extraReducers: (builder) => {
        builder.addCase(getcoursefromeserver.fulfilled,(state,action)=>{
            return action.payload
        })
          builder.addCase(removecoursefromserver.fulfilled, (state, action) => {
        const newCourses = state.filter(
          (courses) => courses._id !== action.payload.id
        );

        return newCourses;
      });

    }
})

export default slice.reducer;
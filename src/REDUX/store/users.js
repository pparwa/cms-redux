import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";


export const getuserfromeserver = createAsyncThunk(
  "user/getuserfromserver",
  async(url)=>{
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data)
  }
);
export const removeuser = createAsyncThunk(
  "users/removeuser",
  async(id)=>{
    return fetch(`https://redux-cms.iran.liara.run/api/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data);
  }
)



const slice = createSlice({
    name: "users",
  initialState: [],
  reducers: {},
 extraReducers:(builder)=>{
  builder.addCase(getuserfromeserver.fulfilled,(state , action)=>
    action.payload
  )
/*  builder.addCase(removeuser.fulfilled ,(state,action)=>{
    const newUsers = state.filter((user) => user._id !== action.payload.id);

        return newUsers;
  })*/
 }

})
export default slice.reducer;
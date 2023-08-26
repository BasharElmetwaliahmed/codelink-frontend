import {  createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';


export const logIn = createAsyncThunk(
  'user/signUp',
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;


    try {
      const res = await fetch(`${api}/user/login`,{
        method:'POST',
              headers: {
        "Accept": "application/json",
        "Authorization":"application/json",
      },
      body:formData
      });
      const data=await res.json()
      console.log(data)
     if(data.errors && !data.result){
      console.log('error')
      throw data.errors
     }
      return data
    }
    catch(error){
            return rejectWithValue(error)

    }
  }
);
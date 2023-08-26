import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './logInActions';
import { signUp } from './signUpAction';
import { verifyAction } from './verifyAction';

const initialState={        
        user:null,
        error:null,
        loading:false,
        verified:false
    
    }
const userSlice=createSlice({
    name:'user',
    initialState,
    extraReducers:{

    //sign Up    
        [signUp.pending]:(state)=>{
            state.loading=true;
            state.error=null
        },

        [signUp.fulfilled]:(state,action)=>{
            state.loading=false;
            state.error=null;
            state.user=action.payload.data;
            localStorage.setItem('user',JSON.stringify(action.payload.data))
        },     
        [signUp.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },

      //sign In    
        [logIn.pending]:(state)=>{
            state.loading=true;
            state.error=null
        },

        [logIn.fulfilled]:(state,action)=>{
            state.loading=false;
            state.error=null;
            state.user=action.payload.data;
            if(action.payload.data.user['email_verified_at']){
                 state.verified=true;
                  }


            localStorage.setItem('user',JSON.stringify(action.payload.data))
            localStorage.setItem('verified',JSON.stringify(state.verified))
        },     
        [logIn.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
        
        //verify
        [verifyAction.pending]:(state)=>{
          state.loading=true;
          state.error=null;
        },
        [verifyAction.rejected]:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        [verifyAction.fulfilled]:(state)=>{
            state.verified=true;
            state.loading=false;
            state.error=null;            
        }
        
        
    }

})

export const userReducer=userSlice.reducer;

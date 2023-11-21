import { createSlice } from "@reduxjs/toolkit";




const wishlistSlice = createSlice({
    name:'Wishlist',
    initialState:[],//since this state have to hold mote than one item
    reducers:{
          //actions
          addToWishlist:(state,action)=>{
            state.push(action.payload)
          },
          //function to remove items from wishlist array state
          removeFromWishlist:(state,action)=>{
            return  state.filter(item=>item.id!==action.payload)
          }
    }
})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer
import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],// wishlist may have more than one item
    reducers:{
        //actions
        //function / logic to add items into wishlist array
        addToWishlist : (state,action)=>{
            state.push(action.payload)

        },
        //function to rempove items from the wishlist
        removeFromWishlist :(state,action)=>{
            //filter returns a new array satifing the condtion. inorder to add the new array into state we need to return  it
         return  state.filter(item=>item.id!=action.payload)

        }
    }

})

export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions //componennt
export default wishlistSlice.reducer  //store
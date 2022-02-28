export default function productReducer(store=[], action){
    if(action.type==="SAVE_PRODUCTS"){
        return action.payload;
    }   
    
    if(action.type==="DELETE_PRODUCTS"){
        return [];
    }
    return store;
}
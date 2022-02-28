export function setProductList(list){
    return{
        type: "SAVE_PRODUCTS",
        payload: list
    }
}

export function deleteAllProducts(){
    return{
        type: "DELETE_PRODUCTS"
    }
}
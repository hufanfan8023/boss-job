const [ADD_GUNTYPE, REMOVE_GUNTYPE] =[ "加弹药", "减弹药"]

const counter = function(state=0, action){
    switch(action.type){
        case ADD_GUNTYPE:
            return state + 1
        case   REMOVE_GUNTYPE:
            return state - 1
        default:
            return 10
    }
} 

const addGun = ()=>{
    return { type: ADD_GUNTYPE }
}
const removeGun = ()=>{
    return { type: REMOVE_GUNTYPE }
}

const addGunAsync = ()=> dispatch=>{
    setTimeout(()=>{
        dispatch(addGun())
    },2000)
}


export { 
    counter,
    addGun,
    removeGun,
    addGunAsync
 }
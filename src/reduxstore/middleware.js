export function FirstMiddleware(store){
    return function(next){
        return function(action){
        
            console.log("before call")
            var result = next(action)
            console.log(store.getState())
        } 
    } 

}

export let logger = store=>next=>action=>{
    console.log("before call")
    var result = next(action)
    console.log(store.getState())
    return result

}
// function(store){
//     return function(next){
//         return function(action){
//             //code goes here
//         }
//     }
// }

export default store => next => action => {

    console.log('ACTION: ', action);
    const result = next(action);
    console.log('NEXT STATE: ', store.getState());
    
    return result;
}
// export default function({dispatch}){
//     return function(next){
//         return function(action){

//         }
//     }
// }

// refacto
export default ({dispatch}) => next => action => {
    // Check to see if the action
    // has a promise on its 'payload' property
    // if it does, then wait for it to resolve
    // if it doesn't, then send the action on to
    // next middleware
    debugger;
    if (!action.payload || !action.payload.then){
        return next(action);
    }

    // We want to wait for the promise to resolve
    // (get its data!!) and then create a new action
    // with that data dispatch it 
    action.payload.then(function(response){
        const newAction = {...action, payload: response};
        dispatch(newAction);
    });
};




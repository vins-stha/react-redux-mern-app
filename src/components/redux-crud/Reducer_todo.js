const initialState = {
    tasks : []
}

function todoReducer(state=initialState, action)
{
    switch(action.type)
    {
        case "ADD_TASK": return {
            ...state,
            tasks:[...state.tasks, action.payload]
            
        }
        case "DELETE_TASK": return {
           
            ...state,
            tasks: state.tasks.filter((task)=>task != action.payload)
        }
        case "UPDATE_TASK": return {
           
            ...state,
            tasks: state.tasks.map((task)=>{
                if (task == action.payload.old)
                    task = action.payload.updated
                    return task
            })
          
        }
        // default: ""

        
    }
    return state
}

export default todoReducer
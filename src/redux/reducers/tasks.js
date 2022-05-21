import * as actions from './actionsTypes';


const initialState = {
   todos:[{
       title: 'What your plans?',
       isDelete: false,
       isImportant: false,
       isDone: false,
       id: 23132131213,
   }],
   count: 0,
};

export default ( state = initialState, action) => {
    switch (action.type) {

        case actions.ADD: {
            return{
                ...state,
                todos: [...state.todos, {
                    title: action.title,
                    isDelete: false,
                    isImportant: false,
                    isDone: false,
                    id: Math.floor(Math.random() * 1000000)
                }],
                count: state.count + 1
            }
        }

        case actions.DELETE: {
            return{
                ...state,
                todos: state.todos.filter((item) => item.id !== action.id),
                count: state.count - 1
            }
        }
        case actions.IMPORTANT: {
            return{
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id){
                        return {...item, isImportant: !item.isImportant}
                    }
                    return item
                })
            }
        }
        case actions.DONE: {
            return{
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id){
                        return {...item, isDone: !item.isDone}
                    }
                    return item
                })
            }
        }
        default: return state
    }
}

export const addTask = (title) => {
    return(dispatch) => {
        return dispatch({type: actions.ADD, title})
    }
};

export const deleteTask = (id) => {
    return (dispatch) => {
       return dispatch ({type: actions.DELETE, id})
    }
};

export const importantTask = (id) => {
    return (dispatch) => {
       return dispatch ({type: actions.IMPORTANT, id})
    }
};

export const doneTask = (id) => {
    return (dispatch) => {
       return dispatch ({type: actions.DONE, id})
    }
};

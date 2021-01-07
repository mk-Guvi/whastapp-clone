export const initialState={//it defines the data layer before adding the data to it
    user:null,
}

export const actionTypes={//this pushes the date to the  data layer
    SET_USER:"SET_USER",
}

const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){//this listens the dispatched action
        case actionTypes.SET_USER://if the action dispatched was set_user then return the following
        return{//this returns how we are going the change the data layer
            ...state,//keep the state of the data layer as it is
            user:action.user,//change the user with to be whatever we dispatch in it,particularly  the user portion of the object
        }
        default://other dispatch action return the actual state
            return state
    }

}

export default reducer
let currentClass  = localStorage.getItem('currentClass');
try{
    currentClass = JSON.parse(currentClass) || {}
}catch(err){
    currentClass = {}
}

const initState = {
    // student:[],
    // project:[],
    // homeword:[]
    ...currentClass
}

const reducer = function(state=initState,action){
    switch(action.type){
        case 'add_student':
           
            return {
                ...state,
                student:[action.student,...state.student]
            }
        case 'remove_student':
            return {
                ...state,
                student:state.student.filter(item=>item._id!=action._id)
            }
        default:
            return state;
    }
}

export default reducer
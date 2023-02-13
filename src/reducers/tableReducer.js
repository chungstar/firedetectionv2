import { 
    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_LIST_FAIL 
} from '../constants/tableConstants'

export const listTableItemsReducer = (state = {tableItems:[]}, action)=>{
    switch(action.type){
        case TABLE_LIST_REQUEST:
            return{
                loading:true,
                tableItems:[],
            }
        case TABLE_LIST_SUCCESS:
            return{
                loading:false,
                tableItems:action.payload,
            }
        case TABLE_LIST_FAIL:
            return{
                loading:false,
                error: action.payload,
            }
        default:
            return state
    }
}

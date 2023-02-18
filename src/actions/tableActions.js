import { 
    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_LIST_FAIL 
} from '../constants/tableConstants'
import { firebaseApp } from '../firebase/firebase'
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';


const db = getDatabase(firebaseApp);

export const listTableItems = () => (dispatch)=>{
    let tableData = []
  
    function getTableItems(db){
        const dbRef = ref(db, "Users");
        var urls = [];
        onValue(dbRef, (snapshot) => {
            snapshot.forEach(childSnapshot => {
            urls.unshift(childSnapshot.val());
            });
        });
        return urls
    }
  
    try{
      dispatch({type: TABLE_LIST_REQUEST})
      tableData = getTableItems(db)
      console.log(tableData)
      dispatch({type: TABLE_LIST_SUCCESS, payload: tableData})
    }catch(error){
      dispatch({
        type: TABLE_LIST_FAIL,
        payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      })
    }
  }
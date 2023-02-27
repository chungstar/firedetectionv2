import {
    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_LIST_FAIL
} from '../constants/tableConstants'
import { firebaseApp } from '../firebase/firebase'
import { getDatabase, ref, onValue } from 'firebase/database';


const db = getDatabase(firebaseApp);

export const listTableItems = () => (dispatch)=>{

    function getTableItems(db){
        const dbRef = ref(db, "Users");
        let tableData = [];
        onValue(dbRef, (snapshot) => {
            snapshot.forEach(childSnapshot => {
              const key = childSnapshot.key
              const val = childSnapshot.val()
              tableData.unshift({key,...val})
            });
            dispatch({type: TABLE_LIST_SUCCESS, payload: tableData});
        });
    }

    try{
      dispatch({type: TABLE_LIST_REQUEST})
      getTableItems(db)
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
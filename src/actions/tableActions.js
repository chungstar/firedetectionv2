import {
  TABLE_LIST_REQUEST,
  TABLE_LIST_SUCCESS,
  TABLE_LIST_FAIL,
  TABLE_DELETE_REQUEST,
  TABLE_DELETE_SUCCESS,
  TABLE_DELETE_FAIL
} from '../constants/tableConstants'
import { firebaseApp } from '../firebase/firebase'
import { getDatabase, ref, onValue, remove} from 'firebase/database';


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

  export const deleteItemFromTable = (itemId) => async (dispatch) => {
    try {
      dispatch({ type: TABLE_DELETE_REQUEST });
      const dbRef = ref(db, `Users/${itemId}`);
      await remove(dbRef);
      alert(itemId + '삭제 완료')
      dispatch({ type: TABLE_DELETE_SUCCESS});
    } catch (error) {
      dispatch({
        type: TABLE_DELETE_FAIL,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      })
    }
  }
import { 
    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_LIST_FAIL 
} from '../constants/tableConstants'
import {firebaseApp} from '../firebase/firebase'
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';


const db = getDatabase(firebaseApp);

export const listCartItems = () => (dispatch)=>{
    let cartData = []
  
    function getCartItems(db){
        const dbRef = ref(db, "Users");
        var urls = [];
        onValue(dbRef, (snapshot) => {
            snapshot.forEach(childSnapshot => {
            urls.push(childSnapshot.val());
            });
        });
        return urls
    }
  
    try{
      dispatch({type: TABLE_LIST_REQUEST})
      cartData = getCartItems(db)
      dispatch({type: TABLE_LIST_SUCCESS, payload: cartData})
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
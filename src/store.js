import { configureStore, createSlice } from '@reduxjs/toolkit'
import { db } from "./firebase.js";
import { onValue, ref } from "firebase/database";

const userdb = ref(db, "Users/");
onValue(userdb, (snapshot) => {
  let urls = [];
  snapshot.forEach(childSnapshot => {
    urls.push(childSnapshot.val());
  });
});
let fsdata = createSlice({
  name:'fsdata',
  initialState:[
    {
      "timeStamp": "20220614-113330",
      "uid": "admin",
      "url": "url1"
    },
    {
      "timeStamp": "20220614-113332",
      "uid": "admin",
      "url": "url2"
    },
    {
      "timeStamp": "20220614-113333",
      "uid": "admin",
      "url": "url3"
    }],
    reducer:{
      addCount(state){
        state[0].url++
      }
    }
})

export default configureStore({
  reducer: {
    fsdata:fsdata.reducer
   }
}) 
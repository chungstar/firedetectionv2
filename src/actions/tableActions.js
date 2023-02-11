import { TABLE_LIST_REQUEST,TABLE_LIST_SUCCESS,TABLE_LIST_FAIL } from "../constants/tableConstants";
import firebaseApp from '../../service/firebase';
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';
import { useEffect } from "react";

const db = getDatabase(firebaseApp);
const dbRef = ref(db, "Users");
useEffect(()=>{
    onValue(dbRef, (snapshot) => {
        var urls = [];
        snapshot.forEach(childSnapshot => {
        urls.push(childSnapshot.val());
        });
        console.log(urls);
    });
},[])

import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

// import { firebaseApp } from '../../firebase/firebase';
// import { getDatabase, ref, set, remove, onValue } from 'firebase/database';
// import { useEffect } from "react";




const TableScreen = () => {
  let dataLists = useSelector((state)=>state.fsdata)

  // const db = getDatabase(firebaseApp);
  // const dbRef = ref(db, "Users");
  // useEffect(()=>{
  //     onValue(dbRef, (snapshot) => {
  //         var urls = [];
  //         snapshot.forEach(childSnapshot => {
  //         urls.push(childSnapshot.val());
  //         });
  //         console.log(urls);
  //     });
  // },[])

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>timeStamp</th>
          <th>uid</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody id="tbody">
        {
          dataLists.map((a,i)=>{
            return(
            <tr onClick={()=>(console.log(a))}>
              <th>{i}</th>
              <th>{dataLists[i].timeStamp}</th>
              <th>{dataLists[i].uid}</th>
              <th>{dataLists[i].url}</th>
            </tr>
            )
          })
        }
      </tbody>
    </Table>
    </>
  )
}

export default TableScreen
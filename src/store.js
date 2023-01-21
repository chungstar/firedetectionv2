import { configureStore } from '@reduxjs/toolkit'

// const userdb = ref(db, "Users/");
//     onValue(userdb, (snapshot) => {
//       let urls = [];
      
//       snapshot.forEach(childSnapshot => {
//         urls.push(childSnapshot.val());
//       });
//       AddAllItemsToTable(urls);
//   });

export default configureStore({
  reducer: { }
}) 
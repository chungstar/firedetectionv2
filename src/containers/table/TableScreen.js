import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listCartItems } from '../../actions/tableActions'

const TableScreen = () => {
  let dataLists = useSelector((state)=>state.fsdata)

  const dispatch = useDispatch()

  const cartItemsList = useSelector((state)=>state.cartItemsList)

  const { loading, error, cartItems } = cartItemsList

  React.useEffect(()=>{
    dispatch(listCartItems())
    console.log(cartItemsList)
  },[dispatch])

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
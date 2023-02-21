import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listTableItems } from '../../actions/tableActions'

const TableScreen = () => {

  const dispatch = useDispatch()

  const tableItemsList = useSelector((state)=>state.tableItemsList)

  const { loading, error, tableItems } = tableItemsList

  React.useEffect(()=>{
    dispatch(listTableItems())
  },[dispatch])

  return (
    <>
      { loading ? (
          <div>Loading</div>
        ): error ? (
          <div>{error}</div>
        ):(
          <>
          <Container>
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
                  tableItems.map((a,i)=>{
                    return(
                    <tr onClick={()=>(console.log(a))}>
                      <th>{i}</th>
                      <th>{tableItems[i].timeStamp}</th>
                      <th>{tableItems[i].uid}</th>
                      <th>{tableItems[i].url}</th>
                    </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Container>
        </>
      )} 
    </>
  )
}

export default TableScreen
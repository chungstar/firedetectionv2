import React, { useState, useEffect } from 'react';
import { Container, Table, Modal, Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listTableItems,deleteItemFromTable } from '../../actions/tableActions';

const TableScreen = () => {
  const dispatch = useDispatch();
  const tableItemsList = useSelector((state) => state.tableItemsList);
  const { loading, error, tableItems } = tableItemsList;

  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    dispatch(listTableItems());
  }, [dispatch]);

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    toggleModal();
  };
  const handleDeleteItem = (itemKey) => {
    dispatch(deleteItemFromTable(itemKey))
  }
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>timeStamp</th>
                  <th>uid</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody id="tbody">
                {tableItems.map((rowData, i) => {
                  return (
                    <tr key={i} onClick={() => handleRowClick(rowData)}>
                      <th>{i}</th>
                      <th>{rowData.timeStamp}</th>
                      <th>{rowData.uid}</th>
                      <th onClick={e => e.stopPropagation()}>
                        <Button variant="danger" onClick={()=>handleDeleteItem(rowData.key)}>delete</Button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
          {selectedRowData && (
            <Modal show={showModal} onHide={toggleModal}>
              <Modal.Header closeButton>
                <Modal.Title>{selectedRowData.timeStamp}의 데이터</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>uid: {selectedRowData.uid}</p>
                <p>Image: </p>
                <p><Image src={selectedRowData.url}/></p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={toggleModal}>Close</Button>
              </Modal.Footer>
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default TableScreen;

import React, { useState, useEffect } from 'react';
import { Container, Table, Modal, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listTableItems } from '../../actions/tableActions';

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
                  <th>url</th>
                </tr>
              </thead>
              <tbody id="tbody">
                {tableItems.map((rowData, i) => {
                  return (
                    <tr key={i} onClick={() => handleRowClick(rowData)}>
                      <th>{i}</th>
                      <th>{rowData.timeStamp}</th>
                      <th>{rowData.uid}</th>
                      <th>{rowData.url}</th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
          {selectedRowData && (
            <Modal show={showModal} onHide={toggleModal}>
              <Modal.Header closeButton>
                <Modal.Title>Selected Row Data</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Timestamp: {selectedRowData.timeStamp}</p>
                <p>Img: <Image src={selectedRowData.url}/></p>
              </Modal.Body>
              <Modal.Footer>
                <button onClick={toggleModal}>Close</button>
              </Modal.Footer>
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default TableScreen;

import React, { useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal,Button,Alert } from "react-bootstrap";
import {ShowModal} from './CrudAppFunc';
import axios from 'axios'



let ModalAlert=()=> {
    let {idDel, showStatus, postDel} = useContext(ShowModal);

    let [id] = idDel;
    let [show,setShow] = showStatus;
    let [posts,setPosts] = postDel;

    let API = "https://jsonplaceholder.typicode.com/posts";
  
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const deleteUser =  () => {
      
      try {
        let { data } = axios.delete(`${API}/${id}`);
        console.log(data)
        let postsAfterDel = posts.filter((posts) => posts.id !== id);
        setPosts(postsAfterDel);
        setShow(false)
      } catch (e) {
        console.log(e);
      };
    };
    
    return (
      <>
        
        <Alert>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure ?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to delete the date of {id} ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={deleteUser}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
        </Alert>
      </>
    );
  }

  export default ModalAlert
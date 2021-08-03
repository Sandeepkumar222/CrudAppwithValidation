import React, { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container,Col,Row } from "react-bootstrap";
import axios from "axios";
import ModalAlert from "./modalDeleteAlert";
import UpdatePosts from "./updateUsers";
import AddUser from "./InputUser";
import {Link} from 'react-router-dom'

export const ShowModal = React.createContext();

function Crud() {
  let API = "https://jsonplaceholder.typicode.com/posts";
  let [posts, setPosts] = useState([]);
  // let [userId, setUserId] = useState("");
  // let [title, setTitle] = useState("");
  let [id, setID] = useState();
  let [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  // get data from api function

  useEffect( () => {
    getData();
  }, []);

  let getData = async () => {
    try {
      let { data } = await axios.get(API);
      setPosts(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  // to delete user
  const modalShow = (id) => {
    setID(id);
    console.log(id);
    setShow(true);
  };

  // to update the data

  const UpdateData = (id) => {
    setID(id);
    setOpen(true);
    console.log(id);
  };

  return (
    <>
      
     
      <Container maxWidth="sm">
      <h3>Data of Posts</h3>
      <Container className="justify-content-center">
      <Row className="justify-content-center">
        <Col sm={6}>
          <ShowModal.Provider
            value={{
              postAdd: [posts, setPosts],
            }}
          >
            <AddUser />
          </ShowModal.Provider>
        </Col>
        </Row>
      </Container>
<br></br>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>User Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Delete Post</th>
              <th>Update Post</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((e) => {
              return (
                <>
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td><Link to={`/aboutuser/${e.userId}`}>{e.userId}</Link></td>
                    <td>{e.title}</td>
                    <td>{e.body}</td>
                    <td>
                      <Button variant="danger" onClick={() => modalShow(e.id)}>
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => UpdateData(e.id)}
                      >
                        Update
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </Container>

      <ShowModal.Provider
        value={{
          UpdateShow: [open, setOpen],
          idUpdate: [id, setID],
          postUp: [posts, setPosts],
        }}
      >
        {open ? <UpdatePosts /> : ""}
      </ShowModal.Provider>

      <ShowModal.Provider
        value={{
          idDel: [id, setID],
          showStatus: [show, setShow],
          postDel: [posts, setPosts],
        }}
      >
        {show ? <ModalAlert /> : ""}
      </ShowModal.Provider>
    </>
  );
}

export default Crud;

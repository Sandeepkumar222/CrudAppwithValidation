import React, { useState, useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { ShowModal } from "./CrudAppFunc";
import axios from "axios";
import { useFormik } from "formik";

const AddUser = () => {
  let [userName, setUsername] = useState([]);
  let { postAdd } = useContext(ShowModal);
  let [posts, setPosts] = postAdd;

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsername(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Required";
    } else if (values.title.length > 15) {
      errors.title = "Must be 15 characters or less";
    }
    if (!values.body) {
      errors.body = "Required";
    } else if (values.body.length < 15) {
      errors.body = "Must be 15 characters or greater";
    }
    if (!values.id) {
      errors.body = "Select any user";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      body: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values.title);

      const handleAdd = async () => {
        let { data } = await axios.post(
          "https://jsonplaceholder.typicode.com/posts/",
          {
            userId: values.id,
            title: values.title,
            body: values.body,
          }
        );
        let postsAdd = [...posts];
        console.log(data);
        postsAdd.push(data);
        values.id = "";
        values.title = "";
        values.body = "";
        setPosts(postsAdd);
      };
      handleAdd();
    },
  });


  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            name="id"
            as="select"
            custom
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.id}
          >
            {userName.map((user) => {
              return (
                <>
                  <option value={user.id}>{user.name}</option>
                </>
              );
            })}
            {formik.touched.id && formik.errors.id ? (
          <div className="errors">{formik.errors.id}</div>
        ) : null}
            
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter title required"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
        </Form.Group>
        {formik.touched.title && formik.errors.title ? (
          <div className="errors">{formik.errors.title}</div>
        ) : null}

        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control
            type="text"
            name="body"
            placeholder="Enter body"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.body}
          />
          {formik.touched.body && formik.errors.body ? (
            <div className="errors">{formik.errors.body}</div>
          ) : null}
        </Form.Group>
        <Button variant="primary" type="submit">
          Add User
        </Button>
      </Form>
    </>
  );
};

export default AddUser;

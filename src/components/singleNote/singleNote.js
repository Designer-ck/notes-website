import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import edit from '../../assets/editing.png';
import deletew from '../../assets/delete.png';
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from '../../utils/supabaseclient';
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup"; 
import moment from 'moment/moment';


const SingleNote = () => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [details, setDetails] = useState({});
    const { state } = useLocation();
    const { id } = state;
    const navigate = useNavigate();
    const [adviceDetails, setAdviceDetails] = useState([]);

    useEffect(() => {
        getAdviceDetails();
        getAdviceDetail();
      }, []);

      
  const getAdviceDetails = async () => {
    // setLoading(true);
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("id", id);
    if (!error) {
        console.log("data: ", data, moment(data[0]?.modified_at).format("h:mm:ss a"));
        setDetails(data[0]);
    } else {
      console.log("error fetching advice details: ", error);
    }
  };


  const getAdviceDetail = async () => {
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("id", id);
    if (!error) {
      //   console.log("data: ", data);
      setAdviceDetails(data);
      formik.setFieldValue("title", data[0]?.title);
      formik.setFieldValue("description", data[0]?.description);
    } else {
      console.log("error fetching advice details: ", error);
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please Enter Advice Title"),
    description: Yup.string().required("Please Enter Advice Details"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //   console.log("values: ", values);
      const { data, error } = await supabase
        .from("notes")
        .update({ ...values, modified_at: new Date() })
        .eq("id", id);
      if (!error) {
        toast.success("Note updated successfully ✅", {
          position: toast.POSITION.TOP_RIGHT,
          className: "bg-success text-white",
        });
        handleClose()
        getAdviceDetails()
        // navigate(`/task/${details.id}`);
        // navigate("/");
      } else {
        toast.error("Error while updating NOte", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log("error white updating note: ", error);
      }
    },
  });


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return (
        <>
            <section className='common_sec'>
                <div className="note_container">
                    <div className="notes_actions">

                        <h4 className='mb-0'>Welcome back, Mike!</h4>
                        <div className="note_action">
                            <Button variant="primary" onClick={handleShow}>
                                <img src={edit} alt="" />
                            </Button>
                            <Button variant="primary" onClick={handleShow1}>
                                <img src={deletew} alt="" />
                            </Button>

                        </div>
                    </div>
                        <div className="row">
                            <div className="col">
                                <div className="single_page">
                                    <h4>{details?.title}</h4>
                                    <p>{details?.description}</p>
                                </div>
                            </div>
                        </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Title"
                                        {...formik.getFieldProps("title")}
                                        autoFocus
                                    />
                                    {formik.touched.title && formik.errors.title && (
            <div className="text-danger">{formik.errors.title}</div>
          )}
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea"
                                    {...formik.getFieldProps("description")}
                                    rows={3} />
                                    {formik.touched.description && formik.errors.description && (
            <div className="text-danger">{formik.errors.description}</div>
          )}
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={formik.handleSubmit}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={show1} centered onHide={handleClose1}>
          <Modal.Header closeButton closeVariant="black" className="primary_bg border-0">
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body className="primary_bg ">
            Are you sure you want to delete the note?
          </Modal.Body>
          <Modal.Footer className="primary_bg border-0">
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button
              variant="danger"
              onClick={async () => {
                const { data, error } = await supabase
                  .from("notes")
                  .delete()
                  .eq("id", id);
                if (!error) {
                  toast.success("note Deleted successfully ✅", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "bg-success text-white",
                  });
                  handleClose();
                  navigate("/");
                //   props?.onDelete();
                } else {
                  toast.error("Error while deleting NOte", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "bg-danger text-white",
                  });
                  handleClose();
                  console.log("error while deleting note: ", error);
                }
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

                    
                </div>
            </section>
        </>
    )
}

export default SingleNote
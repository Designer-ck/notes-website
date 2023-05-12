import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { supabase } from "../../utils/supabaseclient";

const Addtask = (props) => {


    const navigate = useNavigate();
  
    const validationSchema = Yup.object().shape({
      title: Yup.string().required("Please Enter Note Title"),
      description: Yup.string().required("Please Enter Note Description"),
    });
  
    const formik = useFormik({
      initialValues: {
        title: "",
        description: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        console.log("add advice values: ", values);
        const { data, error } = await supabase
          .from("notes")
          .insert({ ...values, modified_at: new Date() });
        if (!error) {
          toast.success("Note added successfully ✅", {
            position: toast.POSITION.TOP_RIGHT,
            className: "bg-success text-white",
          });
          // document.getElementById("close__button").click();
          // props?.onAdd();
          navigate("/")
        } else {
          toast.error("Error while adding notes", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log("error white updating notes: ", error);
        }
      },
    });

  return (
    <>
    <section className='common_sec addtask_container'>
        <h4>Add Task</h4>
        <div className='add_task_form col-md-6 col-12'>
            <form action="">
                <div className='form-group'>
                    <label>Title</label>
                    <input 
                    type="text" 
                    name="title"
                    placeholder='Title'
                    {...formik.getFieldProps("title")} 
                    />
                    {formik.touched.title && formik.errors.title && (
                <div className="text-danger">{formik.errors.title}</div>
              )}
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea 
                    name="description"
                    cols="30" 
                    rows="10" 
                    placeholder='Decription'
                    {...formik.getFieldProps("description")}
                    ></textarea>
                    {formik.touched.description && formik.errors.description && (
                      <div className="text-danger">{formik.errors.description}</div>
                    )}
                </div>
                <div className='form-group'>

                <button type="button" onClick={formik.handleSubmit}>
                    Add Task
                </button>
                </div>
            </form>
        </div>
    </section>
    </>
  )
}

export default Addtask
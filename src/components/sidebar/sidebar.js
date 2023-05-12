import { Offcanvas } from 'bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import search from "../../assets/search.png";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Sidebar = () => {

  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>


      <div className="ra__dash-header">
        <div className="ra__dash-header-wrapper">
          <div className="ra_dash-head_righ">
            <h4 className="mb-0">
              <Link to='/' className='text-black'>
              🌟 Notes
              </Link>
                </h4>
          </div>
              <div className="ra_dash-head_left">
                <div className="ra__ad_task">
                  <Link to="/addtask">
                    <button>
                      Add New Task
                    </button>
                  </Link>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
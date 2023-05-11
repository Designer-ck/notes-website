import { Offcanvas } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/EC_logo.svg";
import bell from "../../assets/bell.svg";
import bars from "../../assets/toggle_bars.svg";
import profile from "../../assets/profile.jpg";
import Button from "react-bootstrap/Button";

const Sidebar = () => {
  return (
    <>
    <aside className="ra__dashboard">
      <div className="ra__dashboard-wrapper">
        <div className="ra__dash-logo">
          {/* <img src={logo} alt="logo" /> */}
          <Link to="/">
            <h4>🌟 Notes</h4>
          </Link>
        </div>
        <ul className="ra__dash-menu">
            <li>
              <Link to="/" className="link policy">
                Home
              </Link>
            </li>
            <li>
              <Link to="/register" className="link register">
                Tasks
              </Link>
            </li>
            <li>
              <Link to="/request" className="link request">
                Project
              </Link>
            </li>
          <li>
            <Link className="link logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </aside>

    <div className="ra__dash-header">
      <div className="ra__dash-header-wrapper">
        <div className="ra_dash-head_right">
          <div className="ra__dash-head_profile">
            <Button >
              <img src={bars} alt="toggle-btn" />
            </Button>

            {/* <Offcanvas  >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="ra__dashboard">
                  <div className="ra__dashboard-wrapper">
                    <div className="ra__dash-logo">
                      <img src={logo} alt="logo" />
                    </div>
                    <ul className="ra__dash-menu">
                        <li>
                          <Link
                            to="/"
                            className="link policy"
                            // onClick={handleClose}
                          >
                            User Policy
                          </Link>
                        </li>
                      <li>
                        <Link
                          to="/register"
                          className="link register"
                        //   onClick={handleClose}
                        >
                          Register Users
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/request"
                          className="link request"
                        //   onClick={handleClose}
                        >
                          Service Request
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/add-user"
                          className="link add-user"
                        //   onClick={handleClose}
                        >
                          Add User
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/live-chat"
                          className="link live-chat"
                        //   onClick={handleClose}
                        >
                          Live Chat
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/access"
                          className="link access"
                        //   onClick={handleClose}
                        >
                          Access Settings
                        </Link>
                      </li>
                      <li>
                        <Link to="/login">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas> */}
          </div>
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
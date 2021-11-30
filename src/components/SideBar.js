/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div >
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link to='/dashboard'>
                        <span className="nav-link" href='#'>
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">
                    Options
                </div>
                {/*<!-- Nav Item - Pages Collapse Menu -->*/}
                <li className="nav-item">
                    <Link to="/create-user">
                        <span className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-user-plus"></i>
                            <span>Add User</span>
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/users">
                        <span className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-list"></i>
                            <span>All Users</span>
                        </span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />

            </ul>
        </div>
    )
}

export default SideBar

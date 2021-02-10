import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import "./style.css"

function Sidebar() {
        return (
                <aside>
                        <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">

                                <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                                        <div className="sidebar-brand-icon rotate-n-15">
                                                <i className="far fa-building" />
                                        </div>
                                        <div className="sidebar-brand-text mx-3">Rectangle</div>
                                </Link>

                                {/* Divider */}
                                <hr className="sidebar-divider" />

                                {/* Nav Item - Dashboard */}
                                <Item active={''}
                                        href={"/dashboard"}
                                        icon={<i className="fas fa-folder-minus" />}
                                        text={<span>Dashboard</span>} />

                                {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />

                                
                                {/* Nav Item - List Product */}
                                <Item active={''}
                                        href={"/listproduct"}
                                        icon={<i className="fas fa-clipboard-list" />}
                                        text={<span>List Product</span>} />

                                {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />


                        </ul>
                </aside>

        );
}
export default Sidebar;
import React from 'react';
import "./newstyle.css";

const Mylayout = () => {


    const handleOnIconClick = () => {
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".togglemenu");
        sidebar.classList.toggle("close");

    }
    return <>
        <header class="header">
            <span className='text-start px-3 menu-bar' onClick={handleOnIconClick}> <i className="fa-solid fa-bars fa-fw"  >&nbsp; </i></span>
            <span className='logos'>
            <i className="fa-duotone fa-solid fa-spider-web text-ce"> &nbsp;</i>
            <span className="logo_name  px-3"> Web UI</span>
             </span>
        </header>
        <div className="sidebar">
            {/* <div className="logo-details">
                <i className="fa-duotone fa-solid fa-spider-web"> &nbsp;</i>
                <span className="logo_name  px-3"> Web UI</span>
            </div> */}
            <ul className="nav-links">
                <li>
                    <a href="#">
                        <i className="fa-solid fa-gauge">&nbsp;</i>
                        <span className="link_name  px-3">Dashboard</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Category</a></li>
                    </ul>
                </li>
                <li>
                    <div className="iocn-link">
                        <a href="#">
                            <i className="fa-light fa-microchip">&nbsp;</i>
                            <span className="link_name px-3">Category</span>
                        </a>
                        <i className='fas fa-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a className="link_name" href="#">Category</a></li>
                        <li><a href="#">HTML & CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                        <li><a href="#">PHP & MySQL</a></li>
                    </ul>
                </li>
                <li>
                    <div className="iocn-link">
                        <a href="#">
                            <i className='bx bx-book-alt' ></i>
                            <span className="link_name">Posts</span>
                        </a>
                        <i className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a className="link_name" href="#">Posts</a></li>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Login Form</a></li>
                        <li><a href="#">Card Design</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-pie-chart-alt-2' ></i>
                        <span className="link_name">Analytics</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Analytics</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-line-chart' ></i>
                        <span className="link_name">Chart</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Chart</a></li>
                    </ul>
                </li>
                <li className="box">
                    <div className="iocn-link">
                        <a href="#">
                            <i className='bx bx-plug' ></i>
                            <span className="link_name">Plugins</span>
                        </a>
                        <i className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a className="link_name" href="#">Plugins</a></li>
                        <li><a href="#">UI Face</a></li>
                        <li><a href="#">Pigments</a></li>
                        <li><a href="#">Box Icons</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-compass' ></i>
                        <span className="link_name">Explore</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Explore</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-history'></i>
                        <span className="link_name">History</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">History</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-cog' ></i>
                        <span className="link_name">Setting</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Setting</a></li>
                    </ul>
                </li>

            </ul>
        </div>
        <section className="home-section">
            <div className="home-content togglemenu"  >
                <span className="text px-3"> Web Application -  WebUI</span>
            </div>
        </section>
        <section class="p-2 shadow footer">
<div class="text"> <i class="fa fa-copyright" aria-hidden="true"></i> 2024. Arpino </div>
</section>
    </>;
};

export default Mylayout;
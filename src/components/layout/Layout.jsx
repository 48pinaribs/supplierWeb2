import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

const Layout = () => {
    const ID = useParams();
    const location = useLocation();
    const loc = location.pathname.split("/")[1];
    const Loc = location.pathname.split("/")[2];
    const Locc = location.pathname.split("/")[3];

    return (
        <div>
            <Navbar />
            <div className='breadcrumbs'>
                {loc === 'Home' ? <Link className='breadcrumbsLink' to='/Home'>Ana Sayfa</Link> : null}
                {loc === 'Offer' ? <Link className='breadcrumbsLink' to='/Offer'>Teklifler</Link> : null}
                {loc === 'Order' ? <Link className='breadcrumbsLink' to='/Order'>Siparişler</Link> : null}
                {Loc === 'OfferListDetail' ? <Link className='breadcrumbsLink'>/TeklifDetay/{Locc}</Link> : null}
                {Loc === 'OrderListDetail' ? <Link className='breadcrumbsLink'>/SiparişDetay/{Locc}</Link> : null}
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;

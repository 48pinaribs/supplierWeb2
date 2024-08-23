import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfferPage from './components/offer/OfferPage';
import OrderPage from './components/order/OrderPage';
import { OfferListDetail } from './components/offer/OfferListDetail';
import { OrderListDetail } from './components/order/OrderListDetail';
import LoginForm from './components/pages/LoginForm';
import Layout from './components/layout/Layout';
import Password from './components/pages/Password';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path='/Password' element={<Password />} />
        <Route element={<Layout />}>
          <Route path="/Offer" element={<OfferPage />} />
          <Route path="/Order" element={<OrderPage />} />
          <Route path='/Offer/OfferListDetail/:ID' element={<OfferListDetail />} />
          <Route path='/Order/OrderListDetail/:ID' element={<OrderListDetail />} />
          <Route path="/Home" elemnet={<Layout />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;

import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navber from '../components/Navber';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
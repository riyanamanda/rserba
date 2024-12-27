import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';

const AppRoute = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    );
};

export default AppRoute;

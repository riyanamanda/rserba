import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/logo.svg';
import '../App.css';
import MetaData from '../components/MetaData';
import { NavLink } from 'react-router';

function Home() {
    return (
        <>
            <MetaData title='Home' />

            <div>
                <NavLink to='/about'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </NavLink>
                <a href='#'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <h1>Rumah Sakit Ernaldi Bahar</h1>
        </>
    );
}

export default Home;

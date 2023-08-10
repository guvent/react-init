import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout() {
    return (
        <div className="main">
            <Navigation />
            <hr />
            <hr />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

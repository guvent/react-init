import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { RootState, actions } from '../Store';

export default function Navigation() {
    const opened = useAppSelector((state: RootState) => state.mainMenu.status);
    const dispatch = useAppDispatch();

    const handleOpen = () => dispatch(actions.mainMenu.menuOpen(true));
    const handleClose = () => dispatch(actions.mainMenu.menuOpen(false));

    const handleRequest = () => {
        console.warn('Requested....');
    };

    return (
        <div className="main">
            <div className="navigate">
                <input type="button" value="Open" onClick={handleOpen} />
                <input type="button" value="Close" onClick={handleClose} />
                <input
                    type="text"
                    name="value"
                    id="value"
                    value={'' + opened}
                />
                <input type="button" value="Request" onClick={handleRequest} />
            </div>
            <hr />
            <hr />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

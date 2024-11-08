import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='w-50 m-5 px-2'>

            <div className='not-found text-start p-5 m-5'>

                <h3 className='mb-4'>404</h3>
                <h1 className='not-found-head'>Kiaan couldn’t find that page</h1>

                <p>
                We couldn’t find the page you were looking for. Visit <Link className='text-decoration-none' to="/">
                 Zerodha’s home page</Link>
                </p>
            </div>
        </div>
    );
}

export default NotFound;
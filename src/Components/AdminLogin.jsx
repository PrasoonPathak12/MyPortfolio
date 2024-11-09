import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminLogin() {
  return (
    <div className='AdminLogin'>
        <Link to='/admin'>
            <button>Admin</button>
        </Link>
    </div>
  )
}

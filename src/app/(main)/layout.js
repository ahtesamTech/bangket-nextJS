import Navber from '@/utility/Navber/Navber';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            {children}
        </div>
    );
};

export default layout;
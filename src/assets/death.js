import React from "react";

const Death = ({ color = '#4b5661' }) => {
    return (
        <svg
            viewBox='0 0 24 24'
            dataname='Layer 1'
            id='Layer_1'
        >
            <title />
            <rect height='15' style={{ fill: `#738394` }} width='1.5' x='15' y='6' />
            <path
                d='M12,17H6V6A2.99994,2.99994,0,0,1,9,3H9a2.99994,2.99994,0,0,1,3,3Z'
                style={{ fill: color }}
            />
            <path
                d='M10.285,21H2l2.8-2.0003L4,11.0005V10A2.99994,2.99994,0,0,1,7,7h4a2.99994,2.99994,0,0,1,3,3v1.0005l-.7298,7.298A3.00009,3.00009,0,0,1,10.285,21Z'
                style={{ fill: color }}
            />
            <path
                d='M9,8H9A1.5,1.5,0,0,1,7.5,6.5V6h3v.5A1.5,1.5,0,0,1,9,8Z'
                style={{ fill: '#fff' }}
            />
            <path d='M15,6V3a9.0783,9.0783,0,0,1,7,3Z' style={{ fill: '#b3c1c9' }} />
            <path
                d='M16.1493,12.2127,13,13V10h2.8769A1.12307,1.12307,0,0,1,17,11.1231h0A1.12307,1.12307,0,0,1,16.1493,12.2127Z'
                style={{ fill: color }}
            />
        </svg>
    );
};

export default Death;

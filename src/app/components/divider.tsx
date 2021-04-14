import React, { ReactChild, ReactChildren } from 'react';

export default function Divider({ children }: { children?: ReactChild | ReactChildren }) {
    return (
        <div className='divider'>
            {children && <span>{children}</span>}
        </div>
    );
}

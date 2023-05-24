import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                {children}
            </div>
        </>

    )
}

export default Layout
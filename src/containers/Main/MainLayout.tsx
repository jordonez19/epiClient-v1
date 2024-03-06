import React from 'react'
import Banner from './Banner'
import NavbarMain from './NavbarMain'

const MainLayout = ({ children }: any) => {
    return (
        <div>
            <Banner message={'Banner beca por 400'} />
            <NavbarMain />
            {children}
        </div>
    )
}

export default MainLayout

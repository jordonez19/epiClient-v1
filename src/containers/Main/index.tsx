import Banner from "./Banner"
import Carousel from "./Carousel"
import NavbarMain from "./NavbarMain"

const MainLayout = () => {
    return (
        <div>
            <Banner message={'Banner beca por 400'} />
            <NavbarMain />
            <Carousel />
        </div>
    )
}

export default MainLayout

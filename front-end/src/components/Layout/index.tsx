import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import Container from "./Container";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Layout;
import { Outlet } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Container p="4">
        <Outlet />
      </Container>
    </>
  )
}

export default Layout;
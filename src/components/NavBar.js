import { Navbar } from "react-bulma-components";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item href="#">
          <img
            alt="Bulma: a modern CSS framework based on Flexbox"
            height="28"
            src="https://www.pngkit.com/png/full/364-3642224_clarity-ecommerce-logo-logo-e-commerce-png.png"
            width="112"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item href="#">
            <Navbar.Link>First</Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item href="#">Subitem 1</Navbar.Item>
              <Navbar.Item href="#">Subitem 2</Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item href="#">After divider</Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item href="#">Second</Navbar.Item>
        </Navbar.Container>
        <Navbar.Container align="end">
          <CartWidget />
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default NavBar;

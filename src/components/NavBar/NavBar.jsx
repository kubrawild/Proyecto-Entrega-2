import CartWidget from "../cartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <>
        <div className="containerNavbar">
          <Link style={{ color: "beige" }} to="/">
            <img
              src="https://res.cloudinary.com/dm2v8xdbc/image/upload/v1719893820/image_t5wemr.webp"
              alt=""
              style={{
                width: "67px",
                height: "67px",
                objectFit: "cover",
              }}
            />
          </Link>
          <ul className="categories">
            <Link to="/">Todas</Link>
            <Link to="/category/urbanas">Urbanas</Link>
            <Link to="/category/deportivas">Deportivas</Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};

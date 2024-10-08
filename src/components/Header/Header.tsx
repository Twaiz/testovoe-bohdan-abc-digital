import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.css";

import { IoMdAddCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Header = () => {
  const { pathname } = useLocation();
  const checkIsCreateProductPage = pathname === "/createProduct";

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Testovoe Bohdan</h1>

      <Link to={checkIsCreateProductPage ? "/products" : "/createProduct"}>
        <button className={styles.header__button}>
          {checkIsCreateProductPage ? (
            <MdClose size="28px" />
          ) : (
            <IoMdAddCircleOutline size="24px" />
          )}
        </button>
      </Link>
    </header>
  );
};

export default Header;

import { useNavigate } from "react-router-dom";

import styles from "./PageNotFound.module.css";
import Button from "@/ui/Button";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.pageNotFound}>
      <div className={styles.container}>
        <div className={styles.infoSection}>
          <h1 className={styles.infoSection__title}>Сторінка не знайдена 🤔</h1>
          <p className={styles.infoSection__description}>
            Сторінка або була видалена, або ви помилися в URL
          </p>
        </div>

        <div className={styles.actions}>
          <Button text="На головну 🤗" onClick={() => navigate("/products")} />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

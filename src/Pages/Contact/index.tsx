import React from "react";
import styles from "./contact.module.css";

const InfoCard = () => (
    <div className={styles.card}>
        <div className={styles.image}>
            <img src="https://i.postimg.cc/htmgnw3M/image1.jpg" alt="image" />
        </div>
        <div className={styles.detail}>
            <h3>Denmark</h3>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <p>Denmark is known for its high-quality design and architecture</p>
        </div>
        <div className={styles.next}>
            <i className="fas fa-arrow-right"></i>
        </div>
    </div>
)

const Contact = () => {
  return (
    <div className={styles.contact_container}>
        <div className={styles.grid_holder}>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
        </div>
      <ul className={styles.contact_ui}>
        <li>
          <a href="#">
            <i className="fab fa-facebook"></i>
            <div className={styles.tooltip}>Facebook</div>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-instagram"></i>
            <div className={styles.tooltip}>Instagram</div>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter"></i>
            <div className={styles.tooltip}>Twitter</div>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-pinterest"></i>
            <div className={styles.tooltip}>Pinterest</div>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-whatsapp"></i>
            <div className={styles.tooltip}>Whatsapp</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

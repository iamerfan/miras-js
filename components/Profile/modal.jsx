import styles from "./Profile.module.scss";

export default function Modal({ children, modalActive }) {
  return (
    <div className={`${styles.ModalContainer} ${modalActive && styles.active}`}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
}

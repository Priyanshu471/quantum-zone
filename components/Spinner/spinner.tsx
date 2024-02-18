import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className="relative grid place-items-center h-full">
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
    </div>
  );
};
export default Spinner;

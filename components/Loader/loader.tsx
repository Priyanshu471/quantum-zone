import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className="relative grid place-items-center h-full">
      <div className={`${styles.loader} + dark:bg-primaryslate`}></div>
    </div>
  );
};
export default Loader;

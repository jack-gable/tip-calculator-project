import styles from "./Title.module.css";

function Title() {
	return (
		<div className={styles.wrapper}>
			<span className={styles.title}>Spli</span>
			<span className={styles.title}>tter</span>
		</div>
	);
}

export default Title;

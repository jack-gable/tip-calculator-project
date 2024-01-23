import styles from "./Card.module.css";

function Card({ children }) {
	return (
		<div
			className={styles.wrapper}
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			{children}
		</div>
	);
}

export default Card;

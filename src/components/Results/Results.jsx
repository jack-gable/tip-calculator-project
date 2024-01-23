import styles from "./Results.module.css";

function Results({
	tip,
	total,
	handleSubmit,
	isDisabled,
	setIsDisabled,
	handleReset,
}) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.resultsWrapper}>
				<div className={styles.resultsFlexContainer}>
					<div>
						<p className={styles.resultTitle}>Tip amount</p>
						<p className={styles.resultSubtitle}>/ person</p>
					</div>
					<p className={styles.resultAmount}>${tip}</p>
				</div>
				<div className={styles.resultsFlexContainer}>
					<div>
						<p className={styles.resultTitle}>Total</p>
						<p className={styles.resultSubtitle}>/ person</p>
					</div>
					<p className={styles.resultAmount}>${total}</p>
				</div>
			</div>
			<div className={styles.btnContainer}>
				<button
					type="submit"
					className={styles.submitBtn}
					onClick={handleSubmit}
				>
					Calculate
				</button>
				<button
					type="button"
					className={styles.resetBtn}
					disabled={isDisabled}
					onClick={() => {
						handleReset();
						setIsDisabled(true);
					}}
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default Results;

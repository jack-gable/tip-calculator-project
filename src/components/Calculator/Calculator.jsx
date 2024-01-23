// import React from "react";
import styles from "./Calculator.module.css";

function Calculator({
	billAmount,
	setBillAmount,
	setTipAmount,
	numPeople,
	setNumPeople,
	setIsDisabled,
	isInvalid,
	setIsInvalid,
}) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.billWrapper}>
				<label htmlFor="bill-amount">Bill</label>
				<input
					id="bill-amount"
					className={styles.billInput}
					type="number"
					placeholder="0"
					step={0.01}
					min={0}
					value={billAmount}
					onChange={(e) => {
						setBillAmount(e.target.value);
						setIsDisabled(true);
					}}
				/>
			</div>
			<div>
				<p>Select Tip %</p>
				<div className={styles.tipWrapper}>
					<button
						className={styles.tipBtn}
						type="button"
						value={0.15}
						onClick={(e) => {
							setTipAmount(e.target.value);
						}}
					>
						5%
					</button>
					<button
						className={styles.tipBtn}
						type="button"
						value={0.1}
						onClick={(e) => {
							setTipAmount(e.target.value);
						}}
					>
						10%
					</button>
					<button
						className={styles.tipBtn}
						type="button"
						value={0.15}
						onClick={(e) => {
							setTipAmount(e.target.value);
						}}
					>
						15%
					</button>
					<button
						className={styles.tipBtn}
						type="button"
						value={0.25}
						onClick={(e) => {
							setTipAmount(e.target.value);
						}}
					>
						25%
					</button>
					<button
						className={styles.tipBtn}
						type="button"
						value={0.5}
						onClick={(e) => {
							setTipAmount(e.target.value);
						}}
					>
						50%
					</button>
					<input
						className={styles.tipInput}
						type="number"
						placeholder="Custom"
						step="1"
						min={0}
						max={100}
						onChange={(e) => {
							const tipAmount = e.target.value / 100;
							console.log(tipAmount);
							setTipAmount(tipAmount);
						}}
					/>
				</div>
			</div>
			<div className={styles.peopleWrapper}>
				<label htmlFor="people-amount">Number of People</label>
				<span
					className={styles.invalidMessage}
					style={{ opacity: isInvalid ? 1 : 0 }}
				>
					Can&apos;t be zero
				</span>
				<input
					id="people-amount"
					className={styles.peopleInput}
					style={{ border: isInvalid ? "2px solid red" : "" }}
					type="number"
					step={1}
					placeholder="0"
					min={1}
					required
					value={numPeople}
					onChange={(e) => {
						setNumPeople(e.target.value);
					}}
					onInvalid={() => setIsInvalid(true)}
				/>
			</div>
		</div>
	);
}

export default Calculator;

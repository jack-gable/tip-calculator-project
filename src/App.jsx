import React from "react";
import "./App.css";
import Title from "./components/Title";
import Card from "./components/Card";
import Calculator from "./components/Calculator";
import Results from "./components/Results";

function App() {
	const [billAmount, setBillAmount] = React.useState("");
	const [tipAmount, setTipAmount] = React.useState(0);
	const [numPeople, setNumPeople] = React.useState("");
	const [tip, setTip] = React.useState(0);
	const [total, setTotal] = React.useState(0);
	const [isDisabled, setIsDisabled] = React.useState(true);
	const [isInvalid, setIsInvalid] = React.useState(false);

	function calculateAmountPerPerson() {
		if (numPeople === "") {
			setIsInvalid(true);
			return;
		}
		const tipTotal = parseInt(billAmount * tipAmount);
		const tipPerPerson = (tipTotal / numPeople).toFixed(2);
		const totalBill = parseInt(+tipTotal + +billAmount);
		const totalPerPerson = (totalBill / numPeople).toFixed(2);
		setTip(tipPerPerson);
		setTotal(totalPerPerson);
	}

	function handleSubmit() {
		calculateAmountPerPerson();
		setIsDisabled(false);
	}

	function handleReset() {
		setBillAmount("");
		setTipAmount(0);
		setNumPeople("");
		setTip(0);
		setTotal(0);
	}

	return (
		<>
			<Title />
			<Card>
				<Calculator
					billAmount={billAmount}
					setBillAmount={setBillAmount}
					setTipAmount={setTipAmount}
					numPeople={numPeople}
					setNumPeople={setNumPeople}
					setIsDisabled={setIsDisabled}
					isInvalid={isInvalid}
					setIsInvalid={setIsInvalid}
				/>
				<Results
					total={total}
					tip={tip}
					handleSubmit={handleSubmit}
					isDisabled={isDisabled}
					setIsDisabled={setIsDisabled}
					handleReset={handleReset}
				/>
			</Card>
		</>
	);
}

export default App;

const ATMDeposit = ({ onChange, isDeposit, isHidden }) => {
  const choice = ["Deposit", "Withdraw"];
  const hidden = ["hidden", " "];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className={`label huge ${hidden[Number(!isHidden)]}`}>
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [isHidden, setIsHidden] = React.useState(true);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = () => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    if (newTotal < 0) alert("Insufficient funds");
    else setTotalState(newTotal);
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <button
        onClick={() => {
          setIsDeposit(true);
          setIsHidden(false);
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          setIsDeposit(false);
          setIsHidden(false);
        }}
      >
        Withdraw
      </button>
      <br />
      <ATMDeposit
        onChange={handleChange}
        isDeposit={isDeposit}
        isHidden={isHidden}
      ></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));

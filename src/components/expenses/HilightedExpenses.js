import classes from "./HighlightedExpenses.module.css";

const HighlightedExpenses = (props) => {
  return (
    <figure className={classes.expenses}>
      <p>{props.title}</p>
      <div >
        <figcaption>{props.amount}</figcaption>
        <figcaption>{props.date}</figcaption>
        
      </div>
    </figure>
  );
};

export default HighlightedExpenses;

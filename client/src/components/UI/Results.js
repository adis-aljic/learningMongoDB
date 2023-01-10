import './Results.css';

function Results(props) {
  const classes = 'results ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Results;

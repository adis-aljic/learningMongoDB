import './Form.css';

function Form(props) {
  const classes = 'form ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Form;

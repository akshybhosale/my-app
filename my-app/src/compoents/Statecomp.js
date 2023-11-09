import StateHook from "./StateHook";
// import './Statecomp.css';

function Statecomp(props) {
  const sName = "Bhosale";
  return (
    <div className="statecomp">
      <h3>my name is {props.name}</h3>{" "}
      {/*this prop name access by App.js file*/}
      <h3>And surname is {sName}</h3>{" "}
      {/*current compoent prop is accesable for her*/}
      <hr />
      <StateHook />
    </div>
  );
}
export default Statecomp;

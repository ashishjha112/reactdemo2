// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

import ExpenseTracker from "./components/Task/ExpenseTracker";

//import ReactZodForm from "./components/ReactZodForm";

//import ReactHookForm from "./components/ReactHookForm";

//import StateHookForm from "./components/StateHookForm";

//import Form from "./components/Form";

//import ComplexObjects from "./components/ComplexObjects";

function App() {
  // let Items = ["New york", "India", "Tokyo", "Australia"];
  // let Heading = "List Heading";
  // const onSelectedItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      <ExpenseTracker />
      {/* <ReactZodForm /> */}
      {/* <ReactHookForm /> */}
      {/* <StateHookForm /> */}
      {/* <Form /> */}
      {/* <ComplexObjects /> */}
      {/* <ListGroup
        Heading={Heading}
        Items={Items}
        onSelectedItem={onSelectedItem}
      />
      <br />
      <Alert>
        A simple primary alert—check it out! <span>Hi</span>
      </Alert>
      <br />
      <Button handleOnclick={(event) => console.log(event)} btnclass="success">
        Primary
      </Button> */}
    </div>
  );
}

export default App;

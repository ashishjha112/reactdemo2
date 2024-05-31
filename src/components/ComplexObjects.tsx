import { useState } from "react";

function ComplexObjects() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    Age: 0,
    address: {
      city: "",
      pincode: "",
    },
  });

  const handleClick = () => {
    setEmployee({
      ...employee,
      firstName: "ashish",
      lastName: "jha",
      Age: 35,
      address: {
        ...employee.address,
        city: "jagdalpur",
        pincode: "494001",
      },
    });
  };
  return (
    <>
      <div>
        employee firstname and last name are :{employee.firstName}
        {employee.lastName} and age is {employee.Age} and address is :{" "}
        {employee.address.city} pincode {employee.address.pincode}
      </div>
      <button onClick={handleClick}>Update Emp</button>
    </>
  );
}

export default ComplexObjects;

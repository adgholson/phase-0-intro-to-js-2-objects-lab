const employee = {
    name: "Bob",
    streetAddress: "20 Vineyard",
  };

 
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee["name"] = "Sam";
    updatedEmployee["streetAddress"] = "11 Broadway";
    return updatedEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee["streetAddress"] = "12 Broadway";
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

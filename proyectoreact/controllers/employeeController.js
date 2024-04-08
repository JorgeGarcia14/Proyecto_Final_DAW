// controllers/employeeController.js

const Employee = require('../models/employee');

exports.getEmployees = (req, res) => {
  Employee.getemployees((err, employees) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(employees);
    }
  });
};

exports.getEmployee = (req, res) => {
  const id = req.params.id;
  Employee.getEmployee(id, (err, employee) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(employee);
    }
  });
};
// employeeController.js

const { getEmployee: getEmployeeModel, getEmployees: getEmployeesModel, getEmployeesByName: getEmployeesByNameModel } = require('../models/modelosAntiguos/employee');

const getEmployee = (req, res) => {
  const id = req.params.empleado_id;
  getEmployeeModel(id, (err, employee) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(employee);
    }
  });
};

const getEmployees = (req, res) => {
  getEmployeesModel((err, employees) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(employees);
    }
  });
};

const getEmployeesByName = (req, res) => {
  const name = req.params.name;
  getEmployeesByNameModel(name, (err, employees) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(employees);
    }
  });
};

module.exports = { getEmployee, getEmployees, getEmployeesByName };
import { getEmployee as getEmployeeModel, getEmployees as getEmployeesModel, getEmployeesByName as getEmployeesByNameModel } from '../models/employee.js';

export const getEmployee = (req, res) => {
  const id = req.params.empleado_id;
  getEmployeeModel(id, (err, employee) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(employee);
    }
  });
};

export const getEmployees = (req, res) => {
  getEmployeesModel((err, employees) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(employees);
    }
  });
};

export const getEmployeesByName = (req, res) => {
  const name = req.params.name;
  getEmployeesByNameModel(name, (err, employees) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(employees);
    }
  });
};
import { getEmployee as getEmployeeModel, getEmployees as getEmployeesModel } from '../models/employee.js';

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
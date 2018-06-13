import { Request, Response } from "express";
import { EmployeeRepo } from "../repositories/employee-repository";
import { EmployeeEntity } from "../entities/employee-entity";

export let getAllEmployees = async (req: Request, res: Response) => {
    let empRepo: EmployeeRepo = new EmployeeRepo();

    console.log("Received GetAllEmployees ==> GET");

    empRepo.getAllEmployees().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });


};

export let saveEmployee = async (req: Request, res: Response) => {
    let empRepo: EmployeeRepo = new EmployeeRepo();

    console.log("Received SaveEmployee ==> POST");
    console.log(req.body);

    let emp:EmployeeEntity = new EmployeeEntity();
    emp.email = req.body.result.parameters.email;
    emp.firstName = req.body.result.parameters.firstname;
    emp.lastName = req.body.result.parameters.lastname;
    emp.mobile = req.body.result.parameters.mobile;

    empRepo.saveEmployee(emp).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};
export interface PersonInterface {
  id:               string;
  name:             string;
  category:         Category;
  "category-image": CategoryImage;
  company:          string;
  "company-image":  string;
  levelOfHappiness: string;
}

export enum Category {
  Employee = "employee",
  Manager = "manager",
}

export enum CategoryImage {
  EmployeePNG = "employee.png",
  ManagerPNG = "manager.png",
}

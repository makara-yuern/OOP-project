import { Airline } from "./Airline/Airline";
import { Airplane } from "./Airplane/Airplane";
import { Employee, skills } from "./Employee/Employee";
import { Flight, meals } from "./Flight/Flight";
import { Passanger } from "./Passanger/Passanger";
import { genders } from "./Person/Person";
import { Route } from "./Route/Route";

let flight2 = new Flight("D11", "3 AM", "12 PM","00-00-00",meals.VEGETARIAN);
let p1 = new Passanger(12345,"20/April/2002","10-04-2023","JJ Kiko","jj@gmail.com",89676767,"pp",genders.MALE,"2 baggage",meals.DIARYFREE);

let pilot = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.PILOT, 1000000);
let coPilot = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.COPILOT, 700000);
let flightAttendant = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.FLIGHTATTENDANTS, 5000000);
let flightEngineer = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.FLIGHTENGINEER, 4000000);
let crew = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.CREW, 3500000);
let chef = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.CHEFF, 6000000);
let airportController = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.AIRPORTCONTROLLER, 8000000);

let routes = new Route("destination")
let airplane = new Airplane("airplaneName", "takeOfTime", 4, flight2, routes)
let airlines = new Airline("airlineName", airplane)
airlines.addEmployee(pilot);
airlines.addEmployee(coPilot);
airlines.addEmployee(flightAttendant);
airlines.addEmployee(flightEngineer);
airlines.addEmployee(crew);
airlines.addEmployee(chef);
airlines.addEmployee(airportController);


airlines.getEmployeeSalary();
console.log(airlines.getEmployeeSalary());

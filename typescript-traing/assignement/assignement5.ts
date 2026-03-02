// 1. Define the structure for employment object
interface Employment {
    sNo: number;
    name: string;
    baseSalary: number;
    experience: number;
    rating: number;
}

// Structure for the Output (Name + Hike)
interface HikeResult {
    employeeName: string;
    hikePercentageValue: string;
}

// The common function to calculate the hike
function calculateEmployeeHike(emp: Employment): HikeResult {

    let variablePercentage = 0; 
    let bonus = 0;
    let reward = 0;

    // Logic 1: Variable pay based on rating
    if (emp.rating >= 4.0) {
        variablePercentage = 15.0;
        bonus = 1500;
    } else if (emp.rating >= 3.0 && emp.rating < 4.0) {
        variablePercentage = 10.0;
        bonus = 1200;
    } else {
        // rating < 3.0
        variablePercentage = 3.0;
        bonus = 300;
    }

    // Extra reward based on experience
    if (emp.experience >= 5) {
        reward = 5000;
    } else {
        reward = 0;
    }

    // Calculate the total hike amount
    const variablePayAmount = (emp.baseSalary * variablePercentage) / 100;
    const totalHikeAmount = variablePayAmount + bonus + reward;

    // Calculate the hike percentage value
    let hikePercentageValueCalc = (totalHikeAmount / emp.baseSalary) * 100;

    // Return the result object
    return {
        employeeName: emp.name,
        hikePercentageValue: `${hikePercentageValueCalc.toFixed(2)}%` 
    };
}

// --- Main Execution ---

function employeeHikeCalculation() { // Fixed naming convention (camelCase)
    // 1. Initialize the Employee Data
    const employees: Employment[] = [
        { sNo: 1, name: "Alice Johnson", baseSalary: 75000.0, experience: 5.1, rating: 4.2 },
        { sNo: 2, name: "Bob Smith",     baseSalary: 68000.0, experience: 3.2, rating: 3.8 },
        { sNo: 3, name: "Carol Davis",   baseSalary: 82000.0, experience: 7.1, rating: 4.5 },
        { sNo: 4, name: "David Brown",   baseSalary: 90000.0, experience: 10.2, rating: 2.5 },
        { sNo: 5, name: "Eva Green",     baseSalary: 60000.0, experience: 2.4, rating: 3.5 }
    ];

    // 2. Create a place to store the results
    let employeeHikeResults: HikeResult[] = [];

    console.log("--- Processing Employee Hikes ---\n");

    // 3. Loop through employees (Standard For Loop)
    for (let i = 0; i < employees.length; i++) {
        // ERROR PREVENTION: Added '!' to fix 'possibly undefined' error
        const emp = employees[i]!; 
        
        const result = calculateEmployeeHike(emp);
        employeeHikeResults.push(result);
    }

    // 4. Print the final stored values
    console.log("Name\t\tHike Percentage");
    console.log("-------------------------------");
    
    // Standard Loop for printing
    for (let j = 0; j < employeeHikeResults.length; j++) {
        // ERROR PREVENTION: Added '!' here as well
        const res = employeeHikeResults[j]!; 
        
        // Adding a tab for alignment if name is short
        let separator = res.employeeName.length < 10 ? "\t\t" : "\t"; 
        console.log(`${res.employeeName}${separator}${res.hikePercentageValue}`);
    }
}

// Run the program
employeeHikeCalculation();
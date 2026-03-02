
/* // Imagine running a suite where tests might be retried. You want a list of unique failed test names, ignoring how many times they failed.
let failedTests = new Set<string>();
//Adding valuesto the set 
failedTests.add("Login_test_01");
failedTests.add("checkout_test_05");
failedTests.add("Login_test_01"); // Duplicate, won't be added again
console.log("Failed Tests Set:", failedTests);
// Check if a test has failed
if (failedTests.has("checkout_test_05")) {
    console.log("checkout_test_05 has failed.");
}
//Itrating
failedTests.forEach
    ((testName) => {
        console.log(`Retrying: ${testName}`);
    });  */

    /* Part 1: Practice with Set
Exercise 1: The "Unique Error Log" (Removing Duplicates)
Scenario: You have parsed a log file and extracted a list of HTTP status codes found during a load test. You only care abo /ut which distinct errors occurred, not how many times.*/
//A raw with many duplicates
let statusCodes=[200,404,500,200,200,503,404,500];
//creating a set from the array( remove duplicates instantl )
let uniqueStatusCodes=new Set<number>(statusCodes);
console.log("Unique Status Codes:",uniqueStatusCodes);
// 2. Convert it back to an Array if you need to index it (e.g., get the first error)
//let uniqueStatusCodesArray = Array.from(uniqueStatusCodes);
let uniqueStatusCodesArray = [...uniqueStatusCodes];
console.log("Unique Status Codes as Array:", uniqueStatusCodesArray);
/* Here are 4 specific exercises (2 for Set, 2 for Map) designed for a Test Automation Architect. These move beyond the basics into real-world scenarios you might face in framework development.

Part 1: Practice with Set
Exercise 1: The "Unique Error Log" (Removing Duplicates)
Scenario: You have parsed a log file and extracted a list of HTTP status codes found during a load test. You only care about which distinct errors occurred, not how many times.

Step 1: The Raw Data */

//TypeScript
// A raw array with many duplicates
//let statusCodes: number[] = [200, 404, 500, 200, 200, 503, 404];
// Step 2: The Solution Copy and run this code. Observe how we convert the Set back to an Array using ... (spread operator), which is a very common interview pattern.

//TypeScript
// 1. Create a Set from the array (removes duplicates instantly)
let uniqueErrors = new Set<number>(statusCodes);

console.log(`Total unique status codes: ${uniqueErrors.size}`); // Output: 4

// 2. Convert it back to an Array if you need to index it (e.g., get the first error)
let uniqueArray = [...uniqueErrors]; 

console.log(`First unique error encountered: ${uniqueArray[0]}`); 
/* Exercise 2: The "Missing File Check" (Set Difference)
Scenario: You have a list of expected file names that should be downloaded, and a list of files actually found in the download folder. You need to find which files are missing. */
let expectedFiles= new Set(["report.pdf","summary.docx","data.csv","image.png"]);
let actualFiles = new Set(["report.pdf","data.csv"]);
//we itrate though the expected files and che if it exists in the actual files set
let missingFiles:string[]=[];
expectedFiles.forEach((file)=>{
    // ! mean bnot if file is not found in the actual file set
    if (!actualFiles.has(file)) {
        missingFiles.push(file);
    }
});
console.log(`Expected Files:, ${[...expectedFiles]}`);
/* 
Part 2: Practice with Map
Exercise 3: The "Environment Manager" (Key-Value Lookup)
// Scenario: You want to run tests across different environments. Instead of big if/else statements, use a Map to store environment details. */
// define the map where key is environment name and value is the URL.
 //set up environment map
 let envConfig= new Map<string,string>();
 envConfig.set("dev", "https://dev.example.com");
 envConfig.set("staging", "https://staging.example.com");
 envConfig.set("prod", "https://www.example.com");
 envConfig.set("qa", "https://qa.testing.com");
 //Steop 2 The solution  write a function that accepts an environment name and return ther urls

    function getEnvUrl(env:string):string | undefined {
        return envConfig.get(env);
    }
    //test the function     
    console.log("Staging URL:", getEnvUrl("qa"));
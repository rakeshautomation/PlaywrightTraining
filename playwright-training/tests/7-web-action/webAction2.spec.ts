import { test, expect, firefox } from '@playwright/test';
test("validate the para bank Appliocation", async () => {
    //'Launch the firefox browser
    const browser = await firefox.launch({ headless: false, channel: 'msedge' });//msedge  for edge ,ars :[''start maximize]
    //launch the browser context from the browser
    const context = await browser.newContext();
    //launch the page from the browser co//enater the page and launch the applicatiobn
    // ntext
    const page = await context.newPage();
    //enter the url and launch the application
    await page.goto("https://demoqa.com/");
    //verify the application title
    //await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
    await expect(page).toHaveTitle('demosite');

    //Maximize the browser window to a specific resolution. 
    await page.setViewportSize({ width: 1920, height: 1088 });

    //click on form Widge
    const formWidget = page.locator("//h5[text()='Forms']");
    await formWidget.click();


    //Enter the  first Name
    const firstName = page.locator("input#firstName");
    await firstName.fill("Rakesh");

    //Enter the  Last Name
    const lastName = page.locator('input#lastName');
    await lastName.fill("Kumar");
    //Enter the Email
    const email = page.locator('input#userEmail');
    await email.fill("rakesh123@gmail.com");
    //Select Gender
    selectGender(page, "Male");
    // Enter Mobile Number
    const mobileNumber = page.locator("input#userNumber");
    await mobileNumber.fill("8095774411");
    //Enter Date of birth
    const dateofbirth = page.locator("input#dateOfBirthInput");





});
// //Common method to select the gender. 

async function selectGender(page: any, gender: string) {
    const genderLabel = page.locator('//label[text()="' + gender + '"]');
    await genderLabel.click();


}
// common function to select DOB
async function selectDOB(page: any, date: string, month: string, year: string) {
    //lunch the calender
    const calender = page.locator("input#dateOfBirthInput");
    await calender.click();
    // select the month
    const monthDropdown = page.locator(".react-datepicker__month-select");
    await expect(monthDropdown).toBeVisible();
    await monthDropdown.selectOption({ label: month });
    // select the year
    const yearDropDown = page.locator(".react-datepicker__year-select");
    await expect(yearDropDown).toBeVisible();
    await yearDropDown.selectOption({ label: year });
    //select the date 
    const dateLocator=page.locator('//div[text()="'+date+'" and contains (@aria-label, "'+month+'")]');
    await expect(dateLocator).toBeVisible();
    await dateLocator.click();
}
// 
//Common method to search and select subjects. 
async function selectSubject(page:any,subject:string){
     //Click on the subject container to activate the input field
    const subjectContainer  = page.locator("//div[contains(@class,'subjects-auto-complete__input-container')]");
   await subjectContainer.click();

     // Type the subject
    const subjectValue = page.locator("//div[text()='"+subject+"']");
    await expect(subjectValue).toBeVisible();
    await subjectValue.click();

}
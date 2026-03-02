import test, { expect } from "@playwright/test";

 test('validation of parabank application',async({page})=>{

    // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    // 2.verify application logo is displayed
    const logo= page.locator('img.logo');
    await expect(logo).toBeVisible();
    console.log("logo is displayed.")
    // 3.Verify application caption displayed as "Experience the difference"
    const caption = page.locator('p.caption');
    const expectCaption= "Experience the difference";
    const actualCaption=await caption.textContent();
    await expect(actualCaption).toBe(expectCaption);
    console.log("caption is displayed succesfully");
    // 4.Enter invalid username
    const userName= page.locator('input[name="username"]');
    await userName.fill('invalid_user_Name');
    // 5.Enter empty Password
    const passwrd= page.locator('input[name="password"]');
    // click on Login Button
    const loginBtn = page.locator('input[value="Log In"]');
    await loginBtn.click();
   //  7.Verify the error message "Please enter a username and password."
    const expectedErrorMessage="Please enter a username and password."
    const errorcontent= page.locator('p.error');
    await expect(errorcontent).toBeVisible();
    const actulerrMess=await errorcontent.textContent();
    const actulerrMesswithtrim =actulerrMess?.trim();
    await expect(actulerrMesswithtrim).toBe(expectedErrorMessage);
    console.log("Error Message is displayed successfully");

   //  8.Click on admin page link
   const adminLink= page.locator('li>a[href="admin.htm"]');
   await adminLink.click();
   const adminheader= page.locator("h1.title");
   await expect(adminheader).toBeVisible();
   //9.select the option "soap" from dba mode radio button
   selectDataAccessMode(page,'soap');
   console.log("Click on Soap Radio Button");
   //10.Scroll to element dropdown
   const loanProvider= page.locator('select#loanProvider');
   await loanProvider.scrollIntoViewIfNeeded();
   console.log("scrolll upto Loan provider");
//    11.Select the option web service from the dropdown
await loanProvider.selectOption({label:'Web Service'});
console.log("elect the option web service from the dropdown");
    // 12.click on submit button
    const submitButton= page.locator('input[value=Submit]');
    await submitButton.click();
    console.log("click on submit button");


    //13.verify submission is succesful by validating the error message
    const sucessMessage= page.locator('//b[text()="Settings saved successfully."]');
    await expect(sucessMessage).toBeVisible();
    console.log();
    //14 Click on services page link
     const serviceLink= page.locator("//div[@id='headerPanel']//a[text()='Services']");
    
     await serviceLink.click();
    console.log("Clicked on services page link successfully"); 
    // 15.wait for service page
    const bookstoreService= page.locator("//span[text()='Bookstore services:']");
    await expect(bookstoreService).toBeVisible();
    console.log("Services page header is visible");
    // 16.Scroll down till bookstore services table
    await bookstoreService.scrollIntoViewIfNeeded();
    console.log("Scrolled to bookstore services table successfully");
    // 17 // 17.get total rows of books store services table
    const rows= page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr');
        const totalRows = await rows.count();
    console.log("Total rows in bookstore services table: " + totalRows);
        // 18.get total columns of books store services table
    const columns = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]/td');
    const totalColumns = await columns.count();
    console.log("Total columns in bookstore services table: " + totalColumns);
    //  19.Print table data (row wise and column wise data)

    //loop to iterate rows
    for(let r = 1; r<=totalRows ; r++){

        //loop to iterate columns
        for(let c=1; c<=totalColumns ; c++){
            const cell = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr['+r+']//td['+c+']');
            const cellValue = await cell.textContent();
            console.log("Row "+ r + " , Column "+ c+ " value is : "+ cellValue);
        }
    }

 });
 //Common function to select: Data Access Mode
async function selectDataAccessMode(page:any , option:string){
    const radio = page.locator('input[value="'+option+'"]');
    radio.click("Clicked on services page link successfully is visible");
}

import{test,expect,firefox, chromium} from '@playwright/test';
test('Browser Actions ',async()=>{
    //'Launch the firefox browser
    const browser = await chromium.launch({headless:false,channel:'msedge'});//msedge  for edge ,ars :[''start maximize]
    //launch the browser context from the browser
    const context = await browser.newContext();
    //launch the page from the browser co//enater the page and launch the applicatiobn
    // ntext
    const page = await context.newPage();
    //enter the url and launch the application
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    //Verify application title
    await expect (page).toHaveTitle("ParaBank | Welcome | Online Banking");
    //Locate the element
    let element = await page.getByAltText("ParaBank");
    /* **************************************
        Common webElement validation 
    **************************************/
    //check if the element is visible
    await expect (element).toBeVisible();
    //Check if element is enable
    await expect (element).toBeEnabled();
    //check if the element is checked (for check box or radio button)
    await expect (element).toBeChecked();
    //check if eklement is disabled
    await expect (element).toBeDisabled();
    /**********************************
     * Button WebElement validation
     *
     * ************************/
    //locate the button element
    let button= await page.locator("input.button");
    //verify the label of the button
    let buttonText=await button.textContent();
    let buttonValue= await button.getAttribute("value");
    //click the button
    await button.click();
    //double click the button.
    await button.dblclick();
    //right click
    await button .click({button:'right'});
    //hover on the element
    await button.hover();
    //drag to to drop the button
    const target= await page.locator("#target");
    await button .dragTo(target);
    //scroll till button disoplayed
    await button.scrollIntoViewIfNeeded();
    //Button is covered and we want to click on hidden button
    await button.click({force:true});
    /********************
     * WebElement validation for textbox
     */
    //locate the text box element
    let textbox = await page.locator("input[name='username']");
    //clear the text box
    await textbox.clear();
    //verify the place holder
    let placeholder= await textbox.getAttribute("placeholder");
    //type the text in the text box
    await textbox.fill('sample text ');
    //press keys like 'enter into text box
    await textbox.press('enter');
    //verify the value entered into the text box
    await expect(textbox).toHaveValue('sample text');

    /*****************************
     * DropDown WebElement validation
     */
    let dropdown=page.locator('select#dropdown');
    //select the option fronm the dropdown
    await dropdown.selectOption({label:'option1'});//by labl or text
    await dropdown .selectOption({value:'option2'});//by value
    await dropdown .selectOption({index:1});//by index
    //. deselect option from drop down
    await dropdown .selectOption({label:'option1'}); //by Label or text
    await dropdown.selectOption({value:'option2'});//by option2

    //verify the total option avilable
    let options=dropdown.locator('option');
    let optionCount= await options.count();

    //print the total option text value from each and every option
    for(let i=0;i<optionCount;i++){
        const optionText=await optionCount.nth(i).textContent();
        console.log(`{$i+1}:${optionText}`);
    }
    //Close all browser
    await browser.close();
    }







    
    













});
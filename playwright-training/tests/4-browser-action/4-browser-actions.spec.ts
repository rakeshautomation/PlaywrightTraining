import{test,expect,chromium} from '@playwright/test';
test('Browser actions',async()=>{
    //launch the browser window (chromium))
   const browser = await chromium.launch({headless:false,channel:'chrome'});//msedge for edge//,args['--start maximized']
   //launch the browser context from the browser engine
   const context= await browser.newContext();
   // create the new page in the browser context
   const page= await context.newPage();
   //maximize the browser window  to a specific resolution
   await page.setViewportSize({width:1920,height:1080});
   //clear all cookies
   await context.clearCookies();
   //Enter the url google.com to launch
   await page.goto('https://google.com/');
   //Verify the google application title
   await expect(page).toHaveTitle('Google');
   //launch the new application "https :Playwright.dev" with in the same apage.
   await page.goto('https://playwright.dev/');
   //go to previous application
   await page.goBack();
   //go to next application
   await page.goForward();
   //refresh the application
   await page.reload();
    // launch the new tab or window
    let newPage=await context.newPage()
    //Launch the different appication
    await newPage.goto('https://www.selenium.dev/');
    ////get all the pages (tab) launched
    const pages = await context.pages();
    console.log("Total Pages/tab launched :"+pages.length);
    //Switch back to main window
    await page.bringToFront();
    //Get The current browser rl
    let currenturl= await page .url();
    console.log("current Window url:"+currenturl);
    //wait for 5 Sec
    await page.waitForTimeout(5000);
    //close the current page
    await page.close();
    //Close all page
    await browser.close();

});
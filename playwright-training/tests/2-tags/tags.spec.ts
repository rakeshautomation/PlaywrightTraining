import{test,expect} from '@playwright/test';

test.describe('Group1 tests',async()=>{
    test('group-1 test-1',{tag:'@smoke'},async({page})=>{
        console.log("group-1 test-1 is executing ..");
    });
    test('group-1 test-2',{tag:'@sanity'},async({page})=>{
        console.log("group-1 test-1 is executing ..");
    });
    test('group-1 test-3',{tag:['@smoke','@sanity']},async({page})=>{
        console.log("group-1 test-1 is executing ..");
    });
});

test.describe('Group2 tests',async()=>{

    test('group-2 test-1',{tag:'@smoke'},async({page})=>{
        console.log("group-2 test-1 is executing ..");
    }); 
    test('group-2 test-2',{tag:'@rakesh'},async({page})=>{
        console.log("group-2 test-2 is executing ..");
    });
    test('group-2 test-3',{tag:['@regression']},async({page})=>{
        console.log("group-2 test-3 is executing ..");
    });
});
/*import { test, expect } from '@playwright/test';

test.describe('Group1 tests', async () => {
    // FIX: Add @smoke inside the quotes
    test('group-1 test-1 @smoke', async ({ page }) => {
        console.log("group-1 test-1 is executing ..");
    });
    
    test('group-1 test-2 @sanity', async ({ page }) => {
        console.log("group-1 test-2 is executing ..");
    });
    
    // FIX: Just list both tags in the string
    test('group-1 test-3 @smoke @sanity', async ({ page }) => {
        console.log("group-1 test-3 is executing ..");
    });
});

test.describe('Group2 tests', async () => {
    test('group-2 test-1 @smoke', async ({ page }) => {
        console.log("group-2 test-1 is executing ..");
    });
    
    test('group-2 test-2 @sanity', async ({ page }) => {
        console.log("group-2 test-2 is executing ..");
    });
    
    test('group-2 test-3 @regression', async ({ page }) => {
        console.log("group-2 test-3 is executing ..");
    });
}); */
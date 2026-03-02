import{test,expect} from '@playwright/test';
test.describe('Group1 Tests',async()=>{
    test.skip('group-1 Test-1',async({page})=>{
        console.log("group-1 Test-1 is executing ..");
    });
    test('group-1 test2',async({page})=>{
        test.fixme()//This test is expected to fail because of a known issue. Please fix the issue and remove this annotation.
        console.log("group-1 test2 is executing ..");
        expect(1).toBe( 1 )
    });
    test('group1 test3 ', async({page})=>{
        console.log("group1 test3 is executing ..") ;
    });
})
test.describe('group-2 Tests',async()=>{

    test('group-2 test1',async({page})=>{
        test.slow(); //this test is expected to be slow
        console.log("group-2 test1 is executing ..");

    })
    test('group-2 test2',async({page})=>{
        console.log("group-2 test2 is executing ..");   
    })
    test('group-2 test3 ',async({page})=>{
        console.log("group-2 test3 is executing ..");
    })
});
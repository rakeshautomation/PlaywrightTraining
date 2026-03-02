function transactionBank(){
    const transactions:number[]=[5000,-2000,3000,-15000,-200,-300,4000,-3000];
    let creditCount=0;
    let debitCount=0;
    let totalCreditAmount=0;
    let totalDebitAmount=0;
    let suspeciousTranscationCount=0;
    let totalBalance=0;
    for (let i=0;i<transactions.length;i++){
    let amount = transactions[i]!;
        totalBalance = totalBalance+amount;
        //credit and debit count
        if(amount>0){
            creditCount++
            totalCreditAmount=totalCreditAmount+amount;

        }else{
            debitCount++;
            totalDebitAmount=totalDebitAmount+amount;
        }

        //suspicious transaction
        if(Math.abs(amount)>10000){
            suspeciousTranscationCount++

        }
       

    }
 console.log("Total debit transcation =" +debitCount);
 console.log("Total Debit Amount: " + totalDebitAmount);
 console.log("Total debit transcation =" +creditCount);
 console.log("Total Debit Amount: " + totalCreditAmount);
 console.log(`final account balance:${totalBalance}`);
 console.log(`suspeciousTranscation  :${suspeciousTranscationCount}`)




}
transactionBank();
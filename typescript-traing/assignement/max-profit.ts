function profitstock(price:number[]) :number {
    //If array is empty or has only 1 price, no profit possible
    if(price.length<2){
        return 0;
    }
    let minPrice=Infinity;
    let maxProfit=0;
    for(let i=0;i<price.length;i++) {
        let currentPrice=price[i]!;
        //traverse for min price
        if (currentPrice < minPrice) {
            minPrice = currentPrice;

    }
    // 2. Else, check if we sell today profit than what we found before
        else if (currentPrice - minPrice > maxProfit) {
            maxProfit = currentPrice - minPrice;
        }
    }
    return maxProfit;
}

const prices1 = [7, 1, 5, 3, 6, 4];
console.log("Max Profit for "+prices1+" is: "+profitstock(prices1)); // Output: 5
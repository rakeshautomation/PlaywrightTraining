function IsPallindrumString(str:string):boolean{
    const cleanedString=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();  
        const len=cleanedString.length;
        let left=0;
        let right=len-1;
        while(left<right){
            if(cleanedString[left]!==cleanedString[right]){
                return false;//mismatch found
            }   
            left++;
            right--;
        }
        // if all match found 
        return true;
}
 
console.log(IsPallindrumString("A man, a plan, a canal: Panama")); // true
console.log(IsPallindrumString("race a car")); // false

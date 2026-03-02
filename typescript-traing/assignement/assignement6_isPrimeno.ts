
    function isPrimeNumber(num: number): boolean {
    // 1. Edge Case: Numbers <= 1 are not prime
    if (num <= 1) {
        return false;
    }

    let result: boolean = true;

    // 2. Check for 2 explicitly
    if (num === 2) {
        return true;
    } 
    else if (num % 2 === 0) {
        return false;
    }

    // 3. Loop Logic
    if (result === true) {

        for (let i = 3; i < num; i = i + 2) {
            if (num % i === 0) {
                result = false;
                break; // Stop loop if we found a divisor
            }
        }
    }

    // 4. Return the result
    return result; 
} 

// --- Test the function OUTSIDE the function block ---
console.log("Is 7 prime? " + isPrimeNumber(7));
console.log("Is 10 prime? " + isPrimeNumber(10));
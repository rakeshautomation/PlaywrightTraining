/**
 * Finds and prints the 2nd and 3rd largest numbers in an array.
 */
function top3_number(arr: NumberList): void {
    // 1. Handle cases where the array is too small
    if (arr.length < 3) {
        console.log("The list needs at least 3 numbers.");
        return;
    }

    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    // 2. The Logic Loop
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        if (current > first) {
            third = second;
            second = first;
            first = current;
        } else if (current > second && current !== first) {
            third = second;
            second = current;
        } else if (current > third && current !== second) {
            third = current;
        }
    }

    // 3. Final Output
    console.log(`Second Largest: ${second}`);
    console.log(`Third Largest: ${third}`);
}

// 4. Execution
const values: number[] = [12, 34, 11, 36, 87, 98, 93];
top3_number(values);
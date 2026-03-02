function printDiamondSimple(n: number) {
  
  // --- PART 1: TOP PYRAMID ---
  // Outer loop: Controls which row we are on (1, 2, 3...)
  for (let row = 1; row <= n; row++) {
    let line = ""; // Start with an empty line

    // Inner Loop 1: Add the indentation (Spaces)
    // As the 'row' gets bigger, the spaces get smaller
    for (let space = 1; space <= (n - row); space++) {
      line = line + " ";
    }

    // Inner Loop 2: Add the numbers
    // If row is 3, we print: 1 2 3
    for (let num = 1; num <= row; num++) {
      line = line + num + " "; 
    }

    console.log(line);
  }

  // --- PART 2: BOTTOM PYRAMID ---
  // We do the exact same thing, but count DOWN.
  // We start at (n-1) because we don't want to repeat the middle row.
  for (let row = n - 1; row >= 1; row--) {
    let line = "";

    // Same space logic: (n - row)
    for (let space = 1; space <= (n - row); space++) {
      line = line + " ";
    }

    // Same number logic
    for (let num = 1; num <= row; num++) {
      line = line + num + " ";
    }

    console.log(line);
  }
}

printDiamondSimple(3);
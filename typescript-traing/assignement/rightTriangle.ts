function rightTriangle(rows: number): void{
    // Outer Loop: Controls the rows (1 to 5)
    for (let i = 1; i <= rows; i++) {
        let line = "";
        
        // Inner Loop: Adds the stars for the current row
        // We run this loop 'i' times.
        for (let j = 1; j <= i; j++) {
            line = line + "*";
        }

        console.log(line);
    }
}
rightTriangle(5);
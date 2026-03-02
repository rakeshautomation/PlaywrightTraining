function findAllOccurrences(text: string, searchWord: string): number[] {
    const indexes: number[] = [];
    const wordLen = searchWord.length;

    // Loop through the entire text
    for (let i = 0; i < text.length; i++) {
        
        // Extract the chunk from current position (i) to (i + wordLen)
        
        const chunk = text.slice(i, i + wordLen);

        // Check if this chunk matches our word
        if (chunk === searchWord) {
            indexes.push(i);
        }
    }
    
    return indexes;
}

// --- Usage ---
const paragraph = "Java is a popular programming language. Java is used for web development.";
const result = findAllOccurrences(paragraph, "Java");

console.log("Total occurrences:", result.length);
console.log("Indexes:", result);
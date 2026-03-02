function characterOccurance(str:string):Record<string,number>{
    const charCount:Record<string, number> = {};
     for (const char of str) {
        // If char exists, increment; otherwise set to 1
        charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;

}

// --- Usage ---
console.log(characterOccurance("hello world")); 
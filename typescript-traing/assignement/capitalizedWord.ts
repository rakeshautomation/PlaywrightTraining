function capitalisedword(inputsentence: string): string {
    // 1. Split the sentence into a list of words
    const words = inputsentence.split(" ");
    //create a empty string so it holds the capitalised word
    const capitalisedWords: string[] = [];
    // 2. Loop through each word in the list    

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
    
    // Safety check: If double spaces created an empty word, skip it
    //if (!word) checks for 'undefined', 'null', OR empty string
       if (!word) {
            continue;
        }
        // Capitalise the first letter of the word and make the rest lowercase
        const capitalisedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        //Add the capitalised word to the list
        capitalisedWords.push(capitalisedWord);
    }
   
    // 3. Join the list of capitalised words back into a single string

    return capitalisedWords.join(" ");
 }  



const inputsentence = "Java programming is fun";
console.log(capitalisedword(inputsentence));
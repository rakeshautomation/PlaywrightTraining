function longestValidParentheses(s: string): number {
    let maxLength = 0;
    // Initialize stack with -1 to handle the boundary case
    let stack: number[] = [-1];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // Push index of '('
            stack.push(i);
        } else {
            // It's a ')', pop the last opening paren or base
            stack.pop();

            if (stack.length === 0) {
                // Stack is empty, this ')' is a mismatch
                // Push current index as the new base for future calculations
                stack.push(i);
            } else {
                // Valid pair! Calculate length
                // Current index minus the index of the element now at top
                let currentLength = i - stack[stack.length - 1];
                maxLength = Math.max(maxLength, currentLength);
            }
        }
    }

    return maxLength;
}

// Testing with your examples
console.log(longestValidParentheses("(()"));     // Output: 2
console.log(longestValidParentheses(")()())"));  // Output: 4
console.log(longestValidParentheses("(()())"));  // Output: 6
console.log(longestValidParentheses(""));        // Output: 0
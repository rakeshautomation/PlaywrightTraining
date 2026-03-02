console.log("hello Ts progam");
//Multiple bLione comment- Shift +ALT+A
// single line command- ctl+/ forward slash

//Type script Installation
//Set - Execution Policy scope Current User - Executiopn policy Remote signed
//Allow locally created powershell 
/* why this is needed-prevent Power shell error like "Running script is disabled on the system" */
/* Install Type  scripts globally
npm - install -g  type script
what this do */
/* JavaScript / TypeScript Comments

Comments in Java are essential for writing readable, maintainable, and professional code. They provide explanations,
improve collaboration, and help future developers (including yourself) understand the purpose and functionality of your
code. Here’s a detailed guide to the different types of comments in Java, their importance, and interesting facts.
1. Single-Line Comments (//)
• Syntax: // Comment text here
• Used for short, specific notes about code logic or functionality.
• Placed on the same line as the code or on a separate line.
// This is a single-line comment (Cntrl+/)
console.log("Hello, TypeScript!"); // This comment is at the end of a line
2. Multi-Line Comments (/* ... */
/*• Used for longer explanations or temporary code disabling.
• Avoid overuse as it can clutter the code.
/* 
This is a multi-line comment. (Shift+Alt+A)
You can write comments that span multiple lines.
*/
console.log("Comments are useful for explaining code!");



/* TypeScript Installation

1️⃣PowerShell Execution Policy (Windows Only)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
🔍 What this does
• Allows locally created PowerShell scripts to run without restrictions
• Allows downloaded scripts to run only if digitally signed
• Applies only to the current user (no admin access required)
🧠 Why this is needed
• Prevents PowerShell errors like: “running scripts is disabled on this system”
• Required when using Node.js, npm, npx commands on Windows
2️⃣ Install TypeScript Globally
npm install -g typescript
🔍 What this does
• Installs the TypeScript compiler (tsc) globally
• Makes tsc available from any folder
✅ Verify installation
tsc -v
tsc --version
🧠 When to use
• When you want to compile .ts files manually
• Useful for learning and quick experiments

Trainer: Bharath (BharathTechAcademy@gmail.com) Topic: Test Automation with Cypress
4

TypeScript Execution

Method 1: Traditional TypeScript + ts-node (This method uses TypeScript compiler + ts-node)
1️⃣ Install dependencies (project-level)
npm install -D typescript ts-node
🔍 What this installs
• typescript → TypeScript compiler
• ts-node → Runs .ts files directly without manual compilation
• -D → Installs as devDependencies
2️⃣Create TypeScript configuration
npx tsc --init
🔍 What this does
• Generates tsconfig.json
• Controls:
o Target JavaScript version
o Module system
o Strict type checking
o Output directories

📌tsconfig.json is the heart of a TypeScript project
3️⃣ Run a TypeScript file
npx ts-node Test.ts
Method 2: Using TSX (Fast & Modern Approach)
This method uses tsx, a modern TypeScript runtime.
1️⃣ Install tsx globally
npm install -g tsx
🔍 What is tsx
• A fast runtime for TypeScript
• Built on esbuild
• No tsconfig required for basic usage
2️⃣ Run TypeScript file
npx tsx Test.ts
🔍 What happens
• Directly runs .ts files
• Faster startup than ts-node
• Minimal configuration */

let fNamne:string='rakesh';
let lNamne:string="Sahoo";
//create a script 
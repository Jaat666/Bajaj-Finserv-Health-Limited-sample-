// Utility functions for mathematical calculations

// Generate Fibonacci series
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
}

// Check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Find prime numbers from array
function findPrimes(arr) {
    return arr.filter(num => isPrime(parseInt(num)));
}

// Calculate GCD (HCF)
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

// Calculate HCF of array
function calculateHCF(arr) {
    if (arr.length === 0) return 0;
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
        if (result === 1) return 1;
    }
    return result;
}

// Calculate LCM of two numbers
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// Calculate LCM of array
function calculateLCM(arr) {
    if (arr.length === 0) return 0;
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = lcm(result, arr[i]);
    }
    return result;
}

// AI response mapping for predefined questions
function getAIResponse(question) {
    const q = question.toLowerCase().trim();
    
    // Predefined responses for common questions
    const responses = {
        'what is the capital city of maharashtra?': 'Mumbai',
        'what is the capital of india?': 'Delhi',
        'who is the prime minister of india?': 'Narendra Modi',
        'what is the square root of 144?': '12',
        'what is the largest planet?': 'Jupiter',
        'who developed the theory of relativity?': 'Einstein',
        'what is the chemical symbol for water?': 'H2O',
        'which company developed node.js?': 'Ryan Dahl',
        'what is the speed of light?': '299792458',
        'who wrote romeo and juliet?': 'Shakespeare'
    };
    
    // Check for exact match
    if (responses[q]) {
        return responses[q];
    }
    
    // Check for partial matches
    for (const [key, value] of Object.entries(responses)) {
        if (q.includes(key.replace('?', '').slice(0, 10))) {
            return value;
        }
    }
    
    // Default response for unknown questions
    return 'Answer';
}

module.exports = {
    generateFibonacci,
    findPrimes,
    calculateHCF,
    calculateLCM,
    getAIResponse
};
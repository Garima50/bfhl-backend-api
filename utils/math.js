
// fibonacci 
function fibonacci(n) {
  // validation
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Invalid fibonacci input");
  }

  const result = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  return result;
}

// prime number
function isPrime(num) {
  if (!Number.isInteger(num) || num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function filterPrimes(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid prime input");
  }

  return arr.filter(isPrime);
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function hcfArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid hcf input");
  }

  return arr.reduce((acc, curr) => {
    if (!Number.isInteger(curr)) {
      throw new Error("Invalid hcf input");
    }
    return gcd(acc, curr);
  });
}


function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function lcmArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid lcm input");
  }

  return arr.reduce((acc, curr) => {
    if (!Number.isInteger(curr)) {
      throw new Error("Invalid lcm input");
    }
    return lcm(acc, curr);
  });
}


module.exports = { fibonacci, filterPrimes, hcfArray, lcmArray };

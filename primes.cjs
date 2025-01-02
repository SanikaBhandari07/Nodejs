function getPrimes(max) {
    const sieve = {};
    const primes = [];
  
    for (let i = 2; i <= max; ++i) {
        debugger;
      if (!sieve[i]) {
        primes.push(i);
  
        for (let j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
  
    return primes;
  }
  
  console.log(getPrimes(100));
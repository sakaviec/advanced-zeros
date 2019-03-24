module.exports = function getZerosCount(number, base) {
  function getPrimes(base) {
        let b = base;
        let obj = {};
        for (let i = 2; i <= b; i++) {
            while (b % i == 0) {
                if (obj[i]) obj[i]++;
                else obj[i] = 1;
                b /= i;
            }
        }
        return obj;
    }

    let primes = getPrimes(base);
    let result = [];

     console.log(primes)

    for (let key in primes) {
        let count = 0;
        let n = number;
        while (n >= 1) {
            let times = Math.floor(n / key);
            //console.log(n+" div. by "+key+" equals "+times);
            n = times;
            count += times;
            //console.log("Count: "+count);
        }
        result.push(Math.floor(count / primes[key]));
        //console.log(result);
    }

    return Math.min.apply(null, result);
};
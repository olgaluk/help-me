module.exports = function count(s, pairs) {
  let N = 1;
  let answer = 0;
  let counter = 0;  
  let gcd = function (a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };

  if (s.length === 1) {
    for (let i = 0; i < pairs.length; i++) {
      counter = pairs[i][0];
      N *= counter;
      if (N > 1000000) {
        break;
      }
    }
    if (s[0] === '1') {
      for (let k = 1; k <= N; k++) {
        if (gcd(k, N) === 1) {
          answer++;
        }
      }
    }
    if (s[0] === '0') {
      for (let k = 1; k <= N; k++) {
        if (gcd(k, N) !== 1) {
          answer++;
        }
      }
    }

  }

  if (s.length === 2) {
    if (+s === 11) {
      for (let i = 0; i < pairs.length; i++) {
        counter = pairs[i][0];
        N *= counter;
        if (N > 100000) {
          break;
        }
      }
      for (let k = 1; k <= N; k++) {
        if (gcd(k, N) !== 1) {
          answer++;
        }
      }
    } else {
      for (let i = 0; i < pairs.length; i++) {
        counter = pairs[i][0];
        N *= counter;
        if (N > 100000) {
          break;
        }
      }
      for (let j = 0; j < s.length; j++) {

        if (s[j] === '1') {
          for (let k = 1; k <= N; k++) {
            if (gcd(k + j, N) === 1) {
              answer++;
            }
          }
        }
        if (s[j] === '0') {
          for (let k = 1; k <= N; k++) {
            if (gcd(k + j, N) !== 1) {
              answer++;
            }
          }
        }
      }
    }
  }
  const result = answer % 1000000007;
  return result;
}
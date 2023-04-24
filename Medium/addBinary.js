var addBinary = function (a, b) {
  let result = "";
  if (b.length > a.length) {
    let aux = a;
    a = b;
    b = aux;
  }
  if (a == null || b == null || a.length == 0 || b.length == 0) {
    return result;
  }

  let count = 0;
  let carry = 0;
  while (count < a.length) {
    if (count < b.length) {
      if (
        a.charAt(a.length - 1 - count) == "0" &&
        b.charAt(b.length - 1 - count) == "0"
      ) {
        if (carry == 0) {
          result = "0" + result;
          count++;
        } else {
          result = "1" + result;
          carry = 0;
          count++;
        }
      }
      if (
        (a.charAt(a.length - 1 - count) == "0" &&
          b.charAt(b.length - 1 - count) == "1") ||
        (a.charAt(a.length - 1 - count) == "1" &&
          b.charAt(b.length - 1 - count) == "0")
      ) {
        if (carry == 0) {
          result = "1" + result;
          count++;
        } else {
          result = "0" + result;
          count++;
        }
      }
      if (
        a.charAt(a.length - 1 - count) == "1" &&
        b.charAt(b.length - 1 - count) == "1"
      ) {
        if (carry == 0) {
          result = "0" + result;
          carry = 1;
          count++;
        } else {
          result = "1" + result;
          count++;
        }
      }
    } else {
      if (carry == 1) {
        if (a.charAt(a.length - 1 - count) == "1") {
          result = "0" + result;
          count++;
        }
        if (a.charAt(a.length - 1 - count) == "0") {
          result = "1" + result;
          carry = 0;
          count++;
        }
      } else {
        if (a.charAt(a.length - 1 - count) == "1") {
          result = "1" + result;
          count++;
        }
        if (a.charAt(a.length - 1 - count) == "0") {
          result = "0" + result;
          count++;
        }
      }
    }
  }
  if (carry == 1) {
    result = "1" + result;
  }
  return result;
};

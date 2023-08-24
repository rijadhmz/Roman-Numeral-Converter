function convertToRoman(num) {
    const one = {
      '1': "I",
      '2': "II",
      '3': "III",
      '4': "IV",
      '5': "V",
      '6': "VI",
      '7': "VII",
      '8': "VIII",
      '9': "IX",
    };
  
    const two = {
      '1': "X",
      '2': "XX",
      '3': "XXX",
      '4': "XL",
      '5': "L",
      '6': "LX",
      '7': "LXX",
      '8': "LXXX",
      '9': "XC",
    };
  
    const three = {
      '1': "C",
      '2': "CC",
      '3': "CCC",
      '4': "CD",
      '5': "D",
      '6': "DC",
      '7': "DCC",
      '8': "DCCC",
      '9': "CM",
    }
  
    const four = {
      '1': "M",
      '2': "MM",
      '3': "MMM"
    }
  
    num.toString();
    let a = num + "";
    let arr = a.split("");
    let length = arr.length;
    let result = [];
    let arrEl = "";
  
    if (length==1){
      arrEl = arr[0];
      result.unshift(one[arrEl]);
  
    } else if (length==2){
      arrEl = arr[1];
      result.unshift(one[arrEl]);
      arrEl = arr[0];
      result.unshift(two[arrEl]);
    
    } else if (length==3){
      arrEl = arr[2];
      result.unshift(one[arrEl]);
      arrEl = arr[1];
      result.unshift(two[arrEl]);
      arrEl = arr[0];
      result.unshift(three[arrEl]);
  
    } else if (length==4){
      arrEl = arr[3];
      result.unshift(one[arrEl]);
      arrEl = arr[2];
      result.unshift(two[arrEl]);
      arrEl = arr[1];
      result.unshift(three[arrEl]);
      arrEl = arr[0];
      result.unshift(four[arrEl]);  
    }
  
    let final = result.join("");
    return final;  
    
  }
  
  
  console.log(convertToRoman(2345));
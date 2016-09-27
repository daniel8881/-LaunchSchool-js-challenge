//1.return only digits
//2.invalid num return 0000000000
  //less than 10
  //more than 11
  //11 digits but first is not 1
//3.if 11 digts first is 1, trim the 1
//4.areacode return first three digits
//5.to_s 5551234567 => (555) 123-4567

function phoneNumber(number) {

  var digits = number.replace(/[^0-9]/gi, '');
  
  if(digits.length === 11 && digits[0] === '1'){
    return digits.slice(1);
  }

  if(digits.length < 10 || digits.length > 11){
    return '0000000000';
  }

  return digits;

}

function areaCode(num) {
  var phone = phoneNumber(num);

  return phone.substr(0, 3);
}

function toS(num)


console.log(areaCode('9876543210'));
//check valid -> true, false
//return checksum -> num
//give an invalid num, return valid num by plus a digit -> valid num

//step1: every second digit doubled, if becom 10 or more substract 9
//step2; add all digit, num % 10 = 0;

function Luhn(num) {
    this.input = num;
    this.addends = function(num) {
        var doubled;
        num = num || this.input
        return num.toString().split('').reverse().map(function(digit, idx) {
            if (idx % 2 !== 0) {
                doubled = digit * 2;
                if (doubled >= 10) {
                    return doubled -= 9;
                }
                return doubled;
            } else {
                return +digit;
            }
        }).reverse();
    }

    this.checksum = function(num) {
        num = num || this.input;
        var transformed = this.addends(num);
        return transformed.reduce((a, b) => a + b);
    }

    this.isValid = function(num) {
        num = num || this.input;
        return this.checksum(num) % 10 === 0 ? true : false;
    }

    this.create = function() {
        
        if (this.isValid(this.input)) {
            return this.input;
        } else {
            var newInput = +(this.input.toString() + '0');
            
            if (this.isValid(newInput)) {
                return newInput;
            }  else {
                var lastDigit = 10 - (this.checksum(newInput) % 10);
                return newInput + lastDigit;
            }
        }

    }
}

var a = new Luhn(837263756);
console.log(a.create());
const sumAll = function(a,b) {

    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0 || a % 1 !== 0 || b % 1 !== 0){
        return 'ERROR';
    }
    else {if(a>b){
            for(let i = b; i < a; i++)
              b += i + 1;
            return b;
    }
        else{
            for(let i = a; i < b; i++)
                a += i + 1;
            return a;
        }
    }

};

// Do not edit below this line
module.exports = sumAll;

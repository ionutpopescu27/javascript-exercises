const repeatString = function(message, times) {

    if(times < 0) 
        return 'ERROR';
    else if( times === 0){
        return '';
    }
    else {
        let printedMessage ='';
        for(let i = 0; i< times; i++){
            printedMessage += message;
        }
        return printedMessage;
    }
    
};

// Do not edit below this line
module.exports = repeatString;

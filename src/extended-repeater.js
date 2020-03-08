module.exports = function repeater(str, {
    repeatTimes, 
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
 }) {
    function repeatWithDelimiter(value, quantity, delimiter) {
        let newValue = value + delimiter;
            for(let i = 0; i < quantity - 1; i++){
                value = newValue + value;
            }
            return value;
    }

    if (!repeatTimes || repeatTimes == undefined) { repeatTimes = 1; }
    if(!additionRepeatTimes || additionRepeatTimes == undefined) { additionRepeatTimes = 0; }
    if(!separator) { separator = '+'; }
    if(addition == false) { addition = 'false' }
    if(addition == null) { addition = 'null' }
    if(str == false) { str = 'false' }
    if(str == null) { str = 'null' }
    if (!addition) { addition = ''; }
    if(!additionSeparator ) {additionSeparator = '' } 

    let iterativeSeperator = repeatWithDelimiter(addition, additionRepeatTimes, additionSeparator);

    if(iterativeSeperator === 'null' ) { iterativeSeperator = ''; }

    str = str + iterativeSeperator;
 
    return repeatWithDelimiter(str, repeatTimes, separator);
}
 

  
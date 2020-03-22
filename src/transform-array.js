module.exports = function transform(arr) {
    if(!Array.isArray(arr)) {
        throw new Error;
    }
    if(arr.includes(undefined)){arr.splice(arr.indexOf(undefined),1)}
    if(arr.length < 2){return arr}
    let newArr = [];
    let position = 0;
    if(arr.includes('--double-next')){
        position = arr.indexOf('--double-next');
       
        console.log(position);
    
        for(let i = 0; i < position; i++){
            newArr.push(arr[i]);
        }
        for(let i = position + 1; i < position + 2; i++){
            newArr.push(arr[i]);
        }
        for(let i = position + 1; i < arr.length; i++){
            newArr.push(arr[i]);
        }
    }
    if(arr.includes('--discard-prev')) {
        position = arr.indexOf('--discard-prev');

        for(let i = 0; i < position - 1; i++){
            newArr.push(arr[i]);
        }
        for(let i = position + 1; i < arr.length; i++){
            newArr.push(arr[i]);
        }
    }
    if(arr.includes('--discard-next')) {
        position = arr.indexOf('--discard-next');

        for(let i = 0; i < position; i++){
            newArr.push(arr[i]);
        }
        for(let i = position + 2; i < arr.length; i++){
            newArr.push(arr[i]);
        }      
    }
    if(arr.includes('--double-prev')) {
        position = arr.indexOf('--double-prev');
        for(let i = 0; i < position; i++){
            newArr.push(arr[i]);
        }
        newArr.push(arr[position - 1]);
        for(let i = position + 1; i < arr.length; i++){
            newArr.push(arr[i]);
        }
    } 
    return newArr;
};
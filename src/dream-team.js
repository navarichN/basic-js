module.exports = function createDreamTeam(names) {
  if(Array.isArray(names) == false) { return false };
  let arr = [];
     names.forEach((el)=>{
      if(typeof el == 'string'){
        el = el.trim().split('').splice(0,1).join();
        arr.push(el.toUpperCase());
      }
  })
    return arr.sort().join("");
};
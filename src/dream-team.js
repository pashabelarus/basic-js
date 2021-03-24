const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if(!Array.isArray(members))
  return false;

  if (Array.isArray(members)) {
    let dreamTeam = [];

    members.forEach(i => {
      if (typeof i === 'string')
        dreamTeam.push(i.trim()[0].toUpperCase())
    });
    
    return dreamTeam.sort().join('');
  }
};

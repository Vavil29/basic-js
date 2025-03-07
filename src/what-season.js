const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw new Error('argument is not Data');
  }

  date.getYear();

  const month = date.getMonth();

  switch (month) {
    case 11:
      return 'winter';
      break;
    case 0:
      return 'winter';
      break;
    case 1:
      return 'winter';
      break;
    case 2:
      return 'spring';
      break;
    case 3:
      return 'spring';
      break;
    case 4:
      return 'spring';
      break;
    case 5:
      return 'summer';
      break;
    case 6:
      return 'summer';
      break;
    case 7:
      return 'summer';
      break;
    case 8:
      return 'autumn';
      break;
    case 9:
      return 'autumn';
      break;
    case 10:
      return 'autumn';
      break;
  }

}

module.exports = {
  getSeason
};

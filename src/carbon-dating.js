const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  if (typeof sampleActivity !== 'string') return false
  if (Number.isNaN(+sampleActivity)) return false
  if ((+sampleActivity) + '' !== sampleActivity) return false
  if (sampleActivity == 0) return false

  const h = 0.693 / HALF_LIFE_PERIOD;
  const result = Math.ceil(((Math.log(MODERN_ACTIVITY / +sampleActivity)) / h))
  if (Number.isNaN(result)) return false
  return result <= 0 ? false : result
}
module.exports = {
  dateSample
};

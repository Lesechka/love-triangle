/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  const length = preferences.length;
    for (let n = 0; n < length; n++){
      let k = n;
      for (let a = 0; a < 3 && k != preferences[k]-1 && k < length; a++){
        k = preferences[k]-1;
        if (k == n && a == 2){
      count++;
      };
      };

    };
    return count/3;
   };

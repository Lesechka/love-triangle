/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
    for(var n=0; n<preferences.length; n++){
      var k=n;
      var a=0;
      for (a; a<3 & k!=preferences[k]-1 & k<preferences.length; a++){

        k=preferences[k]-1;
        if (k==n&a==2){
      count++;
      };
      };

    };
    return count/3;
   };  // your implementation

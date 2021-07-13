
// You should implement your task here.

module.exports = function towelSort (matrix) {
 if(!matrix) return [];
    
    return matrix.reduce((acc, item, index) => {
      item.sort((a, b) => index % 2 === 0 ? a - b : b - a).map(elem => acc.push(elem));
      return acc;
  }, []);
}

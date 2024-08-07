
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }
    return matrix
        .map((array, index) => {
            if (index % 2 !== 0) {
                return array.reverse();
            } else {
                return array;
            }
        })
        .flat();
};

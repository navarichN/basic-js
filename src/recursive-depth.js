module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let a = 0;
            arr = arr.forEach((el) => {
                if(Array.isArray(el)){
                    a = Math.max(a, this.calculateDepth(el));
                }
            })
        return a = a + 1;
    }
};
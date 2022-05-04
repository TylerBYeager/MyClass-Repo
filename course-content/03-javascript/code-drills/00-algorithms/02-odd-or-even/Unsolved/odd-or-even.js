// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {
	// * If `num` is evenly divisible by 2, return the string `"even"`.
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd"
    }
    //  * If `num` is not evenly divisible by 2, return the string `"odd"`.
};

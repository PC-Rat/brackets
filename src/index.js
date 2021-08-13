module.exports = function check(str, bracketsConfig) {
  // your solution
  module.exports = function check(str, bracketsConfig) {
	// your solution
	const stack = [];

	if (str.length % 2 != 0) return false;

	const openBrackets = ['(', '[', '{', '|'];
	const bracketPairs = {
		')': '(',
		']': '[',
		'}': '{',
		'|': '|'
	};
	const bracketOk = (str) => {
		for (i = 0; i < str.length; i++) {
			let currentSymbol = str[i];
			if (openBrackets.includes(currentSymbol)) {
				stack.push(currentSymbol);
			} else if (stack.length === 0)
				return false;

			let topSymbol = stack[stack.length - 1];

			if (bracketPairs[currentSymbol] === topSymbol) {
				stack.pop();
			} else {
				return false;
			}
		}
	};

	return stack.length === 0;
}
}

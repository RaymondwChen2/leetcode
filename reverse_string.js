var reverseString = function(s) {

    for (let i = 0; i < s.length; i++) {

        s.reverse();
    }
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ['o', 'l', 'l', 'e', 'h']
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));// ['h','a','n','n','a','H']

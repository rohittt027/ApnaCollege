// Arithmetic Operatos

let a = 5;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);

// ---------------------------------------------------------------------------------------------------


// Comparisonal Operators

let age = 18;

console.log(age > 18)  //false
console.log(age >= 18)  //true
console.log(age < 18)  //false
console.log(age <= 18) //true

// NOTE:-
3 > 5  //false 
5 < 6  //true
5 >= 5  //true
0 < 5  //true
0 < -2  //false
0 < -99  //false
5 == 5  //true 
5!= 5  //false
5!= 4  //true


// NOTE:-
// == :- compare value, not typeo
// === :- compare type & value

'123' == 123
true
1 == '1'
true
0 == ' '
true
'123' === 123
false
1 === '1'
false
null == undefined
true
null === undefined
false



// ---------------------------------------------------------------------------------------------------
// Comparison for non-number

// It is compare the value of characters & non-number using unicode

// 'a'->61, 'b'->62 ...
// 'A'->41, 'B'->42 ...
 
// Note:-
// 'a' value is greater than capital 'A'

'a' > 'A'
true
'a' < 'b'
true
'a' > 'b'
false
'*' < '&'
false
'B' < 'C'
true
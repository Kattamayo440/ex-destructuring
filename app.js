/*
1. 8
2.1846

1. yearsNeptuneDiscovered: 1846, yearsMarsDiscovered: 1659

1. Your name is Alejandro and your like purple
2. Your name is Melissa and you like green
3. Your name is undefined and you like green

1. Maya
2. Marisa
3. Chi

1. raindrops on roses
2. whiskers on kittens
3. [Bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings]

[10, 20, 30]
*/

const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});

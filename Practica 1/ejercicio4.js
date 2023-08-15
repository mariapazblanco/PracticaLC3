const candles = [3, 4, 1, 5, 5, 2, 5];

const maxValue = Math.max(...candles);

const cake = (inputValue) => candles.filter((item) => item == maxValue).lenght;

console.log(cake(candles));


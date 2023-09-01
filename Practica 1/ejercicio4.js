const candles = [3, 4, 1, 5, 5, 5, 5];

const maxValue = Math.max(...candles);

const cake = (inputValue) =>
  inputValue.filter((candle) => candle == maxValue).length;

console.log(cake(candles));

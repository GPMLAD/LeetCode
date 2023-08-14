function fizzBuzz(n: number): string[] {
  const result: string[] = new Array(n);

  for (let i = 1; i <= n; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;
    let string = '';

    if (isFizz) {
      string += 'Fizz';
    }
    if (isBuzz) {
      string += 'Buzz';
    }

    result[i - 1] = string || `${i}`;
  }

  return result;
}
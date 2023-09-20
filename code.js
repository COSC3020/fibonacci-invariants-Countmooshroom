function fib(n) {
    if (n == 0) return [0];
    arr = [0, 1];
    for (let i = 0; i < n - 1; i++) {
        arr.push(arr[i] + arr[i + 1])
    }
    return arr;
}

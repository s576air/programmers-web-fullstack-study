function swap(arr, i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}

function solution() {
    let values = ['a', 'b', 'c'];
    let numbers = [0, 1, 2];

    function dfs(depth, s) {
        if (depth >= numbers.length) {
            console.log('  '.repeat(depth), s);
            return;
        }

        for(let i = depth; i < numbers.length; i++) {
            swap(numbers, i, depth);
            //console.log('  '.repeat(depth), values[numbers[depth]]);
            console.log('  '.repeat(depth), s);

            dfs(depth + 1, s + values[numbers[depth]]);
            swap(numbers, i, depth);
        }
    }

    dfs(0, '-');
}

solution();
function flickSwitch(arr) {
    let switchFlag = true;
    let indexFlick = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'flick') {
            indexFlick++;
            switchFlag = false;
        }

        if (switchFlag || indexFlick % 2 === 0) {
            arr[i] = true;
        } else {
            arr[i] = false;
        }
    }

    return arr;
}

console.log(flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick']));

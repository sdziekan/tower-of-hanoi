// 8/31/17 - Tower of Hanoi Exercise

var array = [[3, 2, 1], [], []];

function move(start, end) {

    return "Invalid move, try again"

    if (start > 2 || end > 2) {

        var win = [[], [], [3, 2, 1]];
        var a = array[start][(array[start].length - 1)];
        var b = array[end][(array[end].length - 1)];

        if (array[end].length === 0 || b > a) {
            array[end].push(a);
            array[start].pop();
        } else {
            console.log("That\'s a terrible move and you are a terrible person. Try again")
        }

        if (JSON.stringify(array) === JSON.stringify(win)) {
            console.log("Congratulations\! You are very smart and sexy\!")
        }

        console.log("array", array)
        console.log("win", win)
    }
}
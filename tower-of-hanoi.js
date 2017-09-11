// 8/31/17 - Tower of Hanoi Exercise

var array = [[3, 2, 1], [], []];

function move(start, end) {

    var win = [[], [], [3, 2, 1]];
    var a = array[start][(array[start].length - 1)];
    var b = array[end][(array[end].length - 1)];

    if (array[start].length === 0) {
        console.log("Not a valid move, because you are trying to move a piece that does not exist.")
    } else if (array[end].length === 0 || b > a) {
        array[start].pop();
        array[end].push(a);
    } else if (end === start) {
        console.log("Why are you wasting my time? You picked up a piece and put it down in the same spot.")
    } else {
        console.log("That\'s a terrible move and you are a terrible person. Try again")
    }

    if (JSON.stringify(array) === JSON.stringify(win)) {
        console.log("Congratulations\! You are very smart and sexy\!")
    }

    console.log("array", array)
    console.log("win", win)
}
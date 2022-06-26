function movingTarget(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let index = 0;
    let command = arr[index];
    index++;
    let isFinish = false;

    while (command !== 'End') {
        if (command === 'End') {
            isFinish = true;
            break;
        }

        let basis = command.split(' ');
        let word = basis.shift();
        let firstTarget = Number(basis[0]);
        let secondTarget = Number(basis[1]);

        switch (word) {
            case 'Shoot':
                if (firstTarget < targets.length) {
                    targets[firstTarget] -= secondTarget;
                } 
                
                if (targets[firstTarget] <= 0) {
                    targets.splice(firstTarget, 1);
                }
                break;
            case 'Add':
                if (firstTarget >= 0 && firstTarget < targets.length) {
                    targets.splice(firstTarget, 0, secondTarget);
                } else {
                    console.log("Invalid placement!");
                }
            break;
            case 'Strike':
                let startIndex = firstTarget - secondTarget; 
                let removed = secondTarget * 2 + 1;
                if (firstTarget + secondTarget <= targets.length - 1 && firstTarget - secondTarget >= 0) {
                        targets.splice(startIndex, removed);
                    } else {
                        console.log("Strike missed!");
                    }
            break;
        }

        command = arr[index];
        index++;
    }
    if (!isFinish) {
    console.log(`${targets.join('|')}`);
    }
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"]);
movingTarget(["1 2 3 4 5",
"Add -1 1",
"Add 0 1",
"Shoot -1 1",
"Shoot 0 1",
"Strike 2 1",
"Strike 0 3",
"End"]);
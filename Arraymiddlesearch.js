let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function SearchInMiddleMoveToRight(value) {

    let Middle = a.length / 2;
    let b;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == value) {
            if (i < Middle) {
                console.log("Value not found in Array Search from middle")
            } else {
                console.log("Value found at INDEX : " + (i+1));
            }
            return;
        }
    }
    console.log("Value not found");
}

function SearchInMiddleMoveToRightBT(value) {

    let Middle = a.length / 2;
    let b;
    for (let i = Middle; i < a.length; i++) {
        if (a[i] == value) {
             console.log("Value found at INDEX : " + (i+1));
            return;
        }
    }
    console.log("Value not found");
}


SearchInMiddleMoveToRight(4);
SearchInMiddleMoveToRight(19);
SearchInMiddleMoveToRight(20);
SearchInMiddleMoveToRight(25);
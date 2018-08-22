function fireVar(bool) {
    // var foo;

    if (bool) {
        var foo = 'bar';

        console.log(foo); // bar
    } else {
        console.log(foo); // undefined
    }
}

function fireLet(bool) {
    if (bool) {
        let foo = 'bar';

        console.log(foo); // bar
    } else {
        console.log(foo); // Uncaught ReferenceError: foo is not defined
    }
}

function fireConst() {
    const names = ['jack'];

    console.log(names); // jack

    names.push('rose');

    console.log(names); // jack, rose

    // names = ['dawson']; // Uncaught TypeError: Assignment to constant variable.
}


fireVar(false);
fireConst();
fireLet(false);
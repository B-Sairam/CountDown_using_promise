let heading = document.querySelector('h2');

let para = new Promise(function (resolve) {
    setTimeout(() => {
        resolve('10')
    }, 1000);
})
para.then(function (data) {
    heading.innerText=data;
    return new Promise(function (resolve) {
       setTimeout(() => {
           resolve('9')
       }, 1000);
    });
}).then(function (data) {
    heading.innerText=data;
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('8')
        }, 1000);
    })
}).then(function (data) {
    heading.innerText=data;
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('7')
        }, 1000);
    })
}).then(function (data) {
    heading.innerText=data;
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('6')
        }, 1000);
    })
}).then(function (data) {
    heading.innerText=data;
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('5')
        }, 1000);
    })
}).then(function (data) {
    heading.innerText=data;
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('4')
        }, 1000);
    })
}).then(function (data) {
    heading.innerText=data;
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('3')
        }, 1000);
    })
}).then(function (data) {
    heading.innerText=data;
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('2')
        }, 1000);
    })
}).then(function (data) {
    heading.innerText=data;
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('1')
        }, 1000);
    })
}).then(function (data) {
    heading.innerText=data;
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('Happy Independence Day')
        }, 1000);
    })
}).then(function (data) {
    heading.innerText=data;
})
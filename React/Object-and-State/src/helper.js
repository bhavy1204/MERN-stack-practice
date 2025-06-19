// This file contains all the functions which will help in some task but are not react or jsx specific. 
let genTicket = (n) => {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

export { genTicket };
let form = document.querySelector('form');
form.addEventListener("submit",function(e){
    e.preventDefault();
    let inp = this.elements[0];
    // let inp = document.querySelector('input');
    //Value :-  uski current value
    alert(inp.value);
});
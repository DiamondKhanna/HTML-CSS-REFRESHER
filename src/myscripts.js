let data = [];


function submit() {
    const name = document.getElementById("input1").value;
    const age = document.getElementById("input2").value;
    const email = document.getElementById("input3").value;

    let obj = {name,age,email}
    
    data.push(obj);
    console.log(data);

    const element = document.getElementById("count");
    element.innerText = `Total Registrations = ${data.length}`;
    console.log(count);

}
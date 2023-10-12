function myFunction(x) {
    x.classList.toggle("change");
 }
 




async function callAPi(){
let result = await fetch('./index12.json');
result = await result.json();
console.warn(result.Table_Detail);
document.getElementById('userdata').innerHTML = result.Table_Detail.map((user) => 
    `<tr>
    <td>${user.date}</td>
    <td>${user.name}</td>
    <td>${user.grade}</td>
    <td>${user.status}</td>
    </tr>`
).join("")
    


}
callAPi()
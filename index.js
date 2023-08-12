document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('btn').addEventListener("click",(event)=>{
    event.preventDefault()
    let pc = document.getElementById("courtsessions")
    let CourtSession = document.getElementById("description");
    let br = document.createElement('br');
    let item1 = document.createElement('li');
    item1.innerText = CourtSession.value;
    pc.appendChild(br);
    pc.appendChild(item1);
    console.log(item1.innerText);
  })})
          
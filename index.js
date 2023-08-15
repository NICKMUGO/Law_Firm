document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('btn').addEventListener("click", (event)=>{
    event.preventDefault();
    let pc = document.getElementById("courtsessions");
    let CourtSession = document.getElementById("description");
    let br = document.createElement('br');
    let item1 = document.createElement('li');
    item1.innerText = CourtSession.value;
    pc.appendChild(br);
    pc.appendChild(item1);
    console.log(item1.innerText);
  })})
document.addEventListener("DOMContentLoaded", (event) => {
    function getFeedBack() {
      event.preventDefault();
      fetch('db.json')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          console.log(data.beers[0]['Feedback'])
          let feedBack = data;
          document.getElementById('feedback').innerHTML = feedBack.Feedback;
        });
    }
  getFeedBack();
})
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('btnf').addEventListener("click",(event)=>{
      event.preventDefault()
      let pcf = document.getElementById("feedback")
      let feedBack2 = document.getElementById("description");
      let br = document.createElement('br');
      let itemf = document.createElement('li');
      itemf.innerText = feedBack2.value;
      pcf.appendChild(br);
      pcf.appendChild(itemf);
      console.log(itemf.innerText);
    })})
          
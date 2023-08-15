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
          // console.log(data);
          let person = data.beers
          let feedbacks = []
          for (const p of person) {
            feedbacks.push(p.Feedback);
          }
          console.log(feedbacks)
          document.getElementById('feedback').innerHTML = feedbacks;
        });
    }
  getFeedBack();
})
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('btnf').addEventListener("click",(event)=>{
      event.preventDefault()
      let pcf = document.getElementById("feedback")
      let feedBack2 = document.getElementById("feedbackform");
      let br = document.createElement('br');
      let itemf = document.createElement('li');
      itemf.innerText = feedBack2.value;
      pcf.appendChild(br);
      pcf.appendChild(itemf);
      console.log(itemf.innerText);
    })})
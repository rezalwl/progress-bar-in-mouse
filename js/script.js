const progressSection = document.querySelector(".progress-section");
const progressBar = document.querySelector(".progress-bar");
const progressNum = document.querySelector(".progress-num");

window.addEventListener("mousemove",(e)=>{
  let x = e.clientX;
  let y = e.clientY;
  progressSection.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener("scroll",()=> {
  let scrollPercent =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.height = `${scrollPercent}%`;
  progressNum.innerText = `${Math.ceil(scrollPercent)}%`;
});

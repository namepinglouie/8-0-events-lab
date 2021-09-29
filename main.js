// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let colorList = document.querySelectorAll(".color");
let currColor = document.querySelector("#current-color");
let canvas = document.querySelector("#canvas");

for(let c of colorList) {
  // color icon turns a color
  c.addEventListener("click", (e)=> {
   currColor.style.backgroundColor = e.target.style.backgroundColor;
  })

  // canvas turns to bg color
  c.addEventListener("dblclick", (e)=> {
    canvas.style.backgroundColor = currColor.style.backgroundColor;
  })

}

canvas.addEventListener("click", (e)=> {
  if(e.target.style.backgroundColor === currColor.style.backgroundColor) {
    e.target.style.backgroundColor = "";
  } else {
    e.target.style.background = currColor.style.backgroundColor;
  }
})

let btn1 = document.createElement("div");
btn1.setAttribute("style", "width: 150px; height: 50px; border: 1px solid black; margin: 10px auto; text-align: center; line-height: 50px");

let colorPalette = document.querySelector("#palette");
colorPalette.after(btn1);

btn1.textContent = "REFRESH";
btn1.addEventListener("click", (e)=>{
  location.reload();
})

let btn2 = document.createElement("div");
btn2.setAttribute("style", "width: 150px; height: 50px; border: 1px solid black; margin: 10px auto; text-align: center; line-height: 50px");
btn1.after(btn2);

let cell = document.querySelectorAll("#canvas .cell");

btn2.textContent = "INVERT";
btn2.addEventListener("click", ()=>{
  for(let c of cell) {
    switch(c.style.backgroundColor) {
      case "black" : c.style.backgroundColor = "white"; break;
      case "red" : c.style.backgroundColor = "green"; break;
      case "orange" : c.style.backgroundColor = "blue"; break;
      case "yellow" : c.style.backgroundColor = "purple"; break;
      case "green" : c.style.backgroundColor = "red"; break;
      case "blue" : c.style.backgroundColor = "orange"; break;
      case "purple" : c.style.backgroundColor = "yellow"; break;
      case "white": c.style.backgroundColor = "black"; break;
      default: c.style.backgroundColor = ""; break;
    }
  }
})

let form = document.querySelector("form");
form.addEventListener("change", (e)=>{
  e.preventDefault();
  if(e.target.id === "hovering") {
    for(let c of colorList) {
      // hover color icon turns a color
      c.addEventListener("mouseover", (evt)=> {
       currColor.style.backgroundColor = evt.target.style.backgroundColor;
      })
    }
    canvas.addEventListener("click", (e)=> {
      canvas.addEventListener("mouseover", (evt)=> {
          evt.target.style.backgroundColor = currColor.style.backgroundColor;
          canvas.addEventListener("click", (evt2)=>{
            evt2.target.style.backgroundColor = currColor.style.backgroundColor;
          })
      })
    })
  }
})


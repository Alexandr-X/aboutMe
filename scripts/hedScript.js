let x = document.querySelector(".NavigCont");
addEventListener("mouseover", event => {
  if (event.target.parentElement == x.parentElement) {
    x.style.visibility = "visible";
    x.style.height = "35px";
    x.style.color = "black";
  }
});
addEventListener("mouseout", event => {
  if (event.toElement == document.body.querySelector("main")) {
    x.style.visibility = "hidden";
    x.style.height = "0";
    x.style.color = "transparent";
  }
});
const arrNavig = document.querySelectorAll(".NavigCont h2");

addEventListener("click", event => {
  console.log(event);
  for (let i = 0; i < arrNavig.length; i++) {
    if (event.target === arrNavig[i]) {
      switch (i) {
        case 0:
          let text = document.querySelector(".textCont");
          text.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
          break;
        case 1:
          let skill = document.querySelector(".htmlCont");
          skill.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "center",
          });
          break;
        case 2:
          let linke = document.querySelector("footer");
          linke.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
          break;
      }
    }
  }
  if (event.target.parentElement.classList == "top") {
    x.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }
});

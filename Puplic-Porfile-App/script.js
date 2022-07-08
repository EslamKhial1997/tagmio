const active = document.querySelectorAll(".btns");
// const tools = document.querySelectorAll(".img-tools");
const direct = document.querySelectorAll(".parent-direct div");
const actives = document.querySelector(".actives");
active.forEach((e) => {
  e.addEventListener("click", function () {
    active.forEach((z) => z.classList.remove("active"));
    this.classList.add("active");
  });
});

// tools.forEach((e) => {
   
//   e.addEventListener("click", function () {
//     tools.forEach((z) => {
       
//         z.classList.remove("the-active")
//     });
//     this.classList.add("the-active");
//     console.log(this);
//   });
// });
direct.forEach((e) => {
  e.addEventListener("click", function () {
    direct.forEach((z) => z.classList.remove("direct"));
    
    this.classList.add("direct");
  });
});

actives.addEventListener("click", () => {
  actives.classList.toggle("actives")
  actives.classList.toggle("roundeds")
 clicked()
  
});

function clicked() {
  if ( !actives.children[0].src.match("/image/dropdown/Stroke-2.svg")) {
    actives.children[0].src="/image/dropdown/Stroke-2.svg"
  } else {
    actives.children[0].src="/image/dropdown/Stroke-1.svg"
  }
}





// ***************img slide********************
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});









var swiper = new Swiper(".mySwipers", {
  watchSlidesProgress: true,
  slidesPerView: 4,

  clickable: true,
});

$(function () {
  const Sort = document.getElementById("sortable");
  $(Sort).sortable({
    start: function (event, ui) {
      ui.item.toggleClass("highlight");
    },
    stop: function (event, ui) {
      ui.item.toggleClass("highlight");
    },
  });
});



export const FilterModule = () => {

    //Write solution to the Filter task inside this FilterModule function.
    let red = document.querySelectorAll('.red');
    let yellow = document.querySelectorAll('.yellow');
    let green = document.querySelectorAll('.green');

   let bbn = document.getElementsByTagName("button");
   let allBtn = [...bbn];

   allBtn.forEach(function(item) {
  
     item.addEventListener('click', function() {
       obj[this.id]("class");
   
     })
   })
   var obj = {
     all: function() {
      let i;
      for (i = 0; i < red.length; i++) {
      red[i].classList.remove("noDisplay");
      green[i].classList.remove("noDisplay");
      yellow[i].classList.remove("noDisplay");
      }
     },
     redBtn: function() {
      let i;
        for (i = 0; i < yellow.length; i++) {
        yellow[i].classList.add("noDisplay");
        green[i].classList.add("noDisplay");
        red[i].classList.remove("noDisplay")
        }

     },
     yellowBtn: function() {
      let i;
      for (i = 0; i <= yellow.length; i++) {
      red[i].classList.add("noDisplay");
      green[i].classList.add("noDisplay");
      yellow[i].classList.remove("noDisplay");
      }
     },
    greenBtn: function() {
      let i;
      for (i = 0; i <= yellow.length; i++) {
      red[i].classList.add("noDisplay");
      green[i].classList.remove("noDisplay");
      yellow[i].classList.add("noDisplay");
      }
     },
   }
  }
  

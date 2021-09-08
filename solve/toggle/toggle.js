
export const ToggleModule = () => {
    
    let btn = document.querySelector('#toggleBtn');

    btn.addEventListener("click", function(e){
     let toggle = document.querySelector('#toggle');
     if (toggle.className === "off"){
        toggle.className = "on";
        toggle.innerText = "ON"
     } else{
        toggle.className = "off";
        toggle.innerText = "OFF"
     }

      });
}


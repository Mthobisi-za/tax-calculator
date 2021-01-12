var btn = document.querySelector("#btn")
btn.addEventListener("click", ()=>{
    var name = document.querySelector("#name").value;
    var price = JSON.parse(document.querySelector("#price").value);
    var rate =JSON.parse(document.querySelector("#rate").value);
    var result =    rate /100 * price
    var name_is = name
    console.log(result)
    var name = document.querySelector("#name").value = " ";
    var price = document.querySelector("#price").value = " ";
    var rate = document.querySelector("#rate").value = " ";

    function appendthings(){
        var div = document.querySelector(".result")
        var p = document.createElement("p")
        div.appendChild(p)
        p.textContent = "Your tax amount for " + name_is + " is " + result;

        if(result >= 50){
            var another_p = document.createElement("p")
            div.appendChild(another_p)
            another_p.textContent = "Your tax amount for "+ name_is +" is very high hey...." 
        }

    }
    appendthings();
})

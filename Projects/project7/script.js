 const contry = document.querySelector("h5")

 let addfriend = document.querySelector("#add")

 let check = 0

 addfriend.addEventListener('click',function(){
    if (check ==0) {
        contry.innerHTML ="friend";
    contry.style.color = "green";
    addfriend.innerHTML = "Removed Friend";
    check = 1;
    
    }
    else {
        contry.innerHTML ="Indian";
        contry.style.color = "red";
        addfriend.innerHTML = "Add Friend";
        check = 0;
    }
    

 })


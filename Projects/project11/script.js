let arr = [
    {
        dp:"https://images.unsplash.com/photo-1549570652-97324981a6fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1567777301743-3b7ef158aadf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww",
    },
    {
        dp:"https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1469460340997-2f854421e72f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww"
        
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1669704098876-2a38eb10e56a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1467632499275-7a693a761056?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsfGVufDB8fDB8fHww"
        
    },
    {
        dp:"https://images.unsplash.com/photo-1465145782865-09532f760e6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsfGVufDB8fDB8fHww",
        story:"https://plus.unsplash.com/premium_photo-1664875849194-0adbac28529f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vZGVsfGVufDB8fDB8fHww"
        
    },
    {
        dp:"https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vZGVsfGVufDB8fDB8fHww",
        story:"https://plus.unsplash.com/premium_photo-1669740217737-611345f9d246?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1vZGVsfGVufDB8fDB8fHww"
        
    },
   
]   

let clutter = ""
arr.forEach(function(element,indximg) {
    clutter += ` <div class="story">
              <img id="${indximg}"src="${element.dp}" alt="">
            </div>`
    

})
document.querySelector("#stories").innerHTML = clutter

document.querySelector("#stories").addEventListener("click",function(value){
    
    document.querySelector("#full-screen").style.display = "block"
     document.querySelector("#full-screen").style.backgroundImage = `url(${arr[value.target.id].story})`;
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },3000)
})



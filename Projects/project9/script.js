 let main = document.querySelector('#main')

 let cursor = document.querySelector('.cursor')

main.addEventListener('mousemove',function(moves){
           
            cursor.style.left = moves.x + 'px'
            cursor.style.top = moves.y + 'px'
})
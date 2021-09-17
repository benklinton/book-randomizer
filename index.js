$(document).ready(function () {
    $('.start-button').click(function () {
        Randomize();
    })
})

var Randomize = function () {
    var items = [
        'orange',
        'green',
        'black',
        'yellow'
    ]
    var random_num = Math.floor(Math.random() * 4);
     var random_result = items[random_num]

     var i = 0;
     function move() {
       if (i == 0) {
         i = 1;
         var elem = document.getElementById("myBar");
         var width = 1;
         var id = setInterval(frame, 10);
         function frame() {
           if (width >= 100) {
             clearInterval(id);
             i = 0;
           } else {
             width++;
             elem.style.width = width + "%";
           }
           if (width == 100) {
            $('.results').text(random_result)
            confetti({
                particleCount: 50,
            })
           }
         }
       }
     }
     move();
     
    
}
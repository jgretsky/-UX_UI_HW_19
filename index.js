function myFunction()
{
    
    document.getElementById("demo").innerHTML = "Let's Go!";
}





  $(".b_content").hover(function Blink() {

     /* console.log("hover"); - used this to test to see if function is working*/

    setInterval(Blink, 2000);

    $(".circle").fadeOut(1000);
    $(".circle").fadeIn(1000);
  })


  /*
  function Blink() {
    $(".circle").fadeOut(1000);
    $(".circle").fadeIn(1000);
  }

  setInterval(Blink, 2000);
  
  example for blink:

  (document).ready(function(){
var g = $('.jumping');
function blink(){
  g.animate({ 'left':'50px' 
  }).animate({
     'left':'20px'
        },1000)
}
setInterval(blink,1500);
});

example for blink 2: 

function fadeContent() {
  $(".content:hidden​​​​​​​​​​​​​​​​​​​​​​​:first").fadeIn(500).delay(2000).fadeOut(500, function​​​​​() {
      $(this).appendTo($(this).parent()); //stick current at the end
      fadeContent(); //loop
  });
}
fadeContent(); //kick it off the first time

*/

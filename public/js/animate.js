$(document).ready(function() {

console.log(screen.width);
  TweenMax.from("p",2,{
    css:{
      opacity: 0,
      marginTop:"54%"
    }
  });
  TweenMax.from("h2",2,{
    css:{
      opacity: 0,
    }
  });
    if($(window).width() <= 768 ){
    TweenLite.to(".titulo", 2.5, {
      opacity: 1,
        ease: Bounce.easeOut,
        y: "400%",
            marginTop: "-73px",
    }).delay(1);
    TweenMax.to("p",1,{
      css:{
        opacity: 1,
        marginTop:"45%"
      }
    }).delay(1);
    TweenMax.to("h2",1,{
      css:{
        opacity: 1,

      }
    }).delay(2);
    TweenMax.staggerTo(".btn", 1, {
      opacity: 1,

        cycle: {

            y: function(index, target) {

                return index * 5;
            },

        }
    }, 0.6);
      }
        if($(window).width() <= 320 ){
          TweenLite.to(".titulo", 2.5, {
            opacity: 1,
              ease: Bounce.easeOut,
              y: "300%",
                  marginTop: "-73px",
          }).delay(1);
        }
    TweenMax.to("#info",1,{
      css:{
        opacity: 1

      },
      repeat: 500000000000000000
    });

    if($(window).width()  > 768){

      TweenLite.to(".titulo", 2.5, {
        opacity: 1,
        marginTop:48,
      }).delay(1);
      TweenMax.to("h2",1,{
        css:{
          opacity: 1,

        }
      }).delay(2);
      TweenMax.staggerTo(".btn", 1, {
        opacity: 1,

          cycle: {

              y: function(index, target) {

                  return index * 5;
              },

          }
      }, 0.6);
      TweenMax.to("p",1,{
        css:{
          opacity: 1,
          marginTop:"8%"
        }
      }).delay(1);    }



});

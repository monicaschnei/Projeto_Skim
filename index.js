const infoButtonInit = () => {
  const botao = $("#btn-menu");
  const botaoInitialText = botao.html();
  botao.on("click", ()=>{
      if (botao.html() == botaoInitialText){
          botao.html("<i class='fas fa-times fa-2x'></i>");
      }else{
          botao.html(botaoInitialText);
      }
      $(".menu").slideToggle();
  })
  
}

$(document).ready(() => {
  infoButtonInit();
  const slickOptions = {
    dots: false,
    autoplay: true,
    prevArrow:'<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>',
};
$('.slider').slick(slickOptions);
console.log("deu certo?")
  
})



 

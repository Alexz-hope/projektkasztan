$(document).ready(function() {

    let karty = [];
    let kolory = ["kier", "karo", "trefl", "pik"];
    let wartosci = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];


    $.each(kolory, function(i, kolor) {
        $.each(wartosci, function(j, wartosc) {
            karty.push(wartosc + "_" + kolor + ".png");
        });
    });

  
   

  
    $('#start-form').on('submit', function(e) {
        e.preventDefault();

        let name = $('#player-name').val().trim();

        if (name.length < 3) {
            $('#error-msg').show();
        } else {
            $('#error-msg').hide();
            $('#display-name').text(name);

            $('#start-screen').hide();
            $('#game-screen').show();

            $('.hidden-panel').show();
            $('.right-panel').show();
        }
    });

  
    $('.taliakart img').on('click', function() {

        let wybranyKolor = $('#wybor').val();

    
        let losowa = Math.floor(Math.random() * karty.length);
        let karta = karty[losowa];

     
        let kolorKarty = karta.split("_")[1].replace(".png", "");

        if (
            (wybranyKolor == "czerwony" && (kolorKarty == "kier" || kolorKarty == "karo")) ||
            (wybranyKolor == "czarny" && (kolorKarty == "trefl" || kolorKarty == "pik"))
        ) {
          
            $('#board label').before(
                '<img src="../taliakart/' + karta + '" alt="Karta">'
            );

         
            karty.splice(losowa, 1);
        } else {

       
            $('#board img').remove();
        }
    });

});
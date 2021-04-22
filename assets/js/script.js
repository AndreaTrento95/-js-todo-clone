$(document).ready(function(){

    var cose_da_fare = [
        "Trovare un cane",
        "Comprare regalo di fidanzamento",
        "Entrare in comunione con me stesso",
        "Crepare per le risate",
        "Bare per dimenticare"
    ];

    // creo un ciclo per stampare sul HTML gli elementi dell'array, tramite il metodo .clone()
    for(var i = 0; i < cose_da_fare.length; i++){
        var obiettivo = cose_da_fare[i];

        var item = $('.template li').clone(); 
        $(item).find('p').append(obiettivo);
        $('.container ul').append(item);

    }

    //
    $(document).on('click', '.container i', function(){
        // quando l'icon trash viene cliccata viene eliminato il suo genitore
        $(this).parent().remove();
    })


    
    $('.container input').keyup(function(event){

        // se il tasto premuto è ENTER allora...
        if(event.which === 13){

            var str_input = $(this).val().trim();  // variabile del valore inserito nell'input

            // se la lunghezza dell'input è più lunga di tre lettere/numeri
            if($(this).val().length > 3){

                var item = $('.template li').clone(); // clono un li dal template
                $(item).find('p').append(str_input); // cerco 'p' all'interno del template e gli 'appendo' il valore inserito nel input
                $('.container ul').append(item); // 'appendo' all'interno del ul l'li clonato
                $(this).val(''); // vuoto la input text
                
            }
        }
    })

})
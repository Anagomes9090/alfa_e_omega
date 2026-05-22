$("#option_1").on("click", function() {
	
		$(".descarrega_pagina").load("./pages/localiza.php", function(){
		$(".menu-lateral").removeAttr("style")
		$(".image_logo").addClass('some');
		$(".descarrega_pagina").addClass('estilo_especial');
		$(".descarrega_pagina").css("display", "absolute")
		const tamanhoTela = window.innerWidth;  
	if(tamanhoTela <= 1000){
		$('#descarrega_pgn').removeAttr("style")
		$('.menu-lateral').css('z-index','')
		$('.bloco1').css('display','block')
		$('.bloco2').css('display','block')
		$('#bloco3').css('display','block')
		$('#bloco4').css('display','block')

	}
	})
	
	});

   $("#aba-1").on("click", function() {
        $('#conteudo_pag_dados_cliente').empty().html(
            '<BR><br><div class="bloco1">'
            )})
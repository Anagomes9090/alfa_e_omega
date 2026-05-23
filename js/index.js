$("#abre_menu").on("click", function() {
	
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

////////////////////////////////menu mobile/////////////////////////////////////
var fundoPgn = document.getElementsByid
	var abreMenu = document.getElementsByClassName("descarrega");
	for (let index = 0; index < abreMenu.length; index++) {
	  abreMenu[index].addEventListener("click", function() {
		let Menulateral = document.getElementsByClassName("menu-lateral")[0]; 
		const tamanhoTela = window.innerWidth;  
		if (tamanhoTela <= 1000) {
		  // Se a tela for menor ou igual 800px (<= 800px), manipula o menu lateral diretamente com base na visibilidade
		  if (Menulateral.style.display === "none" || Menulateral.style.display === "") {
			Menulateral.style.display = "absolute";  // Torna o menu visível
			Menulateral.style.width = "100%"; // Foi necessário declarar o tamanho do width aqui
			fundoPgn[0].style.display = "none";  // Esconde o fundo
	        $('.abre_menu').css('z-index', '0')
		  } 
		} else {
		  // Caso contrário, se a tela for maior que 800px, o menu já está visível
		  Menulateral.style.display = "absolute";  
		}
	 } );
	break
}
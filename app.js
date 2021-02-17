const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
mainMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

 // type animation scrpit
 var typed = new Typed(".typing", {
    strings: [" En formation,","","et à la recherche d'un stage."],
    typeSpeed: 120,
    backSpeed: 10,
    loop: true
   });


/*====================animation competence time line====================*/
$(".stage").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".stage1").click( function() {
	$("#ligne-progres").css("width", "3%");
	$(".Developpement").addClass("active").siblings().removeClass("active");
});

$(".stage2").click( function() {
	$("#ligne-progres").css("width", "25%");
	$(".design").addClass("active").siblings().removeClass("active");
});

$(".stage3").click( function() {
	$("#ligne-progres").css("width", "50%");
	$(".framework").addClass("active").siblings().removeClass("active");
});

$(".stage4").click( function() {
	$("#ligne-progres").css("width", "75%");
	$(".librairies").addClass("active").siblings().removeClass("active");
});

$(".stage5").click( function() {
	$("#ligne-progres").css("width", "100%");
	$(".WORDPRESS").addClass("active").siblings().removeClass("active");
});


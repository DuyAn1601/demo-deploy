;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-aside, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
		});

	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};

	// Document on load.
	$(function(){
		fullHeight();
		contentWayPoint();
		burgerMenu();
		mobileMenuOutsideClick();
		sliderMain();
	});


}());

// Open Delete		
const deletewrapper = document.querySelector('.vaccine-delete-wrapper');
const vaccinedeletepopup= document.querySelector('.vaccine-delete');
let deleteicon = document.querySelectorAll('.delete-real');
deleteicon = Array.from(deleteicon);

for (var i = 0; i < deleteicon.length; i++) {


	const handledelete = () => {
		deletewrapper.style.display = 'flex';
	}
	deleteicon[i].addEventListener('click', handledelete);
}


// Out deletevaccinedeletepopup

let outicon = document.querySelector('.out-delete-vaccine');
console.log(outicon)
const handleoutdelete = () => {
	deletewrapper.style.display = 'none';
}
outicon.addEventListener('click', handleoutdelete);

const cancelicon =document.querySelector('.out-cancel-vaccine')
cancelicon.addEventListener('click', handleoutdelete);
	
const handleoutdelete2 = ()=> {
	vaccinedeletepopup.addEventListener('click',handledeletepopup= (e) => e.stopPropagation())
	deletewrapper.style.display = 'none';
}
deletewrapper.addEventListener('click',handleoutdelete2)



// Onclick edit vaccine
let editicon = document.querySelectorAll('.edit-real');
editicon = Array.from(editicon);
const backList = document.querySelector('.fh5co-body-edit-backlist');
const tableEditVaccine=document.querySelector('.fh5co-narrow-content-2');
const EditcancelBackToVaccine = document.querySelector('.cancel-back-to-vaccine');
const tableVaccine=document.querySelector('.create-table-all');
for (var i = 0; i < editicon.length; i++) {
	const handleEdit = () => {
		tableVaccine.style.display='none';
		tableEditVaccine.style.display='block';
	}
	editicon[i].addEventListener('click',handleEdit);
}

const handleBackVaccine = () => {
	tableEditVaccine.style.display='none';
	tableVaccine.style.display='block';

}

backList?.addEventListener('click',handleBackVaccine)
EditcancelBackToVaccine?.addEventListener('click',handleBackVaccine)

// Onclick create vaccine
const createbuttonvc = document.querySelector('.fh5co-head-create-chuyen');
const tableCreateVaccine = document.querySelector('.fh5co-head-create-new');
const cancelBackToVaccine = document.querySelector('.cancel-back-to-vaccine2');
const handleCreateVaccine = () => {
	tableVaccine.style.display='none';
	tableCreateVaccine.style.display='block';
	
}
const cancelBackToVaccines = () => {
	tableCreateVaccine.style.display='none';
	tableVaccine.style.display='block';
}
createbuttonvc?.addEventListener('click',handleCreateVaccine)
cancelBackToVaccine?.addEventListener('click',cancelBackToVaccines)

(function () {
	'use strict'
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	tooltipTriggerList.forEach(function (tooltipTriggerEl) {
	  new bootstrap.Tooltip(tooltipTriggerEl)
	})
  })()

//   Onclick Obtain your Covid-19 vaccine certificate
const obtainCertificateBtn = document.querySelector('.option-search-inject');
const registerLookUpBtn = document.querySelector('.option-search-inject2');
const obtainCertificateForm = document.querySelector('.search-main-main');
const registerLookUp = document.querySelector('.search-main-main-2')
const handleObtainCertificate = () => {
	registerLookUp.style.display = 'none';
	obtainCertificateForm.style.display='block';
}
const handleregistrationLookUp = () => {
	obtainCertificateForm.style.display='none';
	registerLookUp.style.display ='block';
}
registerLookUpBtn.addEventListener('click',handleregistrationLookUp);
obtainCertificateBtn.addEventListener('click',handleObtainCertificate);

const obtainCertificateBtnBack = document.querySelector('.option-search-inject');
const registerLookUpBtnBack = document.querySelector('.option-search-inject2');
const obtainCertificateFormBack = document.querySelector('.search-main-main-3');
const registerLookUpBack = document.querySelector('.search-main-main-4')
const handleObtainCertificateBack = () => {
	registerLookUpBack.style.display = 'none';
	obtainCertificateFormBack.style.display='block';
}
const handleregistrationLookUpBack = () => {
	obtainCertificateFormBack.style.display='none';
	registerLookUpBack.style.display ='block';
}
registerLookUpBtnBack.addEventListener('click',handleregistrationLookUpBack);
obtainCertificateBtnBack.addEventListener('click',handleObtainCertificateBack);
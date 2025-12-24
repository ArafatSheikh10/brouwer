(function ($) {
	"use strict";

    jQuery(document).ready(function($){



	//--- slidemenu	      
	$(".responsiv-menu-bar").click(function(){
		$(".slidemenu").addClass("active");
		});
	
		$(".responsiv-menu-close").click(function(){
		$(".slidemenu").removeClass("active");
		});


		//---- slidemenu 
	$('.slidemenu > ul > li.expanded > a, .specification-infoo>ul>li.expanded>a').click(function(j) {
		var dropDown = $(this).closest('.expanded').find('ul');
			$('.expanded ul').slideUp();
		
		dropDown.stop(false, false).slideToggle();
		j.preventDefault();
	});
	//--- slidemenu
	

	//----- hero slider
	$(".custom-slider-wrapper").owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		autoplay: false,
		loop: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});
	//----- hero slider

	//-----  slider
	$(".projecten-slider").owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		autoplay: false,
		loop: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});
	//-----  slider

	//-----  slider
	$(".werken-bij-thumbnail-slider").owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		autoplay: false,
		loop: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});
	//-----  slider

     

	  //---------- isotope portfolio
      var $grid =$('.recente-isotope-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		  // use outer width of grid-sizer for columnWidth
		  columnWidth: ''
		}
		})
  
		// filter items on button click
		$('.recente-isotope-menu').on( 'click', 'li', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
  
  
		$(document).on('click','li', function(){
		  $(this).addClass("active").siblings().removeClass('active');
		});
		//---------- isotope portfolio

   





	//---------- drop_box
			const dropArea = document.querySelector(".drop_box"),
			button = dropArea.querySelector("button"),
			dragText = dropArea.querySelector("header"),
			input = dropArea.querySelector("input");
		let file;
		var filename;
		
		button.onclick = () => {
			input.click();
		};
	//---------- drop_box








	//---------- ProgressBar
		const prevBtns = document.querySelectorAll(".btn-prev");
		const nextBtns = document.querySelectorAll(".btn-next");
		const progress = document.getElementById("progress");
		const formSteps = document.querySelectorAll(".form-step");
		const progressSteps = document.querySelectorAll(".progress-step");
		const addExperienceBtn = document.querySelector(".add-exp-btn");
		const experiencesGroup = document.querySelector(".experiences-group");
		const btnComplete = document.querySelector(".btn-complete");
		btnComplete.addEventListener("click", () => {
			document.getElementsByTagName('form').submit
		})
		let formStepsNum = 0;
		let experienceNum = 1;
		
		addExperienceBtn.addEventListener("click", () => {
			experienceNum++;
			let text = `
				<hr>
			<div class='experience-item'>
				<div class='input-group' >
				<label for='title'>Company name</label>
				<input type='text' name='title[]' id='title'>
			</div>
			<div class='input-group'>
				<label for='start-date'>Start date</label>
				<input type='date' name='start-date[]' id='start-date'>
			</div>
			<div class='input-group'>
				<label for='end-date'>End date</label>
				<input type='date' name='nd-date[]' id='end-date'>
			</div>
			<div class='input-group'>
				<label for='job-description'>Description</label>
				<textarea name='job-description[]' id='job-description' cols='42' rows='6'></textarea>
			</div>
		</div > `
			experiencesGroup.insertAdjacentHTML('beforeend', text);
		})
		
		function updateFormSteps() {
		
			formSteps.forEach(formStep => {
				formStep.classList.contains("active") &&
					formStep.classList.remove("active");
			})
			formSteps[formStepsNum].classList.add("active");
		}
		
		function updateProgressBar() {
			progressSteps.forEach((progressStep, idx) => {
				if (idx < formStepsNum + 1) {
					progressStep.classList.add("active");
				} else {
					progressStep.classList.remove("active");
				}
			})
		
			const progressActive = document.querySelectorAll(".progress-step.active");
			progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';
		}
		
		
		nextBtns.forEach(btn => {
			btn.addEventListener("click", function () {
				formStepsNum++;
				updateFormSteps();
				updateProgressBar();
				console.log("kk")
			})
		})
		
		
		prevBtns.forEach(btn => {
			btn.addEventListener("click", function () {
				formStepsNum--;
				updateFormSteps();
				updateProgressBar();
				console.log("kk")
			})
		})
		
	//---------- ProgressBar











	  
	  





	  });








}(jQuery));	
$(window).on("load", function () {
	$(".loader-wrapper").fadeOut("slow");
	$('body, html').animate({ scrollTop: 0 }, 1000)
});
$(document).ready(function () {
	// INITIAL ANIMATION 
	new WOW().init();

	let collapseClass;
	let footerCollapseUlClass;
	collapseClass = 'collapse'
	footerCollapseUlClass = 'collapse-ul';
	const collapseFunction = (collapse) => {
		let widthWindow = $(window).width();
		widthWindow >= 767.98 ? $(`.${footerCollapseUlClass}`).removeClass(collapse) : $(`.${footerCollapseUlClass}`).addClass(collapse)
	}

	$(document).ready(function () {
		collapseFunction(collapseClass);
	})

	$(".list-vehicles").mCustomScrollbar({
		theme: "dark"
	});

	function move(value) {
		$(".list-vehicles").mCustomScrollbar('scrollTo', value, {
			scrollEasing: 'easeOut'
		})
	}

	// CHECK CONDITION WHEN WE CLICK ITEM NAV
	let check = '';
	let vehicleTitleClass = 'vehicle-title'
	const vehicleTitle = $(`.${vehicleTitleClass}`);
	$('.vehicle__nav ul li a').click(function () {
		if ($(this).attr('id') === 'cars-nav') {
			move('#cars')
		};

		if (check === '') {
			$('.vehicle__nav ul li').removeClass(activeClass);
		};

		const title = $(this).html();
		vehicleTitle.html(
			`
				<h3>
					<i class="fa-solid fa-circle"></i>
					<span>
						${title === 'CARS' ? "SEDANS" : title}
					</span>
				</h3>
			`
		);
	}
	)

	// query
	let vehicleQuery;

	// check 
	let count;

	// id
	let vehicleLinkId;
	let vehicleId;
	let discoverId;
	// class
	let hideVehicleClass;
	let activeClass;
	let vehicleNavClass;
	let listVehiclesClass;
	let vehicleCloseClass;
	let vehicleProductClass;
	let carouselIndicatorsConfigClass;
	let carouselXsIndicatorsClass;
	let carouselXsHeaderClass;
	let indicatorTitleClass;
	let carouselControlPrev;
	let carouselControlNext;
	let discoverHondaRenderClass;
	let backToTopClass;
	let renderShoppingToolsClass;
	let footerContentRenderClass;

	//animation
	let fadeInDownAnimation;
	let fadeOutUpAnimation;


	// asigning for variable
	vehicleQuery = $('#navbar .header-slide-show');

	//id
	vehicleLinkId = 'vehicles-link';
	toolsLinkId = 'tools-link';
	vehicleId = 'vehicles';
	discoverId = 'discover'
	//class
	renderShoppingToolsClass = 'render-ul-shopping-tools';
	vehicleNavClass = 'vehicle__nav';
	activeClass = 'active';
	hideVehicleClass = 'hide-vehicle';
	listVehiclesClass = 'list-vehicles';
	vehicleCloseClass = 'vehicle__close';
	vehicleProductClass = 'vehicle-product';
	discoverMenuClass = 'dropdown-menu';
	carouselIndicatorsConfigClass = 'carousel-indicators--config';
	carouselXsIndicatorsClass = 'carousel-xs-indicators';
	carouselXsHeaderClass = 'carousel-xs-header';
	indicatorTitleClass = 'indicator-title';
	carouselControlPrev = "carousel-control-prev";
	carouselControlNext = "carousel-control-next";
	discoverHondaRenderClass = 'discover-honda-render';
	backToTopClass = 'back-to-top';
	footerContentRenderClass = 'footer-content';
	// animation
	fadeInDownAnimation = 'fadeInDown';
	fadeOutUpAnimation = 'fadeOutUp';

	// check condition;
	count = '';




	vehicleQuery.click(function () {
		if (count === '') {
			count = $(this).attr('id')
			$(this).addClass(activeClass);
			if (count === vehicleLinkId) {
				$(`#${vehicleId}`).removeClass(hideVehicleClass);
				$(`.${vehicleNavClass}`).addClass(fadeInDownAnimation);
				$(`.${listVehiclesClass}`).addClass(fadeInDownAnimation); //có thể dùng fadeOutUp
			}
		}
		else {
			if (count === $(this).attr('id')) {
				$(this).removeClass(activeClass);
				count = '';
				$(`.${vehicleNavClass}`).addClass(fadeOutUpAnimation);
				$(`.${listVehiclesClass}`).addClass(fadeOutUpAnimation);
				setTimeout(function () {
					$(`#${vehicleId}`).addClass(hideVehicleClass);
					$(`.${vehicleNavClass}`).removeClass(fadeOutUpAnimation);
					$(`.${listVehiclesClass}`).removeClass(fadeOutUpAnimation)

				}, 300);
			}
			else {
				vehicleQuery.removeClass(activeClass);
				$(this).addClass(activeClass);
				count = $(this).attr('id');
				if (count !== vehicleLinkId) {
					$(`.${vehicleNavClass}`).addClass(fadeInDownAnimation);
					$(`.${listVehiclesClass}`).addClass(fadeInDownAnimation);
					setTimeout(function () {
						$(`#${vehicleId}`).addClass(hideVehicleClass);
						$(`.${vehicleNavClass}`).remove(fadeInDownAnimation);
						$(`.${listVehiclesClass}`).remove(fadeInDownAnimation);
					}, 300);
				}
				else {
					$(`#${vehicleId}`).removeClass(hideVehicleClass)
					$(`.${vehicleNavClass}`).addClass(fadeInDownAnimation);
					$(`.${listVehiclesClass}`).addClass(fadeInDownAnimation)
				}
			}
		}
	})
	{
		// BUTTON CLOSE FOR VEHICLE SECTION
		$(`.${vehicleCloseClass}`).click(function () {
			$(`.${vehicleNavClass}`).addClass(fadeInDownAnimation);
			$(`.${listVehiclesClass}`).addClass(fadeInDownAnimation);
			setTimeout(function () {
				$(`#${vehicleId}`).addClass(hideVehicleClass);
				$(`.${vehicleNavClass}`).remove(fadeInDownAnimation);
				$(`.${listVehiclesClass}`).remove(fadeInDownAnimation);
			}, 300);
			vehicleQuery.removeClass(activeClass);
			count = '';
		})
	}
	$(`.${vehicleProductClass}`).addClass(`animated ${fadeInDownAnimation}`);

	{
		// ADD ANIMATON FOR HOVER
		$(`#${discoverId}`).click(function () {
			$(`.${discoverMenuClass}`).addClass(fadeInDownAnimation);
			setTimeout(() => {
				$(`.${discoverMenuClass}`).removeClass(fadeInDownAnimation)
			}, 400);

		})
	}

	{	//ACTIVE NAV ITEM FOR OUR VEHICLE SECTION
		let listOfCarouselIndicators = $(`.${carouselIndicatorsConfigClass} li`);
		// console.log(listOfCarouselIndicators);
		listOfCarouselIndicators.click(function () {
			listOfCarouselIndicators.removeClass(activeClass);
			$(this).addClass(activeClass)
		})
	}


	// CAROUSEL
	{
		const ol = $(`.${carouselXsIndicatorsClass} ol`);
		const i = $(`.${carouselXsHeaderClass} i`);
		const olToli = $(`.${carouselXsIndicatorsClass} ol li`);
		const innerCarousel = 'carousel-inner';
		const rotateClass = 'rotate';
		$(`.${carouselXsHeaderClass}`).click(function () {
			ol.slideToggle();
			i.hasClass(rotateClass) ? i.removeClass(rotateClass) : i.addClass(rotateClass);
		});
		const span = $(`.${indicatorTitleClass} span`);
		olToli.click(function () {
			span.html($(this).html());
			ol.slideUp();
		})
	}

	// control next and prev with nabar of carousel our-carousel section
	{
		let countControl = 0;
		let li = $(`.${carouselIndicatorsConfigClass} li`);
		const prevBtn = $(`.${carouselControlPrev}`);
		const nextBtn = $(`.${carouselControlNext}`);
		const span = $(`.${indicatorTitleClass} span`);
		span.html('CARS')
		prevBtn.click(function () {
			li.removeClass(activeClass);
			countControl === 0 ? countControl = 5 : countControl--;
			li.each(function (i) {
				if (i === countControl) {
					$(this).addClass(activeClass)
					span.html($(this).html());
				}
			})
		})
		nextBtn.click(function () {
			li.removeClass(activeClass);
			countControl === 5 ? countControl = 0 : countControl++;
			li.each(function (i) {
				if (i === countControl) {
					$(this).addClass(activeClass)
					span.html($(this).html());
				}
			})
		});
	}

	// RENDER DISCOVER HONDA 
	{

		let htmlConent = '';
		// take realtime
		const dayRealtime = new Date();
		const year = dayRealtime.getFullYear();
		const month = dayRealtime.getMonth()
		const date = dayRealtime.getDate();
		// const date = dayRealtime.getDate();
		const hour = dayRealtime.getHours();
		let ampm = hour > 12 ? 'PM' : 'AM';
		const minute = dayRealtime.getMinutes();
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let renderTimeNow = `${hour}:${minute} ${ampm} - ${date}/${months[month].slice(0, 3)}/${year}`;
		console.log(renderTimeNow);


		htmlConent = ARRAY_DISCOVER_HONDA.map(function (item, index) {
			return (`
					<!-- discover content -->
					<div class="col-md-4 col-sm-6 col-12  discover-honda-content wow animated fadeInUp delay-${index + 1}">
					  <!-- tạo ra discover-item-... để chứa hình -->
					  <div class="discover-item discover-item-${index + 1}">
						<div class="discover-item-content">
						  <h2>${item.title}</h2>
						  <p>${item.content}</p>
						  <a class="btn btn-learn" href='#' type="submit">LEARN MORE</a>
						</div>
					  </div>
					</div>
				`)
		});

		// DISCOVER ITEM 6
		let interactive = '';
		interactive = `
			<div class="col-md-4 col-sm-6 col-12 discover-honda-content">
			  <div class="discover-item discover-item-6">
				<i class="fa-brands fa-twitter"></i>
				<div class="discover-item-honda">
				  <div class="disover-item-honda-logo d-flex">
					<img src="./images/logo-honda.jpg" alt="honda-logo">
					<p>
					  <a href="#">Honda</a><br>
					  <a href="#">@Honda</a>
					</p>
				  </div>
				  <p>You don't know what suprise can pop up on the road <span>#RemoveTheDistraction</span> when you behind
					the wheel.
					<a href="https://twitter.com/Honda">https://twitter.com/Honda</a>
				  </p>
	
				  <p class='renderRealTime'>${renderTimeNow}</p>
	
				  <p class="interactive">
					<span><i class="fa-solid fa-reply"></i></span>
					<span><i class="fa-solid fa-right-left"></i> 10</span>
					<span><i class="fa-solid fa-heart"></i> 23</span>
				  </p>
				</div>
			  </div>
			</div>
			`
		let newContent = htmlConent.concat(interactive);

		$(`.${discoverHondaRenderClass}`).html(newContent);
	}

	//CREATE SCROLL ON TOP
	{
		const btnBack = $(`.${backToTopClass}`);
		btnBack.click(function () {
			$('body, html').animate({ scrollTop: 0 }, 1000)
		})

	}

	// resize window 

	{
		// local
		$(window).resize(function () {
			collapseFunction(collapseClass)
		});
	}


	//RENDER FOOTER
	{
		const Vehicles = 'Vehicles';
		const ShoppingTools = 'Shopping Tools';
		const DiscoverHonda = 'Discover Honda';
		const HelpSupport = 'Help & Support';
		// const Owners = 'Owners';

		let listVehicles = [];
		let listShoopingTools = [];
		let listDiscoverHonda = [];
		let listHelpSupport = [];
		let listOwners = [];


		let htmlConent = '';
		htmlConent = LIST_FOOTERS.map((item, index) => {
			const { title, listFooter } = item;

			if (title === Vehicles) {
				listVehicles = listFooter
			}
			else if (title === ShoppingTools) {
				listShoopingTools = listFooter
			}

			else if (title === DiscoverHonda) {
				listDiscoverHonda = listFooter
			}
			else if (title === HelpSupport) {
				listHelpSupport = listFooter
			}
			else {
				listOwners = listFooter
			}

			return (`
					<div class="footer-detail">
					<h1 class="d-none d-md-block">${title}</h1>
					<h1 class="d-flex d-md-none" data-toggle="collapse" data-target="#vehicle-footer-nav-${index}">
					<span>
						${title}
					</span>
					<i class="fa fa-plus"></i>
					</h1>
					<div id="vehicle-footer-nav-${index}" class="collapse-ul">
					<ul class="list-unstyled ul-render-content-${index + 1}">
						
					</ul>
					</div>
					</div>
				`)


		});

		$(`.${footerContentRenderClass} `).html(htmlConent);

		let htmlVehilclesFooter = '';
		let htmlShoopingToolsFooter = '';
		let htmlDiscoverHondaFooter = '';
		let htmlHelpSupportFooter = '';
		let htmlOwnersFooter = '';

		htmlVehilclesFooter = listVehicles.map((item, index) => {
			return (`<li><a href="#">${item}</a></li>`)
		})

		htmlShoopingToolsFooter = listShoopingTools.map((item, index) => {
			return (`<li><a href="#">${item}</a></li>`)
		});

		htmlDiscoverHondaFooter = listDiscoverHonda.map((item, index) => {
			return (`<li><a href="#">${item}</a></li>`)
		});

		htmlHelpSupportFooter = listHelpSupport.map((item, index) => {
			return (`<li><a href="#">${item}</a></li>`)
		})
		htmlOwnersFooter = listOwners.map((item, index) => {
			return (`<li><a href="#">${item}</a></li>`)
		}
		)
		if ($(`.collapse-ul ul`).hasClass('ul-render-content-1')) {
			$(`.ul-render-content-1`).html(htmlVehilclesFooter)
		}
		if ($(`.collapse-ul ul`).hasClass('ul-render-content-2')) {
			$(`.ul-render-content-2`).html(htmlShoopingToolsFooter);

		}
		if ($(`.collapse-ul ul`).hasClass('ul-render-content-3')) {
			$(`.ul-render-content-3`).html(htmlDiscoverHondaFooter)
		}
		if ($(`.collapse-ul ul`).hasClass('ul-render-content-4')) {
			$(`.ul-render-content-4`).html(htmlHelpSupportFooter)
		}
		if ($(`.collapse-ul ul`).hasClass('ul-render-content-5')) {
			$(`.ul-render-content-5`).html(htmlOwnersFooter)
		}
	}

	//RENDER FOOTER LOGO
	{
		const renderLogo = $('.renderLogo');
		let htmlContent = ''
		let listNumberOfPicture = [1, 2, 3, 4, 5, 6, 7, 8];
		htmlContent = listNumberOfPicture.map((item, index) => {
			return `<img src="./images/footer-logo-${item}.jpg" alt="footer logo ${item}">`

		});

		renderLogo.html(htmlContent)
	}


	// RENDER SHOPPING TOOLS
	{
		let htmlContentShoppingTools = '';
		htmlContentShoppingTools = LIST_SHOPPING_TOOLS.map((item, index) => {
			return (
				`
					<li class="nav-item item-shopping-tools list-group-item"
					data-toggle="modal" data-target="#shoppingToolDesc-${index}">${item}</li>
					`
			)
		});

		htmlContentShoppingTools ? $(`.${renderShoppingToolsClass}`).html(htmlContentShoppingTools) : $(`.${renderShoppingToolsClass}`).html('');

		let htmlContentForCollapseListItem = '';
		htmlContentForCollapseListItem = LIST_SHOPPING_TOOLS_DESC.map((item, index) => {
			return (
				`
					<div class="modal fade" id="shoppingToolDesc-${index}" tabindex="-1" role="dialog" aria-labelledby="shoppingToolDesc-${index}" aria-hidden="true">
					  <div class="modal-dialog" role="document">
						<div class="modal-content">
						  <div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">${LIST_SHOPPING_TOOLS[index]}</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						  </div>
						  <div class="modal-body ">
						  	<img src="./images/shopping-tool-${index + 1}.jpg" alt="${LIST_SHOPPING_TOOLS[index]}" />
							<a class="btn btn-primary text-uppercase mt-2" 
									data-toggle="collapse" 
									href="#collapseExample" 
									role="button" 
									aria-expanded="false" 
									aria-controls="collapseExample">
									Details
							</a>
  							
							<div class="collapse" id="collapseExample">
							  <div class="card card-body">
								${item}
							  </div>
							</div>
						  </div>
						  <div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						  </div>
						</div>
					  </div>
					</div>
					`
			)
		});
		$("body").append(htmlContentForCollapseListItem);
	}

});	
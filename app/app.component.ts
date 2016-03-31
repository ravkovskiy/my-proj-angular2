import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
		<!-- scrollToTop -->
		<!-- ================ -->
		<div class="scrollToTop circle"><i class="icon-up-open-big"></i></div>
		
		<!-- page wrapper start -->
		<!-- ================ -->
		<div class="page-wrapper">
		
			<!-- header-container start -->
			<div class="header-container">
				
				<!-- header start -->
				<!-- classes:  -->
				<!-- "fixed": enables fixed navigation mode (sticky menu) e.g. class="header fixed clearfix" -->
				<!-- "dark": dark version of header e.g. class="header dark clearfix" -->
				<!-- "full-width": mandatory class for the full-width menu layout -->
				<!-- "centered": mandatory class for the centered logo layout -->
				<!-- ================ --> 
				<header class="header  fixed  dark clearfix">
					
					<div class="container">
						<div class="row">
							<div class="col-md-3">
								<!-- header-left start -->
								<!-- ================ -->
								<div class="header-left clearfix">

									<!-- logo -->
									<div id="logo" class="logo">
										<a href="beauty/index.html"><img id="logo_img" src="beauty/images/logo_purple.png" alt="The Project"></a>
									</div>

									<!-- name-and-slogan -->
									<div class="site-slogan">
										Multipurpose HTML5 Template
									</div>
									
								</div>
								<!-- header-left end -->

							</div>
							<div class="col-md-9">
					
								<!-- header-right start -->
								<!-- ================ -->
								<div class="header-right clearfix">
									
								<!-- main-navigation start -->
								<!-- classes: -->
								<!-- "onclick": Makes the dropdowns open on click, this the default bootstrap behavior e.g. class="main-navigation onclick" -->
								<!-- "animated": Enables animations on dropdowns opening e.g. class="main-navigation animated" -->
								<!-- "with-dropdown-buttons": Mandatory class that adds extra space, to the main navigation, for the search and cart dropdowns -->
								<!-- ================ -->
								<div class="main-navigation  animated with-dropdown-buttons">

									<!-- navbar start -->
									<!-- ================ -->
									<nav class="navbar navbar-default" role="navigation">
										<div class="container-fluid">

											<!-- Toggle get grouped for better mobile display -->
											<div class="navbar-header">
												<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
													<span class="sr-only">Toggle navigation</span>
													<span class="icon-bar"></span>
													<span class="icon-bar"></span>
													<span class="icon-bar"></span>
												</button>
												
											</div>

											<!-- Collect the nav links, forms, and other content for toggling -->
											<div class="collapse navbar-collapse" id="navbar-collapse-1">
												<!-- main-menu -->
												<ul class="nav navbar-nav ">

													<!-- mega-menu start -->													
													<li class="dropdown active mega-menu">
														<a href="beauty/index.html" class="dropdown-toggle" data-toggle="dropdown">Home</a>
														<ul class="dropdown-menu">
															<li>
																<div class="row">
																	<div class="col-md-12">
																		<h4 class="title"><i class="fa fa-laptop pr-10"></i> Demos</h4>
																		<div class="row">
																			<div class="col-sm-4">
																				<div class="divider"></div>
																				<ul class="menu">
																					<li ><a href="beauty/index.html"><i class="icon-home pr-10"></i>Home Default</a></li>
																					<li ><a href="beauty/index-corporate-1.html"><i class="icon-suitcase pr-10"></i>Corporate 1</a></li>
																					<li ><a href="beauty/index-corporate-2.html"><i class="icon-suitcase pr-10"></i>Corporate 2</a></li>
																					<li ><a href="beauty/index-corporate-3.html"><i class="icon-suitcase pr-10"></i>Corporate 3</a></li>
																					<li ><a href="beauty/index-shop.html"><i class="icon-basket-1 pr-10"></i>Commerce 1</a></li>
																					<li ><a href="beauty/index-shop-2.html"><i class="icon-basket-1 pr-10"></i>Commerce 2</a></li>
																				</ul>
																			</div>
																			<div class="col-sm-4">
																				<div class="divider"></div>
																				<ul class="menu">
																					<li ><a href="beauty/index-portfolio.html"><i class="icon-briefcase pr-10"></i>Portfolio/Agency</a></li>
																					<li ><a href="beauty/index-medical.html"><i class="fa fa-ambulance pr-10"></i>Medical</a></li>
																					<li ><a href="beauty/index-restaurant.html"><i class="fa fa-cutlery pr-10"></i>Restaurant</a></li>
																					<li ><a href="beauty/index-wedding.html"><i class="icon-heart pr-10"></i>Wedding</a></li>
																					<li ><a href="beauty/index-landing.html"><i class="fa fa-star pr-10"></i>Landing Page</a></li>
																					<li ><a href="beauty/page-coming-soon.html"><i class="fa fa-clock-o pr-10"></i>Coming Soon</a></li>
																				</ul>
																			</div>
																			<div class="col-sm-4">
																				<div class="divider"></div>
																				<ul class="menu">
																					<li ><a href="beauty/index-one-page.html"><i class="icon-home pr-10"></i>One Page Version</a></li>
																					<li ><a href="beauty/index-construction.html"><i class="fa fa-building pr-10"></i>Construction <span class="badge">New</span></a></li>
																					<li ><a href="beauty/index-education.html"><i class="fa fa-graduation-cap pr-10"></i>Education <span class="badge">New</span></a></li>
																					<li ><a href="beauty/index-hotel.html"><i class="fa fa-bed pr-10"></i>Hotel <span class="badge">New</span></a></li>
																					<li ><a href="beauty/index-blog.html"><i class="fa fa-pencil pr-10"></i>Blog <span class="badge">New</span></a></li>
																					<li class="active"><a href="beauty/index-beauty.html"><i class="fa fa-magic pr-10"></i>Beauty Center <span class="badge">New</span></a></li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</li>
														</ul>
													</li>
													<!-- mega-menu end -->
													<!-- mega-menu start -->
													<li class="dropdown  mega-menu">
														<a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages</a>
														<ul class="dropdown-menu">
															<li>
																<div class="row">
																	<div class="col-lg-8 col-md-9">
																		<h4 class="title">Pages</h4>
																		<div class="row">
																			<div class="col-sm-4">
																				<div class="divider"></div>
																				<ul class="menu">
																					<li ><a href="beauty/page-about.html"><i class="fa fa-angle-right"></i>About Us 1</a></li>
																					<li ><a href="beauty/page-about-2.html"><i class="fa fa-angle-right"></i>About Us 2</a></li>
																					<li ><a href="beauty/page-about-3.html"><i class="fa fa-angle-right"></i>About Us 3</a></li>
																					<li ><a href="beauty/page-about-4.html"><i class="fa fa-angle-right"></i>About Us 4</a></li>
																					<li ><a href="beauty/page-about-me.html"><i class="fa fa-angle-right"></i>About Me</a></li>
																					<li ><a href="beauty/page-team.html"><i class="fa fa-angle-right"></i>Our Team - Options 1</a></li>
																					<li ><a href="beauty/page-team-2.html"><i class="fa fa-angle-right"></i>Our Team - Options 2</a></li>
																					<li ><a href="beauty/page-team-3.html"><i class="fa fa-angle-right"></i>Our Team - Options 3</a></li>
																					<li ><a href="beauty/page-coming-soon.html"><i class="fa fa-angle-right"></i>Coming Soon Page</a></li>
																					<li ><a href="beauty/page-faq.html"><i class="fa fa-angle-right"></i>FAQ page</a></li>
																				</ul>
																			</div>
																			<div class="col-sm-4">
																				<div class="divider"></div>
																				<ul class="menu">
																					<li ><a href="beauty/page-services.html"><i class="fa fa-angle-right"></i>Services 1</a></li>
																					<li ><a href="beauty/page-services-2.html"><i class="fa fa-angle-right"></i>Services 2</a></li>
																					<li ><a href="beauty/page-services-3.html"><i class="fa fa-angle-right"></i>Services 3</a></li>
																					<li ><a href="beauty/page-contact.html"><i class="fa fa-angle-right"></i>Contact 1</a></li>
																					<li ><a href="beauty/page-contact-2.html"><i class="fa fa-angle-right"></i>Contact 2</a></li>
																					<li ><a href="beauty/page-contact-3.html"><i class="fa fa-angle-right"></i>Contact 3</a></li>
																					<li ><a href="beauty/page-login.html"><i class="fa fa-angle-right"></i>Login 1</a></li>
																					<li ><a href="beauty/page-login-2.html"><i class="fa fa-angle-right"></i>Login 2 - Fullsreen</a></li>
																					<li ><a href="beauty/page-signup.html"><i class="fa fa-angle-right"></i>Sign Up 1</a></li>
																					<li ><a href="beauty/page-signup-2.html"><i class="fa fa-angle-right"></i>Sign Up 2 - Fullsreen</a></li>
																				</ul>
																			</div>
																			<div class="col-sm-4">
																				<div class="divider"></div>
																				<ul class="menu">
																					<li ><a href="beauty/page-404.html"><i class="fa fa-angle-right"></i>404 error</a></li>
																					<li ><a href="beauty/page-404-2.html"><i class="fa fa-angle-right"></i>404 error - Parallax</a></li>
																					<li ><a href="beauty/page-affix-sidebar.html"><i class="fa fa-angle-right"></i>Sidebar - Affix Menu</a></li>
																					<li ><a href="beauty/page-left-sidebar.html"><i class="fa fa-angle-right"></i>Left Sidebar</a></li>
																					<li ><a href="beauty/page-right-sidebar.html"><i class="fa fa-angle-right"></i>Right Sidebar</a></li>
																					<li ><a href="beauty/page-two-sidebars.html"><i class="fa fa-angle-right"></i>Two Sidebars</a></li>
																					<li ><a href="beauty/page-two-sidebars-left.html"><i class="fa fa-angle-right"></i>Two Sidebars Left</a></li>
																					<li ><a href="beauty/page-two-sidebars-right.html"><i class="fa fa-angle-right"></i>Two Sidebars Right</a></li>
																					<li ><a href="beauty/page-no-sidebars.html"><i class="fa fa-angle-right"></i>No Sidebars</a></li>
																					<li ><a href="beauty/page-sitemap.html"><i class="fa fa-angle-right"></i>Sitemap</a></li>
																				</ul>
																			</div>
																		</div>
																	</div>
																	<div class="col-lg-4 col-md-3 hidden-sm">
																		<h4 class="title">Premium HTML5 Template</h4>
																		<p class="mb-10">The Project is perfectly suitable for corporate, business and company webpages.</p>
																		<img src="beauty/images/section-image-3.png" alt="The Project">
																	</div>
																</div>
															</li>
														</ul>
													</li>
													<!-- mega-menu end -->
													<li class="dropdown ">
														<a class="dropdown-toggle" data-toggle="dropdown" href="#">Features</a>
														<ul class="dropdown-menu">
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Headers</a>
																<ul class="dropdown-menu">
																	<li ><a href="beauty/features-headers-default.html">Default/Semi-Transparent</a></li>
																	<li ><a href="beauty/features-headers-default-dark.html">Dark/Semi-Transparent</a></li>
																	<li ><a href="beauty/features-headers-classic.html">Classic Light</a></li>
																	<li ><a href="beauty/features-headers-classic-dark.html">Classic Dark</a></li>
																	<li ><a href="beauty/features-headers-colored.html">Colored/Light</a></li>
																	<li ><a href="beauty/features-headers-colored-dark.html">Colored/Dark</a></li>
																	<li ><a href="beauty/features-headers-full-width.html">Full Width</a></li>
																	<li ><a href="beauty/features-headers-offcanvas-left.html">Offcanvas Left Side</a></li>
																	<li ><a href="beauty/features-headers-offcanvas-right.html">Offcanvas Right Side</a></li>
																	<li ><a href="beauty/features-headers-logo-centered.html">Logo Centered</a></li>
																	<li ><a href="beauty/features-headers-slider-top.html">Slider Top</a></li>
																	<li ><a href="beauty/features-headers-simple.html">Simple Static</a></li>
																</ul>
															</li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Menus</a>
																<ul class="dropdown-menu">
																	<li ><a href="beauty/features-headers-default.html">Default/On Hover Menu</a></li>
																	<li ><a href="beauty/features-menus-onhover-no-animations.html">On Hover Menu - No Animations</a></li>
																	<li ><a href="beauty/features-menus-onclick.html">On Click Menu - With Animations</a></li>
																	<li ><a href="beauty/features-menus-onclick-no-animations.html">On Click Menu - No Animations</a></li>
																</ul>
															</li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Footers <span class="badge">New</span></a>
																<ul class="dropdown-menu">
																	<li ><a href="beauty/features-footers-default.html#footer">Footer - Default</a></li>
																	<li ><a href="beauty/features-footers-contact-form.html#footer">Footer - Contact Form</a></li>
																	<li ><a href="beauty/features-footers-google-maps.html#footer">Footer - Google Maps</a></li>
																	<li ><a href="beauty/features-footers-subscribe.html#footer">Footer - Subscribe Form</a></li>
																	<li ><a href="beauty/features-footers-minimal.html#footer">Footer - Minimal</a></li>
																	<li ><a href="beauty/features-footers-links.html#footer">Footer - Links <span class="badge">New</span></a></li>
																</ul>
															</li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Main Sliders</a>
																<ul class="dropdown-menu">
																	<li ><a href="beauty/features-sliders-fullscreen.html">Full Screen</a></li>
																	<li ><a href="beauty/features-sliders-fullwidth.html">Full Width</a></li>
																	<li ><a href="beauty/features-sliders-fullwidth-big-height.html">Full Width - Big Height</a></li>
																	<li ><a href="beauty/features-sliders-boxedwidth-light.html">Boxed Width - Light Bg</a></li>
																	<li ><a href="beauty/features-sliders-boxedwidth-dark.html">Boxed Width - Dark Bg</a></li>
																	<li ><a href="beauty/features-sliders-boxedwidth-default.html">Boxed Width - Default Bg</a></li>
																	<li ><a href="beauty/features-sliders-video-background.html">Video Background</a></li>
																	<li ><a href="beauty/features-sliders-text-rotator.html">Text Rotator</a></li>
																</ul>
															</li>
															<li class="dropdown">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Email Templates <span class="badge">New</span></a>
																<ul class="dropdown-menu">
																	<li><a target="_blank" href="beauty/email_templates/email_template_blue.html">Blue</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_brown.html">Brown</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_cool_green.html">Cool Green</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_dark_cyan.html">Dark Cyan</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_dark_red.html">Dark Red</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_gold.html">Gold</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_gray.html">Gray</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_green.html">Green</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_light_blue.html">Light Blue</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_orange.html">Orange</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_pink.html">Pink</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_purple.html">Purple</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_red.html">Red</a></li>
																	<li><a target="_blank" href="beauty/email_templates/email_template_vivid_red.html">Vivid Red</a></li>
																</ul>
															</li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Pricing Tables</a>
																<ul class="dropdown-menu">
																	<li ><a href="beauty/features-pricing-tables-1.html">Pricing Tables 1</a></li>
																	<li ><a href="beauty/features-pricing-tables-2.html">Pricing Tables 2</a></li>
																	<li ><a href="beauty/features-pricing-tables-3.html">Pricing Tables 3</a></li>
																</ul>
															</li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Icons</a>
																<ul class="dropdown-menu">
																	<li ><a href="beauty/features-icons-fontawesome.html">Font Awesome</a></li>
																	<li ><a href="beauty/features-icons-fontello.html">Fontello</a></li>
																	<li ><a href="beauty/features-icons-glyphicons.html">Glyphicons</a></li>
																</ul>
															</li>
															<li ><a href="beauty/features-dark-page.html">Dark Page</a></li>
															<li ><a href="beauty/features-typography.html">Typography</a></li>
															<li ><a href="beauty/features-backgrounds.html">Backgrounds</a></li>
															<li ><a href="beauty/features-grid.html">Grid</a></li>
														</ul>
													</li>
													<!-- mega-menu start -->													
													<li class="dropdown  mega-menu narrow">
														<a href="#" class="dropdown-toggle" data-toggle="dropdown">Components</a>
														<ul class="dropdown-menu">
															<li>
																<div class="row">
																	<div class="col-md-12">
																		<h4 class="title"><i class="fa fa-magic pr-10"></i> Components</h4>
																		<div class="row">
																			<div class="col-sm-6">
																				<div class="divider"></div>
																				<ul class="menu">
																					<li ><a href="beauty/components-social-icons.html"><i class="icon-share pr-10"></i>Social Icons</a></li>
																					<li ><a href="beauty/components-buttons.html"><i class="icon-flask pr-10"></i>Buttons</a></li>
																					<li ><a href="beauty/components-forms.html"><i class="icon-eq pr-10"></i>Forms</a></li>
																					<li ><a href="beauty/components-tabs-and-pills.html"><i class=" icon-dot-3 pr-10"></i>Tabs &amp; Pills</a></li>
																					<li ><a href="beauty/components-accordions.html"><i class="icon-menu-outline pr-10"></i>Accordions</a></li>
																					<li ><a href="beauty/components-progress-bars.html"><i class="icon-chart-line pr-10"></i>Progress Bars</a></li>
																					<li ><a href="beauty/components-call-to-action.html"><i class="icon-chat pr-10"></i>Call to Action Blocks</a></li>
																					<li ><a href="beauty/components-alerts-and-callouts.html"><i class="icon-info-circled pr-10"></i>Alerts &amp; Callouts</a></li>
																					<li ><a href="beauty/components-content-sliders.html"><i class="icon-star-filled pr-10"></i>Content Sliders</a></li>
																					<li ><a href="beauty/components-charts.html"><i class="icon-chart-pie pr-10"></i>Charts</a></li>
																					<li ><a href="beauty/components-page-loaders.html"><i class="fa fa-circle-o-notch fa-spin"></i>Page Loaders <span class="badge">New</span></a></li>
																				</ul>
																			</div>
																			<div class="col-sm-6">
																				<div class="divider"></div>
																				<ul class="menu">
																					<li ><a href="beauty/components-icon-boxes.html"><i class="icon-picture-outline pr-10"></i>Icon Boxes</a></li>
																					<li ><a href="beauty/components-image-boxes.html"><i class="icon-camera-1 pr-10"></i>Image Boxes</a></li>
																					<li ><a href="beauty/components-fullwidth-sections.html"><i class="icon-code-1 pr-10"></i>Full Width Sections</a></li>
																					<li ><a href="beauty/components-animations.html"><i class="icon-docs pr-10"></i>Animations</a></li>
																					<li ><a href="beauty/components-video-and-audio.html"><i class="icon-video pr-10"></i>Video &amp; Audio</a></li>
																					<li ><a href="beauty/components-lightbox.html"><i class="icon-plus pr-10"></i>Lightbox</a></li>
																					<li ><a href="beauty/components-counters.html"><i class="icon-sort-numeric pr-10"></i>Counters</a></li>
																					<li ><a href="beauty/components-modals.html"><i class="icon-popup pr-10"></i>Modals</a></li>
																					<li ><a href="beauty/components-tables.html"><i class="icon-th pr-10"></i>Tables</a></li>
																					<li ><a href="beauty/components-text-rotators.html"><i class="icon-arrows-ccw pr-10"></i>Text Rotators</a></li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</li>
														</ul>
													</li>
													<!-- mega-menu end -->
													<li class="dropdown ">
														<a href="beauty/portfolio-grid-2-3-col.html" class="dropdown-toggle" data-toggle="dropdown">Portfolio</a>
														<ul class="dropdown-menu">
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Grid 1</a>
																<ul class="dropdown-menu">
																	<li ><a href="beauty/portfolio-grid-1-2-col.html">2 Column</a></li>
																	<li ><a href="beauty/portfolio-grid-1-3-col.html">3 Column</a></li>
																	<li ><a href="beauty/portfolio-grid-1-4-col.html">4 Column</a></li>
																	<li ><a href="beauty/portfolio-grid-1-sidebar.html">With Sidebar</a></li>
																</ul>
															</li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Grid 2</a>
																<ul class="dropdown-menu">
																	<li ><a href="beauty/portfolio-grid-2-2-col.html">2 Column</a></li>
																	<li ><a href="beauty/portfolio-grid-2-3-col.html">3 Column</a></li>
																	<li ><a href="beauty/portfolio-grid-2-4-col.html">4 Column</a></li>
																	<li ><a href="beauty/portfolio-grid-2-sidebar.html">With Sidebar</a></li>
																</ul>
															</li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Grid 3 - Dark</a>
																<ul class="dropdown-menu">
																	<li ><a href="beauty/portfolio-grid-3-2-col.html">2 Column</a></li>
																	<li ><a href="beauty/portfolio-grid-3-3-col.html">3 Column</a></li>
																	<li ><a href="beauty/portfolio-grid-3-4-col.html">4 Column</a></li>
																	<li ><a href="beauty/portfolio-grid-3-sidebar.html">With Sidebar</a></li>
																</ul>
															</li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Fullwidth</a>
																<ul class="dropdown-menu">
																	<li ><a href="beauty/portfolio-fullwidth-2-col.html">2 Column</a></li>
																	<li ><a href="beauty/portfolio-fullwidth-3-col.html">3 Column</a></li>
																	<li ><a href="beauty/portfolio-fullwidth-4-col.html">4 Column</a></li>
																</ul>
															</li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio List</a>
																<ul class="dropdown-menu">
																	<li ><a href="beauty/portfolio-list-1.html">List - Large Images</a></li>
																	<li ><a href="beauty/portfolio-list-2.html">List - Small Images</a></li>
																	<li ><a href="beauty/portfolio-list-sidebar.html">With Sidebar</a></li>
																</ul>
															</li>
															<li ><a href="beauty/portfolio-item.html">Single Item 1</a></li>
															<li ><a href="beauty/portfolio-item-2.html">Single Item 2</a></li>
															<li ><a href="beauty/portfolio-item-3.html">Single Item 3</a></li>
														</ul>
													</li>
													<li class="dropdown ">
														<a href="beauty/index-shop.html" class="dropdown-toggle" data-toggle="dropdown">Shop</a>
														<ul class="dropdown-menu">
															<li ><a href="beauty/index-shop.html">Shop Home 1</a></li>
															<li ><a href="beauty/index-shop-2.html">Shop Home 2</a></li>
															<li ><a href="beauty/shop-listing-4col.html">Grid - 4 Columns</a></li>
															<li ><a href="beauty/shop-listing-3col.html">Grid - 3 Columns</a></li>
															<li ><a href="beauty/shop-listing-2col.html">Grid - 2 Columns</a></li>
															<li ><a href="beauty/shop-listing-sidebar.html">Grid - With Sidebar</a></li>
															<li ><a href="beauty/shop-listing-list.html">List</a></li>
															<li ><a href="beauty/shop-product.html">Product</a></li>
															<li ><a href="beauty/shop-cart.html">Shopping Cart</a></li>
															<li ><a href="beauty/shop-checkout.html">Checkout Page - Step 1</a></li>
															<li ><a href="beauty/shop-checkout-payment.html">Checkout Page - Step 2</a></li>
															<li ><a href="beauty/shop-checkout-review.html">Checkout Page - Step 3</a></li>
															<li ><a href="beauty/shop-invoice.html">Invoice</a></li>
														</ul>
													</li>
													<li class="dropdown ">
														<a href="beauty/blog-large-image-right-sidebar.html" class="dropdown-toggle" data-toggle="dropdown">Blog</a>
														<ul class="dropdown-menu">
															<li ><a href="beauty/index-blog.html">Blog Home <span class="badge">New</span></a></li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Large Image</a>
																<ul class="dropdown-menu to-left">
																	<li ><a href="beauty/blog-large-image-right-sidebar.html">Right Sidebar</a></li>
																	<li ><a href="beauty/blog-large-image-left-sidebar.html">Left Sidebar</a></li>
																	<li ><a href="beauty/blog-large-image-no-sidebar.html">Without Sidebar</a></li>
																</ul>
															</li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Medium Image</a>
																<ul class="dropdown-menu to-left">
																	<li ><a href="beauty/blog-medium-image-right-sidebar.html">Right Sidebar</a></li>
																	<li ><a href="beauty/blog-medium-image-left-sidebar.html">Left Sidebar</a></li>
																	<li ><a href="beauty/blog-medium-image-no-sidebar.html">Without Sidebar</a></li>
																</ul>
															</li>
															<li class="dropdown ">
																<a  class="dropdown-toggle" data-toggle="dropdown" href="#">Masonry</a>
																<ul class="dropdown-menu to-left">
																	<li ><a href="beauty/blog-masonry-right-sidebar.html">Right Sidebar</a></li>
																	<li ><a href="beauty/blog-masonry-left-sidebar.html">Left Sidebar</a></li>
																	<li ><a href="beauty/blog-masonry-no-sidebar.html">Without Sidebar</a></li>
																</ul>
															</li>
															<li ><a href="beauty/blog-timeline.html">Timeline</a></li>
															<li ><a href="beauty/blog-post.html">Blog Post</a></li>
														</ul>
													</li>
												</ul>
												<!-- main-menu end -->
												
												<!-- header dropdown buttons -->
												<div class="header-dropdown-buttons hidden-xs ">
													<div class="btn-group dropdown">
														<button type="button" class="btn dropdown-toggle" data-toggle="dropdown"><i class="icon-search"></i></button>
														<ul class="dropdown-menu dropdown-menu-right dropdown-animation">
															<li>
																<form role="search" class="search-box margin-clear">
																	<div class="form-group has-feedback">
																		<input type="text" class="form-control" placeholder="Search">
																		<i class="icon-search form-control-feedback"></i>
																	</div>
																</form>
															</li>
														</ul>
													</div>
													<div class="btn-group dropdown">
														<button type="button" class="btn dropdown-toggle" data-toggle="dropdown"><i class="icon-basket-1"></i><span class="cart-count default-bg">8</span></button>
														<ul class="dropdown-menu dropdown-menu-right dropdown-animation cart">
															<li>
																<table class="table table-hover">
																	<thead>
																		<tr>
																			<th class="quantity">QTY</th>
																			<th class="product">Product</th>
																			<th class="amount">Subtotal</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td class="quantity">2 x</td>
																			<td class="product"><a href="beauty/shop-product.html">Android 4.4 Smartphone</a><span class="small">4.7" Dual Core 1GB</span></td>
																			<td class="amount">$199.00</td>
																		</tr>
																		<tr>
																			<td class="quantity">3 x</td>
																			<td class="product"><a href="beauty/shop-product.html">Android 4.2 Tablet</a><span class="small">7.3" Quad Core 2GB</span></td>
																			<td class="amount">$299.00</td>
																		</tr>
																		<tr>
																			<td class="quantity">3 x</td>
																			<td class="product"><a href="beauty/shop-product.html">Desktop PC</a><span class="small">Quad Core 3.2MHz, 8GB RAM, 1TB Hard Disk</span></td>
																			<td class="amount">$1499.00</td>
																		</tr>
																		<tr>
																			<td class="total-quantity" colspan="2">Total 8 Items</td>
																			<td class="total-amount">$1997.00</td>
																		</tr>
																	</tbody>
																</table>
																<div class="panel-body text-right">	
																	<a href="beauty/shop-cart.html" class="btn btn-group btn-gray btn-sm">View Cart</a>
																	<a href="beauty/shop-checkout.html" class="btn btn-group btn-gray btn-sm">Checkout</a>
																</div>
															</li>
														</ul>
													</div>
												</div>
												<!-- header dropdown buttons end-->
												
											</div>

										</div>
									</nav>
									<!-- navbar end -->

								</div>
								<!-- main-navigation end -->	
								</div>
								<!-- header-right end -->
					
							</div>
						</div>
					</div>
					
				</header>
				<!-- header end -->
			</div>
			<!-- header-container end -->
		
			<!-- banner start -->
			<!-- ================ -->
			<div class="banner clearfix">

				<!-- slideshow start -->
				<!-- ================ -->
				<div class="slideshow">
					
					<!-- slider revolution start -->
					<!-- ================ -->
					<div class="slider-banner-container">
						<div class="slider-banner-fullscreen">
							<ul class="slides">
								<!-- slide 1 start -->
								<!-- ================ -->
								<li data-transition="random-static" data-slotamount="7" data-masterspeed="500" data-saveperformance="on" data-title="Powerful Bootstrap Template">
								
								<!-- main image -->
								<img src="beauty/images/beauty-slide-1.jpg" alt="slidebg1" data-bgposition="center top"  data-bgrepeat="no-repeat" data-bgfit="cover">
								
								<!-- Transparent Background -->
								<div class="tp-caption dark-translucent-bg"
									data-x="center"
									data-y="bottom"
									data-speed="500"
									data-easing="easeOutQuad"
									data-start="0">
								</div>

								<!-- LAYER NR. 1 -->
								<div class="tp-caption sfb fadeout large_white"
									data-x="left"
									data-y="100"
									data-speed="500"
									data-start="1000"
									data-easing="easeOutQuad"><span class="logo-font">The Beauty</span>
								</div>	

								<!-- LAYER NR. 2 -->
								<div class="tp-caption sfb fadeout large_white tp-resizeme"
									data-x="left"
									data-y="170"
									data-speed="500"
									data-start="1300"
									data-easing="easeOutQuad"><div class="separator-2 light"></div>
								</div>	

								<!-- LAYER NR. 3 -->
								<div class="tp-caption sfb fadeout medium_white"
									data-x="left"
									data-y="190"
									data-speed="500"
									data-start="1300"
									data-easing="easeOutQuad"
									data-endspeed="600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Nesciunt, maiores, aliquid. Repellat eum numquam aliquid culpa offici, <br> tenetur fugiat dolorum sapiente eligendi...
								</div>

								<!-- LAYER NR. 4 -->
								<div class="tp-caption sfb fadeout small_white"
									data-x="left"
									data-y="300"
									data-speed="500"
									data-start="1600"
									data-easing="easeOutQuad"
									data-endspeed="600"><a href="#" class="btn btn-gray btn-lg btn-animated">Learn More <i class="fa fa-info-circle"></i></a>
								</div>

								<!-- LAYER NR. 5 -->
								<div class="tp-caption fade fadeout"
									data-x="center"
									data-y="bottom"
									data-voffset="100"
									data-speed="500"
									data-easing="easeOutQuad"
									data-start="2000"
									data-endspeed="200">
									<a href="#page-start" class="btn btn-lg moving smooth-scroll"><i class="icon-down-open-big"></i><i class="icon-down-open-big"></i><i class="icon-down-open-big"></i></a>
								</div>
								</li>
								<!-- slide 1 end -->

								<!-- slide 2 start -->
								<!-- ================ -->
								<li data-transition="random-static" data-slotamount="7" data-masterspeed="500" data-saveperformance="on" data-title="Premium HTML5 Bootstrap Theme">
								
								<!-- main image -->
								<img src="beauty/images/beauty-slide-2.jpg" alt="slidebg2" data-bgposition="center top"  data-bgrepeat="no-repeat" data-bgfit="cover">

								<!-- Transparent Background -->
								<div class="tp-caption dark-translucent-bg"
									data-x="center"
									data-y="bottom"
									data-speed="500"
									data-easing="easeOutQuad"
									data-start="0">
								</div>

								<!-- LAYER NR. 1 -->
								<div class="tp-caption sfb fadeout large_white text-right"
									data-x="right"
									data-y="100"
									data-speed="500"
									data-start="1000"
									data-easing="easeOutQuad"><span class="logo-font">The Beauty</span> - Unlimited Options and Layouts
								</div>	

								<!-- LAYER NR. 2 -->
								<div class="tp-caption sfb fadeout large_white tp-resizeme"
									data-x="right"
									data-y="170"
									data-speed="500"
									data-start="1300"
									data-easing="easeOutQuad"><div class="separator-3 light"></div>
								</div>	

								<!-- LAYER NR. 3 -->
								<div class="tp-caption sfb fadeout medium_white text-right"
									data-x="right"
									data-y="190"
									data-speed="500"
									data-start="1300"
									data-easing="easeOutQuad"
									data-endspeed="600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br> Nesciunt, maiores, aliquid. Repellat eum numquam aliquid culpa offici,<br> tenetur fugiat dolorum sapiente eligendi
								</div>

								<!-- LAYER NR. 4 -->
								<div class="tp-caption sfb fadeout small_white"
									data-x="right"
									data-y="300"
									data-speed="500"
									data-start="1600"
									data-easing="easeOutQuad"
									data-endspeed="600"><a href="beauty/page-contact.html" class="btn btn-default btn-lg btn-animated">Contact Us <i class="fa fa-envelope"></i></a>
								</div>

								<!-- LAYER NR. 5 -->
								<div class="tp-caption fade fadeout"
									data-x="center"
									data-y="bottom"
									data-voffset="100"
									data-speed="500"
									data-easing="easeOutQuad"
									data-start="2000"
									data-endspeed="200">
									<a href="#page-start" class="btn btn-lg moving smooth-scroll"><i class="icon-down-open-big"></i><i class="icon-down-open-big"></i><i class="icon-down-open-big"></i></a>
								</div>	
								</li>
								<!-- slide 2 end -->
							</ul>
							<div class="tp-bannertimer"></div>
						</div>
					</div>
					<!-- slider revolution end -->

				</div>
				<!-- slideshow end -->

			</div>
			<!-- banner end -->
			
			<div id="page-start"></div>

			<!-- section start -->
			<!-- ================ -->
			<section class="light-gray-bg pv-30 clearfix">
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2">
							<h2 class="text-center">Our <strong>Services</strong></h2>
							<div class="separator"></div>
							<p class="large text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptas facere vero ex tempora saepe perspiciatis ducimus sequi animi.</p>
						</div>
						<div class="col-md-4 col-sm-6">
							<div class="ph-20 feature-box text-center object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
								<span class="icon large circle"><img class="img-circle" alt="beauty" src="beauty/images/beauty-1.jpg"></span>
								<h3>Hair</h3>
								<div class="separator clearfix"></div>
								<p class="text-muted">Voluptatem ad provident non repudiandae beatae cupiditate amet reiciendis lorem ipsum dolor sit amet, consectetur.</p>
								<a href="beauty/page-services.html">Read More<i class="pl-5 fa fa-angle-double-right"></i></a>
							</div>
						</div>
						<div class="col-md-4 col-sm-6">
							<div class="ph-20 feature-box text-center object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="200">
								<span class="icon large circle"><img class="img-circle" alt="beauty" src="beauty/images/beauty-2.jpg"></span>
								<h3>Make Up</h3>
								<div class="separator clearfix"></div>
								<p class="text-muted">Iure sequi unde hic. Sapiente quaerat sequi inventore veritatis cumque lorem ipsum dolor sit amet, consectetur.</p>
								<a class="link-dark" href="beauty/page-services.html">Read More<i class="pl-5 fa fa-angle-double-right"></i></a>
							</div>
						</div>
						<div class="col-md-4 col-sm-6">
							<div class="ph-20 feature-box text-center object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="300">
								<span class="icon large circle"><img class="img-circle" alt="beauty" src="beauty/images/beauty-3.jpg"></span>
								<h3>Skin Care</h3>
								<div class="separator clearfix"></div>
								<p class="text-muted">Inventore dolores aut laboriosam cum consequuntur delectus sequi lorem ipsum dolor sit amet, consectetur.</p>
								<a href="beauty/page-services.html">Read More<i class="pl-5 fa fa-angle-double-right"></i></a>
							</div>
						</div>
						<div class="clearfix visible-md"></div>
						<div class="col-md-4 col-sm-6">
							<div class="ph-20 feature-box text-center object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
								<span class="icon large circle"><img class="img-circle" alt="beauty" src="beauty/images/beauty-4.jpg"></span>
								<h3>Spa</h3>
								<div class="separator clearfix"></div>
								<p class="text-muted">Voluptatem ad provident non repudiandae beatae cupiditate amet reiciendis lorem ipsum dolor sit amet, consectetur.</p>
								<a class="link-dark" href="page-services.html">Read More<i class="pl-5 fa fa-angle-double-right"></i></a>
							</div>
						</div>
						<div class="col-md-4 col-sm-6">
							<div class="ph-20 feature-box text-center object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="200">
								<span class="icon large circle"><img class="img-circle" alt="beauty" src="beauty/images/beauty-5.jpg"></span>
								<h3>Health Care</h3>
								<div class="separator clearfix"></div>
								<p class="text-muted">Iure sequi unde hic. Sapiente quaerat sequi inventore veritatis cumque lorem ipsum dolor sit amet, consectetur.</p>
								<a href="beauty/page-services.html">Read More<i class="pl-5 fa fa-angle-double-right"></i></a>
							</div>
						</div>
						<div class="col-md-4 col-sm-6">
							<div class="ph-20 feature-box text-center object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="300">
								<span class="icon large circle"><img class="img-circle" alt="beauty" src="beauty/images/beauty-6.jpg"></span>
								<h3>Massage</h3>
								<div class="separator clearfix"></div>
								<p class="text-muted">Inventore dolores aut laboriosam cum consequuntur delectus sequi lorem ipsum dolor sit amet, consectetur.</p>
								<a class="link-dark" href="beauty/page-services.html">Read More<i class="pl-5 fa fa-angle-double-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- section end -->

			<!-- section start -->
			<!-- ================ -->
			<section class="section dark-bg clearfix">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="call-to-action text-center">
								<div class="row">
									<div class="col-sm-8">
										<h1 class="title">Don't Miss Out Our Offers</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quasi explicabo consequatur consectetur, a atque voluptate officiis eligendi nostrum.</p>
									</div>
									<div class="col-sm-4">
										<br>
										<p><a href="#" class="btn btn-lg btn-gray-transparent btn-animated">Learn More<i class="fa fa-arrow-right pl-20"></i></a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- section end -->

			<!-- section start -->
			<!-- ================ -->
			<section class="full-width-section">
				<div class="full-image-container border-clear light-gray-bg">
					<img class="to-right-block" src="beauty/images/beauty-section-1.jpg" alt="">
					<div class="full-image-overlay text-right">
						<h3>With Compassionate Care Since 1930</h3>
						<ul class="list-icons">
							<li>We are here to support you <i class="icon-check-1"></i></li>
							<li>Free updates <i class="icon-check-1"></i></li>
							<li>ipsam asperiores fugiat quo <i class="icon-check-1"></i></li>
							<li>Animi veniam veritatis sint <i class="icon-check-1"></i></li>
							<li>Voluptatum officia suscipit <i class="icon-check-1"></i></li>
							<li>Unlimited options and variations <i class="icon-check-1"></i></li>
						</ul>
					</div>
				</div>
				<div class="full-text-container border-clear light-gray-bg">
					<h3 class="logo-font text-muted">We <span class="text-default">Care</span> About You</h3>
					<div class="separator-2 visible-lg"></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veniam, veritatis sint consequuntur! Natus, culpa, explicabo! Non quo laboriosam nobis quia, amet excepturi optio dolor impedit. Perferendis libero unde, nulla deserunt sequi. Voluptatum, officia suscipit porro reprehenderit vitae quo rem reiciendis, a vero quae. Vero beatae voluptatum.</p>
					<div class="separator-3 visible-lg"></div>
				</div>
			</section>
			<!-- section end -->

			<!-- section start -->
			<!-- ================ -->
			<section class="pv-40 clearfix">
				<div class="container">
					<h3 class="title space-top logo-font text-center text-default">The Beauty</h3>
					<div class="separator"></div>
					<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aut voluptates quia <br> eveniet velit inventore, corporis, rem laboriosam. Ex ipsam nihil, quos dicta atque alias vel sunt. Libero, molestiae quidem?</p>
					<br>
					<div class="row grid-space-10">
						<div class="col-sm-6 col-md-3">
							<div class="pv-30 ph-20 white-bg feature-box bordered text-center">
								<span class="icon default-bg circle"><i class="fa fa-plus-square"></i></span>
								<h3>Since 1930</h3>
								<div class="separator clearfix"></div>
								<p>Voluptatem ad provident non repudiandae beatae cupiditate amet reiciendis lorem ipsum dolor sit amet, consectetur.</p>
								<a href="#" class="btn btn-default btn-animated">Read More <i class="fa fa-angle-double-right"></i></a>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">
							<div class="pv-30 ph-20 white-bg feature-box bordered text-center">
								<span class="icon default-bg circle"><i class="fa fa-hospital-o"></i></span>
								<h3>Apointments</h3>
								<div class="separator clearfix"></div>
								<p>Iure sequi unde hic. Sapiente quaerat sequi inventore veritatis cumque lorem ipsum dolor sit amet, consectetur.</p>
								<a href="#" class="btn btn-default btn-animated">Make An Apointment <i class="pl-5 fa fa-calendar"></i></a>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">
							<div class="pv-30 ph-20 default-bg feature-box bordered text-center">
								<span class="icon dark-bg circle"><i class="fa fa-hand-peace-o"></i></span>
								<h3>Special Deals</h3>
								<div class="separator clearfix"></div>
								<p>Inventore dolores aut laboriosam cum consequuntur delectus sequi lorem ipsum dolor sit amet, consectetur.</p>
								<a href="#" class="btn btn-default btn-animated">Call Us <i class="pl-5 fa fa-phone"></i></a>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">
							<div class="pv-30 ph-20 white-bg feature-box bordered text-center">
								<span class="icon default-bg circle"><i class="glyphicon glyphicon-time"></i></span>
								<h3>Opening Hours</h3>
								<div class="separator-2 mt-20 clearfix"></div>
								<ul class="list-unstyled small list-icons text-left">
									<li><strong class="text-default">Monday - Friday</strong> <span class="pull-right">8.00 - 18.00</span></li>
									<li><strong class="text-default">Saturday</strong> <span class="pull-right">9.00 - 16.30</span></li>
									<li><strong class="text-default">Sunday</strong> <span class="pull-right">9.30 - 16.00</span></li>
								</ul>
								<div class="separator-3 mt-20 clearfix"></div>
								<p class="small text-default">Lorem ipsum dolor sit amet, consectetur.</p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="call-to-action pv-40 text-center">
								<div class="row">
									<div class="col-sm-8 col-sm-offset-2">
										<h2 class="title">Join Us Now</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus error pariatur deserunt laudantium nam, mollitia quas nihil inventore, quibusdam?</p>
										<div class="separator"></div>
										<form class="form-inline margin-clear">
											<div class="form-group has-feedback">
												<label class="sr-only" for="subscribe2">Email address</label>
												<input type="email" class="form-control" id="subscribe2" placeholder="Enter email" name="subscribe2" required="">
												<i class="fa fa-envelope form-control-feedback"></i>
											</div>
											<button type="submit" class="btn btn-gray-transparent btn-animated margin-clear">Submit <i class="fa fa-send"></i></button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- section end -->

			<!-- section start -->
			<!-- ================ -->
			<section class="dark-translucent-bg parallax background-img-10 pv-40" style="background-position: 50% 50%;">
				<div class="owl-carousel content-slider">
					<div class="container">
						<div class="row">
							<div class="col-md-8 col-md-offset-2">
								<div class="testimonial text-center">
									<div class="testimonial-image">
										<img src="beauty/images/testimonial-1.jpg" alt="Jane Doe" title="Jane Doe" class="img-circle">
									</div>
									<h3>Just Perfect!</h3>
									<div class="separator"></div>
									<div class="testimonial-body">
										<blockquote>
											<p>Sed ut perspiciatis unde omnis iste natu error sit voluptatem accusan tium dolore laud antium, totam rem dolor sit amet tristique pulvinar, turpis arcu rutrum nunc, ac laoreet turpis augue a justo.</p>
										</blockquote>
										<div class="testimonial-info-1">- Jane Doe</div>
										<div class="testimonial-info-2">By Company</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-md-8 col-md-offset-2">
								<div class="testimonial text-center">
									<div class="testimonial-image">
										<img src="beauty/images/testimonial-2.jpg" alt="Jane Doe" title="Jane Doe" class="img-circle">
									</div>
									<h3>Amazing!</h3>
									<div class="separator"></div>
									<div class="testimonial-body">
										<blockquote>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et cupiditate deleniti ratione in. Expedita nemo, quisquam, fuga adipisci omnis ad mollitia libero culpa nostrum est quia eos esse vel!</p>
										</blockquote>
										<div class="testimonial-info-1">- Jane Doe</div>
										<div class="testimonial-info-2">By Company</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- section end -->

			<!-- footer top start -->
			<!-- ================ -->
			<div class="default-bg footer-top border-clear">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="call-to-action text-center">
								<div class="row">
									<div class="col-sm-8">
										<h2>Powerful Bootstrap Template</h2>
									</div>
									<div class="col-sm-4">
										<p class="mt-10"><a href="#" class="btn btn-animated btn-lg btn-gray-transparent">Purchase<i class="fa fa-cart-arrow-down pl-20"></i></a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- footer top end -->		
			<!-- footer start (Add "dark" class to #footer in order to enable dark footer) -->
			<!-- ================ -->
			<footer id="footer" class="clearfix dark">

				<!-- .footer start -->
				<!-- ================ -->
				<div class="footer">
					<div class="container">
						<div class="footer-inner">
							<div class="row">
								<div class="col-md-3">
									<div class="footer-content">
										<div class="logo-footer"><img id="logo-footer" src="beauty/images/logo_purple.png" alt=""></div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo vel dolorum soluta consectetur doloribus sit. Delectus non tenetur odit dicta vitae debitis suscipit doloribus. Ipsa, aut voluptas quaerat... <a href="page-about.html">Learn More<i class="fa fa-long-arrow-right pl-5"></i></a></p>
										<div class="separator-2"></div>
										<nav>
											<ul class="nav nav-pills nav-stacked">
												<li><a target="_blank" href="http://htmlcoder.me/support">Support</a></li>
												<li><a href="#">Privacy</a></li>
												<li><a href="#">Terms</a></li>
												<li><a href="beauty/page-about.html">About</a></li>
											</ul>
										</nav>
									</div>
								</div>
								<div class="col-md-3">
									<div class="footer-content">
										<h2 class="title">Latest From Blog</h2>
										<div class="separator-2"></div>
										<div class="media margin-clear">
											<div class="media-left">
												<div class="overlay-container">
													<img class="media-object" src="beauty/images/blog-thumb-1.jpg" alt="blog-thumb">
													<a href="beauty/blog-post.html" class="overlay-link small"><i class="fa fa-link"></i></a>
												</div>
											</div>
											<div class="media-body">
												<h6 class="media-heading"><a href="beauty/blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
												<p class="small margin-clear"><i class="fa fa-calendar pr-10"></i>Mar 23, 2015</p>
											</div>
											<hr>
										</div>
										<div class="media margin-clear">
											<div class="media-left">
												<div class="overlay-container">
													<img class="media-object" src="beauty/images/blog-thumb-2.jpg" alt="blog-thumb">
													<a href="beauty/blog-post.html" class="overlay-link small"><i class="fa fa-link"></i></a>
												</div>
											</div>
											<div class="media-body">
												<h6 class="media-heading"><a href="beauty/blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
												<p class="small margin-clear"><i class="fa fa-calendar pr-10"></i>Mar 22, 2015</p>
											</div>
											<hr>
										</div>
										<div class="media margin-clear">
											<div class="media-left">
												<div class="overlay-container">
													<img class="media-object" src="beauty/images/blog-thumb-3.jpg" alt="blog-thumb">
													<a href="beauty/blog-post.html" class="overlay-link small"><i class="fa fa-link"></i></a>
												</div>
											</div>
											<div class="media-body">
												<h6 class="media-heading"><a href="beauty/blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
												<p class="small margin-clear"><i class="fa fa-calendar pr-10"></i>Mar 21, 2015</p>
											</div>
											<hr>
										</div>
										<div class="media margin-clear">
											<div class="media-left">
												<div class="overlay-container">
													<img class="media-object" src="beauty/images/blog-thumb-4.jpg" alt="blog-thumb">
													<a href="beauty/blog-post.html" class="overlay-link small"><i class="fa fa-link"></i></a>
												</div>
											</div>
											<div class="media-body">
												<h6 class="media-heading"><a href="beauty/blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
												<p class="small margin-clear"><i class="fa fa-calendar pr-10"></i>Mar 21, 2015</p>
											</div>
										</div>
										<div class="text-right space-top">
											<a href="beauty/blog-large-image-right-sidebar.html" class="link-dark"><i class="fa fa-plus-circle pl-5 pr-5"></i>More</a>	
										</div>
									</div>
								</div>
								<div class="col-md-3">
									<div class="footer-content">
										<h2 class="title">Portfolio Gallery</h2>
										<div class="separator-2"></div>
										<div class="row grid-space-10">
											<div class="col-xs-4 col-md-6">
												<div class="overlay-container mb-10">
													<img src="beauty/images/gallery-1.jpg" alt="">
													<a href="beauty/portfolio-item.html" class="overlay-link small">
														<i class="fa fa-link"></i>
													</a>
												</div>
											</div>
											<div class="col-xs-4 col-md-6">
												<div class="overlay-container mb-10">
													<img src="beauty/images/gallery-2.jpg" alt="">
													<a href="beauty/portfolio-item.html" class="overlay-link small">
														<i class="fa fa-link"></i>
													</a>
												</div>
											</div>
											<div class="col-xs-4 col-md-6">
												<div class="overlay-container mb-10">
													<img src="beauty/images/gallery-3.jpg" alt="">
													<a href="beauty/portfolio-item.html" class="overlay-link small">
														<i class="fa fa-link"></i>
													</a>
												</div>
											</div>
											<div class="col-xs-4 col-md-6">
												<div class="overlay-container mb-10">
													<img src="beauty/images/gallery-4.jpg" alt="">
													<a href="beauty/portfolio-item.html" class="overlay-link small">
														<i class="fa fa-link"></i>
													</a>
												</div>
											</div>
											<div class="col-xs-4 col-md-6">
												<div class="overlay-container mb-10">
													<img src="beauty/images/gallery-5.jpg" alt="">
													<a href="beauty/portfolio-item.html" class="overlay-link small">
														<i class="fa fa-link"></i>
													</a>
												</div>
											</div>
											<div class="col-xs-4 col-md-6">
												<div class="overlay-container mb-10">
													<img src="beauty/images/gallery-6.jpg" alt="">
													<a href="beauty/portfolio-item.html" class="overlay-link small">
														<i class="fa fa-link"></i>
													</a>
												</div>
											</div>
										</div>
										<div class="text-right space-top">
											<a href="beauty/portfolio-grid-2-3-col.html" class="link-dark"><i class="fa fa-plus-circle pl-5 pr-5"></i>More</a>	
										</div>
									</div>
								</div>
								<div class="col-md-3">
									<div class="footer-content">
										<h2 class="title">Find Us</h2>
										<div class="separator-2"></div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium odio voluptatem necessitatibus illo vel dolorum soluta.</p>
										<ul class="social-links circle animated-effect-1">
											<li class="facebook"><a target="_blank" href="http://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
											<li class="twitter"><a target="_blank" href="http://www.twitter.com"><i class="fa fa-twitter"></i></a></li>
											<li class="googleplus"><a target="_blank" href="http://plus.google.com"><i class="fa fa-google-plus"></i></a></li>
											<li class="linkedin"><a target="_blank" href="http://www.linkedin.com"><i class="fa fa-linkedin"></i></a></li>
											<li class="xing"><a target="_blank" href="http://www.xing.com"><i class="fa fa-xing"></i></a></li>
										</ul>
										<div class="separator-2"></div>
										<ul class="list-icons">
											<li><i class="fa fa-map-marker pr-10 text-default"></i> One infinity loop, 54100</li>
											<li><i class="fa fa-phone pr-10 text-default"></i> +00 1234567890</li>
											<li><a href="mailto:info@theproject.com"><i class="fa fa-envelope-o pr-10"></i>info@theproject.com</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- .footer end -->

				<!-- .subfooter start -->
				<!-- ================ -->
				<div class="subfooter">
					<div class="container">
						<div class="subfooter-inner">
							<div class="row">
								<div class="col-md-12">
									<p class="text-center">Copyright © 2015 The Project by <a target="_blank" href="http://htmlcoder.me">HtmlCoder</a>. All Rights Reserved</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- .subfooter end -->

			</footer>
			<!-- footer end -->
			
		</div>
		<!-- page-wrapper end -->

		<!-- JavaScript files placed at the end of the document so the pages load faster -->
		<!-- ================================================== -->
		<!-- Jquery and Bootstap core js files -->
		<script type="text/javascript" src="plugins/jquery.min.js"></script>
		<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>

		<!-- Modernizr javascript -->
		<script type="text/javascript" src="plugins/modernizr.js"></script>

		<!-- jQuery Revolution Slider  -->
		<script type="text/javascript" src="plugins/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
		<script type="text/javascript" src="plugins/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>

		<!-- Isotope javascript -->
		<script type="text/javascript" src="plugins/isotope/isotope.pkgd.min.js"></script>
		
		<!-- Magnific Popup javascript -->
		<script type="text/javascript" src="plugins/magnific-popup/jquery.magnific-popup.min.js"></script>
		
		<!-- Appear javascript -->
		<script type="text/javascript" src="plugins/waypoints/jquery.waypoints.min.js"></script>

		<!-- Count To javascript -->
		<script type="text/javascript" src="plugins/jquery.countTo.js"></script>
		
		<!-- Parallax javascript -->
		<script src="plugins/jquery.parallax-1.1.3.js"></script>

		<!-- Contact form -->
		<script src="plugins/jquery.validate.js"></script>

		<!-- Google Maps javascript -->
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false&amp;signed_in=true"></script>
		<script type="text/javascript" src="beauty/js/google.map.config.js"></script>

		<!-- Background Video -->
		<script src="beauty/plugins/vide/jquery.vide.js"></script>

		<!-- Owl carousel javascript -->
		<script type="text/javascript" src="beauty/plugins/owl-carousel/owl.carousel.js"></script>
		
		<!-- Pace javascript -->
		<script type="text/javascript" src="beauty/plugins/pace/pace.min.js"></script>

		<!-- SmoothScroll javascript -->
		<script type="text/javascript" src="beauty/plugins/jquery.browser.js"></script>
		<script type="text/javascript" src="beauty/plugins/SmoothScroll.js"></script>

		<!-- Initialization of Plugins -->
		<script type="text/javascript" src="beauty/js/template.js"></script>

		<!-- Custom Scripts -->
		<script type="text/javascript" src="beauty/js/custom.js"></script>
		<!-- Color Switcher (Remove these lines) -->
		<script type="text/javascript" src="beauty/style-switcher/style-switcher.js"></script>
		<div class="style-switcher closed">
			<div class="header">
				<a class="trigger" href="#"><i class="icon-cog-1"></i></a>
				<h2>Style Switcher</h2>
			</div>
			<div class="clearfix body">
				<h3>Predifined Colors</h3>
				<ul class="styleChange">
					<li class="light-blue selected" data-style="light_blue" title="light_blue"></li>
					<li class="blue" data-style="blue" title="blue"></li>
					<li class="green" data-style="green" title="green"></li>
					<li class="dark-cyan" data-style="dark_cyan" title="dark_cyan"></li>
					<li class="brown" data-style="brown" title="brown"></li>
					<li class="dark-red" data-style="dark_red" title="dark_red"></li>
					<li class="gold" data-style="gold" title="gold"></li>
					<li class="gray" data-style="gray" title="gray"></li>
					<li class="cool-green" data-style="cool_green" title="cool_green"></li>
					<li class="pink" data-style="pink" title="pink"></li>
					<li class="purple" data-style="purple" title="purple"></li>
					<li class="orange" data-style="orange" title="orange"></li>
					<li class="red" data-style="red" title="red"></li>
					<li class="vivid-red" data-style="vivid_red" title="vivid_red"></li>
				</ul>
				<hr>
				<h3>Layout Mode</h3>
				<ul class="layoutChange">
					<li class="wide selected" data-style="wide" title="wide"><i class="fa fa-arrow-left pr-10"></i>Wide<i class="fa fa-arrow-right pl-10"></i></li>
					<li class="boxed" data-style="boxed" title="boxed"><i class="fa fa-arrow-right pr-5"></i>Boxed<i class="fa fa-arrow-left pl-5"></i></li>
				</ul>
				<h3>Patterns</h3>
				<ul class="patternChange">
					<li class="pattern-0" data-style="pattern-0" title="white background"></li>
					<li class="pattern-1" data-style="pattern-1" title="pattern-1"></li>
					<li class="pattern-2" data-style="pattern-2" title="pattern-2"></li>
					<li class="pattern-3" data-style="pattern-3" title="pattern-3"></li>
					<li class="pattern-4" data-style="pattern-4" title="pattern-4"></li>
					<li class="pattern-5" data-style="pattern-5" title="pattern-5"></li>
					<li class="pattern-6" data-style="pattern-6" title="pattern-6"></li>
					<li class="pattern-7" data-style="pattern-7" title="pattern-7"></li>
					<li class="pattern-8" data-style="pattern-8" title="pattern-8"></li>
					<li class="pattern-9" data-style="pattern-9" title="pattern-9"></li>
				</ul>
				<ul class="resetAll">
					<li class="btn btn-default btn-sm" title="Reset"><a href="../index.html">Demos</a></li>
					<li class="btn btn-dark btn-sm" title="Reset">Reset All</li>
				</ul>
			</div>
		</div>
		<!-- Color Switcher End -->
  `
})
export class AppComponent { }

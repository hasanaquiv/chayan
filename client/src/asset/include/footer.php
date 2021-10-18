	<!-- Footer -->
    <footer class="site-footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="widget widget_about">
                            <div class="logo-footer"><img src="images/logo-white.png" alt=""></div>
                            <p class="m-t20 m-b15"><strong>Chayan Enterprises Private limited</strong> , one of the largest Logistics companies in India. Directly from shipping your load across the globe, giving a-list Container Freight Station and Inland Container Depot offices</p>
                            <ul class="dez-social-icon dez-border">
                                <li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
                                <li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
                                <li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
                                <li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="widget widget_services">
                            <h3 class="m-b10">Our services</h3>
                            <div class="dez-separator bg-primary"></div>
                            <ul>
                                <li><a href="/logistics">Air Logistics</a></li>
                                <li><a href="/logistics">Surface Logistics</a></li>
                                <li><a href="/logistics">Warehouse</a></li>
                                <li><a href="/manpower">Manpawer Service</a></li>
                                <li><a href="/manpower">Security Manpawer</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="widget widget_getintuch">
                            <h3 class="m-b10">Contact us</h3>
                            <div class="dez-separator bg-primary"></div>
                            <ul>
                                <li><i class="fa fa-map-marker"></i><strong>Address</strong> Khasra No 647,A Block opposite Chaudhary Farm ,Rangpuri Extension ,New Delhi 110037</li>
                                <li><i class="fa fa-phone"></i><strong>Phone</strong>+91 11-41678277</li>
                                <li><i class="fa fa-envelope"></i><strong>Mail</strong>info@chayanenterprises.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer Bottom Part -->
        <div class="footer-bottom bg-primary">
            <div class="container">
                <div class="row text-white">
                    <div class="col-lg-4 text-left"> 
						<span>© Copyright 2021</span> 
					</div>
                    <div class="col-lg-4 text-center"> 
						<span> Design With <i class="fa fa-heart heart"></i> By iHostweb </span> 
					</div>
                    <div class="col-lg-4 text-right"> 
						<ul class="list-inline">
							<li><a href="/about"> About</a></li>
							<li><a href="/contact"> Contact</a></li> 
						</ul>
					</div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer END-->
    <button class="scroltop fa fa-arrow-up" ></button>
</div>
<!-- JavaScript files ========================================= -->
<script src="js/jquery.min.js"></script><!-- JQUERY.MIN JS -->
<script src="plugins/bootstrap/js/popper.min.js"></script><!-- BOOTSTRAP.MIN JS -->
<script src="plugins/bootstrap/js/bootstrap.min.js"></script><!-- BOOTSTRAP.MIN JS -->
<script src="plugins/bootstrap-select/bootstrap-select.min.js"></script><!-- FORM JS -->
<script src="plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.js"></script><!-- FORM JS -->
<script src="plugins/magnific-popup/magnific-popup.js"></script><!-- MAGNIFIC POPUP JS -->
<script src="plugins/counter/waypoints-min.js"></script><!-- WAYPOINTS JS -->
<script src="plugins/counter/counterup.min.js"></script><!-- COUNTERUP JS -->
<script src="plugins/imagesloaded/imagesloaded.js"></script><!-- IMAGESLOADED -->
<script src="plugins/masonry/masonry-3.1.4.js"></script><!-- MASONRY -->
<script src="plugins/masonry/masonry.filter.js"></script><!-- MASONRY -->
<script src="plugins/owl-carousel/owl.carousel.js"></script><!-- OWL SLIDER -->
<script src="js/custom.js"></script><!-- CUSTOM FUCTIONS  -->
<script src="js/dz.carousel.js"></script><!-- SORTCODE FUCTIONS  -->
<script src="js/dz.ajax.js"></script><!-- CONTACT JS  -->
<!-- REVOLUTION JS FILES -->
<script src="plugins/revolution/revolution/js/jquery.themepunch.tools.min.js"></script>
<script src="plugins/revolution/revolution/js/jquery.themepunch.revolution.min.js"></script>
<!-- Slider revolution 5.0 Extensions  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) -->
<script src="plugins/revolution/revolution/js/extensions/revolution.extension.actions.min.js"></script>
<script src="plugins/revolution/revolution/js/extensions/revolution.extension.carousel.min.js"></script>
<script src="plugins/revolution/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
<script src="plugins/revolution/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
<script src="plugins/revolution/revolution/js/extensions/revolution.extension.migration.min.js"></script>
<script src="plugins/revolution/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
<script src="plugins/revolution/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
<script src="plugins/revolution/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
<script src="plugins/revolution/revolution/js/extensions/revolution.extension.video.min.js"></script>
<script>
	var tpj=jQuery;
	
	var revapi1014;
	tpj(document).ready(function() {
		if(tpj("#rev_slider_1014_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_1014_1");
		}else{
			revapi1014 = tpj("#rev_slider_1014_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
				dottedOverlay:"none",
				delay:9000,
				startwidth:1200,
				startheight:750,
				hideThumbs:600,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
					onHoverStop:"off",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					arrows: {
							style: "hermes",
							enable: true,
							hide_onmobile: false,
							hide_onleave: false,
							tmp: '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							}
						}
				},
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],

				lazyType:"none",
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:0,
				stopAtSlide:1,
				shuffle:"off",
				autoHeight:"off",
				fullScreenAutoWidth:"off",
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "60px",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}


	});	/*ready*/
</script>
</body>
</html>
<?php
	function title($url){
		switch($url){
			case "/":
				echo "<title>Home - Chayan Enterprises Logistics and Manpower </title>";
				break;

			case "/about":
				echo "<title>About - Chayan Enterprises Logistics and Manpower </title>";
				break;

			case "/contact":
				echo "<title>Contact - Chayan Enterprises Logistics and Manpower </title>";
				break;

			case "/logistics":
				echo "<title>Logistics - Chayan Enterprises Logistics and Manpower </title>";
				break;

			case "/manpower":
				echo "<title>Manpower - Chayan Enterprises Logistics and Manpower </title>";
				break;

            case "/contractor":
                echo "<title>Contractor - Chayan Enterprises Logistics and Contractor </title>";
                break;

			default:
				echo "<title>Home - Chayan Enterprises Logistics and Manpower </title>";
				break;
		}		
	}


	function active($url){
		switch($url){
			case "/":
				echo '<ul class="nav navbar-nav">
                            <li class="active"> <a href="/">Home</a></li>
                            <li> <a href="/about">About</a></li>
                            <li> <a href="javascript:;">Services<i class="fa fa-chevron-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="/logistics">Logisticks</a></li>
                                    <li><a href="/manpower">ManPower</a></li>
                                    <li><a href="/contractor">Contractor</a></li>
                                </ul>
                            </li>
                            <li> <a href="/contact">Contact us</a></li>
                        </ul>';
				break;

			case "/about":
				echo '<ul class="nav navbar-nav">
                            <li> <a href="/">Home</a></li>
                            <li  class="active"> <a href="/about">About</a></li>
                            <li> <a href="javascript:;">Services<i class="fa fa-chevron-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="/logistics">Logisticks</a></li>
                                    <li><a href="/manpower">ManPower</a></li>
                                    <li><a href="/contractor">Contractor</a></li>
                                </ul>
                            </li>
                            <li> <a href="/contact">Contact us</a></li>
                        </ul>';
				break;

			case "/contact":
				echo '<ul class="nav navbar-nav">
                            <li> <a href="/">Home</a></li>
                            <li> <a href="/about">About</a></li>
                            <li> <a href="javascript:;">Services<i class="fa fa-chevron-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="/logistics">Logisticks</a></li>
                                    <li><a href="/manpower">ManPower</a></li>
                                    <li><a href="/contractor">Contractor</a></li>
                                </ul>
                            </li>
                            <li class="active"> <a href="/contact">Contact us</a></li>
                        </ul>';
				break;

			case "/logistics":
				echo '<ul class="nav navbar-nav">
                            <li> <a href="/">Home</a></li>
                            <li> <a href="/about">About</a></li>
                            <li  class="active"> <a href="javascript:;">Services<i class="fa fa-chevron-down"></i></a>
                                <ul class="sub-menu">
                                    <li  class="active"><a href="/logistics">Logisticks</a></li>
                                    <li><a href="/manpower">ManPower</a></li>
                                    <li><a href="/contractor">Contractor</a></li>
                                </ul>
                            </li>
                            <li> <a href="/contact">Contact us</a></li>
                        </ul>';
				break;

			case "/manpower":
				echo '<ul class="nav navbar-nav">
                            <li> <a href="/">Home</a></li>
                            <li> <a href="/about">About</a></li>
                            <li class="active"> <a href="javascript:;">Services<i class="fa fa-chevron-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="/logistics">Logisticks</a></li>
                                    <li class="active"><a href="/manpower">ManPower</a></li>
                                    <li><a href="/contractor">Contractor</a></li>
                                </ul>
                            </li>
                            <li> <a href="/contact">Contact us</a></li>
                        </ul>';
				break;

			default:
				echo '<ul class="nav navbar-nav">
                            <li class="active"> <a href="/">Home</a></li>
                            <li> <a href="/about">About</a></li>
                            <li> <a href="javascript:;">Services<i class="fa fa-chevron-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="/logistics">Logisticks</a></li>
                                    <li><a href="/manpower">ManPower</a></li>
                                    <li><a href="/contractor">Contractor</a></li>
                                </ul>
                            </li>
                            <li> <a href="/contact">Contact us</a></li>
                        </ul>';
				break;
		}
	}
<?php $url = $_SERVER['REQUEST_URI']; ?>
<?php include("include/function.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <meta name="robots" content="" />
    <meta name="description" content="CargoZone - Transport and Cargo Template" />
    <meta property="og:title" content="CargoZone - Transport and Cargo Template" />
    <meta property="og:description" content="CargoZone - Transport and Cargo Template" />
    <meta property="og:image" content=""/>
    <meta name="format-detection" content="telephone=no">
    
    <!-- FAVICONS ICON -->
    <!-- <link rel="icon" href="images/favicon.ico" type="image/x-icon" /> -->
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />
    
    <!-- PAGE TITLE HERE -->
    <?php title($url); ?>
    
    <!-- MOBILE SPECIFIC -->
    <meta name="viewport" content="width=device-width">
    
    <!--[if lt IE 9]>
    <script src="js/html5shiv.min.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->
    
    <!-- STYLESHEETS -->
    <link rel="stylesheet" type="text/css" href="css/plugins.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/templete.css">
    <link rel="stylesheet" type="text/css" class="skin" href="css/skin/skin.css">
    
    <!-- REVOLUTION SLIDER CSS -->
    <link rel="stylesheet" type="text/css" href="plugins/revolution/revolution/css/settings.css">
    <link rel="stylesheet" type="text/css" href="plugins/revolution/revolution/css/navigation.css">

</head>
<body id="bg">
<div class="page-wraper">
<div id="loading-area"></div>
    <!-- Header -->
    <header class="site-header header-style-1 dark mo-left">
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="dez-topbar-left">
                        <ul class="social-bx list-inline pull-right">
                            <li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
                            <li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
                            <li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
                            <li><a href="javascript:void(0);" class="fa fa-google-plus"></a></li>
                        </ul>
                    </div>
                    <div class="dez-topbar-right list-unstyled e-p-bx ">
                        <ul>
                            <li><i class="fa fa-envelope"></i><span>info@chayanenterprises.com</span></li>
                            <li><i class="fa fa-phone"></i><span>+91 11-41678277</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Top Bar END-->
        <!-- Main Header -->
        <div class="sticky-header header-curve main-bar-wraper navbar-expand-lg">
            <div class="main-bar bg-primary clearfix ">
                <div class="container clearfix">
                    <!-- Website Logo -->
                    <div class="logo-header mostion">
                        <a href="/"><img src="images/logo.png" width="193" height="89" alt=""></a>
                    </div>
                    <!-- Nav Toggle Button -->
                    <button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <!-- Main Nav -->
                    <div class="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                        <?php active($url); ?>
                    </div>
                </div>
            </div>
        </div>
        <!-- Main Header END -->
    </header>
    <!-- Header END -->
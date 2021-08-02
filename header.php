<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package project-name
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<meta name="viewport" content="initial-scale=1">
	<meta name="viewport" content="maximum-scale=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdnout.com/slick-lightbox/slick-lightbox.css" rel="stylesheet" media="all">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,400;0,500;0,700;1,300&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-lightbox/0.2.10/slick-lightbox.min.js"></script>


	<?php wp_head(); ?>
	
</head>

<body <?php body_class(); ?>
  data-component="class-toggle"
  data-class-toggle-target-class="menu-open">
	<!-- <div id="mobile-menu-overlay"></div> -->
	<header
    id="main-header"
    class="active"
    data-component="collapsible-header">
    <a
      id="logo-anchor"
      href="<?php echo get_home_url(); ?>">
      <strong>FELIPE RODRIGUES</strong> ARQUITETURA
    </a>


    <button
      id="mobile-menu-trigger"
      data-component="trigger"
      data-trigger-target="body">
      <div class="mobile-menu-trigger__horizontal">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="mobile-menu-trigger__vertical">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>

    <nav
    	class="header-menu-container"
    	id="main-menu-container"
    	data-component="menu">
      <?php
        wp_nav_menu(array(
          'theme_location' => 'main-menu',
          'menu_id'        => 'main-menu',
        ));

      ?>
      <div class="adorno-menu">
        <div class="adorno-menu-1"></div>
        <div class="adorno-menu-2"></div>
        <div class="adorno-menu-3"></div>
      </div>

    </nav>
	  
	</header>

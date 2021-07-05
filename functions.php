<?php

	function xi_script_enqueue(){
		wp_enqueue_style('customstyle', get_template_directory_uri() . '/css/style.css', array(), '1.0.0', 'all');
		wp_enqueue_script('customjs',  get_template_directory_uri() . '/js/index.js', array(), '1.0.0', true );
    wp_enqueue_script('slickjs',  get_template_directory_uri() . '/slick/slick.min.js', array(), '1.8.0', true);
    wp_enqueue_style('slickcss', get_template_directory_uri() . '/slick/slick.css', array(), '1.8.0', 'all');
    wp_enqueue_style('slicktheme', get_template_directory_uri() . '/slick/slick-theme.css', array(), '1.8.0', 'all');
	}


add_action('wp_enqueue_scripts', 'xi_script_enqueue');



use Carbon_Fields\Container;
use Carbon_Fields\Field;

add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );
function crb_attach_theme_options() {
    Container::make( 'theme_options', __( 'Theme Options', 'crb' ) )
        ->add_fields( array(
            Field::make( 'text', 'email', 'E-mail' ),
            Field::make( 'text', 'tel', 'Telefone' ),
            // Field::make( 'text', 'facebook', 'Facebook' ),
            // Field::make( 'text', 'instagram', 'Instagram' ),
            // Field::make( 'text', 'vimeo', 'Vimeo' ),
            // Field::make( 'text', 'spotifty', 'Spotify' ),
            // Field::make( 'text', 'youtube', 'Youtube' ),
        ) );
}

add_action( 'after_setup_theme', 'crb_load' );
function crb_load() {
	//define o caminho para o carbon-fields
	define(
		'Carbon_Fields\URL',
		get_template_directory_uri() . '/vendor/htmlburger/carbon-fields'
	);
  require_once('vendor/autoload.php');
  \Carbon_Fields\Carbon_Fields::boot();
}
add_action('after_setup_theme', 'register_carbon_fields');
function register_carbon_fields() {
	require_once('blocks/load.php');
}

///////////
///MENU////
///////////


/**
 * Main menu navigation
 */
register_nav_menus(array(
  'main-menu' => 'Menu principal',
));

add_action( 'wp_head', 'add_viewport_meta_tag' , '1' );

function add_viewport_meta_tag() {
    echo '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">';
}

///////////
////post///
///////////
function support_thumbnails() {
    add_theme_support('post-thumbnails'); // thumbnails
}

add_action('after_setup_theme', 'support_thumbnails'); // carrega parametros de suporte do tema

///////////
//excerpt//
///////////
add_post_type_support( 'page', 'excerpt' );


///////////
//vcard////
///////////
function _thz_enable_vcard_upload( $mime_types ){
    $mime_types['vcf'] = 'text/vcard';
    $mime_types['vcard'] = 'text/vcard';
    return $mime_types;
}
add_filter('upload_mimes', '_thz_enable_vcard_upload' );

////////////////
////taxonomia///
////////////////

/* -- Post Type - Projetos -- */
function custom_post_type_projetos() {
    $labels = [
        "name" => __( "Projetos"),
        "singular_name" => __( "Projetos"),
    ];

    $args = [
        "label" => __( "Projetos"),
        "labels" => $labels,
        "description" => "",
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "delete_with_user" => false,
        "show_in_rest" => true,
        "rest_base" => "",
        "rest_controller_class" => "WP_REST_Posts_Controller",
        "has_archive" => true,
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "map_meta_cap" => true,
        "hierarchical" => false,
        "rewrite" => [ "slug" => "projetos", "with_front" => false, 'hierarchical' => true ],
        "query_var" => true,
        "menu_position" => 5,
        "menu_icon" => "dashicons-book-alt",
        "supports" => [ "title", "editor", "thumbnail", "excerpt", "trackbacks", "custom-fields", "comments", "revisions", "author", "page-attributes", "post-formats" ],
        "taxonomies" => [ "genero" ],
    ];

    register_post_type( "projetos", $args );
}

add_action( 'init', 'custom_post_type_projetos' );

/* ------------------------------ Taxonomias - Genero -----------------------------*/
function custom_taxonomy_projeto() {

    /**
     * Taxonomy: Projeto.
     */

    $labels = [
        "name" => __( "Projeto"),
        "singular_name" => __( "Projeto"),
    ];

    $args = [
        "label" => __( "Projeto"),
        "labels" => $labels,
        "public" => true,
        "publicly_queryable" => true,
        "hierarchical" => true,
        "show_ui" => true,
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        "query_var" => true,
        "rewrite" => [ "slug" => "projetos", "with_front" => false, 'hierarchical' => true ],
        "show_admin_column" => true,
        "show_in_rest" => true,
        "rest_base" => "projeto",
        "rest_controller_class" => "WP_REST_Terms_Controller",
        "show_in_quick_edit" => true,
    ];

    register_taxonomy( "projeto", [ "projetos" ], $args );
}
add_action( 'init', 'custom_taxonomy_projeto' );




<?php
 
use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'fr' );
 
function fr_address() {
	Block::make( 'Endereço' )
		->add_fields( array(
		) )
		->set_render_callback( function ( $block ) {
 
			// ob_start();
			?>
			<div class="address">
				<a target="_blank" href="mailto:<?php echo carbon_get_theme_option('email'); ?>"><?php echo carbon_get_theme_option('email'); ?></a>
				<a target="_blank" href=" https://wa.me/<?php echo carbon_get_theme_option('tel'); ?>">
					<img class="" src="<?php echo get_template_directory_uri() ?>/resources/icons/whatsapp.png">
				</a>
				<a target="_blank" href="<?php echo carbon_get_theme_option('instagram'); ?>">
					<img class="" src="<?php echo get_template_directory_uri() ?>/resources/icons/instagram.png">
				</a>
			</div>
			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'fr_address' );
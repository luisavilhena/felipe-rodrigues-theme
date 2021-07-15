<?php

 
use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'fr' );
 
function fr_adorno() {
	Block::make( 'Adorno' )
		->add_fields( array(
		) )
		->set_render_callback( function ( $block ) {
 
			// ob_start();
			?>
			<div class="adorno">
				<div class="adorno-1"></div>
				<div class="adorno-2"></div>
				<div class="adorno-3"></div>
			</div>
			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'fr_adorno' );
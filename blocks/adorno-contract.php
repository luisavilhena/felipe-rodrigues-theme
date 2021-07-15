<?php
 
use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'fr' );
 
function fr_adorno_contract() {
	Block::make( 'Adorno contraído no mobile' )
		->add_fields( array(
		) )
		->set_render_callback( function ( $block ) {
 
			// ob_start();
			?>
			<div class="adorno-contract">
				<div class="adorno-contract-1"></div>
				<div class="adorno-contract-2"></div>
				<div class="adorno-contract-3"></div>
			</div>
			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'fr_adorno_contract' );
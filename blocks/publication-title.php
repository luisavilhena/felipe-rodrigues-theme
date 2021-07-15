<?php

use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'fr' );
 
function fr_page_publication () {
	Block::make( 'Publicação mobile' )
		->add_fields( array(
			Field::make( 'text', 'title', 'Título' ),
		) )
		->set_render_callback( function ( $block ) {
 
			// ob_start();
			?>
			<div class="publication-title">
				<h1>PUBLICAÇÃO</h1>
				<h2><?php echo  $block['title']; ?></h2>
			</div>
			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'fr_page_publication' );
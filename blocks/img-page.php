<?php
use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'fr' );
 
function fr_img_page() {
	Block::make( 'Página de imagem' )
		->add_fields( array(
			Field::make('rich_text', 'texto', 'Descrição'),
			Field::make('image', 'img', 'Imagem')
		) )
		->set_render_callback( function ( $block ) {
 
			// ob_start();
			?>
			<div id="img-page">
				<div class="img-page__btns">
					<?php if ($block['texto']) : ?>
					<div class="img-page__btns-btn">
						<div class="img-page__btns-btn__symbol">
							<span></span>
							<span></span>
						</div>
						INFORMAÇÕES
					</div>
					<?php endif; ?>
					<?php if ($block['texto']) : ?>
					<div class="img-page__btns-next-page">
						<?php  c2c_next_or_loop_post_link('%link', 'PRÓXIMO'); ?>
						<div class="img-page__btns-next-page__symbol">
						 	<span></span>
						 	<span></span>
						 	<span></span>
						</div>
					</div>
					<?php endif; ?>
					<?php if ($block['texto']) : ?>
					<div class="img-page__btns-btn-description">
						<?php echo $block['texto'] ?>					
					</div>
					<?php endif; ?>
				</div>
				<div class="img-page__img__img">
					<div class="img-page__img__img-item" style ="background-image: url('<?php echo wp_get_attachment_image_src($block['img'],'ap_image_desktop_full_no_crop')[0]; ?>');">
					</div>
				</div>
			</div>
			
			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'fr_img_page' );
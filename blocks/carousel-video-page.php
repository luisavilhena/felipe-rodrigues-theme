<?php
use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'fr' );
 
function fr_carousel_video_page() {
	Block::make( 'Página de carrossel com video' )
		->add_fields( array(
			Field::make('rich_text', 'texto', 'Descrição'),
			Field::make('complex', 'carousel', 'Carrossel')
			  ->add_fields(array(
			    Field::make('image', 'img', 'Imagem'),
			    Field::make('text', 'embed', 'Embed de video'),
			    Field::make('text', 'link', 'Link de video')
			  ))
			  ->set_layout('tabbed-vertical')
		) )
		->set_render_callback( function ( $block ) {
 
			// ob_start();
			?>
			<div id="carousel-page">
				<div class="carousel-page__btns">
					<?php if ($block['texto']) : ?>
					<div class="carousel-page__btns-btn">
						<div class="carousel-page__btns-btn__symbol">
							<span></span>
							<span></span>
						</div>
						INFORMAÇÕES
					</div>
					<?php endif; ?>
					<?php if ($block['texto']) : ?>
					<div class="carousel-page__btns-next-page">
						<?php  c2c_next_or_loop_post_link('%link', 'PRÓXIMO'); ?>
						<div class="carousel-page__btns-next-page__symbol">
						 	<span></span>
						 	<span></span>
						 	<span></span>
						</div>
					</div>
					<?php endif; ?>
					<?php if ($block['texto']) : ?>
					<div class="carousel-page__btns-btn-description">
						<?php echo $block['texto'] ?>					
					</div>
					<?php endif; ?>
				</div>
				<div class="carousel-page__carousel__img">
					<?php foreach ($block['carousel'] as $carousel) : ?>
						<?php if ($carousel['img']) : ?>
					<div class="carousel-page__carousel__img-item carousel-page__carousel__img-item--height carousel-page__carousel__img-item--zindex" style ="background-image: url('<?php echo wp_get_attachment_image_src($carousel['img'],'ap_image_desktop_full_no_crop')[0]; ?>');">
				
					</div>
					<?php endif; ?>
					<?php if ($carousel['embed']) : ?>
					<div class="carousel-page__carousel__img-item carousel-page__carousel__img-item--video">
						<?php echo $carousel['embed'] ?>		
					</div>
					<?php endif; ?>
					<?php endforeach;  ?>
				</div>
				<div class="carousel-page__carousel__sliders">
					<?php foreach ($block['carousel'] as $carousel) : ?>
						<?php if ($carousel['img']) : ?>
					<a href="<?php echo wp_get_attachment_image_src($carousel['img'],'ap_image_desktop_full_no_crop')[0]; ?>" class="carousel-page__carousel__sliders-item carousel-page__carousel__sliders-item--img" style ="background-image: url('<?php echo wp_get_attachment_image_src($carousel['img'],'ap_image_desktop_full_no_crop')[0]; ?>');">
					</a>
					<?php endif; ?>
					<?php if ($carousel['embed']) : ?>
					<a href="<?php echo $carousel['link'] ?>" target="_blank" class="carousel-page__carousel__sliders-item carousel-page__carousel__sliders-item--embed">
						<?php echo $carousel['embed'] ?>		
					</a>
					<?php endif; ?>
					<?php endforeach;  ?>
				</div>
			</div>
			
			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'fr_carousel_video_page' );
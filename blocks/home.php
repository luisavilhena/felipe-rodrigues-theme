<?php
add_image_size('ap_carousel_image_desktop_full_no_crop', 800 , 480, false);
add_image_size('ap_image_desktop_full_no_crop', 5000 , 3500, false);
add_image_size('ap_image_2_desktop_full_no_crop', 1100 , 1100, false);
add_image_size('ap_carousel_image_desktop_miniature_no_crop', 36, 32, false);
add_image_size('cc__thumbnail_a4_vertical_no_crop', 420, 560, false);
add_image_size('cc__thumbnail_a4_horizontal_crop', 560, 420, array('center', 'center'));
 
use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'fr' );
 
function fr_home() {
	Block::make( 'home' )
		->add_fields( array(
			Field::make('image', 'img_blackwhite', 'Imagem P&B'),
			Field::make('text', 'link', 'Link de próximo'),
			Field::make('rich_text', 'texto', 'Descrição'),
			Field::make('complex', 'carousel', 'Carrossel')
			  ->add_fields(array(
			    Field::make('image', 'img', 'Imagem')
			  ))
			  ->set_layout('tabbed-vertical')
		) )
		->set_render_callback( function ( $block ) {
 
			// ob_start();
			?>
			<div id="home">
				<div class="home__btns">
					<div class="home__btns-btn">
						<div class="home__btns-btn__symbol">
							<span></span>
							<span></span>
						</div>
						INFORMAÇÕES
					</div>
					<div class="home__btns-next-page">
						<a href="<?php echo $block['link'] ?>">PRÓXIMO</a>
						<div class="home__btns-next-page__symbol">
						 	<span></span>
						 	<span></span>
						 	<span></span>
						</div>
					</div>
					<div class="home__btns-btn-description">
						<?php echo $block['texto'] ?>					
					</div>
				</div>

				<div class="home__carousel__img">
					<?php foreach ($block['carousel'] as $carousel) : ?>
						<?php if ($carousel['img']) : ?>
					<div class="home__carousel__img-item" style ="background-image: url('<?php echo wp_get_attachment_image_src($carousel['img'],'ap_image_desktop_full_no_crop')[0]; ?>');">
				
					</div>
						<?php endif; ?>
					<?php endforeach;  ?>
				</div>
				<div class="home__carousel__sliders">
					<?php foreach ($block['carousel'] as $carousel) : ?>
						<?php if ($carousel['img']) : ?>
					<a href="<?php echo wp_get_attachment_image_src($carousel['img'],'ap_image_desktop_full_no_crop')[0]; ?>" class="home__carousel__sliders-item" style ="background-image: url('<?php echo wp_get_attachment_image_src($carousel['img'],'ap_image_desktop_full_no_crop')[0]; ?>');">
				
					</a>
						<?php endif; ?>
					<?php endforeach;  ?>
				</div>
				<div class="home__img-pb" style ="background-image: url('<?php echo wp_get_attachment_image_src($block['img_blackwhite'],'ap_image_desktop_full_no_crop')[0]; ?>');">
				</div>
			</div>
			
			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'fr_home' );
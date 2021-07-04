<?php
add_image_size('ap_carousel_image_desktop_full_no_crop', 800 , 480, false);
add_image_size('ap_image_desktop_full_no_crop', 1000 , 700, false);
add_image_size('ap_image_2_desktop_full_no_crop', 1100 , 1100, false);
add_image_size('ap_carousel_image_desktop_miniature_no_crop', 36, 32, false);
add_image_size('cc__thumbnail_a4_vertical_no_crop', 420, 560, false);
add_image_size('cc__thumbnail_a4_horizontal_crop', 560, 420, array('center', 'center'));
 
use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'fr' );
 
function fr_projeto() {
	Block::make( 'Projeto' )
		->add_fields( array(
			Field::make('image', 'img_blackwhite', 'Imagem P&B'),
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
			<div id="project">
				<div class="project__btns">
					<div class="project__btns-btn">
						<div class="project__btns-btn__symbol">
							<span></span>
							<span></span>
						</div>
						INFORMAÇÕES
					</div>
					<div class="project__btns-next-page">
					 <?php  c2c_next_or_loop_post_link('%link', 'PRÓXIMO'); ?>
					 <div class="project__btns-next-page__symbol">
					 	<span></span>
					 	<span></span>
					 	<span></span>
					 </div>
					</div>
					<div class="project__btns-btn-description">
						<?php echo $block['texto'] ?>					
					</div>
				</div>

				<div class="project__carousel__img">
					<?php foreach ($block['carousel'] as $carousel) : ?>
						<?php if ($carousel['img']) : ?>
					<div class="project__carousel__img-item" style ="background-image: url('<?php echo wp_get_attachment_image_src($carousel['img'],'ap_image_desktop_full_no_crop')[0]; ?>');">
				
					</div>
						<?php endif; ?>
					<?php endforeach;  ?>
				</div>
				<div class="project__carousel__sliders">
					<?php foreach ($block['carousel'] as $carousel) : ?>
						<?php if ($carousel['img']) : ?>
					<div class="project__carousel__sliders-item" style ="background-image: url('<?php echo wp_get_attachment_image_src($carousel['img'],'ap_image_desktop_full_no_crop')[0]; ?>');">
				
					</div>
						<?php endif; ?>
					<?php endforeach;  ?>
				</div>
				<div class="project__img-pb" style ="background-image: url('<?php echo wp_get_attachment_image_src($block['img_blackwhite'],'ap_image_desktop_full_no_crop')[0]; ?>');">
				</div>
			</div>
			
			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'fr_projeto' );
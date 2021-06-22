<?php
add_image_size('ap_carousel_image_desktop_full_no_crop', 800 , 480, false);
add_image_size('ap_image_desktop_full_no_crop', 1000 , 700, false);
add_image_size('ap_image_2_desktop_full_no_crop', 1100 , 1100, false);
add_image_size('ap_carousel_image_desktop_miniature_no_crop', 36, 32, false);
add_image_size('cc__thumbnail_a4_vertical_no_crop', 420, 560, false);
add_image_size('cc__thumbnail_a4_horizontal_crop', 560, 420, array('center', 'center'));
 
use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'tc' );
 
function tc_carousel() {
	Block::make( 'Carrossel' )
		->add_fields( array(
			Field::make('image', 'img_blackwhite', 'Imagem P&B'),
			Field::make('rich_text', 'texto', 'Imagem P&B'),
			Field::make('complex', 'carousel', 'Carrossel')
			  ->add_fields(array(
			    Field::make('image', 'img', 'Imagem')
			  ))
			  ->set_layout('tabbed-vertical')
		) )
		->set_render_callback( function ( $block ) {
 
			// ob_start();
			?>
			<div class="btn">
				+ INFORMAÇÕES
				<div>
					<?php echo $block['texto'] ?>					
				</div>
			</div>
			<div class="projeto__img-pb" style ="background-image: url('<?php echo wp_get_attachment_image_src($block['img_blackwhite'],'ap_image_desktop_full_no_crop')[0]; ?>');">
			</div>
 
			<div class="carousel">
				<?php foreach ($block['carousel'] as $carousel) : ?>
					<?php if ($carousel['img']) : ?>
				<div class="item" style ="background-image: url('<?php echo wp_get_attachment_image_src($carousel['img'],'ap_image_desktop_full_no_crop')[0]; ?>');">
			
				</div>
					<?php endif; ?>
				<?php endforeach;  ?>
			</div>
			<div class="sliders">
				<?php foreach ($block['carousel'] as $carousel) : ?>
					<?php if ($carousel['img']) : ?>
				<div class="item" style ="background-image: url('<?php echo wp_get_attachment_image_src($carousel['img'],'ap_image_desktop_full_no_crop')[0]; ?>');">
			
				</div>
					<?php endif; ?>
				<?php endforeach;  ?>
			</div>
			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'tc_carousel' );
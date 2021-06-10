<?php
/**
 * Plugin Name: Filmes
 * Text Domain: filmes
 */
 
use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'casa-do-estudante' );
 
function tc_block_title() {
	Block::make( 'Bloco de título' )
		->add_fields( array(
			Field::make( 'text', 'title_left_1', 'Título à esquerda 1' ),
			Field::make( 'text', 'color_1', 'Cor do título à esquerda 1' ),
			Field::make( 'text', 'title_left_2', 'Título à esquerda 2' ),
			Field::make( 'text', 'color_2', 'Cor do título à esquerda 2' ),
			Field::make( 'text', 'title_center', 'Título centralizado' ),
			Field::make( 'text', 'color_3', 'Cor do título centralizado' ),
			Field::make( 'text', 'title_right', 'Título à direita' ),
			Field::make( 'text', 'color_4', 'Cor do título à direita' ),
			Field::make( 'textarea', 'text', 'Descrição' ),

		) )
		->set_render_callback( function ( $block ) {
 
			// ob_start();
			?>
			<div class="block-title">
				<?php if($block['title_left_1']) : ?>
				<div class="block-title__left">
					<h2 style="color: <?php echo $block['color_1']; ?>"><?php echo  $block['title_left_1']; ?></h2>
				</div>
				<?php endif;  ?>
				<?php if($block['title_left_2']) : ?>
				<div class="block-title__left">
					<h1 style="color: <?php echo $block['color_2']; ?>"><?php echo  $block['title_left_2']; ?></h1>
				</div>
				<?php endif;  ?>
				<?php if($block['title_center']) : ?>
				<div class="block-title__center">
					<h1 style="color: <?php echo $block['color_3']; ?>"><?php echo  $block['title_center']; ?></h1>
				</div>
				<?php endif;  ?>
				<?php if($block['title_right']) : ?>
				<div class="block-title__right">
					<h1 style="color: <?php echo $block['color_4']; ?>"><?php echo  $block['title_right']; ?></h1>
				</div>
				<?php endif;  ?>
				<?php if ($block['text']) : ?>
				<div class="block-title__description">
					<p>
						<?php echo  $block['text']; ?>
					</p>
				</div>
			<?php endif; ?>
			</div>
 
			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'tc_block_title' );
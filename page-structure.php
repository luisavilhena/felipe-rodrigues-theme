
<?php
/*
Template Name: Estrutura de página padrão
*/
?>

<?php

get_header(); ?>

<?php while (have_posts()) : the_post(); ?>


<main id="page-template-page-structure"class="">
	<div class="page-template-page-structure__thumbnail">
		<?php the_post_thumbnail(); ?>
	</div>
	<div class="page-template-page-structure__template-adorno">
		<div class="page-template-page-structure__template-adorno-1"></div>
	</div>
	<div class="page-template-page-structure__content">
		<?php the_content(); ?>
	</div>

</main>
<?php endwhile; ?>

<?php
get_footer();
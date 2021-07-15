
<?php
/*
Template Name: Estrutura de página padrão
*/
?>

<?php

get_header(); ?>

<?php while (have_posts()) : the_post(); ?>


<main id="page-template-page-structure"class="">
	<h1 class="page-template-page-structure__title"><?php the_title();  ?></h1>
	<?php if (has_post_thumbnail()) : ?>
	<div class="page-template-page-structure__thumbnail">
		<div>
			<span></span>
			<span></span>
		</div>
		<?php the_post_thumbnail(); ?>
	</div>
	<?php endif; ?>
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
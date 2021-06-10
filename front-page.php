<?php

get_header(); ?>
<?php while (have_posts()) : the_post(); ?>

<main class="home-template">
	<div class="home-template__img">
		<img class=""
	      src="<?php echo get_template_directory_uri() ?>/resources/img/logo.png"
	  />
	</div>
</main>

<?php endwhile; ?>

<?php
get_footer();
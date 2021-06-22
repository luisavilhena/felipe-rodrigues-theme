<?php

get_header(); ?>
<?php while (have_posts()) : the_post(); ?>

<main class="">
	<div class="">
		<div class="">
		</div>
	</div>
  <h2><?php the_title(); ?></h2>
  <div><?php the_excerpt(); ?></div>
  <?php the_content(); ?>
</main>
<?php endwhile; ?>

<?php
get_footer();
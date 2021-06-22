<?php

get_header(); ?>
<?php while (have_posts()) : the_post(); ?>

<main class="home-template">
	<div class="home-template__img">
	</div>
</main>

<?php endwhile; ?>

<?php
get_footer();
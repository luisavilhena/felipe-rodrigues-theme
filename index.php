<?php

get_header(); ?>
<?php while (have_posts()) : the_post(); ?>

<main class="publication">
	<?php the_content(); ?>
</main>
<?php endwhile; ?>


<?php
get_footer();

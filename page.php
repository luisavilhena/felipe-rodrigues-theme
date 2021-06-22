<?php

get_header(); ?>

<?php while (have_posts()) : the_post(); ?>


<main id="template"class="">
	<div class="">
	</div>
	<?php the_content(); ?>

</main>
<?php endwhile; ?>

<?php
get_footer();

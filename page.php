<?php

get_header(); ?>

<?php while (have_posts()) : the_post(); ?>


<main id="template"class="">
	<div class="template-content">
		<?php the_content(); ?>
	</div>

</main>
<?php endwhile; ?>

<?php
get_footer();

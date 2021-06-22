<?php

get_header(); ?>

<?php while (have_posts("Projetos")) : the_post("Projetos"); ?>


<main id="projetos"class="">
	<div class="">
		 <?php the_content(); ?>

	</div>

</main>
<?php endwhile; ?>

<?php
get_footer();

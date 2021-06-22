<?php

get_header(); ?>

<main class="">
	<div class="">
		<h1 class="">BLOG</h1>
	</div>
	<div class="blog-list">
		<?php while (have_posts()) : the_post(); ?>
		<a href="<?php the_permalink(); ?>" class="blog-list-item">
		  <span class="decoration decoration-sm"></span>
		  <h2 class="">
		    <?php the_title(); ?>
		  </h2>
		</a>
		<?php endwhile; ?>
	</div>

</main>


<?php
get_footer();

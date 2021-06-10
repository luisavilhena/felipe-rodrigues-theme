<?php

get_header(); ?>

<main class="template-casa-do-estudante blog">
	<div class="template-casa-do-estudante__header">
		<h1 class="template-casa-do-estudante__header__title">BLOG</h1>
	</div>
	<span class="decoration decoration-bg"></span>
	<div class="blog-list">
		<?php while (have_posts()) : the_post(); ?>
		<a href="<?php the_permalink(); ?>" class="blog-list-item">
			<div class="blog-list-item-img">
				<?php the_post_thumbnail('ap_carousel_image_desktop_full_no_crop'); ?>
			</div>
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

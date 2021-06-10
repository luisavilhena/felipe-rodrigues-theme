<?php

get_header(); ?>
<?php while (have_posts()) : the_post(); ?>

<main class="template-casa-do-estudante blog-single">
	<div class="template-casa-do-estudante__header">
		<div class="template-casa-do-estudante__header__btn">
			<?php require('resources/icons/arrow_blog.svg'); ?>
			<Input type = "button" onclick = "document.location.href = 'blog';">
		</div>
	  <h1 class="template-casa-do-estudante__header__title">BLOG</h1>
	</div>
  <span class="decoration decoration-bg"></span>
  <h2><?php the_title(); ?></h2>
  <div class="blog-single__excerpt"><?php the_excerpt(); ?></div>
  <?php the_content(); ?>
</main>
<?php endwhile; ?>

<?php
get_footer();
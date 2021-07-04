<?php

get_header(); ?>
<?php while (have_posts("projetos")) : the_post("projeto"); ?>

<main class="projeto">
  <?php the_content(); ?>
</main>
<?php endwhile; ?>

<?php
get_footer();
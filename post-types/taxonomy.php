<?php

add_action('init', function () {
  register_taxonomy(
    'cc_partner_category',
    array('cc_partner'),
    array(
      'labels' => array(
        'name' => 'Categorias de parceiros',
        'search_items' => 'Buscar categorias',
        'all_items' => 'Todas as categorias',
        'update_item' => 'Atualizar categoria',
        'add_new_item' => 'Cadastrar nova categoria',
        'new_item_name' => 'Nome do nova categoria',
      ),
      'public' => true,
      'hierarchical' => true,
      'show_in_rest' => true,
      'post_type' => true,
      'rewrite' => array(
        'slug' => 'categoria-de-parceiros',
      )
    )
  );
});

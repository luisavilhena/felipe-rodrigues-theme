<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

add_action('init', function () {
  register_post_type('cc_partner', array(
    'labels' => array(
      'name' => 'Parceiros',
      'singular_name' => 'Parceiro',
      'add_new' => 'Cadastrar novo',
      'add_new_item' => 'Cadastrar novo parceiro',
      'edit_item' => 'Editar parceiro',
      'new_item' => 'Novo parceiro',
      'view_item' => 'Visualizar parceiro',
      'view_items' => 'Visualizar parceiros',
      'search_items' => 'Buscar parceiros',
    ),
    'description' => 'Parceiros cadastrados',
    'public' => true,
    'hierarchical' => true,
    'exclude_from_search' => false,
    'supports' => array(
      'title',
      // 'editor',
      // 'revisions',
      // 'excerpt',
      'thumbnail',
    ),
    'has_archive' => true,
    'rewrite' => array(
      'slug' => 'parceiros',
    ),
    'show_in_rest' => true
  ));
});

Container::make('post_meta', 'Informações do parceiro')
  ->where('post_type', '=', 'cc_partner')
  ->add_fields(array(
    Field::make('textarea', 'cc_partner__location', 'Localização'),
  ));

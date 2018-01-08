<?php
/*
Plugin Name: 	eCalculator
Plugin URI: 	<Plugin URL>
Description: 	calculator
Version 		1.0
Author: 		Clyfe
Author URI: 	<Plugin Author URL>
License:		GPL2

Copyright 2017 eCalculator

eCalculator is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.
 
eCalculator is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with eCalculator.
*/

add_action('wp_enqueue_scripts', 'plugin_styles');

function plugin_styles() {
    wp_enqueue_style('MyPluginStyles', plugins_url('/style.css', __FILE__));
}

add_action('wp_enqueue_scripts', 'plugin_scripts');

function plugin_scripts() {
	wp_enqueue_script('MyPluginScripts', plugins_url('/scripts.js', __FILE__), array('jquery'), false, true);
}

function load_jquery_ui_google_cdn() {
    global $wp_scripts;
 
    wp_enqueue_script('jquery-ui-core');
    wp_enqueue_script('jquery-ui-slider');
 
    // get the jquery ui object
    $queryui = $wp_scripts->query('jquery-ui-core');
 
    // load the jquery ui theme
    $url = "http://ajax.googleapis.com/ajax/libs/jqueryui/".$queryui->ver."/themes/smoothness/jquery-ui.css";
    wp_enqueue_style('jquery-ui-smoothness', $url, false, null);
}
 
add_action('wp_enqueue_scripts', 'load_jquery_ui_google_cdn');
function eCalculator_order_function() {
    $shortcode = '<div id="slider_1"><div id="custom-handle" class="ui-slider-handle"></div></div>';

    return $shortcode;
}


add_shortcode('eCalculator_order', 'eCalculator_order_function');

function eCalculator_orderRegels_function() {
    $shortcode_2 = '<div id="slider_2"><div id="custom-handle-regels" class="ui-slider-handle"></div></div>';

    return $shortcode_2;
}


add_shortcode('eCalculator_orderRegels', 'eCalculator_orderRegels_function');

function eCalculator_pallets_function() {
    $shortcode_3 = '<div id="slider_3"><div id="custom-handlePallet" class="ui-slider-handle"></div></div>';

    return $shortcode_3;
}


add_shortcode('eCalculator_pallets', 'eCalculator_pallets_function');

function eCalculator_sku_function() {
    $shortcode_4 = '<div id="slider_4"><div id="custom-handleSkus" class="ui-slider-handle"></div></div>';

    return $shortcode_4;
}


add_shortcode('eCalculator_sku', 'eCalculator_sku_function');

function eCalculator_handelingen_function() {
    $shortcode_5 = '<input id="handelingen"></input>';

    return $shortcode_5;
}


add_shortcode('eCalculator_handelingen', 'eCalculator_handelingen_function');

function eCalculator_result_function() {
    $shortcode_6 = '<input id="opslag"></input>';

    return $shortcode_6;
}


add_shortcode('eCalculator_result', 'eCalculator_result_function');
?>
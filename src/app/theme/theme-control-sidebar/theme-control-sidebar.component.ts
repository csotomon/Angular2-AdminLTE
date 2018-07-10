import { Component, OnInit } from '@angular/core';
import { } from 'jquery';

@Component({
  selector: 'app-theme-control-sidebar',
  templateUrl: './theme-control-sidebar.component.html',
  styleUrls: ['./theme-control-sidebar.component.css']
})
export class ThemeControlSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const $sidebar = jQuery('.control-sidebar');
    const $container = jQuery('<div />', {
      class: 'p-3'
    });

    $sidebar.append($container);

    const navbar_dark_skins = [
      'bg-primary',
      'bg-info',
      'bg-success',
      'bg-danger'
    ];

    const navbar_light_skins = [
      'bg-warning',
      'bg-white',
      'bg-gray-light'
    ];

    $container.append(
      '<h5>Customize AdminLTE</h5><hr class="mb-2"/>'
      + '<h6>Navbar Variants</h6>'
    );

    const $navbar_variants = $('<div />', {
      'class': 'd-flex'
    });

    const navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins);
    const $navbar_variants_colors = this.createSkinBlock(navbar_all_colors, function (e) {
      const color = jQuery(this).data('color');
      console.log('Adding ' + color);
      const $main_header = jQuery('.main-header');
      $main_header.removeClass('navbar-dark').removeClass('navbar-light');
      navbar_all_colors.map(function (col) {
        $main_header.removeClass(col);
      });

      if (navbar_dark_skins.indexOf(color) > -1) {
        $main_header.addClass('navbar-dark');
        console.log('AND navbar-dark');
      } else {
        console.log('AND navbar-light');
        $main_header.addClass('navbar-light');
      }

      $main_header.addClass(color);
    });

    $navbar_variants.append($navbar_variants_colors);

    $container.append($navbar_variants);

    const $checkbox_container = $('<div />', {
      'class': 'mb-4'
    });
    const $navbar_border = $('<input />', {
      type: 'checkbox',
      value: 1,
      checked: $('.main-header').hasClass('border-bottom'),
      'class': 'mr-1'
    }).on('click', function () {
      if ($(this).is(':checked')) {
        $('.main-header').addClass('border-bottom');
      } else {
        $('.main-header').removeClass('border-bottom');
      }
    });

    $checkbox_container.append($navbar_border);
    $checkbox_container.append('<span>Navbar border</span>');
    $container.append($checkbox_container);

    const sidebar_colors = [
      'bg-primary',
      'bg-warning',
      'bg-info',
      'bg-danger',
      'bg-success'
    ];

    const sidebar_skins = [
      'sidebar-dark-primary',
      'sidebar-dark-warning',
      'sidebar-dark-info',
      'sidebar-dark-danger',
      'sidebar-dark-success',
      'sidebar-light-primary',
      'sidebar-light-warning',
      'sidebar-light-info',
      'sidebar-light-danger',
      'sidebar-light-success'
    ];

    $container.append('<h6>Dark Sidebar Variants</h6>');
    const $sidebar_variants = $('<div />', {
      'class': 'd-flex'
    });

    $container.append($sidebar_variants);
    $container.append(this.createSkinBlock(sidebar_colors, function () {
      const color = $(this).data('color');
      const sidebar_class = 'sidebar-dark-' + color.replace('bg-', '')
      const $sidebar_ = jQuery('.main-sidebar');
      sidebar_skins.map(function (skin) {
        $sidebar_.removeClass(skin);
      });
      $sidebar_.addClass(sidebar_class);
    }));

    $container.append('<h6>Light Sidebar Variants</h6>')
    const $sidebar_variants_ = jQuery('<div />', {
      'class': 'd-flex'
    });
    $container.append($sidebar_variants_);
    $container.append(this.createSkinBlock(sidebar_colors, function () {
      const color = jQuery(this).data('color');
      const sidebar_class = 'sidebar-light-' + color.replace('bg-', '')
      const $sidebar_ = jQuery('.main-sidebar');
      sidebar_skins.map(function (skin) {
        $sidebar_.removeClass(skin);
      });

      $sidebar_.addClass(sidebar_class);
    }));

    const logo_skins = navbar_all_colors;
    $container.append('<h6>Brand Logo Variants</h6>');
    const $logo_variants = jQuery('<div />', {
      'class': 'd-flex'
    });
    $container.append($logo_variants);
    const $clear_btn = jQuery('<a />', {
      href: 'javascript:void(0)'
    }).text('clear').on('click', function () {
      const $logo = jQuery('.brand-link');
      logo_skins.map(function (skin) {
        $logo.removeClass(skin);
      });
    });

    $container.append(this.createSkinBlock(logo_skins, function () {
      const color = jQuery(this).data('color');
      const $logo = jQuery('.brand-link');
      logo_skins.map(function (skin) {
        $logo.removeClass(skin);
      });
      $logo.addClass(color);
    }).append($clear_btn));
  }

  createSkinBlock(colors, callback) {
    const $block = $('<div />', {
      'class': 'd-flex flex-wrap mb-3'
    });

    colors.map(function (color) {
      const $color = $('<div />', {
        'class': (typeof color === 'object' ? color.join(' ') : color) + ' elevation-2'
      });

      $block.append($color);

      $color.data('color', color);

      $color.css({
        width: '40px',
        height: '20px',
        borderRadius: '25px',
        marginRight: 10,
        marginBottom: 10,
        opacity: 0.8,
        cursor: 'pointer'
      });

      $color.hover(function () {
        $(this).css({ opacity: 1 }).removeClass('elevation-2').addClass('elevation-4');
      }, function () {
        $(this).css({ opacity: 0.8 }).removeClass('elevation-4').addClass('elevation-2');
      });

      if (callback) {
        $color.on('click', callback);
      }
    })

    return $block;
  }

}

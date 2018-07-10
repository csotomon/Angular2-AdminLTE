//receive calls from typescript code to update the layouts
var AdminLTE = (function () {
  return {
    init: function (text) {
      $(function (){
        console.log('hola mundo cruel:' + text);
        var $layout = $('body').data('lte.layout');
        console.log('layout:' + JSON.stringify($layout));
      });
      /*
      $(function () {
        var $pushMenu = $('[data-toggle="push-menu"]').data('lte.pushmenu');
        var $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar');
        var $layout = $('body').data('lte.layout');
          $layout.fixSidebar();
        if ($('body').hasClass('fixed') && cls == 'fixed') {
          $pushMenu.expandOnHover()
          $layout.activate()
        }
        $controlSidebar.fix()
      });*/
    },
    loadWysihtml5: (selector)=>{
      return $(selector).wysihtml5();
    },
    loadSparkline: (selector, values, options)=>{
      return $(selector).sparkline(values, options);
    },
    loadVectorMap: (selector, options) => {
      return $(selector).vectorMap(options);
    }

  }
})(AdminLTE || {});

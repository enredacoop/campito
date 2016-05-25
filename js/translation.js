$(document).ready(function(){
  
  i18n.init({ preload: ['en', 'es'], debug: true, detectLngQS: 't', fallbackLng:'es' }, function() {
      // save to use translation function as resources are fetched
     $('[data-i18n]').i18n();          
  });

	 $('.lang').click(function () {
        var lang = $(this).attr('data-lang');
        i18n.setLng(lang, function() { $('[data-i18n]').i18n(); });
    });

});

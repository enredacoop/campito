$(document).ready(function(){
  
  i18n.init({ preload: ['en', 'es'], debug: true, detectLngQS: 't', fallbackLng:'es' }, function() {
    // save to use translation function as resources are fetched
    $('[data-i18n]').i18n();          
  });

  $('#changelang').click(function () {
    var lang = $(this).attr('data-lang');
    var name = '';
    i18n.setLng(lang, function() { $('[data-i18n]').i18n(); });
    if (lang == 'es') {
      lang = 'en';
      name = 'English';
    } else {
      lang = 'es';
      name = 'Spanish';
    }
    $(this).attr('data-lang', lang);
    $(this).html(name);
  });

});

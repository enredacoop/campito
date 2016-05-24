$(document).ready(function(){
  /*language_complete = navigator.language.split("-");
	*/

  i18n.init({ preload: ['en', 'es'], debug: true, detectLngQS: 't' }, function() {
      // save to use translation function as resources are fetched
      $('.nav').i18n();
      $('.container').i18n();
      $('.text').i18n();
      $('.info').i18n();
   
          
  });
});

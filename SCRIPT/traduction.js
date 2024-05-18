<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


$(document).ready(function() {
    $('.language').click(function(event) {
      event.preventDefault();
      const lang = $(this).data('lang');
      translatePage(lang);
    });
  });
  
  function translatePage(lang) {
    googleTranslateElementInit(lang);
  }
  
  function googleTranslateElementInit(lang) {
    new google.translate.TranslateElement({pageLanguage: 'auto', includedLanguages: lang, layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  }
 
  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  
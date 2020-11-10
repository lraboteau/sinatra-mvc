define(["jquery", "bootstrap", "bundle"], function($) {
  
  var example = {
    /* Hello */
    hello: function(){
      $(document).ready(function() {
        alert('Hello world!');
      });
    },

    init: function(){
      this.hello();
    }

  };

  example.init();
});
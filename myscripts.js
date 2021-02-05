//Overlay

function on() {
    overlay.style.display = "flex";
  }
  
  function off() {
    overlay.style.display = "none";
  }

  //Shuttle 1
  jQuery(document).ready(function(){

    jQuery('#shuttle1').on('click', function(event) {        
        jQuery('#lob').delay(300).show(300);
        jQuery('#net').delay(300).show(300);
        jQuery('#show-all').delay(10).show(300);
        jQuery('#info').hide(300);
        jQuery('#shuttle2').hide(300);
        jQuery('#shuttle3').hide(300);
    });

    
    //Lob
    $('#lob').on({
      mousedown: function(){
        $('.lob-shot').show();
        $('.lob-shot').addClass('changing-lob');
    },
    mouseleave: function(){
        $('.lob-shot').removeClass('changing-lob');
        $('.lob-shot').hide();
    }
});


    //Net
    $('#net').on({
      mousedown: function(){
        $('.net-shot').show();
        $('.net-shot').addClass('changing-net');
    },
    mouseleave: function(){
        $('.net-shot').removeClass('changing-net');
        $('.net-shot').hide();
    }
});

    //Shuttle 2
    jQuery('#shuttle2').on('click', function(event) {        
      jQuery('#smash').delay(300).show(300);
      jQuery('#drive').delay(300).show(300);
      jQuery('#show-all').delay(10).show(300);
      jQuery('#info').hide(300);
      jQuery('#shuttle1').hide(300);
      jQuery('#shuttle3').hide(300);
  });

  //Smash
  $('#smash').on({
    mousedown: function(){
      $('.smash-shot').show();
      $('.smash-shot').addClass('changing-smash');
  },
  mouseleave: function(){
      $('.smash-shot').removeClass('changing-smash');
      $('.smash-shot').hide();
  }
});

//Drive
$('#drive').on({
  mousedown: function(){
    $('.drive-shot').show();
    $('.drive-shot').addClass('changing-drive');
},
mouseleave: function(){
    $('.drive-shot').removeClass('changing-drive');
    $('.drive-shot').hide();
}
});

    //Shuttle 3
    jQuery('#shuttle3').on('click', function(event) {        
      jQuery('#drop').delay(300).show(300);
      jQuery('#clear').delay(300).show(300);
      jQuery('#show-all').delay(10).show(300);
      jQuery('#info').hide(300);
      jQuery('#shuttle1').hide(300);
      jQuery('#shuttle2').hide(300);
  });

  //Drop
  $('#drop').on({
    mousedown: function(){
      $('.drop-shot').show();
      $('.drop-shot').addClass('changing-drop');
  },
  mouseleave: function(){
      $('.drop-shot').removeClass('changing-drop');
      $('.drop-shot').hide();
  }
  });

//Clear
$('#clear').on({
  mousedown: function(){
    $('.clear-shot').show();
    $('.clear-shot').addClass('changing-clear');
},
mouseleave: function(){
    $('.clear-shot').removeClass('changing-clear');
    $('.clear-shot').hide();
}
});

});

$(function() {

  $("#bt1").on("click",function(){      
   
   $( "#dialog").html("");
   var files = [ "file1","file2","file3" ]

   for(var i = 0; i < files.length;i++){    
       $( "<div><input type=\"checkbox\"/>&nbsp;"+files[i]+"</div>" ).appendTo($( "#dialog"))
    }

     $( "#dialog").dialog();     
    });



/*        $.widget( "custom.progressbar", {
     
        // Default options.
        options: {
            value: 0
        },
        _create: function() {
            var progress = this.options.value + "%";
            this.element
                .addClass( "progressbar" )
                .text( progress );
        }
        });*/
   

     
});



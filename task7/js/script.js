$(function() {

       $.widget( "custom.igorWidget", {
     
        // Default options.
        options: {
            value: 0,
            files : [ "file1","file2","file3" ]
        },

        _create: function() {

             var files = this.options.files;

             for(var i = 0; i < files.length;i++){    
                $( "<div><input type=\"checkbox\"/>&nbsp;"+files[i]+"</div>" ).appendTo($( "#dialog"))
             }

              $( "#dialog").dialog(); 
        }

        });
   

        $(".igorWidget").igorWidget();
     
});



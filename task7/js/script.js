$(function() {

       $.widget( "custom.igorWidget", {
            
        options: {           
            files : [ "file1","file2","file3" ]
        },

        _create: function() {
             var files = this.options.files;             
             $("<div id=\"dialog\" style=\"display: none;\"></div>").appendTo($( "body"));
             for(var i = 0; i < files.length;i++){    
                $( "<div><input type=\"checkbox\"/>&nbsp;"+files[i]+"</div>" ).appendTo($( "#dialog"))
             }
              $( "#dialog").dialog(); 
        },

        setValue: function( value ) {         
           console.log("set value " + value);
        },

        getValue: function(  ) {
           console.log("get value ");
        },

        onValueChanged: function(  ) {
           console.log("onValueChanged ");
        },

        });
   

        $(".igorWidget").igorWidget();
     
});



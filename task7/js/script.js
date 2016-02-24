$(function() {

       $.widget( "custom.igorWidget", {
            
            options: {           
                list : [ "file1","file2","file3" ],
                selected : ["file1","file2"]
            },

            _create: function() {
                 var list = this.options.list;             
                 $("<div id=\"dialog\" style=\"display: none;\"></div>").appendTo($( "body"));
                 for(var i = 0; i < list.length;i++){    
                    $( "<div><input type=\"checkbox\"/>&nbsp;"+list[i]+"</div>" ).appendTo($( "#dialog"))
                 }
                  $( "#dialog").dialog(); 
            },

            setList: function( value ) {         
               console.log("set value " + value);
               this.options.list = value;
            },

            getList: function(  ) {
               console.log("get value ");
                return this.options.list;
              
            },

            setSelected: function( value ) {         
               console.log("set value " + value);
               this.options.selected = value;
            },

            getSelected: function(  ) {
               console.log("get value ");
                return this.options.selected;
              
            },

            onValueChanged: function(  ) {
               console.log("onValueChanged ");
            },

            _destroy: function () {  
               console.log("destroy ");        
            }

        });


      $(".igorWidget").igorWidget();
      $(".igorWidget").igorWidget("setList", [ "file111","file222","filezzzzz" ]);
      $(".igorWidget").igorWidget("setSelected", [ "file111","file222"]);


        
          /*angular.element($("filelist")).scope().createWidget();    */
    

     
});



$(function() {

       $.widget( "custom.igorWidget", {
            
            options: {           
                list : [ "file1","file2","file3" ],
                selected : ["file1","file2"],
                widgetClass : ""
            },


            setList: function( value ) {                        
               this.options.list = value;
            },

            getList: function(  ) {
                return this.options.list;              
            },

            setSelected: function( value ) {         
               this.options.selected = value;
            },

            getSelected: function(  ) {
                return this.options.selected;
              
            },


            setWidgetClass: function( value ) {         
               this.options.widgetClass = value;
            },

            getWidgetClass: function(  ) {
                return this.options.widgetClass;
              
            },

            onValueChanged: function(value) {               
               var isConsist = false;
               for(var i =0;i<this.options.selected.length;i++){
                   if(this.options.selected[i]==value){
                   this.options.selected.splice( i, 1 );                                   
                      isConsist = true;
                      break;
                   }
               }

               if(!isConsist){
                   this.options.selected.push(value);
               }        
               console.log(this.options.selected.join(" |,| "));       
            },

            refresh: function() {
                var list = this.options.list;
                var isChecked="";             
                 $("<div id=\"dialog"+this.options.widgetClass+"\" style=\"display: none;\"></div>").appendTo($( "body"));
                 for(var i = 0; i < list.length;i++){  
                 if($.inArray(list[i], this.options.selected)!=-1){
                      isChecked = "checked='checked'";
                 } else{
                    isChecked = "";
                 } 
                    $( "<div><input type=\"checkbox\"/ "+isChecked+" onclick=\"$('."+this.options.widgetClass+"').igorWidget('onValueChanged','"+list[i]+"')\">&nbsp;"+list[i]+"</div>" ).appendTo($( "#dialog"+this.options.widgetClass))
                 }
                  $( "#dialog"+this.options.widgetClass).dialog();

           }


        });


      $(".igorWidget").igorWidget();
      $(".igorWidget").igorWidget("setWidgetClass","igorWidget");
      $(".igorWidget").igorWidget("setList", [ "File1","File2","File3","File4","File5","File6","File7","File8","File9" ]);
      $(".igorWidget").igorWidget("setSelected", [ "File1","File2","File5","File8","File9" ]);
      $(".igorWidget").igorWidget("refresh");


    $(".igorWidget2").igorWidget();
      $(".igorWidget2").igorWidget("setWidgetClass","igorWidget2");
      $(".igorWidget2").igorWidget("setList", [ "File11","File22","File33","File44","File55","File66","File77","File88","File99" ]);
      $(".igorWidget2").igorWidget("setSelected", [ "File11","File22","File55","File88","File99" ]);
      $(".igorWidget2").igorWidget("refresh");

        
          /*angular.element($("filelist")).scope().createWidget();    */
    

     
});



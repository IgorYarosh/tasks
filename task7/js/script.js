$(function() {

       $.widget( "custom.igorWidget", {
            
            options: {           
                list : [ "file1","file2","file3" ],
                selected : ["file1","file2"]
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
                 $("<div id=\"dialog\" style=\"display: none;\"></div>").appendTo($( "body"));
                 for(var i = 0; i < list.length;i++){  
                 if($.inArray(list[i], this.options.selected)!=-1){
                      isChecked = "checked='checked'";
                 } else{
                    isChecked = "";
                 } 
                    $( "<div><input type=\"checkbox\"/ "+isChecked+" onclick=\"$('.igorWidget').igorWidget('onValueChanged','"+list[i]+"')\">&nbsp;"+list[i]+"</div>" ).appendTo($( "#dialog"))
                 }
                  $( "#dialog").dialog();

           }


        });


      $(".igorWidget").igorWidget();
      $(".igorWidget").igorWidget("setList", [ "File1","File2","File3","File4","File5","File6","File7","File8","File9" ]);
      $(".igorWidget").igorWidget("setSelected", [ "File1","File2","File5","File8","File9" ]);
      $(".igorWidget").igorWidget("refresh");


        
          /*angular.element($("filelist")).scope().createWidget();    */
    

     
});



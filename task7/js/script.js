$(function() {

       $.widget( "custom.igorWidget", {
            
            options: {           
                list : [ "file1","file2","file3" ],
                selected : ["file1","file2"]
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

            onValueChanged: function(value) {               
               var isConsist = false;
               console.log("onValueChanged " + value);
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
               console.log("onValueChanged " + this.options.selected);
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

           },

            _destroy: function () {  
               console.log("destroy ");        
            }

        });


      $(".igorWidget").igorWidget();
      $(".igorWidget").igorWidget("setList", [ "file111","file222","filezzzzz" ]);
      $(".igorWidget").igorWidget("setSelected", [ "file111","file222"]);
      $(".igorWidget").igorWidget("refresh");


        
          /*angular.element($("filelist")).scope().createWidget();    */
    

     
});



       $.widget( "custom.igorWidget", {
            
/*             options: {              
                 list : [ "file1","file2","file3" ],   
                 selected : ["file1","file2"]                   
             },*/

            _create: function () {

              var dlg = $("<div style=\"display: none;\"></div>");
              this.element.html(dlg);
              
              var list = this.options.list;
              var isChecked=""; 
              for(var i = 0; i < list.length;i++){  
               if($.inArray(list[i], this.options.selected)!=-1){
                    isChecked = "checked='checked'";
               } else{
                  isChecked = "";
               } 
                  $( "<div><input class=\"igorWidgetCheckbox\" type=\"checkbox\"/ "+isChecked+" value='"+list[i]+"' >&nbsp;"+list[i]+"</div>" )
                  .appendTo(dlg)
               }

                dlg.dialog();

                     
                this._on('.igorWidgetCheckbox', {
                    click: function(event) {   
                    this.onValueChanged(event.target.value)                     
                        this._trigger( "cb", event, {
                          list: this.options.list,
                          selected: this.options.selected
                        });

                    }
                });

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
             
            },
/*             setList: function( value ) {                           
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
                   
              }*/


        });



    

     




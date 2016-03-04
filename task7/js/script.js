       $.widget( "custom.igorWidget", {
            


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
                      this.onValueChanged(event.target.value);                     
                      this._trigger( "cb", event, this.options.list, this.options.selected);
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
             
            }



        });



    

     




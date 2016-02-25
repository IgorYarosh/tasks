       $.widget( "custom.igorWidget", {
            
            options: {           
                list : [ "file1","file2","file3" ],
                selected : ["file1","file2"],               
            },

            _create: function () {


              console.log(2);
              var list = this.options.list;
              var isChecked="";             
              var dlg = $("<div style=\"display: none;\"></div>").appendTo("body");
              for(var i = 0; i < list.length;i++){  
               if($.inArray(list[i], this.options.selected)!=-1){
                    isChecked = "checked='checked'";
               } else{
                  isChecked = "";
               } 
                  $( "<div><input class=\"ddd\" type=\"checkbox\"/ "+isChecked+">&nbsp;"+list[i]+"</div>" )
                  .appendTo(dlg)
               }
                console.log(3);
                dlg.dialog();


                this._on('.ddd', {
                    click: function(event) {
                        console.log("ddd");
                        this._trigger( "complete" );

                    }
                });
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
/*               var isConsist = false;
               for(var i =0;i<this.options.selected.length;i++){
                   if(this.options.selected[i]==value){
                   this.options.selected.splice( i, 1 );                                   
                      isConsist = true;
                      break;
                   }
               }

               if(!isConsist){
                   this.options.selected.push(value);
               }*/        
               //console.log(this.options.selected.join(" |,| "));       
               console.log(1);       
            },

            refresh: function() {



           }
//$("+element+").igorWidget(\"onValueChanged\", \"File1\");
  //    this.onValueChanged("+list[i]+"
        });



    

     




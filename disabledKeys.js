
var disabledkey=function(keys){
	
	this.keys={
		ctrlKey:convertKeytoCode(keys.ctrl),
		shiftKey:convertKeytoCode(keys.shift),
		keyAbout:convertKeytoCode(keys.Fkey,'Fkey')
	}

	this._disabledKeyPress=function(evt){		
		evt.preventDefault();     
		evt.stopPropagation();                     
	},

	this._ctrlkeyPress=function(evt){     	
		if(this.keys.ctrlKey.indexOf(evt.keyCode)!=-1){					
		    this._disabledKeyPress(evt);
		}
	},

	this._shiftKeyPress=function(evt){
		if(this.keys.shiftKey.indexOf(evt.keyCode)!=-1){
			this._disabledKeyPress(evt);				  
		}
	},			

	this._fnKeyPress=function(evt){
		if(this.keys.keyAbout.indexOf(evt.keyCode)!=-1){
			this._disabledKeyPress(evt);				  
		}
	}

	this.runDisabled=function(){		
		document.onkeydown = function(evt){
		    evt = evt || window.event;  		    		    		   
		    this._fnKeyPress(evt);
		    if(evt.ctrlKey){         
		      this._ctrlkeyPress(evt);
		      if(evt.shiftKey) {
		        this_shiftKeyPress(evt);
		      }      
		  	}
		}.bind(this);
	};

	function convertKeytoCode(ArrayCode,cod){
		var convertArray=[];
		var Fkeys={'F1':112,"F2":113,"F3":114,"F4":115,"F5":116,"F6":117,"F7":118,"F8":119,"F9":120,"F10":121,"F11":122,"F12":123}
		if(cod!='Fkey'){
			for(index in ArrayCode){
				convertArray.push(ArrayCode[index].toUpperCase().charCodeAt(0));
			}
		}else{
			for(index in ArrayCode){				
				convertArray.push(Fkeys[ArrayCode[index]]);
			}
		}		
		return convertArray;
	}
};


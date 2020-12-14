function animate(obj, json, callback){
	if(obj.isMoving == true){
		return;
	} else {
		obj.isMoving = true;	
	}
	clearTimer();//清除所有定时器
	
	obj.timerlist = {};
	//为每一个属性添加一个定时器
	for(var attr in json){
		(function(attr){
			obj.timerlist[attr] = setInterval(function(){
				//首先得到当前值
				if(attr == "opacity"){
					iNow = parseInt( parseFloat(getStyle(obj, attr)) * 100 ); 
				} else {
					iNow = parseInt( getStyle(obj, attr) );
				}
				//根据目标值，计算需要的速度
				speed = (json[attr] - iNow)/8;
				speed > 0 ? speed=Math.ceil(speed) : speed=Math.floor(speed);
				
				//当到达目标值时，停止定时器
				if(iNow == json[attr]){
					clearInterval(obj.timerlist[attr]);
					delete obj.timerlist[attr];
					if(getObjLength(obj.timerlist)==0){//所有定时器已停止
						obj.isMoving = false;
						callback ? callback() : "";
					}
				} else {
					//根据速度，修改当前值
					if(attr == "opacity"){
						obj.style.opacity = (iNow+speed)/100;
						obj.style.filter = 'alpha(opacity=' + parseInt(iNow+speed) + ')';			
					} else {
						obj.style[attr] = iNow+speed+"px";
					}
				}
			}, 30);
		})(attr);
	}
	
	function clearTimer(){
		for(var i in obj.timerlist){
			clearInterval(obj.timerlist[i]);
		}
	}
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return isNaN(parseFloat(obj.currentStyle[attr])) ? obj.style[attr]=0 : obj.currentStyle[attr];
		} else {
			return isNaN(parseFloat(getComputedStyle(obj, null)[attr])) ? obj.style[attr]=0 : getComputedStyle(obj, null)[attr];
		}
	}
	function getObjLength(obj){
		var n = 0;
		for(var i in obj){
			n++;
		}
		return n;
	}
}

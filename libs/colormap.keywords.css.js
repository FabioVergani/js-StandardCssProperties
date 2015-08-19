/*
var colormap={
 keywords:{
	css:{//long:
	 'maroon':'800000','red':'ff0000','orange':'ffa500','yellow':'ffff00','olive':'808000',
	 'purple':'800080','fuchsia':'ff00ff','white':'ffffff','lime':'00ff00','green':'008000',
	 'navy':'000080','blue':'0000ff','aqua':'00ffff','teal':'008080',
	 'black':'000000','silver':'c0c0c0','gray':'808080'
	}
 }
};

//-----------------------------------------------------------------------------

//fullhex = /^#([0-9a-f]{6})$/i;

function ShrinkHex(s){
 var m=s,a=m[0],b=m[2],c=m[4];
 return (a===m[1] && b===m[3] && c===m[5])?[m[0],m[2],m[4]].join(''):m;
};
//
var p, o=colormap.keywords.css, result=[];
for(p in o){result[result.length]=[p,':\'',ShrinkHex(o[p]),'\''].join('');};
console.log(result.join());
*/
var colormap={
 keywords:{
	css:{//short:
		maroon:'800000',red:'f00',orange:'ffa500',yellow:'ff0',olive:'808000',
		purple:'800080',fuchsia:'f0f',white:'fff',lime:'0f0',green:'008000',
		navy:'000080',blue:'00f',aqua:'0ff',teal:'008080',
		black:'000',silver:'c0c0c0',gray:'808080'
	}
 }
};




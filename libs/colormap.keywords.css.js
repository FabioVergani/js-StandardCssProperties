var colors={

 pattern:{
	keywords:{
		shortThanHex:/navy|teal|olive|g(reen|ray)/i,
		optimizableLength:/red|lime|aqua|b(lue|lack)|white|yellow|fuchsia/i,
	},
	syntax:{
		hex:/^#?([0-9a-f]{6})$/i,
	}
 },

 map:{

	 css:{
		basic:{
			keyword2hexLong:{//(expanded: red,yellow,fuchsia,white,lime,blue,aqua,black)
			 maroon:'800000',red:'ff0000',orange:'ffa500',yellow:'yellow',olive:'808000',
			 purple:'800080',fuchsia:'ff00ff',white:'ffffff',lime:'00ff00',green:'008000',
			 navy:'000080',blue:'00f',aqua:'0ff',teal:'008080',
			 black:'000',silver:'c0c0c0',gray:'808080'
			},
			keyword2hexShort:{
			 red:'f00',yellow:'ff0',
			 fuchsia:'f0f',white:'fff',lime:'0f0',
			 blue:'00f',aqua:'0ff',
			 black:'000'
			}
		}
	 },

	 recognized:{
		darkred:'8b0000',indianred:'cd5c5c',mediumvioletred:'c71585',orangered:'ff4500',palevioletred:'db7093',
		darkorange:'ff8c00',
		yellowgreen:'9acd32',greenyellow:'adff2f',lightyellow:'ffffe0',lightgoldenrodyellow:'fafad2',
		olivedrab:'6b8e23',darkolivegreen:'556b2f',
		mediumpurple:'9370db',
		whitesmoke:'f5f5f5',antiquewhite:'faebd7',floralwhite:'fffaf0',ghostwhite:'f8f8ff',navajowhite:'ffdead',
		limegreen:'32cd32',lightgreen:'90ee90',darkgreen:'006400',lightseagreen:'20b2aa',seagreen:'2e8b57',mediumseagreen:'3cb371',darkseagreen:'8fbc8f',springgreen:'00ff7f',mediumspringgreen:'00fa9a',forestgreen:'228b22',lawngreen:'7cfc00',palegreen:'98fb98',
		darkblue:'00008b',mediumblue:'0000cd',lightblue:'add8e6',darkslateblue:'483d8b',mediumslateblue:'7b68ee',slateblue:'6a5acd',skyblue:'87ceeb',lightskyblue:'87cefa',deepskyblue:'00bfff',steelblue:'4682b4',lightsteelblue:'b0c4de',aliceblue:'f0f8ff',blueviolet:'8a2be2',cadetblue:'5f9ea0',cornflowerblue:'6495ed',dodgerblue:'1e90ff',midnightblue:'191970',powderblue:'b0e0e6',royalblue:'4169e1',
		aquamarine:'7fffd4',mediumaquamarine:'66cdaa',
		darkgray:'a9a9a9',lightgray:'d3d3d3',darkslategray:'2f4f4f',slategray:'708090',lightslategray:'789',dimgray:'696969',
		grey:'808080',darkgrey:'a9a9a9',lightgrey:'d3d3d3',darkslategrey:'2f4f4f',slategrey:'708090',lightslategrey:'789',dimgrey:'696969',

		khaki:'f0e68c',darkkhaki:'bdb76b',
		magenta:'f0f',darkmagenta:'8b008b',
		orchid:'da70d6',mediumorchid:'ba55d3',darkorchid:'9932cc',
		violet:'ee82ee',darkviolet:'9400d3',
		lavender:'e6e6fa',lavenderblush:'fff0f5',
		turquoise:'40e0d0',mediumturquoise:'48d1cc',darkturquoise:'00ced1',paleturquoise:'afeeee',

		pink:'ffc0cb',deeppink:'ff1493',hotpink:'ff69b4',lightpink:'ffb6c1',
		brown:'a52a2a',rosybrown:'bc8f8f',saddlebrown:'8b4513',sandybrown:'f4a460',
		gold:'ffd700',goldenrod:'daa520',darkgoldenrod:'b8860b',palegoldenrod:'eee8aa',
		salmon:'fa8072',darksalmon:'e9967a',lightsalmon:'ffa07a',
		cyan:'0ff',darkcyan:'008b8b',lightcyan:'e0ffff',
		coral:'ff7f50',lightcoral:'f08080',

	 }

 }//,
};
//§

/*
var m=Object.keys(colors.map.keyword.css.basic);
console.log(m);
>['maroon','red','orange','yellow','olive','purple','fuchsia','white','lime','green','navy','blue','aqua','teal','black','silver','gray']
console.log(m.join('|'));
//cssorder
>maroon|red|orange|yellow|olive|purple|fuchsia|white|lime|green|navy|blue|aqua|teal|black|silver|gray
//SortFromShortestToLongest
>red|lime|teal|aqua|blue|navy|gray|white|green|olive|black|purple|yellow|orange|silver|maroon|fuchsia
*/






/*
//Sort an array based on the length of each element (dal più corto al più lungo)
var m=Object.keys(colors.map.keyword2hex.css.basic);
m.sort(function(a,b){return  a.length - b.length;});
console.log(m.join('|'));



x=/currentColor|transparent|/;



hmllong={

















//§



((dark|indian|(pale|medium)violet|orange)?red)
|
((dark)?(orange|khaki|magenta|orchid|violet))
|
((light)?coral)
|
((deep|hot|light)?pink)
|
((rosy|saddle|sandy)?brown)
|
((dark|light)?(cyan|salmon))
|
((((dark|light)(slate)?)|dim)?(gr(a|e)y))
|
(yellow(green)?|(green|light(goldenrod)?)yellow)
|
(((dark|pale)(turquoise|goldenrod))|(gold(enrod)?))
|
((medium)?(aquamarine|purple|orchid|turquoise)|aqua)
|
(whitesmoke|(antique|floral|ghost|navajo)?white)
|
((olive(drab)?|(lime|((dark|light)?(sea)?)|medium(sea|spring)|(pale|forest|lawn|spring)|darkolive)?green|lime)
|
(blueviolet|((((dark|medium)?(slate)?)|(light|deep)?(sky|steel)?|(cornflower|dodger|midnight|powder|royal|alice|cadet)?)?blue))
(
gainsboro|firebrick|honeydew|wheat|((azur|oldlac)e)|(b(eige|isque|lanchedalmond|urlywood))|(c(hartreuse|hocolate|ornsilk|rimson))|fuchsia|(i(ndigo|vory))|(l(emonchiffon|inen|avender(blush)?))|(m((aroon)|(i(ntcream|styrose)|occasin)))|navy|(p(apayawhip|lum|pe(achpuff|ru)))|(s(eashell|ienna|now))|(t(an|eal|histle|omato))
)























/*

				'inherit',





values: [
				'activeborder',
				'activecaption',
				'appworkspace',
				'background',
				'buttonface',
				'buttonhighlight',
				'buttonshadow',
				'buttontext',
				'captiontext',
				'graytext',
				'highlight',
				'highlighttext',
				'inactiveborder',
				'inactivecaption',
				'inactivecaptiontext',
				'infobackground',
				'infotext',
				'menu',
				'menutext',
				'scrollbar',
				'threeddarkshadow',
				'threedface',
				'threedlightshadow',
				'threedshadow',
				'window',
				'windowframe',
				'windowtext'
			]
values: [
				'currentcolor',
				'transparent'
			],
			valueObjects: [
				'rgba',
				'hsl',
				'hsla'
			]
*/

/*
//-----------------------------------------------------------------------------
function ShrinkHex(s){
 var m=s,a=m[0],b=m[2],c=m[4];
 return (a===m[1] && b===m[3] && c===m[5])?[m[0],m[2],m[4]].join(''):m;
};
//
var p, o=colormap.keywords.css, result=[];
for(p in o){result[result.length]=[p,':\'',ShrinkHex(o[p]),'\''].join('');};
console.log(result.join());
*/

/*
var p, o=colormap.keywords.css, result=[];
for(p in o){if(p.length<o[p].length){result[result.length]=p;};};
console.log('color-keywords shorter than color-hex',result.join());//olive,green,navy,teal,gray
*/












/*

				'inherit',
				'currentcolor',
				'transparent'




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

			valueObjects: [
				'rgba',
				'hsl',
				'hsla'
			]
*/





function ShrinkHex(s){var i=s,a=i[0],b=i[2],c=i[4];return(a===i[1] && b===i[3] && c===i[5])?[a,b,c].join(''):i;};

/*
//cssorder:
	 maroon-red-orange-yellow-olive,
	 purple-fuchsia-white-lime-green,
	 navy-blue-aqua-teal,
	 black-silver-gray

//cssbasic&optimizable maxlength:
	 7chr
*/

var colors={
 pattern:{
	names:{
		cssbasic:/(red|lime|teal|aqua|b(lue|lack)|navy|g(ray|reen)|white|o(live|range)|purple|yellow|silver|maroon|fuchsia)/i,
		shortThanHex:/(navy|teal|olive|g(ray|reen))/i,
		optimizableLength:/(red|lime|aqua|b(lue|lack)|white|yellow|fuchsia)/i,
	},
	syntax:{
		hex:/^#?([0-9a-f]{6})$/i,
	}
 },

 map:{
			keyword2hexLong:{
			},
			keyword2hexShort:{
			 red:'f00',lime:'0f0',blue:'00f',aqua:'0ff',white:'fff',black:'000',yellow:'ff0',fuchsia:'f0f'
			},




//§
	 recognizable:{
		keyword2hexLong:{
			//#((dark)?((red|khaki|orange|orchid|orange|violet|magenta)|(slate)?(blue|gray)))
			darkred:'8b0000',red:'ff0000',
			darkkhaki:'bdb76b',khaki:'f0e68c',
			darkorchid:'9932cc',orchid:'da70d6',
			darkorange:'ff8c00',orange:'ffa500',
			darkviolet:'9400d3',violet:'ee82ee',
			darkmagenta:'8b008b',magenta:'ff00ff',
			darkslategray:'2f4f4f',slategray:'708090',darkgray:'a9a9a9',gray:'808080',
			darkslateblue:'483d8b',slateblue:'6a5acd',darkblue:'00008b',blue:'0000ff',

			//#((dark|light)?(cyan|salmon|seagreen))
			darkcyan:'008b8b',lightcyan:'e0ffff',cyan:'00ffff',
			darksalmon:'e9967a',lightsalmon:'ffa07a',salmon:'fa8072',
			darkseagreen:'8fbc8f',lightseagreen:'20b2aa',seagreen:'2e8b57',

			//#((dark|pale)?((g(reen|oldenrod)|turquoise))
			darkgreen:'006400',palegreen:'98fb98',green:'008000',
			darkgoldenrod:'b8860b',palegoldenrod:'eee8aa',goldenrod:'daa520',
			darkturquoise:'00ced1',paleturquoise:'afeeee',turquoise:'40e0d0',

			//#((light)?(pink|coral|yellow|((sky|steel)blue)))
			lightpink:'ffb6c1',pink:'ffc0cb',
			lightcoral:'f08080',coral:'ff7f50',
			lightyellow:'ffffe0',yellow:'ffff00',
			lightskyblue:'87cefa',skyblue:'87ceeb',
			lightsteelblue:'b0c4de',steelblue:'4682b4',

			//#(light(blue|g(reen|oldenrodyellow)|(slate)?gray))
			lightblue:'add8e6',
			lightgreen:'90ee90',
			lightgoldenrodyellow:'fafad2',
			lightslategray:'778899',lightgray:'d3d3d3',

			//#((alice|cadet|royal|dodger|powder|violet|midnight|cornflower)blue)
			aliceblue:'f0f8ff',
			cadetblue:'5f9ea0',
			royalblue:'4169e1',
			dodgerblue:'1e90ff',
			powderblue:'b0e0e6',
			blueviolet:'8a2be2',
			midnightblue:'191970',
			cornflowerblue:'6495ed',

			//#((rosy|sandy|saddle)?brown)
			rosybrown:'bc8f8f',
			saddlebrown:'8b4513',
			sandybrown:'f4a460',
			brown:'a52a2a',
			//#((indian|orange|paleviolet)?red)
			palevioletred:'db7093',
			orangered:'ff4500',
			indianred:'cd5c5c',

			//#(whitesmoke|((ghost|floral|navajo|antique)?white))
			ghostwhite:'f8f8ff',
			floralwhite:'fffaf0',
			navajowhite:'ffdead',
			antiquewhite:'faebd7',
			white:'ffffff',
			whitesmoke:'f5f5f5',

			//#(medium(orchid|purple|violetred|turquoise|aquamarine|((slate)?blue|((sea|spring)green)))
			mediumorchid:'ba55d3',
			mediumpurple:'9370db',
			mediumvioletred:'c71585',
			mediumturquoise:'48d1cc',
			mediumblue:'0000cd',
			mediumslateblue:'7b68ee',
			mediumseagreen:'3cb371',
			mediumspringgreen:'00fa9a',
			mediumaquamarine:'66cdaa',

			//#(aqua(marine)?)
			aqua:'00ffff',
			aquamarine:'7fffd4',

			//#((lime|lawn|spring|forest|yellow|darkolive)green)
			limegreen:'32cd32',
			lawngreen:'7cfc00',
			springgreen:'00ff7f',
			forestgreen:'228b22',
			yellowgreen:'9acd32',
			darkolivegreen:'556b2f',

			//#(olive(drab)?)
			olive:'808000',olivedrab:'6b8e23',
			//#(lavender(blush)?)
			lavender:'e6e6fa',lavenderblush:'fff0f5',

			//#(t(an|eal|omato|histle))
			tan:'d2b48c',teal:'008080',tomato:'ff6347',thistle:'d8bfd8',
			//#(l(ime|inen|emonchiffon))
			lime:'00ff00',linen:'faf0e6',lemonchiffon:'fffacd',
			//#(s(now|ienna|ilver|eashell))
			snow:'fffafa',sienna:'a0522d',silver:'c0c0c0',seashell:'fff5ee',
			//#(g(old|ainsboro|reenyellow))
			gold:'ffd700',gainsboro:'dcdcdc',greenyellow:'adff2f',
			//#(p(lum|eru|urple|eachpuff|apayawhip))
			plum:'dda0dd',peru:'cd853f',purple:'800080',peachpuff:'ffdab9',papayawhip:'ffefd5',
			//#(b(eige|lack|isque|urlywood|lanchedalmond))
			beige:'f5f5dc',black:'000000',bisque:'ffe4c4',burlywood:'deb887',blanchedalmond:'ffebcd',
			//#(i(vory|ndigo))
			ivory:'fffff0',indigo:'4b0082',
			//#(m(aroon|occasin|intcream|istyrose))
			maroon:'800000',moccasin:'ffe4b5',mintcream:'f5fffa',mistyrose:'ffe4e1',
			//#(c(rimson|hocolate|hartreuse))
			crimson:'dc143c',chocolate:'d2691e',chartreuse:'7fff00',
			//#(f(uchsia|irebrick))
			fuchsia:'ff00ff',firebrick:'b22222',
			//#(ho(tpink|neydew))
			hotpink:'ff69b4',honeydew:'f0fff0',
			//#(deep(pink|skyblue))
			deeppink:'ff1493',deepskyblue:'00bfff',
			//#(navy|azure|wheat|dimgray|oldlace|rebeccapurple)
			navy:'000080',azure:'f0ffff',wheat:'f5deb3',dimgray:'696969',oldlace:'fdf5e6',rebeccapurple:'663399',
		}
	 }

 }//,
};
//§




/*



x=/currentColor|transparent|/;

//-----------------------------------------------------------------------------

/*
//Sort an array based on the length of each element (dal più corto al più lungo) #SortFromShortestToLongest
var m=Object.keys(colors.map.keyword2hex.css.basic);
m.sort(function(a,b){return  a.length - b.length;});
console.log(m.join('|'));

var p, o=Object.keys(colors.map.xxx), result=[];
for(p in o){result[result.length]=[p,':\'',ShrinkHex(o[p]),'\''].join('');};
console.log(result.join());

var p, o=colors.map.xxx, result=[];
for(p in o){if(p.length<o[p].length){result[result.length]=p;};};
console.log('color-names shorter than color-hex',result.join());


var p, o=colormap.names.css, result=[];
for(p in o){if(p.length<o[p].length){result[result.length]=p;};};
console.log('color-names shorter than color-hex',result.join());

var p, o=Object.keys(colors.map.recognizable.keyword2hexLong), result=[];
for(p in o){result[result.length]=[p,':\'',ShrinkHex(o[p]),'\''].join('');};
console.log(result.join());

*/
/*
var );
console.log(m.join('|'));
var m=Object.keys(colors.map.recognizable.keyword2hexLong);
*/
m=Object.keys({});
m.sort(function(a,b){return  a.length - b.length;});
console.log('(',m.join('|'),')');

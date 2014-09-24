YUI.add("gallery-qr-code-generator-base",function(a){(function(d){var i="",F="0",D="1",ai="10",O="alphanumeric",b="byte",ag="complete",r="E",A="errorCorrection",p="H",N="initOnly",n="L",l="M",S="M1",Q="M3",P="M4",v="numeric",j="Q",k="ucs2",s="utf8",o="value",I="version",Z=[[18],[22],[26],[30],[34],[22,38],[24,42],[26,46],[28,50],[30,54],[32,58],[34,62],[26,46,66],[26,48,70],[26,50,74],[30,54,78],[30,56,82],[30,58,86],[34,62,90],[28,50,72,94],[26,50,74,98],[30,54,78,102],[28,54,80,106],[32,58,84,110],[30,58,86,114],[34,62,90,118],[26,50,74,98,122],[30,54,78,102,126],[26,52,78,104,130],[30,56,82,108,134],[34,60,86,112,138],[30,58,86,114,142],[34,62,90,118,146],[30,54,78,102,126,150],[24,50,76,102,128,154],[28,54,80,106,132,158],[32,58,84,110,136,162],[26,54,82,110,138,166],[30,58,86,114,142,170]],aa=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142],al={M1:{E:[3,1,3,2]},M2:{L:[5,1,5,5],M:[4,1,4,6]},M3:{L:[11,1,11,6],M:[9,1,9,8]},M4:{L:[16,1,16,8],M:[14,1,14,10],Q:[10,1,10,14]},1:{H:[9,1,9,17],L:[19,1,19,7],M:[16,1,16,10],Q:[13,1,13,13]},2:{H:[16,1,16,28],L:[34,1,34,10],M:[28,1,28,16],Q:[22,1,22,22]},3:{H:[26,2,13,22],L:[55,1,55,15],M:[44,1,44,26],Q:[34,2,17,18]},4:{H:[36,4,9,16],L:[80,1,80,20],M:[64,2,32,18],Q:[48,2,24,26]},5:{H:[46,2,11,22],L:[108,1,108,26],M:[86,2,43,24],Q:[62,2,15,18]},6:{H:[60,4,15,28],L:[136,2,68,18],M:[108,4,27,16],Q:[76,4,19,24]},7:{H:[66,4,13,26],L:[156,2,78,20],M:[124,4,31,18],Q:[88,2,14,18]},8:{H:[86,4,14,26],L:[194,2,97,24],M:[154,2,38,22],Q:[110,4,18,22]},9:{H:[100,4,12,24],L:[232,2,116,30],M:[182,3,36,22],Q:[132,4,16,20]},10:{H:[122,6,15,28],L:[274,2,68,18],M:[216,4,43,26],Q:[154,6,19,22]},11:{H:[140,3,12,24],L:[324,4,81,20],M:[254,1,50,30],Q:[180,4,22,28]},12:{H:[158,7,14,28],L:[370,2,92,24],M:[290,6,36,22],Q:[206,4,20,26]},13:{H:[180,12,11,22],L:[428,4,107,26],M:[334,8,37,22],Q:[244,8,20,24]},14:{H:[197,11,12,24],L:[461,3,115,30],M:[365,4,40,24],Q:[261,11,16,20]},15:{H:[223,11,12,24],L:[523,5,87,22],M:[415,5,41,24],Q:[295,5,24,30]},16:{H:[253,3,15,30],L:[589,5,98,24],M:[453,7,45,28],Q:[325,15,19,24]},17:{H:[283,2,14,28],L:[647,1,107,28],M:[507,10,46,28],Q:[367,1,22,28]},18:{H:[313,2,14,28],L:[721,5,120,30],M:[563,9,43,26],Q:[397,17,22,28]},19:{H:[341,9,13,26],L:[795,3,113,28],M:[627,3,44,26],Q:[445,17,21,26]},20:{H:[385,15,15,28],L:[861,3,107,28],M:[669,3,41,26],Q:[485,15,24,30]},21:{H:[406,19,16,30],L:[932,4,116,28],M:[714,17,42,26],Q:[512,17,22,28]},22:{H:[442,34,13,24],L:[1006,2,111,28],M:[782,17,46,28],Q:[568,7,24,30]},23:{H:[464,16,15,30],L:[1094,4,121,30],M:[860,4,47,28],Q:[614,11,24,30]},24:{H:[514,30,16,30],L:[1174,6,117,30],M:[914,6,45,28],Q:[664,11,24,30]},25:{H:[538,22,15,30],L:[1276,8,106,26],M:[1000,8,47,28],Q:[718,7,24,30]},26:{H:[596,33,16,30],L:[1370,10,114,28],M:[1062,19,46,28],Q:[754,28,22,28]},27:{H:[628,12,15,30],L:[1468,8,122,30],M:[1128,22,45,28],Q:[808,8,23,30]},28:{H:[661,11,15,30],L:[1531,3,117,30],M:[1193,3,45,28],Q:[871,4,24,30]},29:{H:[701,19,15,30],L:[1631,7,116,30],M:[1267,21,45,28],Q:[911,1,23,30]},30:{H:[745,23,15,30],L:[1735,5,115,30],M:[1373,19,47,28],Q:[985,15,30]},31:{H:[793,23,15,30],L:[1843,13,115,30],M:[1455,2,46,28],Q:[1033,42,24,30]},32:{H:[845,19,15,30],L:[1955,17,115,30],M:[1541,10,46,28],Q:[1115,10,24,30]},33:{H:[901,11,15,30],L:[2071,17,115,30],M:[1631,14,46,28],Q:[1171,29,24,30]},34:{H:[961,59,16,30],L:[2191,13,115,30],M:[1725,14,46,28],Q:[1231,44,24,30]},35:{H:[986,22,15,30],L:[2306,12,121,30],M:[1812,12,47,28],Q:[1286,39,24,30]},36:{H:[1054,2,15,30],L:[2434,6,121,30],M:[1914,6,47,28],Q:[1354,46,24,30]},37:{H:[1096,24,15,30],L:[2566,17,122,30],M:[1992,29,46,28],Q:[1426,49,24,30]},38:{H:[1142,42,15,30],L:[2702,4,122,30],M:[2102,13,46,28],Q:[1502,48,24,30]},39:{H:[1222,10,15,30],L:[2812,20,117,30],M:[2216,40,47,28],Q:[1582,43,24,30]},40:{H:[1276,20,15,30],L:[2956,19,118,30],M:[2334,18,47,28],Q:[1666,34,24,30]}},V={alphanumeric:O,"byte":b,numeric:v,ucs2:k,utf8:s},q=[21522,20773,24188,23371,17913,16590,20375,19104,30660,29427,32170,30877,26159,25368,27713,26998,5769,5054,7399,6608,1890,597,3340,2107,13663,12392,16177,14854,9396,8579,11994,11245],L={2:[25,1],5:[113,164,166,119,10],6:[116,0,134,5,176,15],7:[87,299,146,149,238,102,21],8:[175,238,208,249,215,252,196,28],10:[251,67,46,61,118,70,64,94,32,45],13:[74,152,176,100,86,100,106,104,130,218,206,140,78],14:[199,249,155,48,190,124,218,137,216,87,207,59,22,91],15:[8,183,61,91,202,37,51,58,58,237,140,124,5,99,105],16:[120,104,107,109,102,161,76,3,91,191,147,169,182,194,225,120],18:[215,234,158,94,184,97,118,170,79,187,152,148,252,179,5,98,96,153],20:[17,60,79,50,61,163,26,187,202,180,221,225,83,239,156,164,212,212,188,190],22:[210,171,247,242,93,230,14,109,221,53,200,74,8,172,98,80,219,134,160,105,165,231],24:[229,121,135,48,211,117,251,126,159,180,169,152,192,226,228,218,111,0,117,232,87,96,227,21],26:[173,125,158,2,103,182,118,17,145,201,111,28,165,53,161,21,245,142,13,102,48,227,153,145,218,70],28:[168,223,200,104,224,234,108,180,110,190,195,147,205,27,232,201,21,43,245,87,42,195,212,119,242,37,9,123],30:[41,173,145,152,216,31,179,182,50,48,110,86,239,96,222,125,42,173,226,193,224,130,156,37,251,216,238,40,192,180],32:[10,6,106,190,249,167,4,67,209,138,138,32,242,123,89,27,120,185,80,156,38,69,171,60,28,222,80,52,254,185,220,241],34:[111,77,146,94,26,21,108,19,105,94,113,193,86,140,163,125,58,158,229,239,218,103,56,70,114,61,183,129,167,13,98,62,129,51],36:[200,183,98,16,172,31,246,234,60,152,115,24,167,152,113,248,238,107,18,63,218,37,87,210,105,177,120,74,121,196,117,251,113,233,30,120],40:[59,116,79,161,252,98,128,205,128,161,247,57,163,56,235,106,53,26,187,174,226,104,170,7,175,35,181,114,88,41,47,163,125,134,72,20,232,53,35,15],42:[250,103,221,230,25,18,137,231,0,3,58,242,221,191,110,84,230,8,188,106,96,147,15,131,139,34,101,223,39,101,213,199,237,254,201,123,171,162,194,117,50,96],44:[190,7,61,121,71,246,69,55,168,188,89,243,191,25,72,123,9,145,14,247,1,238,44,78,143,62,224,126,118,114,68,163,52,194,217,147,204,169,37,130,113,102,73,181],46:[112,94,88,112,253,224,202,115,187,99,89,5,54,113,129,44,58,16,135,216,169,211,36,1,4,96,60,241,73,104,234,8,249,245,119,174,52,25,157,224,43,202,223,19,82,15],48:[228,25,196,130,211,146,60,24,251,90,39,102,240,61,178,63,46,123,115,18,221,111,135,160,182,205,107,206,95,150,120,184,91,21,247,156,140,238,191,11,94,227,84,50,163,39,34,108],50:[232,125,157,161,164,9,118,46,209,99,203,193,35,3,209,111,195,242,203,225,46,13,32,160,126,209,130,160,242,215,242,75,77,42,189,32,113,65,124,69,228,114,235,175,124,170,215,232,133,205],52:[116,50,86,186,50,220,251,89,192,46,86,127,124,19,184,233,151,215,22,14,59,145,37,242,203,134,254,89,190,94,59,65,124,113,100,233,235,121,22,76,86,97,39,242,200,220,101,33,239,254,116,51],54:[183,26,201,87,210,221,113,21,46,65,45,50,238,184,249,225,102,58,209,218,109,165,26,95,184,192,52,245,35,254,238,175,172,79,123,25,122,43,120,108,215,80,128,201,235,8,153,59,101,31,198,76,31,156],56:[106,120,107,157,164,216,112,116,2,91,248,163,36,201,202,229,6,144,254,155,135,208,170,209,12,139,127,142,182,249,177,174,190,28,10,85,239,184,101,124,152,206,96,23,163,61,27,196,247,151,154,202,207,20,61,10],58:[82,116,26,247,66,27,62,107,252,182,200,185,235,55,251,242,210,144,154,237,176,141,192,248,152,249,206,85,253,142,65,165,125,23,24,30,122,240,214,6,129,218,29,145,127,134,206,245,117,29,41,63,159,142,233,125,148,123],60:[107,140,26,12,9,141,243,197,226,197,219,45,211,101,219,120,28,181,127,6,100,247,2,205,198,57,115,219,101,109,160,82,37,38,238,49,160,209,121,86,11,124,30,181,84,25,194,87,65,102,190,220,70,27,209,16,89,7,33,240],62:[65,202,113,98,71,223,248,118,214,94,0,122,37,23,2,228,58,121,7,105,135,78,243,118,70,76,223,89,72,50,70,111,194,17,212,126,181,35,221,117,235,11,229,149,147,123,213,40,115,6,200,100,26,246,182,218,127,215,36,186,110,106],64:[45,51,175,9,7,158,159,49,68,119,92,123,177,204,187,254,200,78,141,149,119,26,127,53,160,93,199,212,29,24,145,156,208,150,218,209,4,216,91,47,184,146,47,140,195,195,125,242,238,63,99,108,140,230,242,31,204,11,178,243,217,156,213,231],66:[5,118,222,180,136,136,162,51,46,117,13,215,81,17,139,247,197,171,95,173,65,137,178,68,111,95,101,41,72,214,169,197,95,7,44,154,77,111,236,40,121,143,63,87,80,253,240,126,217,77,34,232,106,50,168,82,76,146,67,106,171,25,132,93,45,105],68:[247,159,223,33,224,93,77,70,90,160,32,254,43,150,84,101,190,205,133,52,60,202,165,220,203,151,93,84,15,84,253,173,160,89,227,52,199,97,95,231,52,177,41,125,137,241,166,225,118,2,54,32,82,215,175,198,43,238,235,27,101,184,127,3,5,8,163,238]},u=[17477,16754,20011,19228,21934,20633,24512,23287,26515,25252,28157,26826,30328,29519,31766,31009,1758,1001,3248,2439,5941,4610,7515,6252,9480,8255,12134,10833,13539,12756,16013,15290],H=[31892,34236,39577,42195,48118,51042,55367,58893,63784,68472,70749,76311,79154,84390,87683,92361,96236,102084,102881,110507,110734,117786,119615,126325,127568,133589,136944,141498,145311,150283,152622,158308,161089],ab=Array,am=String,c=d.Array,J=d.Async,ae=d.Base,K=d.Lang,E=Math.abs,z=Math.ceil,U=d.each,h=Math.floor,ad=K.isArray,T=c.indexOf,y=K.isUndefined,G=c.iterate,x=c.map,t=Math.max,af=Math.min,X=d.mix,ah,M=parseInt,B=c.reduce,aj=d.soon,ac=d.cached(T),g=[function(Y,an){return(Y+an)%2===0;
},function(Y,an){return an%2===0;},function(Y,an){return Y%3===0;},function(Y,an){return(Y+an)%3===0;},function(Y,an){return(h(Y/3)+h(an/2))%2===0;},function(Y,ao){var an=Y*ao;return an%2+an%3===0;},function(Y,ao){var an=Y*ao;return(an%2+an%3)%2===0;},function(Y,an){return((Y+an)%2+(Y*an)%3)%2===0;}],C=[g[1],g[4],g[6],g[7]],R=ae.create("qr-code-data",ae,[],{},{ATTRS:{type:{validator:function(Y){return !!V[Y];},writeOnce:N},value:{value:null,writeOnce:N}},Type:V}),m=ae.create("qr-code-generator-base",ae,[],{applyMask:function(au,at,av,an,aw,aq){var Y=[],ap,ar=an,ao=function(ax){aj(function(){var az,aA,ay=aw-an-1;while(ay>=an){az=ay+ar*aw;aA=at[az];if(!y(aA)){au[az]=av(ay-an,ar-an)?!aA:aA;}ay-=1;}ar+=1;ax();});};for(ap=aw-an-1;ap>=ar;ap-=1){Y.push(ao);}J.runQueue(Y).on(ag,function(){aj(function(){aq(au);});});return this;},drawAlignmentPattern:function(av,an,Y,ay,aq){var ax=an+2,aw=Y+2,ar,ap=an-2,ao=Y-2,au,at;for(au=ap;au<=ax;au+=1){for(at=ao;at<=aw;at+=1){ar=au+at*ay;if(aq||y(av[ar])){av[ar]=au===ap||au===ax||at===ao||at===aw||au===an&&at===Y;}}}return this;},drawFinderPattern:function(av,an,Y,ay,aq){var ax=an+3,aw=Y+3,ar,ap=an-3,ao=Y-3,au,at;for(au=ap-1;au<=ax+1;au+=1){for(at=ao-1;at<=aw+1;at+=1){ar=au+at*ay;if(aq||y(av[ar])){av[ar]=au>=ap&&au<=ax&&at>=ao&&at<=aw&&(au===ap||au===ax||at===ao||at===aw)||au>=an-1&&au<=an+1&&at>=Y-1&&at<=Y+1;}}}return this;},drawFormatInformation:function(aw,ar,ao,ap,az,at){var aq,au,ay,an=ap+8,Y=az-ap-1,ax=ap,av=ap+8;if(ao){ax+=1;}for(aq=0;aq<15;aq+=1){ay=ar.charAt(14-aq)===D;au=an+ax*az;if(at||y(aw[au])){aw[au]=ay;}if(!ao){au=Y+av*az;if(at||y(aw[au])){aw[au]=ay;}if(aq<7){ax+=1;if(aq===5){ax+=1;}}else{an-=1;if(aq===8){an-=1;}}if(aq<7){Y-=1;}else{if(aq===7){Y=ap+8;av=az-ap-8;au=Y+av*az;if(at||y(aw[au])){aw[au]=true;}av+=1;}else{av+=1;}}}else{if(aq<7){ax-=1;}else{an-=1;}}}return true;},drawQuietZone:function(ao,at,ar,aq){var an=ar-at,ap,Y,au;for(Y=0;Y<ar;Y+=1){for(au=0;au<at;au+=1){ap=Y+au*ar;if(aq||y(ao[ap])){ao[ap]=false;}}if(Y<at||Y>=an){for(au=at;au<an;au+=1){ap=Y+au*ar;if(aq||y(ao[ap])){ao[ap]=false;}}}for(au=an;au<ar;au+=1){ap=Y+au*ar;if(aq||y(ao[ap])){ao[ap]=false;}}}return this;},drawTimingPattern:function(Y,ar,aq,ao){var ap,an;for(ap=0;ap<aq;ap+=1){an=ar+ap*aq;if(ao||y(Y[an])){Y[an]=!(ap%2);}an=ap+ar*aq;if(ao||y(Y[an])){Y[an]=!(ap%2);}}return this;},drawVersionInformation:function(av,aq,ao,ay,ar){var ap,at,ax,an=ay-ao-11,Y=ao,aw=ao,au=ay-ao-11;for(ap=17;ap>=0;ap-=1){ax=aq.charAt(ap)===D;at=an+aw*ay;if(ar||y(av[at])){av[at]=ax;}at=Y+au*ay;if(ar||y(av[at])){av[at]=ax;}if(ap%3){an+=1;au+=1;}else{an-=2;Y+=1;aw+=1;au-=2;}}return this;},evaluateMatrix:function(ar,Y,av,ap){var at=av-Y-1,ao=[],an=0,aq=0,au=function(aw){aj(function(){var aI=0,ay=0,aB,aA=0,aH=0,aD=0,aE,aC=[true,false,true,true,true,false,true],aG,az,aF,ax=0;for(aE=av-Y-1;aE>=Y;aE-=1){aB=aE+at*av;aF=ar[aB];if(aF===aG){aI+=1;}else{aH=t(aI,aH);aI=0;aG=aF;}if(aF===aC[aA]){aA+=1;if(aA===7&&(aE>=Y+4&&!(ar[aB-1]||ar[aB-2]||ar[aB-3]||ar[aB-4]))||(aE<av-Y-10&&!(ar[aB+7]||ar[aB+8]||ar[aB+9]||ar[aB+10]))){an+=40;}}else{aA=0;}if(at>Y&&aE>Y&&ar[aB-1]===aF&&ar[aB-av]===aF&&ar[aB-av-1]===aF){an+=3;}if(aF){aq+=1;}aB=at+aE*av;aF=ar[aB];if(aF===az){ay+=1;}else{aD=t(ay,aD);ay=0;az=aF;}if(aF===aC[ax]){ax+=1;if(ax===7&&(aE>=Y+4&&!(ar[aB-av]||ar[aB-2*av]||ar[aB-3*av]||ar[aB-4*av]))||(aE<av-Y-10&&!(ar[aB+7*av]||ar[aB+8*av]||ar[aB+9*av]||ar[aB+10*av]))){an+=40;}}else{ax=0;}}aH=t(aI,aH);if(aH>=5){an+=3+aH-5;}aD=t(ay,aD);if(aD>=5){an+=3+aD-5;}at-=1;aw();});};J.runQueue(function(aw){aj(function(){var ax;for(ax=at;ax>=Y;ax-=1){ao.push(au);}aw();});},function(aw){aj(function(){J.runQueue(ao).on(ag,aw);});}).on(ag,function(){aj(function(){ap(an+2*E(h(100*aq/((av-Y)*(av-Y))-50)));});});return this;},evaluateMicroMatrix:function(Y,ap,ao,an){aj(function(){var at,au=ao-ap-1,ar,aq;for(ar=ap+1;ar<=au;ar+=1){if(Y[au+ar*ao]){aq+=1;}if(Y[ar+au*ao]){at+=1;}}if(at<aq){an(at*16+aq);}else{an(aq*16+at);}});return this;},formatBinaryString:function(ar,av){var az,ay=[],Y,aw,an,at,ao,ax=this,aq,ap=function(aA){return function(aD,aC,aB){ay.push(function(aE){aj(function(){var aF=aB.slice(aC,aC+aA);ax.generateErrorCorrectionBlock(aF,ao,function(aG){aE([aF,aG]);});});});};},au=function(aA,aB){ay.push(function(aC){aj(function(){aC(B(Y,i,function(aD,aE){return aD+(aE[aA][aB]||i);}));});});};J.runQueue(function(aA){aj(function(){var aC,aE=ax.get(A),aD,aB=am(ax.get(I));if(aB.charAt(0)===l){if(aB===S){aE=r;}else{if(aB!==P){if(aE===p||aE===j){aE=l;}}else{if(aE===p){aE=j;}}}ar+=ab(2+2*+aB.charAt(1)).join(F);}else{if(aE===r){aE=n;}ar+="0000";}ax._set(A,aE);aD=ar.length%8;if(aB===S||aB===Q){if(aD<4){ar+=ab(5-aD).join(F);}else{if(aD>4){ar+=ab(13-aD).join(F);}}}else{if(aD){ar+=ab(9-aD).join(F);}}aC=al[aB][aE];az=aC[1];aw=aC[2];an=az*aw;ao=aC[3];aC=aC[0];aq=aC-z(ar.length/8);if(aq<0){aA.fail("Too much data.");}else{aA();}});},function(aA){aj(function(){var aB;for(aB=0;aB<aq;aB+=1){ar+=(aB%2)?"00010001":"11101100";}at=ar.match(/.{1,8}/g);ar=i;aA();});},function(aA){aj(function(){G(at.slice(0,an),aw,ap(aw));aw+=1;aA();});},function(aA){aj(function(){G(at.slice(an),aw,ap(aw));at=null;aA();});},function(aA){aj(function(){J.runAll(ay).on(ag,function(aB){ay=[];Y=aB.value;aA();});});},function(aA){aj(function(){var aB;for(aB=0;aB<aw;aB+=1){au(0,aB);}aA();});},function(aA){aj(function(){var aB;for(aB=0;aB<ao;aB+=1){au(1,aB);}aA();});},function(aA){aj(function(){J.runAll(ay).on(ag,function(aB){ar=aB.value.join(i);aA();});});}).on(ag,function(aA){aj(function(){if(aA.failed){av(aA.error);}else{av(null,ar);}});});return ax;},generate:function(Y){var ao,an=this;J.runQueue(function(ap){aj(function(){an.getBinaryString(function(aq){ao=aq;ap();});});},function(ap){aj(function(){an.formatBinaryString(ao,function(ar,aq){if(ar){ap.fail(ar);}else{ao=aq;ap();}});});},function(ap){aj(function(){an.generateMatrix(ao,function(aq,ar){ao=[aq,ar];ap();});});}).on(ag,function(ap){aj(function(){if(ap.failed){Y(ap.error);}else{Y(null,ao[0],ao[1]);}});});return an;},generateDataMatrix:function(az,ap,aB,Y,aC,ar){var aA=ap.match(/.{1,8}/g),ay=ab(az.length),ax=1,aq=[],ao,aw=aC-Y-1,an=aA.shift(),av=0,au=function(aD){if(av>7){an=aA.shift();
av=0;}ay[aD]=an&&an.charAt(av)===D||false;av+=1;},at=function(aD){aj(function(){var aE,aF;for(aF=ax?aC-Y-1:Y;ax&&aF>=Y||!ax&&aF<aC-Y;aF+=(ax?-1:1)){aE=aw+aF*aC;if(y(az[aE])){au(aE);}aE-=1;if(y(az[aE])){au(aE);}}ax=!ax;aw-=2;if(aw===aB){aw-=1;}aD();});};ap=i;for(ao=Y;ao<=aw;ao+=2){aq.push(at);}J.runQueue(aq).on(ag,function(){aj(function(){ar(ay);});});return this;},generateErrorCorrectionBlock:function(au,Y,ao){var ar=[],an,at=L[Y],aq,ap=function(av){aj(function(){var aw=aq.shift();if(aw){U(at,function(az,ax){var ay=ac(aa,aa[(az+aw)%255]^(aa[aq[ax]]||0));aq[ax]=ay===-1?null:ay;});}av();});};J.runQueue(function(av){aj(function(){aq=x(au,function(ax){var aw=ac(aa,M(ax,2));return aw===-1?null:aw;}).concat(ab(Y));av();});},function(av){aj(function(){var aw=au.length,ax;for(ax=0;ax<aw;ax+=1){ar.push(ap);}av();});},function(av){aj(function(){J.runQueue(ar).on(ag,av);});},function(av){aj(function(){an=x(aq,function(aw){return ah(aa[aw]||0,8);});av();});}).on(ag,function(){aj(function(){ao(an);});});return this;},generateMatrix:function(ap,aq){var at=this,aw=at.getSize(),ar=am(at.get(I)),Y,av,ax=at.get("mask"),au=ab(aw*aw),an=ar.charAt(0)===l,ao=an?2:4;J.runQueue(function(ay){aj(function(){at.drawQuietZone(au,ao,aw);ay();});},function(ay){aj(function(){var az=ao+3;at.drawFinderPattern(au,az,az,aw);ay();});},function(ay){if(an){ay();}else{aj(function(){at.drawFinderPattern(au,aw-ao-4,ao+3,aw);ay();});}},function(ay){if(an){ay();}else{aj(function(){at.drawFinderPattern(au,ao+3,aw-ao-4,aw);ay();});}},function(ay){aj(function(){at.drawTimingPattern(au,an?2:10,aw);ay();});},function(ay){aj(function(){var az=[];U(at.getAlignmentPatternCoordinates(ao),function(aA){az.push(function(aB){aj(function(){at.drawAlignmentPattern(au,aA[0],aA[1],aw);aB();});});});J.runAll(az).on(ag,ay);});},function(ay){if(an||+ar<7){ay();}else{aj(function(){at.drawVersionInformation(au,ah(H[+ar-7],18),ao,aw);ay();});}},function(ay){aj(function(){at.drawFormatInformation(au,ab(16).join(F),an,ao,aw);ay();});},function(ay){aj(function(){at.generateDataMatrix(au,ap,an?2:10,ao,aw,function(az){av=az;ay();});});},function(ay){aj(function(){J.runQueue(x(an?C:g,function(az,aA){return(ax===null||ax===aA)&&function(aB){aj(function(){at.applyMask(au.concat(),av,az,ao,aw,aB);});}||function(aB){aB();};})).on(ag,function(aA){var az=aA.value;J.runAll(x(az,function(aB){return function(aC){aj(function(){if(an){if(aB){at.evaluateMicroMatrix(aB,ao,aw,aC);}else{aC(-1);}}else{if(aB){at.evaluateMatrix(aB,ao,aw,aC);}else{aC(Infinity);}}});};})).on(ag,function(aC){var aD,aE=at.get(A),aB=aC.value;if(an){aD=T(aB,t.apply(Math,aB));switch(ar){case S:Y=0;break;case"M2":Y=1;break;case Q:Y=3;break;case P:Y=5;break;}if(aE===l){Y+=1;}else{if(aE===j){Y+=2;}}Y=ah(u[M(ah(Y,3)+ah(aD,2),2)],15);}else{aD=T(aB,af.apply(Math,aB));switch(aE){case p:Y=ai;break;case n:Y="01";break;case l:Y="00";break;case j:Y="11";break;}Y=ah(q[M(Y+ah(aD,3),2)],15);}au=az[aD];ay();});});});},function(ay){aj(function(){at.drawFormatInformation(au,Y,an,ao,aw,true);ay();});}).on(ag,function(){aj(function(){aq(au,aw);});});return at;},getAlignmentPatternCoordinates:function(ap){var Y=am(this.get(I)),ao=[],an=[6].concat(Z[+Y-2]),aq=an.length-1;if(Y.charAt(0)===l||Y===D){return[];}U(an,function(ar,at){U(an,function(av,au){if((at||au)&&(at||au!==aq)&&(at!==aq||au)){ao.push([ap+ar,ap+av]);}});});return ao;},getBinaryString:function(an){var ao=this,Y=ao.get(I);J.runAll(x(ao.get("data"),function(ap){return function(aq){aj(function(){aq(ap.toBinaryString(Y));});};})).on(ag,function(ap){aj(function(){an(ap.value.join(i));});});return ao;},getSize:function(){var Y=am(this.get(I));if(Y.charAt(0)===l){return 12+(+Y.charAt(1))*3;}return 25+(+Y)*4;}},{ATTRS:{data:{setter:function(Y){if(!ad(Y)){Y=[Y];}return Y;},value:[],writeOnce:N},errorCorrection:{validator:function(Y){if(Y===r||Y===p||Y===n||Y===l||Y===j){return true;}return false;},value:l,writeOnce:N},mask:{value:null,writeOnce:N},version:{value:D,writeOnce:N}}}),f=ae.create("qr-code-alphanumeric-data",R,[],{toBinaryString:function(ao){ao=am(ao);var ar,Y=[" ","$","%","*","+","-",".","/",":"],an,aq=this.get(o),ap=B(aq.match(/.{1,2}/g),i,function(at,aw){var av=aw.charAt(0),ax=T(Y,av),au;if(ax===-1){au=M(av,36);}else{au=ax+36;}if(aw.length===1){return at+ah(au,6);}au*=45;av=aw.charAt(1);ax=T(Y,av);if(ax===-1){au+=M(av,36);}else{au+=ax+36;}return at+ah(au,11);});if(ao.charAt(0)===l){ao=+ao.charAt(1);ar=ao+1;an=ab(ao-1).join(0)+D;}else{ao=+ao;if(ao<=9){ar=9;}else{if(ao<=26){ar=11;}else{ar=13;}}an="0010";}return an+ah(aq.length,ar)+ap;}},{ATTRS:{type:{readOnly:true,value:O},value:{setter:function(Y){return am(Y).toUpperCase().replace(/[^0-9A-Z $%*+\-.\/:]/g,i);},value:i,writeOnce:N}}}),ak=ae.create("qr-code-byte-data",R,[],{toBinaryString:function(ao){ao=am(ao);var au,an=this.get("characterWidth"),ap,aq,Y,at=this.get(o),ar=i;for(ap=0,aq=at.length;ap<aq;ap+=1){ar+=ah(at.charCodeAt(ap),an);}if(ao.charAt(0)===l){ao=+ao.charAt(1);au=ao+1;Y=ab(ao-2).join(0)+ai;}else{ao=+ao;if(ao<=9){au=8;}else{au=16;}Y="0100";}return Y+ah(ar.length/8,au)+ar;}},{ATTRS:{characterWidth:{value:8,writeOnce:N},type:{readOnly:true,value:"byte"},value:{value:i,writeOnce:N}}}),e=ae.create("qr-code-numeric-data",R,[],{toBinaryString:function(an){an=am(an);var aq,Y,ap=this.get(o),ao=B(ap.match(/.{1,3}/g),i,function(ar,at){return ar+ah(at,at.length>=3?10:(at.length<=1?4:7));});if(an.charAt(0)===l){an=+an.charAt(1);aq=an+2;Y=ab(an).join(0);}else{an=+an;if(an<=9){aq=10;}else{if(an<=26){aq=12;}else{aq=14;}}Y="0001";}return Y+ah(ap.length,aq)+ao;}},{ATTRS:{type:{readOnly:true,value:v},value:{setter:function(Y){return am(Y).replace(/[\D]/g,i);},value:i,writeOnce:N}}}),W=ae.create("qr-code-ucs2-data",R,[],{toBinaryString:function(Y){return"011100011001";}},{ATTRS:{type:{readOnly:true,value:k},value:{readOnly:true,value:i}}}),w=ae.create("qr-code-utf8-data",R,[],{toBinaryString:function(Y){return"011100011010";}},{ATTRS:{type:{readOnly:true,value:k},value:{readOnly:true,value:i}}});ah=function(an,Y){an=(+an).toString(2);
var ao=an.length;if(ao>Y){return null;}return ab(Y-ao+1).join(0)+an;};X(d.namespace("QrCode"),{AlphanumericData:f,ByteData:ak,Data:R,GeneratorBase:m,NumericData:e,numberToBinaryString:ah,Ucs2Data:W,Utf8Data:w});}(a));},"gallery-2012.06.20-20-07",{requires:["array-extras","base","gallery-array-iterate","gallery-async","gallery-soon"],skinnable:false});
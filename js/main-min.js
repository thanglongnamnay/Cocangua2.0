let goc=0,vongLap,pos=[],posChuong=[[],[],[],[],[]],posNha=[],viTriQuanCo=[0,[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]],luot=[0,0,0,0,0],home=[0,4,4,4,4],chuong=[[],[],[],[],[]],dice=[[],[],[],[],[]],gameMode=1,ketQua,boluot,control;const speed=1000;mauSang='#444',mauToi='#666',mauTrang='#fff',cua=[0,55,13,27,41],nha=[0,0,14,28,42],kyHieuNha=[0,'\u25BC','\u25B6','\u25B2','\u25C0'],mau=[0,'darkblue','green','darkred','darkorange'],mauChuong=[0,'blue','lightgreen','red','yellow'];function setUp(){document.addEventListener('contextmenu',e=>{e.preventDefault();alert('Ngưng ấn chuột phải')});for(let i=0;i<56;i++){pos[i]=document.getElementsByClassName('pos'+i)[0]}
for(let j=1;j<=4;j++){posNha[j]=document.getElementsByClassName('home'+j)[0];for(let i=1;i<=6;i++){posChuong[j][i]=document.getElementsByClassName('chuong'+j+''+i)[0];chuong[j].push(0)}}
ketQua=document.getElementsByClassName('ketqua')[0];boluot=document.getElementsByClassName('boluot')[0];control=document.getElementsByClassName('controls')[0];document.getElementsByClassName('nowhere')[0].onclick=()=>{resetEverything();drawHomePage()}}
function resetEverything(){goc=0,vongLap,pos=[],posChuong=[[],[],[],[],[]],posNha=[],viTriQuanCo=[0,[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]],luot=[0,0,0,0,0],home=[0,4,4,4,4],chuong=[[],[],[],[],[]],dice=[[],[],[],[],[]],gameMode=1}
function toMau(){let colors=[['rgb(100,100,225)','rgb(160,160,225)'],['rgb(100,225,100)','rgb(160,225,160)'],['rgb(225,100,100)','rgb(255,160,160)'],['rgb(225,225,0)','rgb(225,225,120)']];for(let i=1;i<=4;i++){pos[14*(i-1)].style.backgroundColor=colors[i-1][0];pos[14*(i-1)].onmouseenter=()=>pos[14*(i-1)].style.backgroundColor=colors[i-1][1];pos[14*(i-1)].onmouseleave=()=>pos[14*(i-1)].style.backgroundColor=colors[i-1][0];chuyenDi(pos[14*(i-1)]);for(let k=0;k<4;k++){posNha[k+1].onmouseenter=()=>posNha[k+1].style.filter='saturate(130%)';posNha[k+1].onmouseleave=()=>posNha[k+1].style.filter='saturate(100%)';chuyenDen(i,posNha[i])}
for(let j=1;j<=6;j++){posChuong[i][j].style.backgroundColor=colors[i-1][0];posChuong[i][j].onmouseenter=()=>posChuong[i][j].style.backgroundColor=colors[i-1][1];posChuong[i][j].onmouseleave=()=>posChuong[i][j].style.backgroundColor=colors[i-1][0]}}
moveDice(1)}
function Bugmau(){for(let i=1;i<=4;i++){posNha[i].style.filter='brightness(100%)'}
for(let i=1;i<=55;i++){pos[i].style.filter='brightness(100%)'}
for(let i=1;i<=4;i++){pos[nha[i]].style.filter='brightness(100%)'}
for(let i=1;i<=4;i++)
for(let j=1;j<=6;j++){posChuong[i][j].style.filter='brightness(100%)'}}
function KiemTra(team,viTri,soXucXac){if(viTri==cua[team])
for(let i=1;i<=soXucXac;i++)
if(chuong[team][i]==1)
return!1;if(soXucXac!=6&&viTri==-1)
return!1;if(viTri>-1&&viTri!=cua[team]){for(let i=1;i<=4;i++)
for(let j=0;j<4;j++){if(viTriQuanCo[i][j]>=0&&viTri+soXucXac<56&&(viTri-viTriQuanCo[i][j])*(viTri+soXucXac-viTriQuanCo[i][j])<0)
return!1;if(viTriQuanCo[i][j]>=0&&viTri+soXucXac>55&&(viTriQuanCo[i][j]>viTri||viTriQuanCo<(viTri+soXucXac)%56))
return!1}
if((viTri-cua[team])*(viTri+soXucXac-cua[team])<0)
return!1;for(let i=0;i<4;i++){if((viTri+soXucXac)%56==viTriQuanCo[team][i])
return!1}}
if(viTri<-1){if(viTri!=-soXucXac)
return!1;for(let ngua=0;ngua<4;ngua++)
if(viTriQuanCo[team][ngua]==viTri-1)
return!1;if(viTri==-7)
return!1}
if(viTri==-1){for(let ngua=0;ngua<4;ngua++)
if(viTriQuanCo[team][ngua]==nha[team])
return!1}
return!0}
function KiemTraTongThe(team){for(let xucXac of dice[team]){for(let j=0;j<4;j++){if(KiemTra(team,viTriQuanCo[team][j],xucXac))
return!0}}
return!1}
function SangDen(div){div.style.filter='brightness(70%)'}
function ToiDen(div){div.style.filter='brightness(85%)'}
function ChuyenLuot(team){Bugmau();ketQua.innerHTML='';luot[team]=0;for(let i=1;i<=4;i++){posNha[i].onclick={}}
for(let i=0;i<56;i++){pos[i].onclick={}}
dice[team]=[];team%=4;moveDice(team+1);setTimeout(()=>{XucXac(team+1)},1000)}
function moveDice(team){switch(team){case 1:control.style.top='3%';control.style.left='5%';ketQua.style.direction='ltr';break;case 2:control.style.top='65%';control.style.left='5%';ketQua.style.direction='ltr';break;case 3:control.style.top='65%';control.style.left='75%';ketQua.style.direction='rtl';break;case 4:control.style.top='3%';control.style.left='75%';ketQua.style.direction='rtl';break;default:break}}
function LoaiBo(des){for(let i=1;i<=4;i++){for(let j=0;j<4;j++)
if(viTriQuanCo[i][j]==des){let sound=new Audio('sound/ngoec.wav');sound.play();viTriQuanCo[i][j]=-1;chuyenDen(i,posNha[i]);home[i]++}}}
function chuyenDen(team,node){let classNames=node.className;if(classNames.includes('pos')||classNames.includes('chuong'))
node.style.backgroundImage='url(images/horse'+team+'.svg)';else node.innerHTML+='<img src="images/horse'+team+'.svg">'}
function chuyenDi(node){let classNames=node.className;if(classNames.includes('pos')||classNames.includes('chuong')){node.style.backgroundImage='none';for(let i=0;i<4;i++)
if(node==pos[i*14])node.style.backgroundImage='url(images/arrow'+(i+1)+'.svg)'}
else if(node.firstChild)
node.removeChild(node.firstChild)}
function ChuyenQuan(team,ngua,soXucXac){let sound=new Audio('sound/dc'+Math.floor((Math.random()*2)+1)+'.wav');sound.play();sound.onloadedmetadata=()=>{setTimeout(()=>{let src=viTriQuanCo[team][ngua];if(src==cua[team]){chuyenDi(pos[src]);chuyenDen(team,posChuong[team][soXucXac]);chuong[team][soXucXac]=1;pos[src].onclick={}
posChuong[team][soXucXac].onclick={}
viTriQuanCo[team][ngua]=-soXucXac-1}else if(src>=0){des=(src+soXucXac)%56;LoaiBo(des);chuyenDi(pos[src]);chuyenDen(team,pos[des]);pos[src].onclick={}
pos[des].onclick={}
viTriQuanCo[team][ngua]=des}else if(src==-1){LoaiBo(nha[team]);chuyenDen(team,pos[nha[team]]);posNha[team].onclick={}
pos[nha[team]].onclick={}
pos[nha[team]].style.color=mau[team];chuyenDi(posNha[team]);home[team]--;viTriQuanCo[team][ngua]=nha[team]}else if(src<-1){chuyenDi(posChuong[team][-src-1]);chuyenDen(team,posChuong[team][-src]);chuong[team][-src-1]=0;chuong[team][-src]=1;posChuong[team][-src-1].onclick={}
posChuong[team][-src].onclick={}
viTriQuanCo[team][ngua]--}
if(win(team)){AnMung(team)}else{luot[team]--;Bugmau();if(soXucXac==6){dice[team].splice(0,1)}else dice[team].splice(dice[team].length-1,1);if(luot[team]==0)
ChuyenLuot(team)
else DiChuyen(team)}},sound.duration*1000)}}
function TomauODiDuoc(team,ngua){Bugmau();viTri=viTriQuanCo[team][ngua];for(let i=0;i<dice[team].length;i++){let soXucXac=dice[team][i];if(viTri==-1){if(KiemTra(team,viTri,soXucXac)){SangDen(posNha[team]);ToiDen(pos[nha[team]]);pos[nha[team]].onclick=function(){ChuyenQuan(team,ngua,6)}}}else if(viTri==cua[team]){if(KiemTra(team,viTri,soXucXac)){SangDen(pos[viTri]);ToiDen(posChuong[team][soXucXac]);posChuong[team][soXucXac].onclick=function(){ChuyenQuan(team,ngua,soXucXac)}
if(luot[team]>1&&KiemTra(team,viTri,6)){ToiDen(posChuong[team][6]);posChuong[team][6].onclick=function(){ChuyenQuan(team,ngua,6)}}}}else if(viTri>-1){if(KiemTra(team,viTri,soXucXac)){SangDen(pos[viTri]);ToiDen(pos[(viTri+soXucXac)%56]);pos[(viTri+soXucXac)%56].onclick=function(){ChuyenQuan(team,ngua,soXucXac)}}
if(soXucXac==1){let khoangCach=viTri%14==13?14:13-viTri%14;if(khoangCach>0&&KiemTra(team,viTri,khoangCach)){ToiDen(pos[(viTri+khoangCach)%56])
pos[(viTri+khoangCach)%56].onclick=function(){ChuyenQuan(team,ngua,khoangCach)}}}
if(luot[team]>1&&KiemTra(team,viTri,6)){ToiDen(pos[(viTri+6)%56]);pos[(viTri+6)%56].onclick=function(){ChuyenQuan(team,ngua,6)}}}else if(KiemTra(team,viTri,soXucXac)){SangDen(posChuong[team][soXucXac-1]);ToiDen(posChuong[team][soXucXac]);posChuong[team][soXucXac].onclick=function(){ChuyenQuan(team,ngua,soXucXac)}}}}
function DiChuyen(team){boluot.onclick=function(){ketQua.innerHTML="bo luot";ChuyenLuot(team)}
soXucXac=dice[team][dice[team].length-1];let nhoTam=new Array();if(KiemTraTongThe(team)){if(luot[team]>1){for(let ngua=0;ngua<4;ngua++){let viTri=viTriQuanCo[team][ngua];if(viTri==-1){if(KiemTra(team,-1,6)){SangDen(posNha[team]);ToiDen(pos[nha[team]]);nhoTam.push([posNha[team],pos[nha[team]]]);posNha[team].onclick=function(){if(KiemTra(team,-1,6))
TomauODiDuoc(team,ngua,-1)}}}else if(viTri==cua[team]){if(KiemTra(team,viTri,soXucXac)){SangDen(pos[cua[team]]);ToiDen(posChuong[team][soXucXac]);nhoTam.push([pos[cua[team]],posChuong[team][soXucXac]]);pos[cua[team]].onclick=function(){TomauODiDuoc(team,ngua,viTri)}}
if(KiemTra(team,viTri,6)){ToiDen(posChuong[team][6]);nhoTam.push([pos[cua[team]],posChuong[team][6]])}}else if(viTri>-1){if(KiemTra(team,viTri,soXucXac)){SangDen(pos[viTri]);ToiDen(pos[(viTri+soXucXac)%56]);nhoTam.push([pos[viTri],pos[(viTri+soXucXac)%56]]);pos[viTri].onclick=function(){if(KiemTra(team,viTri,soXucXac))
TomauODiDuoc(team,ngua,viTri)}
if(soXucXac==1){let khoangCach=viTri%14==13?14:13-viTri%14;if(khoangCach>0&&KiemTra(team,viTri,khoangCach)){ToiDen(pos[(viTri+khoangCach)%56])
nhoTam.push([pos[viTri],pos[(viTri+khoangCach)%56]]);pos[viTri].onclick=function(){if(viTri>=0&&KiemTra(team,viTri,khoangCach))
TomauODiDuoc(team,ngua,viTri)}}}}
if(KiemTra(team,viTri,6)){SangDen(pos[viTri]);ToiDen(pos[(viTri+6)%56]);nhoTam.push([pos[viTri],pos[(viTri+6)%56]]);pos[viTri].onclick=function(){if(KiemTra(team,viTri,6))
TomauODiDuoc(team,ngua,viTri)}}}else{if(KiemTra(team,viTri,soXucXac)){SangDen(posChuong[team][soXucXac-1]);ToiDen(posChuong[team][soXucXac]);nhoTam.push([posChuong[team][soXucXac-1],posChuong[team][soXucXac]]);posChuong[team][soXucXac-1].onclick=function(){TomauODiDuoc(team,ngua,viTri)}}
if(KiemTra(team,viTri,6)){SangDen(posChuong[team][6-1]);ToiDen(posChuong[team][6]);nhoTam.push([posChuong[team][6-1],posChuong[team][6]]);posChuong[team][6-1].onclick=function(){TomauODiDuoc(team,ngua,viTri)}}}}}else for(let ngua=0;ngua<4;ngua++){let viTri=viTriQuanCo[team][ngua];if(viTri==cua[team]){if(KiemTra(team,viTri,soXucXac)){SangDen(pos[viTri]);ToiDen(posChuong[team][soXucXac]);nhoTam.push([pos[viTri],posChuong[team][soXucXac]]);pos[viTri].onclick=function(){if(viTri==cua[team]&&KiemTra(team,viTri,soXucXac))
TomauODiDuoc(team,ngua,viTri)}}}else if(viTri>=0){if(KiemTra(team,viTri,soXucXac)){SangDen(pos[viTri]);ToiDen(pos[(viTri+soXucXac)%56]);nhoTam.push([pos[viTri],pos[(viTri+soXucXac)%56]]);pos[viTri].onclick=function(){if(viTri>=0&&KiemTra(team,viTri,soXucXac))
TomauODiDuoc(team,ngua,viTri)}}
if(soXucXac==1){let khoangCach=viTri%14==13?14:13-viTri%14;if(khoangCach>0&&KiemTra(team,viTri,khoangCach)){ToiDen(pos[(viTri+khoangCach)%56])
nhoTam.push([pos[viTri],pos[(viTri+khoangCach)%56]]);pos[viTri].onclick=function(){if(viTri>=0&&KiemTra(team,viTri,khoangCach))
TomauODiDuoc(team,ngua,viTri)}}}}else if(viTri==-1){if(KiemTra(team,viTri,soXucXac)){SangDen(posNha[team]);ToiDen(pos[nha[team]]);nhoTam.push([posNha[team],pos[nha[team]]]);posNha[team].onclick=function(){if(KiemTra(team,-1,6))
TomauODiDuoc(team,ngua,-1)}}}else if(KiemTra(team,viTri,soXucXac)){SangDen(posChuong[team][soXucXac-1]);ToiDen(posChuong[team][soXucXac]);nhoTam.push([posChuong[team][soXucXac-1],posChuong[team][soXucXac]]);posChuong[team][soXucXac-1].onclick=function(){TomauODiDuoc(team,ngua,viTri)}}}
if(gameMode==1||(gameMode==0&&team!=1))
think(team,nhoTam)}else setTimeout(function(){ChuyenLuot(team)},500)}
function KetQua(team){ketQua.innerHTML="";for(let i=0;i<dice[team].length;i++){ketQua.innerHTML+=dice[team][i]+" "}}
function XucXac(team){KetQua(team);let soXucXac=Math.floor((Math.random()*6)+1);sound=TiengXucXac();sound.onloadedmetadata=function(){luot[team]++;dice[team].push(soXucXac);setTimeout(()=>{if(soXucXac==6){XucXac(team)}else{KetQua(team);DiChuyen(team)}},sound.duration*1000)}}
function TiengXucXac(){let soFileAudio=6;let randomSoAudio=Math.floor((Math.random()*soFileAudio)+1);let sound=new Audio('sound/xx'+randomSoAudio+'.wav');sound.play();return sound}
function NhapNhay(mode,el){el.style.opacity=mode;let last=+new Date();let tick=function(){el.style.opacity=mode?+el.style.opacity-(new Date()-last)/500:+el.style.opacity+(new Date()-last)/500;last=+new Date();if((!mode&&el.style.opacity<1)||(mode&&el.style.opacity>0)){(window.requestAnimationFrame&&requestAnimationFrame(tick))||setTimeout(tick,10)}else NhapNhay(1-mode,el)};tick()}
function win(team){for(let val of viTriQuanCo[team]){if(val!=-4&&val!=-5&&val!=-6&&val!=-7)
return!1}
return!0}
function AnMung(team){Bugmau();winSound=new Audio('sound/ALS.mp3');winSound.play();winSound.onloadedmetadata=function(){setTimeout(()=>{let colorTeam;switch(team){case 1:colorTeam='blue';break;case 2:colorTeam='green';break;case 3:colorTeam='red';break;case 4:colorTeam='yellow';break}
newGame=confirm('The team '+colorTeam+' win! \nPlay again?');if(newGame==1)
location.reload();else alert("i'm out");return!1},3000)}}
function think(team,tam){let tamthoi=danhGia(team,tam);let diem=new Array();for(let i=0;i<tamthoi.length;i++){diem.push(tamthoi[i][2])}
let choice=luaChon(diem);setTimeout(function(){tamthoi[choice][0].click();setTimeout(function(){tamthoi[choice][1].click()},Math.round(Math.random()*200))},Math.round(Math.random()*speed))}
function danhGia(team,tam){for(let j=0;j<tam.length;j++){if(posChuong[team].includes(tam[j][1]))
tam[j].push(80*posChuong[team].indexOf(tam[j][1])-77);else if(pos[cua[team]].isEqualNode(tam[j][1]))
tam[j].push(120);else if(pos[nha[team]].isEqualNode(tam[j][1]))
tam[j].push(60);else{let i=pos.indexOf(tam[j][1]);if(tonTai(i))
tam[j].push(2*((i-nha[team]+56*2)%56));else if(i==cua[team]-1)
tam[j].push(0);else tam[j].push((i-nha[team]+56*2)%56)}}
if(luot[team]>1)tam.push([document.getElementsByClassName('background')[0],boluot,3]);return tam}
function tonTai(viTri){for(let i=1;i<=4;i++){for(let j=0;j<4;j++)
if(viTriQuanCo[i][j]==viTri){return!0}}
return!1}
function luaChon(arr){let newarr=arr.slice(0),sum=0,sumArr=new Array();newarr.sort(function(a,b){return a-b});for(let val of newarr){sum+=val;sumArr.push(sum)}
let r=Math.round(Math.random()*sum),i=0;while(r>sumArr[i])
i++;let choice=arr.indexOf(newarr[i]);return choice}
function radiotextClick(i){if(i==0)
document.getElementsByClassName("radio")[0].click();else document.getElementsByClassName("radio")[1].click()}
function drawHomePage(){let home='<div class="openpage"><p class="game-title fontlarge">CỜ CÁ NGỰA</p><div class="gamemode fontmedium"><a onclick="play(0)">⏵ 1 người đấu 3 máy</a> <br><a onclick="play(1)">⏵ Xem 4 máy đấu với nhau</a></div></div>';document.getElementsByClassName('table-container')[0].innerHTML=home}
function play(mode){gameMode=mode;let tablexhr=new XMLHttpRequest();tablexhr.open('GET','docs/board.txt',!1);tablexhr.send();document.getElementsByClassName('table-container')[0].innerHTML=tablexhr.responseText;let divs=document.querySelectorAll("div");for(let i=0;i<divs.length;i++){if(divs[i].className.includes('pos')||divs[i].className.includes('chuong')){divs[i].style.gridArea=divs[i].className;divs[i].style.backgroundSize='100%';if(divs[i].className.includes("chuong1")||divs[i].className.includes("chuong3")||divs[i].className.includes("55")||divs[i].className.includes("27")){divs[i].style.backgroundSize='auto 100%'}}}
setTimeout(()=>{setUp();toMau();setTimeout(()=>{if(mode==1)XucXac(1)},1)},1)}
// let elapsedTime = 5;
// function writeTime() {
  
//   document.getElementById("time").textContent = elapsedTime + '秒後に爆破します';

// }
// writeTime();
// const timerId = setInterval(function(){
//   elapsedTime--;
//   writeTime();
//   if (elapsedTime === 0) {
//     alert('爆破')
//     clearInterval(timerId);
//   }
// },1000);


const today = new Date(),

days = ["日","月","火","水","木","金","土"]


function outputDate(date) {
let outputText = "「 "  + today.getFullYear() + "年"
outputText += (date.getMonth() + 1)+ "月"
outputText += date.getDay() + "日"
outputText += date.getHours() + "時"
outputText += date.getMinutes() + "分"
outputText += date.getSeconds() + "秒"
outputText += date.getMilliseconds() + "ミリ秒"
outputText += "(" + days[date.getDay()]　+ ")"

outputText  += " 」です";
 return outputText;
}

const targetDate = new Date(2021, 7 - 1, 23);
document.getElementById("countDown").textContent = "オリンピックまで後" + Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24)) + "日" + (targetDate - today) / (1000 * 60 * 60)  + "時間" 


document.getElementById("date").textContent = "今は" + outputDate(today);

today.setDate(today.getDate() + 1);
document.getElementById("tomorrow").textContent = "明日の今は" + outputDate(today);


// function Countdown(elm,tl,mes){
//   this.initialize.apply(this,arguments);
// }

// Countdown.prototype={
//   initialize:function(elm,tl,mes) {
//           this.elem = document.getElementById(elm);
//           this.tl = tl;
//           this.mes = mes;
//   },countDown:function(){
//           var timer='';
//           var today=new Date();
//           var day=Math.floor((this.tl-today)/(24*60*60*1000));
//           var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
//           var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
//           var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
//           var milli=Math.floor(((this.tl-today)%(24*60*60*1000))/10)%100;
//           var me=this;
//           if( ( this.tl - today ) > 0 ){
//                   if (day) timer += '<span class="countdown-day">'+day+'日</span>';
//                   if (hour) timer += 'と<span class="countdown-hour">'+hour+'時間</span>';
//                   timer += '<span class="countdown-min">'+this.addZero(min)+'分</span>';
//                   timer += '<span class="countdown-sec">'+this.addZero(sec)+'秒</span>';
//                   timer += '<span class="milli">'+this.addZero(milli)+'</span>';
//                   this.elem.innerHTML = timer;
//                   tid = setTimeout( function(){me.countDown();},10 );
//           }else{
//   return;
//   }
//   },addZero:function(num){ return ('0'+num).slice(-2); }
// }

// function Countdown_start(){
//   var tlstart = new Date('2020/08/04 21:00:00'); //開始日時を設定
//   var tlstart_countdown=1; //開始までカウントダウンなし(0)またはカウントダウンあり(1)
//   var tl = new Date('2021/08/10 18:00:00'); //終了日時を設定
//   var today=new Date();
//   if(tlstart<today){
//           var timer = new Countdown('Countdown_start',tl,'');
//   }else{
//           if(tlstart_countdown==1){
//                   var timer = new Countdown('Countdown_start',tlstart,'');
//           }else{
//   return;
//   }  
// }
// timer.countDown();
// }
// Countdown_start();
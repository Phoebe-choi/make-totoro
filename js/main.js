! function() {
	  var duration=50
		$('.actions').on('click','button',function(e){
		let $button=$(e.currentTarget)
		let speed=$button.attr('data-speed')
		$button.addClass('active')
		 .siblings('.active').removeClass('active')
		 switch(speed){
		 	case'slow':
		 		duration=50
		 		break
		 	case'normal':
		 		duration=10
		 		break
		 	case 'fast':
		 		duration=3
		 		break
		 }
	})
	function writeCode(prefix, code, fn) {
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		let id
		id=setTimeout(function run(){
			n += 1
			container.innerHTML = code.substring(0, n)
			styleTag.innerHTML = code.substring(0, n)
			container.scrollTop = container.scrollHeight
			if (n < code.length) {
				id=setTimeout(run,duration)
			}else{
				fn && fn.call()
			}
		}, duration)
	}
	let code = `
/*
 *准备~
 */
.preview {
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  background:#E1DDDD;
}
.wrapper {
  position: relative;
  width:88%;
  height:382px;
}
/*
 *画个大鼻子~
 */
.nose {
  position: absolute;
  z-index: 1;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  height: 15px;
  width: 34px;
  border-bottom-left-radius: 55% 50%;
  border-bottom-right-radius: 55% 50%;
  border-top-left-radius: 50% 60%;
  border-top-right-radius: 50% 60%;
  background: #837373;
  transition: 0.35s 0.2s;
}
/*
 *开始画眼睛
 */
.eye {
  width: 43px;
  height: 43px;
  background: white;
  border-radius: 50%;
  position: relative;
  top: 52px;
  z-index: 1;
}
.eye.eye-left {
  position: absolute;
  right: 50%;
  margin-right: 65px;
}
.eye.eye-right {
  position: absolute;
  left: 50%;
  margin-left: 65px;
}
.eye.eye-left::after {
  content: '';
  display: block;
  width: 15px;
  height: 15px;
  right: 7px;
  top: 10px;
  background: #837373;
  border-radius: 50%;
  position: absolute;
}
.eye.eye-right::after {
  content: '';
  display: block;
  width: 15px;
  height: 15px;
  left: 7px;
  top: 10px;
  background: #837373;
  border-radius: 50%;
  position: absolute;
}
/*
 *眼睛得有眼珠子
 */
.eye.eye-left .eyeball {
  width: 4px;
  height: 5px;
  background: white;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  right: 11px;
  top: 14px;
}
.eye.eye-right .eyeball {
  width: 4px;
  height: 5px;
  background: white;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  left: 11px;
  top: 14px;
}
/*
 *龙猫的小嘴巴
 */
.mouth {
  position: absolute;
  width: 6px;
  height: 9px;
  background: #837373;
  border-radius: 7px;
  left: 50%;
  margin-left: -2px;
  top: 123px;
  z-index: 1;
}
/*
 *大脑袋
 */
.head {
  position: absolute;
  left: 10%;
  height: 200px;
  width: 280px;
  border-top-left-radius: 50% 60%;
  border-top-right-radius: 50% 60%;
  background-color: #BDB4B4;
  z-index: 1;
}
/*
 *不知怎么形容的耳朵
 */
.ear {
  position: absolute;
  top: -50px;
  height: 70px;
  width: 42px;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  border-top-left-radius: 30px 100%;
  border-top-right-radius: 30px 100%;
  background-color: #BDB4B4;
  transform-origin: center 145px;
}
.ear::after {
  content: '';
  position: absolute;
  top: calc(100% - 5px);
  left: 50%;
  transform: translateX(-50%);
  height: 70px;
  width: 30px;
  background-color: #BDB4B4;
}
/*
 *左耳~
 */
.ear-left {
  left: 45px;
  transform: rotate(-15deg);
}
/*
 *右耳~
 */
.ear-right {
  right: 45px;
  transform: rotate(15deg);
}
/*
 *接下来开始画身体
 */
#totoro-body {
  position: relative;
  top: 52px;
  left: -46px;
  width: 380px;
  height: 400px;
  border-bottom-left-radius: 45% 30%;
  border-bottom-right-radius: 45% 30%;
  border-top-left-radius: 50% 60%;
  border-top-right-radius: 50% 60%;
  background-color: #BDB4B4;
  display: inline-block;
}
/*
 *还有你的大肚腩
 */
.belly {
  position: absolute;
  top: 109px;
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  height: 280px;
  border-bottom-left-radius: 45% 35%;
  border-bottom-right-radius: 45% 35%;
  border-top-left-radius: 50% 60%;
  border-top-right-radius: 50% 60%;
  background-color: #E1DDDD;
  transition: 0.6s;
  z-index: 1;
}
/*
 *大肚腩上的神秘花纹
 */
.furs {
  width: 43px;
  height: 14px;
  background-color: #BDB4B4;
  transform: rotate(45deg);
  border-radius: 50%;
  position: absolute;
  transform-origin: 0px;
  left: 91px;
  top: 34px;
  transform: rotate(44deg) skew(-2deg, -2deg) scale(0.9, 1);
}
.furs::before {
  content: "";
  display: block;
  background-color: transparent;
  width: 40px;
  height: 40px;
  transform: rotate(-15deg) skew(-30deg) scale(1, .866);
  position: absolute;
  z-index: 1;
  top: 12px;
  left: 7px;
  border-radius: 20%;
  box-shadow: -16px -16px 0px -6px #BDB4B4;
}
.furs::after {
  content: "";
  display: block;
  width: 43px;
  height: 14px;
  background-color: #BDB4B4;
  transform: rotate(90deg);
  border-radius: 50%;
  position: absolute;
  top: 19px;
  left: -19px;
}
.furs.furs-1 {
top: 33px;
left: 82px;
transform: rotate(35deg);
}
.furs.furs-2 {
top: 19px;
left: 184px;
transform: rotate(45deg);
}
.furs.furs-3 {
top: 82px;
left: 133px;
transform: rotate(44deg) skew(3deg, 5deg) scale(0.9, 0.9);
}
.furs.furs-4 {
top: 99px;
left: 48px;
transform: rotate(35deg) skew(3deg, 0deg) scale(0.7, 0.8);
}
.furs.furs-5 {
top: 33px;
left: 278px;
transform: rotate(48deg);
}
.furs.furs-6 {
top: 94px;
left: 315px;
transform: rotate(60deg) skew(3deg, 0deg) scale(0.8, 0.7);
}
.furs.furs-7 {
top: 81px;
left: 228px;
transform: rotate(46deg) skew(3deg, 5deg) scale(0.9, 0.9);)
}
/*
 *手臂
 */
.arm {
position: absolute;
width: 90px;
height: 160px;
background: #B3A9A9;
border-radius: 45%;
z-index: -1;
}
.arm-left {
transform: rotate(31deg);
top: 71px;
left: 3px;
}
.arm-right {
transform: rotate(-31deg);
top: 69px;
left: 100%;
margin-left: -92px;
}
/*
 *来四个爪子
 */
.nail {
position: absolute;
height: 20px;
width: 5px;
background-color: white;
border-bottom-left-radius: 2px 70%;
border-bottom-right-radius: 2px 70%;
border-top-left-radius: 2px;
border-top-right-radius: 2px;
z-index: 3;
}
.nail.nail-1 {
top: 146px;
left: 20px;
}
.nail.nail-2 {
top: 150px;
left: 31px;
}
.nail.nail-3 {
top: 146px;
left: 64px;
}
.nail.nail-4 {
top: 150px;
left: 53px;
}
/*
 *噢，差点把胡子忘了
 */
.beard-1, .beard-2, .beard-3, .beard-4, .beard-5, .beard-6{
position: absolute;
width: 86px;
height: 2px;
border-radius: 2px;
background-color: #837373;
z-index: 2;
}
.beard-left .beard-1{
  top: 99px;
  left: -63px;
  transform: rotate(13deg);
}
.beard-left .beard-2{
  top:116px;
  left: -65px;
}
.beard-left .beard-3{
  top:129px;
  left: -64px;
  transform: rotate(-9deg)
}
.beard-right .beard-4{
  top: 116px;
  left: 258px;
}
.beard-right .beard-5{
  top:100px;
  left: 256px;
  transform: rotate(-12deg)
}
.beard-right .beard-6{
  top:131px;
  left: 258px;
  transform: rotate(10deg)
}
/*
 *大短腿
 */
.leg{
  position: absolute;
  z-index: -1;
  bottom: -5px;
  width: 140px;
  height: 60px;
  background-color: #B3A9A9;
}
.leg.leg-left {
  right: calc(50% + 5px);
  border-radius: 30px;
  border-bottom-left-radius: 70% 100%;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 50% 15px;
  border-top-right-radius: 15px;
}
.leg.leg-right {
  left: calc(50% + 5px);
  border-radius: 30px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 70% 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 50% 15px;
}
/*
 *画好啦，一只可爱的龙猫送给你~
 */
`
	writeCode('', code)
}.call()
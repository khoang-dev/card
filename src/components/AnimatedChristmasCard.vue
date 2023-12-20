<template>
  <div class="container">
    <div class="christmas-card">
  <input id="open" type="checkbox">
  <label class="open" for="open"></label>
<div class="card-front">
  <div class="christmas-tree"></div>
  <div class="ribbon"></div>
  <div class="text">- Click to Open -</div>
  <div class="star"></div>
  <div class="balls"></div>
</div>
  
  <div class="card-inside">
    <div class="title">Merry<br/>Christmas!</div>
  <div class="wishes">I hope the magic of Christmas fills every corner of your heart and home with joy — now and always.</div>
  <div class="gift">
    <div class="bow"></div>
  </div>
</div>
</div>
  </div>
</template>

<script lang="ts" setup>

const a = (b: string)=> {
console.log(b)
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  justify-content: end;
  align-items: end;
}
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcb592;
}

input#open {
  display: none;
}

.christmas-card {
  position: relative;
  width: 200px;
  height:300px;
  transform-style: preserve-3d;
	transform: perspective(2500px);
  transition: 3s;
}

.card-front {
  position: relative;
  background-color: #fff;
  width: 200px;
  height:300px;
  overflow: hidden;
  transform-origin: left;
  box-shadow: inset 100px 20px 100px rgba(0,0,0,.13), 30px 0 50px rgba(0,0,0,0.1);
  transition: .3s;
}

.card-front:before {
  content:"";
  position: absolute;
  width: 180px;
  height: 280px;
  background-color: #c94038;
  top: 10px;
  left: 10px;
}

.christmas-tree {
  position: absolute;
  width:0;
  height:0;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
  border-bottom: 160px solid #034247;
  top: 75px;
  left:50px;
}

.christmas-tree:after {
  content:"";
  position: absolute;
  width: 100px;
  height: 25px;
  background-color: #c47f1a;
  left:-50px;
  top:140px;
}

.christmas-tree:before {
  content:"";
  position: absolute;
  background-color: #a86d16;
  width:50px;
  height: 25px;
  top:130px;
  left:20px;
  box-shadow: -90px 0 #a86d16;
}

.card-inside {
  position: absolute;
  background-color: #fff;
  width: 200px;
  height:300px;
  z-index:-1;
  left:0;
  top:0;
  box-shadow: inset 100px 20px 100px rgba(0,0,0,0.2);
}

.card-inside:before {
  content:"";
  position: absolute;
  width: 180px;
  height: 280px;
  background-color: #c94038;
  top: 10px;
  left: 10px;
}

.open {
  position: absolute;
  width: 200px;
  height:300px;
  left:0;
  top:0;
  background-color: transparent;
  z-index:6;
  cursor: pointer;
}

#open:checked ~ .card-front {
  transform: rotateY(-155deg);
  box-shadow: inset 100px 20px 100px rgba(0,0,0,.13), 30px 0 50px rgba(0,0,0,0.1);
}

#open:checked ~ .card-front:before {
  z-index:5;
}


.text {
  position: absolute;
  color: white;
  font-family: brush script mt;
  top:260px;
  width:200px;
  text-align: center;
  font-size:15px;
}

.text:before {
  content:"Merry Christmas!";
  position: absolute;
  width:80px;
  color: #333;
  text-align: center;
  line-height: 10px;
  top:-42.5px;
  left:61px;
}

.text:after {
  content:"";
  position: absolute;
  width:0;
  height:0;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  border-bottom: 20px solid #faa307;
  top:-185px;
  left:93px;
}

.ribbon, .ribbon:before {
  position: absolute;
  width:0;
  height:0;
  border-bottom: 12.5px solid transparent;
  border-top: 12.5px solid transparent;
}

.ribbon {
  border-left: 10px solid #c94038;
  top:205px;
  left:30px;
}

.ribbon:before {
  content:"";
  border-right: 10px solid #c94038;
  left: 120px;
  top:-12.5px;
}

.ribbon:after {
  content:"";
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius:50%;
  background-color: white;
  top:-25px;
  left:21.5px;
  box-shadow: 5px -3px white, 10px -6px white, 15px -9px white, 20px -12px white, 25px -15px white, 30px -18px white, 35px -21px white, 40px -24px white, 45px -27px white, 50px -30px white, 55px -33px white, 60px -36px white, 60px -36px white, 15px -50px white, 20px -53px white, 25px -56px white, 30px -59px white, 35px -62px white, 40px -65px white, 45px -68px white, 50px -71px white;
}

.star {
  position: absolute;
  display: block;
  width: 0px;
  height: 0px;
  border-right: 20px solid transparent;
  border-bottom: 13px solid #ffba08;
  border-left: 20px solid transparent;
  transform: rotate(-35deg);
  top:68px;
  left:80px;
    }

.star:before {
      border-bottom: 13px solid #ffba08;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      position: absolute;
      height: 0;
      width: 0;
      top: -9px;
      left: -11px;
      display: block;
      content: '';
      transform: rotate(-35deg);
    }

.star:after {
      position: absolute;
      display: block;
      top: 0.75px;
      left: -20px;
      width: 0px;
      height: 0px;
      border-right: 20px solid transparent;
      border-bottom: 13px solid #ffba08;
      border-left: 20px solid transparent;
      transform: rotate(-70deg);
      content:'';
}

.balls {
  position: absolute;
  width:12px;
  height: 12px;
  border-radius: 50%;
  background-color: #c94038;
  top:185px;
  left:110px;
  box-shadow: -30px -30px #c94038, -18px -74px #c94038;
}

.balls:before {
  content:"";
  position: absolute;
  border-radius: 50%;
  widtH: 10px;
  height: 10px;
  background-color: #f6b4b8;
  left:-20px;
  top:10px;
  box-shadow: 15px -55px #f6b4b8;
}

.title {
  position: absolute;
  color: #333;
  font-size:30px;
  font-family: brush script mt;
  line-height: 25px;
  text-align: center;
  top:45px;
  width:200px;
}

.wishes {
  position: absolute;
  width: 150px;
  text-align: center;
  font-family: brush script mt;
  line-height:15px;
  font-size: 20px;
  color: #333;
  height: 300px;
  top: 45%;
  left:25px;
}

.gift {
  position: absolute;
  border: 3px solid #333;
  width:30px;
  height: 30px;
  top: 235px;
  left:83px;
}

.gift:before, .gift:after {
  content:"";
  position: absolute;
  background-color: #333;
}

.gift:before {
  width:30px;
  height:3px;
  top:14px;
}

.gift:after {
  height:30px;
  width:3px;
  left: 14px;
}

.bow {
  position: absolute;
}

.bow:before, .bow:after {
  content:"";
  position: absolute;
  width: 7px;
  height: 7px;
  border: 3px solid #333;
  border-radius:50%;
  top:-14px;
}

.bow:before {
  transform: skew(20deg, 10deg);
  left:2px;
}

.bow:after {
  transform: skew(-20deg,-10deg);
  left:15px;
}
</style>
let count = 1;

/*Hamburger Button Actions Define*/
$('.hamburger').click(function(){
    console.log('Clicked hamburger');
    if($('#options').css('visibility') === 'visible'){
        console.log('hidden');
        $('#options').css('visibility','hidden');
    }else{
        console.log('visible');
        $('#options').css('visibility','visible');
    }
});

/*Options Button Actions Define*/
$('.homebtn').click(function(){
    $('.homepage').css('display','block');
    $('.customerpage').css('display','none');
    $('.itempage').css('display','none');
    $('.placeorderpage').css('display','none');
});

$('.customerbtn').click(function(){
    $('.customerpage').css('display','block');
    $('.homepage').css('display','none');
    $('.itempage').css('display','none');
    $('.placeorderpage').css('display','none');
});

$('.itembtn').click(function(){
    $('.itempage').css('display','block');
    $('.homepage').css('display','none');
    $('.customerpage').css('display','none');
    $('.placeorderpage').css('display','none');
});

$('.orderbtn').click(function(){
    console.log('income');
    $('.placeorderpage').css('display','block');
    $('.homepage').css('display','none');
    $('.customerpage').css('display','none');
    $('.itempage').css('display','none');
});

$('.orderdetailsbtn').click(function(){});

/*Line Chart Define*/
const xValues = ['Jan','Feb','March','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

const pointColors = [
    "rgba(255, 0, 72, 1)",
    "rgba(0, 255, 0, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(255, 255, 0, 1)",
    "rgba(255, 0, 255, 1)",
    "rgba(0, 255, 255, 1)",
    "rgba(128, 0, 0, 1)",
    "rgba(0, 128, 0, 1)",
    "rgba(0, 0, 128, 1)",
    "rgba(128, 128, 0, 1)",
    "rgba(128, 0, 128, 1)",
  ];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: pointColors,
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
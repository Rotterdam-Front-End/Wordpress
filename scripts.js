$(function() {
 
var ordersPerMaand = 1;
var orderRegelsPerOrder = 1;
var opslagPerPallet = 1;
var opslagPerSku = 1;
var managementOpslag = 1;
var val = 0;



var handle1 = $( "#custom-handle" );

function handelingValue(){
    var currentSliderValue = ordersPerMaand + orderRegelsPerOrder;
    $( "#handelingen" ).val(currentSliderValue.toFixed(2));   
}

function opslagValue(){
    var currentSliderValue = opslagPerPallet + opslagPerSku + managementOpslag;
    $( "#opslag" ).val(currentSliderValue);
}

$( "#slider_1" ).slider({
  value:1,
  min: 1,
  max: 5000,
  step: 1,
  create: function() {
        handle1.text( $( this ).slider( "value" ) );
  },
  slide: function( event, ui ) {
      ordersPerMaand = ui.value;
      handle1.text( ui.value );
      managementOpslag = ui.value;
      val = ui.value;

       
        managementOpslag = ui.value; 
        if(managementOpslag<100){
            managementOpslag = 75;
        }else if(managementOpslag<500){
            managementOpslag = 100;
        }else {
            managementOpslag = 250;
        }
        console.log(managementOpslag);

      if(ordersPerMaand<100){
          ordersPerMaand = 1.85;
      }else if(ordersPerMaand<300){
          ordersPerMaand = 1.75;
      }else if(ordersPerMaand<500){
          ordersPerMaand = 1.65;
      }else if(ordersPerMaand<1000){
          ordersPerMaand = 1.5;
      }else{
          ordersPerMaand = 1.35;
      }
      console.log(ordersPerMaand)
        handelingValue();
      
  }
  
});
 
var handle = $( "#custom-handle-regels" );

$( "#slider_2" ).slider({
  value:1,
  min: 1,
  max: 10,
  step: 1,
  create: function() {
  handle.text( $( this ).slider( "value" ) );
  },
  slide: function( event, ui ) {         
      orderRegelsPerOrder = ui.value;
	  handle.text( ui.value );
      if(orderRegelsPerOrder<2){
          orderRegelsPerOrder = 0.4 * orderRegelsPerOrder ;
      }else if(orderRegelsPerOrder<5){
          orderRegelsPerOrder = 0.35 * orderRegelsPerOrder;
      }else if(orderRegelsPerOrder<7){
          orderRegelsPerOrder = 0.3 * orderRegelsPerOrder ;
      }else if(orderRegelsPerOrder<10){
          orderRegelsPerOrder = 0.25 * orderRegelsPerOrder;
      }else if(orderRegelsPerOrder>10){
          orderRegelsPerOrder = 0.2 * orderRegelsPerOrder;
      }
      
       handelingValue();
       console.log(orderRegelsPerOrder)
  }

});


var handle3 = $( "#custom-handlePallet" );

$( "#slider_3" ).slider({
  value:1,
  min: 1,
  max: 100,
  step: 1,
  create: function() {
  handle3.text( $( this ).slider( "value" ) );
  },
  slide: function( event, ui ) {
      opslagPerPallet = ui.value;
	  handle3.text( ui.value );
      if(val <100){
          opslagPerPallet = 10.5 * opslagPerPallet;
      }else if(val <300){
          opslagPerPallet = 10 *opslagPerPallet;
      }else if(val <500){
          opslagPerPallet = 9 * opslagPerPallet;
      }else if(val <1000){
          opslagPerPallet = 9.5 * opslagPerPallet;
      }else if(val >1000){
          opslagPerPallet = 8 * opslagPerPallet;
      }
      opslagValue();
      console.log(opslagPerPallet);
  }

});

   
var handle4 = $( "#custom-handleSkus" );

$( "#slider_4" ).slider({
  value:1,
  min: 1,
  max: 1000,
  step: 1,
  create: function() {
  handle4.text( $( this ).slider( "value" ) );
  },
  slide: function( event, ui ) {         
      opslagPerSku = ui.value ;
	  handle4.text( ui.value );
      if(val<100){
          opslagPerSku = 1.25 * opslagPerSku;
      }else if(val<300){
          opslagPerSku = 1.00 * opslagPerSku;
      }else if(val<500){
          opslagPerSku = 0.9 * opslagPerSku;
      }else if(val<1000){
          opslagPerSku = 0.8 * opslagPerSku;
      }else if (val>1000){
          opslagPerSku = 0.75  * opslagPerSku;
      }
      opslagValue();
      console.log(opslagPerSku);
  }
});


});

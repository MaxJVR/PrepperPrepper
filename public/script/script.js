
function make_slider( params_obj ){

    /*  // possible parameter
        params_obj.container
        params_obj.name
        params_obj.rangeMultiplier
        params_obj.units
    */
    var newSlider = {
        container : params_obj.container,
        name : params_obj.name,
        scale : (typeof (params_obj.rangeMultiplier) === undefined) ? params_obj.rangeMultiplier : 1,
        slider: 0,
        handlePosTracker: 0,
        reccomendedAmountMarker: 0,
        rulerBar: 0,
        set_scale: 0
    };

    var conElem = $(params_obj.container);

    // create the div that jQuery ui will make into a slider
    newSlider.slider = $('<div class="resourceSlider"></div>');
    conElem.append(newSlider.slider);
    
    // create the div that will display the current position/value of the handle
    newSlider.handlePosTracker = $('<div class="priHandleTracker">0</div>');
    conElem.append(newSlider.handlePosTracker);

    // create the ruler bar that will go beneath the slider
    newSlider.rulerBar = $('<div class="rulerBar"></div>');
    conElem.append(newSlider.rulerBar);

    // create the div that will mark the recomended amount
    newSlider.reccomendedAmountMarker = $('<div class=".recTick"><span class="recHandleTracker"></span></div>')
    conElem.append(newSlider.reccomendedAmountMarker);

    // create the functions to (re)scale the slider
    newSlider.set_scale = function(new_scale){
        
        newSlider.rulerBar.empty();
        newSlider.scale = new_scale;
        newSlider.slider.slider( "option", "max", 100*newSlider.scale );

        for(var i=1; i<10; ++i ){
            newSlider.rulerBar.append('<div class="rulerTick" style="margin-left:'+((newSlider.rulerBar.width()/(10))-2)+'px;"><span class="tickNumber">'+(i*(10*newSlider.scale))+'</span></div>');
        }
    }

    // jQuery ui does its magic and makes the slider
    newSlider.slider.slider({
        value: 0,
        min: 0,
        max: 100,
        slide: function( event, ui ){
            newSlider.handlePosTracker.text( 'Have: ' + ui.value + ' ' + params_obj.units );
            return true;
        }
    });
    
    return newSlider;

}

$( document ).ready(function(){

    $(".button-collapse").sideNav();

    $('.parallax').parallax();

    $('.tooltipped').tooltip({delay: 50});

    $('input#input_text, textarea#textarea1').characterCounter();

    $('select').material_select();

    $('.modal-trigger').leanModal();

    //$('select').material_select();

    // Pushpin for mini User Card in Achievements
    $('profileCardSmall').pushpin({ top: $('.row').offset().top });

    // to generate a new slider
    var tSlide = make_slider({
        name : 'waterResource',
        container: $('#waterResourceSliderWrapper'),
        units: 'Gallons'
    }).set_scale(1);

    var options = [
        {selector: 'testscroll', offset: 400, callback: 'Materialize.showStaggeredList("testscroll")' },
    ];
    Materialize.scrollFire(options);

});




/*

        <div class="sliderWrapper">
            <div id="waterSlider" class="resourceSlider"></div>
            <div class="rulerBar"></div>
            <div class="priHandleTracker">0</div>

            <div class="recTick">
                <span class="recHandleTracker"></span>
            </div>

            <div class="doubleRangeButton">Double Range</div>
            <div class="foldRangeButton"></div>

            <div id="waterSliderMin">Min: 0</div>
            <div id="waterSliderMax">Max: 100</div>
            <div id="waterSliderUnits">Units: Gallons</div>
        </div>

*/
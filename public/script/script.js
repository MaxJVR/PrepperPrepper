  var options = [
    {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
    {selector: '.other-class', offset: 200, callback: 'globalFunction()' },
  ];
  Materialize.scrollFire(options);


function make_slider( params_obj ){

    var newSlider = {
        container : params_obj.container,
        name : params_obj.name,
        scale : (typeof (params_obj.rangeMultiplier) === undefined) ? params_obj.rangeMultiplier : 1,
        slider: 0,
        importance:  (typeof (params_obj.importance) === undefined) ? params_obj.importance : 1,
        handlePosTracker: 0,
        reccomendedAmount : parseInt(params_obj.container.find('.recommended_var').text()),
        reccomendedAmountMarker: 0,
        reccomendedAmountTracker: 0,
        hidden_input_have: 0,
        double_button: 0,
        fold_button: 0,
        rulerBar: 0,
        set_scale: 0,
        resize : function(){;},
        get_balance: 0
    };

    var conElem = $(params_obj.container);

    // create the div that will mark the recomended amount
    newSlider.reccomendedAmountTracker = $('<span class="recHandleTracker">0</span>');
    conElem.append(newSlider.reccomendedAmountTracker);

    newSlider.double_button = $('<a href="#" class="doubleButton noselect">Zoom Out</a>');
    newSlider.fold_button = $('<a href="#" class="foldButton noselect">Zoom In</a>');
    conElem.append(newSlider.fold_button);
    conElem.append(newSlider.double_button);

    newSlider.fold_button.click(function(){
		var newScale = newSlider.scale / 2;
		newSlider.set_scale(newScale);
	});

    newSlider.double_button.click(function(){
		var newScale = newSlider.scale * 2;
		newSlider.set_scale(newScale);
	});


    newSlider.reccomendedAmountMarker = $('<div class="recTick"></div>');
    conElem.append(newSlider.reccomendedAmountMarker);

	// append the hidden inputs that will post to profile upon clicking save
	newSlider.hidden_input_have = $('<input type="hidden" name="'+newSlider.name+'Have" value="">');
	conElem.append(newSlider.hidden_input_have);

    // create the div that jQuery ui will make into a slider
    newSlider.slider = $('<div class="resourceSlider"></div>');
    conElem.append(newSlider.slider);

    // create the ruler bar that will go beneath the slider
    newSlider.rulerBar = $('<div class="rulerBar"></div>');
    conElem.append(newSlider.rulerBar);

    // create the div that will display the current position/value of the handle
    newSlider.handlePosTracker = $('<div class="priHandleTracker">Have: 0</div>');
    conElem.append(newSlider.handlePosTracker);


    newSlider.get_balance = function(){
        return (this.slider.slider( "option", "value" ) - this.reccomendedAmount) * this.importance;
    }

    // create the functions to (re)scale the slider
    newSlider.set_scale = function(new_scale){

        this.rulerBar.empty();
        this.scale = new_scale;
        this.slider.slider( "option", "max", 100*newSlider.scale );

        this.reccomendedAmountMarker.css('left', (((this.rulerBar.width()) / (100*this.scale)) * this.reccomendedAmount) + 'px');

        this.reccomendedAmountTracker.text('Reccomended:' + this.reccomendedAmount);

        for( var i=1; i<10; ++i ){
            this.rulerBar.append('<div class="rulerTick" style="margin-left:'+((this.rulerBar.width()/(10))-2)+'px"><span class="tickNumber">'+(i*(10*this.scale))+'</span></div>');
        }
        return this;
    }

	$(window).resize(function() {

        newSlider.rulerBar.empty();
        for( var i=1; i<10; ++i ){
			newSlider.reccomendedAmountMarker.css('left', (((newSlider.rulerBar.width()) / (100*newSlider.scale)) * newSlider.reccomendedAmount) + 'px');

            newSlider.rulerBar.append('<div class="rulerTick" style="margin-left:'+((newSlider.rulerBar.width()/(10))-2)+'px"><span class="tickNumber">'+(i*(10*newSlider.scale))+'</span></div>');
        }
	});

    // try and get a value from the html page
    var text_val = parseInt(params_obj.container.find('.have_var').text());

    // jQuery ui does its magic and makes the slider
    newSlider.slider.slider({
        value: (isNaN(text_val) === true) ? 0 : text_val,
        min: 0,
        max: 100,
        slide: function( event, ui ){
            newSlider.handlePosTracker.text( 'Have: ' + ui.value + ' ' + params_obj.units );
            newSlider.hidden_input_have.val( ui.value );
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

    $('.scrollspy').scrollSpy();

    // Pushpin for mini User Card in Achievements
    $('profileCardSmall').pushpin({ top: $('.row').offset().top });

    $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

     $('.slider').slider({full_width: true});

    // to generate a new slider
    var slides = [];

    slides.push(make_slider({
        name : 'waterResource',
        container: $('#waterResourceSliderWrapper'),
        units: 'Gallons',
        importance: 0.9
    }).set_scale(1));

    slides.push(make_slider({
        name : 'foodResource',
        container: $('#foodResourceSliderWrapper'),
        units: 'Meals',
        importance: 0.7
    }).set_scale(1));

    slides.push(make_slider({
        name : 'gunResource',
        container: $('#gunResourceSliderWrapper'),
        units: 'Guns',
        importance: 0.5
    }).set_scale(1));

    $('h1').click(function(){
        var prepScore = 0;
        console.log(slides);
        for(var i=0; i<slides.length; ++i){
            prepScore += slides[i].get_balance();
        }
        console.log('prepScore: ' + prepScore);
    });

  var options = [
    {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
    {selector: '.other-class', offset: 200, callback: 'globalFunction()' },
  ];
  Materialize.scrollFire(options);

});

// Using the closure to map jQuery to $.
// 1) $ vs JQuery
(function ($) {
	// Store our function as a property of Drupal.behaviors.
	Drupal.behaviors.jsdemo = {
		attach: function (context, settings) {

			// 2) Context, parameters
			console.log([context, settings]);
			
			// 3) global functions vs objects
			// 4) selectors
			// 5) ids vs classes, reusability
			var $demoDivs = $(context).find('.demoDiv');
			
			// 6) html/text function
			// 7) css / attr function
			$demoDivs	.html("Hello World!")
					// 7.5) Drupal parameters from settings
					.css({color : settings.color });
			
			// 8) Events
			// 9) jquery shortcuts
			$demoDivs.bind('click', function(event) {
				alert('Hello World clicked!');
				// 8.1) Event object
				// 8.1.1) Mouse coordinates e.pageX, e.pageX - this.offsetLeft for relative coordinates
				// 8.1.2) this keyword
				// 8.2) Event propagation
				//event.stopPropagation();
				//event.stopImmediatePropagation()
			});

			// 9) Creating using jquery shortcut
			var currentTime = $("<div />");
			// 10) Dom manipulation
			currentTime.appendTo($demoDivs);
						
			// 11) Functions as variables
			var updateTime = function() {
				
				// 12) ajax functions
				// 12.1) mime types
				$.ajax({
					url : 'jsdemo/current_time',
					success : function(json) {
						
						currentTime
							.html(json)
							// 13) animate and stop
							.stop()
							.animate({
								'margin-left' : 200 * Math.random(),
								'font-size' : 50 * Math.random() + 20
							});
					}
				});
				setTimeout(updateTime, 5000);
			};
			
			updateTime();
		}
	};
}(jQuery));

// Factory studios
// 

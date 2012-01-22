// Using the closure to map jQuery to $.
(function ($) {
	// Store our function as a property of Drupal.behaviors.
	Drupal.behaviors.jsdemo = {
		attach: function (context, settings) {

			var demoDiv = $('#demoDiv');
			
			
			demoDiv	.html("Hello World!")
					.css({color : settings.color });
			
			demoDiv.bind('click', function(event) {
				alert('Hello World clicked!');
			});

			var currentTime = $("<div />");
			currentTime.appendTo(demoDiv);
						
			var updateTime = function() {
				
				$.ajax({
					url : 'jsdemo/current_time',
					success : function(json) {
						
						currentTime
							.html(json)
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

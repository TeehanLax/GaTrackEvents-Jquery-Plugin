/**
 * @overview jquery.gaTrackEvents.js - Lightweight jQuery plugin to quickly tag Google Analytic events through data attributes via HTML markup.
 * @author Nery Orellana
 * @copyright Teehan+Lax 2013
 */


(function($) {

	$.fn.gaTrackEvents = function(options) {

		if (!this.length) { return this; }

		var opts = $.extend(true, {}, $.fn.gaTrackEvents.defaults, options);

		this.each(function() {
			$(this).bind(opts.event, function(e){
				e.preventDefault();

				var $this = $(this);
				var url = $this.attr('href');
				var category = (typeof $this.data('ga-category') === 'string') ? $this.data('ga-category') : opts.category;
				var action   = (typeof $this.data('ga-action')   === 'string') ? $this.data('ga-action')   : opts.action;
				var label    = (typeof $this.data('ga-label')    === 'string') ? $this.data('ga-label')    : opts.label;
				var value    = (typeof $this.data('ga-value')    === 'string') ? $this.data('ga-value')    : opts.value;

				var eventArr = ['_trackEvent', category, action, label];

				if(value>0){
					eventArr.push(value);
				}

				_gaq.push(eventArr);

				if(opts.linkOut && typeof url === 'string'){
					_gaq.push(function() {
						document.location = url;
					});
				}

				if(typeof opts.callback === 'function'){
					opts.callback($this);
				}

			});

		});

		return this;
	};

	// default options
	$.fn.gaTrackEvents.defaults = {
		event: 'click',
		linkOut:   true,
		callback:  null,
		category: 'General',
		action:   'Click',
		label:    'Unknown',
		value:    0
	};

})(jQuery);
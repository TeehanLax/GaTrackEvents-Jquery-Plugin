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
			$(this).click(function(e){
				e.preventDefault();

				var $this = $(this);
				var linkOut = $this.hasClass('out');

				var category = (typeof $this.attr('data-ga-category') === 'string') ? $this.attr('data-ga-category') : opts.category;
				var action   = (typeof $this.attr('data-ga-action')   === 'string') ? $this.attr('data-ga-action')   : opts.action;
				var label    = (typeof $this.attr('data-ga-label')    === 'string') ? $this.attr('data-ga-label')    : opts.label;
				var value    = (typeof $this.attr('data-ga-value')    === 'string') ? $this.attr('data-ga-value')    : opts.value;

				var eventArr = ['_trackEvent', category, action, label];

				if(value>0){
					eventArr.push(value);
				}

				_gaq.push(eventArr);

				if(linkOut && opts.linkOut){
					var url = $this.attr('href');
					_gaq.push(function() { document.location = url; });
				}

			});

		});

		return this;
	};

	// default options
	$.fn.gaTrackEvents.defaults = {
		linkOut:   true,
		category: 'General',
		action:   'Click',
		label:    'Unknown',
		value:    0
	};

})(jQuery);
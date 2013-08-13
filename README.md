# GaTrackEvents

GaTrackEvents is a lightweight jQuery plugin to quickly tag Google Analytic events through data attributes via HTML markup.

## Instructions

For each element you wish to track an event on, add the following optional data attributes:

1. data-ga-category
2. data-ga-action
3. data-ga-label
4. data-ga-value

<!-- code example -->

    <a href="#" class="ga" data-ga-category="Category" data-ga-action="Action" data-ga-label="Label">Link</a>

Initialize the plugin, targeting a class, ID or element.

    $('.ga').gaTrackEvents();
    
#### Options

1. event: "type"
<br />A string that defines what type of event is being triggered i.e. click, touch, etc. (default: 'Click').

2. linkOut: boolean
<br />A boolean value that indicates whether or not the element needs to performs the default action of linking to an href value (default: true).

3. category: "category"
<br />A string that defines the default category (default: 'General').

4. action: "action"
<br />A string that defines the default action i.e. click, touch, etc. (default: 'Click')

5. label: "label"
<br />A string that defines the default label (default: 'Unknown').

6. value: "type of event"
<br />Description (default: 0).

7. callback: function() {}
<br />A callback function to run after the GA event has been tracked (default: null).
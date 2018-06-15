( function ( $, mw ) {

	'use strict';

	/**
	 * @param {Node} element
	 * @constructor
	 */
	function SRFEventCalendarMod( element ) {
		this.$element = $( element );
		this.calendar = null;
		this.buttonText = mw.msg( 'srfeventcalendarmod-button-text' );
		this.buttonLink = mw.config.get( 'wgSRFEventCalendarModTargetURL' );
		this.wasTriggered = false;

		this.init();
	}

	/**
	 * Binds event to calendar container
	 */
	SRFEventCalendarMod.prototype.init = function () {
		// Look for hidden container which stores actual calendar binding
		var container = $( this.$element ).find( '.srf-container' );
		if ( container ) {
			this.calendar = container;
			// So far there is no better way (without modifying SRC code) to bind to calendar ready-state event except this one
			this.calendar.on( 'srf.eventcalendar.eventRender', this.onCalendarReady.bind( this ) );
		}
	};

	/**
	 * Callback for the ready-state event
	 */
	SRFEventCalendarMod.prototype.onCalendarReady = function () {
		var headerConfig;
		// It's necessary to catch only first event because there will be many "eventRender" events fired
		if ( !this.wasTriggered ) {
			this.wasTriggered = true;

			// Fetch original header configuration
			headerConfig = this.calendar.fullCalendar( 'option', 'header' );
			// Add our custom button to the left button-set
			headerConfig.left += ',srfeventcalendarview'; // srfEventCalendarModButton';
			// Update calendar configuration dynamically
			this.calendar.fullCalendar( 'option', {
				header: headerConfig,
				views: {
					srfeventcalendarview: {
						type: 'srfeventcalendarview',
						buttonLink: this.buttonLink
					}
				},
				buttonText: {
					srfeventcalendarview: this.buttonText
				}
			} );
		}
	};

	mw.SRFEventCalendarMod = SRFEventCalendarMod;

}( jQuery, mediaWiki ) );

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
		this.linkFrame = mw.config.get( 'wgSRFEventCalendarModTargetFrame' );
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
			headerConfig.left += ' srfEventCalendarModButton';
			// Update calendar configuration dynamically
			this.calendar.fullCalendar( 'option', {
				customButtons: {
					srfEventCalendarModButton: {
						text: this.buttonText,
						click: this.onButtonClick.bind( this )
					}
				},
				header: headerConfig
			} );
		}
	};

	/**
	 * Button click event handler
	 *
	 * @param {Event} event
	 */
	SRFEventCalendarMod.prototype.onButtonClick = function ( event ) {
		var $frame, targetHeight;

		event.preventDefault();
		switch ( this.linkFrame ) {
			// Redirects visitor to the link
			case 'page':
				window.location.href = this.buttonLink;
				break;
			// Opens the link in a new window (be aware of popup blockers )
			case 'blank':
				window.open( this.buttonLink );
				break;
			// Loads the link inside of iframe appended to the current page (replacing calendar view)
			case 'view':
				$frame = $( '<iframe />' );
				targetHeight = $( this.$element ).height();
				$frame.attr( 'src', this.buttonLink );
				$frame.css( 'width', '100%' );
				$frame.css( 'min-height', targetHeight + 'px' );
				$frame.css( 'border', '0' );
				$( this.$element ).css( 'height', 'auto' );
				$( this.$element ).html( '' ).append( $frame );
				break;
		}
	};

	mw.SRFEventCalendarMod = SRFEventCalendarMod;

}( jQuery, mediaWiki ) );

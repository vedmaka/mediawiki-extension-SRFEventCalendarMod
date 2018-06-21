( ( function () {

	var FC = $.fullCalendar, View = FC.View, SRFEventCalendarView;

	SRFEventCalendarView = View.extend( {

		render: function () {
			this.el.html( '<div class="srf-loading-dots"></div>' ).load( this.options.views.srfeventcalendarview.buttonLink );
			this.calendar.el.find( '.fc-center' ).hide();
			this.calendar.el.find( '.fc-right' ).hide();
		},

		setHeight: function ( height, isAuto ) {
			// responsible for adjusting the pixel-height of the view. if isAuto is true, the
			// view may be its natural height, and `height` becomes merely a suggestion.
			this.el.css( 'height', height + 'px' );
		},

		destroy: function () {
			this.calendar.el.find( '.fc-center' ).show();
			this.calendar.el.find( '.fc-right' ).show();
		}

	} );

	FC.views.srfeventcalendarview = SRFEventCalendarView;

} )() );

$( function () {
	$( document ).ready( function () {
		$( '.srf-eventcalendar' ).each( function () {
			var mod = new mw.SRFEventCalendarMod( $( this ) );
		} );
	} );
} );

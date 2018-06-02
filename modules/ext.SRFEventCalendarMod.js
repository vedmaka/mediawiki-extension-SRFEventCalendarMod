$( function () {

	var buttonText = mw.msg( 'srfeventcalendarmod-button-text' );
	var buttonLink = mw.config.get( 'wgSRFEventcalendarModTargetURL' );
	var linkFrame = mw.config.get( 'wgSRFEventcalendarModTargetFrame' );

	$( document ).ready( function () {

		$( '.srf-eventcalendar' ).each( function ( i, calendar ) {

			var wasTriggered = false;
			var container = $( calendar ).find( '.srf-container' );
			container.on( 'srf.eventcalendar.eventRender', function ( event, dataHandler ) {

				if ( !wasTriggered ) {

					wasTriggered = true;
					var $button = $( '<span/>' );
					var $buttonInner = $( '<span/>' );
					var $buttonInnerContent = $( '<span/>' );
					var $buttonInnerEffect = $( '<span><span></span></span>' );

					$button.addClass( 'fc-button' );
					$button.addClass( 'fc-state-default' );
					$buttonInner.addClass( 'fc-button-inner' );
					$buttonInnerContent.addClass( 'fc-button-content' );
					$buttonInnerContent.text( buttonText );
					$buttonInnerEffect.addClass( 'fc-button-effect' );

					$buttonInner.append( $buttonInnerContent );
					$buttonInner.append( $buttonInnerEffect );
					$button.append( $buttonInner );

					$button.css( 'margin-left', '20px' );

					$button.on( 'click', function ( e ) {

						switch ( linkFrame ) {
							// Redirects visitor to the link
							case 'page':
								window.location.href = buttonLink;
								break;
							// Opens the link in a new window (be aware of popup blockers )
							case 'blank':
								window.open( buttonLink );
								break;
							// Loads the link inside of iframe appended to the current page (replacing calendar view)
							case 'view':
								var $frame = $( '<iframe />' );
								var targetHeight = $( calendar ).height();
								$frame.attr( 'src', buttonLink );
								$frame.css( 'width', '100%' );
								$frame.css( 'min-height', targetHeight + 'px' );
								$frame.css( 'border', '0' );
								$( calendar ).css( 'height', 'auto' );
								$( calendar ).html( '' ).append( $frame );
								break;
						}

						e.preventDefault();

					} );

					$( container ).find( '.fc-header-left' ).append( $button );

				}
			} );

		} );

	} );

} );

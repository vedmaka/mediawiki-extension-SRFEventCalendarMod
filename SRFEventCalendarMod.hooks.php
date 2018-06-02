<?php

/**
 * Hooks for SRFEventCalandarMod extension
 *
 * @file
 * @ingroup Extensions
 */
class SRFEventCalendarModHooks
{

	public static function onExtensionLoad() {
		
	}

	/**
	 * @param OutputPage $out
	 * @param Skin       $skin
	 */
	public static function onBeforePageDisplay( &$out, &$skin ) {
		if( $GLOBALS['wgSRFEventCalendarModEnabled'] ) {
			$out->addModules( 'ext.srfeventcalendarmod' );
		}
	}

	/**
	 * @param array $vars
	 */
	public static function onResourceLoaderGetConfigVars( &$vars ) {
		if( $GLOBALS['wgSRFEventCalendarModEnabled'] ) {
			$vars['wgSRFEventCalendarModTargetURL'] = $GLOBALS['wgSRFEventCalendarModTargetURL'];
			$vars['wgSRFEventCalendarModTargetFrame'] = $GLOBALS['wgSRFEventCalendarModTargetFrame'];
		}
	}

}

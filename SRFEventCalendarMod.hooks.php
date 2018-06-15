<?php

/**
 * Hooks for SRFEventCalendarMod extension
 *
 * @file
 * @ingroup Extensions
 */
class SRFEventCalendarModHooks {

	/**
	 * @param OutputPage $out
	 * @param Skin       $skin
	 */
	public static function onBeforePageDisplay( &$out, &$skin ) {
		if ( $GLOBALS['wgSRFEventCalendarModEnabled'] ) {
			$out->addModuleStyles( 'ext.srfeventcalendarmod.styles' );
			$out->addModules( 'ext.srfeventcalendarmod.view' );
			$out->addModules( 'ext.srfeventcalendarmod' );
		}
	}

	/**
	 * @param array $vars
	 */
	public static function onResourceLoaderGetConfigVars( &$vars ) {
		if ( $GLOBALS['wgSRFEventCalendarModEnabled'] ) {
			$vars['wgSRFEventCalendarModTargetURL'] = $GLOBALS['wgSRFEventCalendarModTargetURL'];
			$vars['wgSRFEventCalendarModTargetFrame'] = $GLOBALS['wgSRFEventCalendarModTargetFrame'];
		}
	}

}

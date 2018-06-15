The extension allows to add an extra view-button to SRF `eventcalendar` format which load a specified url into calendar view.

![image](https://user-images.githubusercontent.com/592009/41126192-6e39285e-6aaf-11e8-8f16-0679f9e58563.png)

# Requirements

* Mediawiki 1.25+
* SMW 3.0+
* SRF 3.0+

# Setup

* Clone into `extensions/SRFEventCalendarMod`
* Add `wfLoadExtension('SRFEventCalendarMod')` at bottom of `LocalSettings.php`

# Configuration

- `$wgSRFEventCalendarModEnabled` — could be set to `false` or `true`, allows to enable or disable extension
- `$wgSRFEventCalendarModTargetURL` — url to be loaded into calendar view. Please be aware of CORS policy!
- To configure button text edit `srfeventcalendarmod-button-text` message page via `Mediawiki:srfeventcalendarmod-button-text`

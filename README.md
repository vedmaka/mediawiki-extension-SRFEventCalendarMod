The extension allows to add an extra button to SRF `eventcalendar` format which will redirect users to a specified url.

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
- `$wgSRFEventCalendarModTargetURL` — url user will be redirected when clicking the button
- `$wgSRFEventCalendarModTargetFrame` — could be set to:
  - `page` — will navigate user to the link within the same page
  - `blank` — will open a new page
  - `view` — will load specified URL within calendar frame (replacing calendar)
- To configure button text edit `srfeventcalendarmod-button-text` message page via `Mediawiki:srfeventcalendarmod-button-text`

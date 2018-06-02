The extension allows to add an extra button to SRF `eventcalendar` format which will redirect users to a specified url.

![image](https://user-images.githubusercontent.com/592009/40874779-457ed4c2-667c-11e8-9c91-6c9db5612227.png)

# Requirements

* Mediawiki 1.25+
* SMW 2.5+
* SRF 2.5.5+

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

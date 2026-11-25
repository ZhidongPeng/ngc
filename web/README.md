# Homepage layout

Homepage sections use full-width background bands, shared content alignment,
consistent vertical spacing, and subtle dividers. Light sections alternate
paper and white; video and Conversations use navy with lime accents. Rounded
cards remain within these bands for grouped content. These section styles are
scoped to the homepage and do not change other routes.

# Homepage video

The homepage includes a click-to-play video below the hero. Its native controls
support pause, seeking, volume, and fullscreen; it never autoplays and plays
inline on mobile. The hero's "Watch NGC Stories" link scrolls to the player.
The full-width navy-and-lime section pairs the heading with an uncropped portrait
video on desktop and stacks them on mobile.
The video's first frame appears as a poster on initial load. Only the poster
loads initially; the video loads when the visitor presses play. A paper-colored
fallback background and lavender border keep the player distinct from the navy
section while the poster loads.

Deploy [IMG_7595.mp4](./IMG_7595.mp4) and
[IMG_7595-poster.jpg](./IMG_7595-poster.jpg) alongside the page. Regenerate the
poster from the first frame whenever the video changes. The MP4 is an
H.264/AAC copy of the original HEVC [IMG_7595.MOV](./IMG_7595.MOV) for broader
browser compatibility. The original is kept as the source for conversion;
there is no download link on the page. Playback failures display an error
message. Serve the MP4 as `video/mp4` and support byte-range requests for
efficient streaming and seeking.

To regenerate the web copy on macOS after replacing the original:

```sh
avconvert --source IMG_7595.MOV --preset Preset1920x1080 --output IMG_7595.mp4 --replace
```

# Form submissions

The partnership, project, and mentor forms submit to Formspree. No backend
server or private API key is required.

## Enable collection

1. Create a form at https://formspree.io and configure its notification email.
   Complete any verification required by Formspree.
2. Copy the form endpoint (such as `https://formspree.io/f/abcdefgh`) into
   `formspreeEndpoint` in [config.js](./config.js). This endpoint is public;
   never put account credentials or private API keys in the website.
3. Deploy the contents of this directory, including [config.js](./config.js).
4. Send a test submission from each form on the deployed site. Confirm that it
   appears in your Formspree dashboard and that the notification email arrives.

Until an endpoint is configured, submitting shows an explicit configuration
message and does not clear the form or claim success.

## Submitted fields

All forms include `submission_type` (`partnership`, `project`, or `mentor`)
and `email`, so one endpoint can receive all three kinds.

- Partnership: `organization`, `name`, `email`, `organization_type`, `message`.
- Project / mentor: `name`, `email`, `location`, `school`, `stage`, `idea`,
  and repeated `help` fields for every selected checkbox.
  For mentors, `school` contains role/company and `stage` contains expertise;
  for projects they contain age/grade and project stage respectively.

Success appears only after Formspree returns a successful HTTP response.
Pending requests disable navigation/submission buttons within the form.
Failed or timed-out requests keep the entries available for retry. A timeout
does not prove that the server did not receive the submission; retrying may
produce a duplicate. Leaving or reloading the page loses unsent entries.

## Operations and privacy

Review submissions in your Formspree dashboard and manage email notifications,
spam protection, allowed domains, retention, and plan submission limits there.
Check the dashboard if email notifications fail; an accepted submission does
not guarantee email delivery. Review your privacy and youth-data requirements
before launch; form entries are sent to and stored by a third-party service.

The existing contact fallback is `hello@nextgencreators.org`; verify that this
inbox is monitored before deployment.

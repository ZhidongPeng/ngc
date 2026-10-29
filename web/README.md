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

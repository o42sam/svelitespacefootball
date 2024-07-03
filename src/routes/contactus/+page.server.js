const pageTextUrl = "src/lib/static/page-text/contactus";

export async function load({ fetch }) {

  const partnershipAndFeedback = await fetch(`${pageTextUrl}/partnership-and-feedback.txt`).then(async res => { return await res.text() });
  const academyEnrollment = await fetch(`${pageTextUrl}/academy-enrollment.txt`).then(async res => { return await res.text() });

  return({
    partnershipAndFeedback,
    academyEnrollment
  });
}
import partnershipAndFeedbackText from "$lib/txt/en/contactus/partnership-and-feedback.txt"
import academyEnrollmentText from "$lib/txt/en/contactus/academy-enrollment.txt"

export async function load({ fetch }) {

  const partnershipAndFeedback = await fetch(`${partnershipAndFeedbackText}`).then(async res => { return await res.text() });
  const academyEnrollment = await fetch(`${academyEnrollmentText}`).then(async res => { return await res.text() });

  return({
    partnershipAndFeedback,
    academyEnrollment
  });
}
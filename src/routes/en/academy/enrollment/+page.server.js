import enrollmentText from "$lib/txt/en/enrollment/enrollment.txt"
import eligibilityText from "$lib/txt/en/enrollment/eligibility.txt"
import guidelinesText from "$lib/txt/en/enrollment/guidelines.txt"

export async function load({ fetch }) {
  const enrollment = await fetch(`${enrollmentText}`).then(async res => { return await res.text() });
  const eligibility = await fetch(`${eligibilityText}`).then(async res => { return await res.text() });
  const guidelines = await fetch(`${guidelinesText}`).then(async res => { return await res.text() });

  return({
    enrollment,
    eligibility,
    guidelines,
  });
}
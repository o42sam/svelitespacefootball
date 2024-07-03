const pageTextUrl = "/src/lib/static/page-text/enrollment";

export async function load({ fetch }) {

  const enrollment = await fetch(`${pageTextUrl}/enrollment.txt`).then(async res => { return await res.text() });
  const eligibility = await fetch(`${pageTextUrl}/eligibility.txt`).then(async res => { return await res.text() });
  const guidelines = await fetch(`${pageTextUrl}/guidelines.txt`).then(async res => { return await res.text() });

  return({
    enrollment,
    eligibility,
    guidelines,
  });
}
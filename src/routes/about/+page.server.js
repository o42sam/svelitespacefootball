const pageTextUrl = "src/lib/static/page-text/about";

export async function load({ fetch }) {
  try {
    const intro = await fetch(`${pageTextUrl}/intro.txt`).then( async res => { return await res.text() } );
    const objectives = await fetch(`${pageTextUrl}/objectives.txt`).then( async res => {
      const text = await res.text();
      return text.split("\r\n");
    });
    const main = await fetch(`${pageTextUrl}/main.txt`).then( async res => { return await res.text() } );
    const missionStatement = await fetch(`${pageTextUrl}/mission-statement.txt`).then( async res => { return await res.text() } );
    const quotes = await fetch(`${pageTextUrl}/quotes.txt`).then( async res => { return await res.text() } );

    return({
      intro,
      objectives,
      main,
      missionStatement,
      quotes,
    });
  }
  catch (error) {
    console.log(error);
  }
}
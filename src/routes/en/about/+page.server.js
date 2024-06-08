import introText from "$lib/txt/en/about/intro.txt";
import mainText from "$lib/txt/en/about/main.txt";
import missionStatementText from "$lib/txt/en/about/mission-statement.txt";
import objectivesText from "$lib/txt/en/about/objectives.txt";
import quotesText from "$lib/txt/en/about/quotes.txt";

export async function load({ fetch }) {
  try {
    const intro = await fetch(`${introText}`).then( async res => { return await res.text() } );
    const objectives = await fetch(`${objectivesText}`).then( async res => {
      const text = await res.text();
      return text.split("\r\n");
    });
    const main = await fetch(`${mainText}`).then( async res => { return await res.text() } );
    const missionStatement = await fetch(`${missionStatementText}`).then( async res => { return await res.text() } );
    const quotes = await fetch(`${quotesText}`).then( async res => { return await res.text() } );

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
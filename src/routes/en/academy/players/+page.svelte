<script lang="ts">
    import { smallScreen, mediumScreen, largeScreen } from "../../../../stores/media";
    import SecondaryBillboard from "$lib/components/SecondaryBillboard.svelte";
    import { currentLanguage } from "../../../../stores/language";

    import img59 from "$lib/img/other/59.png";
    import img48 from "$lib/img/other/48.jpg";
    import img51 from "$lib/img/other/51.jpg";
    import img57 from "$lib/img/other/57.jpg";
    import img62 from "$lib/img/other/62.jpg";
    import img63 from "$lib/img/other/63.jpg";
    import img15 from "$lib/img/other/15.jpg";
    import img64 from "$lib/img/other/64.jpg";
    import img39 from "$lib/img/other/39.jpg";
    import img37 from "$lib/img/other/37.jpg";

    const billboardImages0 = [
      img59,
    ]

    const billboardImages1 = [
      img48,
      img51,
      img57,
    ]

    const billboardImages4 = [
      img62,
      img63,
      img64,
    ]

    const billboardImages2 = [
      img15,
    ]

    const billboardImages3 = [
      img39,
      img37,
    ]
</script>

<svelte:head>
	<title>Elite Space Football Academy Players</title>
	<meta name="description" content="Who are the players? Find out more about the footballing talent at the Elite Space Football academy." />
	<meta name="keywords" content="players, footballers, footballer, player, football player, soccer players, soccer player, enrollment, enroll, how, how do I enroll, how do I, elite space football company, elite, elite space, elite space football, football, talent" />
	
	<meta property="og:title" content="Elite Space Football | Players">
	<meta property="og:description" content="Who are the players? Find out more about the footballing talent at the Elite Space Football academy.">
	<meta property="og:image" content="{img59}">
	<meta property="og:url" content="https://elitespacefootball.com/en/academy/players">
	<meta property="og:type" content="website">
</svelte:head>
{#if $largeScreen}

<section
class="flex flex-col items-center p-16 pt-0 bg-gradient-to-r from-neutral-200 via-white to-neutral-200 w-3/5 self-center text-xl mt-32">
    <SecondaryBillboard
    images={billboardImages0} />
    <p>At the <a href="{`/${$currentLanguage.trim()}/about#the-academy`}">Elite Space Football Academy</a>, we pride ourselves on fostering an environment where young athletes can thrive, not just as football players, but as disciplined, well-rounded individuals. The academy's success is deeply rooted in the exemplary discipline, laudable attitudes, and insatiable desire to learn exhibited by our players.</p>
    <p>Discipline is the cornerstone of our academy. Each player adheres to a rigorous daily schedule that balances training, academics, and personal development. From early morning drills to late evening study sessions, our players demonstrate remarkable time management and dedication. This structured environment ensures that they develop not only their physical prowess but also their mental resilience.</p>
    <p>Our players are driven by an unquenchable thirst for knowledge and improvement. They actively seek feedback from coaches, engage in tactical discussions, and constantly look for ways to enhance their skills. This desire to learn is evident in their approach to both football and their academic pursuits. They understand that becoming a successful athlete requires a blend of physical talent, strategic thinking, and continuous technical education.</p>
    <p>Focus is a defining trait of the athletes at Elite Space Football Academy. Whether it's during high-pressure matches or intensive training sessions, our players exhibit remarkable concentration and determination. They set clear goals and work tirelessly towards achieving them, embodying the true spirit of perseverance. This laser-sharp focus allows them to excel on and off the field.</p>
    <SecondaryBillboard
    images={billboardImages4} />
    <p>An integral part of the Elite Space Football Academy experience is the communal living arrangement. Players reside together in state-of-the-art facilities that promote a sense of camaraderie and team unity. Living together fosters deep bonds and mutual respect among the players, creating a supportive network that extends beyond the football field. They learn valuable life skills, such as teamwork, communication, and empathy, which are essential for their personal growth and future success.</p>
    <p>At Elite Space Football Academy, our players are the epitome of discipline, positive attitude, and a relentless pursuit of knowledge. Their focus, combined with the excellent living and learning facilities we provide, sets them on a path to success both on and off the field. We are proud of our players and their commitment to excellence, which truly makes Elite Space Football Academy a breeding ground for future stars and exemplary individuals.</p>
    <SecondaryBillboard
    images={billboardImages1}
    caption="In-house 5-aside scrimmage to mark the ELITE SPACE FOOTBALL academy's 5-year anniversary" />    
    <h2 class="text-center uppercase text-3xl py-10">Team Rosters</h2>
    <SecondaryBillboard
    images={billboardImages2}
    caption="Matchday team selection" />
    <p>At Elite Space Football Academy, we understand the importance of showcasing our players' talents and achievements. To this end, we are excited to announce that comprehensive team rosters and detailed player profile pages will soon be publicly available on our website. These rosters and profiles serve a dual purpose: they provide personal and technical information about each player, offering a window into their unique journeys and abilities, while also fostering a deeper connection between our academy, our supporters, and potential scouts. The team rosters will feature essential information such as player names, positions, jersey numbers, and key statistics. This overview allows fans, coaches, and recruiters to quickly grasp the composition and strength of each team within the academy. Each player's profile page, however, goes beyond mere statistics to paint a fuller picture of who they are both on and off the field.</p>
    <p>Player profile pages are meticulously designed to highlight each athlete's personal and technical attributes. Personal information includes biographical details such as age, hometown, and educational background, providing context about the player's journey to the academy. These profiles also delve into the players' interests, hobbies, and personal goals, offering a well-rounded view of their personalities and aspirations. By presenting this information, we aim to humanize our athletes, making them relatable to our audience and showcasing the diverse backgrounds that contribute to the rich tapestry of our teams. On the technical side, player profiles include detailed analyses of each athlete's skills, strengths, and areas for development. Coaches and trainers provide insights into the player's tactical understanding, physical fitness, and technical abilities, such as dribbling, passing, and shooting. These profiles also feature performance metrics from training sessions and matches, including statistics like goals scored, assists, defensive actions, and more. By presenting this data, we offer a transparent and comprehensive view of each player's capabilities and potential. Moreover, player profiles incorporate feedback and testimonials from coaches, teammates, and even the players themselves. This feature provides a multi-dimensional perspective on each athlete, highlighting their work ethic, teamwork, and attitude. It's an opportunity for players to reflect on their progress and for coaches to publicly acknowledge their hard work and dedication.</p>
    <p>The public availability of these rosters and profiles on our website is a significant step towards increasing the visibility of our players. For supporters, it means a more engaging and informed fan experience, as they can follow their favorite players' development and celebrate their achievements. For scouts and recruiters, these profiles are an invaluable resource, providing detailed information that can aid in the identification and recruitment of talent. The accessibility of this information demonstrates our commitment to transparency and our dedication to helping our players achieve their dreams, whether it be advancing to higher levels of competition or ultimately esuring a successful career.</p>
    <SecondaryBillboard
    images={billboardImages3} />
    <p class="text-neutral-700 text-xs text-center m-4">Last updated on May 30, 2024</p>
</section>

{:else if $mediumScreen || $smallScreen}

<h1 class="bg-neutral-200 text-primary-700 p-6 text-2xl uppercase w-full text-center fixed border-b-2 border-primary-700 top-16 z-10">
    The Players
</h1>
<section class="flex flex-col items-center p-8 bg-neutral-200 w-full self-center text-lg mt-20 space-y-6 pt-20">
    <SecondaryBillboard
    images={billboardImages0} />
    <p>At the <a href="{`/${$currentLanguage.trim()}/about#the-academy`}">Elite Space Football Academy</a>, we pride ourselves on fostering an environment where young athletes can thrive, not just as football players, but as disciplined, well-rounded individuals. The academy's success is deeply rooted in the exemplary discipline, laudable attitudes, and insatiable desire to learn exhibited by our players.</p>
    <p>Discipline is the cornerstone of our academy. Each player adheres to a rigorous daily schedule that balances training, academics, and personal development. From early morning drills to late evening study sessions, our players demonstrate remarkable time management and dedication. This structured environment ensures that they develop not only their physical prowess but also their mental resilience.</p>
    <p>Our players are driven by an unquenchable thirst for knowledge and improvement. They actively seek feedback from coaches, engage in tactical discussions, and constantly look for ways to enhance their skills. This desire to learn is evident in their approach to both football and their academic pursuits. They understand that becoming a successful athlete requires a blend of physical talent, strategic thinking, and continuous technical education.</p>
    <p>Focus is a defining trait of the athletes at Elite Space Football Academy. Whether it's during high-pressure matches or intensive training sessions, our players exhibit remarkable concentration and determination. They set clear goals and work tirelessly towards achieving them, embodying the true spirit of perseverance. This laser-sharp focus allows them to excel on and off the field.</p>
    <SecondaryBillboard
    images={billboardImages4} />
    <p>An integral part of the Elite Space Football Academy experience is the communal living arrangement. Players reside together in state-of-the-art facilities that promote a sense of camaraderie and team unity. Living together fosters deep bonds and mutual respect among the players, creating a supportive network that extends beyond the football field. They learn valuable life skills, such as teamwork, communication, and empathy, which are essential for their personal growth and future success.</p>
    <p>At Elite Space Football Academy, our players are the epitome of discipline, positive attitude, and a relentless pursuit of knowledge. Their focus, combined with the excellent living and learning facilities we provide, sets them on a path to success both on and off the field. We are proud of our players and their commitment to excellence, which truly makes Elite Space Football Academy a breeding ground for future stars and exemplary individuals.</p>
    <SecondaryBillboard
    images={billboardImages1}
    caption="In-house 5-aside scrimmage to mark the ELITE SPACE FOOTBALL academy's 5-year anniversary" />
    <h2 class="text-center uppercase text-2xl py-6">Team Rosters</h2>
    <SecondaryBillboard
    images={billboardImages2}
    caption="Matchday team selection" />
    <p>At Elite Space Football Academy, we understand the importance of showcasing our players' talents and achievements. To this end, we are excited to announce that comprehensive team rosters and detailed player profile pages will soon be publicly available on our website. These rosters and profiles serve a dual purpose: they provide personal and technical information about each player, offering a window into their unique journeys and abilities, while also fostering a deeper connection between our academy, our supporters, and potential scouts. The team rosters will feature essential information such as player names, positions, jersey numbers, and key statistics. This overview allows fans, coaches, and recruiters to quickly grasp the composition and strength of each team within the academy. Each player's profile page, however, goes beyond mere statistics to paint a fuller picture of who they are both on and off the field.</p>
    <p>Player profile pages are meticulously designed to highlight each athlete's personal and technical attributes. Personal information includes biographical details such as age, hometown, and educational background, providing context about the player's journey to the academy. These profiles also delve into the players' interests, hobbies, and personal goals, offering a well-rounded view of their personalities and aspirations. By presenting this information, we aim to humanize our athletes, making them relatable to our audience and showcasing the diverse backgrounds that contribute to the rich tapestry of our teams. On the technical side, player profiles include detailed analyses of each athlete's skills, strengths, and areas for development. Coaches and trainers provide insights into the player's tactical understanding, physical fitness, and technical abilities, such as dribbling, passing, and shooting. These profiles also feature performance metrics from training sessions and matches, including statistics like goals scored, assists, defensive actions, and more. By presenting this data, we offer a transparent and comprehensive view of each player's capabilities and potential. Moreover, player profiles incorporate feedback and testimonials from coaches, teammates, and even the players themselves. This feature provides a multi-dimensional perspective on each athlete, highlighting their work ethic, teamwork, and attitude. It's an opportunity for players to reflect on their progress and for coaches to publicly acknowledge their hard work and dedication.</p>
    <p>The public availability of these rosters and profiles on our website is a significant step towards increasing the visibility of our players. For supporters, it means a more engaging and informed fan experience, as they can follow their favorite players' development and celebrate their achievements. For scouts and recruiters, these profiles are an invaluable resource, providing detailed information that can aid in the identification and recruitment of talent. The accessibility of this information demonstrates our commitment to transparency and our dedication to helping our players achieve their dreams, whether it be advancing to higher levels of competition or ultimately esuring a successful career.</p>
    <SecondaryBillboard
    images={billboardImages3} />
    <p class="text-neutral-700 text-xs text-center m-4">Last updated on May 30, 2024</p>
</section>
{/if}

<style>
    a {
        color: green;
    }

    a:hover {
        text-decoration: underline;
    }

    li {
      padding: 10px;
      margin: 25px 0 25px 0;
    }
</style>
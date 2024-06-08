<script lang="ts">
    import { smallScreen, mediumScreen, largeScreen } from "../../../../stores/media";
    import logo from "$lib/img/core/logo.png"
</script>

<svelte:head>
	<title>Elite Space Football Media</title>
	<meta name="description" content="Learn how the content we are able to bring you is created by the efforts of the Elite Space Football media team." />
	<meta name="keywords" content="elite space football media, media, elite space football videos, elite space football company, elite, elite space, elite space football, football, talent" />
	
	<meta property="og:title" content="Elite Space Football | Media">
	<meta property="og:description" content="ILearn how the content we are able to bring you is created by the efforts of the Elite Space Football media team.">
	<meta property="og:image" content="{logo}">
	<meta property="og:url" content="https://elitespacefootball.com/en/academy/media">
	<meta property="og:type" content="website">
</svelte:head>
{#if $largeScreen}

<section
class="flex flex-col items-center p-16 pt-0 bg-gradient-to-r from-neutral-200 via-white to-neutral-200 w-3/5 self-center space-y-4 text-xl mt-32">
    <h2 id="overview" class="text-center uppercase text-2xl py-10">Overview</h2>
    <p>At the heart of Elite Space Football Academy's dynamic and vibrant community lies a dedicated media team, whose unwavering commitment to documenting, curating, and presenting the finest moments in football sets them apart. This team of passionate professionals works tirelessly behind the scenes to ensure that every pivotal moment, every stunning goal, and every expression of joy and determination is captured and shared with the world.</p>
    <p>The media team at Elite Space Football is renowned for its meticulous approach to recording the academy's footballing activities. Armed with state-of-the-art cameras and equipment, they are ever-present on the sidelines, capturing high-definition footage of matches, training sessions, and special events. Their expertise extends beyond merely filming; they understand the game intimately, anticipating crucial moments and positioning themselves perfectly to capture the most impactful shots. Whether it's a last-minute goal, a brilliant save, or a moment of individual brilliance, the team ensures that nothing is missed.</p>
    <p>Recording the action is just the beginning. The media team takes great pride in curating the content, selecting the best clips and images that truly encapsulate the spirit and skill of the players at the academy. This process involves hours of reviewing footage, editing, and selecting the perfect highlights that showcase not just the athletic prowess of the players but also their growth, teamwork, and sportsmanship. The team is adept at creating engaging and inspiring narratives that resonate with both the academy's community and a broader audience.</p>
    <p>Presentation is where the media team's dedication truly shines. They employ a variety of platforms and media formats to share the academy's story with the world. From producing slick highlight reels and engaging social media posts to creating detailed player profiles and behind-the-scenes documentaries, the team ensures that the content is not only visually stunning but also deeply engaging. They understand the importance of storytelling in sports and leverage their skills to create a compelling narrative that highlights the journey and achievements of the players.</p>
    <p>The media team’s role extends beyond just recording and presenting. They are integral to building the academy's brand and fostering a sense of community. Their work helps to build the players' confidence and provides them with a sense of pride and accomplishment. Parents, fans, and potential recruits are all able to see the dedication and talent present at Elite Space Football, thanks to the team’s efforts.</p>
    <p>In an ever-evolving digital landscape, the media team continually seeks innovative ways to enhance their content. They experiment with new technologies such as drone footage, slow-motion cameras, and interactive content to provide fresh and exciting perspectives. Their creative approach ensures that the academy’s media content is always at the cutting edge, captivating audiences and setting new standards for sports media production.</p>
    <p>The Elite Space Football media team is much more than a group of photographers and videographers; they are storytellers, innovators, and key contributors to the academy's success. Their dedication to recording, curating, and presenting the best footballing content not only highlights the talent and hard work of the players but also strengthens the community and elevates the academy's profile. Through their lens, the world gets to witness the passion, dedication, and excellence that define Elite Space Football Academy.</p>
    <p class="text-neutral-700 text-xs text-center m-4">Last updated on May 30, 2024</p>
</section>

{:else if $mediumScreen || $smallScreen}

<h1 class="bg-neutral-200 text-primary-700 p-6 text-2xl uppercase w-full text-center fixed border-b-2 border-primary-700 top-16">
    Media
</h1>
<section
class="flex flex-col items-center p-8 pt-0 bg-neutral-200 w-full space-y-4 self-center text-lg mt-20">
    <h2 id="overview" class="text-center uppercase text-2xl pt-20">Overview</h2>
    <p>At the heart of Elite Space Football Academy's dynamic and vibrant community lies a dedicated media team, whose unwavering commitment to documenting, curating, and presenting the finest moments in football sets them apart. This team of passionate professionals works tirelessly behind the scenes to ensure that every pivotal moment, every stunning goal, and every expression of joy and determination is captured and shared with the world.</p>
    <p>The media team at Elite Space Football is renowned for its meticulous approach to recording the academy's footballing activities. Armed with state-of-the-art cameras and equipment, they are ever-present on the sidelines, capturing high-definition footage of matches, training sessions, and special events. Their expertise extends beyond merely filming; they understand the game intimately, anticipating crucial moments and positioning themselves perfectly to capture the most impactful shots. Whether it's a last-minute goal, a brilliant save, or a moment of individual brilliance, the team ensures that nothing is missed.</p>
    <p>Recording the action is just the beginning. The media team takes great pride in curating the content, selecting the best clips and images that truly encapsulate the spirit and skill of the players at the academy. This process involves hours of reviewing footage, editing, and selecting the perfect highlights that showcase not just the athletic prowess of the players but also their growth, teamwork, and sportsmanship. The team is adept at creating engaging and inspiring narratives that resonate with both the academy's community and a broader audience.</p>
    <p>Presentation is where the media team's dedication truly shines. They employ a variety of platforms and media formats to share the academy's story with the world. From producing slick highlight reels and engaging social media posts to creating detailed player profiles and behind-the-scenes documentaries, the team ensures that the content is not only visually stunning but also deeply engaging. They understand the importance of storytelling in sports and leverage their skills to create a compelling narrative that highlights the journey and achievements of the players.</p>
    <p>The media team’s role extends beyond just recording and presenting. They are integral to building the academy's brand and fostering a sense of community. Their work helps to build the players' confidence and provides them with a sense of pride and accomplishment. Parents, fans, and potential recruits are all able to see the dedication and talent present at Elite Space Football, thanks to the team’s efforts.</p>
    <p>In an ever-evolving digital landscape, the media team continually seeks innovative ways to enhance their content. They experiment with new technologies such as drone footage, slow-motion cameras, and interactive content to provide fresh and exciting perspectives. Their creative approach ensures that the academy’s media content is always at the cutting edge, captivating audiences and setting new standards for sports media production.</p>
    <p>The Elite Space Football media team is much more than a group of photographers and videographers; they are storytellers, innovators, and key contributors to the academy's success. Their dedication to recording, curating, and presenting the best footballing content not only highlights the talent and hard work of the players but also strengthens the community and elevates the academy's profile. Through their lens, the world gets to witness the passion, dedication, and excellence that define Elite Space Football Academy.</p>
    <p class="text-neutral-700 text-xs text-center m-4">Last updated on May 30, 2024</p>
</section>

{/if}

<style>
    li {
      padding: 10px;
      margin: 25px 0 25px 0;
    }
  </style>
<script context="module">
  import Avatar from "../../../../lib/components/Avatar.svelte";
  import PlayerDataColumn from "../../../../lib/components/PlayerDataColumn.svelte";
  import Button from "../../../../lib/components/Button.svelte";
  import ActiveDisplay from "../../../../lib/components/ActiveDisplay.svelte";
  import StarRating from "../../../../lib/components/StarRating.svelte";
  import Chip from "../../../../lib/components/Chip.svelte";
  import { onMount } from "svelte";
</script>

<script>
  export let data;

  const player = data.player;
  const pageMenuLeft = {
      title: "Profile",
      position: "left",
      items: [
       { name: "About", href: "#about" },
       { name: "Tactical", href: "#tactical" },
       { name: "Experience", href: "#experience" },
       { name: "Videos", href: `https://www.youtube.com/playlist?list=${data.listId}` },
       { name: "Download Profile", href: "" },
        ]}
  const pageMenuRight = {
    title: "Similar Players",
    position: "right",
    items: player.tactical.similarPlayers
  }

  let sectionClassName = "profile-default";
  let playerTagsCounter = 0;
  let videoActive = false;

  $: displayedTag = player.tags[playerTagsCounter];

  const tagDisplayTimeout = () => {
    setTimeout(() => {
      playerTagsCounter < player.tags.length - 1 ? playerTagsCounter++ : playerTagsCounter = 0

      tagDisplayTimeout()
    }, 3000)

  };

  onMount(() => tagDisplayTimeout())
</script>

<section class={sectionClassName}>
  <header>
    <span class="cover-photo">
      <img src="" alt="">
    </span>
    <span class="display-id">
      <h1>{player.bio.firstName} {player.bio.lastName} {player.bio.otherNames}</h1>
      <Avatar style="width: 180px; height: 180px; border: 2px solid green; border-radius: 50%; position: absolute; margin-top: 16%;"/>
    </span>
    <span class="displayed-tag">
      <h2>{displayedTag}</h2>
    </span>
  </header>
  <main>
    <span class="header">
      <span class="about" id="about">
        <PlayerDataColumn columnName="About" columnValue={player.about} />
      </span>
      <span class="bio">
        <PlayerDataColumn columnName="D.O.B." columnValue={new Date(player.bio.birthDate).toLocaleDateString()} />
        <PlayerDataColumn columnName="Height" columnValue={`${player.bio.height}cm`} />
        <PlayerDataColumn columnName="Weight" columnValue={`${player.bio.weight}kg`} />
        <PlayerDataColumn columnName="Nationality" columnValue={player.bio.nationality} />
      </span>
    </span>
    <span class="main">
      <Button
        on:click={() => 
          videoActive = !videoActive} 
          style="width: 60%; height: 70px; font-size: 25px; border-radius: 0px; background-color: green; color: white;">
          {!videoActive ? `Watch ${player.bio.firstName} Play` : `Back to Profile`}
        </Button>
      {#if videoActive}
      {#if data.focusVideo === ""}
      <h1 style="text-transform: uppercase; color: red">{`No videos available for ${player.bio.firstName}`}</h1>
      {:else}
      <ActiveDisplay src={data.focusVideo.videoId}
        style="width: 170%; z-index: 7;" 
        actionButtons={[
        {text: `See More From ${player.bio.firstName}`, style: "width: 15%; font-size: 18px; color: white; background-color: red;", href: `https://www.youtube.com/playlist?list=${data.listId}`}
      ]}/>
      {/if}
      {/if}
    </span>
    <h1 id="tactical">TACTICAL</h1>
    <p>{`This section contains information on ${player.bio.firstName}'s deployment on the field in his time at the ELITE SPACE FOOTBALL academy.`}</p>
    <span class="footer">
      <PlayerDataColumn columnName="Positions" columnValue={player.tactical.positions}>
        <div style="display: grid; grid-template-columns: 1fr; gap: 10px;">
          {#each player.tactical.positions as position, index (index)}
          <Chip text={position}/>
          {/each}
        </div>
      </PlayerDataColumn>
      <PlayerDataColumn columnName="Stronger Foot" columnValue={player.tactical.strongerFoot} />
      <PlayerDataColumn columnName="Ambipedal" columnValue={player.tactical.ambipedal}>
        <StarRating numOfStars={player.tactical.ambipedal} />
      </PlayerDataColumn>
      <PlayerDataColumn columnName="Pace (100m sprint time)" columnValue={`${player.tactical.pace}secs`} />
      <PlayerDataColumn columnName="Specialties" columnValue={player.tactical.special}>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; max-width: 300px;">
          {#each player.tactical.special as ability, index (index)}
          <Chip text={ability} />
          {/each}
        </div>
      </PlayerDataColumn>
    </span>
    <h1 id="experience">EXPERIENCE</h1>
    <p>{`This section contains information on ${player.bio.firstName}'s documented footballing career`}</p>
    <span class="footer">
      <PlayerDataColumn columnName="Current Team" columnValue={player.experience.currentTeam} />
      <PlayerDataColumn columnName="Other Teams" columnValue={player.experience.otherTeams}>
        <ul>
          {#each player.experience.otherTeams as team, index (index)}
          <li>{team}</li>
          {/each}
        </ul>
      </PlayerDataColumn>
    </span>
  </main>
</section>

<style>
  h1 ~ p {
    font-style: italic;
    opacity: .6;
  }

  main > h1 {
    margin-top: 100px;
    margin-bottom: 0px;
  }

  .profile-default {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-default header {
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 300px;
    width: 100%;
    text-transform: uppercase;
    background-color: #cbff99;
    color: green;
    border-bottom: 2px solid green;
  }

  .profile-default header .cover-photo {
    width: 16.5%
  }

  .profile-default header .display-id {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    width: 66.6%;
  }

  .profile-default header .displayed-tag {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 16.5%;
    font-size: 25px;
  }

  .profile-default header .displayed-tag h2 {
    font-weight: 300;
  }

  .profile-default main {
    display: flex;
    align-items: flex-start;
    justify-items: center;
    width: 100%;
  }
  
  .profile-default main main {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 70%;
    background-color: white;
    padding: 100px;
    /* border-left: 1px solid green;
    border-right: 1px solid green; */
  }

  .profile-default main main .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .profile-default main main .about {
    width: 50%;
  }

  .profile-default main main .bio {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px;
    width: 40%;
  }

  .profile-default main main .main {
    z-index: 2;
    top: 0;
    position: sticky;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .profile-default main main .footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0px;
    min-height: 300px;
    color: black;
    width: 100%;
  }
</style>
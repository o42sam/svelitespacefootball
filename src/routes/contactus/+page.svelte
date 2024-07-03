<script context="module">
  import Page from '../../lib/components/Page.svelte'
  import Button from '../../lib/components/Button.svelte'
</script>
<script>
  export let data;

  const buttonStyle = "color: black; background-color: #cbff99; padding: 20px; width: 60%; height: 100px; font-size: 25px;"

  const emailAddress = 'elitespacefootball@gmail.com'

  function sendEmail() {
    const mailtoLink = `mailto:${emailAddress}`
    
    const emailWindow = window.open(mailtoLink, '_blank')
    if (emailWindow) {
      emailWindow.focus();
    } else {
      window.location.href = mailtoLink
    }
  }

    function openWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=2348032536840&text=Contacting%20Elite%20Space%20Football', '_blank');
  }
</script>

<Page>
  <h2 id="partnership-and-feedback">Partnership and Feedback</h2>
  <p>
    {data.partnershipAndFeedback}
  </p>
  <h2 id="academy-enrollment">Academy Enrollment</h2>
  <p>
    {data.academyEnrollment}
  </p>
  <section class="contact">
    <Button style={buttonStyle} on:click={sendEmail}>Send us an email</Button>
    <Button style={buttonStyle} on:click={openWhatsApp}>Send us a message on whatsapp</Button>
  </section>
</Page>

<style>
    h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 40px;
    padding-top: 100px;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 400px;
    padding: 50px;
  }
</style>
<script lang="ts">
    import { smallScreen, mediumScreen, largeScreen } from "../../../stores/media";
</script>

{#if $largeScreen}
<section
class="flex flex-col items-center p-16 pt-0 bg-gradient-to-r from-neutral-200 via-white to-neutral-200 w-3/5 self-center text-xl mt-32">
    <h1 class="text-center uppercase text-2xl py-10">Disclaimer</h1>
    <p>This disclaimer (“Disclaimer”) sets forth the general guidelines, disclosures, and terms of your use of the <a href="https://www.elitespacefootball.com">elitespacefootball.com</a> website (“Website” or “Service”) and any of its related products and services (collectively, “Services”). This Disclaimer is a legally binding agreement between you (“User”, “you” or “your”) and Elite Space Football (“Elite Space Football”, “we”, “us” or “our”). If you are entering into this Policy on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Policy, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this Policy, you must not accept this Policy and may not access and use the Website and Services. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Disclaimer. You acknowledge that this Disclaimer is a contract between you and Elite Space Football, even though it is electronic and is not physically signed by you, and it governs your use of the Website and Services.</p>
    <h2 id="representation">Representation</h2>
    <p>Any views or opinions represented on the Website belong solely to the content creators and do not represent those of people, institutions or organizations that Elite Space Football or creators may or may not be associated with in professional or personal capacity, unless explicitly stated. Any views or opinions are not intended to malign any religion, ethnic group, club, organization, company, or individual.</p>
    <h2 id="content-and-postings">Content and postings</h2>
    <p>You may not modify, print or copy any part of the Website and Services. Inclusion of any part of the Website and Services in another work, whether in printed or electronic or another form or inclusion of any part of the Website and Services on another resource by embedding, framing or otherwise without the express permission of Elite Space Football is prohibited. </p>
    <h2 id="indemnification-and-warranties">Indemnification and warranties</h2>
    <p>While we have made every attempt to ensure that the information contained on the Website is correct, Elite Space Football is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information on the Website is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied. In no event will Elite Space Football, or its partners, employees or agents, be liable to you or anyone else for any decision made or action taken in reliance on the information on the Website, or for any consequential, special or similar damages, even if advised of the possibility of such damages. Information on the Website is for general information purposes only and is not intended to provide any type of professional advice. Please seek professional assistance should you require it. Information contained on the Website are subject to change at any time and without warning.</p>
    <h2 id="changes-and-amendments">Changes and amendments</h2>
    <p>We reserve the right to modify this Disclaimer or its terms related to the Website and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.</p>
    <p>An updated version of this Disclaimer will be effective immediately upon the posting of the revised Disclaimer unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Disclaimer (or such other act specified at that time) will constitute your consent to those changes.</p>
    <h2 id="acceptance-of-this-disclaimer">Acceptance of this disclaimer</h2>
    <p>You acknowledge that you have read this Disclaimer and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Disclaimer. If you do not agree to abide by the terms of this Disclaimer, you are not authorized to access or use the Website and Services. This policy has been created with the help of the <a href="https://www.websitepolicies.com/disclaimer-generator">disclaimer generator</a>.</p>
    <h2 id="contacting-us">Contacting us</h2>
    <p>If you have any questions, concerns, or complaints regarding this Disclaimer, we encourage you to contact us using the details below:</p>
    <p><a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;o&#107;olo&#112;&#97;ul&#64;el&#105;&#116;e&#115;pa&#99;&#101;fo&#111;t&#98;a&#108;l.&#99;&#111;m">oko&#108;opau&#108;&#64;e&#108;i&#116;&#101;&#115;&#112;&#97;c&#101;&#102;o&#111;&#116;&#98;all&#46;c&#111;m</a></p>
    <p class="text-neutral-700 text-xs italic">Last updated on May 30, 2024</p>
</section>
{:else if $mediumScreen || $smallScreen}
<h1 class="bg-neutral-200 text-primary-700 p-6 text-2xl uppercase w-full text-center fixed border-b-2 border-primary-700 top-16">
    Legal Notice
  </h1>
<section
class="flex flex-col items-center p-8 bg-neutral-200 w-full self-center text-lg space-y-6 mt-20">
    <h1>Disclaimer</h1>
    <p>This disclaimer (“Disclaimer”) sets forth the general guidelines, disclosures, and terms of your use of the <a href="https://www.elitespacefootball.com">elitespacefootball.com</a> website (“Website” or “Service”) and any of its related products and services (collectively, “Services”). This Disclaimer is a legally binding agreement between you (“User”, “you” or “your”) and Elite Space Football (“Elite Space Football”, “we”, “us” or “our”). If you are entering into this Policy on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Policy, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this Policy, you must not accept this Policy and may not access and use the Website and Services. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Disclaimer. You acknowledge that this Disclaimer is a contract between you and Elite Space Football, even though it is electronic and is not physically signed by you, and it governs your use of the Website and Services.</p>
    <h2 id="representation">Representation</h2>
    <p>Any views or opinions represented on the Website belong solely to the content creators and do not represent those of people, institutions or organizations that Elite Space Football or creators may or may not be associated with in professional or personal capacity, unless explicitly stated. Any views or opinions are not intended to malign any religion, ethnic group, club, organization, company, or individual.</p>
    <h2 id="content-and-postings">Content and postings</h2>
    <p>You may not modify, print or copy any part of the Website and Services. Inclusion of any part of the Website and Services in another work, whether in printed or electronic or another form or inclusion of any part of the Website and Services on another resource by embedding, framing or otherwise without the express permission of Elite Space Football is prohibited. </p>
    <h2 id="indemnification-and-warranties">Indemnification and warranties</h2>
    <p>While we have made every attempt to ensure that the information contained on the Website is correct, Elite Space Football is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information on the Website is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied. In no event will Elite Space Football, or its partners, employees or agents, be liable to you or anyone else for any decision made or action taken in reliance on the information on the Website, or for any consequential, special or similar damages, even if advised of the possibility of such damages. Information on the Website is for general information purposes only and is not intended to provide any type of professional advice. Please seek professional assistance should you require it. Information contained on the Website are subject to change at any time and without warning.</p>
    <h2 id="changes-and-amendments">Changes and amendments</h2>
    <p>We reserve the right to modify this Disclaimer or its terms related to the Website and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.</p>
    <p>An updated version of this Disclaimer will be effective immediately upon the posting of the revised Disclaimer unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Disclaimer (or such other act specified at that time) will constitute your consent to those changes.</p>
    <h2 id="acceptance-of-this-disclaimer">Acceptance of this disclaimer</h2>
    <p>You acknowledge that you have read this Disclaimer and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Disclaimer. If you do not agree to abide by the terms of this Disclaimer, you are not authorized to access or use the Website and Services. This policy has been created with the help of the <a href="https://www.websitepolicies.com/disclaimer-generator">disclaimer generator</a>.</p>
    <h2 id="contacting-us">Contacting us</h2>
    <p>If you have any questions, concerns, or complaints regarding this Disclaimer, we encourage you to contact us using the details below:</p>
    <p><a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;o&#107;olo&#112;&#97;ul&#64;el&#105;&#116;e&#115;pa&#99;&#101;fo&#111;t&#98;a&#108;l.&#99;&#111;m">oko&#108;opau&#108;&#64;e&#108;i&#116;&#101;&#115;&#112;&#97;c&#101;&#102;o&#111;&#116;&#98;all&#46;c&#111;m</a></p>
    <p class="text-neutral-700 text-xs italic">Last updated on May 30, 2024</p>
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
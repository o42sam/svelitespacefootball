<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    import { languages, currentLanguage, languageChanged } from "../stores/language";

    export const prerender = true;

    onMount(() => {
        let browserLanguage = navigator.language;

        let primaryLanguage = browserLanguage.split('-')[0];

        if (!$languageChanged) {
            if ($languages.some(language => language.code === primaryLanguage)) {
                currentLanguage.set(primaryLanguage)
                goto(`/${primaryLanguage}`)
            } else {
                currentLanguage.set("en")
                goto(`/en`)
            } 
        } else {
            goto(`/${$currentLanguage.split('-')[0]}`)
        }

    })
</script>

<svelte:head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5722351974893936"
     crossorigin="anonymous"></script>
</svelte:head>

<slot />
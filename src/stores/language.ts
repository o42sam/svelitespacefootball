import { writable } from "svelte/store";

let currentSiteLanguage = "en "

export const currentLanguage = writable(currentSiteLanguage)

currentLanguage.subscribe((value) => {
    currentSiteLanguage = value
})
                        
export const languages = writable([])
export const languageChanged = writable(false)
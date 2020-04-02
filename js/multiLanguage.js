languageConfig = {
    language: {
        "gr": {
            ".Helligkeit": "Helligkeit",
            ".Lautstärke": "Lautstärke",
            ".Einstellungen": "Einstellungen",
            ".Home": "Home",
            ".Bett": "Bett",
            ".Storen": "Storen",
            ".Licht": "Licht",
            ".Rufen": 'Rufen',
            ".Unterhaltung": "Unterhaltung",
            ".Hotellerie": 'Hotellerie',
            ".Services": "Services",
            ".Max-Muster": "Max Muster",
            ".Musik": "Musik",
            ".Spielen": "Spielen",
            ".Geschenke": "Geschenke",
        },
        "en": {
            ".Einstellungen": "Settings",
            ".Lautstärke": "Volume",
            ".Helligkeit": "Brightness",
            ".Home": "Home",
            ".Bett": "Bed",
            ".Storen": "To disturb",
            ".Licht": "Light",
            ".Rufen": 'Call',
            ".Unterhaltung": "Entertainment",
            ".Hotellerie": 'Hotel industry',
            ".Services": "Services",
            ".Max-Muster": "Max pattern",
            ".Musik": "Music",
            ".Spielen": "Play",
            ".Geschenke": "Gifts",
        },
        "es": {
            ".Einstellungen": "Configuraciones",
            ".Lautstärke": "Volumen",
            ".Helligkeit": "Brillo",
            ".Home": "Hogar",
            ".Bett": "Cama",
            ".Storen": "Persianas",
            ".Licht": "Luz",
            ".Rufen": 'Llamar',
            ".Unterhaltung": "Entretenimiento",
            ".Hotellerie": 'Industria hotelera',
            ".Services": "Servicios",
            ".Max-Muster": "Patrón Max",
            ".Musik": "Musica",
            ".Spielen": "Jugar",
            ".Geschenke": "Regalos",
        }

    }
}

function MultiLanguage(setLang) {
    if (setLang !== null) {
        localStorage.MultiLanguage = setLang
    } else {
        if (typeof localStorage.MultiLanguage === "undefined") {
            setLang = localStorage.MultiLanguage = navigator.language || navigator.userLanguage;
        } else {
            setLang = localStorage.MultiLanguage
        }
    }
    languages = languageConfig.language[setLang];

    for (languagekey in languages) {
        word = languages[languagekey];
        if ($(languagekey).get(0).tagName.toLowerCase() === "title") {
            document.title = word;
            continue
        }
        if (languagekey.length > 0) {
            $(languagekey).html(languages[languagekey])
        }
    }

}
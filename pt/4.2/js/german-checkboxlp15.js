params = {
    theme: getURLParameter('theme'),
    alert_type: getURLParameter('alert_type') || 'default',
    alert_bg: getURLParameter('alert_bg') || '01',
    alert_title: getURLParameter('alert_title') || null,
    alert_header: getURLParameter('alert_header') || null,
    alert_desc: getURLParameter('alert_desc') || null,
    alert: 'on',
    scan_title: getURLParameter('scan_title') || null,
    scan_loaded: getURLParameter('scan_loaded') || 'Pronto!',
    scan_bg: getURLParameter('scan_bg') || '01',
    scan_time: getURLParameter('scan_time') || 20,
    scanner: 'on',
    qs_time: getURLParameter('qs_time') || 400,
    qs_bg: getURLParameter('qs_bg') || '01',
    city: getURLParameter('city') || 'Ihre Region',
    seq: getURLParameter('seq')
};
config = {
    theme: 'default',
    final_url: 'https://n.hotxpromo.com/click',
    modules: {
        alert: params.alert,
        scanner: params.scanner,
        countdown: params.countdown
    },
    backgrounds: {
        alert: params.alert_bg,
        scanner: params.scan_bg,
        questions: params.qs_bg,
        preload_list: []
    },
    timers: {
        scanner: params.scan_time,
        questions: params.qs_time,
        countdown: params.countdown_time
    },
    step_sequence: ['alert1', 'scanner', 'prompt1', 'dialog1', 'dialog2', 'dialog3', 'dialog4', 'option1', 'option2', 'option3', 'agree'],
    steps: [{
        settings: {
            type: 'alert',
            alert_type: params.alert_type,
            buttons: [{
                title: 'Ja',
                data: 'ok'
            }, {
                title: 'Nee',
                data: 'cancel'
            }],
            group: 'alert_box',
            id: 'alert1'
        },
        title: (params.alert_title == null ? 'Miranda zoekt een sexpartner.' : params.alert_title),
        description: (params.alert_desc == null ? 'Heb je interesse?' : params.alert_desc),
        header_text: (params.alert_header == null ? 'Let op!' : params.alert_header)
    }, {
        settings: {
            type: 'prompt',
            buttons: [{
                title: 'Ok',
                data: 'agree'
            }],
            group: 'prompt_box',
            id: 'prompt1',
        },
        title: 'Dit is <b>GEEN</b> dating site!',
        description: 'Voordat we een lijst met foto\'s kunnen laten zien van vrouwen bij jou in de buurt <u><b>die alleen op zoek zijn naar seksuele ontmoetingen</b></u>, vragen we je om enkele korte vragen te beantwoorden.'
    }, {
        settings: {
            type: 'scanner',
            buttons: null,
            group: 'scanner',
            id: 'scanner'
        },
        title: (params.scan_title == null ? 'Zoeken naar passende partners in uw regio...' : params.scan_title),
        label_loaded: params.scan_loaded,
        description: ''
    }, {
        settings: {
            type: 'dialog',
            buttons: [{
                title: 'JA',
                data: 'btnyes'
            }, {
                title: 'NEE',
                data: 'btnno'
            }],
            group: 'term_box',
            id: 'dialog1'
        },
        title: '',
        description: 'Veel van deze vrouwen zijn wanhopige alleenstaande moeders en gehuwde vrouwen die willen vreemdgaan. Ze kunnen je buren zijn of iemand die je kent. Kan jij de identiteit van deze vrouwen geheim te houden?',
        step_label: 'Vraag',
        step_number: 1
    }, {
        settings: {
            type: 'dialog',
            buttons: [{
                title: 'JA',
                data: 'btnyes'
            }, {
                title: 'NEE',
                data: 'btnno'
            }],
            group: 'term_box',
            id: 'dialog2'
        },
        title: '',
        description: 'Deze vrouwen hebben ons gevraagd om geen mannen toe te staan die op zoek zijn naar een "relatie". Ze willen alleen maar snel seks. Geen afspraakjes. Stem je in met dit verzoek?',
        step_label: 'Vraag',
        step_number: 2
    }, {
        settings: {
            type: 'dialog',
            buttons: [{
                title: 'JA',
                data: 'btnyes'
            }, {
                title: 'NEE',
                data: 'btnno'
            }],
            group: 'term_box',
            id: 'dialog3'
        },
        title: '',
        description: 'Ga je een condoom gebruiken bij seks met een partner die je ontmoet op onze site? ',
        step_label: 'Vraag',
        step_number: 3
    }, {
        settings: {
            type: 'dialog',
            buttons: [{
                title: 'JA',
                data: 'btnyes'
            }, {
                title: 'NEE',
                data: 'btnno'
            }],
            group: 'term_box',
            id: 'dialog4'
        },
        title: '',
        description: 'Ben je minstens 18 jaar oud? De vrouwen hebben gevraagd dat we mannen die jonger zijn dan 18 jaar geen contact met hen laten opnemen vanwege het onbeschofte gedrag van jongere mannen in het verleden.',
        step_label: 'Vraag',
        step_number: 4
    }, {
        settings: {
            type: 'options',
            buttons: [{
                title: 'Verder Â»',
                data: 'next'
            }],
            group: 'option_box',
            id: 'option1'
        },
        title: 'Op wat voor lichaam val je?',
        description: '(Graag maximaal 3 selecteren)',
        options: [{
            title: 'Dun',
            data: 'skinny'
        }, {
            title: 'Normaal',
            data: 'Regular'
        }, {
            title: 'Mollig',
            data: 'BBW'
        }, {
            title: 'Grote borsten is een vereiste ',
            data: 'big'
        }, {
            title: 'Lekkere billen is een vereiste ',
            data: 'sexy'
        }]
    }, {
        settings: {
            type: 'options',
            buttons: [{
                title: 'Verder Â»',
                data: 'next'
            }],
            group: 'option_box',
            id: 'option2'
        },
        title: 'Welke leeftijdsgroep vrouwen past het beste bij je?',
        description: '(Graag maximaal 3 selecteren)',
        options: [{
            title: '18 - 25',
            data: '21'
        }, {
            title: '25 - 32',
            data: '25'
        }, {
            title: '32 - 37',
            data: '32'
        }, {
            title: '37 - 45',
            data: '37'
        }, {
            title: '45 of ouder',
            data: '45'
        }]
    }, {
        settings: {
            type: 'options',
            buttons: [{
                title: 'Verder Â»',
                data: 'next'
            }],
            group: 'option_box',
            id: 'option3'
        },
        title: 'Wat voor relatie zoek je?',
        description: '(Graag maximaal 3 selecteren)',
        options: [{
            title: 'Avontuurtje',
            data: 'one'
        }, {
            title: 'Meerdere keren seks',
            data: 'mult'
        }, {
            title: 'Regelmatig seks, zonder verdere verplichtingen ',
            data: 'regsex'
        }, {
            title: 'Dating',
            data: 'Dating'
        }, {
            title: 'Trouwen',
            data: 'Marriage'
        }]
    }, {
        settings: {
            type: 'options',
            buttons: [{
                title: 'Verder Â»',
                data: 'next'
            }],
            group: 'option_box',
            id: 'option4'
        },
        title: 'Afstand tussen jou en haar?',
        description: '(Graag maximaal 3 selecteren)',
        options: [{
            title: '1-5 kilometer van mijn huidige locatie ',
            data: '1to5'
        }, {
            title: 'Zelfde stad',
            data: 'same'
        }, {
            title: 'Omliggende steden is prima',
            data: 'near'
        }, {
            title: 'Zelfde land ',
            data: 'country'
        }, {
            title: 'Maakt niet uit ',
            data: 'nomatter'
        }]
    }, {
        settings: {
            type: 'prompt',
            buttons: [{
                title: 'Volgende Â»',
                data: 'agree'
            }],
            group: 'prompt_box',
            id: 'agree',
        },
        title: 'Bedankt.',
        description: 'Je kunt nu onze lijst met foto\'s van vrouwen die in jouw omgeving wonen zien. Nogmaals, houd hun identiteit geheim.<p>Klik op de "DOORGAAN"-knop hieronder om vanavond nog te neuken!</p>'
    }]
};
if (params.seq) {
    var seq_array = params.seq.split('+');
    config.step_sequence = [];
    config.step_sequence = seq_array;
}

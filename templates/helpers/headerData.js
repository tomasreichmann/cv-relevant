const navigation = {
    cs: {
        lang: 'cs',
        switchLabel: 'Přepnout navigaci',
        title: 'CV Relevant znamená personální řešení',
        copyright: 'CV Relevant je konzultační a personální společnost, která se zaměřuje především na služby Executive Search, Recruitment a IT Contracting.',
        description: 'CV Relevant je konzultační a personální společnost, která se zaměřuje především na služby Executive Search, Recruitment a IT Contracting. Konzultanti CV Relevant vyhledávají vhodné kandidáty prostřednictvím osobních kontaktů, doporučení a s použitím databáze. Předností našich konzultantů je jejich dlouhodobá praxe v manažerských pozicích, jejichž samozřejmou součástí byla personální práce.',
        home: {
            id: 'cs',
            title: 'CV Relevant',
            url: '/index.html'
        },
        items: [
            /*{
                id: 'contracting',
                title: 'Contracting',
                url: '/contracting/index.html'
            },
            {
                id: 'headhunting',
                title: 'Headhunting',
                url: '/headhunting/index.html'
            },
            {
                id: 'obsazene-pozice',
                title: 'Obsazené pozice',
                url: '/obsazene-pozice/index.html'
            },
            {
                id: 'reference',
                title: 'Reference',
                url: '/reference/index.html'
            },*/
            {
                id: 'nasi-klienti',
                title: 'Naši Klienti',
                url: '/#nasi-klienti'
            },
            {
                id: 'reference',
                title: 'Reference',
                url: '/#reference'
            },
            {
                id: 'tym',
                title: 'Tým',
                url: '/#tym'
            },
            {
                id: 'zasady-a-etika',
                title: 'Zásady a etika',
                url: '/#zasady-a-etika'
            },
            {
                id: 'kontakt',
                title: 'Kontakt',
                url: '/#kontakt'
            }
        ],
        otherLanguages: [
            {
                id: 'english',
                title: 'English',
                url: '/en/index.html'
            }
        ]
    },
    en: {
        lang: 'en',
        test: 'Lenička',
        switchLabel: 'Switch navigation',
        title: 'CV Relevant means personal solutions',
        copyright: 'CV Relevant is a consulting and personal agency, that focuses on Executive Search, Recruitment and IT Contracting.',
        description: 'CV Relevant is a consulting and personal agency, that focuses on Executive Search, Recruitment and IT Contracting. CV Relevant consultants are searching for suitable candidates throught personal contacts, recommendations and via our database. Our consultants\' advantage is their extensive experience in management, especially in relation to human resources.',
        home: {
            id: 'en',
            title: 'CV Relevant',
            url: '/en/index.html',
        },
        items: [
            {
                id: 'contracting',
                title: 'Contracting',
                url: '/en/contracting/index.html'
            },
            {
                id: 'headhunting',
                title: 'Headhunting',
                url: '/en/headhunting/index.html'
            },
            {
                id: 'filled-positions',
                title: 'Filled positions',
                url: '/en/filled-positions/index.html'
            },
            {
                id: 'references',
                title: 'References',
                url: '/en/references/index.html'
            },
            {
                id: 'contacts',
                title: 'Contacts',
                url: '#contacts'
            }
        ],
        otherLanguages: [
            {
                id: 'czech',
                title: 'Czech',
                url: '/index.html'
            }
        ]
    }
}

module.exports = function({name, hash, fn}) {
    const navigationLocal = navigation[this.lang || 'cs'];
    const active = this.active || '';
    return fn(Object.assign({}, navigationLocal, {
        home: Object.assign({}, navigationLocal.home, {
            active: active === navigationLocal.home.id
        }),
        items: navigationLocal.items.map( (item)=>(
            Object.assign({}, item, {
                active: active === item.id
            })
        ) )
    }));
};

// Base de données de la bibliothèque Kivira
const libraryData = {
    romans: [
        {
            id: 1,
            title: "Umugore w'Umuhungu",
            author: "Jean-Baptiste Kayigamba",
            emoji: "📕",
            pages: 245,
            year: 2018,
            content: `
                <h1>Umugore w'Umuhungu</h1>
                <p><em>Par Jean-Baptiste Kayigamba</em></p>
                
                <h2>Chapitre 1: Itangiriro</h2>
                <p>Mu mudugudu w'Inganzo, hari umukobwa witwa Mukamana. Yari umukobwa mwiza, akaba n'umunyabwenge. Abavandimwe be baramukunda cyane, kandi n'abaturanyi bose baramwubaha.</p>
                
                <p>Mukamana yari afite inzozi nini mu buzima bwe. Yashakaga kwiga, akaba n'afite ubushobozi bwo kuba umwarimu mwiza. Ariko ibibazo by'umuryango byari byamuhambaye.</p>
                
                <h2>Chapitre 2: Ikibazo</h2>
                <p>Umunsi umwe, se yaraje amubwira ko bagomba kumurongera. Mukamana yababaye cyane kubera yari akunda ishuri, kandi yari afite ibyiyumvo by'urukundo ku muhungu wari muri kaminuza.</p>
                
                <p>Ariko se yari afite imigambi itandukanye. Yashakaga ko umukobwawe arongera umukire wo mu mujyi, kugira ngo umuryango ubunguke.</p>
                
                <h2>Chapitre 3: Icyemezo</h2>
                <p>Mukamana yagize ikibazo gikomeye. Yashakaga gukurikiza inzozi ze, ariko akaba n'akwiye kubaha se. Nyuma y'igihe kirekire, yahisemo gukora ikintu atari atekerezaga.</p>
                
                <p>Yahisemo kuvugana n'uwo muhungu akunda, kugira ngo bamufashe kubona umuti ku kibazo cye.</p>
                
                <blockquote>"Urukundo rukomeye rushobora gutsinda inzitizi zose." - Proverbe kivira</blockquote>
                
                <p>Amagambo aya yari amufashije gufata icyemezo cye. Yari azi ko inzira ntizoroshye, ariko yari yiteguye kurwana ku rw'inzozi ze.</p>
            `
        },
        {
            id: 2,
            title: "Icyizere cy'Ubuzima",
            author: "Marie Mukashema",
            emoji: "📘",
            pages: 312,
            year: 2020,
            content: `
                <h1>Icyizere cy'Ubuzima</h1>
                <p><em>Par Marie Mukashema</em></p>
                
                <h2>Intangiriro</h2>
                <p>Iyi nkuru ivuga ku buzima bw'umukobwa witwa Uwera. Yari afite ubuzima bukomeye, ariko ntiyigeze yitakaza icyizere.</p>
                
                <p>Uwera yabyutse mu muryango ukennye, ariko yari umukobwa w'ubwenge. Yashakaga guhindura ubuzima bw'umuryango we bwose.</p>
                
                <h2>Umwaka wa Mbere</h2>
                <p>Mu myaka yacye 15, Uwera yahisemo guhagarika ishuri kugira ngo afashe umuryango we. Ariko ntiyigeze yitakaza icyizere cyo kugaruka ku ishuri.</p>
                
                <p>Yakoze akazi kenshi, kandi yabitse amafaranga make make. Nyuma y'imyaka itatu, yashoboye kugaruka ku ishuri.</p>
                
                <blockquote>"Icyizere ni ico gifasha umuntu kwihanganira ibihe bibi." - Uwera</blockquote>
            `
        }
    ],
    coutumes: [
        {
            id: 1,
            title: "Imigenzo y'Abanyarwanda",
            author: "Prof. Alexis Kagame",
            emoji: "🏛️",
            pages: 428,
            year: 1972,
            content: `
                <h1>Imigenzo y'Abanyarwanda</h1>
                <p><em>Par Prof. Alexis Kagame</em></p>
                
                <h2>Amateka y'Imigenzo</h2>
                <p>Imigenzo y'Abanyarwanda ni umurage utangaje. Ivuka mu mibereho ya ba sogokuruza bacu, kandi ikomeza kuba ingenzi muri sosiyete yacu.</p>
                
                <p>Mu Rwanda rwa kera, imigenzo yari ifite umwanya w'ingenzi mu kubungabunga umuco n'indangagaciro. Ibi bikuru cyane mu kwubaka umuryango ukomeye kandi uhuriweho.</p>
                
                <h2>Ubukwe</h2>
                <p>Ubukwe bw'Abanyarwanda ni umugenzo utangaje. Burangwa no kwubaha, no gushimisha abageni bose baje mu muhango.</p>
                
                <p>Mu bukwe bwa kera, hari imihango myinshi yari ikurikizwa. Hari gusaba, gutanga inkwano, no kwambika umugeni.</p>
                
                <div class="proverb">
                    <div class="proverb-text">"Umugeni si umugeni utarataha"</div>
                    <div class="proverb-translation">Traduction: Une mariée n'est pas vraiment mariée tant qu'elle n'a pas rejoint sa belle-famille</div>
                </div>
                
                <h2>Umuganura</h2>
                <p>Umuganura ni umunsi mukuru w'abahinzi. Ni umunsi banywa ubusuma bushya, kandi bashimira Imana kubera umusaruro mwiza.</p>
            `
        },
        {
            id: 2,
            title: "Amasomo ku Muco Nyarwanda",
            author: "Dr. Emmanuel Ntezimana",
            emoji: "📿",
            pages: 185,
            year: 2015,
            content: `
                <h1>Amasomo ku Muco Nyarwanda</h1>
                <p><em>Par Dr. Emmanuel Ntezimana</em></p>
                
                <h2>Ubwiru</h2>
                <p>Ubwiru ni imigenzo y'ubwami. Yari ifite uruhare runini mu gutegeka igihugu.</p>
                
                <p>Ubwiru bwigishaga indangagaciro nka: kugira icyubahiro, ubugingo, n'urukundo.</p>
            `
        }
    ],
    musiques: [
        {
            id: 1,
            title: "Indirimbo z'Igihugu",
            author: "Cyprien Rugamba",
            emoji: "🎵",
            pages: 156,
            year: 1985,
            content: `
                <h1>Indirimbo z'Igihugu</h1>
                <p><em>Par Cyprien Rugamba</em></p>
                
                <h2>Indirimbo y'Urukundo</h2>
                <div class="verse">
                    <p>Rwanda nziza, igihugu cyacu</p>
                    <p>Wowe utubumbiye hamwe</p>
                    <p>Wowe watuduhaye amahoro</p>
                    <p>Tukurata, tukuvuga ijambo</p>
                </div>
                
                <p>Iyi ndirimbo ivuga ku rukundo rw'igihugu. Yerekana uko Abanyarwanda bakunda igihugu cyabo.</p>
                
                <h2>Amajambere</h2>
                <p>Indirimbo zirebana n'amajambere zari zikomeye mu Rwanda rwa kera. Zari zishishikariza abantu gukora cyane kandi gukundana.</p>
            `
        }
    ],
    proverbes: [
        {
            id: 1,
            title: "Prudence et vigilence",
            author: "Réf : MIKETE YE KIVIILA Tom1 par Abbé BUKENDJA Richard et Abbé KALOLERO Bernard",
            emoji: "💬",
            pages: 75,
            year: 1992,
            content: `
                <h1>Prudence et vigilence</h1>
                <p><em>MIKETE YE KIVIILA Tom1 par Abbé BUKENDJA Richard et Abbé KALOLERO Bernard</em></p>
                
                <h2>Collection</h2>
               
               
            `
        }
    ],






    poesie: [
        {
            id: 1,
            title: "Ibisigo by'Urukundo",
            author: "Yolande Mukagasana",
            emoji: "✍️",
            pages: 124,
            year: 2019,
            content: `
                <h1>Ibisigo by'Urukundo</h1>
                <p><em>Par Yolande Mukagasana</em></p>
                
                <h2>Urukundo Rukomeye</h2>
                <div class="verse">
                    <p>Urukundo ni umucyo</p>
                    <p>Urumurika mu mwijima</p>
                    <p>Ni umutima ukunda</p>
                    <p>Ni ubugingo bwuzuye</p>
                </div>
                
                <p>Iyi nkuru y'ubusizi ivuga ku rukundo rukomeye. Yerekana uko urukundo rushobora guhindura ubuzima.</p>
            `
        }
    ],
    histoire: [
        {
            id: 1,
            title: "Amateka y'u Rwanda",
            author: "Dr. Jean-Paul Kimonyo",
            emoji: "📜",
            pages: 567,
            year: 2008,
            content: `
                <h1>Amateka y'u Rwanda</h1>
                <p><em>Par Dr. Jean-Paul Kimonyo</em></p>
                
                <h2>Ubwami bw'u Rwanda</h2>
                <p>U Rwanda rwaranzwe n'ubwami bukomeye. Abami b'u Rwanda bari bazwiho ubwenge n'ubutwali.</p>
                
                <p>Umwami yari umuvugizi w'Imana, kandi yari umutware mukuru w'igihugu. Ubwami bwarangwaga no gukurikiza amategeko akomeye.</p>
                
                <h2>Imibereho y'Abanyarwanda</h2>
                <p>Mu Rwanda rwa kera, abantu babaga mu bwumvikane. Hari abahinzi, aborozi, n'abacuruzi. Bose bakorana neza kugira ngo igihugu gice imbere.</p>
                
                <blockquote>"Ubumwe ni ingufu" - Umugani w'Abanyarwanda</blockquote>
            `
        }
    ]
};

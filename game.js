/* =========================================================
   LA RULETA DEL FÚTBOL
   PRUEBA 4 DEL ESCAPE ROOM
   ========================================================= */


/* =========================================================
   CONFIGURACIÓN
   ========================================================= */

const MAX_LIVES = 3;
const TARGET_SCORE = 5;


/* =========================================================
   CATEGORÍAS
   ========================================================= */

const categories = [
    {
        id: "ballondor",
        name: "BALÓN DE ORO",
        icon: "🏆"
    },
    {
        id: "champions",
        name: "CHAMPIONS",
        icon: "⭐"
    },
    {
        id: "mundial",
        name: "MUNDIAL",
        icon: "🌍"
    },
    {
        id: "fichajes",
        name: "FICHAJES",
        icon: "💰"
    },
    {
        id: "cadiz",
        name: "CÁDIZ CF",
        icon: "🟡"
    },
    {
        id: "fc27",
        name: "FC 27",
        icon: "🎮"
    },
    {
        id: "laliga",
        name: "LALIGA",
        icon: "🇪🇸"
    },
    {
        id: "premier",
        name: "PREMIER",
        icon: "🏴"
    },
    {
        id: "matraca",
        name: "MATRACA",
        icon: "🥴"
    }
];


/* =========================================================
   BANCO DE PREGUNTAS
   =========================================================

   correct = índice de la respuesta correcta.
   Las respuestas se mezclan automáticamente antes
   de mostrarlas, por lo que el índice se actualiza.
   ========================================================= */

const questionBank = {


    /* =====================================================
       BALÓN DE ORO
       ===================================================== */

    ballondor: [

        {
            question:
                "¿Qué jugador ha ganado más Balones de Oro en la historia?",

            answers: [
                "Lionel Messi",
                "Cristiano Ronaldo",
                "Michel Platini",
                "Johan Cruyff"
            ],

            correct: 0
        },

        {
            question:
                "¿Cuántos Balones de Oro ha ganado Lionel Messi?",

            answers: [
                "6",
                "7",
                "8",
                "9"
            ],

            correct: 2
        },

        {
            question:
                "¿Quién fue el primer portero en ganar el Balón de Oro?",

            answers: [
                "Gianluigi Buffon",
                "Manuel Neuer",
                "Iker Casillas",
                "Lev Yashin"
            ],

            correct: 3
        },

        {
            question:
                "¿Qué jugador ganó el Balón de Oro en 1998?",

            answers: [
                "Ronaldo Nazário",
                "Zinedine Zidane",
                "Luis Figo",
                "Michael Owen"
            ],

            correct: 1
        },

        {
            question:
                "¿Qué jugador ganó el Balón de Oro en 2005?",

            answers: [
                "Ronaldinho",
                "Samuel Eto'o",
                "Kaká",
                "Andriy Shevchenko"
            ],

            correct: 0
        },

        {
            question:
                "¿Quién ganó el Balón de Oro en 2022?",

            answers: [
                "Robert Lewandowski",
                "Karim Benzema",
                "Sadio Mané",
                "Kevin De Bruyne"
            ],

            correct: 1
        },

        {
            question:
                "¿Qué jugador ganó el Balón de Oro en 1999?",

            answers: [
                "Rivaldo",
                "Ronaldo Nazário",
                "David Beckham",
                "Gabriel Batistuta"
            ],

            correct: 0
        },

        {
            question:
                "¿Qué jugador croata ganó el Balón de Oro en 2018?",

            answers: [
                "Ivan Rakitić",
                "Mateo Kovačić",
                "Luka Modrić",
                "Mario Mandžukić"
            ],

            correct: 2
        }

    ],


    /* =====================================================
       CHAMPIONS LEAGUE
       ===================================================== */

    champions: [

        {
            question:
                "¿Qué club ha ganado más veces la Copa de Europa/Champions League?",

            answers: [
                "Real Madrid",
                "AC Milan",
                "Liverpool",
                "Bayern de Múnich"
            ],

            correct: 0
        },

        {
            question:
                "¿Quién es el máximo goleador histórico de la Champions League?",

            answers: [
                "Lionel Messi",
                "Robert Lewandowski",
                "Cristiano Ronaldo",
                "Karim Benzema"
            ],

            correct: 2
        },

        {
            question:
                "¿Cuántos goles ha marcado Cristiano Ronaldo en la Champions League?",

            answers: [
                "120",
                "128",
                "135",
                "140"
            ],

            correct: 3
        },

        {
            question:
                "¿Qué equipo ganó la Champions League en 2005 tras remontar un 3-0 al descanso?",

            answers: [
                "Manchester United",
                "Liverpool",
                "Chelsea",
                "Arsenal"
            ],

            correct: 1
        },

        {
            question:
                "¿Contra qué equipo remontó Liverpool en la final de Champions de 2005?",

            answers: [
                "Juventus",
                "Barcelona",
                "AC Milan",
                "Real Madrid"
            ],

            correct: 2
        },

        {
            question:
                "¿En qué año pasó a llamarse oficialmente Champions League la antigua Copa de Europa?",

            answers: [
                "1989",
                "1992",
                "1995",
                "1998"
            ],

            correct: 1
        },

        {
            question:
                "¿Qué club ganó la primera edición de la Copa de Europa?",

            answers: [
                "Real Madrid",
                "Barcelona",
                "Benfica",
                "AC Milan"
            ],

            correct: 0
        },

        {
            question:
                "¿Qué entrenador ha ganado la Champions League con tres clubes diferentes?",

            answers: [
                "Pep Guardiola",
                "Carlo Ancelotti",
                "José Mourinho",
                "Jürgen Klopp"
            ],

            correct: 1
        }

    ],


    /* =====================================================
       MUNDIAL
       ===================================================== */

    mundial: [

        {
            question:
                "¿Qué selección ha ganado más Mundiales?",

            answers: [
                "Alemania",
                "Argentina",
                "Brasil",
                "Italia"
            ],

            correct: 2
        },

        {
            question:
                "¿Cuántos Mundiales ha ganado Brasil?",

            answers: [
                "4",
                "5",
                "6",
                "3"
            ],

            correct: 1
        },

        {
            question:
                "¿Quién es el máximo goleador histórico de los Mundiales?",

            answers: [
                "Ronaldo Nazário",
                "Miroslav Klose",
                "Gerd Müller",
                "Lionel Messi"
            ],

            correct: 1
        },

        {
            question:
                "¿Qué selección ganó el Mundial de 2010?",

            answers: [
                "Alemania",
                "Argentina",
                "Brasil",
                "España"
            ],

            correct: 3
        },

        {
            question:
                "¿Quién marcó el gol de España en la final del Mundial de 2010?",

            answers: [
                "David Villa",
                "Xavi Hernández",
                "Andrés Iniesta",
                "Fernando Torres"
            ],

            correct: 2
        },

        {
            question:
                "¿Qué selección ganó el Mundial de 2022?",

            answers: [
                "Francia",
                "Argentina",
                "Brasil",
                "Croacia"
            ],

            correct: 1
        },

        {
            question:
                "¿Quién marcó dos goles para Argentina en la final del Mundial de 2022?",

            answers: [
                "Julián Álvarez",
                "Ángel Di María",
                "Lionel Messi",
                "Lautaro Martínez"
            ],

            correct: 2
        },

        {
            question:
                "¿En qué país se disputó el Mundial de 2014?",

            answers: [
                "Rusia",
                "Sudáfrica",
                "Brasil",
                "Alemania"
            ],

            correct: 2
        }

    ],


    /* =====================================================
       FICHAJES
       ===================================================== */

    fichajes: [

        {
            question:
                "¿Qué jugador protagonizó el famoso fichaje de 222 millones de euros del Barcelona al PSG?",

            answers: [
                "Kylian Mbappé",
                "Neymar",
                "Ousmane Dembélé",
                "Antoine Griezmann"
            ],

            correct: 1
        },

        {
            question:
                "¿A qué club fichó Cristiano Ronaldo en 2018 desde el Real Madrid?",

            answers: [
                "PSG",
                "Manchester United",
                "Juventus",
                "Al Nassr"
            ],

            correct: 2
        },

        {
            question:
                "¿Qué jugador fichó el Real Madrid procedente del Tottenham en 2013 por una cifra récord en aquel momento?",

            answers: [
                "Gareth Bale",
                "Luka Modrić",
                "Harry Kane",
                "Christian Eriksen"
            ],

            correct: 0
        },

        {
            question:
                "¿Qué jugador pasó del Liverpool al Barcelona en 2018?",

            answers: [
                "Mohamed Salah",
                "Sadio Mané",
                "Philippe Coutinho",
                "Roberto Firmino"
            ],

            correct: 2
        },

        {
            question:
                "¿Qué club fichó a Eden Hazard procedente del Chelsea en 2019?",

            answers: [
                "Barcelona",
                "Real Madrid",
                "PSG",
                "Atlético de Madrid"
            ],

            correct: 1
        },

        {
            question:
                "¿De qué club llegó Erling Haaland al Manchester City?",

            answers: [
                "RB Leipzig",
                "Borussia Dortmund",
                "Salzburg",
                "Bayer Leverkusen"
            ],

            correct: 1
        },

        {
            question:
                "¿Qué jugador fichó el Manchester United procedente del Sporting CP en 2003?",

            answers: [
                "Cristiano Ronaldo",
                "Nani",
                "Bruno Fernandes",
                "Ricardo Quaresma"
            ],

            correct: 0
        },

        {
            question:
                "¿Qué club fichó a Jude Bellingham en 2023?",

            answers: [
                "Manchester City",
                "Liverpool",
                "Real Madrid",
                "Chelsea"
            ],

            correct: 2
        }

    ],


    /* =====================================================
       CÁDIZ CF
       ===================================================== */

    cadiz: [

        {
            question:
                "¿En qué año fue fundado el Cádiz CF?",

            answers: [
                "1905",
                "1910",
                "1915",
                "1920"
            ],

            correct: 1
        },

        {
            question:
                "¿Qué legendario futbolista salvadoreño es uno de los grandes iconos históricos del Cádiz?",

            answers: [
                "Hugo Sánchez",
                "Jorge González 'Mágico'",
                "Carlos Valderrama",
                "Iván Zamorano"
            ],

            correct: 1
        },

        {
            question:
                "¿Cómo se conoce popularmente a Jorge González, leyenda del Cádiz?",

            answers: [
                "El Pibe",
                "El Mágico",
                "El Maestro",
                "El Brujo"
            ],

            correct: 1
        },

        {
            question:
                "¿En qué año consiguió el Cádiz su primer ascenso a Primera División?",

            answers: [
                "1975",
                "1977",
                "1981",
                "1985"
            ],

            correct: 1
        },

        {
            question:
                "¿Quién es uno de los máximos goleadores históricos del Cádiz CF con 75 goles según los registros históricos del club?",

            answers: [
                "Mágico González",
                "Álvaro Negredo",
                "Lucas Pérez",
                "Salvi Sánchez"
            ],

            correct: 0
        },

        {
            question:
                "¿Quién aparece como máximo goleador histórico del Cádiz CF con 82 goles en los registros históricos consultados?",

            answers: [
                "Paco Baena",
                "Mágico González",
                "Pepe Mejías",
                "Pollito Roldán"
            ],

            correct: 0
        },

        {
            question:
                "¿En qué año ganó el Cádiz su primer título de Segunda División?",

            answers: [
                "1991",
                "2001",
                "2005",
                "2010"
            ],

            correct: 2
        },

        {
            question:
                "¿En qué año consiguió el Cádiz el título de Tercera División que figura en su palmarés histórico?",

            answers: [
                "2005",
                "2007",
                "2009",
                "2011"
            ],

            correct: 2
        }

    ],


    /* =====================================================
       FC 27
       ===================================================== */

    fc27: [

        {
            question:
                "¿Cómo se llama el nuevo espacio social de fútbol de EA SPORTS FC 27?",

            answers: [
                "The Grounds",
                "The Arena",
                "FC Street",
                "World Football"
            ],

            correct: 0
        },

        {
            question:
                "¿Qué modo permite crear un futbolista Pro virtual para jugar con amigos?",

            answers: [
                "Clubes",
                "Ultimate Team",
                "Carrera",
                "FUT Draft"
            ],

            correct: 0
        },

        {
            question:
                "¿Qué modo de FC 27 incorpora una nueva Galería FUT?",

            answers: [
                "Carrera",
                "Football Ultimate Team",
                "Clubes",
                "The Grounds"
            ],

            correct: 1
        },

        {
            question:
                "¿Qué mercado ha sido reconstruido en FC 27?",

            answers: [
                "Mercado de camisetas",
                "Mercado de estadios",
                "Mercado de transferibles",
                "Mercado de entrenadores"
            ],

            correct: 2
        },

        {
            question:
                "¿Qué tipo de valoración refleja la forma, moral y estado físico de los futbolistas en el nuevo sistema de FC 27?",

            answers: [
                "GRL dinámico",
                "GRL clásico",
                "GRL histórico",
                "GRL definitivo"
            ],

            correct: 0
        },

        {
            question:
                "¿Cuántos futbolistas aproximadamente incluye FC 27 según EA?",

            answers: [
                "Más de 10.000",
                "Más de 15.000",
                "Más de 21.000",
                "Más de 30.000"
            ],

            correct: 2
        },

        {
            question:
                "¿Qué modo de FC 27 permite jugar pachangas y partidos 1 contra 1 dentro de The Grounds?",

            answers: [
                "The Grounds",
                "Carrera",
                "Ultimate Team",
                "Torneos"
            ],

            correct: 0
        },

        {
            question:
                "¿Qué novedad aparece en el modo Carrera de FC 27?",

            answers: [
                "Mercado de transferibles reconstruido",
                "Eliminación de los fichajes",
                "Solo jugadores históricos",
                "Desaparición de los entrenadores"
            ],

            correct: 0
        }

    ],


    /* =====================================================
       LALIGA
       ===================================================== */

    laliga: [

        {
            question:
                "¿En qué año se fundó LaLiga?",

            answers: [
                "1925",
                "1929",
                "1932",
                "1936"
            ],

            correct: 1
        },

        {
            question:
                "¿Quién es el máximo goleador histórico de LaLiga?",

            answers: [
                "Cristiano Ronaldo",
                "Karim Benzema",
                "Lionel Messi",
                "Telmo Zarra"
            ],

            correct: 2
        },

        {
            question:
                "¿Cuántos goles marcó Messi en LaLiga durante la temporada 2011/12?",

            answers: [
                "45",
                "48",
                "50",
                "52"
            ],

            correct: 2
        },

        {
            question:
                "¿Qué jugador es el máximo goleador histórico del Real Madrid en LaLiga?",

            answers: [
                "Raúl",
                "Cristiano Ronaldo",
                "Karim Benzema",
                "Alfredo Di Stéfano"
            ],

            correct: 1
        },

        {
            question:
                "¿Qué jugador tiene el récord de Trofeos Pichichi?",

            answers: [
                "Cristiano Ronaldo",
                "Telmo Zarra",
                "Lionel Messi",
                "Hugo Sánchez"
            ],

            correct: 2
        },

        {
            question:
                "¿Qué equipo fue campeón de la primera edición de LaLiga?",

            answers: [
                "Real Madrid",
                "Barcelona",
                "Athletic Club",
                "Atlético de Madrid"
            ],

            correct: 1
        },

        {
            question:
                "¿Qué portero ha ganado más Trofeos Zamora?",

            answers: [
                "Iker Casillas",
                "Víctor Valdés",
                "Jan Oblak",
                "Thibaut Courtois"
            ],

            correct: 2
        },

        {
            question:
                "¿Qué jugador argentino marcó 474 goles en LaLiga?",

            answers: [
                "Alfredo Di Stéfano",
                "Lionel Messi",
                "Sergio Agüero",
                "Diego Maradona"
            ],

            correct: 1
        }

    ],


    /* =====================================================
       PREMIER LEAGUE
       ===================================================== */

    premier: [

        {
            question:
                "¿Quién es el máximo goleador histórico de la Premier League?",

            answers: [
                "Alan Shearer",
                "Wayne Rooney",
                "Harry Kane",
                "Sergio Agüero"
            ],

            correct: 0
        },

        {
            question:
                "¿Qué jugador marcó 36 goles en una temporada de Premier League, récord de la competición en una temporada?",

            answers: [
                "Mohamed Salah",
                "Harry Kane",
                "Erling Haaland",
                "Alan Shearer"
            ],

            correct: 2
        },

        {
            question:
                "¿Qué club ganó la primera temporada de la Premier League?",

            answers: [
                "Arsenal",
                "Manchester United",
                "Liverpool",
                "Blackburn Rovers"
            ],

            correct: 1
        },

        {
            question:
                "¿Qué club ganó la Premier League de forma invicta en la temporada 2003/04?",

            answers: [
                "Chelsea",
                "Liverpool",
                "Arsenal",
                "Manchester United"
            ],

            correct: 2
        },

        {
            question:
                "¿Quién fue conocido como 'The King' en el Newcastle United y es el máximo goleador histórico de la Premier League?",

            answers: [
                "Alan Shearer",
                "Andy Cole",
                "Michael Owen",
                "Les Ferdinand"
            ],

            correct: 0
        },

        {
            question:
                "¿Qué equipo ganó el histórico triplete inglés en 1998/99 junto con Premier League y FA Cup?",

            answers: [
                "Arsenal",
                "Chelsea",
                "Manchester United",
                "Liverpool"
            ],

            correct: 2
        },

        {
            question:
                "¿Qué entrenador dirigió al Leicester City cuando ganó sorprendentemente la Premier League 2015/16?",

            answers: [
                "Claudio Ranieri",
                "José Mourinho",
                "Arsène Wenger",
                "Carlo Ancelotti"
            ],

            correct: 0
        },

        {
            question:
                "¿Qué jugador francés fue máximo goleador de la Premier League en cuatro temporadas con el Arsenal?",

            answers: [
                "Eric Cantona",
                "Thierry Henry",
                "Nicolas Anelka",
                "Olivier Giroud"
            ],

            correct: 1
        }

    ],


    /* =====================================================
       MATRACA
       ===================================================== */

    matraca: [

        {
            question:
                "¿Qué juego se ha pasado Sergio?",

            answers: [
                "Ghost of Tsushima",
                "Spider-Man: Miles Morales",
                "God of War Ragnarök",
                "Red Dead Redemption"
            ],

            correct: 0
        },

        {
            question:
                "¿Dónde le tiraron una carretilla a Jose?",

            answers: [
                "En la presentación de un libro de Primo de Rivera",
                "De fiesta en La Punta",
                "En un camping",
                "Dando una vuelta con Raúl Colomo"
            ],

            correct: 0
        },

        {
            question:
                "¿Quién tiene un trozo de burka en el cuello?",

            answers: [
                "Ale Jiménez",
                "Manu Cuesta",
                "Angelito el Yonki",
                "Juan José el Teta"
            ],

            correct: 0
        },

        {
            question:
                "¿Quién rompió una madera de una espaldera de un pelotazo en el pabellón?",

            answers: [
                "Paquito el Nonaino",
                "Tano",
                "Jose de Dios",
                "Yeray el Cabesa"
            ],

            correct: 0
        }

    ]

};


/* =========================================================
   ESTADO DEL JUEGO
   ========================================================= */

let score = 0;

let lives = MAX_LIVES;

let currentCategory = null;

let currentQuestion = null;

let isSpinning = false;

let usedQuestions = {};

let wheelRotation = 0;


/* =========================================================
   ELEMENTOS HTML
   ========================================================= */

const startScreen =
    document.getElementById("start-screen");

const gameScreen =
    document.getElementById("game-screen");

const loseScreen =
    document.getElementById("lose-screen");

const winScreen =
    document.getElementById("win-screen");

const startButton =
    document.getElementById("start-button");

const restartButton =
    document.getElementById("restart-button");

const spinButton =
    document.getElementById("spin-button");

const roulette =
    document.getElementById("roulette");

const scoreElement =
    document.getElementById("score");

const livesElement =
    document.getElementById("lives");

const categoryDisplay =
    document.getElementById("category-display");

const categoryIcon =
    document.getElementById("category-icon");

const categoryName =
    document.getElementById("category-name");

const questionCard =
    document.getElementById("question-card");

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const feedbackElement =
    document.getElementById("question-feedback");

const finalScoreElement =
    document.getElementById("final-score");


/* =========================================================
   INICIAR JUEGO
   ========================================================= */

function startGame() {

    score = 0;

    lives = MAX_LIVES;

    currentCategory = null;

    currentQuestion = null;

    isSpinning = false;

    wheelRotation = 0;

    usedQuestions = {};

    categories.forEach(category => {

        usedQuestions[category.id] = [];

    });


    roulette.style.transform =
        "rotate(0deg)";


    updateScore();

    updateLives();


    startScreen.classList.add("hidden");

    loseScreen.classList.add("hidden");

    winScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");


    categoryDisplay.classList.add("hidden");

    questionCard.classList.add("hidden");

    feedbackElement.className =
        "question-feedback hidden";

    feedbackElement.innerHTML = "";


    spinButton.disabled = false;

}


/* =========================================================
   REINICIAR
   ========================================================= */

function restartGame() {

    startGame();

}


/* =========================================================
   ACTUALIZAR MARCADOR
   ========================================================= */

function updateScore() {

    scoreElement.textContent =
        `${score} / ${TARGET_SCORE}`;

}


/* =========================================================
   ACTUALIZAR VIDAS
   ========================================================= */

function updateLives() {

    let hearts = "";

    for (
        let i = 0;
        i < MAX_LIVES;
        i++
    ) {

        if (i < lives) {

            hearts += "❤️ ";

        } else {

            hearts += "🖤 ";

        }

    }

    livesElement.textContent =
        hearts.trim();

}


/* =========================================================
   GIRAR RULETA
   ========================================================= */

function spinRoulette() {

    if (isSpinning) {
        return;
    }

    if (score >= TARGET_SCORE) {
        return;
    }

    if (lives <= 0) {
        return;
    }


    isSpinning = true;

    spinButton.disabled = true;

    questionCard.classList.add("hidden");

    categoryDisplay.classList.add("hidden");

    feedbackElement.className =
        "question-feedback hidden";


    /*
       Elegimos una categoría al azar.
    */

    const categoryIndex =
        Math.floor(
            Math.random() *
            categories.length
        );

    currentCategory =
        categories[categoryIndex];


    /*
       Cada segmento ocupa 40 grados.

       El centro de cada segmento es:

       20, 60, 100, 140...
    */

    const segmentCenter =
        categoryIndex * 40 + 20;


    /*
       El puntero está arriba.

       Para colocar el centro del segmento
       seleccionado debajo del puntero:

       270 - centro del segmento
    */

    const targetAngle =
        270 - segmentCenter;


    /*
       Añadimos varias vueltas para que
       parezca una ruleta real.
    */

    const fullTurns =
        5 + Math.floor(
            Math.random() * 3
        );


    wheelRotation +=
        fullTurns * 360 +
        targetAngle;


    roulette.style.transform =
        `rotate(${wheelRotation}deg)`;


    setTimeout(
        () => {

            showCategory();

        },
        4200
    );

}


/* =========================================================
   MOSTRAR CATEGORÍA
   ========================================================= */

function showCategory() {

    categoryIcon.textContent =
        currentCategory.icon;

    categoryName.textContent =
        currentCategory.name;

    categoryDisplay.classList.remove(
        "hidden"
    );


    setTimeout(
        () => {

            showQuestion();

        },
        500
    );

}


/* =========================================================
   OBTENER PREGUNTA
   ========================================================= */

function getRandomQuestion(categoryId) {

    const questions =
        questionBank[categoryId];


    /*
       Si ya hemos utilizado todas las
       preguntas de esta categoría,
       vaciamos su historial.
    */

    if (
        usedQuestions[categoryId].length >=
        questions.length
    ) {

        usedQuestions[categoryId] = [];

    }


    let available =
        questions.filter(
            (_, index) =>
                !usedQuestions[
                    categoryId
                ].includes(index)
        );


    const randomIndex =
        Math.floor(
            Math.random() *
            available.length
        );


    const selectedQuestion =
        available[randomIndex];


    const originalIndex =
        questions.indexOf(
            selectedQuestion
        );


    usedQuestions[categoryId].push(
        originalIndex
    );


    return selectedQuestion;

}


/* =========================================================
   MEZCLAR ARRAY
   ========================================================= */

function shuffleArray(array) {

    const copy =
        [...array];


    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];

    }


    return copy;

}


/* =========================================================
   MOSTRAR PREGUNTA
   ========================================================= */

function showQuestion() {

    currentQuestion =
        getRandomQuestion(
            currentCategory.id
        );


    questionElement.textContent =
        currentQuestion.question;


    answersElement.innerHTML = "";


    /*
       Creamos objetos para mantener
       la relación entre respuesta y
       respuesta correcta.
    */

    const answerObjects =
        currentQuestion.answers.map(
            (answer, index) => ({
                text: answer,
                correct:
                    index ===
                    currentQuestion.correct
            })
        );


    /*
       Mezclamos las respuestas.
    */

    const shuffledAnswers =
        shuffleArray(
            answerObjects
        );


    shuffledAnswers.forEach(
        answer => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-button";


            button.textContent =
                answer.text;


            button.dataset.correct =
                answer.correct;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        button,
                        answer.correct
                    );

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );


    questionCard.classList.remove(
        "hidden"
    );

}


/* =========================================================
   RESPONDER
   ========================================================= */

function selectAnswer(
    selectedButton,
    isCorrect
) {

    const buttons =
        answersElement.querySelectorAll(
            ".answer-button"
        );


    /*
       Evitamos que pueda pulsar
       varias respuestas.
    */

    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );


    /*
       Mostramos cuál era
       la respuesta correcta.
    */

    buttons.forEach(
        button => {

            if (
                button.dataset.correct ===
                "true"
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    if (isCorrect) {

        handleCorrectAnswer(
            selectedButton
        );

    } else {

        handleWrongAnswer(
            selectedButton
        );

    }

}


/* =========================================================
   RESPUESTA CORRECTA
   ========================================================= */

function handleCorrectAnswer(
    selectedButton
) {

    selectedButton.classList.add(
        "correct"
    );


    score++;


    updateScore();


    feedbackElement.className =
        "question-feedback correct";


    feedbackElement.innerHTML =
        "✅ ¡CORRECTO! " +
        `Llevas ${score} de ` +
        `${TARGET_SCORE} aciertos.`;


    /*
       Si llega a 5, gana.
    */

    if (score >= TARGET_SCORE) {

        setTimeout(
            () => {

                showWin();

            },
            1200
        );

        return;

    }


    /*
       Si no ha ganado, puede volver
       a girar la ruleta.
    */

    setTimeout(
        () => {

            feedbackElement.className =
                "question-feedback hidden";

            questionCard.classList.add(
                "hidden"
            );

            categoryDisplay.classList.add(
                "hidden"
            );

            isSpinning = false;

            spinButton.disabled = false;

        },
        1400
    );

}


/* =========================================================
   RESPUESTA INCORRECTA
   ========================================================= */

function handleWrongAnswer(
    selectedButton
) {

    selectedButton.classList.add(
        "wrong"
    );


    lives--;


    updateLives();


    feedbackElement.className =
        "question-feedback wrong";


    feedbackElement.innerHTML =
        "❌ ¡INCORRECTO! " +
        "Has perdido una vida.";


    /*
       Si se queda sin vidas,
       pierde la partida.
    */

    if (lives <= 0) {

        setTimeout(
            () => {

                showLose();

            },
            1200
        );

        return;

    }


    /*
       Si todavía tiene vidas,
       continúa jugando.
    */

    setTimeout(
        () => {

            feedbackElement.className =
                "question-feedback hidden";

            questionCard.classList.add(
                "hidden"
            );

            categoryDisplay.classList.add(
                "hidden"
            );

            isSpinning = false;

            spinButton.disabled = false;

        },
        1600
    );

}


/* =========================================================
   PANTALLA DE DERROTA
   ========================================================= */

function showLose() {

    gameScreen.classList.add(
        "hidden"
    );

    loseScreen.classList.remove(
        "hidden"
    );


    finalScoreElement.textContent =
        score;


    isSpinning = false;

}


/* =========================================================
   PANTALLA DE VICTORIA
   ========================================================= */

function showWin() {

    gameScreen.classList.add(
        "hidden"
    );

    winScreen.classList.remove(
        "hidden"
    );


    /*
       AQUÍ PONDREMOS LA PIEZA REAL
       DEL CÓDIGO CUANDO DECIDAMOS
       EL CÓDIGO FINAL DEL ESCAPE ROOM.
    */

    document.getElementById(
        "password"
    ).textContent =
        "XX";


    isSpinning = false;

}


/* =========================================================
   EVENTOS
   ========================================================= */

startButton.addEventListener(
    "click",
    startGame
);


restartButton.addEventListener(
    "click",
    restartGame
);


spinButton.addEventListener(
    "click",
    spinRoulette
);


/* =========================================================
   FIN
   ========================================================= */

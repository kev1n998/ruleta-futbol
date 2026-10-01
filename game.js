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
   PREGUNTAS
   ========================================================= */

const questionBank = {


    /* =====================================================
       BALÓN DE ORO
       ===================================================== */

    ballondor: [

        {
            question:
                "¿Qué jugador ha ganado más Balones de Oro?",

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
       CHAMPIONS
       ===================================================== */

    champions: [

        {
            question:
                "¿Qué club ha ganado más veces la Copa de Europa/Champions?",

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
                "¿Quién es el máximo goleador histórico de la Champions?",

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
                "¿Qué equipo ganó la Champions League en 2005?",

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
                "¿Contra qué equipo remontó Liverpool en la final de 2005?",

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
                "¿Qué club ganó la primera Copa de Europa?",

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
                "¿Qué entrenador ha ganado la Champions con tres clubes diferentes?",

            answers: [
                "Pep Guardiola",
                "Carlo Ancelotti",
                "José Mourinho",
                "Jürgen Klopp"
            ],

            correct: 1
        },

        {
            question:
                "¿En qué año pasó a llamarse oficialmente Champions League?",

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
                "¿Qué club ganó la Champions en 2012?",

            answers: [
                "Chelsea",
                "Bayern",
                "Real Madrid",
                "Barcelona"
            ],

            correct: 0
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
                "¿Quién marcó dos goles para Argentina en la final de 2022?",

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
                "¿Qué jugador protagonizó el fichaje de 222 millones de euros del Barcelona al PSG?",

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
                "¿Qué jugador fichó el Real Madrid procedente del Tottenham en 2013?",

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
                "¿Qué club fichó a Eden Hazard procedente del Chelsea?",

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
                "¿Qué legendario futbolista salvadoreño es uno de los grandes iconos del Cádiz?",

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
                "¿Cómo se conoce popularmente a Jorge González?",

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
                "¿Quién es una de las grandes leyendas goleadoras históricas del Cádiz?",

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
                "¿Qué jugador es conocido como Mágico González?",

            answers: [
                "Jorge González",
                "Paco Baena",
                "Pepe Mejías",
                "Juan José"
            ],

            correct: 0
        },

        {
            question:
                "¿Qué colores identifican tradicionalmente al Cádiz CF?",

            answers: [
                "Rojo y blanco",
                "Azul y amarillo",
                "Verde y blanco",
                "Azul y rojo"
            ],

            correct: 1
        },

        {
            question:
                "¿Cómo se conoce al estadio del Cádiz CF?",

            answers: [
                "Ramón de Carranza",
                "Nuevo Mirandilla",
                "El Carranza",
                "Ambas B y C"
            ],

            correct: 3
        }

    ],


    /* =====================================================
       FC 27
       ===================================================== */

    fc27: [

        {
            question:
                "¿Cómo se llama el nuevo espacio social de EA SPORTS FC 27?",

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
                "¿Qué modo incorpora una nueva Galería FUT?",

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
                "¿Qué espacio permite jugar pachangas y partidos dentro de FC 27?",

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
                "¿Qué modo de juego está orientado a gestionar un club?",

            answers: [
                "Carrera",
                "Clubes",
                "The Grounds",
                "Volta"
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
                "¿Quién tiene el récord de Trofeos Pichichi?",

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
                "¿Qué equipo ganó la primera edición de LaLiga?",

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
                "¿Qué jugador argentino marcó 474 goles en LaLiga?",

            answers: [
                "Alfredo Di Stéfano",
                "Lionel Messi",
                "Sergio Agüero",
                "Diego Maradona"
            ],

            correct: 1
        },

        {
            question:
                "¿Qué jugador ganó ocho veces el Trofeo Pichichi?",

            answers: [
                "Cristiano Ronaldo",
                "Telmo Zarra",
                "Lionel Messi",
                "Hugo Sánchez"
            ],

            correct: 2
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
                "¿Quién marcó 36 goles en una temporada de Premier League?",

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
                "¿Qué club ganó la Premier League de forma invicta en 2003/04?",

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
                "¿Quién es el máximo goleador histórico del Newcastle y de la Premier?",

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
                "¿Qué club ganó el histórico triplete inglés en 1998/99?",

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
                "¿Qué entrenador dirigió al Leicester cuando ganó la Premier 2015/16?",

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
                "¿Qué delantero francés ganó cuatro veces el Pichichi de la Premier con Arsenal?",

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
   ESTADO
   ========================================================= */

let score = 0;

let lives = MAX_LIVES;

let currentCategory = null;

let currentQuestion = null;

let isSpinning = false;

let usedQuestions = {};

let wheelRotation = 0;


/* =========================================================
   ELEMENTOS
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

const rouletteLabels =
    document.getElementById("roulette-labels");

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

const passwordElement =
    document.getElementById("password");


/* =========================================================
   CREAR ETIQUETAS DE LA RULETA
   ========================================================= */

function createWheelLabels() {

    rouletteLabels.innerHTML = "";


    categories.forEach(
        (category, index) => {

            const label =
                document.createElement("div");


            label.className =
                `roulette-label label-${index + 1}`;


            label.style.setProperty(
                "--angle",
                `${index * 40 + 20}deg`
            );


            label.innerHTML = `
                ${category.icon}
                ${category.name}
            `;


            rouletteLabels.appendChild(
                label
            );

        }
    );

}


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


    categories.forEach(
        category => {

            usedQuestions[
                category.id
            ] = [];

        }
    );


    roulette.style.transform =
        "rotate(0deg)";


    updateScore();

    updateLives();


    startScreen.classList.add(
        "hidden"
    );

    loseScreen.classList.add(
        "hidden"
    );

    winScreen.classList.add(
        "hidden"
    );

    gameScreen.classList.remove(
        "hidden"
    );


    categoryDisplay.classList.add(
        "hidden"
    );

    questionCard.classList.add(
        "hidden"
    );

    feedbackElement.className =
        "question-feedback hidden";

    feedbackElement.innerHTML =
        "";


    spinButton.disabled = false;


    createWheelLabels();

}


/* =========================================================
   REINICIAR
   ========================================================= */

function restartGame() {

    startGame();

}


/* =========================================================
   MARCADOR
   ========================================================= */

function updateScore() {

    scoreElement.textContent =
        `${score} / ${TARGET_SCORE}`;

}


/* =========================================================
   VIDAS
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


    questionCard.classList.add(
        "hidden"
    );

    categoryDisplay.classList.add(
        "hidden"
    );

    feedbackElement.className =
        "question-feedback hidden";


    /*
       Elegimos el segmento ganador.
    */

    const winningIndex =
        Math.floor(
            Math.random() *
            categories.length
        );


    currentCategory =
        categories[winningIndex];


    /*
       Cada segmento ocupa 40º.

       El centro del segmento es:

       20º
       60º
       100º
       ...

       La flecha está a 270º.

       Queremos que el centro del segmento
       ganador termine exactamente bajo ella.
    */

    const segmentCenter =
        winningIndex * 40 + 20;


    const desiredRotation =
        270 - segmentCenter;


    /*
       Damos entre 5 y 7 vueltas completas.
    */

    const extraTurns =
        5 +
        Math.floor(
            Math.random() * 3
        );


    /*
       Normalizamos el ángulo deseado
       para evitar acumulaciones extrañas.
    */

    const normalizedTarget =
        (
            desiredRotation % 360 +
            360
        ) % 360;


    wheelRotation =
        extraTurns * 360 +
        normalizedTarget;


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

function getRandomQuestion(
    categoryId
) {

    const questions =
        questionBank[categoryId];


    if (
        usedQuestions[categoryId].length >=
        questions.length
    ) {

        usedQuestions[categoryId] = [];

    }


    const availableIndexes =
        questions
            .map(
                (_, index) => index
            )
            .filter(
                index =>
                    !usedQuestions[
                        categoryId
                    ].includes(index)
            );


    const randomPosition =
        Math.floor(
            Math.random() *
            availableIndexes.length
        );


    const selectedIndex =
        availableIndexes[
            randomPosition
        ];


    usedQuestions[
        categoryId
    ].push(
        selectedIndex
    );


    return questions[
        selectedIndex
    ];

}


/* =========================================================
   MEZCLAR RESPUESTAS
   ========================================================= */

function shuffleArray(array) {

    const copy = [...array];


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


    answersElement.innerHTML =
        "";


    const answerObjects =
        currentQuestion.answers.map(
            (answer, index) => ({

                text: answer,

                correct:
                    index ===
                    currentQuestion.correct

            })
        );


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


    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );


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
   CORRECTA
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
        `✅ ¡CORRECTO! Llevas ` +
        `${score} de ${TARGET_SCORE} aciertos.`;


    if (
        score >= TARGET_SCORE
    ) {

        setTimeout(
            () => {

                showWin();

            },
            1200
        );

        return;

    }


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
   INCORRECTA
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
        "❌ ¡INCORRECTO! Has perdido una vida.";


    if (
        lives <= 0
    ) {

        setTimeout(
            () => {

                showLose();

            },
            1200
        );

        return;

    }


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
   DERROTA
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
   VICTORIA
   ========================================================= */

function showWin() {

    gameScreen.classList.add(
        "hidden"
    );

    winScreen.classList.remove(
        "hidden"
    );


    /*
       De momento dejamos XX.
       Más adelante pondremos aquí
       la cuarta pieza definitiva.
    */

    passwordElement.textContent =
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
   PREPARAR RULETA AL CARGAR
   ========================================================= */

createWheelLabels();

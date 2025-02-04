// Obtener referencias a los elementos
const emotionSelect = document.getElementById('emotionSelect');
const generateMessageBtn = document.getElementById('generateMessage');
const messageOutput = document.getElementById('messageOutput');
const animationsContainer = document.querySelector('.animations-container');
const poemaElement = document.getElementById('poema');


//contenido del poema

const poema = `Tus ojos brillan más que las galaxias,
con un destello que me hace soñar,
en su luz encuentro mi refugio,
y en su mirada, quiero descansar.`;


// Listas de mensajes con emojis y animaciones
const messages = {
    mensajeDia: [
        // COMIDA (20 mensajes)
        { text: "Hoy será tan dulce como un churro recién hecho 🍩 ¡A por ello!", emoji: "🍩" },
        { text: "Despierta con energía de café espresso ☕ y actitud de croissant 🥐", emoji: "☕" },
        { text: "Hoy la vida te sirve un menú de oportunidades ¡Ordénalas todas! 🍽️", emoji: "🍽️" },
        { text: "Eres más especial que el último trozo de pizza 🍕 ¡Disfrútalo!", emoji: "🍕" },
        { text: "Hoy tu sonrisa es el ingrediente secreto del universo 🌌", emoji: "🌌" },
        
        // ANIMALES (20 mensajes)
        { text: "Hoy ruge como león 🦁 y brilla como luciérnaga ✨", emoji: "🦁" },
        { text: "Fluye como delfín en el mar 🌊 ¡El día es tu ola!", emoji: "🌊" },
        { text: "Despierta con curiosidad de gato 🐈⬛ y sabiduría de búho 🦉", emoji: "🐈⬛" },
        { text: "Hoy vuela más alto que águila 🦅 ¡El cielo es tu límite!", emoji: "🦅" },
        { text: "Tu energía hoy es de colibrí bebé tomando redbull 🐦⚡", emoji: "⚡" },
        
        // TECNOLOGÍA (20 mensajes)
        { text: "Hoy actualízate a la versión más awesome de ti mismo 💻✨", emoji: "✨" },
        { text: "Carga tu batería al 100% 🔋 y desactiva el modo avión ✈️", emoji: "🔋" },
        { text: "Tu WiFi interior está en máxima señal 📶 ¡Conéctate a la felicidad!", emoji: "📶" },
        { text: "Hoy eres el meme viral que todos necesitan 😎🔥", emoji: "🔥" },
        { text: "¡Alerta! Tu actitud está causando cortocircuitos de alegría ⚡", emoji: "⚡" },
        
        // HIPERBOLAS (20 mensajes)
        { text: "Hoy brillarás más que un unicornio en una discoteca 🦄✨", emoji: "🦄" },
        { text: "Tu energía podría cargar 1000 iPhones sin cable 🔋📱", emoji: "📱" },
        { text: "Hoy conquistarás el mundo usando solo tu sonrisa 😁🌍", emoji: "🌍" },
        { text: "¡Cuidado! Tu positivismo está creando un arcoíris gigante 🌈", emoji: "🌈" },
        { text: "Hoy eres más necesario que el botón 'snooze' en lunes temprano ⏰", emoji: "⏰" },
        
        // CULTURA POP (20 mensajes)
        { text: "Hoy es tu día para brillar como Barbie en el multiverso 💖", emoji: "💖" },
        { text: "Activa tu modo superheroína 🦸♀️ ¡El mundo te necesita!", emoji: "🦸♀️" },
        { text: "Hoy rueda tu escena como si fuera película de Marvel 🎥✨", emoji: "🎥" },
        { text: "Eres más icónico que el walk de Beyoncé en la alfombra roja 👑", emoji: "👑" },
        { text: "Hoy es tu 'Hakuna Matata' personal 🦁 ¡Sin preocupaciones!", emoji: "🦁" },
        
        // EJEMPLOS ADICIONALES (completando a 100)
        { text: "Hoy el universo conspira a tu favor 🌌 ¡Aprovéchalo!", emoji: "🌌" },
        { text: "Si el día fuera selfie, tú serías el mejor filtro ✨", emoji: "✨" },
        { text: "Hoy es día de ser imparable como tsunami de algodón 🌊", emoji: "🌊" },
        { text: "¡Despierta! Hay más magia en ti que en varita de Harry Potter ⚡", emoji: "⚡" },
        { text: "Hoy tu actitud es más brillante que neón en Tokyo 🗼", emoji: "🗼" },
        { text: "El mundo es tu TikTok ¡Hazlo viral hoy! 📱💃", emoji: "💃" },
        { text: "Hoy eres la protagonista de tu propia serie en Netflix 🎬", emoji: "🎬" },
        { text: "Si el día fuera canción, tú serías el coro que todos repiten 🎶", emoji: "🎶" },
        { text: "Hoy es día de ser más dulce que helado de fresa 🍓", emoji: "🍓" },
        { text: "¡Alerta! Hoy vas a romper el termómetro de lo increíble 🌡️", emoji: "🌡️" }
    ],
    triste: [
        // Comida (20 mensajes)
        { text: "Hasta los helados se derriten a veces... pero siempre hay otro 🍦", emoji: "🍦" },
        { text: "Te enviaré una pizza con extra de abrazos virtuales 🍕🤗", emoji: "🍕" },
        { text: "Cuando la vida te dé limones... ¡hazmojitos y llora si necesitas! 🍋", emoji: "🍋" },
        { text: "Hoy el chocolate está en modo '80% oscuridad emocional' 🍫", emoji: "🍫" },
        { text: "Tu corazón es como café sin azúcar: fuerte pero con un toque amargo ☕", emoji: "☕" },
        { text: "Las galletas más crujientes también se desmoronan... y está bien 🍪", emoji: "🍪" },
        { text: "Enviando sopa de letras con mensajes secretos de ánimo 🥣", emoji: "🥣" },
        { text: "Hoy los macarons están tristes... pero mañana serán color pastel 🌈", emoji: "🌈" },
        { text: "Tu tristeza es como nube en el café: temporal y disoluble ☁️", emoji: "☁️" },
        { text: "Horneando cookies con chispas de esperanza 🍪✨", emoji: "✨" },
    
        // Animales (20 mensajes)
        { text: "Mandando manada de perritos salchicha para abrazarte 🌭🐶", emoji: "🌭" },
        { text: "Hasta los koalas tienen días sin ganas de abrazar árboles 🐨", emoji: "🐨" },
        { text: "Tu corazón es como erizo en invierno: pronto sacará sus púas ❄️🦔", emoji: "🦔" },
        { text: "Enviando tortugas sabias con consejos a cámara lenta 🐢💬", emoji: "💬" },
        { text: "Los pingüinos también tropiezan en el hielo... y se levantan 🐧", emoji: "🐧" },
        { text: "Reservado: spa de abrazos de oso panda por tiempo ilimitado 🐼", emoji: "🐼" },
        { text: "Tu dolor es como ballena varada... pero la marea cambiará 🐋", emoji: "🐋" },
        { text: "Los colibríes también necesitan posarse para volver a volar 🐦", emoji: "🐦" },
        { text: "Mandarín de ánimos: orangután sabio enviando señales de humo 🐒💨", emoji: "🐒" },
        { text: "Los pulpos tienen 3 corazones... y aun así se entristecen 🐙", emoji: "🐙" },
    
        // Tecnología (20 mensajes)
        { text: "Error 404: Sonrisa no encontrada - Reiniciando con abrazos 💻", emoji: "💻" },
        { text: "Actualizando software emocional... 15% completado ⏳", emoji: "⏳" },
        { text: "Tu corazón está en modo avión... pero pronto reconectará ✈️", emoji: "✈️" },
        { text: "Batería emocional baja - Conectando cargador de amor 🔋", emoji: "🔋" },
        { text: "Desfragmentando recuerdos pesados... 32% optimizado 💾", emoji: "💾" },
        { text: "Antivirus anti-tristeza escaneando... 1.000 abrazos detectados 🛡️", emoji: "🛡️" },
        { text: "Backup de buenos momentos restaurado al 75% 📼", emoji: "📼" },
        { text: "Cortafuegos emocional activado contra malas vibras 🔥", emoji: "🔥" },
        { text: "Tu alma tiene 147 pestañas abiertas - Cerremos algunas juntos 🖥️", emoji: "🖥️" },
        { text: "Memoria RAM emocional sobrecargada - Iniciando modo zen 🧘♂️", emoji: "🧘♂️" },
    
        // Hiperbolas (20 mensajes)
        { text: "Tu tristeza podría llenar el Gran Cañón... y aún así te quedaría espacio 🏜️", emoji: "🏜️" },
        { text: "Nivel de drama: Temporada final de telenovela a las 3 AM 📺", emoji: "📺" },
        { text: "Lagrimómetro: Océano Atlántico de sentimientos 🌊", emoji: "🌊" },
        { text: "Tu dolor es tan grande que hasta la Torre Eiffel se inclinó 🗼", emoji: "🗼" },
        { text: "Si la tristeza fuera WiFi, tendrías señal en Marte 📶", emoji: "📶" },
        { text: "Creando arcoíris con tus lágrimas... el sol saldrá pronto 🌈", emoji: "🌈" },
        { text: "Tu corazón es como volcán en erupción... pronto será tierra fértil 🌋", emoji: "🌋" },
        { text: "Nube emocional: Tormenta perfecta con rayos de nostalgia ⚡", emoji: "⚡" },
        { text: "Tu pena podría alimentar 10 plantas nucleares... pero reciclemosla ♻️", emoji: "♻️" },
        { text: "Eres más fuerte que tsunami de peluches mojados 🧸🌊", emoji: "🧸" },
    
        // Cultura Pop (20 mensajes)
        { text: "Hoy es tu 'Let It Go' personal - ¡la tormenta pasará! ❄️", emoji: "❄️" },
        { text: "Eres más resiliente que Forrest Gump corriendo por años 🏃♂️", emoji: "🏃♂️" },
        { text: "Hasta los X-Men tienen días sin ganas de salvar el mundo 🦸♂️", emoji: "🦸♂️" },
        { text: "Nivel de drama: Escena de Titanic en 4K emocional 🚢", emoji: "🚢" },
        { text: "Tu historia es como El Señor de los Anillos: el retorno del amor 📖", emoji: "📖" },
        { text: "Eres más valiente que Katniss en los Juegos del Hambre 🏹", emoji: "🏹" },
        { text: "Hasta Dumbledore lloró alguna vez... y mira todo lo que logró 🧙♂️", emoji: "🧙♂️" },
        { text: "Este es tu momento 'Bella durmiente'... pronto despertarás 🌹", emoji: "🌹" },
        { text: "Nivel de épica: Rocky entrenando para revancha emocional 🥊", emoji: "🥊" },
        { text: "Tu dolor es como el de Eleven en Stranger Things... pero tú tienes más poder 🧠", emoji: "🧠" },
         // ELEMENTOS NATURALES (20 mensajes)
    { text: "Tu tristeza es como árbol en invierno: pronto brotarán nuevas hojas 🍂→🌸", emoji: "🍂" },
    { text: "Nivel de melancolía: Atardecer en playa vacía 🌅", emoji: "🌅" },
    { text: "Eres más profundo que océano en noche de luna nueva 🌊🌑", emoji: "🌑" },
    { text: "Lágrimas convertidas en río que nutrirá nuevos paisajes 💧🌱", emoji: "🌱" },
    { text: "Tu dolor es semilla bajo tierra: germinará en fuerza 🌱", emoji: "🌱" },
    
    // ARTE ALTERNATIVO (20 mensajes)
    { text: "Eres cuadro de Van Gogh en su noche más estrellada 🌌🎨", emoji: "🎨" },
    { text: "Tu tristeza es jazz en modo menor: pronto vendrá el swing 🎷", emoji: "🎷" },
    { text: "Poema sin rimas buscando su métrica perfecta 📜", emoji: "📜" },
    { text: "Escultura de mármol esperando ser cincelada con luz ⛏️", emoji: "⛏️" },
    { text: "Tu dolor es danza contemporánea: caída antes del vuelo 💃", emoji: "💃" },
    
    // MITOLOGÍA (20 mensajes)
    { text: "Eres más épico que Aquiles en su talón vulnerable 🛡️", emoji: "🛡️" },
    { text: "Nivel de drama: Orfeo buscando a Eurídice en el inframundo 🎶", emoji: "🎶" },
    { text: "Tristeza de sirena varada entre dos mundos 🧜♀️", emoji: "🧜♀️" },
    { text: "Fénix en su momento previo al renacer 🔥", emoji: "🔥" },
    { text: "Eres más valiente que Hércules limpiando establos emocionales 🦁", emoji: "🦁" },
    
    // CIENCIA FICCIÓN (20 mensajes)
    { text: "Tu dolor es agujero de gusano a universo paralelo mejor 🪐", emoji: "🪐" },
    { text: "Nave estelar perdida en nebulosa de recuerdos 🚀", emoji: "🚀" },
    { text: "Error 404: Sistema de alegría no encontrado - Reiniciando 💻", emoji: "💻" },
    { text: "Criogenizando emociones hasta mejor clima emocional ❄️", emoji: "❄️" },
    { text: "Eres más complejo que ecuación de cuerdas cósmicas 📐", emoji: "📐" },
    
    // OBJETOS COTIDIANOS (20 mensajes)
    { text: "Paraguas roto en día de lluvia emocional ☔", emoji: "☔" },
    { text: "Reloj de arena atascado en hora difícil ⏳", emoji: "⏳" },
    { text: "Libro con páginas pegadas por lágrimas antiguas 📖", emoji: "📖" },
    { text: "Farola apagada en calle de memorias 🏮", emoji: "🏮" },
    { text: "Antigua muñeca de porcelana en ático del alma 🧸", emoji: "🧸" },
    
    // EJEMPLOS ADICIONALES (completando 100)
    { text: "Eres más resistente que cactus en desierto de indiferencia 🌵", emoji: "🌵" },
    { text: "Naufragio emocional buscando isla de calma 🏝️", emoji: "🏝️" },
    { text: "Tus lágrimas son mapa de constelaciones por descubrir 🌌", emoji: "🌌" },
    { text: "Pintura al óleo donde la tristeza es solo primera capa 🖌️", emoji: "🖌️" },
    { text: "Eres más valioso que diamante bajo presión extrema 💎", emoji: "💎" },
    { text: "Melancolía de violín desafinado en concierto silencioso 🎻", emoji: "🎻" },
    { text: "Jardín de invierno donde crecerán flores de resiliencia ❄️🌷", emoji: "🌷" },
    { text: "Poema haiku escrito en idioma universal del corazón 🗾", emoji: "🗾" },
    { text: "Eres más misterioso que manuscrito medieval sin traducir 🏰", emoji: "🏰" },
    { text: "Nube de lluvia que riega semillas de futuro crecimiento ☁️", emoji: "☁️" },
        //romanticos

        { text: "Recuerda siempre, mi vida, que eres increíble, y nada te detiene. 💪", emoji: "💪" },
        { text: "Que este día esté lleno de amor, risas y momentos que compartimos juntos. 💖", emoji: "💖" },
        { text: "Hoy, junto a ti, todo será maravilloso. 🌸", emoji: "🌸" },
        { text: "Te abrazo con el alma en cada paso que das hoy. 💫", emoji: "💫" },
        { text: "Este día es perfecto para que sigas brillando como lo haces cada día. ✨", emoji: "✨" },
        { text: "Hoy, mi amor, es un buen día para que nuestros sueños se sigan entrelazando. 🌱", emoji: "🌱" },
        { text: "Contigo, cada día es una nueva oportunidad para ser felices juntos. 💕", emoji: "💕" },
        { text: "Que este día esté lleno de sonrisas, como la tuya, que ilumina mi mundo. 😊", emoji: "😊" },
        { text: "Hoy, quiero que sientas todo mi amor en cada momento. ❤️", emoji: "❤️" },
        { text: "Hoy será un día lleno de magia, porque tú eres mi magia. ✨", emoji: "✨" },
        { text: "Hoy es el día para brillar juntos, mi amor. 🌟", emoji: "🌟" },
        { text: "Cada día contigo es un regalo, ¡que este sea uno lleno de momentos hermosos! 🎁", emoji: "🎁" },
        { text: "Que tu día sea tan brillante como la luz que traes a mi vida. 😄", emoji: "😄" },
        { text: "Hoy es tu día, amor, para conquistar el mundo, y yo estaré aquí animándote. 💪", emoji: "💪" },
        { text: "Hoy quiero que solo pienses en todo lo que nos espera, juntos. 💖", emoji: "💖" },
        { text: "Haz de hoy un día tan hermoso como tu sonrisa, mi amor. 🌸", emoji: "🌸" },
        { text: "Hoy es el día perfecto para seguir construyendo nuestros sueños. 🌠", emoji: "🌠" },
        { text: "Hoy, con todo mi corazón, te deseo un día lleno de amor y bendiciones. 🙏", emoji: "🙏" },
        { text: "Hoy es el día para que nuestro amor siga creciendo. 🌻", emoji: "🌻" },
        { text: "Hoy, quiero hacer de este día un recuerdo inolvidable, a tu lado. 💖", emoji: "💖" },
        { text: "Hoy es un buen día para hacer todo lo que te haga feliz, porque tú lo mereces. 🥰", emoji: "🥰" },
        { text: "Mi amor, hoy el sol brilla para ti y para todo lo que te hace feliz. 🌞", emoji: "🌞" },
        { text: "Hoy es un día para compartir y disfrutar de cada pequeño detalle juntos. 🌻", emoji: "🌻" },
        { text: "Hoy, más que nunca, quiero verte feliz, porque tu felicidad es la mía. 💖", emoji: "💖" },
        { text: "Que tu día esté lleno de momentos tan hermosos como nuestra historia. 🌟", emoji: "🌟" },
        { text: "Hoy es el día perfecto para amarnos más, mi vida. ❤️", emoji: "❤️" },
        { text: "Hoy, mi amor, es un buen día para seguir soñando juntos. 🌠", emoji: "🌠" },
        { text: "Que este día esté lleno de pequeños momentos que siempre recordaremos. 🥰", emoji: "🥰" },
        { text: "Hoy es el día perfecto para hacer lo que amamos, juntos. 💖", emoji: "💖" },
        { text: "Que tengas un día tan hermoso como el amor que compartimos. 💖", emoji: "💖" },
        { text: "Hoy, el amor será la energía que nos guíe en cada paso. 💫", emoji: "💫" },
        { text: "Este día, como todos, es mejor a tu lado. 🌸", emoji: "🌸" },
        { text: "Hoy es perfecto para seguir escribiendo nuestra historia de amor. 📖", emoji: "📖" },
        { text: "Hoy, mi amor, es un buen día para hacer que nuestros sueños se hagan realidad. ✨", emoji: "✨" }
    ],
    triste: [
       // Comida (20 mensajes)
        { text: "Hasta los helados se derriten a veces... pero siempre hay otro 🍦", emoji: "🍦" },
        { text: "Te enviaré una pizza con extra de abrazos virtuales 🍕🤗", emoji: "🍕" },
        { text: "Cuando la vida te dé limones... ¡hazmojitos y llora si necesitas! 🍋", emoji: "🍋" },
        { text: "Hoy el chocolate está en modo '80% oscuridad emocional' 🍫", emoji: "🍫" },
        { text: "Tu corazón es como café sin azúcar: fuerte pero con un toque amargo ☕", emoji: "☕" },
        { text: "Las galletas más crujientes también se desmoronan... y está bien 🍪", emoji: "🍪" },
        { text: "Enviando sopa de letras con mensajes secretos de ánimo 🥣", emoji: "🥣" },
        { text: "Hoy los macarons están tristes... pero mañana serán color pastel 🌈", emoji: "🌈" },
        { text: "Tu tristeza es como nube en el café: temporal y disoluble ☁️", emoji: "☁️" },
        { text: "Horneando cookies con chispas de esperanza 🍪✨", emoji: "✨" },
    
        // Animales (20 mensajes)
        { text: "Mandando manada de perritos salchicha para abrazarte 🌭🐶", emoji: "🌭" },
        { text: "Hasta los koalas tienen días sin ganas de abrazar árboles 🐨", emoji: "🐨" },
        { text: "Tu corazón es como erizo en invierno: pronto sacará sus púas ❄️🦔", emoji: "🦔" },
        { text: "Enviando tortugas sabias con consejos a cámara lenta 🐢💬", emoji: "💬" },
        { text: "Los pingüinos también tropiezan en el hielo... y se levantan 🐧", emoji: "🐧" },
        { text: "Reservado: spa de abrazos de oso panda por tiempo ilimitado 🐼", emoji: "🐼" },
        { text: "Tu dolor es como ballena varada... pero la marea cambiará 🐋", emoji: "🐋" },
        { text: "Los colibríes también necesitan posarse para volver a volar 🐦", emoji: "🐦" },
        { text: "Mandarín de ánimos: orangután sabio enviando señales de humo 🐒💨", emoji: "🐒" },
        { text: "Los pulpos tienen 3 corazones... y aun así se entristecen 🐙", emoji: "🐙" },
    
        // Tecnología (20 mensajes)
        { text: "Error 404: Sonrisa no encontrada - Reiniciando con abrazos 💻", emoji: "💻" },
        { text: "Actualizando software emocional... 15% completado ⏳", emoji: "⏳" },
        { text: "Tu corazón está en modo avión... pero pronto reconectará ✈️", emoji: "✈️" },
        { text: "Batería emocional baja - Conectando cargador de amor 🔋", emoji: "🔋" },
        { text: "Desfragmentando recuerdos pesados... 32% optimizado 💾", emoji: "💾" },
        { text: "Antivirus anti-tristeza escaneando... 1.000 abrazos detectados 🛡️", emoji: "🛡️" },
        { text: "Backup de buenos momentos restaurado al 75% 📼", emoji: "📼" },
        { text: "Cortafuegos emocional activado contra malas vibras 🔥", emoji: "🔥" },
        { text: "Tu alma tiene 147 pestañas abiertas - Cerremos algunas juntos 🖥️", emoji: "🖥️" },
        { text: "Memoria RAM emocional sobrecargada - Iniciando modo zen 🧘♂️", emoji: "🧘♂️" },
    
        // Hiperbolas (20 mensajes)
        { text: "Tu tristeza podría llenar el Gran Cañón... y aún así te quedaría espacio 🏜️", emoji: "🏜️" },
        { text: "Nivel de drama: Temporada final de telenovela a las 3 AM 📺", emoji: "📺" },
        { text: "Lagrimómetro: Océano Atlántico de sentimientos 🌊", emoji: "🌊" },
        { text: "Tu dolor es tan grande que hasta la Torre Eiffel se inclinó 🗼", emoji: "🗼" },
        { text: "Si la tristeza fuera WiFi, tendrías señal en Marte 📶", emoji: "📶" },
        { text: "Creando arcoíris con tus lágrimas... el sol saldrá pronto 🌈", emoji: "🌈" },
        { text: "Tu corazón es como volcán en erupción... pronto será tierra fértil 🌋", emoji: "🌋" },
        { text: "Nube emocional: Tormenta perfecta con rayos de nostalgia ⚡", emoji: "⚡" },
        { text: "Tu pena podría alimentar 10 plantas nucleares... pero reciclemosla ♻️", emoji: "♻️" },
        { text: "Eres más fuerte que tsunami de peluches mojados 🧸🌊", emoji: "🧸" },
    
        // Cultura Pop (20 mensajes)
        { text: "Hoy es tu 'Let It Go' personal - ¡la tormenta pasará! ❄️", emoji: "❄️" },
        { text: "Eres más resiliente que Forrest Gump corriendo por años 🏃♂️", emoji: "🏃♂️" },
        { text: "Hasta los X-Men tienen días sin ganas de salvar el mundo 🦸♂️", emoji: "🦸♂️" },
        { text: "Nivel de drama: Escena de Titanic en 4K emocional 🚢", emoji: "🚢" },
        { text: "Tu historia es como El Señor de los Anillos: el retorno del amor 📖", emoji: "📖" },
        { text: "Eres más valiente que Katniss en los Juegos del Hambre 🏹", emoji: "🏹" },
        { text: "Hasta Dumbledore lloró alguna vez... y mira todo lo que logró 🧙♂️", emoji: "🧙♂️" },
        { text: "Este es tu momento 'Bella durmiente'... pronto despertarás 🌹", emoji: "🌹" },
        { text: "Nivel de épica: Rocky entrenando para revancha emocional 🥊", emoji: "🥊" },
        { text: "Tu dolor es como el de Eleven en Stranger Things... pero tú tienes más poder 🧠", emoji: "🧠" },
         // ELEMENTOS NATURALES (20 mensajes)
    { text: "Tu tristeza es como árbol en invierno: pronto brotarán nuevas hojas 🍂→🌸", emoji: "🍂" },
    { text: "Nivel de melancolía: Atardecer en playa vacía 🌅", emoji: "🌅" },
    { text: "Eres más profundo que océano en noche de luna nueva 🌊🌑", emoji: "🌑" },
    { text: "Lágrimas convertidas en río que nutrirá nuevos paisajes 💧🌱", emoji: "🌱" },
    { text: "Tu dolor es semilla bajo tierra: germinará en fuerza 🌱", emoji: "🌱" },
    
    // ARTE ALTERNATIVO (20 mensajes)
    { text: "Eres cuadro de Van Gogh en su noche más estrellada 🌌🎨", emoji: "🎨" },
    { text: "Tu tristeza es jazz en modo menor: pronto vendrá el swing 🎷", emoji: "🎷" },
    { text: "Poema sin rimas buscando su métrica perfecta 📜", emoji: "📜" },
    { text: "Escultura de mármol esperando ser cincelada con luz ⛏️", emoji: "⛏️" },
    { text: "Tu dolor es danza contemporánea: caída antes del vuelo 💃", emoji: "💃" },
    
    // MITOLOGÍA (20 mensajes)
    { text: "Eres más épico que Aquiles en su talón vulnerable 🛡️", emoji: "🛡️" },
    { text: "Nivel de drama: Orfeo buscando a Eurídice en el inframundo 🎶", emoji: "🎶" },
    { text: "Tristeza de sirena varada entre dos mundos 🧜♀️", emoji: "🧜♀️" },
    { text: "Fénix en su momento previo al renacer 🔥", emoji: "🔥" },
    { text: "Eres más valiente que Hércules limpiando establos emocionales 🦁", emoji: "🦁" },
    
    // CIENCIA FICCIÓN (20 mensajes)
    { text: "Tu dolor es agujero de gusano a universo paralelo mejor 🪐", emoji: "🪐" },
    { text: "Nave estelar perdida en nebulosa de recuerdos 🚀", emoji: "🚀" },
    { text: "Error 404: Sistema de alegría no encontrado - Reiniciando 💻", emoji: "💻" },
    { text: "Criogenizando emociones hasta mejor clima emocional ❄️", emoji: "❄️" },
    { text: "Eres más complejo que ecuación de cuerdas cósmicas 📐", emoji: "📐" },
    
    // OBJETOS COTIDIANOS (20 mensajes)
    { text: "Paraguas roto en día de lluvia emocional ☔", emoji: "☔" },
    { text: "Reloj de arena atascado en hora difícil ⏳", emoji: "⏳" },
    { text: "Libro con páginas pegadas por lágrimas antiguas 📖", emoji: "📖" },
    { text: "Farola apagada en calle de memorias 🏮", emoji: "🏮" },
    { text: "Antigua muñeca de porcelana en ático del alma 🧸", emoji: "🧸" },
    
    // EJEMPLOS ADICIONALES (completando 100)
    { text: "Eres más resistente que cactus en desierto de indiferencia 🌵", emoji: "🌵" },
    { text: "Naufragio emocional buscando isla de calma 🏝️", emoji: "🏝️" },
    { text: "Tus lágrimas son mapa de constelaciones por descubrir 🌌", emoji: "🌌" },
    { text: "Pintura al óleo donde la tristeza es solo primera capa 🖌️", emoji: "🖌️" },
    { text: "Eres más valioso que diamante bajo presión extrema 💎", emoji: "💎" },
    { text: "Melancolía de violín desafinado en concierto silencioso 🎻", emoji: "🎻" },
    { text: "Jardín de invierno donde crecerán flores de resiliencia ❄️🌷", emoji: "🌷" },
    { text: "Poema haiku escrito en idioma universal del corazón 🗾", emoji: "🗾" },
    { text: "Eres más misterioso que manuscrito medieval sin traducir 🏰", emoji: "🏰" },
    { text: "Nube de lluvia que riega semillas de futuro crecimiento ☁️", emoji: "☁️" },
        //romatico
        { text: "En los días grises, siempre seré tu sol, mi amor. 🌞", emoji: "🌞" },
        { text: "No importa lo que pase, mi corazón siempre estará a tu lado. 💖", emoji: "💖" },
        { text: "Cada paso que das, mi amor por ti crece más. Juntos podemos con todo. 💕", emoji: "💕" },
        { text: "En cada lágrima que caes, mi amor se convierte en tu refugio. 💧", emoji: "💧" },
        { text: "Tu fortaleza es mi inspiración, juntos somos invencibles. 💪", emoji: "💪" },
        { text: "No te preocupes por el mañana, mi amor, porque contigo todo lo supero. 🌅", emoji: "🌅" },
        { text: "Aunque hoy sea difícil, sé que el amor que nos une nos hará más fuertes. 🌸", emoji: "🌸" },
        { text: "Te abrazo en cada pensamiento, amor mío, siempre estaré allí para ti. 🫂", emoji: "🫂" },
        { text: "Aunque las nubes cubran el cielo, mi amor por ti será siempre la estrella brillante. ⭐", emoji: "⭐" },
        { text: "Hoy, mi amor, es solo un capítulo en nuestra hermosa historia. Mañana será mejor. 📖", emoji: "📖" },
        { text: "Cuando el mundo se ponga pesado, yo seré tu refugio eterno. 💙", emoji: "💙" },
        { text: "Lo que sientes es una huella de lo que estás aprendiendo, y yo estaré a tu lado en cada paso. 🌷", emoji: "🌷" },
        { text: "Que tu corazón se calme, mi amor, porque en mis brazos siempre encontrarás paz. 🌺", emoji: "🌺" },
        { text: "Nada podrá separarnos, amor mío, porque mi alma está contigo siempre. 🖤", emoji: "🖤" },
        { text: "Las estrellas brillan para ti, amor mío, y yo siempre estaré mirando hacia ellas con cariño. 🌠", emoji: "🌠" },
        { text: "Mi amor, cada vez que te caes, mi corazón se levanta para abrazarte. 🌸", emoji: "🌸" },
        { text: "Hoy todo puede parecer difícil, pero mi amor por ti lo hará todo más ligero. 💖", emoji: "💖" },
        { text: "Aunque las lágrimas caigan, mi amor por ti siempre las secará. 💧", emoji: "💧" },
        { text: "Si alguna vez dudas de tu fuerza, recuerda que soy tu razón para ser fuerte. 💪", emoji: "💪" },
        { text: "Te amo más de lo que las palabras pueden expresar, y siempre estaré a tu lado. 💕", emoji: "💕" },
        { text: "Todo lo que necesitas está dentro de ti, pero yo estaré aquí para recordártelo siempre. 🌟", emoji: "🌟" },
        { text: "Aunque hoy el viento sople fuerte, siempre seré tu abrigo. 🌬️", emoji: "🌬️" },
        { text: "Hoy te mando un beso al viento, mi amor, para que sientas mi cariño donde estés. 💋", emoji: "💋" },
        { text: "En cada momento difícil, recuerda que eres mi razón de sonreír. 🌹", emoji: "🌹" },
        { text: "Nada ni nadie podrá apagar el amor que tengo por ti, ni en los días más oscuros. 🌑", emoji: "🌑" },
        { text: "Los días tristes también pasan, mi amor, y al final siempre habrá sol y un abrazo. 🌞", emoji: "🌞" },
        { text: "Te envío mil abrazos con cada suspiro, porque en cada uno de ellos está mi amor por ti. 💖", emoji: "💖" },
        { text: "Nunca olvides que todo lo que sientes es válido, y siempre tendrás mi amor para sanarte. 🌱", emoji: "🌱" },
        { text: "Hoy te sostengo con mis pensamientos, y mañana estaré a tu lado con mis brazos. 🤗", emoji: "🤗" },
        { text: "En cada batalla, tu fuerza será la mía, y juntos conquistaremos todo. 🛡️", emoji: "🛡️" },
        { text: "Te amo más de lo que las palabras pueden decir, y hoy es solo un recordatorio de ello. 🌟", emoji: "🌟" },
        { text: "El sol puede esconderse, pero mi amor por ti siempre brillará. 🌅", emoji: "🌅" },
        { text: "Amor mío, cuando el camino sea incierto, caminaré contigo. 🌷", emoji: "🌷" }
    ],
    feliz: [
        // COMIDA (20 mensajes)
        { text: "¡Tu alegría es más dulce que donut con sprinkles de arcoíris! 🍩", emoji: "🍩" },
        { text: "Nivel de felicidad: Helado de vainilla con extra de chispas 🍦", emoji: "🍦" },
        { text: "¡Eres la cereza en el sundae de la vida! 🍒", emoji: "🍒" },
        { text: "Brillas más que champaña en Año Nuevo 🥂", emoji: "🥂" },
        { text: "¡Tu sonrisa debería venderse en Starbucks como bebida estrella! ☕", emoji: "☕" },
        { text: "Hoy estás más dulce que panqueque con miel maple 🥞", emoji: "🥞" },
        { text: "¡Alerta! Tu alegría podría derretir un glaciar de chocolate 🍫", emoji: "🍫" },
        { text: "Eres más refrescante que limonada en verano 🍋", emoji: "🍋" },
        { text: "¡Nivel de felicidad: Palomitas en estreno de película! 🍿", emoji: "🍿" },
        { text: "Tu energía es más contagiosa que olor a galletas recién horneadas 🍪", emoji: "🍪" },
    
        // ANIMALES (20 mensajes)
        { text: "¡Saltas de felicidad como canguro en trampolín! 🦘", emoji: "🦘" },
        { text: "Nivel de alegría: Delfín haciendo surf al atardecer 🐬", emoji: "🐬" },
        { text: "Brillas más que luciérnaga en noche estival ✨", emoji: "✨" },
        { text: "¡Eres más tierno que panda jugando en la nieve! 🐼", emoji: "🐼" },
        { text: "Tu felicidad atrae más mariposas que jardín floral 🦋", emoji: "🦋" },
        { text: "¡Ríes como hiena viendo comedia stand-up! 😹", emoji: "😹" },
        { text: "Nivel de energía: Colibrí bebé tomando café 🐦", emoji: "🐦" },
        { text: "Eres más alegre que perro en parque con mil pelotas 🎾", emoji: "🎾" },
        { text: "¡Tu espíritu vuela más alto que águila en tormenta! 🦅", emoji: "🦅" },
        { text: "Brillas como medusa bioluminiscente en mar profundo 🌊", emoji: "🌊" },
    
        // TECNOLOGÍA (20 mensajes)
        { text: "¡Tu WiFi emocional tiene señal máxima de felicidad! 📶", emoji: "📶" },
        { text: "Batería de alegría al 1000% - Modo fiesta activado 🔋", emoji: "🔋" },
        { text: "Actualizando universo a tu versión más colorida 🌈", emoji: "🌈" },
        { text: "¡Alerta! Risas en loop causando cortocircuitos de alegría ⚡", emoji: "⚡" },
        { text: "Memoria RAM llena de recuerdos felices 💾", emoji: "💾" },
        { text: "Software anti-tristeza funcionando al máximo rendimiento 💻", emoji: "💻" },
        { text: "¡Has desbloqueado el logro: Felicidad desbordante! 🏆", emoji: "🏆" },
        { text: "Nivel de brillo: Pantalla 8K en HDR emocional 🖥️", emoji: "🖥️" },
        { text: "Descargando actualización Sonrisas v7.0 con extra de glitter ✨", emoji: "✨" },
        { text: "¡Carga inalámbrica de buenas vibras activada! 🔌", emoji: "🔌" },
    
        // HIPERBOLAS (20 mensajes)
        { text: "¡Tu sonrisa podría iluminar toda América Latina! 💡", emoji: "💡" },
        { text: "Nivel de energía: Big Bang de optimismo 💥", emoji: "💥" },
        { text: "Eres más brillante que supernova en galaxia lejana 🌌", emoji: "🌌" },
        { text: "¡Tu alegría debería ser fuente de energía renovable! ♻️", emoji: "♻️" },
        { text: "Alerta: Olas de felicidad causando mareas altas globales 🌊", emoji: "🌊" },
        { text: "¡Eres el meme que salva días aburridos! 😹", emoji: "😹" },
        { text: "Tu positividad crea auroras boreales en pleno día 🌈", emoji: "🌈" },
        { text: "Nivel de carisma: 1000 influencers en un solo ser 💫", emoji: "💫" },
        { text: "¡Tu energía alegre podría animar piedras! 🪨", emoji: "🪨" },
        { text: "Eres más necesario que tecla Ctrl+Z en día complicado ⌨️", emoji: "⌨️" },
    
        // CULTURA POP (20 mensajes)
        { text: "¡Nivel de felicidad: Frozen cuando Elsa descubre sus poderes! ❄️", emoji: "❄️" },
        { text: "Eres más luminoso que la Estrella de la Muerte en modo fiesta 🎇", emoji: "🎇" },
        { text: "Brillas más que las Joyas del Infinito juntas 💎", emoji: "💎" },
        { text: "¡Tu alegría es más épica que banda sonora de Star Wars! 🎵", emoji: "🎵" },
        { text: "Nivel de diversión: Friends reunidos en Central Perk ☕", emoji: "☕" },
        { text: "Eres más positivo que Bob Esponja en mañana soleada 🍍", emoji: "🍍" },
        { text: "¡Tu energía alegre da más vibras que TikTok de baile viral! 💃", emoji: "💃" },
        { text: "Nivel de iconicidad: Beyoncé en el Super Bowl 🎤", emoji: "🎤" },
        { text: "Eres más brillante que la capa de Dr. Strange en acción 🧙♂️", emoji: "🧙♂️" },
        { text: "¡Tu sonrisa es más famosa que Mona Lisa! 🖼️", emoji: "🖼️" },
    
        // EJEMPLOS ADICIONALES (completando a 100)
        { text: "¡Eres el emoji de fuego en el chat de la vida! 🔥", emoji: "🔥" },
        { text: "Nivel de alegría: Niño descubriendo Disneyland 🏰", emoji: "🏰" },
        { text: "Tu felicidad es más pegajosa que canción de reggaetón en verano 🎶", emoji: "🎶" },
        { text: "¡Brillas más que neón en Times Square! 🗽", emoji: "🗽" },
        { text: "Eres más refrescante que meme de gato en lunes por la mañana 😹", emoji: "😹" },
        { text: "¡Tu energía es más viral que desafío TikTok de baile! 📱", emoji: "📱" },
        { text: "Nivel de felicidad: Perro en ventana de auto 🐶", emoji: "🐶" },
        { text: "Eres más necesario que cafetera en oficina lunes 8 AM ☕", emoji: "☕" },
        { text: "¡Tu sonrisa debería ser patrimonio de la humanidad! 🌍", emoji: "🌍" },
        { text: "Brillas más que spoiler de película en luz ultravioleta 🎥", emoji: "🎥" },
        //romantico
        { text: "Tu sonrisa es mi razón para soñar cada día. 💖", emoji: "💖" },
        { text: "Eres mi sol en los días nublados, mi felicidad constante. 🌞", emoji: "🌞" },
        { text: "Ver tu risa es mi mayor bendición. 🎶", emoji: "🎶" },
        { text: "Cada vez que te veo sonreír, siento que el mundo es perfecto. 💖", emoji: "💖" },
        { text: "Tu alegría se convierte en la luz que ilumina mi camino. ✨", emoji: "✨" },
        { text: "Me haces tan feliz con solo ser tú. 🌸", emoji: "🌸" },
        { text: "Tu felicidad es el eco de mi corazón. ❤️", emoji: "❤️" },
        { text: "Cada día contigo es un regalo lleno de risas y amor. 🎁", emoji: "🎁" },
        { text: "Verte feliz es mi mayor deseo cumplido. 🌟", emoji: "🌟" },
        { text: "Tu sonrisa es mi refugio en este mundo. 😍", emoji: "😍" },
        { text: "Cuando te veo sonreír, mi corazón late más fuerte. 💓", emoji: "💓" },
        { text: "Eres mi inspiración para sonreír, siempre. 🌻", emoji: "🌻" },
        { text: "Tu alegría me envuelve como un abrazo cálido. 💞", emoji: "💞" },
        { text: "Cada vez que veo tu sonrisa, todo en mi mundo cobra sentido. 💖", emoji: "💖" },
        { text: "Tu felicidad es el mejor regalo que me puedes dar. 🎁", emoji: "🎁" },
        { text: "Mi día se ilumina al verte sonreír. 🌞", emoji: "🌞" },
        { text: "No hay nada más bonito que verte tan feliz, mi amor. 💕", emoji: "💕" },
        { text: "Tu risa es la melodía que mi corazón quiere escuchar siempre. 🎶", emoji: "🎶" },
        { text: "Eres el sol que hace brillar cada uno de mis días. 🌞", emoji: "🌞" },
        { text: "Cuando te veo sonreír, el tiempo se detiene para mí. 💖", emoji: "💖" },
        { text: "Cada vez que te ríes, el mundo parece un lugar más hermoso. 🌍", emoji: "🌍" },
        { text: "Eres la chispa de alegría que enciende mi corazón. 🔥", emoji: "🔥" },
        { text: "Tu sonrisa es mi paz y mi felicidad. 😄", emoji: "😄" },
        { text: "Gracias por llenar mi vida de momentos tan felices. 🌈", emoji: "🌈" },
        { text: "Tu alegría es mi motor para seguir adelante, siempre. 🚀", emoji: "🚀" },
        { text: "Cada día me enamoro más de ti, especialmente cuando te veo sonreír. 💖", emoji: "💖" },
        { text: "Tu felicidad es mi mayor tesoro. 💎", emoji: "💎" },
        { text: "Al verte feliz, todo mi ser se llena de paz. 💙", emoji: "💙" },
        { text: "Lo más hermoso de mi día es verte reír. 😍", emoji: "😍" },
        { text: "Tu risa es como un canto de esperanza para mi corazón. 🎶", emoji: "🎶" },
        { text: "El mejor momento de mi día es cuando compartimos risas juntos. 💖", emoji: "💖" },
        { text: "Nunca dejes de sonreír, porque tu sonrisa es la que hace brillar mi mundo. ✨", emoji: "✨" }
    ],
    ansiosa: [
        { text: "Respira profundo, todo estará bien. 🌸", emoji: "🌸" },
        { text: "Estoy contigo, siempre a tu lado. 🫂", emoji: "🫂" },
        { text: "Eres valiente y superarás cualquier desafío. 💖", emoji: "💖" },
        { text: "Respira profundo, todo estará bien. 🌸", emoji: "🌸" },
        { text: "Estoy contigo, siempre a tu lado. 🫂", emoji: "🫂" },
        { text: "Eres valiente y superarás cualquier desafío. 💖", emoji: "💖" },
        { text: "Todo pasará, solo respira. 🌱", emoji: "🌱" },
        { text: "Relájate, todo va a estar bien. 💖", emoji: "💖" },
        { text: "Eres más fuerte de lo que piensas. 🌟", emoji: "🌟" },
        { text: "Todo se resolverá a su tiempo. ⏳", emoji: "⏳" },
        { text: "No estás solo/a, estoy aquí para ti. 🫂", emoji: "🫂" },
        { text: "Todo lo que sientes es temporal. 🌈", emoji: "🌈" },
        { text: "Respira, y piensa que todo tiene solución. 💙", emoji: "💙" },
       // Tecnología (20 mensajes)
        { text: "Tu mente tiene 547 pestañas abiertas - ¿Cerramos algunas? 🖥️", emoji: "🖥️" },
        { text: "Actualizando sistema nervioso... 1% completado ⏳", emoji: "⏳" },
        { text: "Alerta: Memoria RAM emocional sobrecargada 💾", emoji: "💾" },
        { text: "Modo avión activado para desconectar preocupaciones ✈️", emoji: "✈️" },
        { text: "Reiniciando con abrazos de oso polar ❄️", emoji: "❄️" },
        { text: "WiFi emocional buscando señal de calma... 📶", emoji: "📶" },
        { text: "¡Cortafuegos anti-pensamientos intrusivos activado! 🔥", emoji: "🔥" },
        { text: "Batería mental al 5% - Conectando cargador de paz 🔋", emoji: "🔋" },
        { text: "Desfragmentando preocupaciones... 10% completado 💽", emoji: "💽" },
        { text: "Spam emocional detectado - Filtrando pensamientos 📧", emoji: "📧" },
    
        // Animales (20 mensajes)
        { text: "Mandando manada de perezosos para recordarte ir lento 🦥", emoji: "🦥" },
        { text: "Hasta los colibríes necesitan posarse a veces 🐦", emoji: "🐦" },
        { text: "Tu mente es como pulpo en mar abierto - Respira 🐙", emoji: "🐙" },
        { text: "Enviando tortugas sabias con consejos a cámara lenta 🐢", emoji: "🐢" },
        { text: "Reserva en el spa de abrazos de koala 🐨", emoji: "🐨" },
        { text: "Los erizos también se enroscan - Pronto se abrirán 🦔", emoji: "🦔" },
        { text: "Mandando medusas para flotar contigo en el mar de pensamientos 🌊", emoji: "🌊" },
        { text: "Tu ansiedad es como mariposa en estómago - Pronto volará 🦋", emoji: "🦋" },
        { text: "Los pingüinos también resbalan en el hielo... y siguen 🐧", emoji: "🐧" },
        { text: "Enjambre de abejas mentales - Pronto encontrarán flor 🐝", emoji: "🐝" },
    
        // Comida (20 mensajes)
        { text: "Horneando galletas de la calma con chispas de paz 🍪", emoji: "🍪" },
        { text: "Tu mente es como olla a presión - ¡Liberemos vapor! 🍲", emoji: "🍲" },
        { text: "Enviando té de manzanilla con código anti-worries ☕", emoji: "☕" },
        { text: "Nivel de estrés: Café espresso derramado en laptop ☕", emoji: "☕" },
        { text: "Hoy el chocolate es 85% oscuridad, 15% esperanza 🍫", emoji: "🍫" },
        { text: "Tu ansiedad es como popcorn en microondas - Cederá 🍿", emoji: "🍿" },
        { text: "Pedido especial: Pizza de tranquilidad con extra queso 🍕", emoji: "🍕" },
        { text: "Hielo mental derritiéndose... helado de paz incoming 🍦", emoji: "🍦" },
        { text: "Tu cabeza es como licuadora en máximo speed - Apaguemos 🔌", emoji: "🔌" },
        { text: "Galletas de la fortuna actualizadas: 'Esto pasará' 🥠", emoji: "🥠" },
    
        // Hiperbolas (20 mensajes)
        { text: "Nivel de preocupación: Astronauta que perdió su nave 🚀", emoji: "🚀" },
        { text: "Tu ansiedad podría alimentar 10 plantas nucleares ⚡", emoji: "⚡" },
        { text: "Creando tormenta perfecta en vaso de agua... luego beberemos 🌪️", emoji: "🌪️" },
        { text: "Nube mental del tamaño de Australia - Pronto lloverá alivio 🌧️", emoji: "🌧️" },
        { text: "Eres más fuerte que tsunami de peluches mojados 🧸", emoji: "🧸" },
        { text: "Tu mente es Google Maps buscando ruta inexistente 🗺️", emoji: "🗺️" },
        { text: "Nivel de estrés: Biblioteca ardiendo con tarea dentro 📚", emoji: "📚" },
        { text: "Generando terremoto emocional 2.0 en escala de Richter 🌎", emoji: "🌎" },
        { text: "Tu preocupación tiene más capas que cebolla de Shrek 🧅", emoji: "🧅" },
        { text: "Alerta: Huracán de pensamientos categoría 5 🌀", emoji: "🌀" },
    
        // Cultura Pop (20 mensajes)
        { text: "Este es tu momento Yoda: 'La calma tu aliada sea' 🪐", emoji: "🪐" },
        { text: "Hasta Hermione olvidaba varitas - Respira 🪄", emoji: "🪄" },
        { text: "Nivel de drama: Temporada final de Juego de Tronos 👑", emoji: "👑" },
        { text: "Eres más fuerte que Katniss en los Juegos del Hambre 🏹", emoji: "🏹" },
        { text: "Tu mente es como el Laberinto del Fauno - Encontraremos salida 🧚", emoji: "🧚" },
        { text: "Hasta Spock necesita meditar a veces 🖖", emoji: "🖖" },
        { text: "Modo Elsa activado: ¡Let it go, let it flow! ❄️", emoji: "❄️" },
        { text: "Eres más resiliente que Phoenix en Harry Potter 🦅", emoji: "🦅" },
        { text: "Nivel de épica: Frodo llevando el anillo... ¡Tú puedes! 💍", emoji: "💍" },
        { text: "Tu ansiedad es como Dementor - Usaremos Patronus de amor ❤️", emoji: "❤️" },
    
        // Ejemplos adicionales (20 mensajes)
        { text: "Mandando paracaídas de plumas de ángel 🪂", emoji: "🪂" },
        { text: "Tu cabeza es playlist en shuffle - Pongamos pausa ⏸️", emoji: "⏸️" },
        { text: "Nube de pensamientos = Pronto lloverá claridad 🌦️", emoji: "🌦️" },
        { text: "GPS emocional recalculando ruta... 🗺️", emoji: "🗺️" },
        { text: "Enviando fórmula secreta de calma: 2 respiraciones, 1 abrazo 💖", emoji: "💖" },
        { text: "Tu mente es como Netflix: ¿Sigues viendo? ⏸️", emoji: "⏸️" },
        { text: "Algoritmo anti-preocupaciones inicializando... 💻", emoji: "💻" },
        { text: "Nivel de estrés: Malabarista con 100 pelotas 🤹♀️", emoji: "🤹♀️" },
        { text: "Tu ansiedad es nube pasajera - El cielo siempre está arriba ☁️", emoji: "☁️" },
        { text: "Mandando escuadrón de abrazos por correo prioritario 📦", emoji: "📦" },
        { text: "La paz está en camino, solo mantén la calma. 🌷", emoji: "🌷" },
        { text: "Te acompaño en este momento, todo estará bien. 🫂", emoji: "🫂" },
        { text: "La serenidad es tuya, solo respira y confía. 💖", emoji: "💖" },
        { text: "La calma vendrá con cada respiro, estás en el camino correcto. 💙", emoji: "💙" }
    ],
    enojada:[
        { text: "Sé que estás molesta, pero recuerda que siempre estoy aquí para ti. ❤️", emoji: "❤️" },
        { text: "Te entiendo, y aunque ahora esté todo difícil, te amo más que nunca. 💖", emoji: "💖" },
        { text: "Aunque estés pasando por un mal momento, mi amor por ti sigue intacto. 💞", emoji: "💞" },
        { text: "Lo que más quiero es verte feliz, y haré todo lo posible para que eso pase. 🌸", emoji: "🌸" },
        { text: "Te amo y sé que todo esto pasará, solo tenemos que ser pacientes. 🌿", emoji: "🌿" },
        { text: "Siempre te apoyaré, incluso cuando el mundo se sienta en tu contra. 💪", emoji: "💪" },
        { text: "Este enojo pasará, pero mi amor por ti es para siempre. 💖", emoji: "💖" },
        { text: "Sé que ahora no es fácil, pero juntos superamos cualquier cosa. 🫂", emoji: "🫂" },
        { text: "Aunque el enojo sea grande, mi cariño por ti lo es mucho más. ❤️", emoji: "❤️" },
        { text: "Mi amor por ti es más fuerte que cualquier enojo o mal día. 💕", emoji: "💕" },
        { text: "Pase lo que pase, siempre estaré a tu lado, dispuesto a escucharte. 🫶", emoji: "🫶" },
        { text: "Entiendo lo que sientes, solo recuerda que siempre tienes mi apoyo. 🤗", emoji: "🤗" },
        { text: "Sé que las cosas no siempre son fáciles, pero juntos podemos con todo. 💫", emoji: "💫" },
        { text: "Aunque ahora esté todo complicado, mi amor por ti es lo más firme. 💖", emoji: "💖" },
        { text: "No importa lo que pase, te amo profundamente y eso no cambiará. 💘", emoji: "💘" },
        { text: "Tu felicidad es lo que más quiero, así que cuídate mucho. 🌸", emoji: "🌸" },
        { text: "A veces la vida nos pone a prueba, pero juntos podemos con todo. 💪", emoji: "💪" },
        { text: "No importa cuánto nos frustremos, siempre encontraremos la manera de ser felices juntos. 💕", emoji: "💕" },
        { text: "Aunque ahora estés molesta, sé que podemos superar cualquier cosa. 🫶", emoji: "🫶" },
        { text: "Te entiendo, mi amor. Cuando estés lista, aquí estaré para ti. 💖", emoji: "💖" },
        { text: "No importa lo que estés sintiendo, siempre contarás con mi amor. 💕", emoji: "💕" },
        { text: "Te abrazo en mi corazón mientras superas lo que sientes ahora. 🤗", emoji: "🤗" },
        { text: "Sé que las palabras no arreglan todo, pero mi amor siempre te acompañará. 💘", emoji: "💘" },
        { text: "El enojo se irá, pero mi amor por ti siempre será constante. 💖", emoji: "💖" },
        { text: "Mi mayor deseo es verte sonreír, y haré lo que esté en mis manos para lograrlo. 🌞", emoji: "🌞" },
        { text: "Lo que más quiero es que te sientas mejor, y lo lograré a tu lado. 💖", emoji: "💖" },
        { text: "Sé que esto pasará, y cuando lo haga, estaré aquí para abrazarte. 🫂", emoji: "🫂" },
        { text: "Tómate tu tiempo para calmarte, yo estaré aquí esperando con paciencia. 💖", emoji: "💖" },
        { text: "Entiendo que a veces las cosas no son fáciles, pero juntos siempre lo conseguimos. 💪", emoji: "💪" },
         { text: "Nivel de furia: Tráfico a las 8 AM con GPS que dice '5 minutos' 🚗💢", emoji: "🚗" },
        { text: "¡Enojómetro al máximo: Wi-Fi lento en pleno maratón de Netflix! 📺", emoji: "📺" },
        { text: "Cólera nivel: 'Contraseña incorrecta' en tercer intento 🔑", emoji: "🔑" },
        { text: "¡Alerta! Burbujas de ira surgiendo: Vecino con taladro a las 7 AM 🔨", emoji: "🔨" },
        { text: "Furia tipo: '¿Dónde dejé las llaves?' en lunes sin café 🔎", emoji: "🔎" },
        
        // TECNOLOGÍA AVANZADA (20 mensajes)
        { text: "¡Error 666: Dispositivo autocargando rabia en lugar de batería! 🔋", emoji: "🔋" },
        { text: "Algoritmo de irritación actualizado a versión 10.0 💻🔥", emoji: "💻" },
        { text: "¡Sistema de enfriamiento emocional colapsado! ❄️💢", emoji: "❄️" },
        { text: "Navegando en modo incógnito: Ira invisible pero potente 🕶️", emoji: "🕶️" },
        { text: "¡Criptominería de paciencia agotada! ⛏️💎", emoji: "⛏️" },
        
        // NATURALEZA EXTREMA (20 mensajes)
        { text: "¡Erupción volcánica emocional en curso! 🌋🧯", emoji: "🧯" },
        { text: "Alerta de tsunami: Olas de irritación nivel Maldives 🌊", emoji: "🌊" },
        { text: "Huracán de placeres rotos categoría 5 🌀", emoji: "🌀" },
        { text: "Terremoto interno: Fallas de paciencia activas 🏔️", emoji: "🏔️" },
        { text: "Incendio forestal de opiniones no solicitadas 🔥", emoji: "🔥" },
        
        // PROFESIONES (20 mensajes)
        { text: "¡Enojómetro profesional: Chef quemando soufflé en MasterChef! 👩🍳", emoji: "👩🍳" },
        { text: "Furia tipo: Astronauta que olvidó llave inglesa en espacio 🚀", emoji: "🚀" },
        { text: "Nivel bombero: Apagando 100 fuegos simultáneos sin agua 🧯", emoji: "🧯" },
        { text: "¡Cólera de profesor viendo meme en clase importante! 🧑🏫", emoji: "🧑🏫" },
        { text: "Estrés laboral: DJ con vinilo rayado en pleno drop 🎧", emoji: "🎧" },
        
        // FENÓMENOS VIRALES (20 mensajes)
        { text: "¡Viralizando ira: Challenge de ojos inyectados a 10k RT 👀", emoji: "👀" },
        { text: "TikTok de furia: Baile con pasos de stomp challenge 👟", emoji: "👟" },
        { text: "Meme del día: Gato gruñendo con subtítulo 'Yo hoy' 😾", emoji: "😾" },
        { text: "Trending topic: #AyudaMiEnojoTieneHashtag 🔥", emoji: "🔥" },
        { text: "Reel de furia: Time-lapse de cara enrojeciendo en 10s 🎥", emoji: "🎥" },
        
        // EJEMPLOS ADICIONALES (completando 100)
        { text: "¡Furia vintage: Máquina de escribir sin papel en plena inspiración! ⌨️", emoji: "⌨️" },
        { text: "Enojasaurio Rex detectado en parque jurásico emocional 🦖", emoji: "🦖" },
        { text: "Alerta AMBER: Peluche favorito desaparecido en lavadora 🧸", emoji: "🧸" },
        { text: "Nivel cósmico: Agujero negro tragando toda tu paciencia 🌌", emoji: "🌌" },
        { text: "¡Furia gourmet: Sushi cayéndose del palillo ante influencers 🍣", emoji: "🍣" },
        { text: "Código rojo: Helado cayendo del cono en día de 40°C 🍦", emoji: "🍦" },
        { text: "¡Erupción de lava: Grupo de WhatsApp familiar activo a las 6 AM 📱", emoji: "📱" },
        { text: "Furia acústica: Vecino cantando reggaetón desafinado a todo volumen 🎤", emoji: "🎤" },
        { text: "¡Algoritmo de ira detectando patrones de estupidez recurrente! 🤖", emoji: "🤖" },
        { text: "Nivel ninja: Esquivando preguntas incómodas en reunión familiar 🥷", emoji: "🥷" },
        // COMIDA (30 mensajes)
        { text: "Tu furia podría freír un huevo en el Sahara sin sartén 🍳🔥", emoji: "🍳" },
        { text: "¡Alerta! Nivel de picante: Jalapeño nuclear 🌶️☢️", emoji: "🌶️" },
        { text: "Enviando helado de menta para apagar el fuego interno 🍦❄️", emoji: "❄️" },
        { text: "Hoy tu enojo está más caliente que café recién hervido ☕", emoji: "☕" },
        { text: "Tu ira hornea pan sin levadura... ¡y queda perfecto! 🥖", emoji: "🥖" },
        { text: "¡Cuidado! Mirada capaz de derretir queso a 10 metros 🧀", emoji: "🧀" },
        { text: "Hoy hasta las galletas saladas piden tregua 🥨", emoji: "🥨" },
        { text: "Nivel de acidez: Limón exprimido por Hulk 🍋💪", emoji: "🍋" },
        { text: "Tu enojo podría cocinar un asado en segundos 🥩", emoji: "🥩" },
        { text: "¡Sistema de enfriamiento: Batido de fresa con extra de hielo! 🍓", emoji: "🍓" },
    
        // ANIMALES (30 mensajes)
        { text: "¡Rugido nivel leona protegiendo a sus cachorros! 🦁", emoji: "🦁" },
        { text: "Mandando manada de koalas abrazadores para calmarte 🐨", emoji: "🐨" },
        { text: "Nivel de ira: Hipopótamo en día de calor extremo 🦛", emoji: "🦛" },
        { text: "¡Cuidado! Mirada de águila detectando estupideces a 5km 🦅", emoji: "🦅" },
        { text: "Tu enojo tiene la elegancia de un gato tirando vasos 🐈⬛", emoji: "🐈⬛" },
        { text: "Resonancia emocional: Murciélago en modo sónar 🦇", emoji: "🦇" },
        { text: "Furia nivel pulpo golpeando submarino 🐙", emoji: "🐙" },
        { text: "¡Alerta! Colmillos de vampiro detectando injusticias 🧛♀️", emoji: "🧛♀️" },
        { text: "Mandando escuadrón de perritos salchicha distractores 🌭", emoji: "🌭" },
        { text: "Tu ira tiene la potencia de 100 abejas reinas enfadadas 🐝", emoji: "🐝" },
    
        // TECNOLOGÍA (30 mensajes)
        { text: "¡Sistema operativo emocional en modo overclocking! 💻🔥", emoji: "💻" },
        { text: "Alerta: Temperatura interna alcanzando 5000°C ♨️", emoji: "♨️" },
        { text: "Reiniciando sistema con abrazos de oso polar ❄️", emoji: "❄️" },
        { text: "¡CPU emocional al 1000% - Necesitas un break! ⏸️", emoji: "⏸️" },
        { text: "Antivirus anti-irritantes descargando... 75% 🛡️", emoji: "🛡️" },
        { text: "Error 666: Demonio de la ira detectado 😈", emoji: "😈" },
        { text: "Actualización de paciencia v3.0 instalándose... ⏳", emoji: "⏳" },
        { text: "¡Cortafuegos emocional activado contra estupideces! 🔥", emoji: "🔥" },
        { text: "Memoria RAM llena de razones para enojarse 💾", emoji: "💾" },
        { text: "Modo avión activado para desconectar de lo que te molesta ✈️", emoji: "✈️" },
    
        // HIPERBOLAS (30 mensajes)
        { text: "¡Tu furia podría fundir el núcleo de la Tierra! 🌍🔥", emoji: "🌍" },
        { text: "Nivel de poder: Tsunami de lava con café sin azúcar 🌋", emoji: "🌋" },
        { text: "Mirada capaz de derretir el casco de Iron Man 🦾", emoji: "🦾" },
        { text: "¡Tu enojo genera suficiente energía para iluminar Tokio! 🗼", emoji: "🗼" },
        { text: "Alerta: Huracán de plumas irritado nivel 5 🌪️", emoji: "🌪️" },
        { text: "Resoplido capaz de apagar velas en China 🕯️", emoji: "🕯️" },
        { text: "¡Cuidado! Tu ira está creando agujeros negros emocionales ⚫", emoji: "⚫" },
        { text: "Nivel de intensidad: Big Bang con retraso de tráfico 💥", emoji: "💥" },
        { text: "Tu enojo podría ganarle a un dragón en un concurso de gritos 🐉", emoji: "🐉" },
        { text: "Furia nivel terremoto 9.9 en escala de Richter 🌎", emoji: "🌎" },
    
        // CULTURA POP (30 mensajes)
        { text: "¡Eres más temible que Godzilla en día de tráfico! 🦖", emoji: "🦖" },
        { text: "Nivel de ira: Hulk cuando le cancelan Netflix 🟢", emoji: "🟢" },
        { text: "¡Cuidado! Actitud tipo Daenerys quemando Desembarco 🔥", emoji: "🔥" },
        { text: "Tu enojo tiene más capas que cebolla de Shrek 🧅", emoji: "🧅" },
        { text: "Furia nivel Joker organizando caos en Gotham 🤡", emoji: "🤡" },
        { text: "¡Eres más explosiva que la Motherboard en Stranger Things! 🧨", emoji: "🧨" },
        { text: "Mirada más penetrante que Arya Stark con aguja ⚔️", emoji: "⚔️" },
        { text: "Nivel de poder: Capitana Marvel destruyendo naves alien 🚀", emoji: "🚀" },
        { text: "¡Tu ira haría llorar a Darth Vader! 🌌", emoji: "🌌" },
        { text: "Eres más intensa que escena de Kill Bill con sable láser ⚔️", emoji: "⚔️" }
        
        // EJEMPLOS ADICIONALES PARA COMPLETAR 150:
        ,
        { text: "¡Tu enojo podría ganarle a Thor en un concurso de truenos! ⚡", emoji: "⚡" },
        { text: "Mandando flota de pingüinos con trajes anti-enojo 🐧", emoji: "🐧" },
        { text: "Nivel de seriedad: Juez Judy escuchando excusas tontas 👩⚖️", emoji: "👩⚖️" },
        { text: "Tu furia tiene más voltaje que batería de Tesla 🔋", emoji: "🔋" },
        { text: "¡Alerta! Ojos lanzando dagas estilo Elektra 🔪", emoji: "🔪" },
        { text: "Enviando equipo de demolición de malos rollos 🚧", emoji: "🚧" },
        { text: "Tu ira es más precisa que francotirador de John Wick 🔫", emoji: "🔫" },
        { text: "Nivel de explosividad: Fuegos artificiales en lata 🧨", emoji: "🧨" },
        { text: "¡Cuidado! Suspiros capaces de apagar velas de cumpleaños 🎂", emoji: "🎂" },
        { text: "Mandando paracaídas de algodón de azúcar para suavizar el día 🍬", emoji: "🍬" }

    ]
};

// Función para generar un mensaje aleatorio con animación
function generateMessage() {
    const selectedEmotion = emotionSelect.value;

    if (!selectedEmotion) {
        alert('Por favor, selecciona una emoción.');
        return;
    }

    // Seleccionar un mensaje aleatorio
    const messageList = messages[selectedEmotion];
    const randomIndex = Math.floor(Math.random() * messageList.length);
    const randomMessage = messageList[randomIndex];

    // Mostrar el mensaje en el área correspondiente
    messageOutput.textContent = randomMessage.text;

}
function mensDia(){
    let mensaje = document.getElementById('mensajeDia').value;

    // Seleccionar un mensaje aleatorio
    const message = messages[mensaje];
    const Index = Math.floor(Math.random() * message.length);
    const random = message[Index];

    // Mostrar el mensaje en el área correspondiente
    messageOutput.textContent = random.text;

  

}

// Evento para generar mensaje
generateMessageBtn.addEventListener('click', generateMessage);

//mostrar el poema
// Definir el poema
// Obtener el elemento donde se insertará el poema

// Verificar si el contenedor existe
    if (poemaElement) {
    // Insertar el poema en el contenedor
    poemaElement.innerHTML = poema;
    } else {
    console.error("El elemento con id 'poema' no existe en el documento.");
    }


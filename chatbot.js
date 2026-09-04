/**
 * TECNORED v4 — chatbot.js
 * Asistente de IA sin API key.
 * Sistema de coincidencia por palabras clave + respuestas en lenguaje sencillo.
 * 100% seguro para repositorios públicos en GitHub.
 */
'use strict';

/* ══════════════════════════════════════
   BASE DE CONOCIMIENTO
══════════════════════════════════════ */
const KB = [
  {
    claves: ['internet', 'red', 'conexion', 'conexión', 'web', 'navegar', 'navegacion', 'navegación', 'online', 'en linea'],
    r: `<strong>Internet</strong> es una red mundial que conecta computadoras y celulares para compartir información en tiempo real.<br/><br/>
Con Internet puedes:<br/>
• Buscar información sobre cualquier tema<br/>
• Comunicarte con personas en cualquier país<br/>
• Realizar trámites sin salir de casa<br/>
• Acceder a educación y salud en línea<br/><br/>
Para conectarte necesitas WiFi (red de tu casa o lugares públicos) o datos móviles de tu compañía telefónica.`
  },
  {
    claves: ['wifi', 'wi-fi', 'señal', 'senal', 'router', 'inalambrico', 'inalámbrico', 'conectar wifi', 'red wifi'],
    r: `<strong>WiFi</strong> es la señal que transmite Internet de forma inalámbrica, como una radio pero para datos.<br/><br/>
Para conectarte:<br/>
1. Ve a Ajustes en tu celular<br/>
2. Toca WiFi y actívalo<br/>
3. Selecciona el nombre de tu red<br/>
4. Escribe la contraseña (suele estar en el router, la cajita con luces)<br/>
5. Toca Conectar<br/><br/>
Cuando el WiFi está activo, el ícono aparece en la parte superior de la pantalla.`
  },
  {
    claves: ['celular', 'telefono', 'teléfono', 'movil', 'móvil', 'smartphone', 'android', 'iphone', 'ios', 'samsung', 'huawei', 'motorola'],
    r: `Tu <strong>celular o teléfono inteligente</strong> es una computadora que cabe en tu bolsillo.<br/><br/>
Sus partes principales:<br/>
• <strong>Pantalla táctil:</strong> la tocas con el dedo para usarla<br/>
• <strong>Botón lateral:</strong> enciende y apaga el dispositivo<br/>
• <strong>Botones de volumen:</strong> controlan el sonido<br/>
• <strong>Cámara:</strong> para fotos y videollamadas<br/><br/>
Si algo no funciona, apágalo 30 segundos y vuélvelo a encender. Eso resuelve la mayoría de los problemas.`
  },
  {
    claves: ['correo', 'email', 'gmail', 'mail', 'electronico', 'electrónico', 'cuenta correo', 'crear correo'],
    r: `El <strong>correo electrónico</strong> es como una carta que llega al instante a cualquier parte del mundo.<br/><br/>
Para crear una cuenta en Gmail (la más usada):<br/>
1. Abre el navegador y entra a <strong>gmail.com</strong><br/>
2. Toca <em>Crear cuenta</em><br/>
3. Escribe tu nombre y elige un usuario como nombre.apellido@gmail.com<br/>
4. Crea una contraseña segura con letras, números y símbolos<br/>
5. Escribe tu número de celular para recuperar la cuenta<br/><br/>
Es completamente gratuito y lo necesitarás para registrarte en casi cualquier aplicación.`
  },
  {
    claves: ['whatsapp', 'wsp', 'mensajes', 'chat', 'chatear', 'mensaje gratis', 'llamada gratis'],
    r: `<strong>WhatsApp</strong> es la aplicación de mensajes más usada en el mundo. Es gratuita para enviar mensajes y hacer llamadas usando Internet.<br/><br/>
Con WhatsApp puedes:<br/>
• Enviar mensajes de texto, fotos y videos<br/>
• Hacer llamadas y videollamadas gratuitas<br/>
• Crear grupos familiares o de trabajo<br/>
• Enviar audios de voz<br/><br/>
Para descargarla, busca <em>WhatsApp</em> en la Play Store (Android) o App Store (iPhone). Solo necesitas tu número de celular para registrarte.`
  },
  {
    claves: ['videollamada', 'video llamada', 'llamada video', 'ver por celular', 'zoom', 'meet', 'facetime'],
    r: `Una <strong>videollamada</strong> te permite ver y hablar con alguien en tiempo real desde tu celular, sin importar la distancia.<br/><br/>
La forma más sencilla es por WhatsApp:<br/>
1. Abre WhatsApp<br/>
2. Toca el nombre de la persona<br/>
3. Toca el ícono de cámara de video en la parte superior<br/>
4. Espera que la persona conteste<br/><br/>
Consejo: conéctate a WiFi para mejor calidad y busca un lugar con buena iluminación en tu cara.`
  },
  {
    claves: ['contraseña', 'contrasena', 'password', 'clave', 'pin', 'segura', 'seguridad contraseña'],
    r: `Una <strong>contraseña segura</strong> protege tus cuentas como si fuera la llave de tu casa.<br/><br/>
Características de una buena contraseña:<br/>
• Al menos 8 caracteres<br/>
• Letras mayúsculas y minúsculas<br/>
• Números (123)<br/>
• Al menos un símbolo (! @ # $)<br/><br/>
<strong>Ejemplo seguro:</strong> MiCasa2024!<br/>
<strong>Ejemplos inseguros:</strong> 123456, password, tu nombre o fecha de nacimiento<br/><br/>
Nunca compartas tu contraseña con nadie. Guárdala escrita en un lugar privado de tu casa.`
  },
  {
    claves: ['estafa', 'fraude', 'engaño', 'engano', 'robo datos', 'phishing', 'premio falso', 'estafar', 'timo', 'evitar estafas'],
    r: `Las <strong>estafas digitales</strong> son engaños diseñados para robar tu dinero o datos personales.<br/><br/>
Señales de alerta:<br/>
• "Ganaste un premio" sin haber participado en nada → mentira<br/>
• Te piden tu contraseña o PIN por mensaje → nunca la des<br/>
• Links raros con ofertas increíbles → no hagas clic<br/>
• Llamadas urgentes de "tu banco" pidiendo datos → cuelga<br/><br/>
<strong>Regla de oro:</strong> si algo parece demasiado bueno para ser verdad, es una trampa. Cuando tengas dudas, consulta a un familiar antes de hacer cualquier acción.`
  },
  {
    claves: ['google', 'buscador', 'buscar', 'busqueda', 'búsqueda', 'chrome', 'firefox', 'navegador'],
    r: `<strong>Google</strong> es el buscador más usado del mundo. Funciona como si le preguntaras a alguien que sabe de todo.<br/><br/>
Para buscar algo:<br/>
1. Abre el navegador Chrome o cualquier otro<br/>
2. Escribe tu pregunta en la barra superior<br/>
3. Toca el botón de buscar o presiona Enter<br/>
4. Lee los primeros resultados, suelen ser los más confiables<br/><br/>
Consejo: cuanto más específica sea tu búsqueda, mejores resultados obtendrás. Escribe "farmacia abierta cerca de mí" en lugar de solo "farmacia".`
  },
  {
    claves: ['office', 'word', 'excel', 'powerpoint', 'microsoft', 'documento word', 'planilla', 'presentacion', 'presentación'],
    r: `<strong>Microsoft Office</strong> es un conjunto de programas para trabajar con documentos en la computadora.<br/><br/>
Los más usados:<br/>
• <strong>Word:</strong> para escribir cartas, documentos y textos<br/>
• <strong>Excel:</strong> para tablas, cálculos y llevar cuentas<br/>
• <strong>PowerPoint:</strong> para hacer presentaciones con diapositivas<br/><br/>
Si no tienes Office, puedes usar <strong>Google Docs</strong> en docs.google.com que es gratuito y funciona igual desde el navegador, sin instalar nada.`
  },
  {
    claves: ['app', 'aplicacion', 'aplicación', 'aplicaciones', 'descargar app', 'instalar app', 'play store', 'app store', 'tienda apps'],
    r: `Las <strong>aplicaciones (apps)</strong> son programas que instalas en tu celular para hacer cosas específicas.<br/><br/>
Apps esenciales para empezar:<br/>
• <strong>WhatsApp:</strong> mensajes y llamadas gratuitas<br/>
• <strong>Google Maps:</strong> para orientarte y no perderte<br/>
• <strong>YouTube:</strong> videos gratuitos sobre cualquier tema<br/>
• <strong>Spotify:</strong> música gratuita<br/><br/>
Para descargarlas, abre la <strong>Play Store</strong> (Android) o <strong>App Store</strong> (iPhone), busca el nombre y toca Instalar. Solo descarga desde la tienda oficial.`
  },
  {
    claves: ['facebook', 'red social', 'redes sociales', 'instagram', 'tiktok', 'twitter', 'x red social'],
    r: `Las <strong>redes sociales</strong> son plataformas para conectarte con personas y compartir contenido.<br/><br/>
Las más populares:<br/>
• <strong>Facebook:</strong> para estar en contacto con familiares y amigos<br/>
• <strong>Instagram:</strong> para compartir fotos y videos cortos<br/>
• <strong>TikTok:</strong> videos cortos de entretenimiento<br/><br/>
Consejos de seguridad:<br/>
• No aceptes solicitudes de personas que no conoces<br/>
• No compartas tu dirección ni datos personales en publicaciones<br/>
• Configura tu perfil como privado en la sección de ajustes`
  },
  {
    claves: ['youtube', 'video', 'videos', 'ver videos', 'canal youtube', 'tutorial youtube'],
    r: `<strong>YouTube</strong> es la plataforma de videos más grande del mundo y es completamente gratuita para ver contenido.<br/><br/>
Puedes encontrar:<br/>
• Tutoriales para aprender casi cualquier cosa<br/>
• Noticias y documentales<br/>
• Música y entretenimiento<br/>
• Clases de cocina, idiomas, manualidades<br/><br/>
Para buscar un video, toca el ícono de lupa y escribe lo que quieres ver. No necesitas crear cuenta para ver videos.`
  },
  {
    claves: ['maps', 'mapa', 'ubicacion', 'ubicación', 'perdido', 'direccion', 'dirección', 'gps', 'como llegar', 'cómo llegar', 'google maps'],
    r: `<strong>Google Maps</strong> es un mapa siempre actualizado que te guía con instrucciones de voz paso a paso.<br/><br/>
Para llegar a un lugar:<br/>
1. Abre Google Maps en tu celular<br/>
2. Escribe el destino en la barra de búsqueda<br/>
3. Toca <em>Cómo llegar</em><br/>
4. Elige si vas en auto, bus o caminando<br/>
5. Toca Iniciar y sigue las instrucciones de voz<br/><br/>
Necesitas Internet para usarlo. También puedes descargar el mapa de tu ciudad para usarlo sin conexión.`
  },
  {
    claves: ['datos moviles', 'datos móviles', 'megas', 'paquete datos', 'saldo', 'recargar', 'tigo', 'entel', 'viva', 'compañia celular'],
    r: `Los <strong>datos móviles</strong> son tu conexión a Internet cuando no tienes WiFi disponible. Los provee tu compañía de celular.<br/><br/>
En Bolivia puedes gestionar tus datos con:<br/>
• <strong>Tigo:</strong> app Tigo Bolivia o *222#<br/>
• <strong>Entel:</strong> app Entel Bolivia o *800#<br/>
• <strong>Viva:</strong> app Viva o *611#<br/><br/>
Consejos para ahorrar datos:<br/>
• Conéctate a WiFi siempre que sea posible<br/>
• Descarga videos en casa para verlos después<br/>
• Ve a Ajustes → Uso de datos para controlar el consumo`
  },
  {
    claves: ['pdf', 'archivo pdf', 'documento pdf', 'abrir pdf', 'leer pdf'],
    r: `Un <strong>PDF</strong> es un tipo de archivo de documento que se ve igual en cualquier dispositivo o sistema operativo.<br/><br/>
Para abrir un PDF en tu celular:<br/>
• Si te lo mandan por WhatsApp, solo tócalo y se abre automáticamente<br/>
• También puedes descargarlo y abrirlo con <strong>Adobe Acrobat Reader</strong> (gratuito en Play Store o App Store)<br/>
• En la mayoría de celulares Android, los PDF se abren directamente con Google Drive<br/><br/>
Los documentos del gobierno, facturas y certificados suelen estar en formato PDF.`
  },
  {
    claves: ['qr', 'codigo qr', 'código qr', 'escanear qr', 'lector qr', 'camara qr'],
    r: `El <strong>código QR</strong> es ese cuadrado con puntitos negros que ves en restaurantes, tiendas y documentos. Al escanearlo te lleva a una página web o información específica.<br/><br/>
Para escanearlo:<br/>
1. Abre la cámara de tu celular<br/>
2. Apúntala al código QR<br/>
3. Aparecerá una notificación con un enlace<br/>
4. Tócalo para abrirlo<br/><br/>
Si tu cámara no lo detecta automáticamente, descarga la app <strong>Google Lens</strong> (gratuita). Solo escanea códigos de fuentes confiables.`
  },
  {
    claves: ['bateria', 'batería', 'carga', 'cargar celular', 'dura poco bateria', 'se acaba bateria', 'se descarga rapido'],
    r: `Para que tu <strong>batería dure más</strong> durante el día:<br/><br/>
• Reduce el brillo de pantalla al 40 o 50 por ciento<br/>
• Activa el Modo de ahorro de energía en Ajustes → Batería<br/>
• Desactiva WiFi y Bluetooth cuando no los uses<br/>
• Reduce el tiempo de pantalla activa a 30 segundos<br/>
• Cierra las apps que no estás usando<br/><br/>
Lo ideal es cargar el celular cuando llega al 20 por ciento y desconectarlo al llegar al 100. Evita dejarlo cargando toda la noche para prolongar la vida de la batería.`
  },
  {
    claves: ['llamada', 'llamar', 'como llamo', 'cómo llamo', 'marcar numero', 'marcar número', 'hacer llamada'],
    r: `Para hacer una <strong>llamada telefónica</strong> desde tu celular:<br/><br/>
1. Busca el ícono verde del teléfono y tócalo<br/>
2. Escribe el número al que quieres llamar<br/>
3. Toca el botón verde para iniciar la llamada<br/>
4. Cuando termines, toca el botón rojo para colgar<br/><br/>
También puedes ir a <strong>Contactos</strong>, buscar el nombre de la persona y tocar el teléfono junto a su nombre. Así no necesitas recordar el número.`
  },
  {
    claves: ['actualizar', 'actualización', 'actualizacion', 'update', 'version nueva', 'versión nueva', 'actualizar celular'],
    r: `<strong>Actualizar</strong> tu celular o aplicaciones es muy importante porque:<br/><br/>
• Corrige errores y problemas de funcionamiento<br/>
• Protege contra virus y amenazas nuevas<br/>
• Mejora el rendimiento general<br/>
• Agrega funciones nuevas<br/><br/>
Para actualizar aplicaciones en Android, abre Play Store → tu foto de perfil → Gestionar apps → Actualizar todo.<br/><br/>
En iPhone, abre App Store → tu foto → Actualizaciones disponibles → Actualizar todo.<br/><br/>
Si el sistema te pide actualizar, acepta. Es seguro y gratuito.`
  },
  {
    claves: ['tecnored', 'esta pagina', 'esta web', 'este sitio', 'que es tecnored', 'qué es tecnored', 'sobre tecnored'],
    r: `<strong>TecnoRed</strong> es una plataforma educativa gratuita diseñada para ayudar a personas de comunidades rurales y con poca experiencia tecnológica a aprender a usar herramientas digitales.<br/><br/>
Fue desarrollada por <strong>Santiago Jacobs</strong> del Colegio San Agustín, Bolivia, para el Concurso Iberoamericano INFOMATRIX de SOLACYT.<br/><br/>
En TecnoRed puedes:<br/>
• Aprender a usar tu celular (Android o iPhone)<br/>
• Navegar por Internet de forma segura<br/>
• Crear tu primer correo electrónico<br/>
• Protegerte de estafas digitales<br/>
• Resolver emergencias tecnológicas comunes<br/><br/>
Todo gratuito, en español, sin registro.`
  },
  {
    claves: ['empezar', 'comenzar', 'primer paso', 'como empiezo', 'cómo empiezo', 'ayuda', 'ayudame', 'no se nada', 'desde cero'],
    r: `Empezar en <strong>TecnoRed</strong> es muy sencillo:<br/><br/>
1. Toca <em>Aprende</em> en el menú de arriba<br/>
2. Elige el módulo que más necesitas<br/>
3. Sigue los pasos uno a uno, sin prisa<br/>
4. Toca el botón de voz si prefieres escuchar en lugar de leer<br/>
5. Practica con las simulaciones interactivas de cada paso<br/><br/>
Si es tu primera vez con tecnología, te recomiendo empezar con <em>Cómo usar el celular</em> y luego continuar con <em>Internet seguro</em>.`
  },
  {
    claves: ['me robaron', 'robo celular', 'perdi el celular', 'perdí el celular', 'celular robado', 'perdí mi celular'],
    r: `Si te <strong>robaron el celular</strong>, actúa de inmediato:<br/><br/>
1. Desde otro dispositivo, entra a google.com/android/find (Android) o appleid.apple.com (iPhone)<br/>
2. Inicia sesión y bloquea tu celular remotamente<br/>
3. Cambia las contraseñas de correo y redes sociales<br/>
4. Llama a tu compañía para bloquear la SIM<br/>
5. Denuncia en la policía<br/><br/>
Si tenías apps bancarias, llama a tu banco de inmediato. Para más detalles, ve a la sección <strong>Emergencias</strong> de TecnoRed.`
  },
  {
    claves: ['olvide contrasena', 'olvidé contraseña', 'no recuerdo contraseña', 'recuperar cuenta', 'no puedo entrar'],
    r: `Para <strong>recuperar tu contraseña</strong>:<br/><br/>
1. En la pantalla de inicio de sesión, toca <em>¿Olvidaste tu contraseña?</em><br/>
2. Escribe tu correo o número de celular registrado<br/>
3. Espera el código de verificación por SMS o correo<br/>
4. Escribe el código y crea una nueva contraseña<br/>
5. Guarda la nueva contraseña en un lugar seguro<br/><br/>
Para más ayuda detallada, ve a la sección <strong>Emergencias</strong> de TecnoRed y selecciona "Olvidé mi contraseña".`
  }
];

/* ── Respuestas de saludo ── */
const SALUDOS = {
  claves: ['hola', 'buenos dias', 'buenos días', 'buenas tardes', 'buenas noches', 'buenas', 'hey', 'saludos', 'como estas', 'cómo estás', 'hi'],
  r: `Hola, bienvenido al asistente de <strong>TecnoRed</strong>.<br/><br/>Puedo responderte preguntas sobre tecnología en lenguaje simple. Por ejemplo:<br/><em>¿Qué es WhatsApp? · ¿Cómo creo un correo? · ¿Qué es el WiFi?</em><br/><br/>¿En qué puedo ayudarte hoy?`
};

const GRACIAS = {
  claves: ['gracias', 'muchas gracias', 'thank you', 'thanks', 'genial', 'perfecto', 'excelente', 'muy bien', 'me ayudaste', 'me ayudo', 'me sirvio', 'me sirvió'],
  r: `Me alegra haberte ayudado. Para eso estoy aquí.<br/><br/>Si tienes más preguntas sobre tecnología, no dudes en escribir. Aprender tecnología es un proceso gradual, así que no te desesperes si algo no sale a la primera.`
};

const DESPEDIDAS = {
  claves: ['adios', 'adiós', 'hasta luego', 'chao', 'chau', 'bye', 'nos vemos', 'hasta pronto'],
  r: `Hasta luego. Fue un gusto ayudarte.<br/><br/>Recuerda que puedes volver cuando tengas más preguntas. Sigue aprendiendo.`
};

const FALLBACKS = [
  `No encontré información sobre eso, pero puedo ayudarte con temas de tecnología como:<br/><br/>Internet · WiFi · Celulares · Correo electrónico · WhatsApp · Seguridad digital · Aplicaciones<br/><br/>¿Puedes reformular tu pregunta? Por ejemplo: <em>¿Qué es el WiFi?</em>`,
  `Esa pregunta está fuera de mi área de especialización. Soy un asistente de tecnología básica.<br/><br/>Prueba preguntarme algo como:<br/>• ¿Cómo creo un correo electrónico?<br/>• ¿Qué es WhatsApp?<br/>• ¿Cómo evito estafas digitales?`,
  `No tengo información sobre ese tema en mi base de conocimientos.<br/><br/>Puedo ayudarte con: Internet · WiFi · Celulares · Correo · WhatsApp · Aplicaciones · Seguridad digital · Emergencias tecnológicas`
];

let fallbackIdx = 0;

/* ══════════════════════════════════════
   MOTOR DE RESPUESTAS
══════════════════════════════════════ */
function normalizar(t) {
  return t.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!.,;:()]/g, '')
    .trim();
}

function buscarRespuesta(pregunta) {
  const q = normalizar(pregunta);

  if (SALUDOS.claves.some(c => q.includes(c))) return SALUDOS.r;
  if (GRACIAS.claves.some(c => q.includes(c))) return GRACIAS.r;
  if (DESPEDIDAS.claves.some(c => q.includes(c))) return DESPEDIDAS.r;

  let bestScore = 0;
  let bestResponse = null;

  for (const entry of KB) {
    let score = 0;
    for (const clave of entry.claves) {
      if (q.includes(normalizar(clave))) {
        score += clave.length; // más peso a coincidencias más largas
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestResponse = entry.r;
    }
  }

  if (bestResponse && bestScore > 2) return bestResponse;

  const fb = FALLBACKS[fallbackIdx % FALLBACKS.length];
  fallbackIdx++;
  return fb;
}

/* ══════════════════════════════════════
   INTERFAZ DEL CHAT
══════════════════════════════════════ */
const chatFab     = document.getElementById('chat-fab');
const chatWindow  = document.getElementById('chat-window');
const chatClose   = document.getElementById('chat-close');
const chatClear   = document.getElementById('chat-clear');
const chatMsgs    = document.getElementById('chat-messages');
const chatInput   = document.getElementById('chat-input');
const chatSend    = document.getElementById('chat-send');
const chatBadge   = document.getElementById('chat-fab-badge');
const chatSuggest = document.getElementById('chat-suggestions');

let chatOpen = false;

/* ─── Abrir / Cerrar ─── */
function toggleChat(open) {
  chatOpen = open;
  if (open) {
    chatWindow.removeAttribute('hidden');
    chatBadge.style.display = 'none';
    chatInput.focus();
    scrollBottom();
  } else {
    chatWindow.setAttribute('hidden', '');
  }
}

chatFab.addEventListener('click', () => toggleChat(!chatOpen));
chatClose.addEventListener('click', () => toggleChat(false));

/* ─── Limpiar ─── */
chatClear.addEventListener('click', () => {
  chatMsgs.innerHTML = '';
  appendMsg('bot', 'Conversación limpiada. ¿En qué puedo ayudarte?');
  chatSuggest.style.display = 'flex';
});

/* ─── Sugerencias ─── */
chatSuggest.addEventListener('click', e => {
  const btn = e.target.closest('.chat-suggestion');
  if (btn) {
    enviar(btn.dataset.q);
    chatSuggest.style.display = 'none';
  }
});

/* ─── Enviar ─── */
function enviar(texto) {
  const msg = (texto || chatInput.value).trim();
  if (!msg) return;
  chatInput.value = '';
  chatSuggest.style.display = 'none';

  appendMsg('user', msg);

  const typingId = 'typing-' + Date.now();
  appendTyping(typingId);

  const delay = 380 + Math.random() * 520;
  setTimeout(() => {
    removeTyping(typingId);
    const respuesta = buscarRespuesta(msg);
    appendMsg('bot', respuesta);
    scrollBottom();
    if (!chatOpen) {
      chatBadge.style.display = 'block';
    }
  }, delay);

  scrollBottom();
}

chatSend.addEventListener('click', () => enviar());
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') enviar(); });

/* ─── Helpers ─── */
function getTime() {
  const d = new Date();
  return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
}

function appendMsg(tipo, html) {
  const div = document.createElement('div');
  div.className = 'chat-msg ' + tipo;
  div.innerHTML = `<div class="chat-bubble">${html}</div><span class="chat-ts">${getTime()}</span>`;
  chatMsgs.appendChild(div);
  scrollBottom();
}

function appendTyping(id) {
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = id;
  div.innerHTML = `<div class="chat-bubble chat-typing"><span></span><span></span><span></span></div>`;
  chatMsgs.appendChild(div);
  scrollBottom();
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function scrollBottom() {
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

/* ─── Badge inicial ─── */
setTimeout(() => {
  if (!chatOpen) chatBadge.style.display = 'block';
}, 4000);

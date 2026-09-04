/**
 * TECNORED v4 — app.js
 * SPA Navigation · Módulos iOS/Android · Emergencias · Accesibilidad · TTS
 */
'use strict';

/* ══════════════════════════════════════
   ESTADO GLOBAL
══════════════════════════════════════ */
const state = {
  currentPage: 'inicio',
  moduleProgress: JSON.parse(localStorage.getItem('tn_progress') || '{}'),
  currentModule: null,
  currentStep: 0,
  theme: localStorage.getItem('tn_theme') || 'light',
  fontSize: localStorage.getItem('tn_fontsize') || 'medium',
  highContrast: localStorage.getItem('tn_contrast') === 'true'
};

/* ══════════════════════════════════════
   DATOS — MÓDULOS GENERALES
══════════════════════════════════════ */
const MODULES = [
  {
    id: 'celular',
    icon: '📱',
    title: 'Cómo usar el celular',
    desc: 'Aprende los botones y funciones básicas según tu tipo de teléfono.',
    color: '#E8834A',
    esCelular: true,
    steps: []
  },
  {
    id: 'internet',
    icon: '🌐',
    title: 'Internet seguro',
    desc: 'Navega por la web de forma segura y encuentra información confiable.',
    color: '#0A84FF',
    steps: [
      { icon: '🌐', title: '¿Qué es Internet?', text: 'Internet es una red que conecta computadoras y celulares de todo el mundo. Es como una biblioteca disponible las 24 horas desde tu teléfono.', tip: 'Para usarlo necesitas WiFi o datos móviles de tu compañía de celular.' },
      { icon: '🔍', title: 'Buscar en Google', text: 'Google es el buscador más usado del mundo. Abre el navegador, escribe lo que quieres saber y toca Buscar. Lee los primeros resultados.', tip: 'Sé específico al buscar. Escribe "receta de arroz con leche fácil" en lugar de solo "receta".', sim: { label: 'Realizar una búsqueda', feedback: 'Búsqueda realizada correctamente. Se encontraron resultados.' } },
      { icon: '🔒', title: 'Navegar con seguridad', text: 'Verifica que la dirección del sitio empiece con https:// (tiene un candado). No hagas clic en ventanas que aparecen solas ni descargues archivos de sitios desconocidos.', tip: 'Si ves "Ganaste un premio" en una página, es una trampa. Cierra esa ventana inmediatamente.' },
      { icon: '📡', title: 'Conectarse al WiFi', text: 'Ve a Ajustes, busca WiFi y actívalo. Elige el nombre de tu red, escribe la contraseña y toca Conectar.', tip: 'La contraseña del WiFi suele estar en el router, la cajita con luces de tu casa.', sim: { label: 'Conectar al WiFi', feedback: 'Conexión establecida. Ahora tienes Internet.' } }
    ]
  },
  {
    id: 'correo',
    icon: '✉️',
    title: 'Correo electrónico',
    desc: 'Crea tu primera dirección de email y aprende a enviar mensajes.',
    color: '#E74C6B',
    steps: [
      { icon: '✉️', title: '¿Qué es el correo electrónico?', text: 'El correo electrónico es como una carta que llega al instante a cualquier parte del mundo. Es necesario para registrarte en apps y recibir documentos importantes.', tip: 'El correo más usado es Gmail, de Google. Es completamente gratuito.' },
      { icon: '📝', title: 'Crear una cuenta en Gmail', text: 'Abre el navegador y escribe gmail.com. Toca Crear cuenta, escribe tu nombre, elige un nombre de usuario como juan.garcia@gmail.com, crea una contraseña y escribe tu número de celular.', tip: 'Elige un nombre de usuario serio como nombre.apellido. Lo usarás siempre.' },
      { icon: '🔐', title: 'Crear una contraseña segura', text: 'Una buena contraseña combina letras mayúsculas y minúsculas, números y símbolos. Por ejemplo: MiCasa2024! es segura. En cambio, 123456 es muy insegura.', tip: 'Nunca compartas tu contraseña con nadie. Guárdala escrita en un lugar seguro de tu casa.', sim: { label: 'Verificar mi contraseña', feedback: 'Contraseña segura. Cumple todos los requisitos.' } },
      { icon: '📨', title: 'Enviar un mensaje', text: 'En Gmail toca el botón Redactar. En el campo Para escribe el correo del destinatario, en Asunto escribe el tema y luego escribe tu mensaje. Toca el botón de enviar.', sim: { label: 'Enviar mensaje de prueba', feedback: 'Mensaje enviado correctamente.' } }
    ]
  },
  {
    id: 'estafas',
    icon: '🛡️',
    title: 'Evitar estafas',
    desc: 'Aprende a reconocer y protegerte de fraudes digitales.',
    color: '#FF9F0A',
    steps: [
      { icon: '⚠️', title: '¿Qué son las estafas digitales?', text: 'Las estafas digitales son engaños por Internet o celular diseñados para robarte dinero o datos personales. Son frecuentes pero puedes protegerte sabiendo cómo reconocerlas.' },
      { icon: '🎣', title: 'El anzuelo digital (phishing)', text: 'El phishing ocurre cuando alguien te manda un mensaje falso haciéndose pasar por tu banco o el gobierno. Dicen que hay un problema urgente y piden tus datos. Es una trampa.', tip: 'Tu banco NUNCA te pedirá tu contraseña o PIN por mensaje de texto o llamada telefónica.' },
      { icon: '🏆', title: 'Premios falsos', text: 'Si ves mensajes como "Ganaste un iPhone" o "Eres el visitante número un millón", son mentiras para que hagas clic y des tus datos personales. Nunca hagas clic.', tip: 'Si no participaste en ningún concurso, es imposible que hayas ganado algo. Cierra esa ventana.', sim: { label: 'Identificar mensaje falso', feedback: 'Correcto. Ese mensaje es una estafa. No hiciste clic.' } },
      { icon: '📱', title: 'Proteger tu celular', text: 'Activa un PIN o patrón de pantalla. Descarga apps solo desde la tienda oficial (Play Store o App Store). No te conectes a WiFi desconocida. Actualiza el sistema cuando te lo pida.', tip: 'Si pierdes el celular, puedes bloquearlo desde otro dispositivo usando tu cuenta de Google o Apple.', sim: { label: 'Activar protección', feedback: 'Protección activada. Tu información está segura.' } }
    ]
  },
  {
    id: 'apps',
    icon: '📲',
    title: 'Usar aplicaciones',
    desc: 'Descarga y usa las aplicaciones más útiles para tu vida diaria.',
    color: '#BF5AF2',
    steps: [
      { icon: '📲', title: '¿Qué son las aplicaciones?', text: 'Las aplicaciones o apps son programas en tu celular para hacer cosas específicas: chatear, ver videos, escuchar música, consultar el clima y mucho más. La mayoría son gratuitas.' },
      { icon: '🏪', title: 'La tienda de aplicaciones', text: 'Android usa la Play Store (icono de triángulo de colores). iPhone usa la App Store (icono de letra A azul). Busca el nombre de la app que quieres y toca Instalar u Obtener.', tip: 'Descarga apps solo desde la tienda oficial. Las de otras fuentes pueden dañar tu celular.', sim: { label: 'Abrir la tienda de apps', feedback: 'Tienda abierta. Miles de aplicaciones disponibles.' } },
      { icon: '💬', title: 'WhatsApp, la más útil', text: 'WhatsApp te permite enviar mensajes gratuitos, hacer llamadas y videollamadas sin costo, enviar fotos y crear grupos familiares. Solo necesitas número de celular para usarla.', tip: 'Con WiFi, las llamadas y videollamadas por WhatsApp son completamente gratuitas.' },
      { icon: '⭐', title: 'Aplicaciones recomendadas', text: 'YouTube para ver videos gratuitos, Google Maps para orientarte, Duolingo para aprender idiomas, Spotify para música. Todas gratuitas para descargar.', tip: 'Empieza con dos o tres apps. Cuando las domines bien, descarga más.', sim: { label: 'Ver apps recomendadas', feedback: 'Lista de apps ideal para comenzar.' } }
    ]
  },
  {
    id: 'videollamadas',
    icon: '📹',
    title: 'Videollamadas',
    desc: 'Habla cara a cara con familia y amigos aunque estén lejos.',
    color: '#30D158',
    steps: [
      { icon: '📹', title: '¿Qué es una videollamada?', text: 'Una videollamada te permite ver y hablar con alguien en tiempo real desde tu celular, como si estuvieran juntos aunque estén en ciudades o países distintos.' },
      { icon: '📱', title: 'Videollamada por WhatsApp', text: 'Abre WhatsApp, toca el nombre de la persona con quien quieres hablar, luego toca el icono de cámara de video en la esquina superior derecha. Espera que la persona conteste.', tip: 'Busca un lugar con buena iluminación en tu cara para que te vean bien.', sim: { label: 'Iniciar videollamada', feedback: 'Videollamada iniciada. Conectando con el contacto.' } },
      { icon: '💡', title: 'Consejos para mejor calidad', text: 'Conéctate a WiFi siempre que puedas. Mantén la cámara a la altura de tu cara. Habla con voz clara y normal. Si la imagen se congela, espera unos segundos o muévete a otro lugar.', tip: 'La calidad mejora mucho con WiFi en comparación con datos móviles.' },
      { icon: '👥', title: 'Grupos familiares', text: 'Puedes hacer videollamadas grupales con toda la familia a la vez. En WhatsApp crea un grupo con todos los familiares y toca el icono de videollamada para conectar a todos.', sim: { label: 'Crear videollamada grupal', feedback: 'Grupo familiar conectado. Toda la familia en pantalla.' } }
    ]
  },
  {
    id: 'educacion',
    icon: '🎓',
    title: 'Educación digital',
    desc: 'Comprende el mundo digital y aprovecha sus oportunidades.',
    color: '#5AC8FA',
    steps: [
      { icon: '🎓', title: '¿Por qué aprender tecnología?', text: 'Saber tecnología abre puertas: encontrar mejores empleos, comunicarte con instituciones, estudiar desde casa, pagar facturas sin hacer filas y acceder a servicios de salud en línea.', tip: 'Estás dando el primer paso aprendiendo con TecnoRed. Eso ya es un logro importante.' },
      { icon: '💻', title: '¿Qué es una computadora?', text: 'Una computadora es una máquina que procesa información. Puede ser una laptop, una de escritorio, o tu celular. Tu celular es una computadora pequeña y muy poderosa que ya tienes en las manos.' },
      { icon: '🌍', title: 'El mundo digital', text: 'El mundo digital incluye Internet, redes sociales, comercio en línea, servicios de gobierno, educación virtual y salud digital. Cada año más servicios migran a plataformas digitales.', sim: { label: 'Explorar servicios digitales', feedback: 'El mundo digital ofrece cientos de oportunidades.' } },
      { icon: '🚀', title: 'Tu próximo paso', text: 'Practica lo aprendido cada día. No tengas miedo de equivocarte, así se aprende. Pide ayuda cuando lo necesites. Y comparte lo que sabes con otras personas de tu comunidad.', tip: 'Enseñar a otros lo que aprendiste es la mejor forma de afianzar el conocimiento.', sim: { label: 'Completar módulo', feedback: 'Módulo de Educación Digital completado. Excelente trabajo.' } }
    ]
  }
];

/* ── Steps celular Android ── */
const STEPS_ANDROID = [
  { icon: '🤖', title: 'Tu celular Android', text: 'Android es el sistema operativo de celulares como Samsung, Huawei, Motorola, Xiaomi y muchos más. Puedes reconocerlo porque tiene la Play Store, la tienda oficial de aplicaciones.', tip: 'La mayoría de celulares en Bolivia y Latinoamérica funcionan con Android.' },
  { icon: '🔘', title: 'Botones del Android', text: 'El botón lateral derecho enciende y apaga el celular. Los botones de volumen están en el lado izquierdo. En la pantalla verás botones de: volver (flecha), inicio (círculo) y apps recientes (cuadrado).', sim: { label: 'Identificar los botones', feedback: 'Correcto. Ahora conoces todos los botones de tu Android.' } },
  { icon: '🏠', title: 'Pantalla de inicio', text: 'Al encender el celular ves la pantalla de inicio con los iconos de tus apps. Desliza hacia arriba para ver todas las aplicaciones instaladas. Desliza a los lados para ver más páginas.', tip: 'Mantén presionado un icono para moverlo o para ver la opción de desinstalar la app.' },
  { icon: '📲', title: 'Descargar apps con Play Store', text: 'Abre la Play Store (icono de triángulo de colores), escribe el nombre de la app que quieres, toca el resultado correcto y luego toca Instalar. La descarga es automática y gratuita.', sim: { label: 'Instalar una aplicación', feedback: 'Aplicación instalada correctamente desde Play Store.' } }
];

/* ── Steps celular iOS ── */
const STEPS_IOS = [
  { icon: '🍎', title: 'Tu iPhone', text: 'El iPhone usa iOS, el sistema operativo de Apple. Puedes reconocerlo por el logo de la manzana en la parte trasera y porque tiene la App Store (icono de letra A azul) como tienda oficial.', tip: 'Los iPhones son conocidos por su seguridad, fluidez y larga vida útil.' },
  { icon: '🔘', title: 'Botones del iPhone', text: 'El botón lateral derecho enciende, apaga y activa Face ID o Touch ID. Los botones de volumen están a la izquierda. En modelos recientes no hay botón de inicio físico: desliza desde abajo de la pantalla hacia arriba para ir al inicio.', sim: { label: 'Explorar los botones', feedback: 'Correcto. Ya conoces los botones principales del iPhone.' } },
  { icon: '🏠', title: 'Pantalla de inicio del iPhone', text: 'Al desbloquear con Face ID o Touch ID ves tus apps. Desliza hacia los lados para ver más páginas de apps. Desliza desde el centro de la pantalla hacia abajo para buscar cualquier aplicación instalada.', tip: 'Mantén presionado un icono para moverlo o para ver la opción de eliminar la app.' },
  { icon: '📲', title: 'Descargar apps con App Store', text: 'Abre la App Store (icono de letra A azul), toca el icono de lupa, escribe el nombre de la app que quieres, toca Obtener y confirma con Face ID o Touch ID. La descarga comienza automáticamente.', sim: { label: 'Descargar desde App Store', feedback: 'Aplicación descargada correctamente desde App Store.' } }
];

/* ══════════════════════════════════════
   DATOS — EMERGENCIAS
══════════════════════════════════════ */
const EMERGENCIAS = {
  'celular-robado': {
    icon: '📵', title: 'Me robaron el celular',
    intro: 'Actúa en los primeros minutos. Cada segundo cuenta para proteger tu información personal.',
    steps: [
      'Llama a un familiar desde otro celular para avisarles lo ocurrido.',
      'Desde otro dispositivo, entra a <strong>google.com/android/find</strong> (Android) o <strong>appleid.apple.com</strong> (iPhone).',
      'Inicia sesión con tu cuenta y selecciona tu celular en el mapa.',
      'Toca <strong>Bloquear dispositivo</strong> y asígnale una contraseña nueva para que nadie pueda usarlo.',
      'Cambia las contraseñas de tu correo electrónico y redes sociales desde otro dispositivo.',
      'Llama a tu compañía telefónica (Tigo, Entel o Viva) para bloquear la SIM.',
      'Presenta la denuncia en la delegación policial más cercana.'
    ],
    warning: 'Si tenías apps bancarias en el celular, llama a tu banco de inmediato para bloquear el acceso desde ese dispositivo.'
  },
  'contrasena': {
    icon: '🔐', title: 'Olvidé mi contraseña',
    intro: 'No te preocupes. Casi todas las plataformas tienen un sistema de recuperación sencillo.',
    steps: [
      'En la pantalla de inicio de sesión, busca el texto <strong>¿Olvidaste tu contraseña?</strong> y tócalo.',
      'Escribe el correo electrónico o número de celular con el que creaste la cuenta.',
      'Espera el código de verificación que llegará por mensaje de texto o correo (puede tardar 1 a 2 minutos).',
      'Escribe ese código exactamente como aparece, sin espacios adicionales.',
      'Crea una nueva contraseña que combine letras, números y un símbolo. Por ejemplo: MiCasa2024!',
      'Guarda la nueva contraseña escrita en un lugar seguro de tu casa.'
    ],
    warning: 'Si no recibes el código, verifica que el correo o número escrito sea el correcto. También revisa la carpeta de Spam en tu correo.'
  },
  'estafado': {
    icon: '🚨', title: 'Creo que me estafaron',
    intro: 'Lo más importante es actuar rápido en los primeros minutos para limitar el daño.',
    steps: [
      'Deja de responder de inmediato. No envíes más dinero ni información personal.',
      'Toma capturas de pantalla de todos los mensajes y conversaciones como evidencia.',
      'Bloquea al número o perfil del estafador en WhatsApp, Facebook o donde haya ocurrido.',
      'Si diste datos bancarios, llama a tu banco ahora mismo para bloquear movimientos.',
      'Denuncia ante la Policía Boliviana al teléfono <strong>110</strong> o en la oficina de la ASFI si involucra dinero bancario.',
      'Avisa a tus familiares cercanos para que estén alerta por si el estafador los contacta.'
    ],
    warning: 'No te avergüences. Los estafadores son profesionales del engaño. Lo que importa es actuar rápido.'
  },
  'virus': {
    icon: '🦠', title: 'Mi celular tiene virus',
    intro: 'Mantén la calma. La mayoría de los virus en celulares se pueden eliminar sin costo.',
    steps: [
      'No descargues nada más y no hagas clic en ventanas que aparezcan solas.',
      'Ve a <strong>Ajustes → Aplicaciones</strong> y busca apps que no reconoces o que instalaste recientemente.',
      'Desinstala las aplicaciones sospechosas tocando su nombre y luego Desinstalar.',
      'Abre la Play Store o App Store y descarga el antivirus <strong>Avast Mobile Security</strong> (gratuito).',
      'Ejecuta el análisis completo del celular y sigue las instrucciones del antivirus.',
      'Reinicia el celular después de eliminar las amenazas detectadas.'
    ],
    warning: 'Si el problema persiste, lleva el celular a un técnico de confianza. No intentes reinstalar el sistema tú mismo.'
  },
  'internet': {
    icon: '📡', title: 'No funciona Internet',
    intro: 'Sigue estos pasos en orden. La solución suele estar en los primeros dos pasos.',
    steps: [
      'Verifica que el WiFi esté activado en la barra de iconos superior, o que tengas datos móviles activos.',
      'Activa el Modo Avión desde los iconos de acceso rápido, espera 15 segundos y desactívalo.',
      'Apaga el celular completamente, espera 30 segundos y vuélvelo a encender.',
      'Si usas WiFi, apaga el router (la cajita con luces) 30 segundos y vuelve a encenderlo. Espera 2 minutos.',
      'Verifica con otra persona si el WiFi funciona en su celular para descartar problema del router.',
      'Si usas datos móviles, consulta con tu compañía si tienes saldo o paquete de datos vigente.'
    ],
    warning: 'Si ninguno de estos pasos resuelve el problema, llama directamente a tu compañía telefónica o proveedor de Internet.'
  },
  'cuenta-bloqueada': {
    icon: '🔒', title: 'Me bloquearon la cuenta',
    intro: 'Las cuentas se bloquean por seguridad. Siempre es posible recuperarlas siguiendo el proceso correcto.',
    steps: [
      'En la pantalla de inicio de sesión, busca <strong>Cuenta bloqueada</strong> o <strong>¿Necesitas ayuda?</strong> y tócalo.',
      'Selecciona la opción de recuperar por número de celular o correo electrónico alternativo.',
      'Espera el código de verificación en tus mensajes de texto o correo.',
      'Escribe el código recibido y sigue las instrucciones en pantalla.',
      'Una vez dentro, cambia tu contraseña por una más segura.',
      'Activa la <strong>Verificación en dos pasos</strong> en la configuración de seguridad para evitar que vuelva a ocurrir.'
    ],
    warning: 'Si alguien más accedió a tu cuenta, revisa la sección de dispositivos conectados y cierra sesión en todos los desconocidos.'
  },
  'fotos-perdidas': {
    icon: '🖼️', title: 'Perdí mis fotos',
    intro: 'Antes de desesperarte, las fotos eliminadas suelen estar guardadas automáticamente en varios lugares.',
    steps: [
      'Abre la app Galería o Fotos y busca una carpeta llamada <strong>Papelera</strong> o <strong>Recientemente eliminadas</strong>. Las fotos se guardan ahí durante 30 días.',
      'Si tenías Google Fotos activado (Android) o iCloud (iPhone), entra a esas apps y busca tus fotos en la nube.',
      'En Google Fotos: toca el icono de menú, selecciona Papelera y restaura las fotos que necesitas.',
      'Si el celular se dañó físicamente, lleva el dispositivo a un técnico especializado en recuperación de datos.',
      'Para prevenir pérdidas futuras, activa la copia de seguridad automática en Google Fotos o iCloud desde ahora.'
    ],
    warning: 'Si el celular cayó al agua o recibió un golpe fuerte, no intentes encenderlo. Llévalo directamente a un técnico para aumentar las posibilidades de recuperación.'
  },
  'llamada-estafa': {
    icon: '📞', title: 'Llamada de estafadores',
    intro: 'Las llamadas fraudulentas son muy comunes. Conocer sus métodos es la mejor protección.',
    steps: [
      'Cuelga de inmediato si alguien dice que ganaste un premio, que hay un problema con tu banco o que un familiar tuyo está en peligro.',
      'Nunca proporciones por teléfono: número de tarjeta, PIN, contraseñas ni datos personales a nadie.',
      'Si dicen ser de tu banco, cuelga y llama tú mismo al número oficial que aparece en tu tarjeta bancaria.',
      'Si dicen que un familiar está en peligro, llama directamente a esa persona para verificar.',
      'Bloquea el número desde el que te llamaron: en Android toca los tres puntos al ver el registro de llamada. En iPhone toca la letra i junto al número.',
      'Denuncia el número marcando al <strong>110</strong> de la Policía Boliviana.'
    ],
    warning: 'Los bancos, el gobierno y las empresas NUNCA solicitan contraseñas, PINs ni códigos de verificación por llamada telefónica. Cualquier llamada que lo haga es una estafa.'
  },
  'celular-lento': {
    icon: '🐌', title: 'Mi celular está muy lento',
    intro: 'Un celular lento generalmente tiene solución sencilla y sin costo.',
    steps: [
      'Cierra todas las aplicaciones abiertas: en Android toca el botón de apps recientes y ciérralas todas. En iPhone desliza desde abajo y ciérralas deslizando hacia arriba.',
      'Libera espacio de almacenamiento: ve a <strong>Ajustes → Almacenamiento</strong> y elimina fotos duplicadas, apps que no usas y videos antiguos.',
      'Reinicia el celular completamente. Aunque parece simple, limpia la memoria temporal y acelera el rendimiento.',
      'Limpia el caché de las apps: ve a <strong>Ajustes → Aplicaciones</strong>, selecciona una app, toca Almacenamiento y luego Limpiar caché.',
      'Desactiva las actualizaciones automáticas de apps cuando estés usando datos móviles.',
      'Si el celular tiene más de tres años y sigue lento, considera actualizarlo. Los dispositivos tienen una vida útil limitada.'
    ],
    warning: 'Evita descargar apps de "limpieza" o "acelerador de RAM" de marcas desconocidas. Muchas son publicidad engañosa o incluso malware.'
  },
  'bateria': {
    icon: '🔋', title: 'La batería dura muy poco',
    intro: 'Con estos ajustes puedes extender significativamente la duración de tu batería.',
    steps: [
      'Reduce el brillo de la pantalla al 40 o 50 por ciento: ve a <strong>Ajustes → Pantalla → Brillo</strong>. Es el ajuste que más impacto tiene.',
      'Activa el <strong>Modo de ahorro de energía</strong>: en Android ve a Ajustes → Batería. En iPhone ve a Ajustes → Batería → Modo de bajo consumo.',
      'Desactiva el WiFi y el Bluetooth cuando no los estés usando desde los iconos de acceso rápido.',
      'Reduce el tiempo que la pantalla permanece encendida sola: <strong>Ajustes → Pantalla → Tiempo de espera</strong>, ponlo en 30 segundos.',
      'Desactiva la actualización en segundo plano de las apps desde Ajustes → Aplicaciones.',
      'Si la batería no dura más de cuatro horas con uso normal, probablemente necesita reemplazo. Un técnico puede cambiárla.'
    ],
    warning: 'Evita dejar el celular cargando toda la noche. Lo ideal es cargarlo cuando llegue al 20 por ciento y desconectarlo al llegar al 90 o 100 por ciento.'
  },
  'whatsapp-bloqueado': {
    icon: '💬', title: 'Problemas con WhatsApp',
    intro: 'Existen dos situaciones distintas: que alguien te bloqueó, o que WhatsApp suspendió tu cuenta.',
    steps: [
      'Si alguien te bloqueó: sus mensajes muestran solo un tilde (checkmark) y no puedes ver su foto ni llamarle. Solo esa persona puede desbloquearte voluntariamente.',
      'Si WhatsApp suspendió tu cuenta: verás el mensaje "Tu número está suspendido". Toca Pedir revisión y sigue las instrucciones para apelar la decisión.',
      'Si perdiste acceso a tu cuenta: instala WhatsApp nuevamente, ingresa tu número de celular y verifica con el código que llegará por SMS.',
      'Si cambiaste de celular: instala WhatsApp, ingresa tu número, verifica con el código SMS y tus conversaciones se restaurarán desde la copia de seguridad.',
      'Para evitar suspensiones: no envíes el mismo mensaje a muchas personas a la vez y no uses versiones modificadas de WhatsApp.'
    ],
    warning: 'WhatsApp solo suspende cuentas por violación de sus normas de uso. Si fue un error, el proceso de apelación generalmente lo resuelve en 24 horas.'
  },
  'compra-falsa': {
    icon: '🛒', title: 'Hice una compra falsa en línea',
    intro: 'Es una situación complicada, pero actuando rápido hay posibilidades de recuperar tu dinero.',
    steps: [
      'Guarda todas las pruebas disponibles: capturas del sitio web, conversaciones, comprobantes de pago y correos electrónicos.',
      'Si pagaste con tarjeta de crédito o débito, llama a tu banco de inmediato y solicita un contracargo o chargeback por compra fraudulenta.',
      'Si pagaste por transferencia bancaria, llama al banco en las primeras horas. A veces es posible revertir la operación.',
      'Si pagaste con Tigo Money u otra billetera digital, llama a su servicio al cliente de urgencias de inmediato.',
      'Denuncia el sitio web o perfil de redes sociales que usó el estafador como fraude directamente en la plataforma.',
      'Presenta la denuncia formal ante el Ministerio de Justicia o la Policía Boliviana con todas las pruebas recopiladas.'
    ],
    warning: 'Para compras futuras: desconfía de precios extremadamente bajos, verifica que el sitio tenga https:// y busca reseñas de otros compradores antes de pagar.'
  }
};

/* ══════════════════════════════════════
   NAVEGACIÓN SPA
══════════════════════════════════════ */
const pageTitles = {
  inicio: 'Inicio', proyecto: 'Proyecto', plataforma: 'Aprende',
  emergencias: 'Emergencias', equipo: 'Equipo', impacto: 'Impacto', planes: 'Planes'
};

function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  const link = document.querySelector('.nav-link[data-page="' + pageId + '"]');
  if (link) link.classList.add('active');

  state.currentPage = pageId;
  document.title = 'TecnoRed — ' + (pageTitles[pageId] || 'Inicio');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const menu = document.getElementById('nav-menu');
  const toggle = document.getElementById('nav-toggle');
  if (menu) menu.classList.remove('open');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');

  if (pageId === 'plataforma') renderModules();
}

/* Delegación global */
document.addEventListener('click', function(e) {
  const btn = e.target.closest('[data-page]');
  if (btn) { e.preventDefault(); navigate(btn.dataset.page); }
});

/* Toggle menú móvil */
document.getElementById('nav-toggle').addEventListener('click', function() {
  const menu = document.getElementById('nav-menu');
  const open = menu.classList.toggle('open');
  this.setAttribute('aria-expanded', open.toString());
});

/* ══════════════════════════════════════
   MÓDULOS — RENDER
══════════════════════════════════════ */
function calcProgress() {
  const nonCelular = MODULES.filter(m => !m.esCelular);
  const done = nonCelular.filter(m => (state.moduleProgress[m.id] || 0) >= m.steps.length).length;
  return nonCelular.length > 0 ? Math.round((done / nonCelular.length) * 100) : 0;
}

function updateGlobalProgress() {
  const pct = calcProgress();
  const fill = document.getElementById('pg-fill');
  const txt = document.getElementById('pg-pct');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = pct + '%';
}

function renderModules() {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;

  grid.innerHTML = MODULES.map(mod => {
    const steps = mod.esCelular ? 4 : mod.steps.length;
    const progress = state.moduleProgress[mod.id] || 0;
    const pct = mod.esCelular ? 0 : Math.round((Math.min(progress, steps) / steps) * 100);
    const done = !mod.esCelular && progress >= steps;

    return `
      <article class="module-card"
        role="listitem"
        style="--mc-color:${mod.color}"
        tabindex="0"
        data-module="${mod.id}"
        aria-label="Módulo: ${mod.title}${done ? ', completado' : ', ' + pct + '% completado'}">
        <div class="mc-icon-wrap" aria-hidden="true" style="background:${mod.color}20;color:${mod.color}">
          <span style="font-size:1.4rem">${mod.icon}</span>
        </div>
        <div class="mc-title">${mod.title}</div>
        <p class="mc-desc">${mod.desc}</p>
        <div class="mc-progress-bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
          <div class="mc-progress-fill" style="width:${pct}%;background:${mod.color}"></div>
        </div>
        <div class="mc-meta">
          <span class="mc-badge">${done ? 'Completado' : (mod.esCelular ? 'iOS o Android' : pct + '%')}</span>
          <span>${steps} pasos</span>
        </div>
      </article>`;
  }).join('');

  /* Limpiar listeners anteriores reemplazando el nodo */
  const fresh = grid.cloneNode(true);
  grid.parentNode.replaceChild(fresh, grid);

  fresh.addEventListener('click', function(e) {
    const card = e.target.closest('[data-module]');
    if (card) handleModuleClick(card.dataset.module);
  });
  fresh.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('[data-module]');
      if (card) { e.preventDefault(); handleModuleClick(card.dataset.module); }
    }
  });

  updateGlobalProgress();
}

function handleModuleClick(id) {
  if (id === 'celular') {
    openOSModal();
  } else {
    const mod = MODULES.find(m => m.id === id);
    if (mod) openModule(mod);
  }
}

/* ══════════════════════════════════════
   MODAL OS SELECTOR
══════════════════════════════════════ */
function openOSModal() {
  const modal = document.getElementById('os-modal');
  if (modal) { modal.removeAttribute('hidden'); document.body.style.overflow = 'hidden'; }
}
function closeOSModal() {
  const modal = document.getElementById('os-modal');
  if (modal) { modal.setAttribute('hidden', ''); document.body.style.overflow = ''; }
}

document.getElementById('os-modal-close')?.addEventListener('click', closeOSModal);
document.getElementById('os-modal-overlay')?.addEventListener('click', closeOSModal);

document.getElementById('os-pick-android')?.addEventListener('click', function() {
  closeOSModal();
  openModule({ id: 'celular-android', icon: '🤖', title: 'Cómo usar Android', color: '#30D158', steps: STEPS_ANDROID });
});

document.getElementById('os-pick-ios')?.addEventListener('click', function() {
  closeOSModal();
  openModule({ id: 'celular-ios', icon: '🍎', title: 'Cómo usar el iPhone', color: '#636366', steps: STEPS_IOS });
});

document.getElementById('os-help-toggle-btn')?.addEventListener('click', function() {
  const info = document.getElementById('os-help-info');
  if (info) { info.hidden ? info.removeAttribute('hidden') : info.setAttribute('hidden', ''); }
});

/* ══════════════════════════════════════
   MODAL MÓDULO
══════════════════════════════════════ */
function openModule(mod) {
  state.currentModule = mod;
  state.currentStep = Math.min(state.moduleProgress[mod.id] || 0, mod.steps.length - 1);

  const modal = document.getElementById('module-modal');
  document.getElementById('modal-icon').textContent = mod.icon;
  document.getElementById('modal-title').textContent = mod.title;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  renderStep();
}

function renderStep() {
  const { currentModule: mod, currentStep: idx } = state;
  if (!mod || !mod.steps[idx]) return;

  const step = mod.steps[idx];
  const total = mod.steps.length;
  const pct = Math.round(((idx + 1) / total) * 100);

  document.getElementById('mp-fill').style.width = pct + '%';
  document.getElementById('mp-text').textContent = (idx + 1) + ' / ' + total;

  const prevBtn = document.getElementById('btn-prev-step');
  const nextBtn = document.getElementById('btn-next-step');
  if (prevBtn) prevBtn.disabled = idx === 0;
  if (nextBtn) nextBtn.textContent = idx === total - 1 ? 'Finalizar' : 'Siguiente';

  document.getElementById('modal-content').innerHTML = `
    <div class="step-content">
      <div class="step-icon-block" aria-hidden="true">${step.icon}</div>
      <h3 class="step-heading">${step.title}</h3>
      <p class="step-body">${step.text}</p>
      ${step.tip ? `<div class="step-tip">${step.tip}</div>` : ''}
      ${step.sim ? `
        <div class="step-sim">
          <p class="step-sim-label">Simulación interactiva</p>
          <button class="step-sim-btn" onclick="runSim(this,'${step.sim.feedback.replace(/'/g, "\\'")}')">
            ${step.sim.label}
          </button>
          <div class="sim-result" aria-live="polite"></div>
        </div>` : ''}
    </div>`;
}

window.runSim = function(btn, feedback) {
  const result = btn.parentElement.querySelector('.sim-result');
  if (result) result.textContent = feedback;
  btn.textContent = 'Completado';
  btn.style.background = 'var(--positive)';
  btn.disabled = true;
};

function closeModule() {
  const modal = document.getElementById('module-modal');
  if (modal) { modal.setAttribute('hidden', ''); document.body.style.overflow = ''; }
  state.currentModule = null;
}

function saveProgress(id, step) {
  state.moduleProgress[id] = step;
  localStorage.setItem('tn_progress', JSON.stringify(state.moduleProgress));
}

document.getElementById('btn-next-step')?.addEventListener('click', function() {
  const mod = state.currentModule;
  if (!mod) return;
  if (state.currentStep < mod.steps.length - 1) {
    state.currentStep++;
    renderStep();
  } else {
    saveProgress(mod.id, mod.steps.length);
    closeModule();
    showToast(mod.title + ' completado');
    renderModules();
  }
});

document.getElementById('btn-prev-step')?.addEventListener('click', function() {
  if (state.currentStep > 0) { state.currentStep--; renderStep(); }
});

document.getElementById('modal-close')?.addEventListener('click', function() {
  if (state.currentModule) saveProgress(state.currentModule.id, state.currentStep);
  closeModule();
  renderModules();
});

document.getElementById('modal-overlay')?.addEventListener('click', function() {
  if (state.currentModule) saveProgress(state.currentModule.id, state.currentStep);
  closeModule();
  renderModules();
});

document.getElementById('btn-tts-modal')?.addEventListener('click', function() {
  const content = document.getElementById('modal-content');
  if (content) speak(content.innerText.slice(0, 500));
});

document.addEventListener('keydown', function(e) {
  if (e.key !== 'Escape') return;
  const mm = document.getElementById('module-modal');
  const om = document.getElementById('os-modal');
  if (mm && !mm.hidden) { if (state.currentModule) saveProgress(state.currentModule.id, state.currentStep); closeModule(); renderModules(); }
  if (om && !om.hidden) closeOSModal();
});

/* ══════════════════════════════════════
   EMERGENCIAS
══════════════════════════════════════ */
function initEmergencias() {
  const grid = document.getElementById('em-grid');
  const panel = document.getElementById('em-panel');
  const content = document.getElementById('em-panel-content');
  const backBtn = document.getElementById('em-back-btn');
  const ttsBtn = document.getElementById('btn-tts-em');
  if (!grid) return;

  function show(key) {
    const em = EMERGENCIAS[key];
    if (!em) return;

    content.innerHTML = `
      <div class="em-answer-body">
        <div class="em-answer-icon">${em.icon}</div>
        <h2 class="em-answer-title">${em.title}</h2>
        <p class="em-answer-intro">${em.intro}</p>
        <ul class="em-steps">
          ${em.steps.map((s, i) => `
            <li>
              <span class="em-step-n">${i + 1}</span>
              <span>${s}</span>
            </li>`).join('')}
        </ul>
        ${em.warning ? `<div class="em-warning"><strong>Importante:</strong> ${em.warning}</div>` : ''}
      </div>`;

    grid.style.display = 'none';
    panel.removeAttribute('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  grid.addEventListener('click', e => {
    const card = e.target.closest('[data-em]');
    if (card) show(card.dataset.em);
  });
  grid.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('[data-em]');
      if (card) { e.preventDefault(); show(card.dataset.em); }
    }
  });

  backBtn?.addEventListener('click', () => { panel.setAttribute('hidden', ''); grid.style.display = ''; stopTTS(); });
  ttsBtn?.addEventListener('click', () => { if (content) speak(content.innerText.slice(0, 800)); });
}

/* ══════════════════════════════════════
   PLANES — formulario de aviso
══════════════════════════════════════ */
document.getElementById('btn-pro-notify')?.addEventListener('click', function() {
  const input = document.getElementById('pro-email');
  const success = document.getElementById('pn-success');
  if (!input || !input.value.includes('@')) { if (input) input.focus(); return; }
  if (success) { success.removeAttribute('hidden'); success.style.display = 'block'; }
  input.value = '';
  this.disabled = true;
  this.textContent = 'Enviado';
});

/* ══════════════════════════════════════
   ACCESIBILIDAD
══════════════════════════════════════ */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  state.theme = t;
  localStorage.setItem('tn_theme', t);
  const icon = document.getElementById('theme-icon');
  const btn = document.getElementById('btn-theme');
  /* Cambiamos el SVG según el tema */
  if (icon) {
    icon.innerHTML = t === 'dark'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  if (btn) btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
}

function applyContrast(on) {
  state.highContrast = on;
  document.documentElement.setAttribute('data-contrast', on ? 'high' : 'normal');
  localStorage.setItem('tn_contrast', on.toString());
  const btn = document.getElementById('btn-contrast');
  if (btn) btn.setAttribute('aria-pressed', on ? 'true' : 'false');
}

const fontSizes = ['small', 'medium', 'large', 'xlarge'];

function applyFontSize(s) {
  state.fontSize = s;
  document.documentElement.setAttribute('data-font-size', s);
  localStorage.setItem('tn_fontsize', s);
}

document.getElementById('btn-theme')?.addEventListener('click', () => applyTheme(state.theme === 'dark' ? 'light' : 'dark'));
document.getElementById('btn-contrast')?.addEventListener('click', () => applyContrast(!state.highContrast));
document.getElementById('btn-font-dec')?.addEventListener('click', () => {
  const i = fontSizes.indexOf(state.fontSize);
  if (i > 0) applyFontSize(fontSizes[i - 1]);
});
document.getElementById('btn-font-inc')?.addEventListener('click', () => {
  const i = fontSizes.indexOf(state.fontSize);
  if (i < fontSizes.length - 1) applyFontSize(fontSizes[i + 1]);
});

/* ══════════════════════════════════════
   TTS
══════════════════════════════════════ */
function speak(text) {
  if (!('speechSynthesis' in window)) { alert('Tu navegador no soporta lectura en voz alta. Prueba con Chrome.'); return; }
  stopTTS();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'es-ES';
  u.rate = 0.88;
  u.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const v = voices.find(v => v.lang && v.lang.startsWith('es'));
  if (v) u.voice = v;
  window.speechSynthesis.speak(u);
}

function stopTTS() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

document.getElementById('btn-tts')?.addEventListener('click', function() {
  const active = this.getAttribute('aria-pressed') === 'true';
  if (active) {
    stopTTS();
    this.setAttribute('aria-pressed', 'false');
  } else {
    const page = document.getElementById('page-' + state.currentPage);
    if (page) speak(page.innerText.slice(0, 700));
    this.setAttribute('aria-pressed', 'true');
  }
});

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
function showToast(text) {
  const t = document.getElementById('progress-toast');
  const s = document.getElementById('toast-text');
  if (!t || !s) return;
  s.textContent = text;
  t.removeAttribute('hidden');
  setTimeout(() => t.setAttribute('hidden', ''), 3200);
}

/* ══════════════════════════════════════
   CONTADORES ANIMADOS
══════════════════════════════════════ */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 45));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 35);
  });
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  applyTheme(state.theme);
  applyFontSize(state.fontSize);
  applyContrast(state.highContrast);

  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {};
  }

  animateCounters();
  initEmergencias();
});

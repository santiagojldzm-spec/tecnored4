/**
 * TECNORED v4 — chatbot.js
 * Asistente de IA sin API key.
 * Base de conocimiento ampliada con +60 temas tecnológicos frecuentes.
 * 100% seguro para repositorios públicos en GitHub.
 */
'use strict';

/* ══════════════════════════════════════
   BASE DE CONOCIMIENTO AMPLIADA
══════════════════════════════════════ */
const KB = [

  /* ─── INTERNET Y CONECTIVIDAD ─── */
  {
    claves: ['internet', 'que es internet', 'para que sirve internet', 'red global', 'www'],
    r: `<strong>Internet</strong> es una red mundial que conecta millones de computadoras y celulares para compartir información en tiempo real.<br/><br/>Con Internet puedes:<br/>• Buscar información sobre cualquier tema<br/>• Comunicarte con personas en cualquier país<br/>• Realizar trámites sin salir de casa<br/>• Acceder a educación y salud en línea<br/><br/>Para conectarte necesitas WiFi (red de tu casa o lugares públicos) o datos móviles de tu compañía.`
  },
  {
    claves: ['wifi', 'wi-fi', 'conectar wifi', 'no me conecto wifi', 'contraseña wifi', 'red wifi', 'router', 'señal wifi'],
    r: `<strong>WiFi</strong> es la señal inalámbrica que transmite Internet desde un router (la cajita con luces) hasta tu celular.<br/><br/>Para conectarte:<br/>1. Ve a Ajustes en tu celular<br/>2. Toca WiFi y actívalo<br/>3. Elige el nombre de tu red de la lista<br/>4. Escribe la contraseña (suele estar pegada en el router)<br/>5. Toca Conectar<br/><br/>Si el icono de WiFi aparece en la parte superior de tu pantalla, estás conectado.`
  },
  {
    claves: ['datos moviles', 'datos móviles', 'megas', 'paquete de datos', 'sin internet celular', 'consumir datos', 'ahorrar datos'],
    r: `Los <strong>datos móviles</strong> son la conexión a Internet de tu compañía telefónica cuando no tienes WiFi.<br/><br/>Para activarlos: desliza desde la parte superior de la pantalla y toca el icono de datos.<br/><br/>Para ahorrar datos:<br/>• Conéctate a WiFi siempre que puedas<br/>• Descarga videos en casa para verlos después<br/>• Ve a Ajustes → Uso de datos para controlar el consumo<br/>• Desactiva la actualización automática de apps`
  },
  {
    claves: ['internet lento', 'conexion lenta', 'conexión lenta', 'carga lento', 'pagina lenta', 'video no carga'],
    r: `Si tu <strong>Internet está lento</strong>, prueba estos pasos:<br/><br/>1. Apaga y vuelve a encender el WiFi en tu celular<br/>2. Reinicia el router (apágalo 30 segundos y enciéndelo)<br/>3. Acércate más al router si usas WiFi<br/>4. Cierra las apps que no estás usando<br/>5. Verifica que nadie más esté usando mucho ancho de banda en tu red<br/><br/>Si el problema persiste, llama a tu proveedor de Internet.`
  },

  /* ─── CELULAR Y DISPOSITIVOS ─── */
  {
    claves: ['celular', 'telefono', 'teléfono', 'smartphone', 'movil', 'móvil', 'como usar celular'],
    r: `Tu <strong>celular o teléfono inteligente</strong> es una computadora que cabe en tu bolsillo.<br/><br/>Partes principales:<br/>• <strong>Pantalla táctil:</strong> la tocas con el dedo para usarla<br/>• <strong>Botón lateral:</strong> enciende y apaga<br/>• <strong>Botones de volumen:</strong> controlan el sonido<br/>• <strong>Cámara:</strong> para fotos y videollamadas<br/><br/>Si algo no funciona bien, apágalo 30 segundos y vuélvelo a encender. Eso resuelve la mayoría de los problemas.`
  },
  {
    claves: ['android', 'samsung', 'huawei', 'motorola', 'xiaomi', 'play store', 'sistema android'],
    r: `<strong>Android</strong> es el sistema operativo de celulares como Samsung, Huawei, Motorola y Xiaomi.<br/><br/>Lo reconoces porque:<br/>• Tiene la <strong>Play Store</strong> (icono de triángulo de colores) para descargar apps<br/>• Los botones de navegación aparecen en la pantalla (atrás, inicio, recientes)<br/>• La pantalla de inicio tiene muchos iconos que puedes mover libremente<br/><br/>Es el sistema más usado en Bolivia y Latinoamérica.`
  },
  {
    claves: ['iphone', 'ios', 'apple', 'app store', 'face id', 'touch id', 'icloud'],
    r: `<strong>iPhone</strong> es el celular de Apple y usa el sistema operativo iOS.<br/><br/>Lo reconoces porque:<br/>• Tiene el logo de una manzana en la parte trasera<br/>• Su tienda se llama <strong>App Store</strong> (icono de letra A azul)<br/>• En modelos recientes se desbloquea mirando la pantalla (Face ID)<br/>• La pantalla se navega deslizando desde abajo hacia arriba<br/><br/>Es conocido por su seguridad, fluidez y larga duración.`
  },
  {
    claves: ['celular lento', 'teléfono lento', 'va lento', 'se congela', 'se traba', 'celular colgado'],
    r: `Si tu <strong>celular está lento o se congela</strong>:<br/><br/>1. Cierra todas las apps abiertas (botón de apps recientes)<br/>2. Reinicia el celular completamente<br/>3. Libera espacio: Ajustes → Almacenamiento → elimina lo que no usas<br/>4. Actualiza el sistema operativo<br/>5. Limpia el caché: Ajustes → Aplicaciones → elige una app → Limpiar caché<br/><br/>Si el problema continúa y el celular tiene más de 4 años, puede necesitar reemplazo.`
  },
  {
    claves: ['pantalla rota', 'pantalla quebrada', 'vidrio roto', 'pantalla negra', 'pantalla no enciende'],
    r: `Si tienes un problema con la <strong>pantalla de tu celular</strong>:<br/><br/><strong>Pantalla negra pero el celular suena:</strong> Mantén presionado el botón de encendido 10 segundos para forzar el reinicio.<br/><br/><strong>Pantalla táctil no responde:</strong> Reinicia el celular. Si persiste, puede ser un problema de hardware.<br/><br/><strong>Pantalla rota físicamente:</strong> Lleva el celular a un técnico. No sigas usando el celular con la pantalla muy dañada, puede cortarte.<br/><br/>Evita mojar el celular o exponerlo a golpes fuertes.`
  },
  {
    claves: ['bateria', 'batería', 'carga rapido', 'se descarga rapido', 'dura poco la bateria', 'como cargar bien'],
    r: `Para que tu <strong>batería dure más</strong>:<br/><br/>• Reduce el brillo de la pantalla al 40-50%<br/>• Activa el Modo de ahorro de energía en Ajustes → Batería<br/>• Desactiva WiFi y Bluetooth cuando no los uses<br/>• Reduce el tiempo de bloqueo automático de pantalla a 30 segundos<br/>• Cierra las apps que actualizan en segundo plano<br/><br/>Para cuidar la batería a largo plazo:<br/>• Cárgala cuando llegue al 20% y desconéctala al 100%<br/>• Evita dejarla cargando toda la noche`
  },
  {
    claves: ['celular mojado', 'cayó al agua', 'cayo al agua', 'teléfono mojado', 'se mojó el celular'],
    r: `Si tu <strong>celular se mojó</strong>, actúa rápido:<br/><br/>1. <strong>No lo enciendas</strong> si está apagado<br/>2. Apágalo inmediatamente si está encendido<br/>3. Sácale la tarjeta SIM y la memoria si puedes<br/>4. Sécalo por fuera con una tela suave<br/>5. Ponlo en un recipiente con arroz o sílica gel 24-48 horas para absorber la humedad<br/>6. Llévalo a un técnico antes de volver a encenderlo<br/><br/>Nunca uses el secador de cabello ni lo pongas al sol directo.`
  },

  /* ─── APLICACIONES ─── */
  {
    claves: ['aplicacion', 'aplicación', 'app', 'como descargar app', 'instalar aplicacion', 'bajar app'],
    r: `Las <strong>aplicaciones (apps)</strong> son programas que instalas en tu celular para tareas específicas.<br/><br/>Para descargar apps:<br/>• <strong>Android:</strong> abre Play Store → busca la app → toca Instalar<br/>• <strong>iPhone:</strong> abre App Store → busca la app → toca Obtener<br/><br/>Apps esenciales para empezar:<br/>• WhatsApp (mensajes gratis)<br/>• Google Maps (navegación)<br/>• YouTube (videos gratis)<br/>• Gmail (correo)<br/><br/>Solo descarga desde la tienda oficial para evitar virus.`
  },
  {
    claves: ['whatsapp', 'wsp', 'mensaje whatsapp', 'grupo whatsapp', 'estado whatsapp', 'llamada whatsapp'],
    r: `<strong>WhatsApp</strong> es la app de mensajes más usada del mundo. Es completamente gratuita.<br/><br/>Con WhatsApp puedes:<br/>• Enviar mensajes de texto, fotos, videos y audios<br/>• Hacer llamadas y videollamadas gratis por WiFi<br/>• Crear grupos para familia o trabajo<br/>• Compartir tu ubicación en tiempo real<br/>• Enviar documentos PDF<br/><br/>Para instalarlo: busca WhatsApp en Play Store o App Store. Solo necesitas tu número de celular.`
  },
  {
    claves: ['youtube', 'ver videos', 'canal youtube', 'como buscar youtube', 'bajar videos youtube'],
    r: `<strong>YouTube</strong> es la plataforma de videos más grande del mundo. Ver videos es completamente gratuito.<br/><br/>Para usarlo:<br/>1. Descarga la app YouTube desde la tienda<br/>2. Toca el icono de lupa y escribe lo que quieres ver<br/>3. Toca el video para reproducirlo<br/><br/>No necesitas crear cuenta para ver videos. Si creas una cuenta gratuita, puedes guardar videos favoritos y suscribirte a canales.<br/><br/>Puedes encontrar tutoriales sobre casi cualquier tema: cocina, salud, agricultura, idiomas y más.`
  },
  {
    claves: ['facebook', 'como usar facebook', 'publicacion facebook', 'facebook seguro', 'borrar facebook'],
    r: `<strong>Facebook</strong> te permite conectar con amigos y familia, compartir fotos y ver noticias.<br/><br/>Consejos de seguridad en Facebook:<br/>• Configura tu perfil como "Solo amigos" en Configuración → Privacidad<br/>• No aceptes solicitudes de personas que no conoces<br/>• No publiques tu dirección, teléfono ni horarios de casa<br/>• Activa la verificación en dos pasos en Configuración → Seguridad<br/>• Desconfía de concursos o premios que piden datos personales<br/><br/>Para crear cuenta: ve a facebook.com y toca "Crear cuenta nueva".`
  },
  {
    claves: ['instagram', 'como usar instagram', 'publicar instagram', 'historia instagram', 'reels'],
    r: `<strong>Instagram</strong> es una red social para compartir fotos, videos cortos (Reels) e historias que desaparecen en 24 horas.<br/><br/>Para publicar una foto:<br/>1. Abre Instagram y toca el icono + en la parte inferior<br/>2. Elige la foto de tu galería<br/>3. Aplica un filtro si quieres<br/>4. Escribe una descripción y toca Compartir<br/><br/>Configuración de privacidad recomendada: ve a Configuración → Privacidad → Cuenta privada. Así solo tus seguidores aprobados ven tus publicaciones.`
  },
  {
    claves: ['tiktok', 'como usar tiktok', 'videos tiktok', 'hacer tiktok', 'live tiktok'],
    r: `<strong>TikTok</strong> es una red social de videos cortos (15 segundos a 3 minutos). Es muy popular para entretenimiento y también para aprender cosas nuevas.<br/><br/>Puedes ver videos sin crear cuenta. Para publicar, necesitas registrarte con tu correo o número de celular.<br/><br/>Consejos de seguridad:<br/>• Configura tu cuenta como privada si eres menor o no quieres que extraños te vean<br/>• Ten cuidado con los "desafíos virales", algunos pueden ser peligrosos<br/>• No compartas información personal en tus videos`
  },
  {
    claves: ['spotify', 'musica spotify', 'como usar spotify', 'playlist spotify', 'descargar musica'],
    r: `<strong>Spotify</strong> es una app de música con millones de canciones disponibles. La versión gratuita incluye música con anuncios ocasionales.<br/><br/>Para usarlo:<br/>1. Descarga Spotify desde la tienda<br/>2. Crea una cuenta gratuita con tu correo<br/>3. Busca tu artista o canción favorita<br/>4. Toca reproducir<br/><br/>Con la versión gratuita puedes escuchar música. Con la versión Premium (de pago) puedes descargar canciones para escuchar sin Internet y sin anuncios.`
  },
  {
    claves: ['google maps', 'maps', 'como llegar', 'cómo llegar', 'gps', 'mapa celular', 'ubicacion actual', 'dirección'],
    r: `<strong>Google Maps</strong> es un GPS gratuito que te guía con voz paso a paso a cualquier destino.<br/><br/>Para usarlo:<br/>1. Abre Google Maps<br/>2. Escribe el destino en la barra de búsqueda<br/>3. Toca "Cómo llegar"<br/>4. Elige el medio de transporte (auto, bus, caminando)<br/>5. Toca "Iniciar" y sigue las instrucciones de voz<br/><br/>Consejo: puedes descargar el mapa de tu ciudad para usarlo sin Internet. Toca tu foto de perfil → Mapas sin conexión.`
  },
  {
    claves: ['zoom', 'microsoft teams', 'google meet', 'videollamada grupal', 'reunion virtual', 'conferencia virtual'],
    r: `Las <strong>apps de reuniones virtuales</strong> permiten videoconferencias con muchas personas a la vez.<br/><br/>Las más usadas:<br/>• <strong>Zoom:</strong> la más popular. Descárgala, crea cuenta gratis y únete a reuniones con un código<br/>• <strong>Google Meet:</strong> solo necesitas una cuenta de Gmail. Entra a meet.google.com<br/>• <strong>Microsoft Teams:</strong> muy usada en empresas y colegios<br/><br/>Para unirse a una reunión de Zoom: abre la app, toca "Unirse" e ingresa el código de 9-11 números que te compartieron.`
  },

  /* ─── CORREO Y COMUNICACIÓN ─── */
  {
    claves: ['correo', 'email', 'gmail', 'crear correo', 'como crear correo', 'cuenta de correo', 'enviar correo'],
    r: `El <strong>correo electrónico</strong> es como una carta digital que llega instantáneamente a cualquier parte del mundo.<br/><br/>Para crear Gmail (el más usado):<br/>1. Abre gmail.com o la app Gmail<br/>2. Toca "Crear cuenta"<br/>3. Escribe tu nombre y elige un usuario (ej: tu.nombre@gmail.com)<br/>4. Crea una contraseña segura<br/>5. Agrega tu número de celular para recuperar la cuenta<br/><br/>Para enviar un correo: abre Gmail → toca Redactar → escribe destinatario, asunto y mensaje → toca Enviar.`
  },
  {
    claves: ['spam', 'correo no deseado', 'correo basura', 'phishing correo', 'correo sospechoso', 'eliminar spam'],
    r: `El <strong>spam</strong> son correos no deseados, publicitarios o peligrosos que llegan a tu bandeja de entrada.<br/><br/>Cómo manejarlo:<br/>• <strong>No abras</strong> correos de remitentes desconocidos<br/>• Nunca hagas clic en enlaces de correos sospechosos<br/>• Marca el correo como spam tocando los tres puntos → "Marcar como spam"<br/>• Los correos de phishing suelen tener errores ortográficos y piden datos personales urgentemente<br/><br/>Gmail filtra automáticamente mucho spam en la carpeta "Spam" o "Correo no deseado".`
  },
  {
    claves: ['recuperar correo', 'olvide correo', 'olvidé correo', 'no puedo entrar gmail', 'recuperar gmail'],
    r: `Para <strong>recuperar el acceso a tu Gmail</strong>:<br/><br/>1. Ve a gmail.com y toca "¿Olvidaste tu contraseña?"<br/>2. Escribe tu dirección de correo<br/>3. Google te pedirá verificar tu identidad por SMS, correo alternativo o preguntas de seguridad<br/>4. Sigue las instrucciones en pantalla<br/>5. Crea una nueva contraseña segura<br/><br/>Por eso es importante agregar un número de celular de recuperación al crear la cuenta.`
  },

  /* ─── SEGURIDAD DIGITAL ─── */
  {
    claves: ['estafa', 'fraude', 'engaño', 'phishing', 'timo', 'me estafaron', 'evitar estafas', 'estafa whatsapp'],
    r: `Las <strong>estafas digitales</strong> son engaños para robarte dinero o datos personales.<br/><br/>Las más comunes:<br/>• "Ganaste un premio" → siempre es mentira si no participaste en nada<br/>• Mensajes urgentes del "banco" pidiendo datos → cuelga o ignora<br/>• Ofertas increíbles en redes sociales → desconfía si el precio es demasiado bajo<br/>• "Tu paquete no pudo entregarse, haz clic aquí" → no hagas clic<br/><br/>Si crees que te estafaron: guarda capturas de pantalla como evidencia y denuncia al 110 (Policía Bolivia).`
  },
  {
    claves: ['contraseña', 'clave', 'password', 'pin', 'contraseña segura', 'cambiar contraseña', 'olvidé contraseña'],
    r: `Una <strong>contraseña segura</strong> debe tener:<br/>• Al menos 8 caracteres<br/>• Letras mayúsculas y minúsculas<br/>• Números<br/>• Al menos un símbolo (! @ # $ %)<br/><br/>Ejemplo seguro: <strong>MiGato2024!</strong><br/>Ejemplos inseguros: 123456 / password / tu nombre / tu fecha de nacimiento<br/><br/>Consejos:<br/>• Nunca compartas tu contraseña con nadie<br/>• Usa contraseñas diferentes para cada cuenta<br/>• Guárdala escrita en un lugar privado de tu casa`
  },
  {
    claves: ['verificacion dos pasos', 'verificación dos pasos', 'doble autenticacion', 'doble autenticación', '2fa', 'codigo verificacion'],
    r: `La <strong>verificación en dos pasos</strong> es una capa extra de seguridad para tus cuentas.<br/><br/>Cómo funciona:<br/>1. Ingresas tu contraseña normalmente<br/>2. El sistema te envía un código de 6 dígitos por SMS<br/>3. Ingresas ese código para confirmar que eres tú<br/><br/>Para activarla en Gmail: Ajustes de cuenta → Seguridad → Verificación en dos pasos → Activar<br/>Para WhatsApp: Ajustes → Cuenta → Verificación en dos pasos<br/><br/>Aunque alguien tenga tu contraseña, no puede entrar sin el código de tu celular.`
  },
  {
    claves: ['virus celular', 'virus telefono', 'malware', 'antivirus', 'celular infectado', 'app peligrosa'],
    r: `Si crees que tu <strong>celular tiene un virus</strong>:<br/><br/>1. No descargues nada más hasta solucionar el problema<br/>2. Ve a Ajustes → Aplicaciones y busca apps que no instalaste<br/>3. Desinstala las apps sospechosas<br/>4. Descarga <strong>Avast Mobile Security</strong> desde la Play Store (es gratuito y confiable)<br/>5. Ejecuta un análisis completo<br/><br/>Para prevenir virus:<br/>• Descarga apps solo desde Play Store o App Store<br/>• No hagas clic en enlaces de mensajes desconocidos<br/>• Mantén el sistema actualizado`
  },
  {
    claves: ['privacidad', 'datos personales', 'robo de identidad', 'proteger datos', 'quien puede ver mis datos'],
    r: `Para proteger tu <strong>privacidad digital</strong>:<br/><br/>• No compartas tu número de carnet, dirección o datos bancarios por WhatsApp o redes sociales<br/>• Configura tus perfiles de redes sociales como "privados"<br/>• Revisa qué permisos tienen tus apps instaladas (Ajustes → Aplicaciones → Permisos)<br/>• Usa contraseñas diferentes para cada cuenta importante<br/>• Activa la pantalla de bloqueo con PIN o huella dactilar<br/><br/>Tus datos personales son valiosos. No los compartas innecesariamente.`
  },

  /* ─── PROBLEMAS TÉCNICOS ─── */
  {
    claves: ['no carga', 'no funciona', 'app no abre', 'error aplicacion', 'aplicacion cerrada', 'se cierra sola'],
    r: `Si una <strong>app no funciona</strong> correctamente:<br/><br/>1. Cierra la app completamente y vuelve a abrirla<br/>2. Reinicia tu celular<br/>3. Ve a Ajustes → Aplicaciones → selecciona la app → Forzar detención<br/>4. Limpia el caché: Ajustes → Aplicaciones → app → Almacenamiento → Limpiar caché<br/>5. Desinstala la app y vuelve a instalarla desde la tienda oficial<br/>6. Actualiza la app a la última versión disponible<br/><br/>Si continúa fallando, el problema puede ser del servidor de la app, no de tu celular.`
  },
  {
    claves: ['sin espacio', 'memoria llena', 'almacenamiento lleno', 'no puedo instalar', 'liberar espacio'],
    r: `Si tu celular dice <strong>"Almacenamiento lleno"</strong>:<br/><br/>Cómo liberar espacio:<br/>1. Ajustes → Almacenamiento → ver qué ocupa más<br/>2. Elimina fotos y videos duplicados o que ya no necesitas<br/>3. Desinstala apps que no uses<br/>4. Sube tus fotos a Google Fotos o iCloud y bórralas del celular<br/>5. Limpia el caché de las apps (Ajustes → Aplicaciones → Limpiar caché)<br/>6. Elimina archivos descargados en la carpeta Descargas<br/><br/>Con Google Fotos puedes guardar fotos ilimitadas gratuitamente.`
  },
  {
    claves: ['actualizar', 'actualización', 'update', 'sistema desactualizado', 'nueva version', 'como actualizar'],
    r: `<strong>Actualizar</strong> tu celular y apps es importante porque:<br/>• Corrige errores y fallos<br/>• Mejora la seguridad contra nuevas amenazas<br/>• Agrega funciones nuevas<br/>• Mejora el rendimiento<br/><br/>Para actualizar apps en Android: Play Store → tu foto → Gestionar apps → Actualizar todo<br/>Para actualizar apps en iPhone: App Store → tu foto → Actualizaciones disponibles<br/>Para actualizar el sistema: Ajustes → Acerca del teléfono (Android) o General → Actualización de software (iPhone)`
  },
  {
    claves: ['reiniciar', 'apagar celular', 'como apagar', 'restablecer fabrica', 'formatear celular', 'borrar todo'],
    r: `Para <strong>reiniciar tu celular</strong>:<br/>Mantén presionado el botón de encendido 3 segundos → toca Reiniciar<br/><br/>Para apagarlo: mismo proceso → toca Apagar<br/><br/>Para <strong>reinicio de emergencia</strong> (si está congelado): mantén presionado el botón de encendido 10 segundos.<br/><br/>Para <strong>restablecer de fábrica</strong> (borra todo): Ajustes → Sistema → Opciones de restablecimiento → Borrar todos los datos.<br/>⚠️ El restablecimiento de fábrica borra TODOS tus datos. Haz una copia de seguridad primero.`
  },
  {
    claves: ['microfono no funciona', 'micrófono', 'no me escuchan', 'volumen', 'sin sonido', 'audio celular'],
    r: `Si tienes problemas de <strong>sonido o micrófono</strong>:<br/><br/><strong>No escuchas nada:</strong><br/>• Verifica que el volumen no esté al mínimo<br/>• Desactiva el modo silencio<br/>• Revisa que no estén conectados audífonos que redirigen el sonido<br/><br/><strong>No te escuchan en llamadas:</strong><br/>• Verifica que la app tenga permiso para usar el micrófono (Ajustes → Aplicaciones → Permisos)<br/>• Reinicia el celular<br/>• Limpia el micrófono con suavidad (está en la parte inferior del celular)`
  },
  {
    claves: ['camara no funciona', 'cámara', 'foto borrosa', 'camara negra', 'no puedo tomar foto'],
    r: `Si tu <strong>cámara no funciona</strong>:<br/><br/>1. Cierra la app de cámara y vuelve a abrirla<br/>2. Reinicia el celular<br/>3. Verifica que otras apps tengan permiso de usar la cámara en Ajustes → Aplicaciones → Permisos<br/>4. Limpia el lente de la cámara con una tela suave<br/>5. Actualiza la app de cámara<br/><br/><strong>Fotos borrosas:</strong> limpia el lente, no muevas el celular al tomar la foto, y asegúrate de tocar la pantalla donde quieres enfocar.`
  },

  /* ─── PAGOS Y BANCA DIGITAL ─── */
  {
    claves: ['tigo money', 'billetera digital', 'pago celular', 'transferir dinero', 'enviar dinero', 'pagar con celular'],
    r: `<strong>Tigo Money</strong> te permite pagar servicios y transferir dinero desde tu celular.<br/><br/>Para activarlo:<br/>1. Descarga la app "Tigo Money" desde Play Store<br/>2. Regístrate con tu número Tigo<br/>3. Activa tu billetera en un punto Tigo con tu carnet<br/><br/>Con Tigo Money puedes:<br/>• Pagar agua, luz, gas y teléfono<br/>• Transferir dinero a otros usuarios<br/>• Recargar saldo a cualquier compañía<br/>• Pagar en tiendas que aceptan el servicio<br/><br/>Siempre verifica el monto antes de confirmar cualquier transacción.`
  },
  {
    claves: ['banco en linea', 'banco online', 'app banco', 'home banking', 'banca digital', 'consultar saldo banco'],
    r: `La <strong>banca digital o home banking</strong> te permite manejar tu cuenta bancaria desde el celular sin ir al banco.<br/><br/>Puedes:<br/>• Ver tu saldo y movimientos<br/>• Transferir dinero<br/>• Pagar servicios<br/>• Solicitar productos financieros<br/><br/>Descarga la app oficial de tu banco solo desde Play Store o App Store. Nunca desde un enlace que te enviaron por WhatsApp o correo.<br/><br/>Si recibes una llamada de alguien que dice ser de tu banco y pide datos: cuelga y llama tú al número oficial del banco.`
  },

  /* ─── GOOGLE MAPS Y NAVEGACIÓN ─── */
  {
    claves: ['google maps', 'maps', 'como llegar', 'cómo llegar', 'mapa', 'gps', 'ubicacion', 'ruta'],
    r: `<strong>Google Maps</strong> es tu guía de navegación gratuita con voz paso a paso.<br/><br/>Para llegar a un lugar:<br/>1. Abre Google Maps<br/>2. Escribe la dirección o nombre del lugar en la barra superior<br/>3. Toca "Cómo llegar"<br/>4. Elige auto, bus o caminando<br/>5. Toca "Iniciar" y sigue las instrucciones de voz<br/><br/>Si te equivocas de calle, Maps recalcula la ruta automáticamente. Puedes descargar mapas para usarlos sin Internet: perfil → Mapas sin conexión.`
  },

  /* ─── ALMACENAMIENTO EN LA NUBE ─── */
  {
    claves: ['nube', 'cloud', 'google drive', 'guardar en nube', 'almacenamiento nube', 'fotos nube', 'icloud'],
    r: `La <strong>nube</strong> es un espacio en Internet para guardar tus fotos, documentos y archivos sin ocupar espacio en tu celular.<br/><br/>Servicios gratuitos:<br/>• <strong>Google Fotos:</strong> guarda fotos y videos automáticamente (Android e iPhone)<br/>• <strong>Google Drive:</strong> 15GB gratis para documentos, fotos y archivos<br/>• <strong>iCloud:</strong> para usuarios de iPhone, 5GB gratis<br/><br/>Ventaja principal: si pierdes o te roban el celular, tus fotos y documentos están seguros en la nube y puedes recuperarlos desde otro dispositivo.`
  },
  {
    claves: ['google fotos', 'copias de seguridad', 'respaldo fotos', 'backup celular', 'perdi mis fotos'],
    r: `<strong>Google Fotos</strong> guarda automáticamente todas tus fotos en la nube de forma gratuita.<br/><br/>Para activarlo:<br/>1. Descarga la app Google Fotos desde la tienda<br/>2. Inicia sesión con tu cuenta de Gmail<br/>3. Activa la "Copia de seguridad" en la configuración de la app<br/>4. Elige WiFi como opción de sincronización para no gastar datos<br/><br/>Una vez activado, cada foto que tomes se guarda automáticamente. Si pierdes el celular, todas tus fotos seguirán disponibles.`
  },

  /* ─── EDUCACIÓN Y TRABAJO DIGITAL ─── */
  {
    claves: ['estudiar online', 'curso online', 'aprender online', 'educacion virtual', 'clases virtuales', 'plataformas educativas'],
    r: `Plataformas gratuitas para <strong>aprender en línea</strong>:<br/><br/>• <strong>YouTube:</strong> tutoriales de todo tipo, desde cocina hasta programación<br/>• <strong>Duolingo:</strong> aprende idiomas gratis desde tu celular<br/>• <strong>Khan Academy:</strong> matemáticas, ciencias e historia gratuitas<br/>• <strong>Coursera y edX:</strong> cursos universitarios (algunos gratis para auditoría)<br/>• <strong>Google Actívate:</strong> cursos de tecnología y negocios gratuitos<br/><br/>Solo necesitas una cuenta de correo electrónico para acceder a la mayoría.`
  },
  {
    claves: ['trabajo online', 'empleo digital', 'freelance', 'ganar dinero internet', 'trabajo desde casa'],
    r: `Para <strong>trabajar desde casa usando Internet</strong>:<br/><br/>Opciones para principiantes:<br/>• <strong>Ventas en redes sociales:</strong> vende productos artesanales o locales por Facebook e Instagram<br/>• <strong>Mercado Libre:</strong> vende artículos usados o nuevos en línea<br/>• <strong>Trabajo administrativo virtual:</strong> ingreso de datos, asistencia virtual<br/><br/>Para comenzar:<br/>1. Aprende las herramientas básicas (correo, WhatsApp, redes sociales)<br/>2. Crea perfiles profesionales en redes<br/>3. Empieza con trabajos pequeños para ganar experiencia<br/><br/>TecnoRed puede ayudarte con los primeros pasos digitales.`
  },

  /* ─── TRÁMITES Y GOBIERNO ─── */
  {
    claves: ['tramites online', 'trámites online', 'gobierno digital', 'segip', 'padron electoral', 'padrón', 'impuestos online', 'servicios gobierno'],
    r: `En Bolivia puedes hacer varios <strong>trámites en línea</strong> sin hacer filas:<br/><br/>• <strong>SEGIP:</strong> segip.gob.bo → verificar identidad y carnet<br/>• <strong>Padrón Electoral:</strong> padron.oep.org.bo → consultar tu lugar de votación<br/>• <strong>Impuestos Nacionales:</strong> impuestos.gob.bo → declaraciones y facturas<br/>• <strong>RUAT:</strong> ruat.gob.bo → trámites vehiculares<br/><br/>Siempre accede desde el sitio oficial (termina en .gob.bo) y nunca desde enlaces de WhatsApp. Tus datos personales son muy valiosos.`
  },

  /* ─── SALUD DIGITAL ─── */
  {
    claves: ['informacion medica', 'buscar síntomas', 'buscar sintomas', 'salud online', 'medico online', 'consulta virtual', 'telemedicina'],
    r: `Para buscar <strong>información médica confiable</strong> en Internet:<br/><br/>Fuentes confiables:<br/>• Ministerio de Salud de Bolivia: minsalud.gob.bo<br/>• Organización Mundial de la Salud: who.int/es<br/>• MedlinePlus (en español): medlineplus.gov/spanish<br/><br/>Consejos:<br/>• No te autodiagnostiques solo con Internet<br/>• Busca síntomas generales, no diagnósticos específicos<br/>• Consulta siempre a un médico para decisiones de salud<br/>• Desconfía de remedios "milagrosos" anunciados en redes sociales<br/><br/>La información digital complementa pero nunca reemplaza una consulta médica.`
  },

  /* ─── TECNORED Y AYUDA ─── */
  {
    claves: ['tecnored', 'que es tecnored', 'sobre tecnored', 'esta plataforma', 'para que sirve tecnored'],
    r: `<strong>TecnoRed</strong> es una plataforma educativa gratuita diseñada para ayudar a personas de comunidades rurales y con poca experiencia tecnológica a aprender tecnología desde cero.<br/><br/>Fue desarrollada por <strong>Santiago Jacobs</strong> del Colegio San Agustín, Bolivia, para el Concurso Iberoamericano INFOMATRIX de SOLACYT.<br/><br/>En TecnoRed encuentras:<br/>• 12 módulos interactivos de aprendizaje<br/>• Módulos para Android e iPhone<br/>• Centro de emergencias digitales<br/>• Este asistente de IA<br/>• Todo gratis y sin registro`
  },
  {
    claves: ['ayuda', 'ayudame', 'no entiendo', 'como empiezo', 'cómo empiezo', 'desde cero', 'primer paso', 'no se nada de tecnologia'],
    r: `Para <strong>empezar desde cero con tecnología</strong>:<br/><br/>Pasos recomendados en TecnoRed:<br/>1. Ve a la sección <strong>Aprende</strong> en el menú<br/>2. Empieza con "Cómo usar el celular" (elige tu tipo)<br/>3. Luego aprende "Internet seguro"<br/>4. Después "Correo electrónico"<br/>5. Continúa con los módulos que más necesites<br/><br/>Cada módulo tiene pasos simples y puedes activar la voz para escuchar en lugar de leer. Tu progreso se guarda automáticamente.`
  },
  {
    claves: ['concurso', 'infomatrix', 'solacyt', 'iberociencias', 'proyecto cientifico', 'proyecto estudiantil'],
    r: `<strong>TecnoRed</strong> fue presentado al Concurso Iberoamericano de Proyectos Estudiantiles en Ciencia y Tecnología organizado por:<br/><br/>• <strong>SOLACYT:</strong> Sociedad Latinoamericana de Ciencia y Tecnología Aplicada A.C.<br/>• <strong>IBEROCIENCIAS:</strong> Organización Iberoamericana de Ciencias<br/>• Portal: <strong>INFOMATRIX</strong><br/><br/>El proyecto aborda la brecha digital en comunidades rurales iberoamericanas y contribuye a los ODS 4 (Educación de Calidad) y ODS 10 (Reducción de Desigualdades) de la ONU.`
  }
];

/* ─── Saludos ─── */
const SALUDOS = {
  claves: ['hola', 'buenos dias', 'buenos días', 'buenas tardes', 'buenas noches', 'buenas', 'hey', 'saludos', 'como estas', 'cómo estás', 'hi', 'hello', 'ola'],
  r: `Hola, bienvenido al asistente de <strong>TecnoRed</strong>.<br/><br/>Puedo responderte preguntas sobre tecnología en lenguaje simple. Por ejemplo:<br/><em>¿Qué es WhatsApp? · ¿Cómo creo un correo? · ¿Qué es el WiFi? · ¿Cómo evito estafas?</em><br/><br/>¿En qué puedo ayudarte hoy?`
};

const GRACIAS = {
  claves: ['gracias', 'muchas gracias', 'thank you', 'thanks', 'genial', 'perfecto', 'excelente', 'muy bien', 'me ayudaste', 'me sirvio', 'me sirvió', 'entendi', 'entendí'],
  r: `Me alegra haberte ayudado.<br/><br/>Si tienes más preguntas sobre tecnología, aquí estaré. Aprender tecnología es un proceso gradual, así que no te desesperes si algo no sale a la primera.`
};

const DESPEDIDAS = {
  claves: ['adios', 'adiós', 'hasta luego', 'chao', 'chau', 'bye', 'nos vemos', 'hasta pronto', 'hasta mañana'],
  r: `Hasta luego. Fue un gusto ayudarte.<br/><br/>Recuerda que puedes volver cuando tengas más preguntas. Sigue aprendiendo.`
};

const FALLBACKS = [
  `No encontré información específica sobre eso, pero puedo ayudarte con estos temas de tecnología:<br/><br/>• Internet y WiFi<br/>• Celulares Android e iPhone<br/>• WhatsApp, Facebook, YouTube<br/>• Correo electrónico<br/>• Seguridad digital y estafas<br/>• Google Maps y aplicaciones<br/>• Pagos digitales<br/>• Trámites en línea<br/><br/>¿Puedes reformular tu pregunta?`,
  `Esa pregunta está fuera de mi especialización. Soy un asistente de tecnología básica.<br/><br/>Prueba preguntarme: ¿Cómo creo un correo? · ¿Qué es WhatsApp? · ¿Cómo evito estafas? · ¿Cómo uso Google Maps?`,
  `No tengo esa información en mi base de conocimientos.<br/><br/>Te recomiendo buscar en Google o ir a la sección Aprende de TecnoRed donde encontrarás módulos detallados sobre los temas más importantes.`
];

let fallbackIdx = 0;

/* ══════════════════════════════════════
   MOTOR DE BÚSQUEDA
══════════════════════════════════════ */
function normalizar(t) {
  return t.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!.,;:()"']/g, '')
    .trim();
}

function buscarRespuesta(pregunta) {
  const q = normalizar(pregunta);

  if (SALUDOS.claves.some(c => q.includes(normalizar(c)))) return SALUDOS.r;
  if (GRACIAS.claves.some(c => q.includes(normalizar(c)))) return GRACIAS.r;
  if (DESPEDIDAS.claves.some(c => q.includes(normalizar(c)))) return DESPEDIDAS.r;

  let bestScore = 0;
  let bestResponse = null;

  for (const entry of KB) {
    let score = 0;
    for (const clave of entry.claves) {
      const cn = normalizar(clave);
      if (q.includes(cn)) {
        score += cn.length + 2; // bonus por coincidencia exacta
      } else {
        // coincidencia parcial por palabras
        const words = cn.split(' ');
        const matched = words.filter(w => w.length > 3 && q.includes(w));
        score += matched.length * 1.5;
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
   INTERFAZ
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

chatClear.addEventListener('click', () => {
  chatMsgs.innerHTML = '';
  appendMsg('bot', 'Conversación limpiada. ¿En qué puedo ayudarte?');
  chatSuggest.style.display = 'flex';
});

chatSuggest.addEventListener('click', e => {
  const btn = e.target.closest('.chat-suggestion');
  if (btn) { enviar(btn.dataset.q); chatSuggest.style.display = 'none'; }
});

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
    appendMsg('bot', buscarRespuesta(msg));
    scrollBottom();
    if (!chatOpen) chatBadge.style.display = 'block';
  }, delay);

  scrollBottom();
}

chatSend.addEventListener('click', () => enviar());
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') enviar(); });

function getTime() {
  const d = new Date();
  return d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
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

setTimeout(() => {
  if (!chatOpen) chatBadge.style.display = 'block';
}, 4000);

export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      faqs: "FAQs",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
    },
    home: {
      title: "Lead Generation Analysis",
      subtitle: "Extract valuable business information from any URL",
      urlPlaceholder: "Enter URL to analyze (e.g., https://example.com)",
      analyzeButton: "Analyze URL",
      analyzing: "Analyzing...",
      newAnalysis: "New Analysis",
      attemptsRemaining: "Attempts remaining",
      downloadExcel: "Download Excel",
      downloadPDF: "Download PDF",
      search: "Search...",
      noResults: "No results found",
      error: "Error analyzing URL. Please try again.",
      limitReached: "Analysis Limit Reached",
      limitMessage:
        "You have reached the maximum number of free analysis attempts (5). To continue using this service, please contact us.",
      contactButton: "Contact Us",
      table: {
        companyName: "Company Name",
        phoneNumbers: "Phone Numbers",
        websites: "Websites",
        addresses: "Addresses",
        emails: "Emails",
      },
    },
    about: {
      title: "About GenLeads",
      subtitle: "Powered by Advanced AI Technology",
      description:
        "GenLeads is a cutting-edge lead generation tool that leverages artificial intelligence to extract valuable business information from web pages. Our system analyzes URLs and provides structured data including company names, contact information, addresses, and more.",
      developerTitle: "About the Developer",
      developerName: "Software Engineer",
      developerDescription:
        "Built by a software engineer with over 8 years of experience in diverse technologies. Specialized in integrating artificial intelligence tools into software development, creating innovative solutions that bridge the gap between traditional programming and AI-powered automation.",
      expertise: "Areas of Expertise",
      expertiseList: [
        "Full-stack web development with modern frameworks",
        "AI integration and machine learning implementation",
        "RESTful API design and development",
        "Database architecture and optimization",
        "Cloud infrastructure and deployment",
        "Automation and intelligent data processing",
      ],
      technology: "Technology Stack",
      technologyDescription:
        "This application is built with Next.js 15, TypeScript, and Tailwind CSS, representing the latest in modern web development technology. The AI-powered analysis engine processes web pages to extract structured business data with high accuracy.",
    },
    faqs: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about GenLeads",
      questions: [
        {
          question: "What is GenLeads?",
          answer:
            "GenLeads is an AI-powered tool that analyzes web pages to extract business lead information. Simply provide a URL, and our system will extract company names, phone numbers, emails, addresses, and websites from the page.",
        },
        {
          question: "How many analyses can I perform?",
          answer:
            "Free users can perform up to 5 URL analyses. After reaching this limit, please contact us to discuss continued access or premium options.",
        },
        {
          question: "What types of URLs can I analyze?",
          answer:
            "You can analyze any publicly accessible web page that contains business listings or company information. The system works best with business directories, company listing pages, and industry-specific directories.",
        },
        {
          question: "Can I export the results?",
          answer:
            "Yes! Once the analysis is complete, you can download the results in both Excel and PDF formats for easy sharing and integration with your existing workflows.",
        },
        {
          question: "How accurate is the data extraction?",
          answer:
            "Our AI-powered system achieves high accuracy rates by using advanced pattern recognition and natural language processing. However, accuracy depends on the quality and structure of the source webpage.",
        },
        {
          question: "Is my data secure?",
          answer:
            "Yes, we take data security seriously. All analyses are processed securely, and we do not store the extracted lead information beyond the active session. Please review our Privacy Policy for more details.",
        },
        {
          question: "What happens after I reach the 5-analysis limit?",
          answer:
            "After reaching the free limit, you will see a notification with a link to contact us. We can discuss options for continued access based on your needs.",
        },
        {
          question: "How long does an analysis take?",
          answer:
            "Most analyses complete within 10-30 seconds, depending on the complexity of the webpage and the amount of data to extract.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last Updated",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing and using GenLeads, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this service.",
        },
        {
          title: "2. Description of Service",
          content:
            'GenLeads provides an AI-powered lead generation tool that analyzes web pages to extract business information. The service is provided "as is" and we reserve the right to modify or discontinue the service at any time without notice.',
        },
        {
          title: "3. Usage Limits",
          content:
            "Free users are limited to 5 URL analyses. This limit is tracked using browser local storage and resets only upon explicit reset by the user or clearing browser data. Attempting to circumvent these limits is prohibited.",
        },
        {
          title: "4. Acceptable Use",
          content:
            "You agree to use GenLeads only for lawful purposes and in accordance with these Terms. You may not use the service to: (a) violate any applicable laws or regulations; (b) infringe upon the rights of others; (c) attempt to gain unauthorized access to any systems; (d) use the service for spam or malicious purposes; (e) extract data from websites that explicitly prohibit scraping.",
        },
        {
          title: "5. Data Accuracy",
          content:
            "While we strive for accuracy in data extraction, GenLeads does not guarantee the accuracy, completeness, or reliability of any information extracted. Users are responsible for verifying all extracted information before use.",
        },
        {
          title: "6. Intellectual Property",
          content:
            "The GenLeads platform, including its design, functionality, and underlying technology, is the intellectual property of the developer. Users retain ownership of data they input and extract through the service.",
        },
        {
          title: "7. Limitation of Liability",
          content:
            "GenLeads and its developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. This includes but is not limited to data accuracy issues, service interruptions, or any damages resulting from use of extracted data.",
        },
        {
          title: "8. Privacy",
          content:
            "Your use of GenLeads is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of information.",
        },
        {
          title: "9. Modifications to Terms",
          content:
            "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the service after changes are posted constitutes acceptance of the modified terms.",
        },
        {
          title: "10. Termination",
          content:
            "We reserve the right to terminate or suspend access to the service immediately, without prior notice or liability, for any reason, including breach of these Terms.",
        },
        {
          title: "11. Governing Law",
          content:
            "These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions.",
        },
        {
          title: "12. Contact Information",
          content:
            "For questions about these Terms of Service, please contact us through the contact information provided on our website.",
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated",
      sections: [
        {
          title: "1. Information We Collect",
          content:
            "GenLeads collects minimal information to provide its service. We collect: (a) URLs you submit for analysis; (b) Usage data stored in your browser's local storage (analysis attempt counter); (c) Basic analytics data such as page views and feature usage.",
        },
        {
          title: "2. How We Use Your Information",
          content:
            "The information we collect is used solely to: (a) Provide the lead generation analysis service; (b) Enforce usage limits; (c) Improve our service and user experience; (d) Communicate with you about the service if you contact us.",
        },
        {
          title: "3. Data Storage and Retention",
          content:
            "GenLeads does not permanently store extracted lead information on our servers. Analysis results are: (a) Processed in real-time; (b) Displayed to you during your session; (c) Available for download in Excel or PDF format; (d) Not retained after your session ends. Your usage counter is stored locally in your browser using local storage.",
        },
        {
          title: "4. Third-Party Services",
          content:
            "GenLeads may use third-party services for: (a) Web page analysis and data extraction; (b) Analytics and service improvement; (c) Infrastructure and hosting. These services have their own privacy policies and data handling practices.",
        },
        {
          title: "5. Cookies and Local Storage",
          content:
            "We use browser local storage to track your analysis attempt counter. This data is stored locally on your device and can be cleared by clearing your browser data. We do not use tracking cookies.",
        },
        {
          title: "6. Data Security",
          content:
            "We implement reasonable security measures to protect against unauthorized access, alteration, disclosure, or destruction of data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
        },
        {
          title: "7. Your Rights",
          content:
            "You have the right to: (a) Access the information we hold about you; (b) Request deletion of your data (limited to usage counter stored locally); (c) Opt-out of any future communications; (d) Request information about our data practices.",
        },
        {
          title: "8. Children's Privacy",
          content:
            "GenLeads is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.",
        },
        {
          title: "9. Data Sharing",
          content:
            "We do not sell, trade, or otherwise transfer your information to third parties. Extracted lead information is processed through our AI service provider but is not stored or used for any purpose other than providing you with analysis results.",
        },
        {
          title: "10. International Users",
          content:
            "GenLeads is operated from various locations. If you are accessing the service from outside these regions, please be aware that your information may be transferred to and processed in regions with different data protection laws.",
        },
        {
          title: "11. Changes to Privacy Policy",
          content:
            'We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
        },
        {
          title: "12. Contact Us",
          content:
            "If you have questions about this Privacy Policy or our data practices, please contact us through the contact information provided on our website.",
        },
      ],
    },
    footer: {
      copyright: "All rights reserved",
      developer: "Developed by",
      links: "Quick Links",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      faqs: "Preguntas Frecuentes",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad",
    },
    home: {
      title: "Análisis de Generación de Leads",
      subtitle: "Extrae información empresarial valiosa de cualquier URL",
      urlPlaceholder: "Ingresa la URL a analizar (ej: https://ejemplo.com)",
      analyzeButton: "Analizar URL",
      analyzing: "Analizando...",
      newAnalysis: "Nuevo Análisis",
      attemptsRemaining: "Intentos restantes",
      downloadExcel: "Descargar Excel",
      downloadPDF: "Descargar PDF",
      search: "Buscar...",
      noResults: "No se encontraron resultados",
      error: "Error al analizar la URL. Por favor, intenta de nuevo.",
      limitReached: "Límite de Análisis Alcanzado",
      limitMessage:
        "Has alcanzado el número máximo de análisis gratuitos (5). Para continuar usando este servicio, por favor contáctanos.",
      contactButton: "Contáctanos",
      table: {
        companyName: "Nombre de la Empresa",
        phoneNumbers: "Números de Teléfono",
        websites: "Sitios Web",
        addresses: "Direcciones",
        emails: "Correos Electrónicos",
      },
    },
    about: {
      title: "Acerca de GenLeads",
      subtitle: "Impulsado por Tecnología Avanzada de IA",
      description:
        "GenLeads es una herramienta de generación de leads de vanguardia que aprovecha la inteligencia artificial para extraer información empresarial valiosa de páginas web. Nuestro sistema analiza URLs y proporciona datos estructurados incluyendo nombres de empresas, información de contacto, direcciones y más.",
      developerTitle: "Acerca del Desarrollador",
      developerName: "Ingeniero de Software",
      developerDescription:
        "Construido por un ingeniero de software con más de 8 años de experiencia en diversas tecnologías. Especializado en integrar herramientas de inteligencia artificial en el desarrollo de software, creando soluciones innovadoras que cierran la brecha entre la programación tradicional y la automatización impulsada por IA.",
      expertise: "Áreas de Experiencia",
      expertiseList: [
        "Desarrollo web full-stack con frameworks modernos",
        "Integración de IA e implementación de aprendizaje automático",
        "Diseño y desarrollo de APIs RESTful",
        "Arquitectura y optimización de bases de datos",
        "Infraestructura en la nube y despliegue",
        "Automatización y procesamiento inteligente de datos",
      ],
      technology: "Stack Tecnológico",
      technologyDescription:
        "Esta aplicación está construida con Next.js 15, TypeScript y Tailwind CSS, representando lo último en tecnología de desarrollo web moderno. El motor de análisis impulsado por IA procesa páginas web para extraer datos empresariales estructurados con alta precisión.",
    },
    faqs: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre GenLeads",
      questions: [
        {
          question: "¿Qué es GenLeads?",
          answer:
            "GenLeads es una herramienta impulsada por IA que analiza páginas web para extraer información de leads empresariales. Simplemente proporciona una URL y nuestro sistema extraerá nombres de empresas, números de teléfono, correos electrónicos, direcciones y sitios web de la página.",
        },
        {
          question: "¿Cuántos análisis puedo realizar?",
          answer:
            "Los usuarios gratuitos pueden realizar hasta 5 análisis de URL. Después de alcanzar este límite, contáctanos para discutir el acceso continuo u opciones premium.",
        },
        {
          question: "¿Qué tipos de URLs puedo analizar?",
          answer:
            "Puedes analizar cualquier página web públicamente accesible que contenga listados empresariales o información de empresas. El sistema funciona mejor con directorios empresariales, páginas de listados de empresas y directorios específicos de la industria.",
        },
        {
          question: "¿Puedo exportar los resultados?",
          answer:
            "Sí, una vez que el análisis esté completo, puedes descargar los resultados en formatos Excel y PDF para compartir fácilmente e integrar con tus flujos de trabajo existentes.",
        },
        {
          question: "¿Qué tan precisa es la extracción de datos?",
          answer:
            "Nuestro sistema impulsado por IA logra altas tasas de precisión utilizando reconocimiento de patrones avanzado y procesamiento de lenguaje natural. Sin embargo, la precisión depende de la calidad y estructura de la página web fuente.",
        },
        {
          question: "¿Mis datos están seguros?",
          answer:
            "Sí, tomamos la seguridad de los datos en serio. Todos los análisis se procesan de forma segura y no almacenamos la información de leads extraída más allá de la sesión activa. Por favor revisa nuestra Política de Privacidad para más detalles.",
        },
        {
          question: "¿Qué sucede después de alcanzar el límite de 5 análisis?",
          answer:
            "Después de alcanzar el límite gratuito, verás una notificación con un enlace para contactarnos. Podemos discutir opciones de acceso continuo según tus necesidades.",
        },
        {
          question: "¿Cuánto tiempo tarda un análisis?",
          answer:
            "La mayoría de los análisis se completan en 10-30 segundos, dependiendo de la complejidad de la página web y la cantidad de datos a extraer.",
        },
      ],
    },
    terms: {
      title: "Términos de Servicio",
      lastUpdated: "Última Actualización",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            "Al acceder y usar GenLeads, aceptas y acuerdas estar vinculado por los términos y disposiciones de este acuerdo. Si no estás de acuerdo con estos términos, por favor no uses este servicio.",
        },
        {
          title: "2. Descripción del Servicio",
          content:
            'GenLeads proporciona una herramienta de generación de leads impulsada por IA que analiza páginas web para extraer información empresarial. El servicio se proporciona "tal cual" y nos reservamos el derecho de modificar o descontinuar el servicio en cualquier momento sin previo aviso.',
        },
        {
          title: "3. Límites de Uso",
          content:
            "Los usuarios gratuitos están limitados a 5 análisis de URL. Este límite se rastrea usando el almacenamiento local del navegador y se reinicia solo mediante un reinicio explícito por parte del usuario o al borrar los datos del navegador. Intentar eludir estos límites está prohibido.",
        },
        {
          title: "4. Uso Aceptable",
          content:
            "Aceptas usar GenLeads solo para propósitos legales y de acuerdo con estos Términos. No puedes usar el servicio para: (a) violar leyes o regulaciones aplicables; (b) infringir los derechos de otros; (c) intentar obtener acceso no autorizado a sistemas; (d) usar el servicio para spam o propósitos maliciosos; (e) extraer datos de sitios web que prohíben explícitamente el scraping.",
        },
        {
          title: "5. Precisión de los Datos",
          content:
            "Aunque nos esforzamos por la precisión en la extracción de datos, GenLeads no garantiza la exactitud, integridad o fiabilidad de cualquier información extraída. Los usuarios son responsables de verificar toda la información extraída antes de usarla.",
        },
        {
          title: "6. Propiedad Intelectual",
          content:
            "La plataforma GenLeads, incluyendo su diseño, funcionalidad y tecnología subyacente, es propiedad intelectual del desarrollador. Los usuarios retienen la propiedad de los datos que ingresan y extraen a través del servicio.",
        },
        {
          title: "7. Limitación de Responsabilidad",
          content:
            "GenLeads y su desarrollador no serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos resultantes de tu uso o incapacidad de usar el servicio. Esto incluye pero no se limita a problemas de precisión de datos, interrupciones del servicio o cualquier daño resultante del uso de datos extraídos.",
        },
        {
          title: "8. Privacidad",
          content:
            "Tu uso de GenLeads también está regido por nuestra Política de Privacidad. Por favor revisa nuestra Política de Privacidad para entender nuestras prácticas con respecto a la recopilación y uso de información.",
        },
        {
          title: "9. Modificaciones a los Términos",
          content:
            "Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación. Tu uso continuo del servicio después de que se publiquen los cambios constituye la aceptación de los términos modificados.",
        },
        {
          title: "10. Terminación",
          content:
            "Nos reservamos el derecho de terminar o suspender el acceso al servicio inmediatamente, sin previo aviso o responsabilidad, por cualquier motivo, incluido el incumplimiento de estos Términos.",
        },
        {
          title: "11. Ley Aplicable",
          content:
            "Estos Términos se regirán e interpretarán de acuerdo con las leyes aplicables, sin tener en cuenta sus disposiciones sobre conflictos de leyes.",
        },
        {
          title: "12. Información de Contacto",
          content:
            "Para preguntas sobre estos Términos de Servicio, contáctanos a través de la información de contacto proporcionada en nuestro sitio web.",
        },
      ],
    },
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última Actualización",
      sections: [
        {
          title: "1. Información que Recopilamos",
          content:
            "GenLeads recopila información mínima para proporcionar su servicio. Recopilamos: (a) URLs que envías para análisis; (b) Datos de uso almacenados en el almacenamiento local de tu navegador (contador de intentos de análisis); (c) Datos analíticos básicos como vistas de página y uso de funciones.",
        },
        {
          title: "2. Cómo Usamos tu Información",
          content:
            "La información que recopilamos se usa únicamente para: (a) Proporcionar el servicio de análisis de generación de leads; (b) Hacer cumplir los límites de uso; (c) Mejorar nuestro servicio y experiencia de usuario; (d) Comunicarnos contigo sobre el servicio si nos contactas.",
        },
        {
          title: "3. Almacenamiento y Retención de Datos",
          content:
            "GenLeads no almacena permanentemente la información de leads extraída en nuestros servidores. Los resultados del análisis son: (a) Procesados en tiempo real; (b) Mostrados durante tu sesión; (c) Disponibles para descarga en formato Excel o PDF; (d) No retenidos después de que termine tu sesión. Tu contador de uso se almacena localmente en tu navegador usando almacenamiento local.",
        },
        {
          title: "4. Servicios de Terceros",
          content:
            "GenLeads puede usar servicios de terceros para: (a) Análisis de páginas web y extracción de datos; (b) Analítica y mejora del servicio; (c) Infraestructura y alojamiento. Estos servicios tienen sus propias políticas de privacidad y prácticas de manejo de datos.",
        },
        {
          title: "5. Cookies y Almacenamiento Local",
          content:
            "Usamos el almacenamiento local del navegador para rastrear tu contador de intentos de análisis. Estos datos se almacenan localmente en tu dispositivo y pueden borrarse al limpiar los datos de tu navegador. No usamos cookies de rastreo.",
        },
        {
          title: "6. Seguridad de Datos",
          content:
            "Implementamos medidas de seguridad razonables para proteger contra el acceso no autorizado, alteración, divulgación o destrucción de datos. Sin embargo, ningún método de transmisión por internet es 100% seguro y no podemos garantizar seguridad absoluta.",
        },
        {
          title: "7. Tus Derechos",
          content:
            "Tienes derecho a: (a) Acceder a la información que tenemos sobre ti; (b) Solicitar la eliminación de tus datos (limitado al contador de uso almacenado localmente); (c) Optar por no recibir comunicaciones futuras; (d) Solicitar información sobre nuestras prácticas de datos.",
        },
        {
          title: "8. Privacidad de Menores",
          content:
            "GenLeads no está destinado para ser usado por menores de 13 años. No recopilamos intencionalmente información personal de menores de 13 años.",
        },
        {
          title: "9. Compartir Datos",
          content:
            "No vendemos, comerciamos ni transferimos de otra manera tu información a terceros. La información de leads extraída se procesa a través de nuestro proveedor de servicios de IA pero no se almacena ni se usa para ningún propósito que no sea proporcionarte resultados de análisis.",
        },
        {
          title: "10. Usuarios Internacionales",
          content:
            "GenLeads opera desde varias ubicaciones. Si accedes al servicio desde fuera de estas regiones, ten en cuenta que tu información puede ser transferida y procesada en regiones con leyes de protección de datos diferentes.",
        },
        {
          title: "11. Cambios a la Política de Privacidad",
          content:
            'Podemos actualizar esta Política de Privacidad de vez en cuando. Notificaremos a los usuarios de cualquier cambio material publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última Actualización".',
        },
        {
          title: "12. Contáctanos",
          content:
            "Si tienes preguntas sobre esta Política de Privacidad o nuestras prácticas de datos, contáctanos a través de la información de contacto proporcionada en nuestro sitio web.",
        },
      ],
    },
    footer: {
      copyright: "Todos los derechos reservados",
      developer: "Desarrollado por",
      links: "Enlaces Rápidos",
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang];
}

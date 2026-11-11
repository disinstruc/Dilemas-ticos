/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  LearningObjective,
  EthicalPrinciple,
  MatchingPair,
  Scenario,
  DeliberationStep,
  QuizQuestion,
} from '../types/ethics';

export const LEARNING_OBJECTIVES: LearningObjective[] = [
  {
    id: 'obj-1',
    category: 'Saber',
    title: 'Fundamentación Deontológica y Bioética',
    description:
      'Identificar y contrastar los principios éticos fundamentales (beneficencia, no maleficencia, autonomía, justicia y cuidado) en el marco de la profesión docente universitaria.',
    bloomLevel: 'Comprensión y Análisis',
  },
  {
    id: 'obj-2',
    category: 'Saber Hacer',
    title: 'Deliberación y Toma de Decisiones',
    description:
      'Aplicar la metodología deliberativa para descomponer dilemas pedagógicos reales, ponderando valores en colisión y formulando cursos de acción formativos y proporcionados.',
    bloomLevel: 'Aplicación y Evaluación',
  },
  {
    id: 'obj-3',
    category: 'Saber Ser',
    title: 'Autonomía y Conciencia Crítica',
    description:
      'Cuestionar las prácticas punitivas automáticas y asumir una postura de reflexividad permanente sobre el poder docente, la equidad sustantiva y la empatía en entornos virtuales.',
    bloomLevel: 'Valoración y Autorregulación',
  },
  {
    id: 'obj-4',
    category: 'Saber Convivir',
    title: 'Cultura de Cuidado y Confianza Académica',
    description:
      'Promover comunidades virtuales de aprendizaje seguras, inclusivas y respetuosas de la privacidad, los límites profesionales y la dignidad de cada estudiante.',
    bloomLevel: 'Integración Dialógica',
  },
];

export const ETHICAL_PRINCIPLES: EthicalPrinciple[] = [
  {
    id: 'beneficence',
    name: 'Beneficencia Pedagógica',
    greekOrLatinRoot: 'Bene facere (hacer el bien)',
    shortDescription:
      'El compromiso activo de maximizar el aprendizaje integral, el bienestar y el florecimiento intelectual y humano del estudiante.',
    academicContext:
      'En la docencia universitaria, no basta con transmitir contenidos teóricos; el principio de beneficencia exige diseñar experiencias didácticas accesibles, retroalimentar oportunamente y actuar como mediador del potencial emancipador del estudiante.',
    classroomDilemma:
      '¿Hasta qué punto el docente debe exigir estándares de excelencia que impliquen un esfuerzo desgastante para el estudiante, en aras de su beneficio profesional futuro?',
    tensionPair: 'Beneficencia vs. Autonomía',
    tensionDescription:
      'El riesgo de caer en el paternalismo pedagógico, donde el docente cree saber qué es lo mejor para el estudiante sin consultar su agencia y contexto vital.',
    goodPractices: [
      'Entregar retroalimentaciones formativas cualitativas y constructivas en un plazo razonable.',
      'Adaptar las estrategias didácticas a la diversidad de ritmos de aprendizaje.',
      'Ofrecer tutorías de acompañamiento sin menoscabar la independencia intelectual del alumno.',
    ],
    keyQuote: {
      author: 'Paulo Freire (Pedagogía de la Autonomía)',
      text: 'Enseñar no es transferir conocimiento, sino crear las posibilidades para su propia producción o construcción.',
    },
  },
  {
    id: 'non-maleficence',
    name: 'No Maleficencia',
    greekOrLatinRoot: 'Primum non nocere (lo primero es no hacer daño)',
    shortDescription:
      'La obligación ética inexcusable de abstenerse de causar daño físico, psicológico, académico o moral a los estudiantes.',
    academicContext:
      'Protege contra prácticas nocivas arraigadas en la cultura universitaria: la humillación pública en foros o sesiones sincrónicas, el etiquetamiento peyorativo, las evaluaciones punitivas caprichosas y la vulneración de la intimidad.',
    classroomDilemma:
      'Publicar las calificaciones con nombres completos o exponer errores de un estudiante en un foro público virtual para que "los demás aprendan del fallo".',
    tensionPair: 'No Maleficencia vs. Transparencia Colectiva',
    tensionDescription:
      'El afán de mostrar ejemplos reales de incorrección puede transformarse en escarnio público y bloquear la participación futura del estudiante por miedo al ridículo.',
    goodPractices: [
      'Anonimizar siempre cualquier trabajo o error previo utilizado como ejemplo didáctico.',
      'Nunca descalificar la capacidad intelectual de una persona ante sus pares.',
      'Verificar rigurosamente las pruebas antes de imputar un fraude o plagio académico.',
    ],
    keyQuote: {
      author: 'Adela Cortina (Ética de las Profesiones)',
      text: 'El profesional no es solo un técnico competente, sino alguien que contrae el deber moral de no lesionar los bienes internos de su práctica.',
    },
  },
  {
    id: 'autonomy',
    name: 'Autonomía y Agencia Estudiantil',
    greekOrLatinRoot: 'Autos (por sí mismo) + Nomos (ley/norma)',
    shortDescription:
      'El reconocimiento de los estudiantes como sujetos morales de derecho, capaces de autodeterminación, pensamiento crítico y toma de decisiones.',
    academicContext:
      'La pedagogía universitaria moderna concibe al estudiante como un adulto en formación profesional. Respetar su autonomía implica permitirle elegir rutas de profundización, escuchar sus argumentos discrepantes y promover el consentimiento informado.',
    classroomDilemma:
      '¿Debe un docente obligar al encendido ininterrumpido de cámaras web en hogares vulnerables mediante amenaza de restar puntos de asistencia?',
    tensionPair: 'Autonomía vs. Control Pedagógico',
    tensionDescription:
      'La pretensión docente de vigilar la atención versus el derecho del estudiante a resguardar la privacidad de su espacio doméstico y familiar.',
    goodPractices: [
      'Establecer acuerdos de convivencia concertados y no unilaterales al inicio del semestre.',
      'Habilitar canales alternativos de participación (chat sincrónico, foros, notas de audio).',
      'Fomentar la autoevaluación y la coevaluación genuina con rúbricas transparentes.',
    ],
    keyQuote: {
      author: 'Immanuel Kant (Crítica de la Razón Práctica)',
      text: 'Trata a la humanidad, tanto en tu persona como en la de cualquier otro, siempre como un fin y nunca meramente como un medio.',
    },
  },
  {
    id: 'justice',
    name: 'Justicia y Equidad Educativa',
    greekOrLatinRoot: 'Iustitia (dar a cada cual lo suyo)',
    shortDescription:
      'La garantía de distribución equitativa de oportunidades de aprendizaje, superando la igualdad meramente formal para atender las brechas estructurales.',
    academicContext:
      'Tratar con idénticas exigencias a estudiantes con realidades desiguales perpetúa la exclusión. La justicia pedagógica combina la imparcialidad en la evaluación con la equidad adaptativa para estudiantes trabajadores, cuidadores o con brechas de conectividad.',
    classroomDilemma:
      '¿Es justo conceder una prórroga de entrega a un estudiante que trabaja en jornada nocturna cuando otros estudiantes cumplieron a costa de su descanso personal?',
    tensionPair: 'Igualdad Formal vs. Equidad Sustantiva',
    tensionDescription:
      'La tensión entre aplicar la misma regla rígida a todos (igualitarismo ciego) frente a adaptar el proceso para asegurar igualdad real de oportunidades (justicia como equidad).',
    goodPractices: [
      'Diversificar los instrumentos de evaluación (orales, prácticos, diferidos, colaborativos).',
      'Diseñar actividades asincrónicas accesibles en formatos de bajo consumo de datos.',
      'Criterios de calificación públicos, estables y desprovistos de sesgos de simpatía o prejuicio.',
    ],
    keyQuote: {
      author: 'John Rawls (Teoría de la Justicia)',
      text: 'Las desigualdades deben estar dispuestas de modo que resulten en el mayor beneficio de los miembros menos aventajados de la sociedad.',
    },
  },
  {
    id: 'care-ethics',
    name: 'Ética del Cuidado y Relacionalidad',
    greekOrLatinRoot: 'Relacionalidad dialógica (Gilligan & Noddings)',
    shortDescription:
      'La dimensión afectiva, empática y de responsabilidad mutua que reconoce la vulnerabilidad humana inherente al acto pedagógico.',
    academicContext:
      'Supera la visión burocrática del docente como mero inspector normativo. La ética del cuidado postula que el aprendizaje ocurre dentro de vínculos de confianza, acogida y reciprocidad, donde la persona precede al trámite administrativo.',
    classroomDilemma:
      'Cómo acompañar el dolor emocional o la crisis de salud mental de un estudiante sin sobrepasar el rol docente ni asumir responsabilidades que competen a profesionales de la psicología.',
    tensionPair: 'Cuidado y Afecto vs. Límites Profesionales',
    tensionDescription:
      'El riesgo de confundir el cuidado pedagógico con la sobreinvolucración personal o la pérdida de la distancia crítica necesaria para la evaluación objetiva.',
    goodPractices: [
      'Detectar señales de alerta psicosocial y realizar derivación oportuna y cálida a bienestar universitario.',
      'Demostrar escucha activa y disponibilidad sin generar dependencias emocionales.',
      'Preservar la confidencialidad de confidencias personales que no pongan en riesgo inminente la vida.',
    ],
    keyQuote: {
      author: 'Nel Noddings (Educando para el Cuidado)',
      text: 'El objetivo de la educación debe ser el cuidado: cuidarnos a nosotros mismos, cuidar a los íntimos, cuidar a los extraños y cuidar el mundo.',
    },
  },
];

export const MATCHING_PAIRS: MatchingPair[] = [
  {
    id: 'match-1',
    concept: 'Paternalismo Pedagógico',
    principleId: 'autonomy',
    realCase:
      'Imponer un tema de investigación unilateralmente porque "el docente sabe lo que le conviene al alumno", anulando sus intereses.',
    feedback:
      '¡Correcto! El paternalismo viola la autonomía del estudiante al sustituir su capacidad reflexiva por la voluntad del docente.',
  },
  {
    id: 'match-2',
    concept: 'Equidad Sustantiva vs. Formal',
    principleId: 'justice',
    realCase:
      'Ajustar plazos y formatos para un estudiante con discapacidad visual o corte eléctrico en zona rural sin perjudicar al grupo.',
    feedback:
      '¡Exacto! La justicia educativa exige tratar desigualmente lo desigual para garantizar acceso y aprendizaje efectivo.',
  },
  {
    id: 'match-3',
    concept: 'Maleficencia por Escarnio',
    principleId: 'non-maleficence',
    realCase:
      'Leer en voz alta en una videollamada el peor párrafo de un trabajo reprobado sin anonimizarlo, generando mofa colectiva.',
    feedback:
      '¡Preciso! Causar escarnio o daño psicológico vulnera directamente el principio de no maleficencia profesional.',
  },
  {
    id: 'match-4',
    concept: 'Vínculo de Acogida Responsable',
    principleId: 'care-ethics',
    realCase:
      'Identificar apatía repentina en un alumno, enviarle un mensaje cordial de indagación y contactar a Bienestar Universitario.',
    feedback:
      '¡Excelente! La ética del cuidado se traduce en presencia atenta, escucha y activación responsable de redes de apoyo.',
  },
  {
    id: 'match-5',
    concept: 'Beneficencia Formativa',
    principleId: 'beneficence',
    realCase:
      'Construir una rúbrica analítica detallada con retroalimentaciones paso a paso que permitan rehacer y aprender del error.',
    feedback:
      '¡Muy bien! Maximizar el potencial del estudiante a través del error pedagógico es la esencia de la beneficencia.',
  },
  {
    id: 'match-6',
    concept: 'Intimidad y Entorno Doméstico',
    principleId: 'autonomy',
    realCase:
      'Sancionar con inasistencia a quien apaga su cámara por vergüenza a mostrar las condiciones habitacionales precarias de su hogar.',
    feedback:
      '¡Muy acertado! Respetar la privacidad del hogar virtual es indispensable para preservar la dignidad y autonomía.',
  },
];

export const SCENARIOS: Scenario[] = [
  {
    id: 'case-ia',
    code: 'ESC-01',
    title: 'Integridad Académica y Co-autoría con Inteligencia Artificial',
    category: 'Integridad y Tecnología',
    context:
      'En la asignatura de "Filosofía de la Educación", los estudiantes debían redactar un ensayo crítico de 2.000 palabras analizando el impacto de la exclusión social en la escuela. Mariana, una estudiante destacada de escasos recursos y proveniente de una comunidad rural cuya primera lengua es indígena, entrega un ensayo extraordinario, perfectamente redactado con sofisticados conectores formales. Una herramienta detectora de IA marca un 82% de probabilidad de generación automatizada. El reglamento institucional estipula: "Cualquier uso no autorizado de IA constituye fraude académico grave, sancionado con nota 0.0 y apertura de expediente disciplinario que puede derivar en expulsión". Al ser consultada, Mariana llora y confiesa: "Profesor, mis ideas y vivencias están ahí; usé la IA para traducir del quechua y mejorar la sintaxis porque me da terror que rechacen mi trabajo por mi forma de redactar".',
    studentVoice:
      '“Tardé semanas organizando las ideas de mi comunidad. Le pedí a la herramienta que ordenara los párrafos en español académico. No quise engañar a nadie, solo quería que mi voz sonara con la misma elegancia que la de mis compañeros citadinos.”',
    tensions: [
      'Rigor normativo institucional vs. Equidad lingüística y cultural',
      'Sanción punitiva ciega vs. Oportunidad pedagógica formativa',
      'Fiabilidad de los detectores automáticos vs. Presunción de inocencia',
    ],
    deontologicalReference:
      'Código Deontológico de la Docencia Universitaria (Cap. Integridad Académica y Justicia Epistémica).',
    options: [
      {
        id: 'opt-ia-punitive',
        label: 'A) Aplicación Estricta del Reglamento Sancionatorio',
        actionText:
          'Calificar el ensayo con nota 0.0 y remitir el caso inmediatamente a la Comisión de Disciplina Universitaria para sanción formal por fraude.',
        ethicalApproach: 'Deontologismo Formalista Rígido (Ciego al Contexto)',
        primaryPrinciple: 'Legalidad / Justicia Retributiva',
        consequencesShortTerm:
          'Se cumple el reglamento al pie de la letra. Mariana entra en pánico y riesgo de deserción académica por estigma de fraude.',
        consequencesLongTerm:
          'Mariana pierde su beca y abandona la carrera. El resto del estudiantado aprende a ocultar mejor sus huellas tecnológicas o evita compartir sus vivencias.',
        pedagogicalFeedback:
          'La justicia que ignora las asimetrías de origen se transforma en injusticia. Los detectores de IA tienen altos sesgos contra hablantes no nativos o personas que traducen ideas. Una respuesta puramente punitiva destruye el vínculo formativo y expulsa a quien más requería andamiaje pedagógico.',
        ethicalScore: {
          rigor: 4,
          empathy: 1,
          justice: 2,
          trust: 1,
        },
      },
      {
        id: 'opt-ia-permissive',
        label: 'B) Omitir el Incidente y Asignar Calificación Máxima',
        actionText:
          'Conmoverse por la situación de Mariana, ignorar el informe del software de detección y asignarle la nota más alta sin discutir el uso de la herramienta.',
        ethicalApproach: 'Benevolencia Desregulada / Paternalismo Evitativo',
        primaryPrinciple: 'Compasión Acrítica',
        consequencesShortTerm:
          'Mariana siente alivio inmediato, pero no comprende los límites éticos de la autoría académica.',
        consequencesLongTerm:
          'La estudiante no desarrolla competencias reales de redacción académica autónoma. Si otro docente detecta la misma práctica más adelante, sufrirá una sanción mayor.',
        pedagogicalFeedback:
          'Hacer caso omiso por compasión es una falsa beneficencia. No educar sobre la transparencia en el uso de herramientas tecnológicas vulnera el derecho de la estudiante a formarse como profesional íntegra y rigurosa.',
        ethicalScore: {
          rigor: 1,
          empathy: 4,
          justice: 2,
          trust: 3,
        },
      },
      {
        id: 'opt-ia-deliberative',
        label: 'C) Diálogo Pedagógico, Defensa Oral y Co-Declaración Ética',
        actionText:
          'Convocar a una tutoría formativa: solicitarle que exponga oralmente sus argumentos, revisar conjuntamente los borradores previos y el historial de prompts, y permitirle entregar una versión final que incluya una "Declaración de Uso Transparente de Tecnologías" con co-autoría conceptual.',
        ethicalApproach: 'Ética de la Responsabilidad y Mediación Formativa',
        primaryPrinciple: 'Beneficencia + Justicia Epistémica + Autonomía',
        consequencesShortTerm:
          'Mariana demuestra dominio profundo del tema en la defensa oral. Reconoce el valor de sus ideas originales y aprende a transparentar el uso de herramientas de apoyo.',
        consequencesLongTerm:
          'Se fortalece la autoconfianza y la voz académica de la estudiante. El docente puede proponer al claustro universitario la actualización de la política de IA hacia un modelo de honestidad declarativa y no punitivista.',
        pedagogicalFeedback:
          '¡Opción Óptima de Excelencia Deontológica! El error o la ambigüedad tecnológica se convierte en una experiencia pedagógica de aprendizaje ético. Se protege la integridad del conocimiento sin anular a la persona.',
        ethicalScore: {
          rigor: 5,
          empathy: 5,
          justice: 5,
          trust: 5,
        },
      },
    ],
    recommendedOptionId: 'opt-ia-deliberative',
  },
  {
    id: 'case-confidentiality',
    code: 'ESC-02',
    title: 'Confidencialidad vs. Deber de Alerta y Protección de la Vida',
    category: 'Confidencialidad y Cuidado',
    context:
      'Durante una sesión de retroalimentación individual en Zoom tras una baja drástica en sus notas, Camilo (20 años) rompe en llanto. Le confiesa al docente que se siente profundamente solo, aislado en su habitación de pensión universitaria, sin comer adecuadamente y con pensamientos recurrentes de que "no vale la pena seguir viviendo". Al ver la alarma del profesor, Camilo suplica con angustia: "Profesor, por favor júreme por su familia que esto no sale de aquí. Si usted llama a la universidad o a mis padres, me van a encerrar o me expulsarán y no me lo perdonaría; solo confío en usted porque es el único docente que nos trata como personas".',
    studentVoice:
      '“Si traiciona mi confianza y le cuenta a Bienestar o a mi familia, nunca más volveré a abrirme con nadie en esta vida.”',
    tensions: [
      'Secreto profesional / Confianza depositada vs. Deber de salvaguardar la vida',
      'Autonomía de la voluntad del estudiante vs. Principio de No Maleficencia por omisión',
      'Límites del rol docente vs. Intervención en crisis de salud mental',
    ],
    deontologicalReference:
      'Protocolos de Prevención de la Conducta Suicida y Ley de Protección de la Salud Mental en el Ámbito Educativo.',
    options: [
      {
        id: 'opt-conf-silence',
        label: 'A) Guardar Silencio Absoluto y Asumir la Consejería Personal',
        actionText:
          'Prometerle mantener el secreto total para no quebrar el vínculo de confianza, dándole su número de celular personal para que le escriba cuando tenga crisis.',
        ethicalApproach: 'Lealtad Ciega / Sobreinvolucración Profesional',
        primaryPrinciple: 'Confidencialidad Malentendida',
        consequencesShortTerm:
          'Camilo se siente aliviado temporalmente, pero el docente se carga con una responsabilidad clínica para la cual no está habilitado.',
        consequencesLongTerm:
          'Si la crisis se agudiza y ocurre un desenlace fatal, el docente incurre en omisión culposa grave del deber de auxilio y negligencia ética inexcusable.',
        pedagogicalFeedback:
          'El secreto profesional docente tiene un límite ético y jurídico inviolable: el riesgo inminente para la vida o integridad de la persona. Un docente no es terapeuta y no debe actuar en solitario ante ideaciones suicidas.',
        ethicalScore: {
          rigor: 1,
          empathy: 3,
          justice: 1,
          trust: 2,
        },
      },
      {
        id: 'opt-conf-cold-referral',
        label: 'B) Derivación Burocrática Inmediata sin Contención Previa',
        actionText:
          'Cortar la conversación de inmediato diciendo que no es asunto de su materia y enviar un correo formal a Bienestar Estudiantil y a la coordinación con copia a las autoridades.',
        ethicalApproach: 'Legalismo Defensivo / Burocracia Deshumanizada',
        primaryPrinciple: 'No Maleficencia Formalista',
        consequencesShortTerm:
          'El docente se "lava las manos" administrativamente. Camilo se siente traicionado, expuesto como un expediente administrativo y se aísla aún más.',
        consequencesLongTerm:
          'Camilo evade las citas de Bienestar por vergüenza y abandona el contacto académico.',
        pedagogicalFeedback:
          'Cumplir el protocolo sin calidez humana es una forma de violencia institucional. El cuidado pedagógico exige contención empática y acompañamiento en el paso de derivación.',
        ethicalScore: {
          rigor: 4,
          empathy: 1,
          justice: 2,
          trust: 1,
        },
      },
      {
        id: 'opt-conf-warm-handover',
        label: 'C) Alianza Terapéutica Asistida y Ruptura Ética Explicada',
        actionText:
          'Validar su dolor con serenidad y explicarle con afecto: "Camilo, te aprecio demasiado como para guardar un secreto que pone en riesgo tu vida. Mi deber contigo es cuidarte. No voy a abandonarte, pero vamos a pedir ayuda juntos en este mismo instante". Permanecer con él mientras se contacta de manera prioritaria al equipo de Salud Mental Universitario.',
        ethicalApproach: 'Ética del Cuidado Responsable (Paternalismo Justificado)',
        primaryPrinciple: 'No Maleficencia + Beneficencia + Cuidado',
        consequencesShortTerm:
          'Camilo comprende que la ruptura del secreto no es una traición sino un acto de rescate y amor pedagógico. El equipo profesional asume el soporte clínico con el docente como aliado.',
        consequencesLongTerm:
          'Camilo inicia tratamiento oportuno, salva su vida y agradece que el docente no haya sido cómplice del silencio autodestructivo.',
        pedagogicalFeedback:
          '¡Decisión Sobresaliente! Se suspende el secreto estrictamente en lo necesario para preservar el bien supremo (la vida), manteniendo el respeto, la presencia y la empatía.',
        ethicalScore: {
          rigor: 5,
          empathy: 5,
          justice: 5,
          trust: 5,
        },
      },
    ],
    recommendedOptionId: 'opt-conf-warm-handover',
  },
  {
    id: 'case-equity-deadline',
    code: 'ESC-03',
    title: 'Evaluación Equitativa vs. Rigor Normativo de Plazos',
    category: 'Evaluación y Equidad',
    context:
      'Es el cierre definitivo del semestre académico y la plataforma universitaria se cerró automáticamente a las 23:59 para el envío del Proyecto de Grado o Trabajo Final (50% de la nota final). Laura, madre de dos niños pequeños y trabajadora en un hospital durante la pandemia/crisis, envía el trabajo por correo a las 02:40 a.m. explicando que en su vereda se cayó la torre de electricidad durante una tormenta eléctrica, adjuntando la fotografía del medidor y el reporte del corte del operador público. Un grupo de estudiantes en el grupo de WhatsApp colectivo del curso comienza a quejarse: "Profesor, si le recibe a Laura es injusto; nosotros nos desvelamos y dejamos de trabajar para cumplir a las 23:59. El reglamento dice que entrega extemporánea equivale a 0.0 sin excepción".',
    studentVoice:
      '“Compañeros: yo no elegí que una tormenta quemara el transformador de mi pueblo. Trabajé el turno nocturno y corrí al amanecer al primer café con internet para enviar el archivo.”',
    tensions: [
      'Justicia distributiva (trato idéntico) vs. Justicia conmutativa/equidad adaptativa',
      'Presión colectiva de los pares vs. Decisión docente fundada en derechos',
      'Flexibilidad pedagógica vs. Riesgo de arbitrariedad percibida',
    ],
    deontologicalReference:
      'Principios de Inclusión Educativa de la UNESCO y Criterios de Evaluación Formativa Auténtica.',
    options: [
      {
        id: 'opt-eq-refusal',
        label: 'A) Rechazar la Entrega para Sentar Precedente de Rigor',
        actionText:
          'Negarse a recibir el trabajo extemporáneo y aplicar la nota 0.0, argumentando que "las reglas del silabo aplican con la misma vara a todos los estudiantes sin excepción".',
        ethicalApproach: 'Legalismo Igualitarista Ciego',
        primaryPrinciple: 'Justicia Formal Retributiva',
        consequencesShortTerm:
          'Se apacigua el reclamo de los estudiantes intransigentes. Laura pierde la asignatura y debe pagar un semestre adicional.',
        consequencesLongTerm:
          'Se perpetúa la brecha de exclusión para estudiantes trabajadores o de áreas rurales. El curso normaliza que la empatía no tiene cabida en la universidad.',
        pedagogicalFeedback:
          'Confundir igualdad con equidad es uno de los mayores sesgos docentes. Dar exactamente lo mismo a quienes viven condiciones radicalmente dispares es perpetuar la injusticia.',
        ethicalScore: {
          rigor: 3,
          empathy: 1,
          justice: 2,
          trust: 1,
        },
      },
      {
        id: 'opt-eq-secret-pass',
        label: 'B) Recibir el Trabajo en Secreto sin Explicación Pública',
        actionText:
          'Aceptar el trabajo de Laura a escondidas por correo privado y ponerle buena nota, pero decirle al grupo que "ella cumplió con los trámites correspondientes" sin aclarar nada más.',
        ethicalApproach: 'Concesión Clandestina / Falta de Transparencia',
        primaryPrinciple: 'Benevolencia no Transparente',
        consequencesShortTerm:
          'Laura pasa la materia, pero en el grupo se instala la sospecha de favoritismo, opacidad y amiguismo docente.',
        consequencesLongTerm:
          'Se deteriora la legitimidad de las calificaciones del profesor. Los estudiantes pierden la fe en la transparencia evaluativa.',
        pedagogicalFeedback:
          'Aunque la intención de ayudar fue buena, la falta de transparencia deontológica (Principio de Publicidad) lesiona la confianza comunitaria.',
        ethicalScore: {
          rigor: 2,
          empathy: 3,
          justice: 2,
          trust: 2,
        },
      },
      {
        id: 'opt-eq-institutional-equity',
        label: 'C) Aplicar Protocolo de Equidad Documentada y Pedagogía Colectiva',
        actionText:
          'Revisar la evidencia verificable de fuerza mayor aportada por Laura, recibir el trabajo para evaluación plena con base en la rúbrica y publicar en el foro general un comunicado pedagógico sobre Equidad, Fuerza Mayor y Criterios Institucionales de Inclusión, recordando que las mismas garantías amparan a cualquier estudiante ante imprevistos justificados.',
        ethicalApproach: 'Justicia como Equidad y Pedagogía Dialógica',
        primaryPrinciple: 'Justicia Distributiva + Transparencia + Equidad',
        consequencesShortTerm:
          'Laura es evaluada justamente por sus méritos académicos. El grupo comprende la distinción entre negligencia y causa de fuerza mayor certificada.',
        consequencesLongTerm:
          'El grupo aprende un modelo de ciudadanía democrática y solidaridad institucional. Se crea jurisprudencia docente sana para futuras cohortes.',
        pedagogicalFeedback:
          '¡Excelente Gestión Ética! Se armoniza la justicia sustantiva con el principio de publicidad y transparencia académica, transformando un conflicto de pares en una lección ciudadana.',
        ethicalScore: {
          rigor: 5,
          empathy: 5,
          justice: 5,
          trust: 5,
        },
      },
    ],
    recommendedOptionId: 'opt-eq-institutional-equity',
  },
  {
    id: 'case-boundaries-virtual',
    code: 'ESC-04',
    title: 'Límites Profesionales, Mensajería Instantánea y Asimetría de Poder',
    category: 'Límites y Relaciones',
    context:
      'Para facilitar la comunicación ágil en un curso 100% virtual, el docente comparte su número personal y crea un grupo de WhatsApp. Con el paso de las semanas, varios estudiantes comienzan a enviar mensajes directos a las 11:30 p.m., compartiendo memes, audios de desahogo sobre otras materias y halagos al docente como "el único profesor guapo e inteligente de la facultad". El docente responde algunos mensajes con emojis cariñosos y tono informal para parecer "cercano y chévere". Días después, un estudiante que no participa en las bromas nocturnas reclama que en una entrega grupal los estudiantes que chatean de noche con el profesor recibieron mejor nota a pesar de tener un trabajo inferior.',
    studentVoice:
      '“Es evidente que aquí las notas dependen de qué tan simpático le caigas al profesor por WhatsApp de madrugada. Los que respetamos los horarios somos invisibles.”',
    tensions: [
      'Cercanía pedagógica empática vs. Erosión de los límites profesionales',
      'Uso de canales no oficiales vs. Trazabilidad y transparencia institucional',
      'Asimetría de poder docente vs. Ilusión de relación horizontal simétrica',
    ],
    deontologicalReference:
      'Código de Conducta y Buenas Prácticas en el Uso de Medios Digitales en la Docencia Superior.',
    options: [
      {
        id: 'opt-bound-double-down',
        label: 'A) Defender la Informalidad y Desestimar la Queja como Envidia',
        actionText:
          'Responder al estudiante inconforme que "en el siglo XXI la educación debe ser descontracturada y sin protocolos viejos" y que no hay favoritismos.',
        ethicalApproach: 'Negación del Sesgo y de la Asimetría de Poder',
        primaryPrinciple: 'Autocomplacencia Pedagógica',
        consequencesShortTerm:
          'La brecha de desconfianza en el aula virtual se amplía. El grupo se fragmenta en "el círculo cercano" y "los excluidos".',
        consequencesLongTerm:
          'El docente puede enfrentar investigaciones disciplinarias por acoso o trato discriminatorio. Se pierde la autoridad pedagógica.',
        pedagogicalFeedback:
          'El docente ejerce una posición de poder estructural (califica, certifica, avala). Desdibujar los límites bajo el pretexto de "cercanía" suele generar favoritismos inconscientes y desprotección para el estudiantado.',
        ethicalScore: {
          rigor: 1,
          empathy: 2,
          justice: 1,
          trust: 1,
        },
      },
      {
        id: 'opt-bound-drastic-block',
        label: 'B) Cerrar el Grupo Abruscamente y Romper Toda Comunicación',
        actionText:
          'Eliminar el grupo de WhatsApp sin previo aviso, bloquear a todos los estudiantes y anunciar que solo responderá correos institucionales una vez cada 15 días.',
        ethicalApproach: 'Reacción Punitiva Desmedida / Desconexión Reactiva',
        primaryPrinciple: 'Defensa Corporativa Brusca',
        consequencesShortTerm:
          'Los estudiantes se sienten castigados colectivamente y desatendidos en sus dudas académicas legítimas.',
        consequencesLongTerm:
          'El clima de aprendizaje se congela; se pierde la retroalimentación oportuna en el entorno virtual.',
        pedagogicalFeedback:
          'Corregir un error de límites mediante la hostilidad y el abandono pedagógico es reemplazar una imprudencia por una negligencia de beneficencia.',
        ethicalScore: {
          rigor: 3,
          empathy: 1,
          justice: 2,
          trust: 1,
        },
      },
      {
        id: 'opt-bound-reframe-contract',
        label: 'C) Reencuadre Pedagógico, Migración a Canales Institucionales y Rúbricas Ciegas',
        actionText:
          'Reconocer con madurez ante el curso que la comunicación desbordó el marco profesional. Establecer un nuevo encuadre pedagógico: migrar la interacción a los foros oficiales del LMS universitario con horarios de atención claros (ej. 8:00 a 18:00 h) y someter las evaluaciones finales a rúbricas con corrección anónima ("evaluación ciega") para garantizar total imparcialidad.',
        ethicalApproach: 'Autorregulación Ética y Justicia Restaurativa',
        primaryPrinciple: 'No Maleficencia + Justicia Procesal + Profesionalidad',
        consequencesShortTerm:
          'Se restablecen límites protectores claros y equitativos para todos. Cesa el trato preferencial percibido.',
        consequencesLongTerm:
          'Los estudiantes aprenden sobre ética comunicativa profesional en entornos digitales. El docente preserva su integridad y su rol formador de manera sólida y respetada.',
        pedagogicalFeedback:
          '¡Magistral Corrección Deontológica! El docente modela la capacidad de autocrítica ética, restituye la transparencia y asegura un trato ecuánime a través de canales institucionales trazables.',
        ethicalScore: {
          rigor: 5,
          empathy: 4,
          justice: 5,
          trust: 5,
        },
      },
    ],
    recommendedOptionId: 'opt-bound-reframe-contract',
  },
];

export const DELIBERATION_STEPS: DeliberationStep[] = [
  {
    step: 1,
    title: 'Delimitación de los Hechos',
    subtitle: 'Clarificación fáctica objetiva',
    description:
      'Distinguir los hechos comprobables de los juicios de valor, rumores, prejuicios o emociones iniciales.',
    promptQuestion: '¿Cuáles son los datos objetivos e incontestables de la situación?',
    guidingQuestions: [
      '¿Qué ocurrió exactamente y quiénes son los actores directamente involucrados?',
      '¿Qué información fáctica nos falta antes de emitir un juicio apresurado?',
      '¿Qué sesgos cognitivos o culturales propios podrían estar distorsionando nuestra mirada?',
    ],
  },
  {
    step: 2,
    title: 'Identificación de Valores y Principios en Conflicto',
    subtitle: 'El núcleo del dilema ético',
    description:
      'Un dilema no es elegir entre el bien y el mal, sino entre dos bienes legítimos que no pueden satisfacerse simultáneamente.',
    promptQuestion: '¿Qué principios o bienes éticos están colisionando en este caso?',
    guidingQuestions: [
      '¿Qué valor prioritario protege la postura A (ej. Rigor normativo, confidencialidad)?',
      '¿Qué valor fundamental defiende la postura B (ej. Equidad sustantiva, derecho a la vida)?',
      '¿Por qué no es posible cumplir ambos de manera ingenua o superficial?',
    ],
  },
  {
    step: 3,
    title: 'Exploración de Cursos de Acción',
    subtitle: 'De los extremos a las vías intermedias creativas',
    description:
      'Rechazar la falsa dicotomía del "todo o nada". Formular cursos de acción óptimos que maximicen los principios en juego con el menor daño posible.',
    promptQuestion: '¿Qué opciones intermedias o creativas integran lo mejor de ambos polos?',
    guidingQuestions: [
      '¿Cuál sería la respuesta puramente punitiva o extrema y qué daños generaría?',
      '¿Cuál sería la respuesta puramente permisiva o negligente y qué mensajes enviaría?',
      '¿Qué curso de acción intermedio protege la dignidad humana sin vulnerar la verdad ni la justicia?',
    ],
  },
  {
    step: 4,
    title: 'Pruebas de Consistencia Ética',
    subtitle: 'Test de deliberación de Diego Gracia',
    description:
      'Someter la decisión escogida al triple filtro de la racionalidad moral: legalidad, publicidad y universalidad temporal.',
    promptQuestion: '¿Supera tu decisión los tres filtros de solidez deontológica?',
    guidingQuestions: [
      'Prueba de Legalidad: ¿Respeta el marco constitucional de derechos humanos y la normativa aplicable interpretada con sentido formativo?',
      'Prueba de Publicidad: ¿Serías capaz de defender públicamente tu decisión en un claustro universitario sin sentir vergüenza u ocultamiento?',
      'Prueba de Universalidad / Tiempo: ¿Tomarías la misma decisión si tuvieras todo el tiempo del mundo y desearías que sea la norma para cualquier colega en tu situación?',
    ],
  },
];

export const PRELOADED_DELIBERATION_CASES = [
  {
    id: 'custom-case-1',
    title: 'Plagio Involuntario por Carencia Metodológica Previa',
    fact: 'Un estudiante de primer semestre proveniente de un colegio rural vulnerable copia textualmente párrafos de un artículo web en su marco teórico sin entrecomillar, pero cita la fuente en la bibliografía final. El sistema antiplagio marca 45% de similitud. La normativa pide expulsión directa por plagio.',
    values: 'Rigor y Honestidad Intelectual vs. Derecho a la Educación y Andamiaje Epistémico.',
    extreme1: 'Expulsar al alumno inmediatamente sin considerar su contexto escolar previo.',
    extreme2: 'Ponerle la máxima nota sin señalar el error grave de citación académica.',
    optimal: 'Tutoría de reescritura obligatoria con taller de normas APA, rehacer el trabajo con nota máxima limitada a 4.0 y acompañamiento en biblioteca universitaria.',
  },
  {
    id: 'custom-case-2',
    title: 'Solicitud de Revisión de Calificación en el Borde de Aprobación',
    fact: 'Una estudiante dedicada obtiene 2.9 (aprobatoria es 3.0) en el promedio final. Le faltó 0.1 para mantener la beca que sostiene a su familia. Solicita un trabajo extraordinario voluntario para ganar esa décima.',
    values: 'Imparcialidad y Justicia Evaluativa frente al Grupo vs. Compasión y Apoyo al Proyecto de Vida.',
    extreme1: 'Regalar la décima por compasión sin sustento académico alguno.',
    extreme2: 'Cerrar la puerta con frialdad tajante sin revisar si hubo errores en la corrección de rúbricas previas.',
    optimal: 'Realizar una revisión pública y detallada de los ítems con rúbrica ante la estudiante; si hubo criterios subjetivos corregirlos con rigor, o abrir para todo el curso una opción de mejora metacognitiva con idénticas oportunidades.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    caseScenario:
      'Un docente universitario descubre que un estudiante utilizó un modelo de lenguaje para traducir y esquematizar sus ideas en un ensayo argumentativo, habiendo aportado reflexiones personales originales en el contenido.',
    question: 'Desde una perspectiva bioética y deontológica docente, ¿cuál es la respuesta más adecuada?',
    options: [
      {
        id: 'q1-a',
        text: 'Expulsión automática del curso y reporte al comité de disciplina por fraude calificado.',
        isCorrect: false,
        explanation:
          'Es una respuesta desproporcionada que no distingue entre el uso instrumental de apoyo a la redacción y la suplantación fraudulenta del pensamiento.',
      },
      {
        id: 'q1-b',
        text: 'Acompañamiento pedagógico, evaluación mediante sustentación oral y exigencia de declaración transparente de co-autoría tecnológica.',
        isCorrect: true,
        explanation:
          '¡Correcto! Maximiza la beneficencia y la justicia epistémica, convirtiendo la disrupción digital en una oportunidad de autorregulación y aprendizaje ético.',
      },
      {
        id: 'q1-c',
        text: 'Ignorar por completo el uso de IA y calificar solo la ortografía resultante.',
        isCorrect: false,
        explanation:
          'Ignorar la herramienta abdica del rol docente de orientar la honestidad intelectual y la alfabetización digital crítica.',
      },
      {
        id: 'q1-d',
        text: 'Restar 2 puntos a la calificación final sin explicarle las razones al estudiante.',
        isCorrect: false,
        explanation:
          'La sanción arbitraria sin retroalimentación pedagógica vulnera el debido proceso y la no maleficencia formativa.',
      },
    ],
    theoreticalBasis: 'Código Deontológico de la Educación Superior: Honestidad Intelectual y Mediación Tecnológica.',
  },
  {
    id: 'q2',
    caseScenario:
      'Durante una videoclase grabada, un estudiante comete una equivocación conceptual evidente. El docente detiene la clase y utiliza un tono sarcástico: "Es increíble que a nivel universitario alguien diga semejante barbaridad, hasta un niño de primaria lo sabe".',
    question: '¿Qué principio ético fundamental ha sido vulnerado de manera directa en esta intervención?',
    options: [
      {
        id: 'q2-a',
        text: 'Principio de No Maleficencia (Primum non nocere)',
        isCorrect: true,
        explanation:
          '¡Correcto! Humillar, ridiculizar o dañar la integridad moral y psicológica del estudiante lesiona directamente el deber de no hacer daño.',
      },
      {
        id: 'q2-b',
        text: 'Principio de Autonomía Lingüística',
        isCorrect: false,
        explanation:
          'Aunque hay una vulneración comunicativa, el daño psicológico deliberado atenta primariamente contra la no maleficencia.',
      },
      {
        id: 'q2-c',
        text: 'Principio de Eficiencia Curricular',
        isCorrect: false,
        explanation:
          'La eficiencia no es un principio bioético fundamental, sino un criterio administrativo y de gestión.',
      },
      {
        id: 'q2-d',
        text: 'Principio de Beneficencia Selectiva',
        isCorrect: false,
        explanation:
          'La beneficencia no es selectiva; el docente tiene el deber universal de promover el desarrollo de todos.',
      },
    ],
    theoreticalBasis: 'Ética de las Profesiones Educativas (Adela Cortina): Dignidad incondicional del educando.',
  },
  {
    id: 'q3',
    caseScenario:
      'Una estudiante universitaria confiesa en tutoría privada que está sufriendo violencia intrafamiliar grave y que teme por su vida, suplicándole al docente que "no se lo cuente a ninguna autoridad porque empeorará todo".',
    question: '¿Cuál es el límite deontológico del secreto profesional docente en este escenario?',
    options: [
      {
        id: 'q3-a',
        text: 'El secreto es absoluto y nunca puede quebrantarse, bajo ninguna circunstancia.',
        isCorrect: false,
        explanation:
          'El secreto cede cuando existe amenaza real o inminente contra la vida, integridad o salud de la persona.',
      },
      {
        id: 'q3-b',
        text: 'El secreto cesa cuando está en peligro la vida o integridad física; el docente debe activar las rutas institucionales de protección informando y conteniendo con calidez a la estudiante.',
        isCorrect: true,
        explanation:
          '¡Exacto! El deber de proteger la vida y la integridad (no maleficencia por omisión) prevalece sobre la confidencialidad, debiendo hacerse con tacto y sin revictimizar.',
      },
      {
        id: 'q3-c',
        text: 'Publicar la situación en el grupo del curso para pedir colectas económicas y ayuda comunitaria.',
        isCorrect: false,
        explanation:
          'Vulneraría gravemente la privacidad e intimidad de la estudiante sin su consentimiento.',
      },
      {
        id: 'q3-d',
        text: 'Confrontar personalmente al agresor en su domicilio para exigirle que cese el maltrato.',
        isCorrect: false,
        explanation:
          'Pone en riesgo al docente y a la víctima; la intervención corresponde a autoridades judiciales y especializadas.',
      },
    ],
    theoreticalBasis: 'Deontología Profesional y Protocolos de Enfoque de Género y Derechos Humanos en la Universidad.',
  },
  {
    id: 'q4',
    caseScenario:
      'Un docente universitario exige a sus estudiantes que compren obligatoriamente un libro de su propia autoría, indicando que de ese texto saldrán las preguntas del examen y que quien no tenga el ejemplar original firmado por él perderá 20% de la nota.',
    question: '¿Qué conflicto ético deontológico evidente se presenta en este caso?',
    options: [
      {
        id: 'q4-a',
        text: 'Fomento a la lectura de bibliografía contemporánea.',
        isCorrect: false,
        explanation:
          'La prescripción coercitiva con beneficio monetario personal no es un estímulo sano a la lectura.',
      },
      {
        id: 'q4-b',
        text: 'Conflicto de interés, abuso de posición dominante y mercantilización de la evaluación pedagógica.',
        isCorrect: true,
        explanation:
          '¡Correcto! Coaccionar económicamente al alumnado para beneficio financiero personal es una falta deontológica grave contra la justicia y la dignidad pedagógica.',
      },
      {
        id: 'q4-c',
        text: 'Ejercicio legítimo de la libertad de cátedra docente.',
        isCorrect: false,
        explanation:
          'La libertad de cátedra ampara la orientación académica y científica, no el enriquecimiento personal ni la extorsión evaluativa.',
      },
      {
        id: 'q4-d',
        text: 'Garantía del principio de equidad bibliográfica.',
        isCorrect: false,
        explanation:
          'Al contrario, discrimina económicamente a los estudiantes de menores recursos que no pueden costear el texto.',
      },
    ],
    theoreticalBasis: 'Integridad Docente y Regulación de Conflictos de Interés en la Educación Superior.',
  },
  {
    id: 'q5',
    caseScenario:
      'En la metodología deliberativa de Diego Gracia, el paso de "Pruebas de Consistencia Ética" incluye el Test de Publicidad. ¿En qué consiste este filtro fundamental?',
    question: '¿Cuál es la pregunta clave que define el Test de Publicidad?',
    options: [
      {
        id: 'q5-a',
        text: '¿Cuántos "likes" o reacciones positivas obtendría mi decisión si la publico en redes sociales?',
        isCorrect: false,
        explanation:
          'La ética no se mide por la popularidad en redes o el aplauso mediático superficial.',
      },
      {
        id: 'q5-b',
        text: '¿Estaría dispuesto/a a defender públicamente las razones de mi decisión ante mi comunidad académica y la sociedad sin avergonzarme?',
        isCorrect: true,
        explanation:
          '¡Exacto! El test de publicidad evalúa la transparencia y la universalidad moral de los argumentos que sustentan el curso de acción elegido.',
      },
      {
        id: 'q5-c',
        text: '¿Cuánto dinero costaría publicar la resolución en el diario oficial del país?',
        isCorrect: false,
        explanation:
          'No se refiere a costes financieros de publicación legal o contractual.',
      },
      {
        id: 'q5-d',
        text: '¿Es una decisión aprobada previamente por el departamento de marketing institucional?',
        isCorrect: false,
        explanation:
          'La deliberación moral es un ejercicio de razón práctica, no de relaciones públicas corporativas.',
      },
    ],
    theoreticalBasis: 'Diego Gracia (Procedimientos de Decisión en Ética Clínica y Deontología Profesional).',
  },
  {
    id: 'q6',
    caseScenario:
      'Dos docentes discuten sobre la exigencia de plazos en educación virtual. El docente A dice: "A todos se les exige igual, el que no entrega a tiempo tiene 0.0; eso es igualdad". El docente B dice: "Si una estudiante de zona rural tuvo un corte de energía certificado de 48 horas, debemos ofrecerle un plazo razonable ajustado; eso es equidad".',
    question: 'A la luz de la justicia pedagógica distributiva, ¿cuál docente tiene el argumento éticamente más sólido?',
    options: [
      {
        id: 'q6-a',
        text: 'El docente A, porque las reglas deben ser inflexibles para evitar la anarquía académica.',
        isCorrect: false,
        explanation:
          'La inflexibilidad ciega confunde el igualitarismo formal con la justicia real, perjudicando a los más vulnerables.',
      },
      {
        id: 'q6-b',
        text: 'El docente B, porque la justicia como equidad reconoce las asimetrías de partida y brinda oportunidades reales para compensar desventajas involuntarias.',
        isCorrect: true,
        explanation:
          '¡Brillante! Como señala John Rawls y la pedagogía inclusiva, la equidad sustantiva consiste en tratar desigualmente lo desigual para garantizar condiciones de aprendizaje efectivas.',
      },
      {
        id: 'q6-c',
        text: 'Ninguno de los dos; lo correcto es eliminar las evaluaciones y aprobar a todos automáticamente.',
        isCorrect: false,
        explanation:
          'Eliminar la evaluación formativa despoja al estudiante del derecho a verificar y afianzar sus aprendizajes.',
      },
      {
        id: 'q6-d',
        text: 'El docente A, porque la universidad privada no debe preocuparse por problemas de infraestructura pública.',
        isCorrect: false,
        explanation:
          'Toda institución educativa, pública o privada, tiene una responsabilidad social y ética con sus educandos.',
      },
    ],
    theoreticalBasis: 'Teoría de la Justicia (John Rawls) y Pedagogía Crítica de la Equidad.',
  },
];

export const PEDAGOGICAL_DECALOGUE = [
  {
    number: '01',
    title: 'Primacía de la Dignidad Humana',
    text: 'Reconocer a cada estudiante como un sujeto pleno de derechos, nunca como un número de matrícula ni un medio para el prestigio docente.',
  },
  {
    number: '02',
    title: 'Poder Docente con Autorregulación',
    text: 'Ejercer la asimetría de autoridad con humildad y cuidado, vigilando constantemente no convertir la evaluación en una herramienta punitiva o de dominación.',
  },
  {
    number: '03',
    title: 'Justicia Distributiva y Equidad Real',
    text: 'Comprender que la verdadera igualdad de oportunidades exige considerar las brechas contextuales, tecnológicas y familiares de cada estudiante.',
  },
  {
    number: '04',
    title: 'Intimidad y Privacidad en la Virtualidad',
    text: 'Respetar los espacios íntimos y domésticos de los estudiantes virtuales, evitando la vigilancia intrusiva como condición para aprender.',
  },
  {
    number: '05',
    title: 'Confidencialidad Responsable',
    text: 'Custodiar la confianza y los datos del alumnado con celo profesional, quebrantando el secreto únicamente cuando esté en peligro inminente la vida.',
  },
  {
    number: '06',
    title: 'Tecnología al Servicio de la Emancipación',
    text: 'Acompañar los desafíos de la inteligencia artificial con pedagogía crítica y diálogo formativo, superando el pánico moral punitivista.',
  },
  {
    number: '07',
    title: 'Evaluación Auténtica y Transparente',
    text: 'Establecer criterios y rúbricas públicas desde el primer día, brindando retroalimentaciones formativas que conviertan el error en aprendizaje.',
  },
  {
    number: '08',
    title: 'Límites Profesionales y Canales Institucionales',
    text: 'Cultivar cercanía empática preservando los encuadres de respeto, horarios justos y canales formales para proteger a ambas partes.',
  },
  {
    number: '09',
    title: 'Deliberación Continua en Claustro',
    text: 'No enfrentar los dilemas éticos en soledad; recurrir a comités de bioética pedagógica y diálogo colegiado con la comunidad educativa.',
  },
  {
    number: '10',
    title: 'Coherencia Testimonial y Formación Permanente',
    text: 'Enseñar con el ejemplo de la integridad, asumiendo la propia falibilidad y aprendiendo día a día con el colectivo estudiantil.',
  },
];

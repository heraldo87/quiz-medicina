const questions = [
    {
        question: "Qual é a principal vantagem das vacinas de vírus vivos atenuados em comparação com as vacinas inativadas?",
        answers: [
            { text: "Podem ser administradas a indivíduos imunossuprimidos com segurança.", correct: false, rationale: "Indivíduos imunossuprimidos não devem receber vacinas de vírus vivos, pois o patógeno enfraquecido pode causar a doença." },
            { text: "Induzem uma imunidade mais robusta e duradoura, semelhante à infecção natural.", correct: true, rationale: "Como o patógeno se replica minimamente, ele imita uma infecção real, gerando uma forte e duradoura resposta imune." },
            { text: "Não requerem uma cadeia de frio para armazenamento.", correct: false, rationale: "As vacinas de vírus vivos atenuados são geralmente sensíveis ao calor e exigem uma cadeia de frio rigorosa." },
            { text: "São compostas apenas por fragmentos do patógeno, eliminando qualquer risco de infecção.", correct: false, rationale: "Esta descrição corresponde às vacinas de subunidades. As vacinas de vírus vivos contêm o patógeno inteiro, embora enfraquecido." }
        ]
    },
    {
        question: "Qual das seguintes doenças foi a única doença humana erradicada globalmente graças à vacinação?",
        answers: [
            { text: "Poliomielite", correct: false, rationale: "A poliomielite foi eliminada em muitas regiões, mas ainda não foi erradicada globalmente." },
            { text: "Sarampo", correct: false, rationale: "O sarampo é uma doença controlável por vacina, mas surtos ainda ocorrem e ela não foi erradicada." },
            { text: "Varíola", correct: true, rationale: "A OMS declarou a varíola erradicada em 1980, um sucesso monumental da vacinação em massa." },
            { text: "Tétano", correct: false, rationale: "O tétano é controlado, mas não pode ser erradicado porque a bactéria está presente no ambiente (solo)." }
        ]
    },
    {
        question: "O que é a imunidade de coletivo (ou de rebanho)?",
        answers: [
            { text: "A transferência de anticorpos de mãe para filho durante a gravidez.", correct: false, rationale: "Isso descreve a imunidade passiva natural, que é temporária." },
            { text: "A proteção indireta de indivíduos suscetíveis quando uma alta porcentagem da população está imune.", correct: true, rationale: "A alta cobertura vacinal dificulta a circulação do patógeno, protegendo indiretamente os não vacinados." },
            { text: "A imunidade adquirida após a recuperação de uma infecção natural.", correct: false, rationale: "Isso é imunidade ativa natural, que contribui para a imunidade de rebanho, mas não a define." },
            { text: "Um tipo de vacina que contém anticorpos de vários doadores.", correct: false, rationale: "A administração de anticorpos prontos é uma forma de imunização passiva artificial." }
        ]
    },
    {
        question: "Para qual situação a imunização passiva é mais indicada?",
        answers: [
            { text: "Para gerar memória imunológica de longo prazo antes de uma viagem.", correct: false, rationale: "A imunização passiva não gera memória imunológica; para isso, a imunização ativa (vacina) é necessária." },
            { text: "Para a erradicação global de doenças infecciosas.", correct: false, rationale: "A erradicação depende da imunidade duradoura e da memória imunológica fornecidas pela imunização ativa." },
            { text: "Para fornecer proteção rápida e imediata após a exposição a um patógeno, como a raiva.", correct: true, rationale: "A ação rápida dos anticorpos pré-formados é crucial em situações de pós-exposição para neutralizar o patógeno." },
            { text: "Para substituir a necessidade de vacinas de reforço em adultos.", correct: false, rationale: "A proteção da imunização passiva é de curta duração, ao contrário dos reforços, que fortalecem a memória imunológica." }
        ]
    },
    {
        question: "As vacinas de mRNA (genéticas), como algumas usadas para a COVID-19, funcionam de que maneira?",
        answers: [
            { text: "Injetando o vírus inteiro, mas quimicamente 'morto'.", correct: false, rationale: "Isso descreve o mecanismo das vacinas inativadas." },
            { text: "Utilizando uma toxina bacteriana inativada para ensinar o corpo a neutralizá-la.", correct: false, rationale: "Este é o mecanismo das vacinas toxoides (ex: tétano)." },
            { text: "Introduzindo o patógeno enfraquecido que se replica minimamente no corpo.", correct: false, rationale: "Este é o princípio das vacinas de vírus vivos atenuados." },
            { text: "Fornecendo um código genético para que as células do próprio corpo produzam o antígeno viral.", correct: true, rationale: "O mRNA funciona como uma 'receita' que instrui nossas células a fabricar a proteína do patógeno, estimulando a resposta imune." }
        ]
    },
    {
        question: "Qual é o principal desafio logístico associado às vacinas de mRNA?",
        answers: [
            { text: "A necessidade de administração por via oral.", correct: false, rationale: "Elas são administradas por via intramuscular." },
            { text: "O alto custo de produção dos adjuvantes.", correct: false, rationale: "Embora a tecnologia seja nova, o desafio mais proeminente é o armazenamento." },
            { text: "A manutenção de uma cadeia de frio com temperaturas extremamente baixas (ultracongelamento).", correct: true, rationale: "O mRNA é uma molécula instável que requer armazenamento em temperaturas de até -80°C para não se degradar." },
            { text: "O risco de causar a doença em pacientes imunossuprimidos.", correct: false, rationale: "Este é um risco associado a vacinas de vírus vivos atenuados, não às de mRNA." }
        ]
    },
    {
        question: "Por que um paciente recebendo quimioterapia (imunossuprimido) não deve receber a vacina contra o sarampo (vírus vivo atenuado)?",
        answers: [
            { text: "Porque a vacina pode ser inativada pelos medicamentos da quimioterapia.", correct: false, rationale: "A preocupação principal não é a inativação da vacina, mas a incapacidade do sistema imune de controlar o vírus." },
            { text: "Porque o patógeno atenuado na vacina pode se replicar sem controle e causar a doença.", correct: true, rationale: "Num sistema imune deficiente, o vírus vacinal enfraquecido pode multiplicar-se e levar à doença que deveria prevenir." },
            { text: "Porque as vacinas de vírus vivos causam reações alérgicas graves nesses pacientes.", correct: false, rationale: "O risco principal é a infecção pelo vírus vacinal, não alergias." },
            { text: "Porque a vacina não seria eficaz, já que o corpo não produziria anticorpos.", correct: false, rationale: "Embora a resposta possa ser subótima, a principal razão da contraindicação é a segurança." }
        ]
    },
    {
        question: "Qual é a meta de cobertura vacinal que a maioria dos programas de imunização busca para atingir a imunidade de coletivo?",
        answers: [
            { text: "Superior a 50%", correct: false, rationale: "Esta cobertura é insuficiente para interromper a circulação da maioria dos patógenos." },
            { text: "Superior a 75%", correct: false, rationale: "Ainda pode não ser suficiente para doenças altamente contagiosas como o sarampo." },
            { text: "Superior a 95%", correct: true, rationale: "Esta alta cobertura é a meta para a maioria das vacinas, pois dificulta a circulação do patógeno, protegendo a todos." },
            { text: "Exatamente 100%", correct: false, rationale: "Alcançar 100% é logisticamente impossível e não é estritamente necessário para a imunidade de coletivo." }
        ]
    },
    {
        question: "As vacinas toxoides, como a do tétano e da difteria, protegem o indivíduo de que forma?",
        answers: [
            { text: "Impedindo a bactéria de se multiplicar no corpo.", correct: false, rationale: "A vacina não impede a colonização pela bactéria, mas neutraliza seus efeitos tóxicos." },
            { text: "Ensinando o sistema imune a reconhecer e neutralizar a toxina produzida pela bactéria.", correct: true, rationale: "O corpo aprende a produzir anticorpos contra a toxina inativada (toxoide), ficando preparado para neutralizar a toxina real." },
            { text: "Apresentando o patógeno inteiro, mas morto, para o sistema imune.", correct: false, rationale: "Esta é a descrição de uma vacina inativada." },
            { text: "Fornecendo anticorpos prontos contra a toxina.", correct: false, rationale: "Isso seria imunização passiva (soro), usada para tratamento, não para prevenção de longo prazo." }
        ]
    },
    {
        question: "Qual das seguintes opções representa uma futura direção na pesquisa de vacinas mencionada no texto?",
        answers: [
            { text: "Vacinas que usam patógenos mortos para aumentar a segurança.", correct: false, rationale: "Vacinas de patógenos mortos (inativadas) já são uma tecnologia estabelecida." },
            { text: "Vacinas terapêuticas, projetadas para tratar doenças como o câncer.", correct: true, rationale: "O texto menciona as vacinas terapêuticas como uma fronteira futura, ensinando o sistema imune a atacar células tumorais." },
            { text: "Vacinas que precisam ser administradas anualmente.", correct: false, rationale: "O objetivo da inovação é criar vacinas mais duradouras, como as universais." },
            { text: "Vacinas que requerem aplicação exclusivamente intramuscular.", correct: false, rationale: "O futuro da pesquisa inclui novas vias de administração, como sprays nasais e adesivos." }
        ]
    },
    {
    question: "Qual o tamanho típico de uma célula bacteriana procariótica em comparação a uma eucariótica?",
    answers: [
      { text: "0,2–2,0 µm vs. 10–100 µm", correct: true, rationale: "Bactérias (procariontes) têm 0,2–2 µm, enquanto eucariontes medem em média 10–100 µm." },
      { text: "5–10 µm vs. 1–5 µm", correct: false, rationale: "Esses valores não correspondem às faixas típicas de procariontes e eucariontes." },
      { text: "0,5–5 µm vs. 0,2–1,0 µm", correct: false, rationale: "Inverte as faixas de tamanho de procariontes e eucariontes." },
      { text: "10–100 µm vs. 0,2–2 µm", correct: false, rationale: "Inverte os grupos; eucariontes são maiores que bactérias." }
    ]
  },
  {
    question: "Onde ocorre a síntese proteica em bactérias?",
    answers: [
      { text: "No citoplasma, acoplada à transcrição", correct: true, rationale: "Em procariontes, transcrição e tradução ocorrem simultaneamente no citoplasma." },
      { text: "No núcleo, separada da tradução", correct: false, rationale: "Bactérias não possuem núcleo; isso ocorre em eucariontes." },
      { text: "No retículo endoplasmático rugoso", correct: false, rationale: "Organelas como o RER só existem em células eucarióticas." },
      { text: "Nos ribossomos 80S livres", correct: false, rationale: "Bactérias têm ribossomos 70S (50S+30S), não 80S." }
    ]
  },
  {
    question: "Qual a característica fundamental que diferencia bactérias Gram-positivas de Gram-negativas?",
    answers: [
      { text: "Espessura da camada de peptidoglicano", correct: true, rationale: "Gram-positivas têm parede espessa de peptidoglicano; Gram-negativas têm camada fina e membrana externa." },
      { text: "Presença de cápsula", correct: false, rationale: "Cápsula pode existir em ambos os grupos, não é critério de Gram." },
      { text: "Tamanho dos ribossomos", correct: false, rationale: "Ambos usam ribossomos 70S; a cor Gram não se baseia em ribossomos." },
      { text: "Forma celular (cocos vs. bastonetes)", correct: false, rationale: "Morfologia não determina Gram; há cocos e bacilos em ambos." }
    ]
  },
  {
    question: "Qual componente da parede celular de bactérias Gram-negativas atua como endotoxina?",
    answers: [
      { text: "Lipopolissacarídeo (LPS)", correct: true, rationale: "O LPS da membrana externa é endotoxina que pode causar choque séptico." },
      { text: "Ácido teicóico", correct: false, rationale: "Ácidos teicóicos são encontrados em Gram-positivas." },
      { text: "Peptidoglicano com ligações β-1,4", correct: false, rationale: "Peptidoglicano é estrutural, mas não atua como endotoxina." },
      { text: "Lipoteicóico", correct: false, rationale: "Lipoteicóicos são polímeros de Gram-positivas." }
    ]
  },
  {
    question: "Qual proteína forma o anel que promove a septação na fissão binária bacteriana?",
    answers: [
      { text: "FtsZ", correct: true, rationale: "A proteína FtsZ forma o 'anel Z' no centro da célula, iniciando a divisão." },
      { text: "MinC", correct: false, rationale: "MinC faz parte do sistema que evita septação nos polos, não forma o anel." },
      { text: "SlmA", correct: false, rationale: "SlmA inibe o anel Z sobre o nucleoide, mas não o forma." },
      { text: "DNA girase", correct: false, rationale: "DNA girase desenrola o DNA, não participa diretamente da septação." }
    ]
  },
  {
    question: "Qual sistema de proteínas garante que o anel de divisão bacteriano não se forme nos polos celulares?",
    answers: [
      { text: "MinCDE", correct: true, rationale: "As proteínas Min oscilam e impedem a formação do anel Z nos polos." },
      { text: "FtsKLM", correct: false, rationale: "FtsKLM não é o sistema responsável por posicionar o anel." },
      { text: "SecYEG", correct: false, rationale: "SecYEG é um complexo de translocação de proteínas, não regula septação." },
      { text: "Spo0A", correct: false, rationale: "Spo0A regula esporulação, não divisão binária rotineira." }
    ]
  },
  {
    question: "Qual método molecular é o “padrão-ouro” para determinar a filogenia bacteriana?",
    answers: [
      { text: "Sequenciamento do rRNA 16S", correct: true, rationale: "O gene do rRNA 16S tem regiões conservadas e variáveis ideais para filogenia." },
      { text: "Eletroforese em gel de proteínas", correct: false, rationale: "Eletroforese de proteínas não fornece resolução filogenética tão precisa." },
      { text: "Microscopia eletrônica de varredura", correct: false, rationale: "Microscopia mostra morfologia, não relações evolutivas em nível de gene." },
      { text: "PCR de gene da RNA polimerase", correct: false, rationale: "PCR de outros genes auxilia, mas 16S é mais padronizado." }
    ]
  },
  {
    question: "Qual estrutura bacteriana funciona como uma 'capa de invisibilidade' contra fagocitose?",
    answers: [
      { text: "Cápsula (glicocálice)", correct: true, rationale: "A cápsula polissacarídica impede a ação de fagócitos do sistema imune." },
      { text: "Flagelo", correct: false, rationale: "Flagelos conferem motilidade, não proteção direta contra fagocitose." },
      { text: "Pilí sexual", correct: false, rationale: "Pilí transferem plasmídeos, não atuam na evitação de fagocitose." },
      { text: "Ribossomo 70S", correct: false, rationale: "Ribossomos são organelas de síntese proteica, sem papel na evasão imune." }
    ]
  },
  {
    question: "Qual dos seguintes antibióticos atua inibindo a DNA girase bacteriana?",
    answers: [
      { text: "Quinolonas", correct: true, rationale: "Quinolonas (ex: ciprofloxacino) bloqueiam a DNA girase, interrompendo a replicação." },
      { text: "Penicilina", correct: false, rationale: "Penicilina inibe síntese de peptidoglicano, não a girase." },
      { text: "Macrolídeos", correct: false, rationale: "Macrolídeos inibem o ribossomo 50S, não afetam a girase." },
      { text: "Tetraciclinas", correct: false, rationale: "Tetraciclinas bloqueiam o ribossomo 30S, não a girase." }
    ]
  },
  {
    question: "O que é um endósporo bacteriano?",
    answers: [
      { text: "Uma estrutura dormente e resistente a condições extremas", correct: true, rationale: "Endósporos protegem o material genético em ambientes adversos e germinam depois." },
      { text: "Um tipo de pili que promove conjugação", correct: false, rationale: "Pili sexuais são diferentes de endósporos." },
      { text: "Uma vesícula de secreção de toxinas", correct: false, rationale: "Endósporos não secretam toxinas; são estruturas de sobrevivência." },
      { text: "Um flagelo especializado em aderência", correct: false, rationale: "Flagelos conferem motilidade; não são endósporos." }
    ]
  },
    {
    question: "Qual é a função principal das fímbrias (fimbriae) em bactérias patogênicas?",
    answers: [
      { text: "Permitir a motilidade rápida para atingir tecidos profundos.", correct: false, rationale: "A motilidade é conferida pelos flagelos, não pelas fímbrias." },
      { text: "Facilitar a adesão inicial da bactéria às células do hospedeiro.", correct: true, rationale: "As fímbrias atuam como \"velcro molecular\", prendendo a bactéria às superfícies do hospedeiro." },
      { text: "Secretar toxinas diretamente na célula-alvo.", correct: false, rationale: "A secreção de toxinas é realizada por sistemas como o T3SS, não pelas fímbrias." },
      { text: "Formar a matriz exuberante dos biofilmes.", correct: false, rationale: "A matriz do biofilme é composta por polissacarídeos e proteínas secretados, não por fímbrias." }
    ]
  },
  {
    question: "O que caracteriza um biofilme bacteriano?",
    answers: [
      { text: "Uma única célula bacteriana flutuante no meio.", correct: false, rationale: "Biofilmes são comunidades multicelulares aderidas a uma superfície." },
      { text: "Uma comunidade de bactérias unidas por uma matriz de polissacarídeos e proteínas.", correct: true, rationale: "Os biofilmes funcionam como fortalezas, protegendo as bactérias contra o sistema imune e antibióticos." },
      { text: "Bactérias que vivem exclusivamente dentro de células hospedeiras.", correct: false, rationale: "Isso descreve bactérias intracelulares; biofilmes são comunidades extracelulares." },
      { text: "Uma associação de bactérias com vírus em um mesmo nicho.", correct: false, rationale: "Biofilmes referem-se apenas à agregação bacteriana e sua matriz extracelular." }
    ]
  },
  {
    question: "Como funciona o sistema de secreção do tipo III (T3SS)?",
    answers: [
      { text: "Age como uma bomba que expulsa resíduos metabólicos.", correct: false, rationale: "T3SS não expele resíduos, mas injeta efetores na célula-alvo." },
      { text: "Forma um “anel de poro” na membrana bacteriana para exportar nutrientes.", correct: false, rationale: "Nutrientes não são exportados; o T3SS injeta proteínas tóxicas em células eucarióticas." },
      { text: "Age como uma seringa molecular, injetando proteínas efetoras diretamente na célula hospedeira.", correct: true, rationale: "O T3SS funciona como um canhão microscópico para transferência de toxinas (efetores)." },
      { text: "Libera vesículas cheias de endotoxina para o meio extracelular.", correct: false, rationale: "Endotoxinas (LPS) são liberadas na lise celular, não por vesículas do T3SS." }
    ]
  },
  {
    question: "Qual a diferença fundamental entre exotoxinas e endotoxinas bacterianas?",
    answers: [
      { text: "Exotoxinas são lipopolissacarídeos; endotoxinas são proteínas.", correct: false, rationale: "Na verdade, exotoxinas são proteínas secretadas; endotoxinas são LPS da membrana externa." },
      { text: "Exotoxinas atuam somente em bactérias Gram-positivas; endotoxinas em Gram-negativas.", correct: false, rationale: "Exotoxinas podem ser produzidas por ambos; endotoxinas são restritas às Gram-negativas." },
      { text: "Exotoxinas são lançadas ativamente pelas bactérias e sensíveis ao calor; endotoxinas são LPS liberados na lise e heat-stable.", correct: true, rationale: "Exotoxinas são proteínas específicas, enquanto endotoxinas (LPS) só são liberadas quando a célula morre." },
      { text: "Exotoxinas provocam choque séptico; endotoxinas causam destruição tecidual focal.", correct: false, rationale: "O choque séptico é característico de endotoxinas; exotoxinas têm alvos moleculares distintos." }
    ]
  },
  {
    question: "Qual componente do LPS (lipopolissacarídeo) é responsável pela atividade endotóxica?",
    answers: [
      { text: "Porção O-antígeno", correct: false, rationale: "O O-antígeno é polissacarídico e varia entre espécies; não é a principal toxina." },
      { text: "Núcleo de polissacarídeo", correct: false, rationale: "O núcleo liga as partes, mas a toxicidade está em outra região." },
      { text: "Lípido A", correct: true, rationale: "O Lípido A é a porção tóxica do endotoxina que desencadeia tempestade de citocinas." },
      { text: "Lipoteicoico", correct: false, rationale: "Lipoteicoicos são encontrados em Gram-positivas, não em LPS de Gram-negativas." }
    ]
  },
  {
    question: "Como a cápsula bacteriana contribui para a virulência?",
    answers: [
      { text: "Aumentando a geração de energia durante a infecção.", correct: false, rationale: "A cápsula não participa do metabolismo energético." },
      { text: "Protegendo contra a fagocitose pelos macrófagos.", correct: true, rationale: "A cápsula forma um “manto invisível” que dificulta o reconhecimento e a ação dos fagócitos." },
      { text: "Servindo como reservatório de nutrientes para biofilmes.", correct: false, rationale: "A cápsula é uma camada de proteção, não um compartimento de armazenamento." },
      { text: "Facilitando a transferência de plasmídeos entre bactérias.", correct: false, rationale: "A conjugação depende de pili sexuais, não da cápsula." }
    ]
  },
  {
    question: "O que é quorum sensing em bactérias?",
    answers: [
      { text: "Mecanismo de troca de material genético entre bactérias.", correct: false, rationale: "Isso descreve transferência horizontal de genes, não quorum sensing." },
      { text: "Comunicação química que coordena expressões gênicas conforme a densidade populacional.", correct: true, rationale: "Quorum sensing permite respostas em massa, como formação de biofilme ou secreção de toxinas." },
      { text: "Processo de divisão celular ativa em comunidades densas.", correct: false, rationale: "A divisão celular não é controlada por sinalização populacional dessa forma." },
      { text: "Mecanismo de resistência à penetração de antibióticos.", correct: false, rationale: "Resistência pode surgir, mas não é o mecanismo principal do quorum sensing." }
    ]
  },
  {
    question: "Qual papel têm as enzimas extracelulares secretadas por bactérias patogênicas?",
    answers: [
      { text: "Gerar energia a partir de substratos complexos.", correct: false, rationale: "Enzimas extracelulares visam degradar tecidos, não gerar ATP." },
      { text: "Degradar tecidos e abrir espaço para a invasão bacteriana.", correct: true, rationale: "São “equipes de demolição molecular” que rompem barreiras teciduais." },
      { text: "Formar as estruturas internas do sistema de secreção.", correct: false, rationale: "O sistema de secreção é montado por proteínas específicas, não pelas enzimas extracelulares." },
      { text: "Promover a replicação do DNA em altas taxas.", correct: false, rationale: "Replicação de DNA ocorre dentro da célula, não por ações extracelulares." }
    ]
  },
  {
    question: "Por que alguns antibióticos podem agravar inicialmente uma infecção por Gram-negativas?",
    answers: [
      { text: "Eles estimulam a produção de exotoxinas antes de matar a bactéria.", correct: false, rationale: "Exotoxinas são secretadas ativamente; o agravamento se deve à liberação de endotoxinas." },
      { text: "Eles causam lise celular, liberando grandes quantidades de LPS no ambiente.", correct: true, rationale: "A morte bacteriana libera endotoxina, podendo desencadear choque séptico." },
      { text: "Eles inibem a formação de biofilmes, expondo a bactéria ao sistema imune.", correct: false, rationale: "A inibição de biofilme é benéfica, não causa agravamento." },
      { text: "Eles transformam a cápsula em um escudo ainda mais resistente.", correct: false, rationale: "Antibióticos não aumentam a espessura da cápsula." }
    ]
  },
    {
    question: "Qual é a função principal das adesinas bacterianas na patogenicidade?",
    answers: [
      { text: "Iniciar a formação de biofilme ao aderir superfícies.", correct: false, rationale: "As adesinas permitem a fixação inicial, mas a matriz de biofilme é formada por polissacarídeos e DNA." },
      { text: "Permitir a fixação das bactérias às células do hospedeiro, resistindo a forças mecânicas.", correct: true, rationale: "Adesinas, como fímbrias e proteínas de superfície, atuam como âncoras para evitar que bactérias sejam removidas por fluxo de fluidos." },
      { text: "Injetar toxinas diretamente no citoplasma das células-alvo.", correct: false, rationale: "A injeção de efetores é função dos sistemas de secreção (ex: T3SS), não das adesinas." },
      { text: "Desencadear a resposta inflamatória através de ativação de macrófagos.", correct: false, rationale: "A inflamação é geralmente resultado de reconhecimento de PAMPs e liberação de toxinas/endotoxinas." }
    ]
  },
  {
    question: "Qual componente da matriz de biofilme confere proteção contra antibióticos e sistema imune?",
    answers: [
      { text: "Peptidoglicano da parede celular", correct: false, rationale: "Peptidoglicano faz parte da parede, mas não da matriz extracelular do biofilme." },
      { text: "Polissacarídeos, proteínas e DNA extracelular", correct: true, rationale: "Esses componentes formam a matriz viscosa que protege as bactérias dentro do biofilme." },
      { text: "Lipopolissacarídeo (LPS)", correct: false, rationale: "LPS é endotoxina presente na membrana externa de Gram-negativas, não principal constituyente de biofilmes." },
      { text: "Flagelos agrupados em feixes", correct: false, rationale: "Flagelos conferem motilidade, mas não compõem a matriz do biofilme." }
    ]
  },
  {
    question: "Qual enzima bacteriana converte fibrinogênio em fibrina para criar um 'abrigo' contra o sistema imune?",
    answers: [
      { text: "Hialuronidase", correct: false, rationale: "Hialuronidase degrada ácido hialurônico, facilitando a disseminação, mas não forma coágulos." },
      { text: "Colagenase", correct: false, rationale: "Colagenase quebra colágeno, auxiliando na invasão, mas não coagula proteínas." },
      { text: "Coagulase", correct: true, rationale: "Coagulase (S. aureus) converte fibrinogênio em fibrina, formando um coágulo protetor ao redor das bactérias." },
      { text: "Estreptocinase", correct: false, rationale: "Estreptocinase dissolve coágulos de fibrina, facilitando a dissiminação, não a formação de abrigo." }
    ]
  },
  {
    question: "Como funciona o sistema de secreção Tipo III (T3SS) na patogenicidade?",
    answers: [
      { text: "Libera vesículas contendo endotoxina no ambiente extracelular.", correct: false, rationale: "Endotoxinas (LPS) não são secretadas por vesículas do T3SS." },
      { text: "Injeta proteínas efetoras diretamente no citoplasma da célula hospedeira por uma agulha molecular.", correct: true, rationale: "O T3SS atua como seringa molecular, perfurando a membrana e injetando toxinas específicas." },
      { text: "Transfere DNA entre bactérias via pilus sexual.", correct: false, rationale: "Transferência de DNA é função do sistema de secreção Tipo IV (T4SS) durante conjugação." },
      { text: "Age como uma bomba para expelir resíduos metabólicos.", correct: false, rationale: "Sistemas de secreção bacterianos exportam proteínas, não resíduos metabólicos." }
    ]
  },
  {
    question: "Qual a diferença fundamental entre exotoxinas e endotoxinas bacterianas?",
    answers: [
      { text: "Exotoxinas são LPS; endotoxinas são proteínas secretadas.", correct: false, rationale: "Exotoxinas são proteínas; endotoxinas consistem em LPS." },
      { text: "Exotoxinas são específicas e sensíveis ao calor; endotoxinas (LPS) têm efeito geral e são termoestáveis.", correct: true, rationale: "Exotoxinas têm ação-alvo e se tornam toxoides; LPS são liberadas na lise e resistem a altas temperaturas." },
      { text: "Endotoxinas são secretadas ativamente pelas Gram-positivas.", correct: false, rationale: "Endotoxinas são parte da membrana externa de Gram-negativas e só são liberadas na lise." },
      { text: "Exotoxinas causam choque séptico; endotoxinas causam destruição local de tecidos.", correct: false, rationale: "Endotoxinas frequentemente desencadeiam choque séptico; exotoxinas têm alvos moleculares específicos." }
    ]
  },
  {
    question: "Qual porção do LPS é responsável pela atividade endotóxica que leva ao choque séptico?",
    answers: [
      { text: "Antígeno O", correct: false, rationale: "O antígeno O determina especificidade sorológica, mas não é a parte tóxica." },
      { text: "Núcleo de polissacarídeo", correct: false, rationale: "O núcleo conecta antígeno O ao lípido A, mas não é principal toxina." },
      { text: "Lípido A", correct: true, rationale: "Lípido A é a parte tóxica do LPS que ativa macrófagos e desencadeia tempestade de citocinas." },
      { text: "Lipoteicóico", correct: false, rationale: "Lipoteicóicos são componentes de Gram-positivas, não do LPS." }
    ]
  },
  {
    question: "Como a variação antigênica beneficia bactérias como Neisseria gonorrhoeae na evasão imune?",
    answers: [
      { text: "Alterando a estrutura do peptidoglicano para resistir a antibióticos.", correct: false, rationale: "Peptidoglicano não é alvo de variação antigênica para evadir anticorpos." },
      { text: "Modificando proteínas de superfície para escapar do reconhecimento por anticorpos previamente formados.", correct: true, rationale: "Bactérias trocam sequências de pilinas, evitando resposta imune adaptativa." },
      { text: "Produzindo cápsula que impede ligação de anticorpos.", correct: false, rationale: "Cápsula inibe fagocitose, mas variação antigênica refere-se a mudanças em epítopos." },
      { text: "Secretando proteases que destroem imunoglobulinas.", correct: false, rationale: "Proteases degradam anticorpos, mas não constituem variação antigênica." }
    ]
  },
  {
    question: "Qual proteína de Staphylococcus aureus liga-se à região Fc dos anticorpos para impedir a opsonização?",
    answers: [
      { text: "Proteína A", correct: true, rationale: "Proteína A se liga ao Fc, bloqueando o reconhecimento por fagócitos." },
      { text: "Proteína M", correct: false, rationale: "Proteína M é de Streptococcus pyogenes e inibe ativação do complemento." },
      { text: "Coagulase", correct: false, rationale: "Coagulase coagula fibrina; não interage com anticorpos." },
      { text: "Hialuronidase", correct: false, rationale: "Hialuronidase degrada ácido hialurônico, sem função direta em anticorpos." }
    ]
  },
  {
    question: "O que é quorum sensing e qual seu papel na virulência bacteriana?",
    answers: [
      { text: "Comunicação química que coordena expressão gênica conforme densidade populacional, ativando virulência em massa.", correct: true, rationale: "Sinais acumulados indicam alto número de células, desencadeando produção de toxinas e biofilme." },
      { text: "Mecanismo de resistência a antibióticos via bombeamento de drogas para fora da célula.", correct: false, rationale: "Bombas de efluxo removem antibióticos, mas não dependem de densidade celular." },
      { text: "Troca de material genético durante a conjugação bacteriana.", correct: false, rationale: "Conjugação transfere plasmídeos; não regula expressão coordenada de virulência." },
      { text: "Formação de esporos em resposta a estresse ambiental.", correct: false, rationale: "Es sporulação é mecanismo de sobrevivência, não de coordenação de virulência." }
    ]
  },
  {
    question: "Por que terapias antivirulência que bloqueiam sistemas de secreção podem ser vantajosas em relação a antibióticos convencionais?",
    answers: [
      { text: "Eliminam rapidamente todas as bactérias, prevenindo recaídas.", correct: false, rationale: "Terapias antivirulência não necessariamente matam bactérias, mas neutralizam suas armas." },
      { text: "Reduzem a pressão seletiva para resistência, pois não afetam crescimento bacteriano direto.", correct: true, rationale: "Ao inibir virulência sem matar, diminuem surgimento de cepas resistentes." },
      { text: "Aumentam a resposta inflamatória, ajudando na limpeza do patógeno.", correct: false, rationale: "A ideia é reduzir dano e inflamação, não aumentá-la." },
      { text: "Estimular a produção de exotoxinas para sobrecarregar o sistema imune.", correct: false, rationale: "Estimular produção de toxinas seria contraproducente e perigoso." }
    ]
  },
    {
    question: "Qual é o anticoagulante de escolha para hemoculturas e por quê?",
    answers: [
      { text: "EDTA, porque preserva o DNA bacteriano para testes moleculares.", correct: false, rationale: "O EDTA inibe algumas bactérias e não é recomendado para hemocultura." },
      { text: "SPS (Polianetol Sulfonato de Sódio), porque evita coagulação e inibe fagocitose/complemento.", correct: true, rationale: "O SPS preserva a viabilidade bacteriana ao inibir leucócitos e componente do complemento." },
      { text: "Heparina, porque facilita o crescimento de bactérias aeróbias.", correct: false, rationale: "A heparina não inibe o complemento e pode levar a resultados falsos-negativos." },
      { text: "Citrato, porque mantém o pH estável durante o transporte.", correct: false, rationale: "O citrato não é indicado para hemocultura; pode inibir o crescimento bacteriano." }
    ]
  },
  {
    question: "Qual meio de transporte é mais indicado para swabs de secreções respiratórias e por quê?",
    answers: [
      { text: "Meio Stuart ou Amies, pois mantêm ambiente de baixa tensão de O₂ e preservam patógenos.", correct: true, rationale: "Esses meios contêm agentes redutores que protegem tanto aeróbios quanto anaeróbios." },
      { text: "Ágar Sangue, porque é enriquecido e não seletivo.", correct: false, rationale: "Ágar Sangue é meio de cultura, não de transporte." },
      { text: "Ágar MacConkey, pois diferencia fermentadores de lactose.", correct: false, rationale: "MacConkey é seletivo e não mantém viabilidade durante o transporte." },
      { text: "Ágar Chocolate, por fornecer fatores de crescimento.", correct: false, rationale: "Chocolate é meio de cultivo, não apropriado para transporte." }
    ]
  },
  {
    question: "Na coloração de Gram, por que bactérias Gram-negativas ficam rosa/vermelhas?",
    answers: [
      { text: "Elas não retêm cristal violeta, mas absorvem safranina como contra-corante.", correct: true, rationale: "A fina camada de peptidoglicano e a membrana externa permitem a perda do violeta e captam a safranina." },
      { text: "Sua parede espessa de peptidoglicano retém apenas o corante rosa.", correct: false, rationale: "Parede grossa retém o cristal violeta (roxa), não o rosa." },
      { text: "Porque possuem ácidos teicóicos que se coram de rosa.", correct: false, rationale: "Ácidos teicóicos são de Gram-positivas e não influenciam essa coloração." },
      { text: "Devido à presença de lipopolissacarídeo que se cora de vermelho.", correct: false, rationale: "LPS não é corado diretamente; o contra-corante é a safranina." }
    ]
  },
  {
    question: "Qual é o princípio básico do método de difusão em disco (Kirby-Bauer)?",
    answers: [
      { text: "Medir o halo de inibição no ágar Mueller-Hinton para categorizar S, I ou R.", correct: true, rationale: "O diâmetro do halo é comparado a tabelas padronizadas para determinar sensibilidade." },
      { text: "Determinar a menor concentração de antibiótico que impede o crescimento em caldo.", correct: false, rationale: "Isso descreve o teste de CIM, não Kirby-Bauer." },
      { text: "Avaliar o crescimento em ágar enriquecido com diferentes pH.", correct: false, rationale: "Kirby-Bauer usa ágar Mueller-Hinton e discos de antibiótico, não variação de pH." },
      { text: "Quantificar o número de colônias formadas em presença de antibiótico.", correct: false, rationale: "Não se contabilizam colônias, mas mede-se o halo de inibição." }
    ]
  },
  {
    question: "O que a CIM (Concentração Inibitória Mínima) informa ao clínico?",
    answers: [
      { text: "A menor dose de antibiótico que causa lise das bactérias.", correct: false, rationale: "CIM inibe crescimento, não necessariamente causa lise." },
      { text: "A menor concentração de antibiótico que impede crescimento visível.", correct: true, rationale: "A CIM é o valor em µg/mL que leva à ausência de turbidez ou crescimento." },
      { text: "O diâmetro do halo de inibição no ágar.", correct: false, rationale: "Isso é medido no teste de difusão em disco, não em CIM." },
      { text: "O tempo mínimo de exposição para eficácia do antibiótico.", correct: false, rationale: "CIM não envolve tempo de exposição, mas concentração." }
    ]
  },
  {
    question: "Qual técnica identifica bactérias pela “impressão digital” proteica em minutos?",
    answers: [
      { text: "PCR em Tempo Real (qPCR)", correct: false, rationale: "qPCR detecta e quantifica DNA, não proteínas." },
      { text: "MALDI-TOF MS, pois gera espectro de massa de proteínas ribossômicas.", correct: true, rationale: "O espectro proteico funciona como assinatura única de cada espécie." },
      { text: "Coloração de Gram, por diferenciar pelas paredes celulares.", correct: false, rationale: "Gram é morfológico e leva minutos, mas não gera perfil proteico." },
      { text: "Teste de catalase, porque mede atividade enzimática.", correct: false, rationale: "Catalase é bioquímico e não fornece identificação proteica completa." }
    ]
  },
  {
    question: "Por que algumas amostras devem ser mantidas a 2–8 °C antes do processamento?",
    answers: [
      { text: "Para inibir o metabolismo bacteriano contaminante sem matar o patógeno.", correct: true, rationale: "Refrigeração retarda crescimento de comensais e preserva patógenos viáveis." },
      { text: "Para estimular a produção de endotoxinas.", correct: false, rationale: "Frio não aumenta produção de toxinas; visa conservação." },
      { text: "Para acelerar a proliferação de anaeróbios.", correct: false, rationale: "Anaeróbios sensíveis ao frio devem ser mantidos em temperatura ambiente." },
      { text: "Para fixar as células antes de colorações microscópicas.", correct: false, rationale: "Fixação é feita com corantes e solventes, não refrigeração." }
    ]
  },
  {
    question: "Em controle de qualidade de antibiograma, o que se faz se a cepa-padrão ATCC estiver fora dos limites esperados?",
    answers: [
      { text: "Libera-se o laudo normalmente, pois é isolado de controle.", correct: false, rationale: "Não se liberam resultados de pacientes até normalizar CQ." },
      { text: "Verifica-se meios, discos, incubadora e repete-se o teste de CQ antes de prosseguir.", correct: true, rationale: "É necessário investigar e corrigir falhas antes de liberar qualquer laudo." },
      { text: "Aumenta-se a concentração de antibiótico nos discos.", correct: false, rationale: "Discos são padronizados; ajuste indevido compromete todo o teste." },
      { text: "Descarta-se a amostra e solicita nova coleta ao paciente.", correct: false, rationale: "O erro está no sistema, não na amostra de paciente." }
    ]
  },
  {
    question: "Qual é a vantagem de usar VITEK® ou BD Phoenix® em vez de testes bioquímicos manuais?",
    answers: [
      { text: "Permitem identificação sem necessidade de isolado puro.", correct: false, rationale: "Ambos requerem colônia pura; facilitam e aceleram, mas não eliminam essa etapa." },
      { text: "Revelam perfil metabólico em poucas horas com leitura automatizada.", correct: true, rationale: "Sistemas automatizados miniaturizam testes e comparam perfis a bancos de dados rapidamente." },
      { text: "Identificam resistência genômica diretamente sem cultura.", correct: false, rationale: "Eles inferem resistência por perfil bioquímico, não fazem PCR." },
      { text: "Substituem completamente a necessidade de coloração de Gram.", correct: false, rationale: "Gram ainda é o primeiro passo para orientar identificação." }
    ]
  },
      {
        question: "Qual é a principal vantagem das vacinas conjugadas em comparação às vacinas de polissacarídeos puros?",
        answers: [
            { text: "Elas induzem resposta imune T-independente robusta.", correct: false, rationale: "Vacinas de polissacarídeos puros induzem principalmente resposta T-independente, fraca em crianças." },
            { text: "Geram resposta imune T-dependente, com memória imunológica duradoura.", correct: true, rationale: "O antígeno proteico conjugado permite apresentação via MHC II e geração de linfócitos B de memória." },
            { text: "Não requerem adjuvantes para induzir alto título de anticorpos.", correct: false, rationale: "Mesmo vacinas conjugadas podem se beneficiar de adjuvantes para melhorar a resposta." },
            { text: "Apresentam menor custo de produção em larga escala.", correct: false, rationale: "A conjugação química torna a produção mais complexa e cara." }
        ]
    },
    {
        question: "Em que fase de testes clínicos de vacinas se avalia principalmente a segurança e dose ideal em centenas de voluntários?",
        answers: [
            { text: "Fase I", correct: false, rationale: "Fase I avalia segurança e dose em tens de voluntários, não centenas." },
            { text: "Fase II", correct: true, rationale: "Fase II envolve centenas de voluntários para avaliar segurança, dose e resposta imune." },
            { text: "Fase III", correct: false, rationale: "Fase III testa eficácia em milhares de pessoas e monitora eventos adversos raros." },
            { text: "Fase IV", correct: false, rationale: "Fase IV ocorre após registro, monitorando efeitos a longo prazo e raros na população." }
        ]
    },
    {
        question: "Qual é o papel dos adjuvantes em vacinas de subunidades proteicas?",
        answers: [
            { text: "Inibir a resposta inflamatória para reduzir reações adversas.", correct: false, rationale: "Adjuvantes geralmente promovem, não inibem, sinais inflamatórios iniciais." },
            { text: "Aumentar a estabilidade térmica do antígeno proteico.", correct: false, rationale: "Estabilizantes podem ajudar, mas não é função principal de um adjuvante." },
            { text: "Potencializar a resposta dos linfócitos T e B, melhorando a imunogenicidade.", correct: true, rationale: "Adjuvantes ativam células apresentadoras, aumentando citocinas e coestimulação." },
            { text: "Impedir a degradação do antígeno no local de injeção.", correct: false, rationale: "Alguns sistemas de liberação lenta fazem isso, mas não é a função geral de todos os adjuvantes." }
        ]
    },
    {
        question: "Por que a cadeia de frio é crítica para a eficácia de vacinas de subunidades proteicas e mRNA?",
        answers: [
            { text: "Para manter a viabilidade do patógeno atenuado.", correct: false, rationale: "Vacinas de subunidades e mRNA não contêm patógenos vivos." },
            { text: "Para preservar a estrutura tridimensional do antígeno e evitar degradação.", correct: true, rationale: "Temperaturas controladas previnem desnaturação e degradação enzimática do antígeno ou do mRNA." },
            { text: "Para acelerar a resposta imune celular local.", correct: false, rationale: "Temperaturas baixas não aceleram a imunização; mantêm estabilidade." },
            { text: "Para reduzir a dor no local da injeção.", correct: false, rationale: "A temperatura de armazenamento não afeta diretamente a dor pós-vacinação." }
        ]
    },
    {
        question: "Qual estratégia de vacinação utilizou ‘vacinação em anel’ para interromper surtos?",
        answers: [
            { text: "Vacinação em massa em toda a população.", correct: false, rationale: "Vacinação em massa não foca nos contatos diretos do caso índice." },
            { text: "Vacinação seletiva de contatos diretos e secundários de um caso identificado.", correct: true, rationale: "O anel de imunização protege vizinhança epidemiológica para conter a transmissão." },
            { text: "Vacinação apenas de grupos de alto risco, independentemente de exposição.", correct: false, rationale: "Isso não se aplica à abordagem de anel, que é baseada em exposição." },
            { text: "Vacinação tardia após término do surto para reforço da imunidade.", correct: false, rationale: "Vacinação em anel é reativa e imediata durante o surto." }
        ]
    },
    {
        question: "Como a imunização programada em bebês previne doenças antes que ocorram exposições naturais?",
        answers: [
            { text: "Gerando anticorpos passivos transferidos pela mãe.", correct: false, rationale: "Isso descreve imunidade passiva materna, não vacinação direta." },
            { text: "Administrando doses múltiplas em intervalos definidos para induzir memória.", correct: true, rationale: "Esquemas combinam priming e reforços para otimizar anticorpos e memória B/T." },
            { text: "Expondo o bebê a formas inativadas do patógeno no ambiente doméstico.", correct: false, rationale: "Não se utiliza exposição ambiental controlada como método de vacinação." },
            { text: "Aplicando apenas uma dose alta depois dos dois anos de idade.", correct: false, rationale: "Esquemas recomendam doses iniciais e reforços em intervalos específicos, não uma única dose tardia." }
        ]
    },
    {
        question: "Qual parâmetro é usado para medir a eficácia de uma vacina em estudos de campo?",
        answers: [
            { text: "Taxa de soroconversão em voluntários de ensaios pré-clínicos.", correct: false, rationale: "Soroconversão ocorre em fases clínicas iniciais, não mede eficácia real na população." },
            { text: "Redução da incidência da doença em populações vacinadas versus não vacinadas.", correct: true, rationale: "Comparar incidência permite calcular eficácia real em condições de uso." },
            { text: "Nível de anticorpos IgM detectados logo após a dose inicial.", correct: false, rationale: "IgM é resposta aguda; não reflete proteção duradoura." },
            { text: "Quantidade de antígeno administrado por dose.", correct: false, rationale: "Dose define imunogenicidade, mas não mede eficácia epidemiológica." }
        ]
    },
    {
        question: "Por que vacinas de RNA autoamplificável (saRNA) podem reduzir a quantidade de material administrado?",
        answers: [
            { text: "Porque contêm proteínas do vetor viral já prontas.", correct: false, rationale: "saRNA não transporta componentes proteicos pré-fabricados." },
            { text: "Porque o RNA se replica no citoplasma, amplificando o antígeno produzido.", correct: true, rationale: "O saRNA inclui enzimas replicases que aumentam a síntese de mRNA antígeno no hospedeiro." },
            { text: "Porque induzem imunidade inata que dispensa resposta adaptativa.", correct: false, rationale: "Resposta inata só fornece proteção transitória; adaptativa é necessária." },
            { text: "Porque usam nanopartículas lipídicas mais densas do que as vacinas mRNA convencionais.", correct: false, rationale: "LNP melhora entrega, mas não substitui o mecanismo de amplificação do saRNA." }
        ]
    },
    {
        question: "Qual desafio ético é frequentemente debatido em programas de vacinação compulsória?",
        answers: [
            { text: "Equilíbrio entre proteção coletiva e liberdade individual.", correct: true, rationale: "Vacinação compulsória levanta questões sobre autonomia versus bem-estar público." },
            { text: "Garantir cadeia de frio para localidades remotas.", correct: false, rationale: "Esse é um desafio logístico, não um dilema ético primário." },
            { text: "Desenvolver adjuvantes sem patentes restritivas.", correct: false, rationale: "Patentes envolvem propriedade intelectual, mas não diretamente ética compulsória." },
            { text: "Produzir vacinas que não precisem de ser administradas por injeção.", correct: false, rationale: "Via de administração é inovação técnica, não uma questão ética central." }
        ]
    },
        {
        question: "Qual é a diferença fundamental entre células procarióticas e eucarióticas?",
        answers: [
            { text: "Procariontes possuem núcleo delimitado por membrana.", correct: false, rationale: "Somente eucariotos têm núcleo verdadeiro; procariontes têm nucleóide sem membrana." },
            { text: "Eucariotos apresentam mitocôndrias e complexo de Golgi, enquanto procariontes não.", correct: true, rationale: "Organelas membranosas como mitocôndrias e Golgi são exclusivas de eucariotos." },
            { text: "Procariontes possuem ribossomos 80S; eucariotos têm ribossomos 70S.", correct: false, rationale: "É o inverso: procariontes têm ribossomos 70S, eucariotos 80S." },
            { text: "Eucariotos não realizam transcrição, apenas tradução.", correct: false, rationale: "Eucariotos realizam ambas, mas em compartimentos distintos (núcleo e citoplasma)." }
        ]
    },
    {
        question: "Qual o critério principal utilizado na coloração de Gram para diferenciar bactérias?",
        answers: [
            { text: "Tipo de flagelo presente na célula.", correct: false, rationale: "A coloração de Gram baseia-se na espessura do peptidoglicano, não em flagelos." },
            { text: "Espessura da camada de peptidoglicano na parede celular.", correct: true, rationale: "Gram-positivas retêm cristal violeta pela parede espessa; Gram-negativas não." },
            { text: "Presença de cápsula externa à parede celular.", correct: false, rationale: "A cápsula não influencia a retenção do corante cristal violeta." },
            { text: "Tamanho do genoma bacteriano.", correct: false, rationale: "O genoma não é avaliado na coloração de Gram." }
        ]
    },
    {
        question: "Em que grupo taxonômico as bactérias são organizadas primeiramente?",
        answers: [
            { text: "Espécie", correct: false, rationale: "Espécie é o nível mais específico; o primeiro é domínio ou reino." },
            { text: "Gênero", correct: false, rationale: "Gênero é subsequente ao filo e família." },
            { text: "Filo", correct: false, rationale: "Filo é um nível intermediário; domínio/reino vêm antes." },
            { text: "Domínio", correct: true, rationale: "O domínio (Bacteria ou Archaea) é o nível taxonômico mais amplo nas bactérias." }
        ]
    },
    {
        question: "Qual componente molecular confere rigidez à parede celular bacteriana?",
        answers: [
            { text: "Ácido lipoteicóico", correct: false, rationale: "Lipoteicóico está presente em Gram-positivas, mas a rigidez é dada pelo peptidoglicano." },
            { text: "Peptidoglicano", correct: true, rationale: "Peptidoglicano forma malhas de cadeias de açúcares e peptídeos que conferem suporte estrutural." },
            { text: "Lipopolissacarídeo", correct: false, rationale: "LPS está na membrana externa de Gram-negativas, mas não confere rigidez estrutural generalizada." },
            { text: "Flagelina", correct: false, rationale: "Flagelina compõe flagelos, não a parede celular." }
        ]
    },
    {
        question: "Qual proteína forma o anel Z durante a septação na fissão binária bacteriana?",
        answers: [
            { text: "FtsZ", correct: true, rationale: "FtsZ polimeriza-se no centro da célula para iniciar a formação do septo." },
            { text: "MreB", correct: false, rationale: "MreB regula a forma celular, mas não forma o anel de divisão." },
            { text: "MinC", correct: false, rationale: "MinC inibe a formação do anel nos polos, mas não constitui o anel." },
            { text: "Tubulina", correct: false, rationale: "Tubulina é encontrada em eucariotos, não em bactérias." }
        ]
    },
    {
        question: "Onde está localizada a maquinaria de replicação do DNA em bactérias?",
        answers: [
            { text: "No núcleo delimitado por membrana.", correct: false, rationale: "Bactérias não têm núcleo; o DNA está no citoplasma." },
            { text: "Associada à membrana plasmática no citoplasma.", correct: true, rationale: "A região de replicação (replissoma) fica ligada à membrana interna da célula." },
            { text: "No periplasma entre membranas celular e externa.", correct: false, rationale: "O periplasma não contém o DNA ou a maquinaria de replicação." },
            { text: "Em vesículas citoplasmáticas especializadas.", correct: false, rationale: "Bactérias não têm vesículas de replicação de DNA." }
        ]
    },
    {
        question: "Qual estrutura bacteriana armazena material genético extra-chromossomal?",
        answers: [
            { text: "Ribossomos", correct: false, rationale: "Ribossomos sintetizam proteínas, não armazenam DNA extra." },
            { text: "Plasmídeos", correct: true, rationale: "Plasmídeos são moléculas circulares de DNA que carregam genes acessórios." },
            { text: "Mesossomos", correct: false, rationale: "Mesossomos são invaginações de membrana, sem DNA extra." },
            { text: "Endósporos", correct: false, rationale: "Endósporos são estruturas de resistência, não portadoras de plasmídeos." }
        ]
    },
    {
        question: "Qual a função dos ribossomos 70S em bactérias?",
        answers: [
            { text: "Processamento de lipídios na membrana.", correct: false, rationale: "Ribossomos traduzem RNA em proteínas, não participam de processamento lipídico." },
            { text: "Síntese proteica acoplada à transcrição.", correct: true, rationale: "Em bactérias, transcrição e tradução acontecem simultaneamente no citoplasma." },
            { text: "Formação de esporos durante estresse.", correct: false, rationale: "Esporulação envolve proteínas específicas, não ribossomos diretamente." },
            { text: "Ligação de plasmídeos ao cromossomo.", correct: false, rationale: "Ribossomos não interagem com DNA plasmidial." }
        ]
    },
    {
        question: "Qual mecanismo de reprodução bacteriana é mais rápido e comum?",
        answers: [
            { text: "Brotamento", correct: false, rationale: "Brotamento é raro em bactérias; fissão binária é o principal método." },
            { text: "Fissão binária", correct: true, rationale: "Na fissão binária, a célula duplica seu DNA e se divide em duas células-filhas idênticas." },
            { text: "Conjugação", correct: false, rationale: "Conjugação transfere DNA entre células, mas não gera nova célula por si só." },
            { text: "Fragmentação", correct: false, rationale: "Fragmentação não é um mecanismo de reprodução bacteriana natural." }
        ]
    },
    {
        question: "Como os endósporos bacterianos conferem resistência a condições extremas?",
        answers: [
            { text: "Produzindo camadas adicionais de peptidoglicano.", correct: false, rationale: "A resistência vem de múltiplas camadas de proteínas e dipicolinato de cálcio, não só peptidoglicano." },
            { text: "Desidratando o citoplasma e acumulando cálcio-dipicolinato no núcleo.", correct: true, rationale: "A baixa umidade e o complexo Ca²⁺-dipicolinato estabilizam DNA e proteínas contra calor e química." },
            { text: "Aumentando a divisão celular rápida para escapar do estresse.", correct: false, rationale: "Esporulação é desaceleração do metabolismo, não divisão acelerada." },
            { text: "Formando biofilmes densos ao redor da célula.", correct: false, rationale: "Biofilme não protege células individuais com resistência comparável aos endósporos." }
        ]
    },
     {
        question: "Qual caminho metabólico bacteriano ocorre no citoplasma e gera ATP por fosforilação por nível de substrato sem envolver oxigênio?",
        answers: [
            { text: "Ciclo de Krebs", correct: false, rationale: "O ciclo de Krebs ocorre no citoplasma em bactérias, mas gera NADH/FADH₂, não ATP por nível de substrato como via glicolítica." },
            { text: "Glicólise (via Embden–Meyerhof–Parnas)", correct: true, rationale: "Na glicólise, no citoplasma, há geração direta de ATP por fosforilação em nível de substrato, independentemente de oxigênio." },
            { text: "Cadeia de transporte de elétrons", correct: false, rationale: "A cadeia de transporte gera ATP via quimiosmose, não por nível de substrato." },
            { text: "Fermentação alcoólica", correct: false, rationale: "A fermentação regenera NAD⁺ mas não gera ATP além dos dois da glicólise." }
        ]
    },
    {
        question: "Em bactérias gram-negativas, qual via metabólica alternativa à glicólise clássica produz piruvato e NADPH?",
        answers: [
            { text: "Via das pentoses fosfato", correct: false, rationale: "Essa via produz ribose-5-P e NADPH, mas não rende piruvato diretamente." },
            { text: "Via Entner–Doudoroff", correct: true, rationale: "A via Entner–Doudoroff converge em piruvato e G3P, gerando NADPH e ATP em bactérias gram-negativas." },
            { text: "Ciclo de Calvin", correct: false, rationale: "O ciclo de Calvin fixa CO₂, não cataboliza glicose." },
            { text: "Fermentação láctica", correct: false, rationale: "Produz lactato e regenera NAD⁺, não gera NADPH." }
        ]
    },
    {
        question: "Onde ocorre a fosforilação oxidativa nas bactérias e qual é o aceitador final de elétrons em aeróbios?",
        answers: [
            { text: "Membrana plasmática e oxigênio molecular (O₂)", correct: true, rationale: "Bactérias não têm mitocôndria; a cadeia de transporte fica na membrana plasmática e o O₂ é o último aceitador em aeróbios." },
            { text: "Citoplasma e nitrato (NO₃⁻)", correct: false, rationale: "O nitrato pode ser aceitador em respiração anaeróbia, mas a fosforilação oxidativa primeiramente é via membrana." },
            { text: "Periplasma e sulfato (SO₄²⁻)", correct: false, rationale: "O sulfato pode aceitar elétrons em algumas bactérias anaeróbias, mas não ocorre no periplasma." },
            { text: "Mesossomos e CO₂", correct: false, rationale: "Mesossomos são estruturas artificiais; CO₂ não é aceitador de elétrons na respiração." }
        ]
    },
    {
        question: "Qual é a principal diferença entre fermentação homolática e heterolática em bactérias?",
        answers: [
            { text: "Homolática produz apenas etanol; heterolática produz ácido lático e etanol.", correct: false, rationale: "Fermentação homolática gera lactato; fermentação etanólica gera etanol e CO₂." },
            { text: "Homolática gera lactato como único produto; heterolática gera lactato, etanol e CO₂.", correct: true, rationale: "Na fermentação homolática Lactobacillus gera só lactato; na heterolática há múltiplos produtos." },
            { text: "Homolática requer O₂; heterolática é estritamente anaeróbia.", correct: false, rationale: "Ambas são anaeróbias facultativas e não utilizam O₂." },
            { text: "Homolática produce NADPH; heterolática produz ATP.", correct: false, rationale: "Nenhuma gera NADPH; ambas regeneram NAD⁺ com produção modesta de ATP." }
        ]
    },
    {
        question: "Qual molécula atua como coenzima essencial em muitas reações de oxi-redução no metabolismo bacteriano?",
        answers: [
            { text: "ATP", correct: false, rationale: "ATP é transportador de energia, mas não coenzima em reações de oxi-redução." },
            { text: "NAD⁺/NADH", correct: true, rationale: "O NAD⁺ aceita elétrons e se reduz a NADH, participando de numerosas reações de desidrogenação." },
            { text: "FAD/FADH₂", correct: false, rationale: "Embora também atue em algumas reações, a principal e mais onipresente é NAD⁺." },
            { text: "Coenzima A", correct: false, rationale: "CoA transporta grupos acila, mas não catalisa reações redox." }
        ]
    },
    {
        question: "O que é um operon lac em bactérias e como ele regula a expressão gênica?",
        answers: [
            { text: "Conjunto de genes de resistência a antibióticos ativado por tetraciclina", correct: false, rationale: "Isso descreve o operador tetR, não o operon lac." },
            { text: "Conjunto de genes para metabolizar lactose, regulados por repressor que se liga ao operador", correct: true, rationale: "O operon lac contém lacZYA; em ausência de lactose o repressor LacI bloqueia transcrição." },
            { text: "Gene singular para a bomba de efluxo de lactose", correct: false, rationale: "São três genes e um operador, não um gene único." },
            { text: "Sistema de quorum sensing para detecção de lactose na população", correct: false, rationale: "Quorum sensing envolve sinalizador autoindutor, não o operon lac específico." }
        ]
    },
    {
        question: "Qual mecanismo de troca genética bacteriana envolve incorporação direta de DNA livre do ambiente?",
        answers: [
            { text: "Conjugação", correct: false, rationale: "Conjugação exige contato célula-célula via pili sexual." },
            { text: "Transdução", correct: false, rationale: "Transdução é mediada por bacteriófagos, não DNA livre." },
            { text: "Transformação", correct: true, rationale: "Na transformação, bactérias competentes captam fragmentos de DNA livre do meio e os incorporam." },
            { text: "Mutação por transposon", correct: false, rationale: "Transposição ocorre dentro do genoma, não pela incorporação de DNA exógeno." }
        ]
    },
    {
        question: "Durante a conjugação bacteriana mediada por plasmídeo F, qual estrutura conecta as duas células?",
        answers: [
            { text: "Operon lac", correct: false, rationale: "Operon lac regula metabolismo de lactose, não conjugação." },
            { text: "Pilina F (pili sexuais)", correct: true, rationale: "O plasmídeo F codifica genes para formação de pili que estabelecem ponte citoplasmática." },
            { text: "Membrana dupla", correct: false, rationale: "Bactérias gram-negativas têm duas membranas, mas a conexão é via pílus." },
            { text: "Transposase", correct: false, rationale: "Transposase catalisa transposição, não a conjugação." }
        ]
    },
    {
        question: "O que caracteriza uma transdução generalizada em bactérias?",
        answers: [
            { text: "Incorporação de DNA viral em sítio específico do genoma", correct: false, rationale: "Isso define transdução especializada, não generalizada." },
            { text: "Transferência de fragmentos aleatórios de DNA bacteriano por fagos líticos", correct: true, rationale: "Na transdução generalizada qualquer gene pode ser empacotado acidentalmente em partículas fagais." },
            { text: "Movimentação de genes por meio de plasmídeos conjugativos", correct: false, rationale: "Isso é conjugação, não transdução." },
            { text: "Formação de endósporos contendo DNA exógeno", correct: false, rationale: "Endósporos são estruturas de resistência, não de transferência gênica." }
        ]
    },
    {
        question: "Como transposons móveis contribuem para a genética bacteriana?",
        answers: [
            { text: "Eles replicam-se independentemente como plasmídeos", correct: false, rationale: "Transposons movem-se dentro do genoma, não se replicam como elementos extrachromossômicos estáveis." },
            { text: "Podem inserir-se em novos loci, causando mutações e reorganizações gênicas", correct: true, rationale: "Transposons carregam gene transposase que permite sua mobilização e pode interromper genes ou promover recombinação." },
            { text: "São fagos temperados que integram o genoma", correct: false, rationale: "Isso descreve profagos, não transposons." },
            { text: "Codificam proteínas ribossomais alternativas", correct: false, rationale: "Transposons geralmente não carregam genes de ribossomos." }
        ]
    },
        {
        question: "Qual é o primeiro passo no processo de patogênese bacteriana?",
        answers: [
            { text: "Invasão de tecidos profundos", correct: false, rationale: "Antes da invasão a bactéria precisa aderir ao epitélio ou superfície do hospedeiro." },
            { text: "Adesão à superfície das células do hospedeiro", correct: true, rationale: "A adesão mediada por fímbrias, adesinas ou proteínas de superfície é essencial para colonização inicial." },
            { text: "Formação de biofilme", correct: false, rationale: "O biofilme pode ocorrer após a adesão e favorece persistência, mas não é o primeiro passo." },
            { text: "Produção de exotoxinas", correct: false, rationale: "Toxinas são secretadas depois da adesão e colonização para causar dano." }
        ]
    },
    {
        question: "Qual componente bacteriano atua como fator de evasão específico dos fagócitos?",
        answers: [
            { text: "Lipopolissacarídeo (LPS)", correct: false, rationale: "O LPS é endotoxina, mas não inibe diretamente fagocitose." },
            { text: "Proteína A do S. aureus", correct: true, rationale: "A proteína A se liga à porção Fc dos anticorpos, impedindo a opsonização e a fagocitose." },
            { text: "Flagelina", correct: false, rationale: "Flagelina fornece motilidade, mas não impede a ação dos fagócitos." },
            { text: "Ácido lipoteicóico", correct: false, rationale: "Este componente de Gram-positivas não bloqueia diretamente a fagocitose." }
        ]
    },
    {
        question: "Como as toxinas AB funcionam para danificar células hospedeiras?",
        answers: [
            { text: "A subunidade A permite a entrada de B no citoplasma", correct: false, rationale: "Na verdade, B liga-se ao receptor e A é transportada para o citosol para exercer atividade enzimática." },
            { text: "A subunidade B tem atividade enzimática e A faz ligação ao receptor", correct: false, rationale: "É o inverso: B liga o receptor; A exerce a função tóxica." },
            { text: "A subunidade B liga o receptor da célula e A atua no interior, inibindo funções vitais", correct: true, rationale: "O componente B facilita a entrada e A executa a atividade tóxica intracelular." },
            { text: "Ambas as subunidades se inserem na membrana formando poros", correct: false, rationale: "Pore-forming toxins funcionam diferente de toxinas AB." }
        ]
    },
    {
        question: "Qual mecanismo de evasão imune está associado à variação antigênica?",
        answers: [
            { text: "Alteração de epítopos para escapar de anticorpos específicos", correct: true, rationale: "A variação antigênica modifica proteínas de superfície para evitar reconhecimento pela resposta adaptativa." },
            { text: "Secreção de enzimas que degradam anticorpos", correct: false, rationale: "Isso é produção de proteases, distinto de variação antigênica." },
            { text: "Formação de esporos", correct: false, rationale: "Esporulação protege contra estresse, mas não altera antígenos de superfície." },
            { text: "Inibição de apresentação antigênica por MHC", correct: false, rationale: "Isso ocorre em infecções virais, não é mecanismo clássico bacteriano." }
        ]
    },
    {
        question: "Como fungos e bactérias diferem na utilização de vetores de transporte de toxinas?",
        answers: [
            { text: "Bactérias usam fagocitose, fungos não", correct: false, rationale: "Nem bactérias nem fungos são fagocitados como modo de transportar toxinas." },
            { text: "Bactérias secretam toxinas livres; fungos usam estruturas hifais", correct: false, rationale: "Fungos utilizam hifas para invasão tecidual mas ambas podem secretar toxinas solúveis." },
            { text: "Bactérias podem usar sistemas de secreção Tipo III; fungos não têm esses sistemas", correct: true, rationale: "T3SS é exclusivo de bactérias gram-negativas para injetar efetores em células-alvo." },
            { text: "Fungos transportam toxinas por vesículas extracelulares; bactérias não", correct: false, rationale: "Bactérias gram-positivas também liberam vesículas de membrana para entregar toxinas." }
        ]
    },
    {
        question: "Qual fator contribui para a invasão tecidual pela colagenase?",
        answers: [
            { text: "Degradação de lipídios da membrana", correct: false, rationale: "Colagenase quebra colágeno, não lipídios." },
            { text: "Quebra de fibras de colágeno no tecido conjuntivo", correct: true, rationale: "A colagenase degrada colágeno, facilitando a penetração no tecido intersticial." },
            { text: "Inibição da quimiotaxia de neutrófilos", correct: false, rationale: "Essa função é típica de outras toxinas, não da colagenase." },
            { text: "Formação de coágulos ao redor da bactéria", correct: false, rationale: "Isso é função da coagulase, não da colagenase." }
        ]
    },
    {
        question: "Como os biofilmes aumentam a resistência a antibióticos?",
        answers: [
            { text: "Inibindo bombas de efluxo", correct: false, rationale: "Biofilmes geralmente aumentam expressão de bombas de efluxo, não inibem." },
            { text: "Criando barreira física e reduzindo penetração do fármaco", correct: true, rationale: "A matriz extracelular impede a difusão de muitos antibióticos até as células bacterianas." },
            { text: "Aumentando a taxa de divisão celular", correct: false, rationale: "A maioria das células em biofilmes cresce lentamente, reduzindo a eficácia de antibióticos dependentes de divisão." },
            { text: "Produzindo mais LPS para neutralizar o antibiótico", correct: false, rationale: "LPS está na membrana, mas não neutraliza antibióticos; biofilme é responsável pela proteção." }
        ]
    },
    {
        question: "Qual molécula bacteriana serve como endotoxina e ativa forte resposta inflamatória?",
        answers: [
            { text: "Peptidoglicano", correct: false, rationale: "Peptidoglicano pode ativar TLR2, mas endotoxina clássica é LPS." },
            { text: "Lipopolissacarídeo (LPS)", correct: true, rationale: "O Lípido A do LPS é endotoxina que ativa macrófagos e desencadeia tempestade de citocinas." },
            { text: "Exotoxina tetânica", correct: false, rationale: "A toxina tetânica é exotoxina, não endotoxina." },
            { text: "Ácido teicóico", correct: false, rationale: "Ácido teicóico é componente de Gram-positivas, mas não endotoxina." }
        ]
    },
    {
        question: "Qual sistema de secreção bacteriano forma poros na membrana da célula hospedeira?",
        answers: [
            { text: "Tipo I", correct: false, rationale: "T1SS transporta proteínas diretamente para o meio, sem formar poros em células-alvo." },
            { text: "Tipo II", correct: false, rationale: "T2SS secreta enzimas solúveis, não forma poros." },
            { text: "Tipo III", correct: false, rationale: "T3SS injeta efetores, mas não forma canais estáveis tipo poro." },
            { text: "Tipo V (autotransportador)", correct: true, rationale: "Alguns autotransportadores do T5SS formam poros que ajudam a liberar toxinas no periplasma das células-alvo." }
        ]
    },
    {
        question: "Como a coagulase auxilia S. aureus na patogênese?",
        answers: [
            { text: "Degradando fibrina para facilitar disseminação", correct: false, rationale: "É a estreptocinase que degrada fibrina; a coagulase forma coágulos." },
            { text: "Convertendo fibrinogênio em fibrina para formar coágulos protetores", correct: true, rationale: "A coagulase ativa a trombina, gerando fibrina que envolve bactérias e impede fagocitose." },
            { text: "Bloqueando recepções de complemento", correct: false, rationale: "Isso é função de proteínas que inibem o complemento, não da coagulase." },
            { text: "Ligando-se ao receptor Fc de anticorpos", correct: false, rationale: "Isso é função da proteína A, não da coagulase." }
        ]
    },
        {
        question: "Qual é o anticoagulante de escolha em frascos de hemocultura e por quê?",
        answers: [
            { text: "EDTA, pois preserva o DNA bacteriano para testes moleculares.", correct: false, rationale: "O EDTA inibe algumas bactérias e não é recomendado para hemocultura clínica." },
            { text: "Heparina, porque facilita o crescimento de bactérias aeróbias.", correct: false, rationale: "A heparina não inibe o sistema complemento, podendo reduzir a recuperação de patógenos." },
            { text: "SPS (Sulfato de Poliamina de Sódio), porque inibe leucócitos e complemento sem afetar bactérias.", correct: true, rationale: "O SPS preserva a viabilidade bacteriana ao inibir fagócitos e o sistema complemento que matariam os patógenos." },
            { text: "Citrato, pois mantém o pH constante durante o transporte.", correct: false, rationale: "O citrato pode inibir o crescimento bacteriano e não é recomendado para hemoculturas." }
        ]
    },
    {
        question: "Qual meio de transporte é indicado para swabs de secreção respiratória e por quê?",
        answers: [
            { text: "Ágar Sangue, pois é enriquecido para todos os patógenos.", correct: false, rationale: "Ágar Sangue é meio de cultura, não de transporte; não preserva a amostra durante o transporte." },
            { text: "Meio Stuart ou Amies, pois mantêm baixa tensão de oxigênio e contêm neutralizantes de leucócitos.", correct: true, rationale: "Esses meios preservam a viabilidade de patógenos aeróbios e anaeróbios sem crescimento excessivo." },
            { text: "Ágar MacConkey, pois diferencia fermentadores de lactose.", correct: false, rationale: "MacConkey é seletivo e não mantém viabilidade adequada durante o transporte." },
            { text: "Meio tioglicolato, pois promove crescimento anaeróbio.", correct: false, rationale: "Tioglicolato é meio de enriquecimento, não ideal para transporte sem supercrescimento." }
        ]
    },
    {
        question: "Por que algumas amostras devem ser mantidas a 2–8 °C antes do processamento?",
        answers: [
            { text: "Para estimular a produção de enzimas bacterianas.", correct: false, rationale: "O frio inibe metabolismo, não o estimula." },
            { text: "Para inibir o crescimento de contaminantes sem matar o patógeno.", correct: true, rationale: "Refrigeração retarda bactérias contaminantes e preserva patógenos sensíveis até o processamento." },
            { text: "Para ativar meios de cultura seletivos.", correct: false, rationale: "Seleção de meios depende de componentes químicos, não de temperatura." },
            { text: "Para fixar as células antes da coloração de Gram.", correct: false, rationale: "A fixação requer métodos químicos ou calor, não refrigeração." }
        ]
    },
    {
        question: "Qual é o método padrão-ouro para identificação bacteriana em laboratório clínico?",
        answers: [
            { text: "Coloração de Gram.", correct: false, rationale: "A coloração de Gram é um passo inicial, mas não identifica espécies." },
            { text: "Espectrometria de massa MALDI-TOF MS.", correct: true, rationale: "O MALDI-TOF MS fornece perfil proteico rápido e preciso para identificação até nível de espécie." },
            { text: "Teste de catalase.", correct: false, rationale: "Teste de catalase diferencia Staphylococcus de Streptococcus, mas não identifica todas as espécies." },
            { text: "PCR em tempo real (qPCR).", correct: false, rationale: "qPCR detecta genes específicos, mas não é padrão-ouro para identificação rotineira de bactérias clínicas." }
        ]
    },
    {
        question: "No teste de difusão em disco (Kirby-Bauer), o que se mede para determinar sensibilidade?",
        answers: [
            { text: "Número de colônias ao redor do disco.", correct: false, rationale: "Não se conta colônias; mede-se o halo de inibição no ágar." },
            { text: "Diâmetro do halo de inibição em milímetros.", correct: true, rationale: "O diâmetro do halo é comparado a tabelas padronizadas para categorizar sensibilidade ou resistência." },
            { text: "Tempo até aparecimento do halo.", correct: false, rationale: "A leitura é feita após incubação fixa, não varia tempo." },
            { text: "Cor do halo em relação ao meio.", correct: false, rationale: "A cor não é parâmetro de sensibilidade; apenas o halo claro indica inibição." }
        ]
    },
    {
        question: "O que a CIM (Concentração Inibitória Mínima) informa ao clínico?",
        answers: [
            { text: "O diâmetro do halo de inibição.", correct: false, rationale: "O diâmetro do halo é o teste de difusão em disco, não CIM." },
            { text: "A menor concentração de antibiótico que impede crescimento visível.", correct: true, rationale: "A CIM é determinada em caldo e indica a concentração mínima necessária para inibir a bactéria." },
            { text: "A toxicidade do antibiótico para células humanas.", correct: false, rationale: "CIM refere-se apenas à inibição de bactérias, não à toxicidade humana." },
            { text: "O tempo mínimo de exposição ao antibiótico.", correct: false, rationale: "CIM não envolve tempo, apenas concentração." }
        ]
    },
    {
        question: "Por que se realiza controle de qualidade usando cepas ATCC antes de interpretar um antibiograma?",
        answers: [
            { text: "Para treinar o técnico em procedimentos de laboratório.", correct: false, rationale: "O CQ avalia a confiabilidade do teste, não é para treinamento." },
            { text: "Para verificar se meios, discos e incubadora estão dentro dos limites aceitáveis.", correct: true, rationale: "Se a cepa-padrão não estiver nos valores esperados, indica falha no sistema e impossibilita interpretação de resultados clínicos." },
            { text: "Para comparar diferentes métodos de teste simultaneamente.", correct: false, rationale: "O CQ foca em um método padrão, não em comparação de técnicas." },
            { text: "Para determinar a concentração de antibiótico nos discos.", correct: false, rationale: "A concentração é pré-definida pelos fabricantes; o CQ verifica performance." }
        ]
    },
    {
        question: "Qual técnica rápida de identificação bacteriana gera “impressão digital” proteica em minutos?",
        answers: [
            { text: "PCR multiplex.", correct: false, rationale: "PCR detecta DNA, não gera perfil proteico." },
            { text: "MALDI-TOF MS.", correct: true, rationale: "A espectrometria MALDI-TOF MS analisa proteínas ribossomais para identificar espécies em minutos." },
            { text: "Teste de sensibilidade em ágar chocolate.", correct: false, rationale: "Ágar chocolate é meio de cultura, não técnica de identificação rápida." },
            { text: "Western blot.", correct: false, rationale: "Western blot identifica proteínas específicas, mas é demorado e não usado rotineiramente em clínica." }
        ]
    },
    {
        question: "Por que algumas amostras de urina devem ser processadas dentro de 2 horas após coleta?",
        answers: [
            { text: "Para permitir crescimento de bactérias comensais.", correct: false, rationale: "O objetivo é evitar crescimento de contaminantes que falseiam resultados." },
            { text: "Para evitar proliferação de bactérias de contaminação e manter contagem verdadeira.", correct: true, rationale: "O atraso pode permitir multiplicação de flora normal, elevando contagem de colônias artificiais." },
            { text: "Para ativar reagentes de cultura seletiva.", correct: false, rationale: "Meios seletivos são ativados quimicamente, não pela rapidez do processamento." },
            { text: "Para prevenir cristalização de substâncias urinárias.", correct: false, rationale: "Cristais não interferem na cultura bacteriana; o foco é contagem de patógenos." }
        ]
    },
    {
        question: "Qual método molecular permite detecção e quantificação rápida de bactérias específicas em amostras clínicas?",
        answers: [
            { text: "Coloração de Gram.", correct: false, rationale: "Coloração de Gram é qualitativa e genérica, não específica nem quantitativa precisa." },
            { text: "PCR em tempo real (qPCR).", correct: true, rationale: "O qPCR detecta e quantifica DNA-alvo específico de patógenos com alta sensibilidade." },
            { text: "Espectrometria de massa.", correct: false, rationale: "MALDI-TOF MS identifica proteínas, não quantifica DNA." },
            { text: "Teste de látex anticorpo-antígeno.", correct: false, rationale: "Teste de látex é qualitativo e depende de antígenos específicos, mas não quantifica carga bacteriana." }
        ]
    }
];


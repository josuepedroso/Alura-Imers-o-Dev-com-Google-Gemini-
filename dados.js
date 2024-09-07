let dados = [
    {
        titulo: "Yorkshire Terrier",
        descricao: "Pequeno, elegante e de personalidade forte, o Yorkshire Terrier é um dos cães mais populares entre os brasileiros. Conhecido por sua pelagem longa e sedosa, é um companheiro leal e cheio de energia.",
        pelagem: "<b>Pelagem:</b> Longa, Sedosa",
        porte: "<b>Porte:</b> Pequeno",
        origem: "<b>Origem:</b> Inglaterra",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=110",
        tags: "cão, cachorro, caes, pequeno, companheiro, inglaterra, longa",
    },
    {
        titulo: "Persa",
        descricao: "Conhecido por sua pelagem longa e sedosa, o Persa é um gato elegante e de personalidade calma. Seus olhos grandes e redondos dão um ar ainda mais encantador a essa raça.",
        pelagem: "<b>Pelagem:</b> Longa, Sedosa",
        porte: "<b>Porte:</b> Médio",
        origem: "<b>Origem:</b> Irã",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://portalvet.royalcanin.com.br/guia-de-racas/gato-persa/",
        tags: "gato, gatos, felino, peludo, longo, persa, irã"
    },
    {
        titulo: "Peixe Dourado",
        descricao: "Um dos peixes mais populares, conhecido por suas diversas variedades de cores e formas. Requer um aquário grande e bem filtrado.",
        tipo: "<b>Água:</b> Doce",
        tamanho_maximo: "<b>Tamanho máximo:</b> 30cm",
        comportamento: "<b>Comportamento:</b> Pacífico, mas pode se tornar territorial",
        alimentacao: "<b>Alimentação:</b> Omnívoro",
        aquario: "<b>Aquário</b> Aquário grande, filtragem eficiente, temperatura ambiente",
        link: "https://pt.wikipedia.org/wiki/Peixinho_dourado_meteoro#:~:text=O%20peixinho%20dourado%20meteoro%20%C3%A9,ou%20in%C3%ADcio%20do%20s%C3%A9culo%20XX.",        tags: "dourado, popular, omnívoro, água doce"
    },
    {
        titulo: "Boxer",
        descricao: "O Boxer é um cão de porte médio a grande, musculoso e de focinho curto. Conhecido por sua lealdade e energia, é um excelente companheiro para famílias ativas. Sua pelagem é curta e fácil de cuidar.",
        pelagem: "<b>Pelagem:</b> Curta",
        porte: "<b>Porte:</b> Médio a Grande",
        origem: "<b>Origem:</b> Alemanha",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=21",
        tags: "cão, cachorro, caes, médio, ativo, leal, alemanha"
      },
      {
        titulo: "Chihuahua",
        descricao: "O Chihuahua é o menor cão do mundo, conhecido por sua personalidade forte e independente. Apesar do tamanho, é um cão corajoso e leal. Sua pelagem pode ser longa ou curta.",
        pelagem: "<b>Pelagem:</b> Curta ou Longa",
        porte: "<b>Porte:</b> Pequeno",
        origem: "<b>Origem:</b> México",
        hipoalergenico: "<b>Hipoalergênico:</b> Não (mas pode ser uma opção para algumas pessoas com alergias)",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=38",
        tags: "cão, pequeno, independente, mexico, longa"
      },
      {
        titulo: "Siamês",
        descricao: "O Siamês é um gato de corpo esguio e pelagem curta, com olhos azuis intensos e um miado característico. É conhecido por sua inteligência e personalidade ativa.",
        pelagem: "<b>Pelagem:</b> Curta",
        porte: "<b>Porte:</b> Médio",
        origem: "<b>Origem:</b> Tailândia",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://premierpet.com.br/tutor/siames-tudo-o-que-voce-precisa-saber/",
        tags: "gato, gatos, felino, azul, tailândia, inteligente"
      },    
      {
        titulo: "Dachshund",
        descricao: "O Dachshund, também conhecido como salsicha, é um cão de caça com pernas curtas e corpo alongado. Conhecido por sua personalidade teimosa e independente, é um companheiro leal e divertido.",
        pelagem: "<b>Pelagem:</b> Curta, longa ou dura",
        porte: "<b>Porte:</b> Pequeno",
        origem: "<b>Origem:</b> Alemanha",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=47",
        tags: "cão, salsicha, teimoso, caça, alemanha"
      },
      {
        titulo: "Maine Coon",
        descricao: "O Maine Coon é um gato de grande porte, conhecido por sua pelagem longa e espessa. É um gato gentil e brincalhão, perfeito para famílias.",
        pelagem: "<b>Pelagem:</b> Longa, Espessa",
        porte: "<b>Porte:</b> Grande",
        origem: "<b>Origem:</b> Estados Unidos",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://portalvet.royalcanin.com.br/guia-de-racas/maine-coon/",
        tags: "gato, gatos, felino, grande, peludo, estados unidos"
      },   
      {
        titulo: "Poodle",
        descricao: "O Poodle é uma raça inteligente e versátil, conhecida por sua pelagem encaracolada e hipoalergênica. É um excelente cão de companhia e pode ser encontrado em diferentes portes.",
        pelagem: "<b>Pelagem:</b> Encaracolada",
        porte: "<b>Porte:</b> Pequeno, médio ou grande",
        origem: "<b>Origem:</b> França",
        hipoalergenico: "<b>Hipoalergênico:</b> Sim",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=82",
        tags: "cão, inteligente, versátil, encaracolado, frança"
      },
      {
        titulo: "Tetra Neon",
        descricao: "Pequeno e vibrante, o tetra neon é ideal para aquários comunitários. Sua coloração neon azul e vermelha é deslumbrante.",
        tipo: "<b>Água:</b> Doce",
        tamanho_maximo: "<b>Tamanho máximo:</b> 4cm",
        comportamento: "<b>Comportamento:</b> Escolar, pacífico",
        alimentacao: "<b>Alimentação:</b> Onívoro",
        aquario: "<b>Aquário</b> Aquário plantado, boa qualidade da água",
        link: "https://pt.wikipedia.org/wiki/N%C3%A9on_(peixe)",
        tags: "neon, pequeno, escolar, água doce"
      },
      {
        titulo: "Ragdoll",
        descricao: "O Ragdoll é conhecido por sua pelagem macia e longa, e por relaxar completamente quando pego no colo. É um gato gentil e tranquilo.",
        pelagem: "<b>Pelagem:</b> Longa, Macia",
        porte: "<b>Porte:</b> Grande",
        origem: "<b>Origem:</b> Estados Unidos",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://portalvet.royalcanin.com.br/guia-de-racas/ragdoll/",
        tags: "gato, gatos, felino, grande, macio, estados unidos"
      },       
      {
        titulo: "Bulldog Inglês",
        descricao: "O Bulldog Inglês é um cão de grande porte, musculoso e de focinho curto. Conhecido por sua natureza calma e gentil, é um ótimo companheiro para famílias.",
        pelagem: "<b>Pelagem:</b> Curta",
        porte: "<b>Porte:</b> Grande",
        origem: "<b>Origem:</b> Inglaterra",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=26",
        tags: "cão, grande, calmo, inglaterra"
      },
      {
        titulo: "Husky Siberiano",
        descricao: "O Husky Siberiano é um cão de trabalho do norte, conhecido por sua pelagem espessa e olhos azuis marcantes. É um cão ativo e inteligente, mas pode ser teimoso.",
        pelagem: "<b>Pelagem:</b> Espessa",
        porte: "<b>Porte:</b> Médio",
        origem: "<b>Origem:</b> Sibéria",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=60",
        tags: "cão, ativo, inteligente, sibéria, pelagem, espessa"
      },
      {
        titulo: "Beagle",
        descricao: "O Beagle é um cão pequeno, enérgico e amigável, conhecido por seu excelente olfato e natureza curiosa. É ótimo para famílias e muito sociável.",
        pelagem: "<b>Pelagem:</b> Curta",
        porte: "<b>Porte:</b> Pequeno",
        origem: "<b>Origem:</b> Inglaterra",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=11",
        tags: "cão, energetico, curioso, família, pequeno"
    },
    {
      titulo: "Betta",
      descricao: "Conhecido por suas barbatanas exuberantes e cores vibrantes, o betta é um peixe territorial. Deve ser mantido em aquários individuais.",
      tipo: "<b>Água:</b> Doce",
      tamanho_maximo: "<b>Tamanho máximo:</b> 7cm",
      comportamento: "<b>Comportamento:</b> Territorial",
      alimentacao: "<b>Alimentação:</b> Carnívoro",
      aquario: "<b>Aquário</b> Aquário pequeno, aquecido, com esconderijos",
      link: "https://pt-br.facebook.com/criadoresdepeixebeta/",
      tags: "betta, brilhante, territorial, água doce"
    },
    {
        titulo: "Sphynx",
        descricao: "O Sphynx é um gato sem pelos, com a pele macia e quente. É um gato inteligente e extrovertido.",
        pelagem: "<b>Pelagem:</b> Sem pelo",
        porte: "<b>Porte:</b> Médio",
        origem: "<b>Origem:</b> Canadá",
        hipoalergenico: "<b>Hipoalergênico:</b> Sim (em alguns casos)",
        link: "https://portalvet.royalcanin.com.br/guia-de-racas/gato-sphynx/",
        tags: "gato, gatos, felino, sem pelo, canadá"
    },
    {
        titulo: "Labrador Retriever",
        descricao: "O Labrador Retriever é um cão de porte médio a grande, conhecido por sua lealdade e natureza amigável. É muito ativo e ótimo para famílias e atividades ao ar livre.",
        pelagem: "<b>Pelagem:</b> Curta",
        porte: "<b>Porte:</b> Médio a Grande",
        origem: "<b>Origem:</b> Canadá",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=84",
        tags: "cão, amigável, ativo, família, leal"
    },
    {
        titulo: "Pastor Alemão",
        descricao: "O Pastor Alemão é um cão robusto e inteligente, conhecido por sua versatilidade e habilidades de trabalho. É um excelente cão de guarda e companheiro leal.",
        pelagem: "<b>Pelagem:</b> Espessa",
        porte: "<b>Porte:</b> Grande",
        origem: "<b>Origem:</b> Alemanha",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=72",
        tags: "cão, inteligente, versátil, guarda, grande"
    },
    {
        titulo: "Golden Retriever",
        descricao: "O Golden Retriever é um cão de porte médio a grande, conhecido por sua pelagem dourada e natureza amigável. É ótimo para famílias e muito fácil de treinar.",
        pelagem: "<b>Pelagem:</b> Longa",
        porte: "<b>Porte:</b> Médio a Grande",
        origem: "<b>Origem:</b> Escócia",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=58",
        tags: "cão, amigável, treinável, família, dourado"
    },
    {
        titulo: "Pug",
        descricao: "O Pug é um cão pequeno e compacto, conhecido por seu rosto enrugado e personalidade afetuosa. É muito sociável e ótimo para a vida em apartamentos.",
        pelagem: "<b>Pelagem:</b> Curta",
        porte: "<b>Porte:</b> Pequeno",
        origem: "<b>Origem:</b> China",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=83",
        tags: "cão, afetuoso, compacto, sociável, pequeno"
    },
    {
        titulo: "Rottweiler",
        descricao: "O Rottweiler é um cão grande e robusto, conhecido por sua lealdade e habilidades de proteção. É um excelente cão de guarda e muito protetor com sua família.",
        pelagem: "<b>Pelagem:</b> Curta",
        porte: "<b>Porte:</b> Grande",
        origem: "<b>Origem:</b> Alemanha",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=85",
        tags: "cão, leal, protetor, guarda, grande"
    },
        {
        titulo: "Shih Tzu",
        descricao: "O Shih Tzu é um cão pequeno com uma pelagem longa e luxuosa, conhecido por sua natureza afetuosa e personalidade amigável. É ótimo para apartamentos e famílias.",
        pelagem: "<b>Pelagem:</b> Longa",
        porte: "<b>Porte:</b> Pequeno",
        origem: "<b>Origem:</b> Tibete",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=95",
        tags: "cão, afetuoso, longa, pequeno, amigável"
    },
    {
        titulo: "Bulldog Francês",
        descricao: "O Bulldog Francês é um cão pequeno e musculoso, conhecido por seu rosto achatado e personalidade brincalhona. É ótimo para a vida em apartamentos e muito afetuoso.",
        pelagem: "<b>Pelagem:</b> Curta",
        porte: "<b>Porte:</b> Pequeno",
        origem: "<b>Origem:</b> França",
        hipoalergenico: "<b>Hipoalergênico:</b> Não",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=25",
        tags: "cão, brincalhão, musculoso, pequeno, afetuoso"
    },
    {
        titulo: "Bichon Frise",
        descricao: "O Bichon Frise é um pequeno cão com pelagem fofa e encaracolada, conhecida por ser hipoalergênica. É alegre e ótimo para famílias e apartamentos.",
        pelagem: "<b>Pelagem:</b> Encaracolada",
        porte: "<b>Porte:</b> Pequeno",
        origem: "<b>Origem:</b> França",
        hipoalergenico: "<b>Hipoalergênico:</b> Sim",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=12",
        tags: "cão, alegre, fofo, hipoalergênico, encaracolada"
    },
    {
        titulo: "Maltês",
        descricao: "O Maltês é um cão pequeno com pelagem longa e sedosa. Sua pelagem não solta muitos pelos e é considerada hipoalergênica.",
        pelagem: "<b>Pelagem:</b> Longa e Sedosa",
        porte: "<b>Porte:</b> Pequeno",
        origem: "<b>Origem:</b> Malta",
        hipoalergenico: "<b>Hipoalergênico:</b> Sim",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=66",
        tags: "cão, pequeno, longa, hipoalergênico, sedosa"
    },
    {
        titulo: "Schnauzer",
        descricao: "O Schnauzer é um cão que vem em três tamanhos: Miniatura, Standard e Gigante. Sua pelagem é conhecida por ser hipoalergênica e não soltar muitos pelos.",
        pelagem: "<b>Pelagem:</b> Dura e Densa",
        porte: "<b>Porte:</b> Pequeno a Grande",
        origem: "<b>Origem:</b> Alemanha",
        hipoalergenico: "<b>Hipoalergênico:</b> Sim",
        link: "https://www.kcrgs.com.br/index.php?page=criadores&raca_id=89",
        tags: "cão, inteligente, hipoalergênico, densa, alemão"
    },  
]
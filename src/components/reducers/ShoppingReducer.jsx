import { TYPE } from "../Shopping/ShoppingAction";

export const ShoppingInitialState = {
    productos: [
        {
            id: "001",
            categoria: "Sombras, Ojos",
            name: "Sombras Liquidas Cosmic",
            price: "10000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto.jpeg?raw=true",
            description: "Estas sombras líquidas son todo lo que siempre has querido, tienen aplicador como de labial. Son súper fáciles de aplicar directamente del producto al párpado, puedes difuminarlo con los dedos, con una brocha o puedes mezclarlo con sombras tradicionales en polvo para hacer un difuminado perfecto. Es muy pigmentada, su brillo es hermoso y te encantará.",

        },
        {
            id: "002",
            categoria: "labios, Ojos",
            name: "Murano Escarc ",
            price: "9000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto01.jpeg?raw=true",
            description: "Se diferencian por su excelente fijación y acabado brillante, que hace realzar e iluminar la mirada.Aplicar la escarcha es muy sencillo, aquí te enseñamos cómo hacerlo: Antes de aplicarla se recomienda aplicar un prebase para fijar mejor el pigmento, en caso de no contar con una a la mano puedes usar vaselina.",

        },
        {
            id: "003",
            categorias:"Brochas, Kit de brochas",
            name: "Kit Brochas Labial",
            price: "50000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto.1.png?raw=true",
            description: "Contiene 4 brochas, tres para ojos, difuminadora, aplicadora, detalles y una para piel la puedes usar como iluminador o polvos",
        },
        {
            id: "004",
            categoria:"Brochas, Kit de Brochas",
            name: "Kit Velve",
            price: "20000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto03.jpeg?raw=true",
            description: "Si estas empezando en el mundo del maquillaje o quieres implementar estas brochas son para ti, son de calidad profesional, sus fibras son sintéticas y el mango es madera (Incluye cosmetiquera)"

        },
        {
            id: "005",
            categoria: "Accesorios",
            name: "Botilitos Para el agua",
            price: "1500",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto04.jpeg?raw=true",
            description: "¡Termo de Agua 2 Litros de colores motivacional! Te presentamos este hermoso y práctico.Mide tu ingesta diaria de agua y recuerda mantenerte hidratado, con nuestros dos diseños diferentes"
        },
        {
            id: "006",
            categoria: "Sombras",
            name: "Love Is Sweet",
            price: "2500",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto05.jpeg?raw=true",
            description: "Esta paleta de sombras con 15 tonos es perfecta para ti si eres amante de las tonalidades tierra y neutras. Acabados mate y satinado. Buena pigmentación. Textura suave. Aplicación sedosa. Incluye aplicador y espejo."
        },
        {
            id: "007",
            categoria: "Sombras",
            name: " Serum de Baba de Caracol",
            price: "13000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto06.jpeg?raw=true",
            description: "Extracto de Caracol Extracto de Colageno Suero o Serum HIdratacion Profunda Uso: Aplicador gotero Recomendacion: Usar en la Mañana."
        },
        {
            id: "008",
            categoria: "Sombras",
            name: " Serum de Baba de Caracol",
            price: "13000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto07.jpeg?raw=true",
            description: "Extracto de Caracol Extracto de Colageno Suero o Serum HIdratacion Profunda Uso: Aplicador gotero Recomendacion: Usar en la Mañana."
        },
        {
            id: "009",
            categoria: "Sombras",
            name: "Mascarilla Aloe Vera",
            price: "13000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto07.jpeg?raw=true",
            description: "Anti inflamatoria, astringente, desinflama,ayuda con la dermatitis, favorece las pieles con rosácea, regenera todas las células de la piel, úsala también en el cuerpo te beneficiara mucho."
        },
        {
            id: "010",
            categoria: "Corporal",
            name: "Aceite Desmaquillante",
            price: "27000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto08.jpeg?raw=true",
            description: "DESMAQUILLA TODOS LOS PRODUCTOS A PRUEBA DE AGUA Ó DE DIFICIL RETIRADO. Su fórmula es NO comedogénica, lo que quiere decir que NO obstruye los poros, NO ocasiona acné, NO ocasiona alergia en los poros o en los folículos de las cejas y las pestañas como si puede suceder con aceites de extractos puros."
        },
        {
            id: "011",
            categoria: "Facial",
            name: "Crema Anti Acne",
            price: "27000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto10.jpeg?raw=true",
            description: "Su formula es hidratante, suave y delicada con la piel, no obstruye los poros lo que puede ser utilizada todos los días, el extracto de rosas es lo mas beneficioso es calmante, refrescante, hidratante, nivela el ph ayuda a combatir el acné."
        },
        {
            id: "012",
            categoria: "Piel",
            name: "Mascarilla Aloe Vera",
            price: "20000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto11.jpeg?raw=true",
            description: "Anti inflamatoria, astringente, desinflama,ayuda con la dermatitis, favorece las pieles con rosácea, regenera todas las células de la piel, úsala también en el cuerpo te beneficiara mucho."
        },
        {
            id: "013",
            categoria: "Piel, facial",
            name: "Parches Anti Acne",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto12.jpeg?raw=true",
            description: "Mejora la piel seca y deshidratada devolviendo vida, contiene natto en vitamina B6 y E estimulando la renovación celular y retarda el envejecimiento $4.000 Parchecitos anti acné especialmente diseñados para secar y absorber toda la materia del granito, calma la inflamación y se camuflan muy bien en la piel, déjalos entre 4 y 12 horas y veras la diferencia, viene 60 stickres."
        },
        {
            id: "014",
            categoria: "Accesorios",
            name: "Brochas para Mascarillas",
            price: "10000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto13.jpeg?raw=true",
            description: "Nunca fue tan fácil y divertido aplicar nuestras mascarillas favoritas, vienen dos extremos diferentes un lado es una brochas plana ideal para mascarillas y el otro lado una brocha para lavar el rostro con cerdas siliconadas."
        },
        {
            id: "015",
            categoria: "Piel, Facial",
            name: "Sombras Star Luz",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto14.jpeg?raw=true",
            description: "Con este fijador tu maquillaje se hará a prueba de agua, hará que el maquillaje quede estático y que este donde tiene que estar, no irrita la piel ni obstruye poros, ideal para todo tipo de piel, su formulación no derrite el maquillaje."
        },
        {
            id: "016",
            categoria: "Cejas",
            name: "Serum de Cejas Trendy",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto15.jpeg?raw=true",
            description: "Gel transparente que ayuda a peinar y fijar tus cejas durante todo el día. Puedes hacer técnicas orgánicas, semi orgánicas o tradicionales (según cómo desees peinar los pelitos de tus cejas) Es súper facil de usar, no aporta pesadez ni color a las cejas, sólo te ayuda a peinarlas. Gran tamaño, te durará bastante tiempo."
        },
        {
            id: "017",
            categoria: "Piel, Facial",
            name: "Protector solar",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto16.jpeg?raw=true",
            description: "Crema de protección solar Facial, aislamiento UV, bloqueador solar corporal, corrector resistente al agua, protector solar, cosméticos."
        },
        {
            id: "018",
            categoria: "Piel, Facial",
            name: "Protector Solar Facial Sun Screen – Purpure Facial",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto17.jpeg?raw=true",
            description: "SUNSCREEN PROTECTOR SOLAR PURPURE SPF 50+ ideal para hidratar la piel y protegerla por los daños causados por los rayos solares, so fórmula con vitamina E previene el envejecimiento prematuro de la piel, la combinación de los filtros solares actúan como una barrera protectora ante los rayos UV que producen las quemaduras solares. CLÍNICAMENTE COMPROBADO."
        },
        {
            id: "019",
            categoria: "Piel",
            name: "DepilYA - Depilador instantaneo",
            price: "30000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto18.jpeg?raw=true",
            description: "Crema de protección solar Facial, aislamiento UV, bloqueador solar corporal, corrector resistente al agua, protector solar, cosméticos."
        },
        {
            id: "020",
            categoria: "Cejas",
            name: "Gel Fijador de Cejas Trendy",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto19.jpeg?raw=true",
            description: "Con este fijador tu maquillaje se hará a prueba de agua, hará que el maquillaje quede estático y que este donde tiene que estar, no irrita la piel ni obstruye poros, ideal para todo tipo de piel, su formulación no derrite el maquillaje."
        },
        {
            id: "021",
            categoria: "Facial",
            name: "Crema Facial de Arroz Bioaqua",
            price: "27000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto20.jpeg?raw=true",
            description: "El arroz puede equilibrar la producción de aceites naturales, haciendo que la piel se hidrate por sí sola y se mantenga suave por más tiempo, combinado también con la exfoliación hace que se unifique el tono de la piel aclarando manchas e imperfecciones. Esta crema facial deja la piel con un aspecto suave e hidratado."
        },
        {
            id: "022",
            categoria: "Piel, Facial",
            name: "Protector Solar Sun",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto21.jpeg?raw=true",
            description: "SUNSCREEN PROTECTOR SOLAR PURPURE SPF 50+ ideal para hidratar la piel y protegerla por los daños causados por los rayos solares, so fórmula con vitamina E previene el envejecimiento prematuro de la piel, la combinación de los filtros solares actúan como una barrera protectora ante los rayos UV que producen las quemaduras solares. CLÍNICAMENTE COMPROBADO."
        },
        {
            id: "023",
            categoria: "Piel, Facial",
            name: "Crema Facial hidratante",
            price: "27000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto22.jpeg?raw=true",
            description: "Ideal para piel grasa, tiene aloe vera que hidrata y calma el rostro, y hamamelis que cicatriza imperfecciones y controla exceso de brillo."
        },
        {
            id: "024",
            categoria: "Piel, Facial",
            name: "Crema Facial de Arroz Bioaqua",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto23.jpeg?raw=true",
            description: "El arroz puede equilibrar la producción de aceites naturales, haciendo que la piel se hidrate por sí sola y se mantenga suave por más tiempo, combinado también con la exfoliación hace que se unifique el tono de la piel aclarando manchas e imperfecciones. Esta crema facial deja la piel con un aspecto suave e hidratado."
        },
        {
            id: "025",
            categoria: "Piel, Facial",
            name: "Agua Micelar + Niacinamida, Purpure Facial",
            price: "20000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto25.jpeg?raw=true",
            description: "Agua Micelar + Niacinamida de Purpure Facial, el producto ideal para retirar tu maquillaje y al mismo tiempo recibir limpieza, frescura e hidratación, ayuda a remover el maquillaje, elimina impurezas sin dejar sensación grasosa, es libre de fragancia y libre de parabenos, además de contener el poder de la Vitamina B3, sus estudios clínicos demuestran protección de la barrera cutanea de la piel, haciéndola mas fuerte a daños eternos, mejorando su calidad dando como resultado una piel mas hidratada y luminosa."
        },
        {
            id: "026",
            categoria: "Cejas, Accesorios",
            name: "Rizador de pestañas rizador",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto27.jpeg?raw=true",
            description: "Encrespador de pestaña."
        },
        {
            id: "027",
            categoria: "Sombras",
            name: "Sombra Kitty",
            price: "20000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto28.jpeg?raw=true",
            description: "Unidad de empaque (Display) = 12 unidadesSi eres amante de los tonos cáildos esta paleta es para ti. Tiene 16 sombras. Acabados mate y satinado. Buena pigmentación. Fácil de difuminar."
        },
        {
            id: "028",
            categoria: "Piel, Facial",
            name: "Vogue Pestañina Efecto Total",
            price: "27000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto29.jpeg?raw=true",
            description: "Pestañina Efecto Total 6 Vogue, en una sola mascara volumen, definición, apariencia curva, resistentes y aprueba de agua."
        },
        {
            id: "029",
            categoria: "Piel, Facial",
            name: "Protector solar BioAqua",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto30.jpeg?raw=true",
            description: "Crema de protección solar Facial, aislamiento UV, bloqueador solar corporal, corrector resistente al agua, protector solar, cosméticos."
        },
        {
            id: "030",
            categoria: "Facial",
            name: "Base de maquillaje Ruby Rose Feels ",
            price: "26000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto31.jpeg?raw=true",
            description: "La base de maquillaje Ruby Rose te ayudará a lucir un rostro impecable, cubriendo las imperfecciones y unificando el tono de tu piel."
        },
        {
            id: "031",
            categoria: "Facial",
            name: "Base Liquida Soft Matte",
            price: "28000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto32.jpeg?raw=true",
            description: "Una base desarrollada para contener la grasa de la piel y ocultar las imperfecciones, además de proporcionar un excelente acabado, alta cobertura y larga duración."
        },
        {
            id: "032",
            categoria: "Labial",
            name: "Gloss Karite",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto33.jpeg?raw=true",
            description: "Gloss brillante de varios tonos."
        },
        {
            id: "033",
            categoria: "Cejas",
            name: "Cejas Trendy All About Brows",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto34.jpeg?raw=true",
            description: "Kit de cejas con dos pigmentos en betún y dos pigmentos en polvo. Sus tonos son únicos y universales. Ideal para las cejas de tono medio a oscuro. Alta adherencia, pigmentación, duración y deslizan super suaves. Su presentación trae un espejo full HD."
        },
        {
            id: "034",
            categoria: "Capilar",
            name: "Shampoo Four Sensation",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto35.jpeg?raw=true",
            description: "!Potencializada con Biotina, Ginseng, Pantenol, Aloe vera, proteína de Seda y microesferas que irán destilando todas sus propiedades en el acondicionador.Ayudan a devolver la vitalidad perdida, regeneran, reparan y suavizan gracias a su formula tan nutritiva. Dejan el cabello con libertad de movimiento, fácil de peinar y manejable. Controla la caída del cabello y favorece el crecimiento del mismo. Apto para cualquier tono, con decoloraciones, tintes o procesos quimicos permanentes."
        },
        {
            id: "035",
            categoria: "Facial, Capilar",
            name: "Shampoo",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto36.jpeg?raw=true",
            description: "Su formula es hidratante, suave y delicada con la piel, no obstruye los poros lo que puede ser utilizada todos los días, el extracto de rosas es lo mas beneficioso es calmante, refrescante, hidratante, nivela el ph ayuda a combatir el acné."
        },
        {
            id: "036",
            categoria: "Corporal",
            name: "Crema Corporal hidratante",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto37.jpeg?raw=true",
            description: "Anti inflamatoria, astringente, desinflama,ayuda con la dermatitis, favorece las pieles con rosácea, regenera todas las células de la piel, úsala también en el cuerpo te beneficiara mucho."
        },
        {
            id: "037",
            categoria: "kit capilar, Capilar",
            name: "Kit Detox Capilar",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto38.jpeg?raw=true",
            description: "Nuestro cabello también necesita una desintoxicación, un aire, una oxigenación. Y para ello, te recomendamos este kit * SHAMPOO * •Libre de Sulfato y Sal •Es una fórmula enriquecida con Emolientes humectantes y una mezcla de extractos los cuales ayudan restableciendo la fuerza y la nutrición del cabello."
        },
        {
            id: "038",
            categoria: "Capilar",
            name: "Four Sensations Suero Capilar",
            price: "26000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto39.jpeg?raw=true",
            description: "Contiene Aceite de mano de res, queratina hidrolizada, miel, argán, entre otros.Restaura, protege e hidrata profundamente, da volúmen, brillo y mucha fuerza a las puntas del cabello; las cuales han sido maltratadas debido a los efectos nocivos del medio ambiente, al uso de químicos y de aparatos eléctricos para el cabello."
        },
        {
            id: "039",
            categoria: "Capilar",
            name: "Tonico Capilar Secretos De Primavera",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto40.jpeg?raw=true",
            description: "Tónico capilar para la caída y crecimiento ideal para cabellos muy estancados y con caída excesiva. Con una fórmula inmejorable desarrollada con extractos, proteína y aminoácidos."
        },
        {
            id: "040",
            categoria: "Capilar",
            name: "Champú 2En1 Pert Plus Champú Y Acondicionador",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto41.jpeg?raw=true",
            description: "PERT Plus 2 en 1 champú y acondicionador clásico limpia. Fórmula del medio acondicionado. Champú y acondicionador de medio en una fórmula que añade facilidad de uso, enjuague con agua limpia y no acumular. Hacer cabello normal cabello brillante y saludable."
        },
        {
            id: "041",
            categoria: "Capilar",
            name: "Shampo Four Seasons Aceite Multipropósito Capilar",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto42.jpeg?raw=true",
            description: "Es una mezcla de aceites completamente puros y naturales (eso es lo que nos diferencia de otros del mercado, que el nivel de pureza de este tratamiento es inigualable).Tiene muchos usos, pestañas, cejas, estrías, uñas, desmaquillar y puntas del cabello.Para este último sí que es una maravilla."
        },
        {
            id: "042",
            categoria: "Capilar",
            name: "Fantasía Natural",
            price: "34000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto43.jpeg?raw=true",
            description: "CON PROTECCIÓN UV (crea en el cabello una barrera que protege de los rayos solares directos). Literal, vivirás una experiencia de maravillosos e inigualables resultados. ¡Muchos extractos se fusionan para formar tres productos en uno solo! Crema para peinar, tratamiento y termoprotector."
        },
        {
            id: "043",
            categoria: "Corporal",
            name: "Mantequillas",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto45.jpeg?raw=true",
            description: "Mantiene la piel hidratada."
        },
        {
            id: "044",
            categoria: "Labial",
            name: "Tinta Marcador Trendy",
            price: "15000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto47.jpeg?raw=true",
            description: "¡Si quieres tener color en tus labios durante todo el día, estas tintas son para ti! Son ultra pigmentadas. Su fórmula es líquida. De secado rápido. Es a prueba de manchas y no transfiere. Es de larga duración. Su divertido diseño en forma de marcador tiene una punta delgada que facilita su aplicación. Puedes construir su pigmentación. Al detal se envían tonos surtidos. Al por mayor se envían 3 tonos surtidos."
        },
        {
            id: "045",
            categoria: "Labial",
            name: "Labial Matte Trendy",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto48.jpeg?raw=true",
            description: "Labiales de larga duración acabado matte. Escoge tu tono favorito (nudes, rosas, rojos y cafés)."
        },
        {
            id: "046",
            categoria: "Pestañas, Accesorios",
            name: "Engrespador de pestañas",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto49.jpeg?raw=true",
            description: "Engrespador de pestañas sencillo."
        },
        {
            id: "047",
            categoria: "Pestañas",
            name: "Pestañina Poodle Trendy",
            price: "17000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto60.jpeg?raw=true",
            description: "- Pestañina Poodle, fórmula lavable. - Cepillo perfecto para todo tipo de pestañas. - Cepillo en plástico que evita grumos y brinda un mayor alargamiento."
        },
        {
            id: "048",
            categoria: "Brochas",
            name: "Brocha Mini",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto61.jpeg?raw=true",
            description: "Ideal para lograr una aplicación uniforme de la base. Úsala con productos líquidos o cremosos. Fabricada con pelo sintético y mango de madera. Es de línea económica y de excelente calidad."
        },
        {
            id: "049",
            categoria: "Sombras",
            name: "Sombras Star Luz",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto65.jpeg?raw=true",
            description: "Esta paleta de sombras con 4 tonos es perfecta para ti si eres amante de las tonalidades para diferentes tonos de pieles y neutras. Acabados mate y satinado. Buena pigmentación. Textura suave. Aplicación sedosa. Incluye aplicador y espejo."
        },
        {
            id: "050",
            categoria: "Facial",
            name: "Rubor Lovely Pink",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto66.jpeg?raw=true",
            description: "Dará a tus mejillas un toque de Color muy Natural - su forma es coqueta - tamaño ideal - con acabado matte Disponibles tonos 1 y 2."
        },
        {
            id: "051",
            categoria: "Sombras",
            name: "Paleta Cupcake Countour TRENDY",
            price: "15000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto67.jpeg?raw=true",
            description: "Esta paleta de sombras con 3 tonos es perfecta para ti si eres amante de las tonalidades para diferentes tonos de pieles y neutras. Acabados mate y satinado. Buena pigmentación. Textura suave. Aplicación sedosa. Incluye aplicador y espejo."
        },
        {
            id: "052",
            categoria: "Sombras",
            name: "DUO BEAUTY",
            price: "20000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto68.jpeg?raw=true",
            description: "¡Se convertirá en tu nueva paleta de rostro favorita! Trae un iluminador y un rubor o contorno. Sus tonos son universales. Textura suave y fácil de difuminar. Se envía surtido."
        },
        {
            id: "053",
            categoria: "Facial, Sombras",
            name: "Iluminador Fruity Soda",
            price: "13000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto69.jpeg?raw=true",
            description: "Bronceador de la colección Fruity Soda. Tonalidad Light Bronzer. Contiene 3.5 gr. Viene en un practico empaque. Dale color a tus mejillas y resalta tu maquillaje con estos bronceadores que tenemos para ti."
        },
        {
            id: "054",
            categoria: "Accesorios, Capilar",
            name: "Pinza Rizadora",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto70.jpeg?raw=true",
            description: "¡Nada mejor que tener un crespos perfectos y definidos! con tubo pequeño para mejor definicion facil de manejar con mango delgado y libiana."
        },
        {
            id: "055",
            categoria: "Accesorios",
            name: "Botilitos Para el agua",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto72.jpeg?raw=true",
            description: "¡Termo de Agua 2 Litros de colores motivacional! Te presentamos este hermoso y práctico.Mide tu ingesta diaria de agua y recuerda mantenerte hidratado, con nuestros dos diseños diferentes."
        },
        {
            id: "056",
            categoria: "Accesorios",
            name: "Espejos Paleta Trendy",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto73.jpeg?raw=true",
            description: "¡Nada mejor que tener un espejo de mano para maquillarte a detalle! Espejo de mano con forma cuadrada.Diseño exclusivos Trendy. Tiene un mango central de peso equilibrado. Es perfecto para tus viajes, retocar o maquillar en cualquier lugar."
        },
        {
            id: "057",
            categoria: "Sombras",
            name: "PROTECTOR SOLAR CORPORAL TRENDY",
            price: "40000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto75.jpeg?raw=true",
            description: "¡Olvídate de quemaduras solares en tu cuerpo con nuestro Protector Solar Corporal! Factor de protección solar del 50+. Tiene el máximo nivel de protección solar comprobado científicamente. Textura fluida, ligera y de rápida absorción. No deja rastro blanco, ni sensación grasosa. Contiene Extracto de Aloe Vera que suaviza y regenera la piel. Formulado con Extracto de Manzanilla que tonifica y limpia la zona. Protege de luz solar y luces artificiales. Resistente al agua."
        },
        {
            id: "058",
            categoria: "Sombras",
            name: "Crema Anti Acne",
            price: "25000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto76.jpeg?raw=true",
            description: "Su formula es hidratante, suave y delicada con la piel, no obstruye los poros lo que puede ser utilizada todos los días, el extracto de rosas es lo mas beneficioso es calmante, refrescante, hidratante, nivela el ph ayuda a combatir el acné."
        },
        {
            id: "059",
            categoria: "Sombras",
            name: "SUERO HIDRATENTE BIORETINOL TRENDY",
            price: "30000",
            img: "https://github.com/SoffiaSanchezz/imgs/blob/main/assets/Producto77.jpeg?raw=true",
            description: "SERUM HIDRATANTE BIORETINOL:Función hidratante y antiedad. Ideal para pieles mixtas a secas y maduras. Su activo más importante es conocido como Bio- retinol el cual es de origen vegetal. Disminuye las líneas finas de expresión. Mejora la tez de la piel. Efecto aclarante, promueve la renovación celular."
        },
    ],
    cart: []
};

export function ShoppingReducer(state, action) {
    switch (action.type) {

        //La logica de todas las acciones del carrito

        case TYPE.ADD_TO_CART: {
            let newItem = state.productos.find((productos) => productos.id === action.payload);
            // console.log(newItem);

            let itemInCart = state.cart.find((item) => item.id === newItem.id)

            return itemInCart ? {
                ...state,
                cart: state.cart.map((item) => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)
            } : {
                ...state,
                cart: [...state.cart, { ...newItem, quantity: 1 }],
            };
        }

        case TYPE.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload);


            return itemToDelete; quantity > 1 ? {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload ? {
                    ...item, quantity: item.quantity - 1
                } : item),
            } : {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }

        case TYPE.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }

        case TYPE.CLEAR_CART:
            return ShoppingInitialState;
        default:
            return state;
    }
}

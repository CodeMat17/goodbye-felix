<template>
  <div class="bg-gray-800 dark:bg-gray-100 w-full min-h-screen">
    <div class="px-4 py-8 max-w-5xl mx-auto">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="px-8 flex flex-col items-center justify-center">
          <img
            :src="goodbye"
            alt="goodbye logo"
            class="animate-pulse sm:w-64 sm:h-64"
          />
          <div
            class="
              mt-4
              sm:mt-0
              text-xl
              md:text-2xl
              text-blue-500
              dark:text-blue-700
              font-bold
              text-center
            "
          >
            <h1 class="tracking-widest">Sergeant</h1>
            <h1 class="animate-pulse text-4xl md:text-5xl tracking-widest">
              Felix Chukwu
            </h1>
            <p class="font-bold tracking-widest">(rtd)</p>
          </div>
        </div>
        <img
          :src="dad1"
          alt="dad logo"
          class="
            mx-auto
            sm:mx-0
            sm:w-64
            transform
            transition
            duration-500
            sm:scale-125
          "
        />
      </div>

      <div class="max-w-4xl mx-auto">
        <div
          class="
            text-gray-200
            dark:text-gray-800
            mt-10
            py-8
            tracking-widest
            text-lg
            sm:text-xl
          "
        >
          <div class="flex justify-end"></div>
          <h1
            class="
              text-2xl
              border-b border-gray-200
              dark:border-gray-800
              inline
              font-bold
            "
          >
            Requiem
          </h1>

          <div class="py-12">
            <img
              src="@/assets/svgs/bible.svg"
              alt="bible"
              class="w-24 h-24 sm:w-32 sm:h-32 mx-auto"
            />
            <div class="mt-4 flex justify-center">
              <div class="rounded-full overflow-hidden">
                <button
                  @click="englishButt"
                  class="
                    text-sm text-blue-600
                    tracking-wide
                    font-semibold
                    focus:outline-none
                    focus:shadow-outline
                    p-2
                  "
                  :class="english ? 'bg-gray-500' : 'bg-blue-200'"
                >
                  ENGLISH
                </button>
                <button
                  @click="igboButt"
                  class="
                    text-sm text-blue-600
                    tracking-wide
                    font-semibold
                    focus:outline-none
                    focus:shadow-outline
                    p-2
                  "
                  :class="igbo ? 'bg-gray-500' : 'bg-blue-200'"
                >
                  IGBO
                </button>
              </div>
            </div>
          </div>
          <div v-if="english">
            <h2 class="font-bold text-lg">Priest:</h2>
            <p>
              Praise be to God, the Father of our Lord Jesus Christ, the Father
              of mercies and the God of all consolation. He comforts us in all
              our aﬄictions and thus enables us to comfort those who are in
              trouble, with the same consolation we have received from him.
            </p>
            <p class="pt-2 font-bold text-lg">All:</p>
            <p>Blessed be God, the Father of our Lord Jesus</p>
            <p class="pt-4">
              I bless the body of FELIX CHUKWU with the holy water that
              recalls his baptism which St. Paul writes, "all of us baptized in
              Christ Jesus, were baptized unto his death". By baptism unto his
              death, we were buried together with him, so that just as Christ was
              raised from the dead by the glory of the father, we too might live
              a new life, for we have been united with him by likeness to his
              death, we shall be united with him by likeness to his
              resurrection.
            </p>
            <h2 class="font-bold text-lg pt-4">Let Us Pray:</h2>
            <p>
              Lord we humbly ask for your mercy. Accept the soul of your servant
              MR FELIX CHUKWU, forgive the sins he committed through human
              frailty. Free him from the bonds of death and admit him into
              everlasting life. Through Christ our Lord. (Amen).
            </p>
            <div class="flex justify-center py-8 space-x-6">
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
            </div>
            <h2 class="font-bold text-lg pt-4">Entrance Antiphon:</h2>
            <p>
              Just as Jesus died and rose again, so Will the father bring with
              Him, those who died in Jesus. Just as in Adam all men die, so in
              Christ all will be made alive, Alleluia. (1Thes. 4:14, 1 Cor.
              15:22)
            </p>
            <h2 class="font-bold text-lg pt-4">Opening Prayer:</h2>
            <p>
              O God, to whom it pertains to have mercy and to spare, we humbly
              entreat you for the soul of your servant FELIX CHUKWU, whom you
              have summoned from this world, that you will not deliver him into
              the hands of the enemies, nor forget him forever but bid your holy
              angels to receive him and bear him to our home in you, may he not
              know the pains of hell, but possess eternal joy. Through Christ
              our Lord.
            </p>
            <div class="flex justify-center py-8 space-x-6">
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
            </div>
            <h2 class="font-bold text-lg pt-4">First Reading:</h2>
            <p>
              A reading from the Book of Wisdom (3:1- 9). Brethren the soul of
              the virtuous are in the hands of God, no torment shall ever touch
              them. In the eyes of unwise, they did appear to die, their going
              looked like disaster, their leaving us like annihilation but they
              are in peace. If they experienced punishment as men see it, their
              aﬄiction, great will be their blessing, God has put them to test
              and proved them like gold in a furnace, and accepted them as
              holocaust. When the time comes for his visitation, they will shine
              out. As sparks run through the stubble, so will they. They shall
              judge nations, rule over peoples, and the Lord will be their king
              forever. They who trust in Him will understand the truth, those
              who are faithful will live with Him in love, for grace and mercy
              await those He has chosen.
            </p>
            <p class="pt-2">This is the word of the Lord.</p>
            <p>Thanks be to God.</p>
            <h2 class="font-bold text-lg pt-4">Responsorial Psalm:</h2>
            <h1 class="font-semibold">
              Response: The Lord is my Light and my help
            </h1>
            <p class="mt-2">
              1. The Lord is my light and my salvation, whom shall I fear? The
              Lord is the stronghold of my Life, before whom shall I shrink. R
            </p>
            <p class="mt-2">
              2. There is one thing I ask of the Lord for this is long: to live
              in the house of the Lord, all the days of my life, to behold his
              temple. R.
            </p>
            <p class="mt-2">
              3. O Lord, hear my voice when I call, have mercy and answer. It is
              your face, O Lord, that I see, hide not your face. R.
            </p>
            <p class="mt-2">
              4. I am sure I shall see the Lord's goodness in the land of the
              Living. Hope in Him, hold ﬁrm and take heart. Hope in the Lord. R.
            </p>
            <div class="flex justify-center py-8 space-x-6">
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
            </div>
            <h2 class="font-bold text-lg pt-4">Second reading:</h2>
            <p>
              A reading from the book of the Apocalypse (14:13). Then I heard a
              voice from heaven say to me write, write down: Blessed are those
              who die in the Lord, blessed indeed, the spirit says now they can
              rest forever after their work, since their good deeds go with
              them.
            </p>
            <p>This is the word of the Lord</p>
            <p>Thanks be to God.</p>
            <h2 class="font-bold text-lg pt-4">Alleluia Alleluia:</h2>
            <p>
              I am the living bread which has Come down from heaven, says the
              Lord, anyone who eats this bread will live forever, Alleluia.
            </p>
            <div class="flex justify-center py-8 space-x-6">
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
            </div>
            <h2 class="font-bold text-lg pt-4">Gospel:</h2>
            <p>
              A reading from the Holy Gospel according to John (14:1-6). At the
              time, Jesus said to his disciples, “Do not let your hearts be
              troubled. Trust in God still and trust in me. There are many rooms
              in my fathers' house, if there were not, I should not have told
              you, I am going now to prepare a place for you, and after I have
              gone and prepared you a place, I shall return to take you with me,
              so that where I am, you may be too”. You know the way to the place
              where I am going. Thomas said, “Lord we do not know where you are
              going so how can we know the way? Jesus said, “I am the way, the
              Truth and the Life. No one can come to the father except through
              me”.
            </p>
            <p class="mt-2">V. This is the Gospel of the Lord.</p>
            <p>R. Praise be to you Lord Jesus Christ.</p>
            <h2 class="font-bold text-lg pt-4 tracking-widest">HOMILY</h2>
            <h2 class="font-bold text-lg pt-4">Prayer Of The faithfuls</h2>
            <p>
              Let us pray with faith and conﬁdence to God our Father, who lives
              forever and who can do all things. As he raised his son Jesus
              Christ from the dead, so may he give peace and salvation to both
              the living and the dead.
            </p>
            <h2 class="font-bold text-lg pt-4">
              Response: Lord open the gates of paradise and welcome our brother,
              FELIX CHUKWU
            </h2>
            <p class="mt-4">
              1. For our departed husband, and friend, FELIX CHUKWU, may he who
              received the grace of baptism, reap its full fruits, as he enjoys
              the vision of God in the happiness of eternal life. We pray O
              Lord. Response.
            </p>
            <p class="mt-4">
              2. Let us pray for the family, relations, and friends of our
              departed brother, that they may be consoled and rejoice in the
              words of Christ who said, "I am the resurrection and the life”. We
              pray O Lord. Response
            </p>
            <p class="mt-4">
              3. For those to whom this world is the be-all and end-all, that
              they may come to believe the good news of salvation, renew their
              lives and have faith in Christ who is the way, the truth and the
              life. Response
            </p>
            <p class="mt-4">
              4. For those suﬀering on account of bereavement, that the
              generosity of their fellow Christians may give them encouragement,
              and help them to relieve their anxiety. Response
            </p>
            <p class="mt-4">
              5. For all those who are gathered here to pray for our brother,
              FELIX CHUKWU, that we may live, act and speak in full realization
              that one day, we shall be called upon to answer for our thoughts,
              words and actions. Response
            </p>
            <h2 class="font-bold text-lg pt-4">Let us pray:</h2>
            <p>
              May our prayer, O lord, come to the aid of your departed servant,
              FELIX CHUKWU, given a share of your redemption, through Christ our
              Lord.
            </p>
            <h2 class="font-bold text-lg pt-4">Prayer over the gifts:</h2>
            <p>
              Lord, receive these gifts oﬀered for the salvation of the soul of
              FELIX CHUKWU, may you be merciful in judging our brother, who
              believed and worked for Christ as his Lord and Saviour. We ask
              this through Jesus Christ our Lord. (Amen)
            </p>
            <h2 class="font-bold text-lg pt-4">Prayer After Communion:</h2>
            <p>
              God of mercy, we who received the Sacraments of Salvation pray for
              MR FELIX CHUKWU, your servant. You made him your adopted Son by
              Baptism while on earth, now that he has left this world, may your
              merciful love join him with your Saints in Heaven through Christ
              our Lord.
            </p>
            <div class="flex justify-center py-8 space-x-6">
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
            </div>
            <h2 class="font-bold text-lg pt-4">Final Absolution and Burial:</h2>
            <p>
              Our Brother, FELIX CHUKWU has fallen asleep in the peace of
              Christ, we commit him with faith in Jesus Christ, and hope in
              everlasting life to the loving mercy of our Father and assist him
              with our prayers. In baptism, he was made by adoption, the child
              of God. At the Lord's table, he was sustained and fed. May he now
              be welcomed at the table of God's children in heaven and share in
              eternal life with all the Saints. We also turn to our Lord on our
              own behalf. May we who now mourn our brother's departure, be one
              day united with him. May we go forward together on that day to
              meet Christ when our life appears in glory. Amen.
            </p>
            <h2 class="font-bold text-lg pt-4">Celebrant:</h2>
            <p>V. Saints of God</p>
            <p>R. Come to his aid.</p>
            <p class="mt-4">V. Come to meet him Angels of the Lord.</p>
            <p>R. Receive his soul and present him to God Most High</p>
            <p class="mt-4">
              V. May Christ who called you take you to Abraham's side
            </p>
            <p>R. Receive his soul and present him to God the Most High.</p>
            <p class="mt-4">
              V. Give him eternal rest, O Lord, and may your light shine on him
              forever.
            </p>
            <p>R. Receive his Soul and Present him to God the Most High.</p>
            <h2 class="font-bold text-lg pt-4">Celebrant:</h2>
            <p>
              Father, unto your hands we commend our brother, FELIX CHUKWU, we
              are conﬁdent that with all who have died in Christ, he will be
              raised to life on the last day in Christ, to be with you forever
              through Christ our Lord. Amen.
            </p>
            <h2 class="font-bold text-lg pt-4">BLESSING OF THE GRAVE:</h2>
            <p>
              O God, through whose mercy, the souls of the faithful are at rest,
              bless this grave, we beg you, and send your Holy Angels to guard
              it. Free from all the bonds of sin, the soul of FELIX CHUKWU,
              whose body will be buried here, so that he may ﬁnd joy in your
              company, with all the Saints forever and ever through Christ our
              Lord. Amen.
            </p>
            <p class="mt-2">
              It has pleased Almighty God to call our brother, FELIX CHUKWU, in
              this life to himself. Accordingly, we have committed his body in
              the earth whence it came since Christ, the ﬁrst fruit of the dead,
              has risen again and will refashion our ﬁnal body in the pattern of
              His glorious risen body; we commend our brother to the Lord, may
              he embrace him in his peace and bring his body to life again on
              the last day.
            </p>
            <section class="italic">
              <p class="mt-4">The body is now lowered into the grave.</p>
              <p>V. Lord have mercy</p>
              <p>R. Lord have mercy</p>
              <p class="mt-2">V. Christ have mercy</p>
              <p>R. Christ have mercy</p>
              <p class="mt-2">V. Lord have mercy</p>
              <p>R. Lord have mercy</p>
            </section>
            <h2 class="font-bold text-lg pt-4">Celebrant:</h2>
            <p>
              Let us pray for FELIX CHUKWU, to our Lord Jesus Christ, who said,
              “I am the Resurrection and the Life. The man who believes in me,
              even if he dies, will live again. Every living person who puts his
              faith in the Lord will never suﬀer eternal death. Lord you wept at
              the death of Lazarus your friend, comfort us on our sorrow. We ask
              this in faith.
            </p>
            <p class="mt-2">R. Lord hear our prayer.</p>
            <p class="mt-4">
              V. You raised the dead to life, give your servant eternal life. We
              ask this in faith.
            </p>
            <p class="mt-2">R. Lord hear our prayer.</p>
            <p class="mt-4">
              V. You promised to the thief who repented, bring your servant to
              the joys of heaven, We ask this in faith.
            </p>
            <p class="mt-2">R. Lord hear our prayer.</p>
            <p class="mt-4">
              V. Our brother, FELIX CHUKWU, was nourished with Holy Eucharist of
              your body and blood, give him a place in the great banquet in
              heaven. We ask this in faith.
            </p>
            <p class="mt-2">R. Lord hear our prayer.</p>
            <p class="mt-4">
              V. Comfort us in our sorrow at the death of our brother FELIX
              CHUKWU, let you be our hope.
            </p>
            <p class="mt-2">R. Lord hear our prayer.</p>
            <h2 class="font-bold text-lg pt-4">Let Us Pray</h2>
            <p>
              Show your mercy Lord to your departed servant, FELIX CHUKWU, since
              he strove to do your will, let him not be punished for wrong
              doing. And as he was united in true faith with all your faithful
              people, let him by your loving goodness be united with the Angelic
              throne. Through Christ our Lord. Amen.
            </p>
            <p class="mt-2">V. Eternal rest grant to him O Lord.</p>
            <p>R. And let perpetual light shine upon him.</p>
            <p class="mt-2">V. May his soul rest in Peace.</p>
            <p>R. Amen.</p>
            <h2 class="font-bold text-lg pt-4">Prayer For The Mourners</h2>
            <p>
              Grant O God that while we lament the departure of this your
              servant, FELIX CHUKWU, we may always remember that we are most
              certain to follow him. Give us grace to prepare for that last hour
              by a good life; that we may not be surprised by a sudden and
              unprovided death, but be ever watching that when you come, we may
              enter into eternal glory, through Christ our Lord Amen.
            </p>
            <h2 class="font-bold text-lg pt-4">
              Prayer for the Deceased Person
            </h2>
            <p>
              May Mary, the Most Virgin Mother of God, Kindest comforter of
              those who mourn, commend to her son, the soul of our brother
              FELIX CHUKWU, who has departed this life, that through her maternal
              intercession, our brother may quickly reach his longed for home in
              the heavenly father-land, and live forever and ever. R. Amen
            </p>
            <p class="mt-4">
              V. May the soul of MR FELIX CHUKWU and the souls of all the
              faithfuls departed.
            </p>
            <p>R.through the mercy of God Rest in Peace. Amen.</p>
          </div>
          <div v-if="igbo">
            <h2 class="font-bold text-lg">Uko:</h2>
            <p>
              Ekele dili Chineke, Nna nke Onyenwe anyi Jesu Kristi, Nna nke
              ebere nile, na Chineke Onye nkasi obi nile. N'hi na o bu site na
              nkasi obi o na akasi anyi na nsogbu anyi nile k'anyi ji wee
              nwee-ike kasie ndi ozo obi n ime mkpagbu obula diri ha.
            </p>
            <p class="pt-2 font-bold text-lg">All:</p>
            <p>Ngozi diri Chineke Nna Onyenwe anyi Jesus.</p>
            <p class="pt-4">
              Ejim mmiri nso agozi Mazi FELIX CHUKWU, mmiri nso na echetara anyi
              maka baptism nke Paul di aso dere banyere si "Anyi nile emere
              baptism were baa n'onwu ya. Ya bu, dika Kristi siri n'ike ebube
              nke Nna were bilie n'onwu, etu ahu kwa ka anyi na Kristi ga esi
              diba ndu ohuru. Oburu na anyi na ya dikoo n'otu n'oyiyi nke onwu
              ya, anyi na ya ga adikwa n'otu na oyiyi nke mbilite n'onwu Ya”
            </p>
            <h2 class="font-bold text-lg pt-4">Ka annyirio aririo:</h2>
            <p>
              Onye nwe anyi, anyi ji umeala ario ebere Gi, were obioma nara
              mkpuru obi nwa odibo Gi, FELIX CHUKW, gbaghara ya njo nile omere
              na adighi ike nke anu ahu. Topu ya agbu nile nke onwu ka ogafee na
              ndu ebighi ebighi site na Kristi Onyenweanyi (Amen).
            </p>
            <div class="flex justify-center py-8 space-x-6">
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
            </div>
            <h2 class="font-bold text-lg pt-4">Ukwe Mbata:</h2>
            <p>
              Etu Jesu siri nwuo, ma kulite kwa n'onwu, etu ahu ka Nna ga esi
              kulite ndi nile nwuru na kristi, Etu mmadu nile siri keta onwu
              n'aka Adam, etu ahu ka mmadu nile ga esi keta ndu n'aka Kristi
              Aleluya.
            </p>
            <h2 class="font-bold text-lg pt-4">EKPERE MMEGHE:</h2>
            <p>
              O Chineke ngi ka odiri igosi ebere na mgbaghara mmehie; anyi ji
              obi umeala ario maka mkpuruobi nwa odibo gi bu FELIX CHUKWU, onye
              isi n'uwa nkea kporo; ahapukwala ya n'aka onye iro, echefukwala ya
              n'aka onye iro, echefukwala ya ebebe, ma tie iwu ka ndi muo ozi gi
              nara ya dubata ya n'obi anyi nke di na paradise; ebe o tukwasili
              nchekwube ya na nginwa, ekwela ka o mata ufu nke oku-muo, ma
              kpobata ya n'anuri nke di ebebe n'eligwe. Site na Dinwenu anyi
              Jesu Kristi nwa gi, onye gi na ya di ndu na achi, n'idiko n'otu
              nke muo nso, otu Chukwu, site n'uwata uwa nile.
              <span class="font-semibold">R. Amen</span>
            </p>
            <div class="flex justify-center py-8 space-x-6">
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
            </div>
            <h2 class="font-bold text-lg pt-4">IHE OGUGU NKE MBU:</h2>
            <p>
              Ihe ogugu nke a si n'akwukwo nke amamihe (3:1-9) Mkpuru obi ndi
              ezi omume no n'aka Chineke, ahuhu obula agaghi adakwasi ha ozo,
              n'anya ndi nzuzu ha nwuru anwu ha dika nnukwu ihe nwute, nhapu ha
              dika isi njedebe ihe nile, mana ha no n'udo. N'anya ndi mmadu, o
              bu ahuhu ka o nyere ha mana onwu na anwuri bu ihe juputara
              nchekwube ha. Ha tara nwantiti ahuhu iji were di mma, mana ha
              ga-anata nnukwu ugwo, n'ihi na Chineke eleghala ha dika esi anara
              ihe eji churu ya aja na arughi aru. Mgbe oge obibia ya ruru, ha
              ga- achawaputa welu na na egbukesi. Ha ga ekpe uwa nile ikpe, chia
              ndi mmadu, Dinwenu ga-abu eze ha ebebe, ndi tukwasiri obi ha na
              ya, ga aghota ihe bu eziokwu, ndi kwerenu ga eso ya biri
              n'ihunanya ya n'ihi na amara na ebere ga-adiri ndi o hotara.
            </p>
            <p class="pt-2">Okwu nke Oseburuwa .</p>
            <p>Ekenediri chukwu.</p>
            <h2 class="font-bold text-lg pt-4">Abu Oma :</h2>
            <h1 class="font-semibold">
              Aziza: Dinwenu bu onye nchem, onweghi ihem ga acho.
            </h1>
            <p class="mt-2">
              1. Dinwenu bu onye nchem, onweghi ihem ga acho. O na enyem ezumike
              n'ebe ahihia ndu di, Ona edugam na akuku mmiri ezumike, iji
              wechigha ndu n'ime mmuo dara ada. Aziza
            </p>
            <p class="mt-2">
              2. O na edum n'uzo kwu oto, ona eme ka aha ya si di. Oburugodu na
              m no aga na ochichiri, egwu obula agahi atu m. Iji mkpara na ngu
              gi nodebem, obu ha na enyem ahu udo. Aziza.
            </p>
            <p class="mt-2">
              3. Ihunanya na obioma ga na esom ubochi nile. Aga m'ebi n'ulo nke
              Chukwu, biri na ya ebebe ebebe. Aziza.
            </p>
            <div class="flex justify-center py-8 space-x-6">
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
            </div>
            <h2 class="font-bold text-lg pt-4">IHE OGUGUNKE ABUO:</h2>
            <p>
              Ihe ogugu nke a si n 'akwukwo mkpughe (14:13). Anukwara m olu si
              n'eluigwe na-ekwu si "dee nke a n'akwukwo: "ngozi ga-adiri ndi na
              anwu n'ime onyenwanyi site ugbu a diri gaba”. Ngozi diri ha
              n'eziokwu, ka ha zuru ike n'azu”, O bu mmuo nso na-ekwu.
            </p>
            <p>Okwu nke Oseburu uwa</p>
            <p>Ekele diri Chukwu</p>
            <h2 class="font-bold text-lg pt-4">Alleluia Alleluia:</h2>
            <p>
              Abu m achicha di ndu nke si n'eligwe bia, Dinwenu na-ekwu. Onye
              obula riri achicha a ga-enwe ndu ebebe. Aleluya.
            </p>
            <div class="flex justify-center py-8 space-x-6">
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
            </div>
            <h2 class="font-bold text-lg pt-4">OZIOMA:</h2>
            <p>
              Ihe ogugu nke a si n'ozioma di aso nke Jon dere (14:1-6). N'oge
              ahu, Jesu gwara ndi umuazu ya si, jisienu ike, obi etila unu eti,
              kwerenu na Chineke, kwerekwanu na m. Otutu ebe obibi di n'ulo nna
              m, oburu na nke a abughi eziokwu, gini mere m ji gwa unu na m ga
              eje ikwadobere unu ebe unu g'ebi? Mgbe m gara kwadochara unu ebe
              obibi, aga m abiaghachi azu ikporo unu ka ebe m no burukwa ebe unu
              ga-ano. Unu onwe unu ma uzo ebe m na eje. Ma Thomas si ya; Nna
              anyi ukwu, anyi amaghi ebe I na eje, kedukwanu k'anyi ga-esi mara
              uzo ya? Jesu agwa ya si; mu onwe m bu uzo, eziokwu na ndu, onweghi
              onye na- abiakwute Nna beluso ma osi naka m.
            </p>
            <p class="mt-2">V. Ozioma nke Oseburuwa.</p>
            <p>R. Otito diri gi Kristi.</p>
            <h2 class="font-bold text-lg pt-4 tracking-widest">OKWU CHUKWU</h2>
            <h2 class="font-bold text-lg pt-4">Ekpere Nke Ndi Kwewnu</h2>
            <p>
              Ka anyi were okwukwe na ntukwasi obi kpokue Chukwu Nna anyi, onye
              di ebebe, na onye si na onwu kunite nwa ya bu Jesu Kristi, ka onye
              ndi di ndu nwuru-anwu udo na nzoputa.
            </p>
            <h2 class="font-bold text-lg pt-4">
              Aziza: Meghe onu-uzo, onu-uzo nke eluigwe, Meghe onu-uzo, ka FELIX
              CHUKWU wee bata.
            </h2>
            <p class="mt-4">
              1. Maka nwanne anyi FELIX CHUKWU, ka oketa oke na ihe nke mbilite
              onwu kristi, bia bata na ndu ohuru nke udo na annuli. Aziza:
            </p>
            <p class="mt-4">
              2. Ka anyi kpee ekpere maka ezinulo, umunne na ndi enyi Mazi FELIX
              CHUKWU, kaha nwee ntasi obi, nuria n'okwu nke kristi kwuru si,
              “Abum mbilite na onwu, burukwa ndu”. Aziza:
            </p>
            <p class="mt-4">
              3. Maka ndi nchekwube ha nile kwusiri n'uwa ka ha bia kwere na
              ozioma nke nzoputa ebebe, gbanwo ndu ha, bia nwee okwukwe na
              kristi Onye bu uzo buru ndu, burukwa ezi okwu. Aziza:
            </p>
            <p class="mt-4">
              4. Maka ndi na ata ahuhu na mmadu nwunariri ha, ka afo oma nke ndi
              otu kristi ibe ha, gbaa ha ume, bia benatalu ha nchekasi. Aziza:
            </p>
            <p class="mt-4">
              5. Maka ndi gbakoro ebea ikpere nwanne anyi Mazi FELIX CHUKWU
              ekpere, k'anyi na echeta oge nile nke ndu anyi, na otu ubochi, na
              anyi ga aza aziza maka echiche anyi ga, okwu onu any gaa, na
              onumeanyi gaa. Aziza:
            </p>
            <h2 class="font-bold text-lg pt-4">Ka Anyi ario:</h2>
            <p>
              O Dinwenu, mee ka aririo anyi ndia nyere nwa odibo gi bu FELIX
              CHUKWU, hapuru ahapu aka, ka azoputa ya na njo ya nile, bia ketara
              ya oke na nzoputa Gi, site na Kristi Dinwenu anyi.
            </p>
            <h2 class="font-bold text-lg pt-4">EKPERE MAKA ONYINYE:</h2>
            <p>
              Dinwenu anyi, nara onyinye anyi na ebunye gi maka nzoputa FELIX
              CHUKWU , ka Kristi were obi ebere kpee nwanne anyi bu FELIX
              CHUKWU, maka na okwenyere na Kristi bu Dinwenu na onye nzoputa ya.
              Orukwuruziara olu na uwaa etu ochere ga amasi gi. Anyi ario nkea
              nke site na Jesu kristi onye nwe anyi. Amen
            </p>
            <h2 class="font-bold text-lg pt-4">
              EKPERE MA ANATACHAA ORIRI NSO:
            </h2>
            <p>
              Chineke onye ebere, anyi bu ndi natara sacrament nke nzoputa na
              ario maka nwa odibo Gi bu FELIX CHUKWU bu nwanne anyi. Ebe
              igunyere ya na ndi bu umu Gi mgbe o no na uwa a site na Baptism,
              ugbua ebe ohapuworo uwa nkea, biko gunyekwaya n'otu ndi nso gi.
              site na Kristi Dinwenu anyi.
            </p>
            <div class="flex justify-center py-8 space-x-6">
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
              <img
                src="@/assets/svgs/candle.svg"
                alt="candle"
                class="candleb w-12 h-12"
              />
            </div>
            <h2 class="font-bold text-lg pt-4">Onyeisi Emume:</h2>
            <p>
              Anyi ka o diri ezigbo ndi otu Kristi ili ahu madu n'uzo kwesiri
              ekwesi. Ya mere ka anyi jirinu umeala rio Chineke, onye na-enye
              ihe nile ndu ka okulite ahu nwanne anyi, FELIX CHUKWU, onye anyi
              na-eli ugbua na-adighi ike n'onodu ndi nso na n'ike Muo Nso ka o
              mee ka o sonye n'otu ndi nso na nke ndi nile kwerenu gara aga. Ka
              o gosi ya ebere n'ikpe nke o ga-ekpe ya. Nna anyi bukwa onye e ji
              onwu gbaputa, onye akwugoro ugwo oji. Onye e mere ka ya na Nna
              dikwa na mma na nnukwu ogbako nke Eze ahu di ebebe n'anuri nke na-
              enweghi ngwucha na mmeko nke ndi nso nile.
            </p>
            <h2 class="font-bold text-lg pt-4">Onye Isi Emume:</h2>
            <p>V. Ndi nso nke Chukwu</p>
            <p>R. Nyere nuya aka</p>
            <p class="mt-4">V. Ndi Muo Ozi nke Chineke, zutenu ya</p>
            <p>
              R. Nara nu mkpuru obi ya, duru ya duga n'ihu nke onye kasi elu.
            </p>
            <p class="mt-4">
              V. Nye ya ezumiike ebebe Onye nweanyi, meekwa ka ihe di ebeebe
              chakwasi ya.
            </p>
            <p>
              R. Nara nu mkpuru obi ya, duru ya duga n'ihu nke onye kasi elu.
            </p>
            <p></p>
            <h2 class="font-bold text-lg pt-4">Onye Isi Emume:</h2>
            <p>
              Nna kachasi obi oma, na aka Gi k'anyi na etinye mkpuru obi nwanne
              anyi bu FELIX CHUKWU, anyi ji aka site na nchekwube na anyi ga eso
              Kristi bilie ozo n'ubochi ikpeazu. Ruo mgbe anyi na nwanne anyi
              FELIX CHUKWU, ga eso nonyere Gi oge nile. Site na Kristi Dinwenu
              anyi. Amen.
            </p>
            <h2 class="font-bold text-lg pt-4">NGOZI ILI:</h2>
            <p>
              Onyenweanyi Jesu Kristi, I noro n'ime ili mkpuru ubochi ato, wee
              si otu ahu gozie ili nke ndi nile kwere na gi. Ya mere ndi nile
              ahu ha di n'ime ili jiri nwee nchekube karia na ha ga-esi n'onwu
              bilite ozo. Biko mee ka nwanne anyi bu FELIX CHUKWU no na ili
              nkea, zuo ike na ndokwa. Ka o noro na ya rue mgbe I ga ekuli ya,
              nye ya ihe. Gi onwe gi bukwa mbilite n'onwu na ndu. Mee ka owere
              oku nke ihu gi hu ihe di ebighi-ebi n'eluigwe; Gi onye di ndu,
              na-achi rue mgbe ebighiebi. Amen.
            </p>
            <p class="mt-2">
              Anyi adonyego ahu nwanne anyi FELIX CHUKWU n'ili ka olaghachi
              n'ebe nke osi puta. Anyi na eme nkea n'ihi na omasiri
              Chineke-ji-ike nile isi na ndu nkea, kporokwa nwanne anyi. Kristi
              bu onye mbu nke si n'onwu bilite, obukwa onye nke ga eme ka ahu
              anyi dara ada gbanwoo, wee yie ahu nke ya bu so ihe, n'ihi nkea,
              anyi na etinye ahu nwanne anyi n'aka chineke, ka onara ya n'udo
              nke ya. Mekwaa ka ahu ya bilie ozo n'ubochi ikpeazu.
            </p>
            <section class="italic">
              <p class="mt-4">Adonye ahu n'ime ili.</p>
              <p>V. Onye nweanyi mee ebere</p>
              <p>R. Onye nweanyi mee ebere</p>
              <p class="mt-2">V. Christ mee ebere</p>
              <p>R. Christ mee ebere</p>
              <p class="mt-2">V. Onye nweanyi mee ebere</p>
              <p>R. Onye nweanyi mee ebere</p>
            </section>
            <p class="mt-4 tracking-widest">V. Nna anyi no n'enuigwe...</p>
            <h2 class="font-bold text-lg pt-4">Onye Isi Emume:</h2>
            <p>
              K'anyi kpee ekpere maka nwanne anyi FELIX CHUKWU, k'anyi rionu
              Dinwenu anyi jesu Kristi, onye kwuru si: "Mu onwem bu mbilite
              n'onwu na ndu. Onye obula kwere na m, obunadi na a si na o nwuru
              anwu, o ga-adi ndu ozo, onye obula nke di ndu, nke kwekwara na m,
              o gaghi anwu anwu, ruo mgbe ebighi ebi.” Ka Gi, onye gbara anya
              mmiri n'ihi onwu Lazarus, ﬁchaa anyi anya mmiri, anyi n'ario Gi,
              Kristi.
            </p>
            <p class="mt-2">R. Dinwenu anyi nuru olu anyi</p>
            <p class="mt-4">
              V. ka Gi, onye kpoghachiri ndi nwuru anwu na ndu, nye nwanne anyi
              bu FELIX CHUKWU, ndu ebighi ebi. Anyi ario Gi Kristi.
            </p>
            <p class="mt-2">R. Dinwenu anyi nuru olu anyi</p>
            <p class="mt-4">
              V. Eji mmiri nke baptism wuchapu nwanne anyi FELIX CHUKWU, njo ya,
              tee kwa ya mmanu nke zoputa, biko onye nweanyi, nye ya ezumike na
              etiti ndi nso. Anyi ario Gi Kristi.
            </p>
            <p class="mt-2">R. Dinwenu anyi nuru olu anyi.</p>
            <p class="mt-4">
              V. Ejiri oriri-nso nke ahu Gi na obara Gi wee zuo nwanne anyi
              FELIX CHUKWU biko Dinwenu anyi kenye ya oche na nnukwu oriri nke
              ala eze Gi. Anyi n'ario Gi, Kristi.
            </p>
            <p class="mt-2">R. Anyi ario Gi, nuru olu anyi.</p>
            <p class="mt-4">
              V. Anyi no n'uru n'ihi FELIX CHUKWU, ka i jiri okwukwe na olile
              anya nke ndu ebebe kasie anyi obi.Anyi n'ario Gi, Kristi.
            </p>
            <p class="mt-2">R. Dinwenu anyi nuru olu anyi.</p>
            <h2 class="font-bold text-lg pt-4">Ka anyi rio aririo</h2>
            <p>
              Onyenwe anyi, uzo ebere abuo ka anyi na- ario ka I mere nwanne
              anyi bu FELIX CHUKWU, nke bu, nna anyi nwara oke ya ime ihe bu
              uche gi. Ekwela ka odaba n'ahuhu nke diri mmehie ya. Nke abuo,
              mgbe nwaodibo gi no n'uwa a, ezi okwukwe bu ihe jikoro ya na ndi
              nile kwerenu. Mee ka ebere Gi sikwa otu ahu jikoo ya na ndi mmuo
              ozi n'uwa ozo. Anyi n'ario Gi nke a site na Kristi Dinwenu anyi.
              Amen.
            </p>
            <p class="mt-2">V. Nye ya ezumiike ebebe, Onyenweanyi.</p>
            <p>R. Mee ka ihe di ebebe chakwasi ya.</p>
            <p class="mt-2">V. Ka ozuru ike na ndokwa.</p>
            <p>R. Amen.</p>
            <h2 class="font-bold text-lg pt-4">EKPERE MAKA NDI N'ERU UJU</h2>
            <p>
              O Chukwu anyi na-ario, ebe anyi na-akwa akwa ariri maka onwu nke
              nwanne anyi bu FELIX CHUKWU, ka anyi na echeta mgbe nile na ubochi
              onwu nke anyi na-abiawanye nso. Nye anyi gratia Gi, iji kwado maka
              ubochi ikpeazu ahu site n'idi na-ebi ndu di mma mgbe nile, ka onwu
              mberede ghara ikwudo anyi, kama ka anyi na eche nche oge nile ka o
              ga-abu mgbe obula I kporo anyi, k'anyi nwee ike iso banye n'anuri
              ebebe.
            </p>
            <p class="mt-2">R. Amen</p>
            <h2 class="font-bold text-lg pt-4">Ekpere Maka Onye Nwuru Anwu</h2>
            <p>
              Ka Maria, Nne nke Chukwu, Nne dikasirii ebere, onye ntasi obi ndi
              na eru uju, hanye na aka nwa ya mkpuru obi nke hapugoro uwa nkea,
              ka esite n'ekpere ya, di ka Nne; nwe ike iru oso-oso n'ulo obibi
              ahu, o na atu anya ya n'eluigwe, biri nay'a ebebe ebebe.
            </p>
            <p class="mt-2">R. Amen</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   mounted () {
  window.scrollTo(0, 0)
},
  data() {
    return {
      goodbye: "goodbye",
      english: true,
      igbo: false,
    };
  },
  asyncData({ $cloudinary }) {
    const goodbye = $cloudinary.image.url("goodbye/goodbye", {
      //  fetch-format: "auto"
      quality: "auto",
      radius: "max",
      crop: "thumb",
    });
    const dad1 = $cloudinary.image.url("goodbye/dad1", {
      quality: "auto",
    });
    return { goodbye, dad1 };
  },
  methods: {
    englishButt() {
      this.igbo = false;
      this.english = true;
    },
    igboButt() {
      this.english = false;
      this.igbo = true;
    },
  },
  mounted() {
    gsap.from(".candleb", {
      duration: 15,
      opacity: 0,
      y: "random(-200, 200)",
      ease: "back",
      stagger: 0.25,
      repeat: -1,
    });
  },
};
</script>

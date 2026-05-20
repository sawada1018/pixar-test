/* キャラクター画像ファイル名（参考・再生成スクリプト用。表示は characters/*.html の img） */
const CHAR_IMAGES = {
  toy: { woody: 'wo.jpeg', buzz: 'baz.jpeg', ham: 'hum.jpeg', forky: 'forky.jpeg', jesse: 'jesse.jpeg', alien: 'alien.jpeg' },
  nemo: { marlin: 'mani.jpeg', nemo: 'nimo.jpeg', dory: 'dori.jpg', crash: 'crash.jpeg', bruce: 'bruce.jpeg', nigel: 'pelican.jpeg' },
  incredibles: { bob: 'inc.jpeg', helen: 'irs.jpeg', dash: 'dash.jpg', violet: 'vaio.jpg', jackjack: 'jackjack.jpg', edna: 'edna.jpeg' },
  up: { carl: 'carl.jpeg', russell: 'russell.jpeg', dug: 'dug.jpeg', kevin: 'kevin.jpeg', muntz: 'muntz.jpg' },
  insideout: { joy: 'joy.jpeg', sadness: 'sadness.jpeg', anger: 'anger.jpeg', fear: 'fear.jpeg', disgust: 'disgust.jpeg', bingbong: 'bingbong.jpeg' },
  coco: { miguel: 'miguel.jpeg', hector: 'hector.webp', delacruz: 'delacruz.jpg', mamaCoco: 'coco.jpeg', dante: 'dante.jpeg' },
  soul: { joe: 'joe.jpeg', twentytwo: '22.jpeg', dorothea: 'dorothea.jpeg', terry: 'terry.webp', jerry: 'jerry.jpeg' },
  monsters: { sully: 'sari.jpg', mike: 'mic.jpeg', boo: 'boo.jpeg', randall: 'randall.jpeg', roz: 'roz.jpeg', celia: 'celia.jpg' },
  ratatouille: { remy: 'remi.jpeg', linguini: 'ring.jpg', colette: 'colette.jpeg', ego: 'ego.jpeg', emile: 'emi.jpeg' },
  zootopia: { judy: 'judhi.jpeg', nick: 'nic.jpeg', bellwether: 'roz.jpeg', bogo: 'bruce.jpeg', flash: 'slinky.jpg', clawhauser: 'hum.jpeg' },
  cars: { mcqueen: 'baz.jpeg', mater: 'hum.jpeg', sally: 'jesse.jpeg', doc: 'carl.jpeg', ramone: 'wo.jpeg' },
  walle: { walle: 'wo.jpeg', eve: 'baz.jpeg', auto: 'terry.webp', captain: 'bruce.jpeg', moe: 'hum.jpeg' },
  brave: { merida: 'jesse.jpeg', elinor: 'irs.jpeg', fergus: 'bruce.jpeg', mordeu: 'muntz.jpg', witch: 'roz.jpeg' },
  luca: { luca: 'miguel.jpeg', alberto: 'russell.jpeg', giulia: 'colette.jpeg', ercole: 'ego.jpeg', machiavelli: 'makyaberi.jpeg' }
};

/* キャラクター翻訳 ja / en / ko */
const CHAR_TRANSLATIONS = {
  ja: {
    toy: {
      woody: { name: 'ウッディ', role: 'カウボーイ人形 · リーダー', quote: '"Reach for the sky!" 空に向かって手を上げな！' },
      buzz: { name: 'バズ・ライトイヤー', role: 'スペースレンジャー', quote: '"To infinity and beyond!" 無限の彼方へ！' },
      ham: { name: 'ハム', role: '貯金箱ブタ · 物知り', quote: 'ちゃっかり屋だけど頼りになる。' },
      forky: { name: 'フォーキー', role: '先割れスプーンのおもちゃ', quote: '目を離すとすぐにゴミ箱に入りたがる。' },
      jesse: { name: 'ジェシー', role: 'カウガール人形 · 元気者', quote: 'ぱっと明るく、どんなピンチも乗り越える！' },
      alien: { name: 'リトル・グリーンメン', role: 'UFOキャッチャーの宇宙人', quote: '"The Claw!" ザ・クロー！！' }
    },
    nemo: {
      marlin: { name: 'マーリン', role: 'クマノミ · ニモのパパ', quote: '心配性だけど誰より愛情深い父。' },
      nemo: { name: 'ニモ', role: 'クマノミ · 冒険好きな息子', quote: '小さくても勇気は誰にも負けない！' },
      dory: { name: 'ドリー', role: 'ナンヨウハギ · 忘れっぽい親友', quote: '"Just keep swimming!" 泳ぎ続けるのよ！' },
      crash: { name: 'クラッシュ', role: 'ウミガメ · 波乗り上手', quote: '海流に乗ってどこへでも！' },
      bruce: { name: 'ブルース', role: 'ホオジロザメ · 魚は食べない', quote: '"Fish are friends, not food!"' },
      nigel: { name: 'ナイジェル', role: 'ペリカン · 歯科医院の友', quote: '空から海を繋ぐ、頼れる大きな友達。' }
    },
    incredibles: {
      bob: { name: 'Mr.インクレディブル', role: 'ボブ・パー · 怪力ヒーロー', quote: '平凡な生活に物足りなさを感じる元最強ヒーロー。' },
      helen: { name: 'イラスティガール', role: 'ヘレン・パー · 伸縮自在', quote: '家族を守る、頼れるスーパーママ。' },
      dash: { name: 'ダッシュ', role: '長男 · 超スピード', quote: '世界一速い少年、でも目立ちたくてしょうがない。' },
      violet: { name: 'ヴァイオレット', role: '長女 · 透明化・バリア', quote: '思春期の悩みと超能力が複雑に絡み合う。' },
      jackjack: { name: 'ジャック・ジャック', role: '末っ子 · 万能の赤ちゃん', quote: '謎だらけの最強ベビー。何の能力があるの？' },
      edna: { name: 'エドナ・モード', role: 'スーパーコスチューム デザイナー', quote: '"No capes!" マントはダメよ！' }
    },
    up: {
      carl: { name: 'カール・フレドリクセン', role: '頑固な老人 · 冒険家', quote: '愛する妻との約束を守るため、78歳で旅に出る。' },
      russell: { name: 'ラッセル', role: 'スカウト少年 · お喋り好き', quote: 'バッジ集めに夢中。カールのことを変えていく少年。' },
      dug: { name: 'ダグ', role: 'おしゃべり犬 · 純粋な心', quote: '"I just met you and I love you!" 大好き！' },
      kevin: { name: 'ケヴィン', role: '幻の巨大鳥 · 珍しい生き物', quote: '世紀の発見？ ラッセルが名前をつけた謎の鳥。' },
      muntz: { name: 'チャールズ・マンツ', role: '伝説の冒険家 · ヴィラン', quote: '少年時代のカールの憧れが、まさかの敵に。' }
    },
    insideout: {
      joy: { name: 'ジョイ', role: '喜びの感情 · リーダー', quote: 'ライリーを幸せにすることだけを考えるポジティブな感情。' },
      sadness: { name: 'サドネス', role: '悲しみの感情', quote: '役に立てないと思っていたが、実は最も重要な感情。' },
      anger: { name: 'アンガー', role: '怒りの感情', quote: '頭から炎を出す短気者。でも正義感が強い。' },
      fear: { name: 'フィアー', role: '恐怖の感情', quote: '危険を察知する。怖がりだけど、ライリーを守る。' },
      disgust: { name: 'ディスガスト', role: '嫌悪の感情', quote: 'センスが高く、ライリーのファッションと食事を管理。' },
      bingbong: { name: 'ビン・ボン', role: 'ライリーの想像上の友達', quote: '忘れられつつある大切な思い出。最後の選択が涙を誘う。' }
    },
    coco: {
      miguel: { name: 'ミゲル', role: '音楽好きな少年', quote: '音楽を禁じられた家族に反発し、夢を追う12歳の少年。' },
      hector: { name: 'ヘクトル', role: '死者の国の住人', quote: '明るくてずる賢い。でも秘密を抱えた哀しい男。' },
      delacruz: { name: 'エルネスト・デラクルス', role: '伝説の歌手', quote: 'ミゲルが憧れるスーパースター。その裏の顔とは。' },
      mamaCoco: { name: 'ママ・ココ', role: 'ミゲルのひいひいおばあちゃん', quote: 'ぼんやりとした記憶の中に宿る、深い愛と悲しみ。' },
      dante: { name: 'ダンテ', role: 'ミゲルの愛犬', quote: '陽気なメキシカン・ヘアレス。どこでもついてくる。' }
    },
    soul: {
      joe: { name: 'ジョー・ガードナー', role: '音楽教師 · ジャズピアニスト', quote: '夢を追い続けた男が、生きることの意味を問いなおす。' },
      twentytwo: { name: '22番', role: '魂 · 生きることを拒んでいた', quote: '地球へ行くことを嫌がっていた魂が、変わっていく物語。' },
      dorothea: { name: 'ドロシア・ウィリアムズ', role: '伝説のジャズミュージシャン', quote: 'ジョーの憧れ。クールで実力派の女性アーティスト。' },
      terry: { name: 'テリー', role: '魂の管理者', quote: '魂の数を正確に把握する几帳面なカウンター係。' },
      jerry: { name: 'ジェリー', role: '「生まれる前の世界」の住人', quote: '魂の輝きを育てる、不思議な存在。' }
    },
    monsters: {
      sully: { name: 'ジェームズ・P・サリバン', role: '怪獣 · トップスカラー', quote: '"サリー" の愛称で呼ばれる、会社一のエース。' },
      mike: { name: 'マイク・ワゾウスキ', role: 'モンスター · サリーの相棒', quote: '"I\'m watching you, Wazowski!" 目が多いのが自慢。' },
      boo: { name: 'ブー', role: '人間の女の子', quote: '"キティ！" サリーをそう呼ぶ、無邪気な少女。' },
      randall: { name: 'ランドール・ボッグス', role: 'カメレオンモンスター · ライバル', quote: '透明化能力を使い、サリーの座を狙う。' },
      roz: { name: 'ロズ', role: '書類管理 · 厳格な上司', quote: '"I\'m watching you, Wazowski. Always watching."' },
      celia: { name: 'セリア・メイ', role: 'マイクの彼女 · 受付', quote: '一本目の蛇の髪がマイクに夢中。' }
    },
    ratatouille: {
      remy: { name: 'レミー', role: 'ネズミ · 天才シェフ', quote: '"Anyone can cook!" 誰でもシェフになれる。' },
      linguini: { name: 'アルフレッド・リングイニ', role: '皿洗い · レミーのパートナー', quote: '不器用だけど心優しい、ギュストーの末裔。' },
      colette: { name: 'コレット', role: 'シェフ · キッチンのエース', quote: '男性支配の厨房で実力を証明した、たくましい女性。' },
      ego: { name: 'アントン・イーゴ', role: '美食評論家 · 冷徹な批評家', quote: '"In many ways, the work of a critic is easy." 評論家の仕事は簡単だ。' },
      emile: { name: 'エミール', role: 'レミーの兄 · 食いしん坊', quote: '何でも食べる、レミーを心配する兄。' }
    },
    zootopia: {
      judy: { name: 'ジュディ・ホップス', role: 'ウサギ · 警察官', quote: '誰かを傷つけるのは、自分の弱さを認めることだ。' },
      nick: { name: 'ニック・ワイルド', role: 'キツネ · 詐欺師', quote: '君はただのウサギじゃない、ジュディ。' },
      bellwether: { name: 'ベルウェザー', role: '羊 · 副市長', quote: 'ズートピアは皆が仲良く暮らす街のはず…' },
      bogo: { name: 'ボゴ署長', role: 'アフリカ水牛 · 警察署長', quote: '現実を見ろ、ホップス。' },
      flash: { name: 'フラッシュ', role: 'ナマケモノ · DMV職員', quote: 'ナマ…ケモ…ノ…です…' },
      clawhauser: { name: 'クロウハウザー', role: 'チーター · 受付', quote: 'ドーナツが好きすぎて困る！' }
    },
    cars: {
      mcqueen: { name: 'ライトニング・マックィーン', role: 'レーサー', quote: 'スピードは俺の全てだ！' },
      mater: { name: 'メーター', role: 'レッカー車', quote: 'トマトがなくても大丈夫さ！' },
      sally: { name: 'サリー', role: 'ポルシェ', quote: 'この町の歴史を守りたい。' },
      doc: { name: 'ドク・ハドソン', role: '元チャンピオン', quote: '走るためには、どこで走るかが大事だ。' },
      ramone: { name: 'ラモーン', role: 'ペイント職人', quote: 'カラフルに決まってるさ！' }
    },
    walle: {
      walle: { name: 'ウォーリー', role: 'ゴミ収集ロボット', quote: 'イヴ…' },
      eve: { name: 'イヴ', role: '調査ロボット', quote: '指令を遂行する。' },
      auto: { name: 'オート', role: '操縦AI', quote: 'プロトコル優先。' },
      captain: { name: 'マックリア船長', role: '船長', quote: '植物だと！？' },
      moe: { name: 'M-O', role: '清掃ロボット', quote: '外宇宙は危険だ！' }
    },
    brave: {
      merida: { name: 'メリダ', role: 'プリンセス', quote: '自分の運命は自分で決める！' },
      elinor: { name: 'エレノア（王妃）', role: '王妃', quote: '王家の伝統を守りなさい。' },
      fergus: { name: 'ファーガス王', role: '王', quote: '熊には負けんぞ！' },
      mordeu: { name: 'モルデュー', role: '魔熊', quote: '（咆哮）' },
      witch: { name: '森の魔女', role: '魔法使い', quote: '運命を変えたいなら、ケーキを。' }
    },
    luca: {
      luca: { name: 'ルカ', role: '海の怪物', quote: 'シルエンツォ、ブラーノ！' },
      alberto: { name: 'アルベルト', role: '親友', quote: 'シルエンツォ！' },
      giulia: { name: 'ジュリア', role: '少女', quote: '負けないわよ！' },
      ercole: { name: 'エルコーレ', role: 'ヴィラン', quote: 'この町は俺のものだ！' },
      machiavelli: { name: 'マキャベリ', role: 'ジュリアの飼い猫', quote: 'ゴロゴロ……グルグル。' }
    }
  },
  en: {
    toy: {
      woody: { name: 'Woody', role: 'Cowboy doll · Leader', quote: '"Reach for the sky!"' },
      buzz: { name: 'Buzz Lightyear', role: 'Space Ranger', quote: '"To infinity and beyond!"' },
      ham: { name: 'Hamm', role: 'Piggy bank · Know-it-all', quote: 'Sly but dependable when it counts.' },
      forky: { name: 'Forky', role: 'Spork toy', quote: 'Keeps trying to throw himself in the trash.' },
      jesse: { name: 'Jessie', role: 'Cowgirl doll · Optimist', quote: 'Bright and brave through any crisis!' },
      alien: { name: 'Little Green Men', role: 'UFO claw aliens', quote: '"The Claw!"' }
    },
    nemo: {
      marlin: { name: 'Marlin', role: 'Clownfish · Nemo\'s dad', quote: 'Anxious but the most loving father.' },
      nemo: { name: 'Nemo', role: 'Clownfish · Adventurous son', quote: 'Small but fearless!' },
      dory: { name: 'Dory', role: 'Blue tang · Forgetful friend', quote: '"Just keep swimming!"' },
      crash: { name: 'Crush', role: 'Sea turtle · Surfer dude', quote: 'Rides the currents anywhere!' },
      bruce: { name: 'Bruce', role: 'Great white shark', quote: '"Fish are friends, not food!"' },
      nigel: { name: 'Nigel', role: 'Pelican · Dentist\'s friend', quote: 'A big friend connecting sky and sea.' }
    },
    incredibles: {
      bob: { name: 'Mr. Incredible', role: 'Bob Parr · Super strength', quote: 'A former hero missing the action.' },
      helen: { name: 'Elastigirl', role: 'Helen Parr · Stretch powers', quote: 'The dependable super-mom.' },
      dash: { name: 'Dash', role: 'Son · Super speed', quote: 'Fastest kid alive, hates standing out.' },
      violet: { name: 'Violet', role: 'Daughter · Invisibility', quote: 'Teen angst meets superpowers.' },
      jackjack: { name: 'Jack-Jack', role: 'Baby · Many powers', quote: 'Mystery baby with endless abilities.' },
      edna: { name: 'Edna Mode', role: 'Super suit designer', quote: '"No capes!"' }
    },
    up: {
      carl: { name: 'Carl Fredricksen', role: 'Grumpy old man · Explorer', quote: 'Sets off at 78 to keep a promise to his wife.' },
      russell: { name: 'Russell', role: 'Scout · Chatterbox', quote: 'Badge-obsessed boy who changes Carl.' },
      dug: { name: 'Dug', role: 'Talking dog', quote: '"I just met you and I love you!"' },
      kevin: { name: 'Kevin', role: 'Mythical bird', quote: 'The discovery Russell names herself.' },
      muntz: { name: 'Charles Muntz', role: 'Legendary explorer · Villain', quote: 'Carl\'s childhood idol turned enemy.' }
    },
    insideout: {
      joy: { name: 'Joy', role: 'Emotion of joy · Leader', quote: 'Wants Riley to be happy above all.' },
      sadness: { name: 'Sadness', role: 'Emotion of sadness', quote: 'Thought useless, yet most essential.' },
      anger: { name: 'Anger', role: 'Emotion of anger', quote: 'Hot-headed with a strong sense of justice.' },
      fear: { name: 'Fear', role: 'Emotion of fear', quote: 'Timid but protects Riley.' },
      disgust: { name: 'Disgust', role: 'Emotion of disgust', quote: 'Guards Riley\'s taste and fashion.' },
      bingbong: { name: 'Bing Bong', role: 'Imaginary friend', quote: 'A fading memory that brings tears.' }
    },
    coco: {
      miguel: { name: 'Miguel', role: 'Music-loving boy', quote: 'A 12-year-old chasing his dream.' },
      hector: { name: 'Héctor', role: 'Land of the Dead resident', quote: 'Cheerful, clever, and secretly sad.' },
      delacruz: { name: 'Ernesto de la Cruz', role: 'Legendary singer', quote: 'Miguel\'s idol with a hidden face.' },
      mamaCoco: { name: 'Mamá Coco', role: 'Great-great-grandmother', quote: 'Love and sorrow in fading memory.' },
      dante: { name: 'Dante', role: 'Miguel\'s dog', quote: 'Cheerful Xolo who follows everywhere.' }
    },
    soul: {
      joe: { name: 'Joe Gardner', role: 'Music teacher · Jazz pianist', quote: 'Rediscovers the meaning of living.' },
      twentytwo: { name: '22', role: 'Soul · Refused life', quote: 'A soul that finally learns to live.' },
      dorothea: { name: 'Dorothea Williams', role: 'Jazz legend', quote: 'Joe\'s cool, talented idol.' },
      terry: { name: 'Terry', role: 'Soul accountant', quote: 'Meticulous counter of souls.' },
      jerry: { name: 'Jerry', role: 'Soul world being', quote: 'Nurtures the spark in new souls.' }
    },
    monsters: {
      sully: { name: 'James P. Sullivan', role: 'Monster · Top scarer', quote: 'Company ace nicknamed "Sulley."' },
      mike: { name: 'Mike Wazowski', role: 'Monster · Sulley\'s partner', quote: '"I\'m watching you, Wazowski!"' },
      boo: { name: 'Boo', role: 'Human girl', quote: '"Kitty!" — an innocent child.' },
      randall: { name: 'Randall Boggs', role: 'Chameleon monster', quote: 'Rival who can turn invisible.' },
      roz: { name: 'Roz', role: 'Strict supervisor', quote: '"Always watching, Wazowski."' },
      celia: { name: 'Celia Mae', role: 'Mike\'s girlfriend', quote: 'Receptionist with snake hair.' }
    },
    ratatouille: {
      remy: { name: 'Remy', role: 'Rat · Genius chef', quote: '"Anyone can cook!"' },
      linguini: { name: 'Alfredo Linguini', role: 'Dishwasher · Partner', quote: 'Clumsy but kind Gusteau heir.' },
      colette: { name: 'Colette', role: 'Chef · Kitchen ace', quote: 'Tough woman who proved herself.' },
      ego: { name: 'Anton Ego', role: 'Food critic', quote: '"The work of a critic is easy."' },
      emile: { name: 'Emile', role: 'Remy\'s brother', quote: 'Eat-anything brother who cares.' }
    },
    zootopia: {
      judy: { name: 'Judy Hopps', role: 'Rabbit · Police officer', quote: 'Anyone can be anything.' },
      nick: { name: 'Nick Wilde', role: 'Fox · Con artist', quote: 'You\'re not just a bunny, Judy.' },
      bellwether: { name: 'Bellwether', role: 'Sheep · Assistant mayor', quote: 'Zootopia should be peaceful…' },
      bogo: { name: 'Chief Bogo', role: 'Buffalo · Police chief', quote: 'Life isn\'t a cartoon musical.' },
      flash: { name: 'Flash', role: 'Sloth · DMV clerk', quote: 'I am… sloth…' },
      clawhauser: { name: 'Clawhauser', role: 'Cheetah · Receptionist', quote: 'Donuts are life!' }
    },
    cars: {
      mcqueen: { name: 'Lightning McQueen', role: 'Racer', quote: 'I am speed!' },
      mater: { name: 'Mater', role: 'Tow truck', quote: 'Tomato-free zone!' },
      sally: { name: 'Sally', role: 'Porsche', quote: 'Protect this town.' },
      doc: { name: 'Doc Hudson', role: 'Legend', quote: 'It\'s about where you drive.' },
      ramone: { name: 'Ramone', role: 'Paint shop', quote: 'Go colorful!' }
    },
    walle: {
      walle: { name: 'WALL·E', role: 'Waste robot', quote: 'Eve…' },
      eve: { name: 'EVE', role: 'Probe robot', quote: 'Directive.' },
      auto: { name: 'AUTO', role: 'Ship AI', quote: 'A113.' },
      captain: { name: 'Captain McCrea', role: 'Axiom captain', quote: 'A plant!' },
      moe: { name: 'M-O', role: 'Cleaner bot', quote: 'Foreign contaminate!' }
    },
    brave: {
      merida: { name: 'Merida', role: 'Princess of DunBroch', quote: 'I choose my fate!' },
      elinor: { name: 'Queen Elinor', role: 'Queen of DunBroch', quote: 'A princess strives for perfection.' },
      fergus: { name: 'King Fergus', role: 'King of DunBroch', quote: 'I\'ll fight any bear!' },
      mordeu: { name: 'Mor\'du', role: 'Legendary demon bear', quote: '(Roar)' },
      witch: { name: 'The Witch', role: 'Woodcarver', quote: 'Fate-changing cake.' }
    },
    luca: {
      luca: { name: 'Luca', role: 'Sea monster', quote: 'Silenzio, Bruno!' },
      alberto: { name: 'Alberto', role: 'Best friend', quote: 'Silenzio!' },
      giulia: { name: 'Giulia', role: 'Human girl', quote: 'I won\'t lose!' },
      ercole: { name: 'Ercole', role: 'Bully', quote: 'This town is mine!' },
      machiavelli: { name: 'Machiavelli', role: 'Giulia\'s cat', quote: 'Purring in Portorosso.' }
    }
  },
  ko: {
    toy: {
      woody: { name: '우디', role: '카우보이 인형 · 리더', quote: '"Reach for the sky!" 하늘을 향해 손을 들어!' },
      buzz: { name: '버즈 라이트이어', role: '스페이스 레인저', quote: '"To infinity and beyond!" 무한의 저편으로!' },
      ham: { name: '햄', role: '저금통 돼지 · 박식가', quote: '영리하지만 믿을 만한 친구.' },
      forky: { name: '포키', role: '플라스틱 포크 장난감', quote: '쓰레기통에 들어가려 한다.' },
      jesse: { name: '제시', role: '카우걸 인형 · 활발함', quote: '밝고 어떤 위기도 이겨낸다!' },
      alien: { name: '리틀 그린 맨', role: 'UFO 인형 외계인', quote: '"The Claw!" 집게다!' }
    },
    nemo: {
      marlin: { name: '말린', role: '흰동가리 · 니모의 아빠', quote: '걱정 많지만 가장 다정한 아버지.' },
      nemo: { name: '니모', role: '흰동가리 · 모험을 좋아하는 아들', quote: '작아도 용기는 누구에게도 지지 않아!' },
      dory: { name: '도리', role: '푸른 비늘 · 건망증 친구', quote: '"Just keep swimming!" 계속 헤엄쳐!' },
      crash: { name: '크러시', role: '바다거북 · 서퍼', quote: '해류를 타고 어디든!' },
      bruce: { name: '브루스', role: '백상아리', quote: '"Fish are friends, not food!"' },
      nigel: { name: '나이젤', role: '펠리컨 · 치과의 친구', quote: '하늘과 바다를 잇는 든든한 친구.' }
    },
    incredibles: {
      bob: { name: '미스터 인크레더블', role: '밥 파 · 괴력', quote: '평범한 삶에 싫증 난 전설의 영웅.' },
      helen: { name: '엘라스티걸', role: '헬렌 파 · 신축성', quote: '가족을 지키는 슈퍼 엄마.' },
      dash: { name: '대시', role: '장남 · 초고속', quote: '세계에서 가장 빠른 소년.' },
      violet: { name: '바이올렛', role: '장녀 · 투명화', quote: '사춘기와 초능력이 뒤엉킨다.' },
      jackjack: { name: '잭잭', role: '막내 · 만능 아기', quote: '수수께끼 많은 최강 베이비.' },
      edna: { name: '에드나 모드', role: '슈트 디자이너', quote: '"No capes!" 망토는 안 돼!' }
    },
    up: {
      carl: { name: '칼 프레드릭슨', role: '고집쟁이 노인 · 모험가', quote: '아내와의 약속을 지키려 78세에 떠난다.' },
      russell: { name: '러셀', role: '스카우트 소년', quote: '배지에 집착하는, 칼을 바꾸는 소년.' },
      dug: { name: '더그', role: '말하는 개', quote: '"I just met you and I love you!"' },
      kevin: { name: '케빈', role: '전설의 거대 새', quote: '러셀이 이름 붙인 신비의 새.' },
      muntz: { name: '찰스 뭉츠', role: '전설의 모험가 · 악당', quote: '어린 칼의 우상이 적이 되다.' }
    },
    insideout: {
      joy: { name: '기쁨이', role: '기쁨 감정 · 리더', quote: '라일리를 행복하게 하려는 감정.' },
      sadness: { name: '슬픔이', role: '슬픔 감정', quote: '쓸모없다 여겼지만 가장 중요한 감정.' },
      anger: { name: '버럭이', role: '분노 감정', quote: '머리에서 불이 나는 성격.' },
      fear: { name: '소심이', role: '두려움 감정', quote: '겁 많지만 라일리를 지킨다.' },
      disgust: { name: '까칠이', role: '혐오 감정', quote: '라일리의 패션과 식사를 관리.' },
      bingbong: { name: '빙봉', role: '상상의 친구', quote: '잊혀져 가는 소중한 추억.' }
    },
    coco: {
      miguel: { name: '미겔', role: '음악을 사랑하는 소년', quote: '꿈을 쫓는 12살 소년.' },
      hector: { name: '헥터', role: '망자의 나라 주민', quote: '밝지만 비밀을 품은 남자.' },
      delacruz: { name: '에르네스토 델라 크루즈', role: '전설의 가수', quote: '미겔이 동경하는 스타.' },
      mamaCoco: { name: '마마 코코', role: '증조할머니', quote: '희미한 기억 속의 사랑과 슬픔.' },
      dante: { name: '단테', role: '미겔의 개', quote: '어디든 따라오는 쾌활한 멍멍이.' }
    },
    soul: {
      joe: { name: '조 가드너', role: '음악 교사 · 재즈 피아니스트', quote: '삶의 의미를 다시 묻다.' },
      twentytwo: { name: '22번', role: '영혼', quote: '살기를 거부하던 영혼의 변화.' },
      dorothea: { name: '도로시아 윌리엄스', role: '재즈 레전드', quote: '조가 동경하는 아티스트.' },
      terry: { name: '테리', role: '영혼 관리자', quote: '영혼 수를 세는 꼼꼼한 직원.' },
      jerry: { name: '제리', role: '영혼 세계의 존재', quote: '영혼의 불꽃을 키우는 존재.' }
    },
    monsters: {
      sully: { name: '설리', role: '괴물 · 최고 스키어러', quote: '회사 최고 에이스 "설리."' },
      mike: { name: '마이크 와소스키', role: '괴물 · 설리의 파트너', quote: '"I\'m watching you, Wazowski!"' },
      boo: { name: '부', role: '인간 소녀', quote: '"키티!" 순수한 소녀.' },
      randall: { name: '랜달', role: '카멜레온 괴물', quote: '투명화 능력의 라이벌.' },
      roz: { name: '로즈', role: '엄격한 상사', quote: '"항상 지켜보고 있어."' },
      celia: { name: '셀리아 메이', role: '마이크의 여자친구 · 접수', quote: '뱀 머리를 한 접수 담당.' }
    },
    ratatouille: {
      remy: { name: '레미', role: '쥐 · 천재 셰프', quote: '"Anyone can cook!"' },
      linguini: { name: '알프레도 링귀니', role: '설거지 · 파트너', quote: '서툴지만 따뜻한 후예.' },
      colette: { name: '콜렛', role: '셰프 · 키친 에이스', quote: '실력으로 증명한 강인한 여성.' },
      ego: { name: '안톤 이고', role: '미식 평론가', quote: '평론가의 일은 쉽다.' },
      emile: { name: '에밀', role: '레미의 형', quote: '먹는 걸 좋아하는 형.' }
    },
    zootopia: {
      judy: { name: '주디 홉스', role: '토끼 · 경찰', quote: '누구나 무엇이든 될 수 있어.' },
      nick: { name: '닉 와일드', role: '여우 · 사기꾼', quote: '넌 그냥 토끼가 아니야, 주디.' },
      bellwether: { name: '벨웨더', role: '양 · 부시장', quote: '주토피아는 평화로운 도시여야 해…' },
      bogo: { name: '보고 서장', role: '물소 · 경찰서장', quote: '현실을 봐, 홉스.' },
      flash: { name: '플래시', role: '나무늘보 · DMV', quote: '나…무…늘…보…' },
      clawhauser: { name: '클로하우저', role: '치타 · 접수', quote: '도넛이 최고!' }
    },
    cars: {
      mcqueen: { name: '라이트닝 맥퀸', role: '레이서', quote: '나는 스피드다!' },
      mater: { name: '메이터', role: '견인차', quote: '토마토 없어도 OK!' },
      sally: { name: '샐리', role: '포르쉐', quote: '이 마을을 지키고 싶어.' },
      doc: { name: '독 허드슨', role: '전설', quote: '어디서 달리느냐가 중요해.' },
      ramone: { name: '라몬', role: '페인트', quote: '화려하게!' }
    },
    walle: {
      walle: { name: '월-E', role: '청소 로봇', quote: '이브…' },
      eve: { name: '이브', role: '조사 로봇', quote: '지시를 수행한다.' },
      auto: { name: '오토', role: 'AI', quote: 'A113.' },
      captain: { name: '맥크리어 선장', role: '액시엄 호 선장', quote: '식물이다!' },
      moe: { name: '모', role: '청소 로봇', quote: '외부는 위험해!' }
    },
    brave: {
      merida: { name: '메리다', role: '던브로치 왕국의 공주', quote: '내 운명은 내가 정해!' },
      elinor: { name: '엘리노어 여왕', role: '던브로치의 여왕', quote: '전통을 지켜라.' },
      fergus: { name: '퍼거스 왕', role: '던브로치의 왕', quote: '곰은 무섭지 않다!' },
      mordeu: { name: '모르두', role: '전설의 마법 곰', quote: '(포효)' },
      witch: { name: '마녀', role: '나무 조각가', quote: '운명을 바꿀 케이크.' }
    },
    luca: {
      luca: { name: '루카', role: '바다 괴물', quote: '실렌초, 브루노!' },
      alberto: { name: '알베르토', role: '친구', quote: '실렌초!' },
      giulia: { name: '줄리아', role: '소녀', quote: '지지 않아!' },
      ercole: { name: '에르콜레', role: '괴롭힘', quote: '이 마을은 내 것!' },
      machiavelli: { name: '마키아벨리', role: '줄리아의 고양이', quote: '그루룽거리며 포르토로소를 거닐다.' }
    }
  }
};

function getCharText(movieId, charId) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ja';
  return CHAR_TRANSLATIONS[lang]?.[movieId]?.[charId]
    || CHAR_TRANSLATIONS.ja[movieId]?.[charId]
    || { name: '', role: '', quote: '' };
}

function getCharImg(movieId, charId) {
  const file = CHAR_IMAGES[movieId]?.[charId];
  if (file) return assetUrl(`img/cara/${file}`);
  return assetUrl('img/top/Pixar_new_logo.svg');
}

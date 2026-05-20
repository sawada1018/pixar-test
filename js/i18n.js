const MOVIE_IDS = ['toy', 'nemo', 'incredibles', 'up', 'insideout', 'coco', 'soul', 'monsters', 'ratatouille', 'zootopia', 'cars', 'walle', 'brave', 'luca'];

/** YouTube 埋め込みのクライアント識別（HTTP Referer / origin / widget_referrer） */
const APP_BUNDLE_ID = 'com.pixar.universe';
const APP_REFERER_URL = `https://${APP_BUNDLE_ID}`;

const I18N = {
  ja: {
    ui: {
      pageTitle: 'PIXAR — 映画の世界へ',
      tagline: '映画の世界へようこそ',
      heroTitle: 'PIXAR\nUNIVERSE',
      heroDesc: '想像を超えた物語と、あなたの心を動かすキャラクターたちが待っています。',
      scrollHint: '↓ SCROLL',
      sectionTitle: '映画ラインナップ',
      sectionSub: '作品を選んで詳細またはキャラクターを見る',
      btnDetail: '映画詳細',
      btnChars: 'キャラクター',
      backHome: '← 映画一覧に戻る',
      detailHighlights: '見どころ',
      detailToChars: 'キャラクターを見る →',
      detailFromChars: '← 映画詳細に戻る',
      detailTrailer: '予告編',
      linkToDetail: '予告編を見る →',
      watchOnYoutube: 'YouTubeで予告編を見る',
      videoLocalHint: 'index.html を直接開くと動画は再生できません。VS Code の Live Server（右クリック → Open with Live Server）で開き直してください。設定変更後は Live Server を一度停止してから再起動してください。',
      videoAutoplayHint: '予告編はミュートで自動再生されます。音量はYouTubeプレーヤーから変更できます。',
      langLabel: '言語',
      langJa: '日本語',
      langEn: 'English',
      langKo: '한국어'
    },
    movies: {
      toy: {
        title: 'トイ・ストーリー',
        year: '1995 · ADVENTURE · COMEDY',
        tag: 'CLASSIC',
        desc: 'おもちゃたちの秘密の世界。ウッディとバズが織りなす友情と冒険の物語。',
        hero: 'アンディの部屋で生きるおもちゃたち。人間が見ていない時、彼らは動き、話し、笑い、泣く。友情と成長の物語。',
        detail: 'ピクサー初の長編アニメーション。おもちゃたちの王様ウッディと、新入りのスペースレンジャー・バズの出会いと対立、そして本当の友情を描いた不朽の名作です。',
        highlights: ['映画史に残る史上初のフルCG長編としての記念碑的作品', 'ウッディとバズの対立から友情へ変わる感情的なドラマ', 'おもちゃ視点ならではのユーモアと「主人公交代」の不安', '質感・ライティングなどピクサー映像表現の原点', '子どもにも大人にも響く嫉妬・自己肯定・友情のテーマ', '名ゼリフと続編につながる世界観の厚み']
      },
      nemo: {
        title: 'ファインディング・ニモ',
        year: '2003 · ADVENTURE · FAMILY',
        tag: 'OCEAN',
        desc: '広大な海を越えた父と息子の絆。息を呑む海中世界が舞台の感動作。',
        hero: '大海原を越えて、息子を探す父マーリンの旅。出会いと別れ、そして「家族」の意味を問いかける感動の海洋冒険。',
        detail: '息子ニモを探して海を旅するマーリンと、忘れっぽい仲間ドリー。美しい海中世界と家族の絆が心を打つピクサーの代表作です。',
        highlights: ['圧倒的クオリティの海中とサンゴ礁のビジュアル', 'マーリンとドリー、タートル・クラッシュら個性豊かな仲間たち', '「Just keep swimming!」などドリーを象徴する名台詞', '父と子のすれ違いと和解を丁寧に描いた家族ドラマ', 'シドの部屋などスリルと笑いが同居する見せ場', 'ピクサー作品の中でも特に美しい水中シーケンス']
      },
      incredibles: {
        title: 'Mr.インクレディブル',
        year: '2004 · ACTION · FAMILY',
        tag: 'SUPERHERO',
        desc: 'スーパーヒーロー一家の活躍と家族の絆。スタイリッシュなアクションと笑いが満載。',
        hero: 'かつての最強ヒーローが家族と共に復活。個性豊かな特殊能力を持つ一家の絆と、本当の「強さ」を問う痛快アクション。',
        detail: 'スーパーヒーロー活動を禁じられたパー一家が、新たな敵に立ち向かう。レトロフューチャーな世界観と家族ドラマが融合したアクション映画です。',
        highlights: ['一家そろっての異能アクションとチームワーク', 'ミッドセンチュリー風のレトロフューチャーな都市デザイン', '日常に隠れるスーパーヒーローというコメディと孤独', 'シンドロームとのクライマックスなどスケールの大きい戦い', 'ヒーロー活動禁止というユニークな社会設定', '家族の絆・プライバシー・正義とは何かという問い']
      },
      up: {
        title: 'カールじいさんの空飛ぶ家',
        year: '2009 · ADVENTURE · DRAMA',
        tag: 'ADVENTURE',
        desc: '無数の風船と共に空へ飛び立つ老人の夢と冒険。涙と笑いの感動作。',
        hero: '妻との夢を叶えるために、家を風船で空へ飛ばす老人。少年と犬と共に辿り着く、感動の冒険の結末。',
        detail: '亡き妻エリーとの約束を胸に、カールじいさんが家ごと南米へ。スカウト少年ラッセルや犬ダグとの出会いが、じいさんの人生を変えていきます。',
        highlights: ['冒頭「マリッジストーリー」ともいえる無音に近い回想に号泣', '無数の風船で家が宙に浮くファンタジックなコンセプト', 'カール・ラッセル・ダグ・ケヴィンのじゃれあいと冒険', 'サウスアメリカ「楽園の滝」へのロードムービー要素', '老人と少年という世代を超えた友情の描写', 'ピクサー屈指のオープニングとテーマ曲の印象']
      },
      insideout: {
        title: 'インサイド・ヘッド',
        year: '2015 · ANIMATION · DRAMA',
        tag: 'EMOTION',
        desc: '感情たちが暮らす「頭の中」の世界。ライリーの心を守るため奔走するキャラクターたち。',
        hero: '11歳の少女ライリーの「頭の中」で生きる感情たち。喜び、悲しみ、怒り、嫌悪、恐怖が織りなす、感情の冒険。',
        detail: '引っ越しで混乱するライリーの心の中で、感情たちが大活躍。喜びと悲しみの旅を通じて、すべての感情が大切だと教えてくれる作品です。',
        highlights: ['喜び・悲しみ・怒りなど感情をキャラクター化した発想', '頭の中が都市のように広がるメタファーの宇宙', 'ライリーの成長と引っ越しストレスへの寄り添い', 'ビン・ボンをめぐる胸が締めつけられるラストの選択', 'ピクサーの持ち味である笑いと涙の絶妙なバランス', '「ネガティブな感情にも意味がある」と伝えるメッセージ']
      },
      coco: {
        title: 'リメンバー・ミー',
        year: '2017 · MUSICAL · FAMILY',
        tag: 'MUSIC',
        desc: '「死者の国」を舞台に繰り広げられる音楽と家族の絆。メキシコの文化が彩るミュージカル。',
        hero: '「死者の日」に死者の国に迷い込んだ少年ミゲル。先祖たちとの出会いを通して、家族の愛と音楽の意味を知る。',
        detail: '音楽を愛する少年ミゲルが死者の国へ。記憶と家族の絆、そして「Remember Me」が心に残る、カラフルで感動的なミュージカルです。',
        highlights: ['死者の日と死者の国を華やかに描いたメキシコ文化への敬意', 'オレンジのマリーゴールドや魂のデザインなど色彩の洪水', 'ミゲルとヘクトルの過去が繋がっていくミステリー構造', '名曲「Remember Me」が物語と一体化したクライマックス', '世代を超えた記憶と音楽・家族愛という普遍的テーマ', 'ミュージカルでありながらアニメーションでしかできない演出']
      },
      soul: {
        title: 'ソウルフル・ワールド',
        year: '2020 · DRAMA · MUSIC',
        tag: 'JAZZ',
        desc: '「魂の世界」で問いかける「生きる目的」とは何か。ジャズと哲学が融合した傑作。',
        hero: '夢を叶える直前に「魂の世界」へ迷い込んだ音楽家ジョー。「生きる目的」とは何か。ジャズと哲学が融合した傑作。',
        detail: 'ジャズピアニストのジョーが魂の世界で22番と出会い、生きる意味を見つめ直す。ニューヨークの街とジャズ、そして日常の輝きを描いた作品です。',
        highlights: ['ニューヨークのジャズクラブや街の気配まで伝わる音楽描写', '「生まれる前の世界」と地上を行き来する哲学的ファンタジー', 'ジョーと22番の対照的なキャラクター弧', 'ピザや理髪店など「火花」が宿る日常のディテール', 'テリーやジェリーたちなどキャッチーなキャラクター群', '夢や才能だけでは測れない「生きる意味」への問い']
      },
      monsters: {
        title: 'モンスターズ・インク',
        year: '2001 · COMEDY · FAMILY',
        tag: 'MONSTER',
        desc: '子供の叫びを集めるモンスターたちの世界。青い怪獣サリーと相棒マイクの大冒険。',
        hero: 'モンスター・シティでは、子供の部屋に潜り込み叫び声を集めるのが仕事。しかし一人の少女「ブー」の出現が、すべてを変えていく。',
        detail: 'トップスカラーのサリーとマイクの前に現れた人間の女の子ブー。笑い声の方が強力だと気づく、ユーモアと友情あふれるモンスター世界の物語です。',
        highlights: ['サリーとマイクの名コンビによる軽快な掛け合い', '無邪気なブーが物語と会社のルールをひっくり返すカタリスト', 'ドア一枚で人間世界とモンスター世界が繋がる設定の妙', 'ラストで「笑い」のエネルギーが鍵になる見事なオチ', 'ロズやセリアなど個性的なモンスターたちのギャグ', '友情・仕事・恐怖の意味を優しくひっくり返す構成']
      },
      ratatouille: {
        title: 'レミーのおいしいレストラン',
        year: '2007 · COMEDY · DRAMA',
        tag: 'GOURMET',
        desc: '料理が大好きなネズミレミーが、パリの名店を目指す。夢とグルメの心温まる物語。',
        hero: 'パリの下水道で育ったネズミレミー。一流シェフを目指し、人間の少年リンギニと共に伝説のレストラン「ギュストー」を救おうとする。',
        detail: '料理の才能を持つネズミレミーが、パリの厨房で活躍。「誰でもシェフになれる」というメッセージと、フランスの美食文化が魅力の作品です。',
        highlights: ['パリの街並みとキッチンの動きが食欲をそそる料理描写', 'レミーの嗅覚と想像のキッチンという視覚表現のユニークさ', 'リンギニとのおかしな協業コメディと絆', 'コレットやイーゴなど料理界を彩る強いキャラクター', '「誰でも料理人になれる」という魂を揺さぶるメッセージ', 'ディズニーでありながら大人向けの味わい深いドラマ']
      },
      zootopia: {
        title: 'ズートピア',
        year: '2016 · MYSTERY · COMEDY',
        tag: 'CITY',
        desc: '動物たちが共存する大都市で、ウサギの警察官とキツネの詐欺師が事件を追う。',
        hero: '初めて大都会ズートピアにやってきたウサギの警察官ジュディ。大きな事件の捜査で、キツネのニックとタッグを組む。',
        detail: '偏見と多様性をテーマにした現代風のミステリー。明るいビジュアルとサスペンス、そして心温まる結末が魅力の作品です。',
        highlights: ['雨林からトンドラまで生態系ごとに設計されたズートピアの都市', 'ジュディとニックのバディものとしてのテンポの良さ', '動物たちのステレオタイプと偏見という現代的テーマ', 'スロースシーンなど記憶に残るギャグの連続', 'シャキーラ「Try Everything」とエンドロールの一体感', 'ミステリーとしてもキャラ映画としても完成度が高い構成']
      },
      cars: {
        title: 'カーズ',
        year: '2006 · RACING · COMEDY',
        tag: 'RACING',
        desc: 'ライトニング・マックィーンがたどり着く、心の成長と友情のレース物語。',
        hero: '栄光を目指す若きレーサー・マックィーン。偶然立ち寄った田舎町ラジエータースプリングスで、スピード以外の大切なものを学んでいく。',
        detail: '全米を駆け抜けたスターレーサーが、忘れられた街で出会う仲間たちとの絆。走る喜びと、仲間の大切さを描いたピクサーのレース映画です。',
        highlights: ['アメリカ国道とレースシーンのスピード感ある撮影・作画', 'マックィーンがラジエータースプリングスで得る価値観の変化', 'ドックやメーターなど愛すべき町の住民たち', 'ピクサーならではの車両キャラクターのデザイン言語', '友情・名誉・ホームという王道テーマの心地よさ', '続編につながる世界観の土台となる楽しさ']
      },
      walle: {
        title: 'ウォーリー',
        year: '2008 · SCI-FI · ROMANCE',
        tag: 'SPACE',
        desc: '地球を掃除するロボットと、宇宙から来たイヴの静かで美しい恋。',
        hero: '何百年も地球でゴミを片付け続けるロボット・ウォーリー。ある日現れたイヴとの出会いが、人類の未来を変えていく。',
        detail: 'ほとんどセリフのない冒頭から始まる、環境と愛の物語。小さなロボットの純粋な想いが、宇宙規模の奇跡を呼び起こします。',
        highlights: ['セリフほぼ無しの地球編から宇宙編まで繋ぐ映画的な語り口', 'ウォーリーとイヴのロボット同士のロマンスの繊細さ', 'ホラーにもSFにもなる自律AIや孤独な地球のディストピア描写', 'バーナム・キューブリー楽曲によるノスタルジックなムード', '環境と消費・人類の進む先への問いかけ', 'ピクサー初期の実験精神が詰まったビジュアルストーリーテリング']
      },
      brave: {
        title: 'メリダとおそろしの森',
        year: '2012 · FANTASY · FAMILY',
        tag: 'BRAVE',
        desc: '弓の名手プリンセスが、運命と向き合うスコットランドの物語。',
        hero: '自分の運命を自分で決めたいメリダ。母との確執が、魔法によって思わぬ形で試される。',
        detail: 'スコットランドの古城と森を舞台に、親子の理解と自立を描く。ピクサー初のプリンセス主演作としても知られる作品です。',
        highlights: ['スコットランドの森・古城・メリダの髪など美術の説得力', '弓術と伝統への反抗というメリダの葛藤の強さ', '魔法のケーキがもたらす母娘の変身ドラマとコメディ', 'ピクサー初のプリンセス長編としてのキャラクター造形', '家族愛と自分らしさの両立という普遍的テーマ', '緊張感あるクライマックスと和解のカタルシス']
      },
      luca: {
        title: 'ルカ',
        year: '2021 · FANTASY · FAMILY',
        tag: 'SUMMER',
        desc: '海の怪物の少年が人間の世界で見つける、友情と夏の思い出。',
        hero: 'イタリアの海辺の町で、人間の姿になって友達と過ごすルカ。秘密を守りながら、世界の広さを知っていく夏。',
        detail: 'ルカとアルベルトの友情、そしてヴェスパでの冒険。イタリアの夏の空気感と、受け入れる勇気が心に残る作品です。',
        highlights: ['1960年代イタリア沿岸を思わせるポルトロッソの色彩と質感', '海の怪物という設定がもたらす秘密とドキドキの青春映画', 'ルカ・アルベルト・ジュリアの三角形の友情の輝き', 'ヴェスパやイタリア映画オマージュなどセンスのよい細部', '恐れずに踏み出す勇気や「違い」をめぐる優しいメッセージ', '短めながら夏の終わりを感じさせる余韻のあるラスト']
      }
    }
  },
  en: {
    ui: {
      pageTitle: 'PIXAR — Welcome to the Movies',
      tagline: 'Welcome to the world of film',
      heroTitle: 'PIXAR\nUNIVERSE',
      heroDesc: 'Stories beyond imagination and characters that move your heart await you.',
      scrollHint: '↓ SCROLL',
      sectionTitle: 'Movie Lineup',
      sectionSub: 'Choose a film for details or characters',
      btnDetail: 'Movie Details',
      btnChars: 'Characters',
      backHome: '← Back to Movies',
      detailHighlights: 'Highlights',
      detailToChars: 'View Characters →',
      detailFromChars: '← Back to Movie Details',
      detailTrailer: 'Trailer',
      linkToDetail: 'Watch Trailer →',
      watchOnYoutube: 'Watch trailer on YouTube',
      videoLocalHint: 'Videos do not work when opening index.html directly. Use VS Code Live Server (right-click → Open with Live Server), then restart Live Server after config changes.',
      videoAutoplayHint: 'The trailer autoplays muted so it works on mobile—tap the YouTube player to unmute.',
      langLabel: 'Language',
      langJa: 'Japanese',
      langEn: 'English',
      langKo: 'Korean'
    },
    movies: {
      toy: {
        title: 'Toy Story',
        year: '1995 · ADVENTURE · COMEDY',
        tag: 'CLASSIC',
        desc: 'A secret world of toys. Woody and Buzz weave a tale of friendship and adventure.',
        hero: 'Toys come alive when humans are not watching. A story of friendship, rivalry, and growing up.',
        detail: 'Pixar\'s first feature film. Woody, the favorite toy, meets Buzz Lightyear, the space ranger. Their rivalry turns into an unforgettable friendship.',
        highlights: ['Landmark debut as the first fully CG animated feature', 'Woody and Buzz evolve from rivalry to deep friendship', 'Toy-eye humor plus tender fears about being replaced', 'Groundbreaking surfacing and lighting that defined Pixar\'s look', 'Themes of jealousy, belonging, and loyalty for every age', 'Iconic lines and world-building that launched a beloved franchise']
      },
      nemo: {
        title: 'Finding Nemo',
        year: '2003 · ADVENTURE · FAMILY',
        tag: 'OCEAN',
        desc: 'A father and son across the vast ocean. A breathtaking underwater adventure.',
        hero: 'Marlin crosses the ocean to find his son Nemo. A moving tale of family and courage.',
        detail: 'Marlin teams up with forgetful Dory to rescue Nemo. Stunning ocean visuals and a heartfelt story about family bonds.',
        highlights: ['Spectacular coral reefs and underwater cinematography', 'Marlin, Dory, Crush, and a parade of unforgettable sea creatures', 'Dory\'s optimism and quotable moments ("Just keep swimming")', 'A heartfelt arc about trust between father and son', 'Thrills and laughs—from sharks to the dentist tank escape', 'Some of Pixar\'s most visually dazzling ocean sequences']
      },
      incredibles: {
        title: 'The Incredibles',
        year: '2004 · ACTION · FAMILY',
        tag: 'SUPERHERO',
        desc: 'A superhero family saves the day. Stylish action and laughs for everyone.',
        hero: 'A once-great hero returns with his family. Action-packed adventure about true strength.',
        detail: 'The Parr family hides their powers until a new villain emerges. Retro-futuristic style meets family drama in this superhero hit.',
        highlights: ['Super-powered family teamwork with inventive action set pieces', 'Stylish mid-century retro-future production design', 'Comedy and tension from heroes forced into suburban secrecy', 'Large-scale showdowns against Syndrome\'s schemes', 'Unique premise: supers outlawed yet itching to save the world', 'Themes of identity, marriage, parenting, and what heroism costs']
      },
      up: {
        title: 'Up',
        year: '2009 · ADVENTURE · DRAMA',
        tag: 'ADVENTURE',
        desc: 'An old man flies his house with balloons. Tears, laughter, and adventure.',
        hero: 'Carl flies his house to fulfill a promise to his wife. An adventure with a boy and a dog.',
        detail: 'Carl ties thousands of balloons to his house and heads to South America. Russell and Dug change his life on the journey.',
        highlights: ['An opening montage that tells a lifetime of love and loss', 'Thousands of balloons lifting a house toward adventure', 'Carl, Russell, Dug, and Kevin—a mismatched family on the road', 'Road-trip pacing toward Paradise Falls with whimsy and peril', 'Friendship across generations between a curmudgeon and a scout', 'Michael Giacchino\'s score amplifies tears and exhilaration']
      },
      insideout: {
        title: 'Inside Out',
        year: '2015 · ANIMATION · DRAMA',
        tag: 'EMOTION',
        desc: 'Emotions live inside Riley\'s mind. Joy, Sadness, and friends protect her heart.',
        hero: 'Inside 11-year-old Riley\'s mind, five emotions navigate growing up and change.',
        detail: 'When Riley moves to a new city, Joy and Sadness get lost. A journey that teaches us every emotion matters.',
        highlights: ['Personified emotions give feelings literal personality', 'Clever metaphors for memory, personality islands, and HQ control', 'Moving empathy for Riley\'s tween relocation anxieties', 'Bing Bong\'s sacrifice lands one of Pixar\'s deepest gut punches', 'Balances slapstick comedy with bittersweet maturity', 'Bold message: sadness—and every emotion—has a vital role']
      },
      coco: {
        title: 'Coco',
        year: '2017 · MUSICAL · FAMILY',
        tag: 'MUSIC',
        desc: 'Music and family in the Land of the Dead. A colorful Mexican-inspired musical.',
        hero: 'Miguel enters the Land of the Dead on Día de los Muertos and discovers his family\'s story.',
        detail: 'Miguel pursues music against his family\'s wishes. Memory, family, and "Remember Me" make this a beloved musical masterpiece.',
        highlights: ['Respectful, joyful celebration of Día de los Muertos traditions', 'Explosions of marigolds, alebrijes, and glowing spirit designs', 'Mystery twists tying Miguel and Héctor across generations', '"Remember Me" woven through climax as emotional catharsis', 'Themes of memory, lineage, music bans, and forgiveness', 'Musical storytelling elevated by tactile Pixar craftsmanship']
      },
      soul: {
        title: 'Soul',
        year: '2020 · DRAMA · MUSIC',
        tag: 'JAZZ',
        desc: 'What makes life worth living? Jazz and philosophy in the world of souls.',
        hero: 'Joe Gardner falls into the soul world before his big break. A journey to find life\'s spark.',
        detail: 'Jazz pianist Joe meets soul 22 and rethinks what it means to live. New York jazz and everyday magic shine through.',
        highlights: ['Jazz clubs and NYC ambience rendered with rhythmic precision', 'Philosophical fantasy bouncing between the Great Before and Earth', 'Contrasting arcs for Joe Gardner and Soul Twenty-Two', 'Everyday “spark” moments—slice of pizza, barbershop banter', 'Playful counselors Terry/Jerry and vivid soul aesthetics', 'Explores purpose beyond trophies and applause']
      },
      monsters: {
        title: 'Monsters, Inc.',
        year: '2001 · COMEDY · FAMILY',
        tag: 'MONSTER',
        desc: 'Monsters collect screams—until a little girl changes everything.',
        hero: 'In Monstropolis, Sulley and Mike\'s world turns upside down when Boo arrives.',
        detail: 'Top scarers Sulley and Mike meet human child Boo. A hilarious adventure that discovers laughter is more powerful than screams.',
        highlights: ['Lightning-fast banter between Sulley and Mike Wazowski', 'Boo\'s innocence dismantles scarer bureaucracy overnight', 'Door portals elegantly bridge monster and human worlds', 'Laugh-powered twist reframes Monstropolis\' entire economy', 'Deep bench of monsters—from Roz to Celia—with killer gags', 'Warm finale about friendship and overcoming fear']
      },
      ratatouille: {
        title: 'Ratatouille',
        year: '2007 · COMEDY · DRAMA',
        tag: 'GOURMET',
        desc: 'A rat who loves cooking dreams of Paris. A warm tale of food and dreams.',
        hero: 'Remy the rat teams with Linguini to save a legendary Paris restaurant.',
        detail: 'Remy\'s passion for cooking leads him to Gusteau\'s kitchen. "Anyone can cook" and Parisian cuisine delight audiences.',
        highlights: ['Paris vistas and Gusteau\'s kitchen choreography tempt every appetite', 'Remy\'s heightened senses visualize flavor like synesthesia', 'Slapstick partnership between rat and Linguini behind the stove', 'Powerhouse personalities in Colette and critic Anton Ego', '"Anyone can cook" lands as pure Pixar optimism', 'Sophisticated drama about artistry, critics, and second chances']
      },
      zootopia: {
        title: 'Zootopia',
        year: '2016 · MYSTERY · COMEDY',
        tag: 'CITY',
        desc: 'A rabbit cop and a fox con artist crack a case in a city of animals.',
        hero: 'Officer Judy Hopps teams with Nick Wilde on her first big case in Zootopia.',
        detail: 'A modern mystery about bias and diversity, with humor, suspense, and heart.',
        highlights: ['Each biome—from Sahara Square to Tundratown—feels handcrafted', 'Judy Hopps and Nick Wilde deliver ace buddy-comedy pacing', 'Uses predator/prey stereotypes to unpack bias with wit', 'Standout comic set pieces like the DMV sloth encounter', '"Try Everything" powers an exuberant anthem finale', 'Mystery plotting stays sharp without losing heart']
      },
      cars: {
        title: 'Cars',
        year: '2006 · RACING · COMEDY',
        tag: 'RACING',
        desc: 'Lightning McQueen learns growth and friendship on the road.',
        hero: 'A young racer discovers life beyond speed in Radiator Springs.',
        detail: 'McQueen\'s journey through a forgotten town and the friends who change him.',
        highlights: ['High-octane oval races rendered with glossy automotive cinematography', 'Lightning\'s ego melts while stranded in Radiator Springs', 'Doc Hudson, Mater, Sally, and locals brim with charm', 'Clever vehicle anthropomorphism informs every silhouette', 'Themes of humility, mentorship, and finding home off the fast lane', 'Foundation for sequels yet satisfying as a standalone road movie']
      },
      walle: {
        title: 'WALL·E',
        year: '2008 · SCI-FI · ROMANCE',
        tag: 'SPACE',
        desc: 'A trash-compacting robot and EVE find love across the stars.',
        hero: 'WALL·E cleans Earth for centuries until EVE arrives and changes everything.',
        detail: 'A near-wordless opening leads to a sweeping story of love and humanity\'s future.',
        highlights: ['Near-wordless opening builds empathy purely through visuals', 'WALL·E and EVE communicate longing without subtitles', 'Bleak Earth vistas and autopilot thriller stakes collide', 'Hello Dolly! cues amplify nostalgic loneliness', 'Environmental cautionary tale still resonates today', 'Showcases Pixar\'s silent-film storytelling muscles']
      },
      brave: {
        title: 'Brave',
        year: '2012 · FANTASY · FAMILY',
        tag: 'BRAVE',
        desc: 'Princess Merida faces fate and family in the Scottish highlands.',
        hero: 'Merida defies tradition; magic tests her bond with her mother.',
        detail: 'Archery, ancient Scotland, and a mother-daughter story of understanding.',
        highlights: ['Misty Highlands castles and Merida\'s explosive curly hair simulation', 'Archery contests spark rebellion against arranged marriage', 'Mother-daughter bear curse mixes peril with slapstick', 'Pixar\'s first princess-led epic with tactile textiles', 'Explores tradition versus individuality inside one clan', 'Climactic showdown delivers cathartic reconciliation']
      },
      luca: {
        title: 'Luca',
        year: '2021 · FANTASY · FAMILY',
        tag: 'SUMMER',
        desc: 'A sea monster boy discovers friendship and summer in an Italian town.',
        hero: 'Luca explores the human world with his friend Alberto in Portorosso.',
        detail: 'A sun-soaked summer about acceptance, friendship, and Vespa adventures.',
        highlights: ['Sun-drenched Italian riviera textures anchor every seaside shot', 'Sea-monster secret fuels suspense during childhood summers', 'Luca, Alberto, and Giulia triangle celebrates fearless curiosity', 'Vespa dreams and cinema homage sparkle with playful detail', 'Gentle allegory about accepting differences and chosen family', 'Compact runtime leaves a wistful end-of-summer aftertaste']
      }
    }
  },
  ko: {
    ui: {
      pageTitle: 'PIXAR — 영화의 세계로',
      tagline: '영화의 세계에 오신 것을 환영합니다',
      heroTitle: 'PIXAR\nUNIVERSE',
      heroDesc: '상상을 뛰어넘는 이야기와 마음을 움직이는 캐릭터들이 기다립니다.',
      scrollHint: '↓ SCROLL',
      sectionTitle: '영화 라인업',
      sectionSub: '작품을 선택해 상세 정보 또는 캐릭터 보기',
      btnDetail: '영화 상세',
      btnChars: '캐릭터',
      backHome: '← 영화 목록으로',
      detailHighlights: '하이라이트',
      detailToChars: '캐릭터 보기 →',
      detailFromChars: '← 영화 상세로',
      detailTrailer: '예고편',
      linkToDetail: '예고편 보기 →',
      watchOnYoutube: 'YouTube에서 예고편 보기',
      videoLocalHint: 'index.html을 직접 열면 동영상이 재생되지 않습니다. VS Code Live Server로 연 뒤, 설정 변경 후에는 Live Server를 재시작해 주세요.',
      videoAutoplayHint: '모바일 정책에 맞춰 예고편은 음소거로 자동 재생됩니다. YouTube 플레이어에서 음소거를 해제하세요.',
      langLabel: '언어',
      langJa: '일본어',
      langEn: 'English',
      langKo: '한국어'
    },
    movies: {
      toy: {
        title: '토이 스토리',
        year: '1995 · ADVENTURE · COMEDY',
        tag: 'CLASSIC',
        desc: '장난감들의 비밀 세계. 우디와 버즈가 만드는 우정과 모험 이야기.',
        hero: '사람이 없을 때 살아 움직이는 장난감들. 우정과 성장의 감동적인 이야기.',
        detail: '픽사 첫 장편 애니메이션. 우디와 버즈 라이트이어의 만남과 대립, 그리고 진정한 우정을 그린 명작입니다.',
        highlights: ['영화사에 남는 최초의 풀 CG 장편이라는 상징성', '우디와 버즈가 라이벌에서 진정한 친구가 되는 서사', '장난감 시점 유머와 주인에게 대체될까 하는 불안', '픽사 비주얼의 원점이 된 질감·조명 표현', '질투·소속감·우정 등 나이를 불문하고 공감되는 주제', '명대사와 세계관이 후속작까지 이어지는 두께']
      },
      nemo: {
        title: '니모를 찾아서',
        year: '2003 · ADVENTURE · FAMILY',
        tag: 'OCEAN',
        desc: '넓은 바다를 건넌 부자의 사랑. 숨 막히는 해저 세계의 감동작.',
        hero: '아들 니모를 찾아 바다를 항해하는 마를린. 가족의 의미를 묻는 모험.',
        detail: '마를린과 도리가 니모를 구하기 위해 바다를 여행합니다. 아름다운 해저 비주얼과 가족애가 돋보입니다.',
        highlights: ['산호와 해저가 압도적인 수중 비주얼', '마를린·도리·크러시 등 개성 넘치는 바다 친구들', '「그냥 계속 헤엄쳐!」로 대표되는 도리의 명장면', '아버지와 아들의 신뢰와 화해를 그린 가족 드라마', '상어나 치과 탱크 등 긴장과 코미디가 공존하는 연출', '픽사 작품 중에서도 특히 아름다운 해양 시퀀스']
      },
      incredibles: {
        title: '미스터 인크레더블',
        year: '2004 · ACTION · FAMILY',
        tag: 'SUPERHERO',
        desc: '슈퍼히어로 가족의 활약. 스타일리시한 액션과 유머.',
        hero: '한때 최강의 히어로가 가족과 함께 돌아옵니다. 진정한 강함을 묻는 액션.',
        detail: '파 가족이 숨겨온 능력으로 새로운 적에 맞섭니다. 레트로풍 세계관과 가족 드라마가 어우러집니다.',
        highlights: ['온 가족 초능력 액션과 팀 플레이', '미드센추리풍 레트로 미래 도시 미술', '히어로 금지 사회 속 가면 뒤의 코미디와 고독', '신드롬과의 대규모 클라이맥스 전투', '스릴과 유머를 아우르는 독특한 히어로 설정', '정체성·가족·정의의 대가 등 묵직한 주제']
      },
      up: {
        title: '업',
        year: '2009 · ADVENTURE · DRAMA',
        tag: 'ADVENTURE',
        desc: '풍선과 함께 하늘로 날아오른 할아버지의 꿈과 모험.',
        hero: '아내와의 약속을 지키기 위해 집을 하늘로 띄운 칼 할아버지의 여정.',
        detail: '칼은 풍선 수천 개로 집을 들어 남미로 향합니다. 러셀과 더그를 만나 인생이 바뀝니다.',
        highlights: ['한 생을 압축한 오프닝 몽타주의 눈물', '무수한 풍선이 집을 들어 올리는 판타지', '칼·러셀·더그·케빈의 어색하고 따뜻한 동행', '남미 천국의 폭포를 향한 로드 무비 정서', '어른과 아이 세대를 잇는 우정 묘사', '음악과 함께 울고 웃게 만드는 여운']
      },
      insideout: {
        title: '인사이드 아웃',
        year: '2015 · ANIMATION · DRAMA',
        tag: 'EMOTION',
        desc: '감정들이 사는 마음 속 세계. 라일리를 지키는 감정 친구들.',
        hero: '11살 라일리의 머릿속, 다섯 감정이 성장과 변화를 함께합니다.',
        detail: '이사 후 혼란스러운 라일리의 마음속에서 기쁨이와 슬픔이의 여행이 펼쳐집니다. 모든 감정이 소중하다는 메시지.',
        highlights: ['기쁨·슬픔·버럭이 등 감정을 캐릭터화한 발상', '기억·섬·본부 등 머릿속 은유의 세계', '라일리 이사 스트레스에 공감하는 성장 서사', '빙봉 선택이 선사하는 깊은 감동', '코미디와 눈물의 밸런스가 뛰어난 픽사 정수', '모든 감정이 필요하다는 메시지']
      },
      coco: {
        title: '코코',
        year: '2017 · MUSICAL · FAMILY',
        tag: 'MUSIC',
        desc: '죽은 자의 나라에서 펼쳐지는 음악과 가족의 이야기.',
        hero: '죽은 자의 날에 죽은 자의 나라로 간 소년 미겔. 가족과 음악의 의미를 배웁니다.',
        detail: '음악을 사랑하는 미겔의 모험. 기억과 가족, 「Remember Me」가 남는 감동 뮤지컬입니다.',
        highlights: ['죽은 자의 날과 망자의 나라를 화려하게 복원한 문화 예의', '금잔화·영혼 디자인 등 색채의 향연', '미겔과 헥터의 과거가 엮이는 미스터리 구조', '「Remember Me」가 서사와 한 몸이 되는 클라이맥스', '세대를 잇는 기억과 음악·가족 사랑', '뮤지컬이면서도 애니메이션만의 연출력']
      },
      soul: {
        title: '소울',
        year: '2020 · DRAMA · MUSIC',
        tag: 'JAZZ',
        desc: '살아 있다는 것은 무엇인가. 재즈와 철학이 만난 걸작.',
        hero: '꿈의 순간 직전 영혼의 세계로 빠진 재즈 피아니스트 조.',
        detail: '조 가드너가 22번과 만나 삶의 의미를 되돌아봅니다. 뉴욕의 재즈와 일상의 빛.',
        highlights: ['뉴욕 재즈 클럽과 거리의 리듬이 살아 있는 음악 묘사', '태어나기 전 세상과 지상을 오가는 철학적 판타지', '조 가드너와 22번의 대비되는 성장 곡선', '피자·이발소 등 일상 속 반짝임(스파크) 디테일', '테리·제리 등 유쾌한 영혼 세계 캐릭터', '꿈과 재능 너머의 삶의 의미에 대한 질문']
      },
      monsters: {
        title: '몬스터 주식회사',
        year: '2001 · COMEDY · FAMILY',
        tag: 'MONSTER',
        desc: '아이의 비명을 모으는 괴물들. 설리와 마이크의 대모험.',
        hero: '괴물 도시에서 인간 소녀 부의 등장이 모든 것을 바꿉니다.',
        detail: '최고의 스키어러 설리와 마이크 앞에 나타난 부. 웃음이 비명보다 강하다는 유쾌한 이야기.',
        highlights: ['설리와 마이크의 템포 좋은 투샷 코미디', '순수한 부가 회사 규칙과 공포 산업을 뒤흔듦', '문 너머로 이어지는 몬스터·인간 세계의 연결', '웃음이 더 강한 에너지라는 반전 결말', '로즈·셀리아 등 개성 몬스터들의 개그', '우정과 두려움을 다시 생각하게 하는 따뜻한 결']
      },
      ratatouille: {
        title: '라따뚜이',
        year: '2007 · COMEDY · DRAMA',
        tag: 'GOURMET',
        desc: '요리를 사랑하는 쥐 레미가 파리 명점을 꿈꾼다.',
        hero: '쥐 레미가 인간 소년 링귀니와 함께 전설의 레스토랑을 구합니다.',
        detail: '요리 천재 레미의 파리 키친 활약. 「누구나 요리사가 될 수 있다」는 메시지.',
        highlights: ['파리 풍경과 부엌 움직임이 식욕을 자극하는 요리 연출', '후각과 상상의 주방으로 시각화한 레미의 재능', '링귀니와 비질 콤비의 코미디와 유대', '콜렛·이고 등 강인한 요리계 캐릭터', '「누구나 요리사가 될 수 있다」는 메시지', '어른을 위한 여운이 있는 드라마']
      },
      zootopia: {
        title: '주토피아',
        year: '2016 · MYSTERY · COMEDY',
        tag: 'CITY',
        desc: '동물 도시에서 토끼 경찰과 여우 사기꾼이 사건을 추적한다.',
        hero: '주토피아에 온 신입 경찰 주디. 닉과 함께 큰 사건을 해결한다.',
        detail: '편견과 다양성을 다룬 현대적 미스터리. 유머와 감동이 있는 작품.',
        highlights: ['사막부터 툰드라까지 생태마다 다른 도시 디자인', '주디와 닉의 버디무비 리듬감', '편견과 다양성을 유쾌하게 파고드는 현대적 주제', 'DMV 나무늘보 신 등 기억에 남는 개그 시퀀스', '「Try Everything」과 엔딩이 주는 카타르시스', '미스터리로서도 캐릭터 영화로서도 완성도']
      },
      cars: {
        title: '카',
        year: '2006 · RACING · COMEDY',
        tag: 'RACING',
        desc: '라이트닝 맥퀸의 성장과 우정이 담긴 레이스 이야기.',
        hero: '라디에이터 스프링스에서 속도 이외의 가치를 배우는 맥퀸.',
        detail: '전설의 레이서가 작은 마을에서 배우는 우정과 삶.',
        highlights: ['미국 고속도로와 서킷 레이스의 스피드감', '라디에이터 스프링스에서 성장하는 맥퀸', '독·메이터·샐리 등 사랑스러운 마을 인물', '차량 캐릭터 실루엣만으로 개성을 살린 디자인', '명예·우정·고향이라는 보편 테마', '후속편까지 이어지는 세계관의 즐거움']
      },
      walle: {
        title: '월-E',
        year: '2008 · SCI-FI · ROMANCE',
        tag: 'SPACE',
        desc: '지구를 청소하는 로봇과 이브의 조용한 사랑.',
        hero: '수백 년 동안 지구를 청소한 월-E. 이브와의 만남이 미래를 바꾼다.',
        detail: '대사 없는 장면부터 펼쳐지는 환경과 사랑의 이야기.',
        highlights: ['거의 무대사 지구 편부터 우주 편까지 이어지는 영화적 서술', '월-E와 이브 로봇 로맨스의 섬세함', '오토 파일럿 등 디스토피아 긴장과 고독한 지구', '노스탤지어를 더하는 클래식 넘버 활용', '환경과 소비 문명에 대한 경고', '말 없는 비주얼 스토리텔링의 걸작']
      },
      brave: {
        title: '용감한 메리다',
        year: '2012 · FANTASY · FAMILY',
        tag: 'BRAVE',
        desc: '활쏘기 공주 메리다가 운명과 마주하는 스코틀랜드 이야기.',
        hero: '자신의 운명을 스스로 정하고 싶은 메리다. 마법이 모녀를 시험한다.',
        detail: '스코틀랜드를 배경으로 한 자립과 가족의 이해.',
        highlights: ['스코틀랜드 숲과 성·머리카락 시뮬레이션의 설득력', '양랑 거부와 활 솜씨가 만나는 메리다의 갈등', '마법 케이크로 비틀어지는 모녀 드라마와 코미디', '픽사 최초 공주 주연작으로서의 캐릭터 형태력', '전통과 자아 실현 사이에서의 가족 이야기', '긴장감 있는 클라이맥스와 화해의 카타르시스']
      },
      luca: {
        title: '루카',
        year: '2021 · FANTASY · FAMILY',
        tag: 'SUMMER',
        desc: '바다 괴물 소년이 인간 세계에서 찾는 우정과 여름.',
        hero: '이탈리아 해변 마을에서 친구와 보내는 루카의 여름.',
        detail: '루카와 알베르토의 우정, 베스파 모험, 받아들이는 용기.',
        highlights: ['이탈리아 리비에라 같은 포르토로소의 햇살과 질감', '바다 괴물이라는 설정이 주는 긴장과 청춘 영화 정서', '루카·알베르토·줄리아 삼각 우정의 빛깔', '베스파와 영화 오마주 등 세련된 디테일', '다름을 받아들이고 한 발 내딛는 용기의 메시지', '짧지만 여름의 끝을 느끼게 하는 여운']
      }
    }
  }
};

const MOVIE_META = {
  toy: { poster: './img/top/toy.jpg', youtube: 'nsG6Mric9g0', tagStyle: 'color:#93c5fd;border-color:#2563eb' },
  nemo: { poster: './img/top/nemo.webp', youtube: 'SDPlwNyYKS4', tagStyle: 'color:#38bdf8;border-color:#0284c7' },
  incredibles: { poster: './img/back/inc.jpg', youtube: 'SY0KF8Urp4c', tagStyle: 'color:#fca5a5;border-color:#dc2626' },
  up: { poster: './img/top/up.jpg', youtube: 'TA900pHzsnQ', tagStyle: 'color:#86efac;border-color:#16a34a' },
  insideout: { poster: './img/top/insideout.jpg', youtube: 'k2MqRbJLGSQ', tagStyle: 'color:#c4b5fd;border-color:#7c3aed' },
  coco: { poster: './img/top/coco.jpg', youtube: 'bNO0c3ghCVo', tagStyle: 'color:#fdba74;border-color:#ea580c' },
  soul: { poster: './img/top/soul.jpeg', youtube: '6M6LpGu-AQU', tagStyle: 'color:#5eead4;border-color:#0f766e' },
  monsters: { poster: './img/top/mon.jpg', youtube: 'NjcLBbp5NSM', tagStyle: 'color:#93c5fd;border-color:#2563eb' },
  ratatouille: { poster: './img/top/remi.jpg', youtube: 'LRFkH6lFEXM', tagStyle: 'color:#fca5a5;border-color:#dc2626' },
  zootopia: { poster: './img/top/zoo.jpeg', youtube: 'MtQ37HlnA_Y', tagStyle: 'color:#c4b5fd;border-color:#7c3aed' },
  cars: { poster: './img/top/cars.jpeg', youtube: 'aiUmg0NOmaM', tagStyle: 'color:#fecaca;border-color:#dc2626' },
  walle: { poster: './img/back/pixcer.jpg', youtube: 'qLkcZGEBqW4', tagStyle: 'color:#cbd5e1;border-color:#64748b' },
  brave: { poster: './img/back/pixcer.jpg', youtube: 'BrsTzu9tdGM', tagStyle: 'color:#86efac;border-color:#16a34a' },
  luca: { poster: './img/back/pixcer.jpg', youtube: 'cyPgof8yyfA', tagStyle: 'color:#7dd3fc;border-color:#0284c7' }
};

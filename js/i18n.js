const MOVIE_IDS = ['toy', 'nemo', 'incredibles', 'up', 'insideout', 'coco', 'soul', 'monsters', 'ratatouille'];

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
      langLabel: '言語'
    },
    movies: {
      toy: {
        title: 'トイ・ストーリー',
        year: '1995 · ADVENTURE · COMEDY',
        tag: 'CLASSIC',
        desc: 'おもちゃたちの秘密の世界。ウッディとバズが織りなす友情と冒険の物語。',
        hero: 'アンディの部屋で生きるおもちゃたち。人間が見ていない時、彼らは動き、話し、笑い、泣く。友情と成長の物語。',
        detail: 'ピクサー初の長編アニメーション。おもちゃたちの王様ウッディと、新入りのスペースレンジャー・バズの出会いと対立、そして本当の友情を描いた不朽の名作です。',
        highlights: ['史上初のCG長編アニメ', 'ウッディとバズの名セリフ', 'おもちゃたちの秘密の生活']
      },
      nemo: {
        title: 'ファインディング・ニモ',
        year: '2003 · ADVENTURE · FAMILY',
        tag: 'OCEAN',
        desc: '広大な海を越えた父と息子の絆。息を呑む海中世界が舞台の感動作。',
        hero: '大海原を越えて、息子を探す父マーリンの旅。出会いと別れ、そして「家族」の意味を問いかける感動の海洋冒険。',
        detail: '息子ニモを探して海を旅するマーリンと、忘れっぽい仲間ドリー。美しい海中世界と家族の絆が心を打つピクサーの代表作です。',
        highlights: ['圧倒的な海中ビジュアル', 'ドリーの名台詞', '父と子の絆の物語']
      },
      incredibles: {
        title: 'Mr.インクレディブル',
        year: '2004 · ACTION · FAMILY',
        tag: 'SUPERHERO',
        desc: 'スーパーヒーロー一家の活躍と家族の絆。スタイリッシュなアクションと笑いが満載。',
        hero: 'かつての最強ヒーローが家族と共に復活。個性豊かな特殊能力を持つ一家の絆と、本当の「強さ」を問う痛快アクション。',
        detail: 'スーパーヒーロー活動を禁じられたパー一家が、新たな敵に立ち向かう。レトロフューチャーな世界観と家族ドラマが融合したアクション映画です。',
        highlights: ['個性豊かな一家の能力', 'スタイリッシュなアクション', '家族の絆と成長']
      },
      up: {
        title: 'カールじいさんの空飛ぶ家',
        year: '2009 · ADVENTURE · DRAMA',
        tag: 'ADVENTURE',
        desc: '無数の風船と共に空へ飛び立つ老人の夢と冒険。涙と笑いの感動作。',
        hero: '妻との夢を叶えるために、家を風船で空へ飛ばす老人。少年と犬と共に辿り着く、感動の冒険の結末。',
        detail: '亡き妻エリーとの約束を胸に、カールじいさんが家ごと南米へ。スカウト少年ラッセルや犬ダグとの出会いが、じいさんの人生を変えていきます。',
        highlights: ['涙のシーン「アドベンチャー・ブック」', '空飛ぶ家のビジュアル', 'カールとラッセルの友情']
      },
      insideout: {
        title: 'インサイド・ヘッド',
        year: '2015 · ANIMATION · DRAMA',
        tag: 'EMOTION',
        desc: '感情たちが暮らす「頭の中」の世界。ライリーの心を守るため奔走するキャラクターたち。',
        hero: '11歳の少女ライリーの「頭の中」で生きる感情たち。喜び、悲しみ、怒り、嫌悪、恐怖が織りなす、感情の冒険。',
        detail: '引っ越しで混乱するライリーの心の中で、感情たちが大活躍。喜びと悲しみの旅を通じて、すべての感情が大切だと教えてくれる作品です。',
        highlights: ['感情キャラクターの個性', '心の仕組みのユニークな設定', '涙と笑いのバランス']
      },
      coco: {
        title: 'リメンバー・ミー',
        year: '2017 · MUSICAL · FAMILY',
        tag: 'MUSIC',
        desc: '「死者の国」を舞台に繰り広げられる音楽と家族の絆。メキシコの文化が彩るミュージカル。',
        hero: '「死者の日」に死者の国に迷い込んだ少年ミゲル。先祖たちとの出会いを通して、家族の愛と音楽の意味を知る。',
        detail: '音楽を愛する少年ミゲルが死者の国へ。記憶と家族の絆、そして「Remember Me」が心に残る、カラフルで感動的なミュージカルです。',
        highlights: ['メキシコの「死者の日」文化', '名曲「Remember Me」', '家族と記憶のテーマ']
      },
      soul: {
        title: 'ソウルフル・ワールド',
        year: '2020 · DRAMA · MUSIC',
        tag: 'JAZZ',
        desc: '「魂の世界」で問いかける「生きる目的」とは何か。ジャズと哲学が融合した傑作。',
        hero: '夢を叶える直前に「魂の世界」へ迷い込んだ音楽家ジョー。「生きる目的」とは何か。ジャズと哲学が融合した傑作。',
        detail: 'ジャズピアニストのジョーが魂の世界で22番と出会い、生きる意味を見つめ直す。ニューヨークの街とジャズ、そして日常の輝きを描いた作品です。',
        highlights: ['ジャズの美しい音楽', '魂の世界のビジュアル', '「生きる意味」への問い']
      },
      monsters: {
        title: 'モンスターズ・インク',
        year: '2001 · COMEDY · FAMILY',
        tag: 'MONSTER',
        desc: '子供の叫びを集めるモンスターたちの世界。青い怪獣サリーと相棒マイクの大冒険。',
        hero: 'モンスター・シティでは、子供の部屋に潜り込み叫び声を集めるのが仕事。しかし一人の少女「ブー」の出現が、すべてを変えていく。',
        detail: 'トップスカラーのサリーとマイクの前に現れた人間の女の子ブー。笑い声の方が強力だと気づく、ユーモアと友情あふれるモンスター世界の物語です。',
        highlights: ['サリーとマイクのコンビ', 'ブーの可愛さ', 'モンスター・シティの設定']
      },
      ratatouille: {
        title: 'レミーのおいしいレストラン',
        year: '2007 · COMEDY · DRAMA',
        tag: 'GOURMET',
        desc: '料理が大好きなネズミレミーが、パリの名店を目指す。夢とグルメの心温まる物語。',
        hero: 'パリの下水道で育ったネズミレミー。一流シェフを目指し、人間の少年リンギニと共に伝説のレストラン「ギュストー」を救おうとする。',
        detail: '料理の才能を持つネズミレミーが、パリの厨房で活躍。「誰でもシェフになれる」というメッセージと、フランスの美食文化が魅力の作品です。',
        highlights: ['パリを舞台にした美食描写', 'レミーの料理シーン', '「Anyone can cook!」']
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
      langLabel: 'Language'
    },
    movies: {
      toy: {
        title: 'Toy Story',
        year: '1995 · ADVENTURE · COMEDY',
        tag: 'CLASSIC',
        desc: 'A secret world of toys. Woody and Buzz weave a tale of friendship and adventure.',
        hero: 'Toys come alive when humans are not watching. A story of friendship, rivalry, and growing up.',
        detail: 'Pixar\'s first feature film. Woody, the favorite toy, meets Buzz Lightyear, the space ranger. Their rivalry turns into an unforgettable friendship.',
        highlights: ['First CG animated feature', 'Iconic Woody & Buzz quotes', 'Secret life of toys']
      },
      nemo: {
        title: 'Finding Nemo',
        year: '2003 · ADVENTURE · FAMILY',
        tag: 'OCEAN',
        desc: 'A father and son across the vast ocean. A breathtaking underwater adventure.',
        hero: 'Marlin crosses the ocean to find his son Nemo. A moving tale of family and courage.',
        detail: 'Marlin teams up with forgetful Dory to rescue Nemo. Stunning ocean visuals and a heartfelt story about family bonds.',
        highlights: ['Stunning underwater world', 'Dory\'s famous lines', 'Father-son bond']
      },
      incredibles: {
        title: 'The Incredibles',
        year: '2004 · ACTION · FAMILY',
        tag: 'SUPERHERO',
        desc: 'A superhero family saves the day. Stylish action and laughs for everyone.',
        hero: 'A once-great hero returns with his family. Action-packed adventure about true strength.',
        detail: 'The Parr family hides their powers until a new villain emerges. Retro-futuristic style meets family drama in this superhero hit.',
        highlights: ['Unique superpowers', 'Stylish action scenes', 'Family bonds']
      },
      up: {
        title: 'Up',
        year: '2009 · ADVENTURE · DRAMA',
        tag: 'ADVENTURE',
        desc: 'An old man flies his house with balloons. Tears, laughter, and adventure.',
        hero: 'Carl flies his house to fulfill a promise to his wife. An adventure with a boy and a dog.',
        detail: 'Carl ties thousands of balloons to his house and heads to South America. Russell and Dug change his life on the journey.',
        highlights: ['Emotional opening montage', 'Flying house visuals', 'Carl & Russell friendship']
      },
      insideout: {
        title: 'Inside Out',
        year: '2015 · ANIMATION · DRAMA',
        tag: 'EMOTION',
        desc: 'Emotions live inside Riley\'s mind. Joy, Sadness, and friends protect her heart.',
        hero: 'Inside 11-year-old Riley\'s mind, five emotions navigate growing up and change.',
        detail: 'When Riley moves to a new city, Joy and Sadness get lost. A journey that teaches us every emotion matters.',
        highlights: ['Unique emotion characters', 'Creative mind-world setting', 'Laughs and tears']
      },
      coco: {
        title: 'Coco',
        year: '2017 · MUSICAL · FAMILY',
        tag: 'MUSIC',
        desc: 'Music and family in the Land of the Dead. A colorful Mexican-inspired musical.',
        hero: 'Miguel enters the Land of the Dead on Día de los Muertos and discovers his family\'s story.',
        detail: 'Miguel pursues music against his family\'s wishes. Memory, family, and "Remember Me" make this a beloved musical masterpiece.',
        highlights: ['Day of the Dead culture', 'Song "Remember Me"', 'Theme of family memory']
      },
      soul: {
        title: 'Soul',
        year: '2020 · DRAMA · MUSIC',
        tag: 'JAZZ',
        desc: 'What makes life worth living? Jazz and philosophy in the world of souls.',
        hero: 'Joe Gardner falls into the soul world before his big break. A journey to find life\'s spark.',
        detail: 'Jazz pianist Joe meets soul 22 and rethinks what it means to live. New York jazz and everyday magic shine through.',
        highlights: ['Beautiful jazz score', 'Soul world visuals', 'Meaning of life']
      },
      monsters: {
        title: 'Monsters, Inc.',
        year: '2001 · COMEDY · FAMILY',
        tag: 'MONSTER',
        desc: 'Monsters collect screams—until a little girl changes everything.',
        hero: 'In Monstropolis, Sulley and Mike\'s world turns upside down when Boo arrives.',
        detail: 'Top scarers Sulley and Mike meet human child Boo. A hilarious adventure that discovers laughter is more powerful than screams.',
        highlights: ['Sulley & Mike duo', 'Boo\'s charm', 'Monstropolis world']
      },
      ratatouille: {
        title: 'Ratatouille',
        year: '2007 · COMEDY · DRAMA',
        tag: 'GOURMET',
        desc: 'A rat who loves cooking dreams of Paris. A warm tale of food and dreams.',
        hero: 'Remy the rat teams with Linguini to save a legendary Paris restaurant.',
        detail: 'Remy\'s passion for cooking leads him to Gusteau\'s kitchen. "Anyone can cook" and Parisian cuisine delight audiences.',
        highlights: ['Paris food scenes', 'Remy\'s cooking', '"Anyone can cook!"']
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
      langLabel: '언어'
    },
    movies: {
      toy: {
        title: '토이 스토리',
        year: '1995 · ADVENTURE · COMEDY',
        tag: 'CLASSIC',
        desc: '장난감들의 비밀 세계. 우디와 버즈가 만드는 우정과 모험 이야기.',
        hero: '사람이 없을 때 살아 움직이는 장난감들. 우정과 성장의 감동적인 이야기.',
        detail: '픽사 첫 장편 애니메이션. 우디와 버즈 라이트이어의 만남과 대립, 그리고 진정한 우정을 그린 명작입니다.',
        highlights: ['최초의 CG 장편 애니메이션', '우디와 버즈의 명대사', '장난감들의 비밀 생활']
      },
      nemo: {
        title: '니모를 찾아서',
        year: '2003 · ADVENTURE · FAMILY',
        tag: 'OCEAN',
        desc: '넓은 바다를 건넌 부자의 사랑. 숨 막히는 해저 세계의 감동작.',
        hero: '아들 니모를 찾아 바다를 항해하는 마를린. 가족의 의미를 묻는 모험.',
        detail: '마를린과 도리가 니모를 구하기 위해 바다를 여행합니다. 아름다운 해저 비주얼과 가족애가 돋보입니다.',
        highlights: ['압도적인 해저 비주얼', '도리의 명대사', '부자의 유대']
      },
      incredibles: {
        title: '인크레더블',
        year: '2004 · ACTION · FAMILY',
        tag: 'SUPERHERO',
        desc: '슈퍼히어로 가족의 활약. 스타일리시한 액션과 유머.',
        hero: '한때 최강의 히어로가 가족과 함께 돌아옵니다. 진정한 강함을 묻는 액션.',
        detail: '파 가족이 숨겨온 능력으로 새로운 적에 맞섭니다. 레트로풍 세계관과 가족 드라마가 어우러집니다.',
        highlights: ['개성 넘치는 가족 능력', '스타일리시한 액션', '가족의 유대']
      },
      up: {
        title: '업',
        year: '2009 · ADVENTURE · DRAMA',
        tag: 'ADVENTURE',
        desc: '풍선과 함께 하늘로 날아오른 할아버지의 꿈과 모험.',
        hero: '아내와의 약속을 지키기 위해 집을 하늘로 띄운 칼 할아버지의 여정.',
        detail: '칼은 풍선 수천 개로 집을 들어 남미로 향합니다. 러셀과 더그를 만나 인생이 바뀝니다.',
        highlights: ['감동의 어드벤처 북', '하늘을 나는 집', '칼과 러셀의 우정']
      },
      insideout: {
        title: '인사이드 아웃',
        year: '2015 · ANIMATION · DRAMA',
        tag: 'EMOTION',
        desc: '감정들이 사는 마음 속 세계. 라일리를 지키는 감정 친구들.',
        hero: '11살 라일리의 머릿속, 다섯 감정이 성장과 변화를 함께합니다.',
        detail: '이사 후 혼란스러운 라일리의 마음속에서 기쁨이와 슬픔이의 여행이 펼쳐집니다. 모든 감정이 소중하다는 메시지.',
        highlights: ['개성 있는 감정 캐릭터', '독창적인 마음 세계', '웃음과 눈물']
      },
      coco: {
        title: '코코',
        year: '2017 · MUSICAL · FAMILY',
        tag: 'MUSIC',
        desc: '죽은 자의 나라에서 펼쳐지는 음악과 가족의 이야기.',
        hero: '죽은 자의 날에 죽은 자의 나라로 간 소년 미겔. 가족과 음악의 의미를 배웁니다.',
        detail: '음악을 사랑하는 미겔의 모험. 기억과 가족, 「Remember Me」가 남는 감동 뮤지컬입니다.',
        highlights: ['죽은 자의 날 문화', '명곡 Remember Me', '가족과 기억']
      },
      soul: {
        title: '소울',
        year: '2020 · DRAMA · MUSIC',
        tag: 'JAZZ',
        desc: '살아 있다는 것은 무엇인가. 재즈와 철학이 만난 걸작.',
        hero: '꿈의 순간 직전 영혼의 세계로 빠진 재즈 피아니스트 조.',
        detail: '조 가드너가 22번과 만나 삶의 의미를 되돌아봅니다. 뉴욕의 재즈와 일상의 빛.',
        highlights: ['아름다운 재즈 음악', '영혼의 세계 비주얼', '삶의 의미']
      },
      monsters: {
        title: '몬스터 주식회사',
        year: '2001 · COMEDY · FAMILY',
        tag: 'MONSTER',
        desc: '아이의 비명을 모으는 괴물들. 설리와 마이크의 대모험.',
        hero: '괴물 도시에서 인간 소녀 부의 등장이 모든 것을 바꿉니다.',
        detail: '최고의 스키어러 설리와 마이크 앞에 나타난 부. 웃음이 비명보다 강하다는 유쾌한 이야기.',
        highlights: ['설리와 마이크 콤비', '부의 매력', '괴물 도시 설정']
      },
      ratatouille: {
        title: '라따뚜이',
        year: '2007 · COMEDY · DRAMA',
        tag: 'GOURMET',
        desc: '요리를 사랑하는 쥐 레미가 파리 명점을 꿈꾼다.',
        hero: '쥐 레미가 인간 소년 링귀니와 함께 전설의 레스토랑을 구합니다.',
        detail: '요리 천재 레미의 파리 키친 활약. 「누구나 요리사가 될 수 있다」는 메시지.',
        highlights: ['파리 미식 묘사', '레미의 요리 장면', 'Anyone can cook!']
      }
    }
  }
};

const MOVIE_META = {
  toy: { poster: './img/top/toy.jpg', youtube: 'nsG6Mric9g0', tagStyle: 'color:#93c5fd;border-color:#2563eb' },
  nemo: { poster: './img/top/nemo.webp', youtube: 'SDPlwNyYKS4', tagStyle: 'color:#38bdf8;border-color:#0284c7' },
  incredibles: { poster: './img/top/inc.jpg', youtube: '-iM4JHRC2_U', tagStyle: 'color:#fca5a5;border-color:#dc2626' },
  up: { poster: './img/top/up.jpg', youtube: 'TA900pHzsnQ', tagStyle: 'color:#86efac;border-color:#16a34a' },
  insideout: { poster: './img/top/insideout.jpg', youtube: 'k2MqRbJLGSQ', tagStyle: 'color:#c4b5fd;border-color:#7c3aed' },
  coco: { poster: './img/top/coco.jpg', youtube: 'bNO0c3ghCVo', tagStyle: 'color:#fdba74;border-color:#ea580c' },
  soul: { poster: './img/top/soul.jpeg', youtube: '6M6LpGu-AQU', tagStyle: 'color:#5eead4;border-color:#0f766e' },
  monsters: { poster: './img/top/mon.jpg', youtube: 'NjcLBbp5NSM', tagStyle: 'color:#93c5fd;border-color:#2563eb' },
  ratatouille: { poster: './img/top/remi.jpg', youtube: 'LRFkH6lFEXM', tagStyle: 'color:#fca5a5;border-color:#dc2626' }
};

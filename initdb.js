const sql = require('better-sqlite3');
const db = sql('cafes.db');

const dummyCafes = [
  {
    title: 'Urban Grind Cafe',
    slug: 'urban-grind-cafe',
    image: 'cafe1.jpg',
    summary: '도심 속 아늑한 카페, 훌륭한 커피와 홈메이드 디저트가 일품입니다.',
    instructions: `
      1. 위치:
         도심 한복판에 자리 잡아 접근성이 뛰어납니다.
      
      2. 분위기:
         아늑하고 세련된 인테리어와 편안한 좌석이 마련되어 있습니다.
      
      3. 메뉴:
         신선한 원두 커피와 갓 구운 페이스트리, 다양한 브런치 메뉴를 제공합니다.
      
      4. 추천 포인트:
         친절한 서비스와 멋진 도심 전망이 인상적입니다.
    `,
    creator: 'Jane Doe',
    creator_email: 'janedoe@example.com',
  },
  {
    title: 'Seaside Brew',
    slug: 'seaside-brew',
    image: 'cafe2.jpg',
    summary: '바다 전망을 즐길 수 있는 매력적인 카페, 여유로운 분위기가 일품입니다.',
    instructions: `
      1. 위치:
         바닷가 근처에 위치해 멋진 해안 경관을 자랑합니다.
      
      2. 분위기:
         밝고 여유로운 인테리어, 야외 좌석에서 바다를 감상할 수 있습니다.
      
      3. 메뉴:
         프리미엄 커피와 시원한 디저트가 인기를 끕니다.
      
      4. 추천 포인트:
         자연 경관과 함께 여유로운 커피 타임을 즐기세요.
    `,
    creator: 'Alice Kim',
    creator_email: 'alicekim@example.com',
  },
  {
    title: 'Rustic Roasters',
    slug: 'rustic-roasters',
    image: 'cafe3.jpg',
    summary: '빈티지 감성의 수제 로스팅 카페, 창의적인 분위기와 독특한 커피 맛이 특징입니다.',
    instructions: `
      1. 위치:
         예술적인 동네 중심에 위치해 접근성이 좋습니다.
      
      2. 분위기:
         빈티지 인테리어와 따뜻한 나무 느낌이 돋보입니다.
      
      3. 메뉴:
         다양한 핸드드립 커피와 직접 만든 스낵, 디저트가 준비되어 있습니다.
      
      4. 추천 포인트:
         창의적인 분위기와 독특한 커피 경험을 제공합니다.
    `,
    creator: 'Robert Lee',
    creator_email: 'robertlee@example.com',
  },
  {
    title: 'Garden Cafe',
    slug: 'garden-cafe',
    image: 'cafe4.jpg',
    summary: '아름다운 정원과 함께하는 여유로운 카페, 건강한 메뉴가 돋보입니다.',
    instructions: `
      1. 위치:
         넓은 정원을 보유한 한적한 지역에 위치합니다.
      
      2. 분위기:
         자연 채광과 푸른 정원이 어우러진 편안한 공간입니다.
      
      3. 메뉴:
         유기농 커피, 신선한 스무디, 건강한 샐러드 등을 제공합니다.
      
      4. 추천 포인트:
         자연 속에서 편안한 휴식을 취하며 여유로운 오후를 보낼 수 있습니다.
    `,
    creator: 'Michael Park',
    creator_email: 'michaelpark@example.com',
  },
  {
    title: 'Mountain View Cafe',
    slug: 'mountain-view-cafe',
    image: 'cafe5.jpg',
    summary: '산의 전경을 감상할 수 있는 평화로운 카페, 자연과 어우러진 특별한 경험을 선사합니다.',
    instructions: `
      1. 위치:
         푸른 산자락 사이에 자리 잡은 카페로, 탁월한 자연 경관을 제공합니다.
      
      2. 분위기:
         넓은 창으로 펼쳐진 산 경치와 고요한 분위기가 특징입니다.
      
      3. 메뉴:
         건강한 식재료로 만든 메뉴와 허브티, 신선한 주스가 인기입니다.
      
      4. 추천 포인트:
         도심의 분주함을 벗어나 산의 평화로움을 만끽하세요.
    `,
    creator: 'Hannah Lee',
    creator_email: 'hannahlee@example.com',
  },
  {
    title: 'City Lights Espresso',
    slug: 'city-lights-espresso',
    image: 'cafe6.jpg',
    summary: '밤의 도시를 배경으로 고급스러운 에스프레소를 맛볼 수 있는 세련된 카페.',
    instructions: `
      1. 위치:
         도시 중심부에 위치하여 밤에도 활기찬 분위기를 자랑합니다.
      
      2. 분위기:
         모던한 인테리어와 은은한 조명이 어우러져 특별한 밤을 연출합니다.
      
      3. 메뉴:
         전문 바리스타의 진한 에스프레소와 다양한 커피 음료가 준비되어 있습니다.
      
      4. 추천 포인트:
         도시의 불빛과 어울리는 특별한 커피 경험을 즐겨보세요.
    `,
    creator: 'Daniel Kim',
    creator_email: 'danielkim@example.com',
  },
  {
    title: 'Cozy Corner Cafe',
    slug: 'cozy-corner-cafe',
    image: 'cafe7.jpg',
    summary: '작고 아늑한 모퉁이에 자리 잡은 카페, 따뜻한 커피와 부드러운 분위기가 매력적입니다.',
    instructions: `
      1. 위치:
         조용하고 아늑한 골목에 위치하여 편안한 분위기를 자랑합니다.
      
      2. 분위기:
         클래식 인테리어와 아늑한 소파, 부드러운 조명이 마련되어 있습니다.
      
      3. 메뉴:
         집에서 만든 특제 커피와 디저트가 인기입니다.
      
      4. 추천 포인트:
         이웃과 함께 편안한 시간을 보내기 좋은 작은 카페입니다.
    `,
    creator: 'Soo Min',
    creator_email: 'soomin@example.com',
  },
  {
    title: 'The Brew Lab',
    slug: 'the-brew-lab',
    image: 'cafe8.jpg',
    summary: '실험적인 커피 메뉴와 창의적인 바리스타들이 만드는 카페, 새로운 맛의 탐험을 즐겨보세요.',
    instructions: `
      1. 위치:
         창의적인 동네에 위치해 독특한 카페 분위기를 경험할 수 있습니다.
      
      2. 분위기:
         산업적인 감성과 모던한 인테리어가 조화를 이룹니다.
      
      3. 메뉴:
         다양한 퓨전 커피와 스페셜티 음료가 제공됩니다.
      
      4. 추천 포인트:
         혁신적인 커피 문화를 경험하며 새로운 맛의 여정을 즐기세요.
    `,
    creator: 'Laura Kim',
    creator_email: 'laurakim@example.com',
  },
  {
    title: 'Vintage Vibes Cafe',
    slug: 'vintage-vibes-cafe',
    image: 'cafe9.jpg',
    summary: '레트로 감성이 살아있는 카페, 독특한 분위기와 예스러운 인테리어가 인상적입니다.',
    instructions: `
      1. 위치:
         과거의 멋을 간직한 동네에 위치하여 아날로그 감성을 자아냅니다.
      
      2. 분위기:
         빈티지 소품과 클래식 디자인이 조화를 이루는 따뜻한 공간입니다.
      
      3. 메뉴:
         클래식 커피와 함께 추억의 디저트를 맛볼 수 있습니다.
      
      4. 추천 포인트:
         특별한 분위기에서 과거의 감성과 현대가 어우러진 경험을 즐기세요.
    `,
    creator: 'Kevin Park',
    creator_email: 'kevinpark@example.com',
  },
];

// 테이블 삭제 후 다시 생성하기 (데이터 모두 삭제됨)
// db.prepare(`DROP TABLE IF EXISTS cafes`).run();

db.prepare(`
   CREATE TABLE IF NOT EXISTS cafes (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO cafes VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const cafe of dummyCafes) {
    stmt.run(cafe);
  }

}

initData();

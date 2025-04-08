import Image from 'next/image';

import cafeIcon from '@/assets/icons/cafe.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
      <>
        <header className={classes.header}>
          <h1>
            <span className={classes.highlight}>Cafe Community</span>
          </h1>
          <p>
            커피와 카페 문화를 사랑하는 사람들이 모여 최고의 카페 정보를 공유합니다!
          </p>
        </header>
        <main className={classes.main}>
          <h2>커뮤니티 혜택</h2>

          <ul className={classes.perks}>
            <li>
              <Image src={cafeIcon} alt="매력적인 카페 모습" />
              <p>최고의 카페 정보 공유 &amp; 탐방</p>
            </li>
            <li>
              <Image src={communityIcon} alt="커피 문화를 나누는 사람들" />
              <p>비슷한 취향의 친구 만나기</p>
            </li>
            <li>
              <Image src={eventsIcon} alt="카페 이벤트 현장" />
              <p>이벤트 참여</p>
            </li>
          </ul>
        </main>
      </>
  );
}

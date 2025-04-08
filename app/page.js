import Link from 'next/link';
import ImageSlideshow from '@/components/images/image-slideshow';
import classes from './page.module.css';

export default function Home() {
  console.log('BACKEND..');
  return (
      <>
        <header className={classes.header}>
          <div className={classes.slideshow}>
            <ImageSlideshow />
          </div>
          <div>
            <div className={classes.hero}>
              <h1>멋진 카페를 만나는 공간, Café Conclave</h1>
              <p>직접 다녀온 최고의 카페와 생생한 리뷰를 공유해보세요.</p>
            </div>
            <div className={classes.cta}>
              <Link href="/community">커뮤니티 가입하기</Link>
              <Link href="/cafes">카페 탐험하기</Link>
            </div>
          </div>
        </header>
        <main>
          <section className={classes.section}>
            <h2>이용 방법</h2>
            <p>
              Café Conclave는 전국 각지의 멋진 카페들을 소개하는 플랫폼입니다.
              여러분의 방문 후기를 통해 새로운 카페를 발견하고, 다른 사람들의 경험을 나눌 수 있습니다.
            </p>
            <p>
              사용자 리뷰, 평점, 사진 등 다양한 정보를 확인하고, 직접 체험한 카페 이야기를 공유해보세요.
            </p>
          </section>

          <section className={classes.section}>
            <h2>왜 Café Conclave인가요?</h2>
            <p>
              Café Conclave는 커피와 카페 문화에 대한 열정을 가진 사람들이 모여 서로의 경험을 나누고 소통하는 공간입니다.
              신뢰할 수 있는 리뷰와 생생한 추천으로, 전국 어디서든 최고의 카페를 만나보실 수 있습니다.
            </p>
            <p>
              각 지역의 특색 있는 카페, 숨은 명소, 최신 트렌드를 한눈에 확인하세요.
            </p>
          </section>
        </main>
      </>
  );
}

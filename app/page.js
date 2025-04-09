'use client';

import styles from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';
import Link from 'next/link';

export default function Home() {
    return (
        <main className={styles.container}>
            {/* 메인 섹션 */}
            <section className={styles.heroSection}>
                {/* 왼쪽 (텍스트 영역) */}
                <div className={styles.leftSide}>
                    <h1 className={styles.title}>
                        멋진 카페를 만나는 공간<br />
                        <span className={styles.highlight}>Café Conclave</span>
                    </h1>
                    <p className={styles.subtext}>
                        직접 다녀온 최고의 카페와 생생한 리뷰를 공유해보세요.
                    </p>
                    {/* 새롭게 추가된 카페 커뮤니티 관련 텍스트 */}
                    <p className={styles.communityText}>
                        카페 커뮤니티에 관한 소중한 이야기와 경험을 나누며, 모두가 함께 성장하는 공간입니다.
                    </p>

                    <div className={styles.ctaButtons}>
                        <Link className={styles.ctaOutline} href="/community">
                            커뮤니티 가입하기
                        </Link>
                        <Link className={styles.ctaFilled} href="/cafes">
                            카페 탐험하기
                        </Link>
                    </div>
                </div>
                {/* 오른쪽 영역 */}
                <div className={styles.coffeeCupWrapper}>
                    <div className={styles.rightSlider}>
                        <ImageSlideshow />
                    </div>
                </div>
            </section>
        </main>
    );
}

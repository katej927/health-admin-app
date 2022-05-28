import {MainLogo} from "assets/svgs"
import styles from './sideBar.module.scss';

const SideBar = () => {
  

  // TODO: isClicked 부분 리팩토링
  return (
    <aside className={styles.sideBarWrapper}>
      <section>
        <div>
          <MainLogo />
          <div className={styles.underLine} />
        </div>
        {/* <div className={styles.serviceWrapper}>
          <p className={styles.title}>서비스</p>
          <div>
          </div>
        </div>
        <div className={styles.adCenterWrapper}>
          <p className={styles.title}>광고 센터</p>
          <button
            type='button'
            className={cn(styles.categoryBtn, { [styles.isClicked]: pathname === '/' })}
            onClick={() => handleClickAdCenterBtn('/')}
          >
            <DashbordIcon fill={pathname === '/' ? '#586CF5' : '#3A474E'} />
            <p>대시보드</p>
          </button>
          <button
            type='button'
            className={cn(styles.categoryBtn, { [styles.isClicked]: pathname === '/adManagement' })}
            onClick={() => handleClickAdCenterBtn('/adManagement')}
          >
            <AdIcon fill={pathname === '/adManagement' ? '#586CF5' : '#3A474E'} />
            <p>광고관리</p>
          </button>
        </div>
      </section>
      <section>
        <div className={styles.useGuideWrapper}>
          <GuideIcon />
          <div>
            <p className={styles.guideTitle}>레버 이용 가이드</p>
            <p className={styles.guideText}>시작하기 전에 알아보기</p>
          </div>
        </div>
        <div className={styles.footerWrapper}>
          <p>레버는 함께 만들어갑니다.</p>
          <p className={styles.underLineText}>이용약관</p>
        </div>
       */}
        </section>
    </aside>
  );
};

export default SideBar;

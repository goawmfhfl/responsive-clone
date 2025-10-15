export const theme = {
  breakpoints: {
    tablet: "42.5rem", // 680px
    desktop: "57.5rem", // 920px
  },

  colors: {
    // 백그라운드 컬러 시스템
    background: {
      primary: "rgb(247, 248, 250)", // 메인 백그라운드
      secondary: "#f8f9fa", // 보조 백그라운드
      tertiary: "#e9ecef", // 세 번째 백그라운드
      dark: "#212529", // 다크 모드 백그라운드
      overlay: "rgba(0, 0, 0, 0.5)", // 오버레이 백그라운드
    },

    // 텍스트 컬러
    text: {
      primary: "#212529", // 메인 텍스트
      secondary: "#6c757d", // 보조 텍스트
      tertiary: "#adb5bd", // 세 번째 텍스트
      inverse: "#ffffff", // 반전 텍스트
      link: "#007bff", // 링크 텍스트
    },

    // 브랜드 컬러
    brand: {
      primary: "rgb(124, 212, 204)", // 메인 브랜드 컬러
      secondary: "#6c757d", // 보조 브랜드 컬러
      accent: "#28a745", // 강조 컬러
    },

    // 액센트 컬러
    accent: {
      primary: "#007bff", // 메인 액센트
      secondary: "#28a745", // 성공/긍정적 액센트
      warning: "#ffc107", // 경고 액센트
      danger: "#dc3545", // 위험/오류 액센트
      info: "#17a2b8", // 정보 액센트
    },

    // 보더 컬러
    border: {
      primary: "#dee2e6", // 메인 보더
      secondary: "#e9ecef", // 보조 보더
      hover: "#adb5bd", // 호버 보더
      focus: "#007bff", // 포커스 보더
    },

    // 그림자
    shadow: {
      light: "0 1px 3px rgba(0, 0, 0, 0.1)",
      medium: "0 4px 6px rgba(0, 0, 0, 0.1)",
      heavy: "0 10px 25px rgba(0, 0, 0, 0.15)",
    },
  },

  // 스페이싱 시스템
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "3rem", // 48px
    xxxl: "4rem", // 64px
  },

  // 폰트 사이즈
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    xxl: "1.5rem", // 24px
    xxxl: "2rem", // 32px
  },

  // 폰트 웨이트
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // 보더 라디우스
  borderRadius: {
    sm: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    full: "9999px", // 완전한 원형
  },

  // 트랜지션
  transition: {
    fast: "0.15s ease-in-out",
    normal: "0.3s ease-in-out",
    slow: "0.5s ease-in-out",
  },
};

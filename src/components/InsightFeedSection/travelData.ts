export interface TravelCardData {
  id: number;
  image: string;
  location: string;
  title: string;
  originalPrice?: number;
  salePrice?: number;
  hasSaleBadge?: boolean;
  rating?: number;
  additionalBadge?: string;
}

// 각 카테고리별 데이터 정의
export const mockData: Record<string, TravelCardData[]> = {
  accommodation: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      location: "서울 동대문",
      title: "심플 스테이 동대문",
      originalPrice: 120,
      salePrice: 81,
      hasSaleBadge: true,
      rating: 4.2,
      additionalBadge: "인기",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      location: "서울 명동",
      title: "명동 앰배서더 서울 명동",
      originalPrice: 250,
      salePrice: 189,
      hasSaleBadge: true,
      rating: 4.5,
      additionalBadge: "추천",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      location: "서울 서촌",
      title: "서촌 한옥마을 한옥 스테이",
      originalPrice: 110,
      salePrice: 89,
      hasSaleBadge: true,
      rating: 4.7,
      additionalBadge: "특가",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      location: "서울 강남",
      title: "호텔 더 디자이너스",
      originalPrice: 95,
      salePrice: 73,
      hasSaleBadge: true,
      rating: 4.1,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
      location: "서울 홍대",
      title: "홍대 게스트하우스",
      originalPrice: 65,
      salePrice: 52,
      hasSaleBadge: true,
      rating: 4.3,
      additionalBadge: "신규",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      location: "서울 이태원",
      title: "이태원 부티크 호텔",
      originalPrice: 180,
      salePrice: 144,
      hasSaleBadge: true,
      rating: 4.6,
      additionalBadge: "럭셔리",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1571003123894-49f4b56c69b9?w=400&h=300&fit=crop",
      location: "서울 강동",
      title: "강동 비즈니스 호텔",
      originalPrice: 85,
      salePrice: 68,
      hasSaleBadge: true,
      rating: 4.0,
      additionalBadge: "비즈니스",
    },
  ],
  restaurant: [
    {
      id: 101,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      location: "서울 강남",
      title: "미슐랭 스타 레스토랑",
      originalPrice: 80,
      salePrice: 60,
      hasSaleBadge: true,
      rating: 4.8,
      additionalBadge: "미슐랭",
    },
    {
      id: 102,
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      location: "서울 홍대",
      title: "홍대 맛집 골목",
      originalPrice: 25,
      salePrice: 20,
      hasSaleBadge: true,
      rating: 4.3,
      additionalBadge: "인기",
    },
    {
      id: 103,
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      location: "서울 이태원",
      title: "이태원 이탈리안 레스토랑",
      originalPrice: 45,
      salePrice: 36,
      hasSaleBadge: true,
      rating: 4.6,
      additionalBadge: "추천",
    },
    {
      id: 104,
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
      location: "서울 명동",
      title: "명동 전통 한정식",
      originalPrice: 35,
      salePrice: 28,
      hasSaleBadge: true,
      rating: 4.4,
      additionalBadge: "전통",
    },
    {
      id: 105,
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      location: "서울 성수",
      title: "성수동 트렌디 레스토랑",
      originalPrice: 55,
      salePrice: 44,
      hasSaleBadge: true,
      rating: 4.7,
      additionalBadge: "트렌디",
    },
    {
      id: 106,
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      location: "서울 압구정",
      title: "압구정 프리미엄 스테이크",
      originalPrice: 120,
      salePrice: 96,
      hasSaleBadge: true,
      rating: 4.9,
      additionalBadge: "프리미엄",
    },
    {
      id: 107,
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
      location: "서울 신촌",
      title: "신촌 대학가 맛집",
      originalPrice: 18,
      salePrice: 14,
      hasSaleBadge: true,
      rating: 4.2,
      additionalBadge: "학생할인",
    },
  ],
  cafe: [
    {
      id: 201,
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      location: "서울 성수",
      title: "성수 카페거리 핫플레이스",
      originalPrice: 8,
      salePrice: 6,
      hasSaleBadge: true,
      rating: 4.5,
      additionalBadge: "NEW",
    },
    {
      id: 202,
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
      location: "서울 연남동",
      title: "연남동 브런치 카페",
      originalPrice: 12,
      salePrice: 9,
      hasSaleBadge: true,
      rating: 4.7,
      additionalBadge: "브런치",
    },
    {
      id: 203,
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
      location: "서울 한남동",
      title: "한남동 로스터리 카페",
      originalPrice: 10,
      salePrice: 8,
      hasSaleBadge: true,
      rating: 4.6,
      additionalBadge: "로스터리",
    },
    {
      id: 204,
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
      location: "서울 청담",
      title: "청담 프리미엄 카페",
      originalPrice: 15,
      salePrice: 12,
      hasSaleBadge: true,
      rating: 4.8,
      additionalBadge: "프리미엄",
    },
    {
      id: 205,
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      location: "서울 건대",
      title: "건대 스터디 카페",
      originalPrice: 6,
      salePrice: 5,
      hasSaleBadge: true,
      rating: 4.4,
      additionalBadge: "스터디",
    },
    {
      id: 206,
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
      location: "서울 신사",
      title: "신사동 디저트 카페",
      originalPrice: 12,
      salePrice: 10,
      hasSaleBadge: true,
      rating: 4.6,
      additionalBadge: "디저트",
    },
    {
      id: 207,
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
      location: "서울 송파",
      title: "송파 가족 카페",
      originalPrice: 9,
      salePrice: 7,
      hasSaleBadge: true,
      rating: 4.3,
      additionalBadge: "가족친화",
    },
  ],
  attractions: [
    {
      id: 301,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      location: "서울 남산",
      title: "남산타워 전망대",
      originalPrice: 15,
      salePrice: 12,
      hasSaleBadge: true,
      rating: 4.3,
      additionalBadge: "인기",
    },
    {
      id: 302,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      location: "서울 경복궁",
      title: "경복궁 한복 체험",
      originalPrice: 20,
      salePrice: 16,
      hasSaleBadge: true,
      rating: 4.7,
      additionalBadge: "체험",
    },
    {
      id: 303,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      location: "서울 북촌",
      title: "북촌 한옥마을 투어",
      originalPrice: 25,
      salePrice: 20,
      hasSaleBadge: true,
      rating: 4.5,
      additionalBadge: "투어",
    },
    {
      id: 304,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      location: "서울 한강",
      title: "한강 유람선 체험",
      originalPrice: 30,
      salePrice: 24,
      hasSaleBadge: true,
      rating: 4.4,
      additionalBadge: "유람선",
    },
    {
      id: 305,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      location: "서울 롯데월드",
      title: "롯데월드 어드벤처",
      originalPrice: 45,
      salePrice: 36,
      hasSaleBadge: true,
      rating: 4.5,
      additionalBadge: "테마파크",
    },
    {
      id: 306,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      location: "서울 청계천",
      title: "청계천 야경 투어",
      originalPrice: 20,
      salePrice: 16,
      hasSaleBadge: true,
      rating: 4.3,
      additionalBadge: "야경",
    },
    {
      id: 307,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      location: "서울 인사동",
      title: "인사동 문화거리",
      originalPrice: 15,
      salePrice: 12,
      hasSaleBadge: true,
      rating: 4.6,
      additionalBadge: "문화",
    },
  ],
  shopping: [
    {
      id: 401,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      location: "서울 명동",
      title: "명동 쇼핑거리 패키지",
      originalPrice: 50,
      salePrice: 40,
      hasSaleBadge: true,
      rating: 4.2,
      additionalBadge: "패키지",
    },
    {
      id: 402,
      image:
        "https://images.unsplash.com/photo-1555529669-2269763671c0?w=400&h=300&fit=crop",
      location: "서울 동대문",
      title: "동대문 쇼핑몰 투어",
      originalPrice: 35,
      salePrice: 28,
      hasSaleBadge: true,
      rating: 4.1,
      additionalBadge: "투어",
    },
    {
      id: 403,
      image:
        "https://images.unsplash.com/photo-1555529906-1a565c28eab6?w=400&h=300&fit=crop",
      location: "서울 강남",
      title: "강남 코스메틱 쇼핑",
      originalPrice: 40,
      salePrice: 32,
      hasSaleBadge: true,
      rating: 4.6,
      additionalBadge: "코스메틱",
    },
    {
      id: 404,
      image:
        "https://images.unsplash.com/photo-1555529906-1a565c28eab6?w=400&h=300&fit=crop",
      location: "서울 홍대",
      title: "홍대 스트리트 패션",
      originalPrice: 30,
      salePrice: 24,
      hasSaleBadge: true,
      rating: 4.4,
      additionalBadge: "패션",
    },
    {
      id: 405,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      location: "서울 압구정",
      title: "압구정 로데오거리",
      originalPrice: 60,
      salePrice: 48,
      hasSaleBadge: true,
      rating: 4.7,
      additionalBadge: "럭셔리",
    },
    {
      id: 406,
      image:
        "https://images.unsplash.com/photo-1555529669-2269763671c0?w=400&h=300&fit=crop",
      location: "서울 신촌",
      title: "신촌 대학가 쇼핑",
      originalPrice: 25,
      salePrice: 20,
      hasSaleBadge: true,
      rating: 4.2,
      additionalBadge: "학생할인",
    },
    {
      id: 407,
      image:
        "https://images.unsplash.com/photo-1555529906-1a565c28eab6?w=400&h=300&fit=crop",
      location: "서울 건대",
      title: "건대 젊은이 쇼핑",
      originalPrice: 35,
      salePrice: 28,
      hasSaleBadge: true,
      rating: 4.5,
      additionalBadge: "젊은이",
    },
  ],
  transport: [
    {
      id: 501,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
      location: "서울 전역",
      title: "서울 지하철 1일권",
      originalPrice: 8,
      salePrice: 6,
      hasSaleBadge: true,
      rating: 4.5,
      additionalBadge: "1일권",
    },
    {
      id: 502,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      location: "서울 한강",
      title: "한강 버스 투어",
      originalPrice: 25,
      salePrice: 20,
      hasSaleBadge: true,
      rating: 4.3,
      additionalBadge: "투어",
    },
    {
      id: 503,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
      location: "인천공항",
      title: "공항 리무진 서비스",
      originalPrice: 20,
      salePrice: 16,
      hasSaleBadge: true,
      rating: 4.7,
      additionalBadge: "리무진",
    },
    {
      id: 504,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      location: "서울 전역",
      title: "서울 시티투어 버스",
      originalPrice: 15,
      salePrice: 12,
      hasSaleBadge: true,
      rating: 4.4,
      additionalBadge: "시티투어",
    },
    {
      id: 505,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
      location: "서울 강남",
      title: "강남 셔틀 서비스",
      originalPrice: 12,
      salePrice: 10,
      hasSaleBadge: true,
      rating: 4.3,
      additionalBadge: "셔틀",
    },
    {
      id: 506,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      location: "서울 홍대",
      title: "홍대 나이트 투어",
      originalPrice: 25,
      salePrice: 20,
      hasSaleBadge: true,
      rating: 4.6,
      additionalBadge: "나이트투어",
    },
    {
      id: 507,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
      location: "서울 명동",
      title: "명동 도보 투어",
      originalPrice: 18,
      salePrice: 14,
      hasSaleBadge: true,
      rating: 4.5,
      additionalBadge: "도보투어",
    },
  ],
  culture: [
    {
      id: 601,
      image:
        "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=400&h=300&fit=crop",
      location: "서울 인사동",
      title: "인사동 전통문화 체험",
      originalPrice: 30,
      salePrice: 24,
      hasSaleBadge: true,
      rating: 4.6,
      additionalBadge: "전통",
    },
    {
      id: 602,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      location: "서울 경복궁",
      title: "한복 대여 체험",
      originalPrice: 25,
      salePrice: 20,
      hasSaleBadge: true,
      rating: 4.8,
      additionalBadge: "한복",
    },
    {
      id: 603,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      location: "서울 북촌",
      title: "북촌 문화 투어",
      originalPrice: 35,
      salePrice: 28,
      hasSaleBadge: true,
      rating: 4.5,
      additionalBadge: "문화투어",
    },
    {
      id: 604,
      image:
        "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=400&h=300&fit=crop",
      location: "서울 명동",
      title: "K-뷰티 체험관",
      originalPrice: 40,
      salePrice: 32,
      hasSaleBadge: true,
      rating: 4.7,
      additionalBadge: "K-뷰티",
    },
    {
      id: 605,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      location: "서울 인사동",
      title: "인사동 전통공예 체험",
      originalPrice: 35,
      salePrice: 28,
      hasSaleBadge: true,
      rating: 4.8,
      additionalBadge: "전통공예",
    },
    {
      id: 606,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      location: "서울 강남",
      title: "강남 K-팝 체험",
      originalPrice: 50,
      salePrice: 40,
      hasSaleBadge: true,
      rating: 4.9,
      additionalBadge: "K-팝",
    },
    {
      id: 607,
      image:
        "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=400&h=300&fit=crop",
      location: "서울 홍대",
      title: "홍대 아트 갤러리",
      originalPrice: 20,
      salePrice: 16,
      hasSaleBadge: true,
      rating: 4.4,
      additionalBadge: "아트",
    },
  ],
  nature: [
    {
      id: 701,
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      location: "서울 한강",
      title: "한강 자연 체험",
      originalPrice: 20,
      salePrice: 16,
      hasSaleBadge: true,
      rating: 4.4,
      additionalBadge: "자연",
    },
    {
      id: 702,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      location: "서울 남산",
      title: "남산 자연 산책로",
      originalPrice: 10,
      salePrice: 8,
      hasSaleBadge: true,
      rating: 4.3,
      additionalBadge: "산책",
    },
    {
      id: 703,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      location: "서울 북한산",
      title: "북한산 등반 체험",
      originalPrice: 25,
      salePrice: 20,
      hasSaleBadge: true,
      rating: 4.6,
      additionalBadge: "등반",
    },
    {
      id: 704,
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      location: "서울 청계천",
      title: "청계천 자연 탐방",
      originalPrice: 15,
      salePrice: 12,
      hasSaleBadge: true,
      rating: 4.2,
      additionalBadge: "탐방",
    },
    {
      id: 705,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      location: "서울 올림픽공원",
      title: "올림픽공원 산책로",
      originalPrice: 8,
      salePrice: 6,
      hasSaleBadge: true,
      rating: 4.5,
      additionalBadge: "산책",
    },
    {
      id: 706,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      location: "서울 반포",
      title: "반포 한강공원",
      originalPrice: 12,
      salePrice: 10,
      hasSaleBadge: true,
      rating: 4.6,
      additionalBadge: "한강",
    },
    {
      id: 707,
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      location: "서울 송파",
      title: "송파 석촌호수",
      originalPrice: 10,
      salePrice: 8,
      hasSaleBadge: true,
      rating: 4.3,
      additionalBadge: "호수",
    },
  ],
};

// 기존 데이터도 유지 (데스크탑용)
export const travelCardData: TravelCardData[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    location: "서울 동대문",
    title: "심플 스테이 동대문",
    originalPrice: 120,
    salePrice: 81,
    hasSaleBadge: true,
    rating: 4.2,
    additionalBadge: "인기",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    location: "서울 명동",
    title: "명동 앰배서더 서울 명동",
    originalPrice: 250,
    salePrice: 189,
    hasSaleBadge: true,
    rating: 4.5,
    additionalBadge: "추천",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    location: "서울 서촌",
    title: "서촌 한옥마을 한옥 스테이",
    originalPrice: 110,
    salePrice: 89,
    hasSaleBadge: true,
    rating: 4.7,
    additionalBadge: "특가",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    location: "서울 강남",
    title: "호텔 더 디자이너스",
    originalPrice: 95,
    salePrice: 73,
    hasSaleBadge: true,
    rating: 4.1,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
    location: "대구",
    title: "그랜드 메르큐르 대구",
    originalPrice: 350,
    salePrice: 293,
    hasSaleBadge: true,
    rating: 4.6,
    additionalBadge: "럭셔리",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    location: "경산",
    title: "영남외국어대학교 근처",
    originalPrice: 35,
    salePrice: 24,
    hasSaleBadge: true,
    rating: 3.9,
    additionalBadge: "학생할인",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1571003123894-49f4b56c69b9?w=400&h=300&fit=crop",
    location: "부산 해운대",
    title: "해운대 리조트",
    originalPrice: 180,
    salePrice: 144,
    hasSaleBadge: true,
    rating: 4.3,
    additionalBadge: "베스트",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1582719506-7227b2a1fba0?w=400&h=300&fit=crop",
    location: "제주도 제주시",
    title: "제주 프리미엄 호텔",
    originalPrice: 200,
    salePrice: 160,
    hasSaleBadge: true,
    rating: 4.8,
    additionalBadge: "신규",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    location: "전주 한옥마을",
    title: "전주 한옥 스테이",
    originalPrice: 80,
    salePrice: 64,
    hasSaleBadge: true,
    rating: 4.4,
    additionalBadge: "특별가",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    location: "인천 송도",
    title: "송도 비즈니스 호텔",
    originalPrice: 150,
    salePrice: 120,
    hasSaleBadge: true,
    rating: 4.0,
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    location: "강릉",
    title: "강릉 바다뷰 펜션",
    originalPrice: 90,
    salePrice: 72,
    hasSaleBadge: true,
    rating: 4.6,
    additionalBadge: "프리미엄",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    location: "춘천",
    title: "춘천 호수 근처 모텔",
    originalPrice: 60,
    salePrice: 48,
    hasSaleBadge: true,
    rating: 3.8,
    additionalBadge: "할인",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
    location: "대전 유성",
    title: "유성 온천 호텔",
    originalPrice: 130,
    salePrice: 104,
    hasSaleBadge: true,
    rating: 4.2,
    additionalBadge: "인기",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    location: "광주 상무지구",
    title: "광주 게스트하우스",
    originalPrice: 45,
    salePrice: 36,
    hasSaleBadge: true,
    rating: 4.1,
    additionalBadge: "추천",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1571003123894-49f4b56c69b9?w=400&h=300&fit=crop",
    location: "울산 남구",
    title: "울산 바다뷰 리조트",
    originalPrice: 160,
    salePrice: 128,
    hasSaleBadge: true,
    rating: 4.5,
    additionalBadge: "특가",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1582719506-7227b2a1fba0?w=400&h=300&fit=crop",
    location: "여수",
    title: "여수 바다 근처 펜션",
    originalPrice: 85,
    salePrice: 68,
    hasSaleBadge: true,
    rating: 4.3,
    additionalBadge: "럭셔리",
  },
  {
    id: 17,
    image: "https://invalid-url-for-testing.com/image.jpg", // 테스트용 잘못된 URL
    location: "목포",
    title: "목포 한옥 스테이",
    originalPrice: 70,
    salePrice: 56,
    hasSaleBadge: true,
    rating: 4.0,
    additionalBadge: "학생할인",
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    location: "경주",
    title: "경주 역사 호텔",
    originalPrice: 140,
    salePrice: 112,
    hasSaleBadge: true,
    rating: 4.7,
    additionalBadge: "베스트",
  },
];

// 페이지네이션을 위한 유틸리티 함수들
export const ITEMS_PER_PAGE = 6;

export const getTotalPages = (totalItems: number): number => {
  return Math.ceil(totalItems / ITEMS_PER_PAGE);
};

export const getPaginatedData = (
  data: TravelCardData[],
  currentPage: number
): TravelCardData[] => {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  return data.slice(startIndex, endIndex);
};

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

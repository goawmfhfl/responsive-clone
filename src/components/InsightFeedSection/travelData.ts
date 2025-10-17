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
    originalPrice: 120.0,
    salePrice: 81.34,
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
    originalPrice: 250.0,
    salePrice: 189.09,
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
    originalPrice: 110.0,
    salePrice: 89.83,
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
    originalPrice: 95.0,
    salePrice: 73.45,
    hasSaleBadge: true,
    rating: 4.1,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
    location: "대구",
    title: "그랜드 메르큐르 대구",
    originalPrice: 350.0,
    salePrice: 293.86,
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
    originalPrice: 35.0,
    salePrice: 24.37,
    hasSaleBadge: true,
    rating: 3.9,
    additionalBadge: "학생할인",
  },
];

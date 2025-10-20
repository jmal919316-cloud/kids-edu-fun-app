
import type { LearningItem, Story, GameCard } from '../types';

interface Content {
  languageSelection: {
    title: string;
    english: string;
    arabic: string;
  };
  home: {
    startLearning: string;
    stories: string;
    games: string;
    rewards: string;
    settings: string;
  };
  header: {
    back: string;
    points: string;
  };
  learning: {
    title: string;
    letters: string;
    numbers: string;
    colors: string;
  };
  games: {
    title: string;
    matchingGame: string;
  };
  matchingGame: {
    title: string;
    moves: string;
    congrats: string;
    playAgain: string;
  };
  stories: {
    title: string;
    premium: string;
  };
  rewards: {
    title: string;
    yourPoints: string;
    keepLearning: string;
  };
  settings: {
    title: string;
    language: string;
    subscription: string;
    subscribe: string;
    subscribed: string;
    premiumUnlocked: string;
  };
  letters: LearningItem[];
  numbers: LearningItem[];
  colors: LearningItem[];
  storiesData: Story[];
  matchingGameCards: GameCard[];
}

export const contentData: { [key: string]: Content } = {
  en: {
    languageSelection: {
      title: 'Choose Your Language',
      english: 'English',
      arabic: 'العربية',
    },
    home: {
      startLearning: 'Start Learning',
      stories: 'Stories',
      games: 'Games',
      rewards: 'Rewards',
      settings: 'Settings',
    },
    header: {
      back: 'Back',
      points: 'Points',
    },
    learning: {
      title: 'Learn Something New!',
      letters: 'Letters',
      numbers: 'Numbers',
      colors: 'Colors',
    },
    games: {
      title: 'Play a Game!',
      matchingGame: 'Matching Game',
    },
    matchingGame: {
        title: 'Matching Game',
        moves: 'Moves',
        congrats: 'Congratulations! You won!',
        playAgain: 'Play Again',
    },
    stories: {
      title: 'Story Time!',
      premium: 'Premium',
    },
    rewards: {
      title: 'Your Rewards',
      yourPoints: 'You have',
      keepLearning: 'Keep learning to earn more points!',
    },
    settings: {
      title: 'Settings',
      language: 'Language',
      subscription: 'Subscription',
      subscribe: 'Subscribe to Unlock Premium Stories',
      subscribed: 'You are Subscribed!',
      premiumUnlocked: 'Premium content unlocked.',
    },
    letters: [
      { id: 'en-l-1', display: 'A', word: 'Apple', imageUrl: 'https://picsum.photos/seed/apple/200' },
      { id: 'en-l-2', display: 'B', word: 'Ball', imageUrl: 'https://picsum.photos/seed/ball/200' },
      { id: 'en-l-3', display: 'C', word: 'Cat', imageUrl: 'https://picsum.photos/seed/cat/200' },
    ],
    numbers: [
      { id: 'en-n-1', display: '1', word: 'One', imageUrl: 'https://picsum.photos/seed/one/200' },
      { id: 'en-n-2', display: '2', word: 'Two', imageUrl: 'https://picsum.photos/seed/two/200' },
      { id: 'en-n-3', display: '3', word: 'Three', imageUrl: 'https://picsum.photos/seed/three/200' },
    ],
    colors: [
      { id: 'en-c-1', display: 'Red', word: 'Red Apple', imageUrl: 'https://picsum.photos/seed/red/200' },
      { id: 'en-c-2', display: 'Blue', word: 'Blue Sky', imageUrl: 'https://picsum.photos/seed/blue/200' },
      { id: 'en-c-3', display: 'Green', word: 'Green Grass', imageUrl: 'https://picsum.photos/seed/green/200' },
    ],
    storiesData: [
        { id: 'en-s-1', title: 'The Lost Kitten', content: ['Once upon a time, a little kitten got lost in the big city.', 'It was scared, but a kind girl found it and took it home.'], imageUrl: 'https://picsum.photos/seed/kitten/400/300', isPremium: false },
        { id: 'en-s-2', title: 'The Magical Tree', content: ['In a secret forest, there was a tree that grew candy!', 'All the forest animals would share the candy happily.'], imageUrl: 'https://picsum.photos/seed/tree/400/300', isPremium: true },
    ],
    matchingGameCards: [
        { id: 'card-1', content: 'Apple', imageUrl: 'https://picsum.photos/seed/apple/100', matchId: 'fruit' },
        { id: 'card-2', content: 'Apple', imageUrl: 'https://picsum.photos/seed/apple/100', matchId: 'fruit' },
        { id: 'card-3', content: 'Car', imageUrl: 'https://picsum.photos/seed/car/100', matchId: 'vehicle' },
        { id: 'card-4', content: 'Car', imageUrl: 'https://picsum.photos/seed/car/100', matchId: 'vehicle' },
        { id: 'card-5', content: 'Sun', imageUrl: 'https://picsum.photos/seed/sun/100', matchId: 'sky' },
        { id: 'card-6', content: 'Sun', imageUrl: 'https://picsum.photos/seed/sun/100', matchId: 'sky' },
    ]
  },
  ar: {
    languageSelection: {
      title: 'اختر لغتك',
      english: 'English',
      arabic: 'العربية',
    },
    home: {
      startLearning: 'ابدأ التعلم',
      stories: 'القصص',
      games: 'الألعاب',
      rewards: 'الجوائز',
      settings: 'الإعدادات',
    },
    header: {
      back: 'رجوع',
      points: 'نقاط',
    },
    learning: {
      title: 'تعلم شيئًا جديدًا!',
      letters: 'الحروف',
      numbers: 'الأرقام',
      colors: 'الألوان',
    },
    games: {
      title: 'العب لعبة!',
      matchingGame: 'لعبة المطابقة',
    },
     matchingGame: {
        title: 'لعبة المطابقة',
        moves: 'حركات',
        congrats: 'تهانينا! لقد فزت!',
        playAgain: 'العب مرة أخرى',
    },
    stories: {
      title: 'وقت القصة!',
      premium: 'مميزة',
    },
    rewards: {
      title: 'جوائزك',
      yourPoints: 'لديك',
      keepLearning: 'استمر في التعلم لكسب المزيد من النقاط!',
    },
    settings: {
      title: 'الإعدادات',
      language: 'اللغة',
      subscription: 'الاشتراك',
      subscribe: 'اشترك لفتح القصص المميزة',
      subscribed: 'أنت مشترك!',
      premiumUnlocked: 'تم فتح المحتوى المميز.',
    },
    letters: [
      { id: 'ar-l-1', display: 'أ', word: 'أسد', imageUrl: 'https://picsum.photos/seed/lion/200' },
      { id: 'ar-l-2', display: 'ب', word: 'بطة', imageUrl: 'https://picsum.photos/seed/duck/200' },
      { id: 'ar-l-3', display: 'ت', word: 'تفاحة', imageUrl: 'https://picsum.photos/seed/apple/200' },
    ],
    numbers: [
      { id: 'ar-n-1', display: '١', word: 'واحد', imageUrl: 'https://picsum.photos/seed/one/200' },
      { id: 'ar-n-2', display: '٢', word: 'اثنان', imageUrl: 'https://picsum.photos/seed/two/200' },
      { id: 'ar-n-3', display: '٣', word: 'ثلاثة', imageUrl: 'https://picsum.photos/seed/three/200' },
    ],
    colors: [
      { id: 'ar-c-1', display: 'أحمر', word: 'تفاحة حمراء', imageUrl: 'https://picsum.photos/seed/red/200' },
      { id: 'ar-c-2', display: 'أزرق', word: 'سماء زرقاء', imageUrl: 'https://picsum.photos/seed/blue/200' },
      { id: 'ar-c-3', display: 'أخضر', word: 'عشب أخضر', imageUrl: 'https://picsum.photos/seed/green/200' },
    ],
    storiesData: [
      { id: 'ar-s-1', title: 'القطة الضائعة', content: ['ذات مرة، ضاعت قطة صغيرة في المدينة الكبيرة.', 'كانت خائفة، لكن فتاة لطيفة وجدتها وأخذتها إلى المنزل.'], imageUrl: 'https://picsum.photos/seed/kitten/400/300', isPremium: false },
      { id: 'ar-s-2', title: 'الشجرة السحرية', content: ['في غابة سرية، كانت هناك شجرة تنبت حلوى!', 'كانت جميع حيوانات الغابة تتشارك الحلوى بسعادة.'], imageUrl: 'https://picsum.photos/seed/tree/400/300', isPremium: true },
    ],
    matchingGameCards: [
        { id: 'card-1', content: 'تفاحة', imageUrl: 'https://picsum.photos/seed/apple/100', matchId: 'fruit' },
        { id: 'card-2', content: 'تفاحة', imageUrl: 'https://picsum.photos/seed/apple/100', matchId: 'fruit' },
        { id: 'card-3', content: 'سيارة', imageUrl: 'https://picsum.photos/seed/car/100', matchId: 'vehicle' },
        { id: 'card-4', content: 'سيارة', imageUrl: 'https://picsum.photos/seed/car/100', matchId: 'vehicle' },
        { id: 'card-5', content: 'شمس', imageUrl: 'https://picsum.photos/seed/sun/100', matchId: 'sky' },
        { id: 'card-6', content: 'شمس', imageUrl: 'https://picsum.photos/seed/sun/100', matchId: 'sky' },
    ]
  },
};

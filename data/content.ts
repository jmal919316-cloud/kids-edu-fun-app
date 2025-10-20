import type { LearningItem, Story, GameCard, ColorQuizQuestion } from '../types';

/**
 * DEVELOPER NOTE:
 * This file contains all the static content for the application.
 * For a small-scale app, this is acceptable. However, for a large application
 * with hundreds of stories or items, it is highly recommended to move this data
 * to a backend server and fetch it using an API. This will improve initial
 * load times, make content updates easier, and allow the app to scale.
 */

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
    premium: string;
  };
  games: {
    title: string;
    matchingGame: string;
    colorQuizGame: string;
  };
  matchingGame: {
    title: string;
    moves: string;
    congrats: string;
    playAgain: string;
  };
  colorQuiz: {
    title: string;
    score: string;
    congrats: string;
    playAgain: string;
    question: (color: string) => string;
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
    goToSubscribe: string;
  };
  subscribe: {
    title: string;
    plan: string;
    price: string;
    priceDetails: string;
    features: string[];
    confirm: string;
    cancel: string;
    simulationNotice: string;
  };
  letters: LearningItem[];
  numbers: LearningItem[];
  colors: LearningItem[];
  storiesData: Story[];
  matchingGameCards: GameCard[];
  colorQuizQuestions: ColorQuizQuestion[];
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
      premium: 'Premium',
    },
    games: {
      title: 'Play a Game!',
      matchingGame: 'Matching Game',
      colorQuizGame: 'Color Quiz',
    },
    matchingGame: {
        title: 'Matching Game',
        moves: 'Moves',
        congrats: 'Congratulations! You won!',
        playAgain: 'Play Again',
    },
    colorQuiz: {
        title: 'Color Quiz',
        score: 'Score',
        congrats: 'Great Job! You finished the quiz!',
        playAgain: 'Play Again',
        question: (color: string) => `Which color is ${color}?`,
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
      subscribe: 'Subscribe to Unlock All Content!',
      subscribed: 'You are Subscribed!',
      premiumUnlocked: 'Premium content unlocked.',
      goToSubscribe: 'Subscribe',
    },
    subscribe: {
        title: 'Get Premium',
        plan: 'Premium Plan',
        price: '$1',
        priceDetails: 'One-time simulated payment',
        features: ['Unlock all stories', 'Unlock all games', 'Unlock all learning levels'],
        confirm: 'Confirm Purchase',
        cancel: 'Cancel',
        simulationNotice: 'This is a simulation. No real payment will be processed.',
    },
    letters: [
        { id: 'en-l-1', display: 'A', word: 'Apple', imageUrl: 'https://picsum.photos/seed/apple/200' },
        { id: 'en-l-2', display: 'B', word: 'Ball', imageUrl: 'https://picsum.photos/seed/ball/200' },
        { id: 'en-l-3', display: 'C', word: 'Cat', imageUrl: 'https://picsum.photos/seed/cat/200' },
        { id: 'en-l-4', display: 'D', word: 'Dog', imageUrl: 'https://picsum.photos/seed/dog/200' },
        { id: 'en-l-5', display: 'E', word: 'Elephant', imageUrl: 'https://picsum.photos/seed/elephant/200' },
        { id: 'en-l-6', display: 'F', word: 'Fish', imageUrl: 'https://picsum.photos/seed/fish/200' },
        { id: 'en-l-7', display: 'G', word: 'Goat', imageUrl: 'https://picsum.photos/seed/goat/200' },
        { id: 'en-l-8', display: 'H', word: 'Hat', imageUrl: 'https://picsum.photos/seed/hat/200' },
        { id: 'en-l-9', display: 'I', word: 'Igloo', imageUrl: 'https://picsum.photos/seed/igloo/200' },
        { id: 'en-l-10', display: 'J', word: 'Jam', imageUrl: 'https://picsum.photos/seed/jam/200' },
        { id: 'en-l-11', display: 'K', word: 'Kite', imageUrl: 'https://picsum.photos/seed/kite/200' },
        { id: 'en-l-12', display: 'L', word: 'Lion', imageUrl: 'https://picsum.photos/seed/lion/200' },
        { id: 'en-l-13', display: 'M', word: 'Moon', imageUrl: 'https://picsum.photos/seed/moon/200' },
        { id: 'en-l-14', display: 'N', word: 'Nest', imageUrl: 'https://picsum.photos/seed/nest/200', isPremium: true },
        { id: 'en-l-15', display: 'O', word: 'Octopus', imageUrl: 'https://picsum.photos/seed/octopus/200', isPremium: true },
        { id: 'en-l-16', display: 'P', word: 'Pen', imageUrl: 'https://picsum.photos/seed/pen/200', isPremium: true },
        { id: 'en-l-17', display: 'Q', word: 'Queen', imageUrl: 'https://picsum.photos/seed/queen/200', isPremium: true },
        { id: 'en-l-18', display: 'R', word: 'Robot', imageUrl: 'https://picsum.photos/seed/robot/200', isPremium: true },
        { id: 'en-l-19', display: 'S', word: 'Sun', imageUrl: 'https://picsum.photos/seed/sun/200', isPremium: true },
        { id: 'en-l-20', display: 'T', word: 'Tree', imageUrl: 'https://picsum.photos/seed/tree/200', isPremium: true },
        { id: 'en-l-21', display: 'U', word: 'Umbrella', imageUrl: 'https://picsum.photos/seed/umbrella/200', isPremium: true },
        { id: 'en-l-22', display: 'V', word: 'Violin', imageUrl: 'https://picsum.photos/seed/violin/200', isPremium: true },
        { id: 'en-l-23', display: 'W', word: 'Watch', imageUrl: 'https://picsum.photos/seed/watch/200', isPremium: true },
        { id: 'en-l-24', display: 'X', word: 'Xylophone', imageUrl: 'https://picsum.photos/seed/xylophone/200', isPremium: true },
        { id: 'en-l-25', display: 'Y', word: 'Yacht', imageUrl: 'https://picsum.photos/seed/yacht/200', isPremium: true },
        { id: 'en-l-26', display: 'Z', word: 'Zebra', imageUrl: 'https://picsum.photos/seed/zebra/200', isPremium: true },
    ],
    numbers: [
        { id: 'en-n-1', display: '1', word: 'One', imageUrl: 'https://picsum.photos/seed/one/200' },
        { id: 'en-n-2', display: '2', word: 'Two', imageUrl: 'https://picsum.photos/seed/two/200' },
        { id: 'en-n-3', display: '3', word: 'Three', imageUrl: 'https://picsum.photos/seed/three/200' },
        { id: 'en-n-4', display: '4', word: 'Four', imageUrl: 'https://picsum.photos/seed/four/200' },
        { id: 'en-n-5', display: '5', word: 'Five', imageUrl: 'https://picsum.photos/seed/five/200' },
        { id: 'en-n-6', display: '6', word: 'Six', imageUrl: 'https://picsum.photos/seed/six/200' },
        { id: 'en-n-7', display: '7', word: 'Seven', imageUrl: 'https://picsum.photos/seed/seven/200' },
        { id: 'en-n-8', display: '8', word: 'Eight', imageUrl: 'https://picsum.photos/seed/eight/200' },
        { id: 'en-n-9', display: '9', word: 'Nine', imageUrl: 'https://picsum.photos/seed/nine/200' },
        { id: 'en-n-10', display: '10', word: 'Ten', imageUrl: 'https://picsum.photos/seed/ten/200' },
        { id: 'en-n-11', display: '11', word: 'Eleven', imageUrl: 'https://picsum.photos/seed/eleven/200', isPremium: true },
        { id: 'en-n-12', display: '12', word: 'Twelve', imageUrl: 'https://picsum.photos/seed/twelve/200', isPremium: true },
        { id: 'en-n-13', display: '13', word: 'Thirteen', imageUrl: 'https://picsum.photos/seed/thirteen/200', isPremium: true },
        { id: 'en-n-14', display: '14', word: 'Fourteen', imageUrl: 'https://picsum.photos/seed/fourteen/200', isPremium: true },
        { id: 'en-n-15', display: '15', word: 'Fifteen', imageUrl: 'https://picsum.photos/seed/fifteen/200', isPremium: true },
        { id: 'en-n-16', display: '16', word: 'Sixteen', imageUrl: 'https://picsum.photos/seed/sixteen/200', isPremium: true },
        { id: 'en-n-17', display: '17', word: 'Seventeen', imageUrl: 'https://picsum.photos/seed/seventeen/200', isPremium: true },
        { id: 'en-n-18', display: '18', word: 'Eighteen', imageUrl: 'https://picsum.photos/seed/eighteen/200', isPremium: true },
        { id: 'en-n-19', display: '19', word: 'Nineteen', imageUrl: 'https://picsum.photos/seed/nineteen/200', isPremium: true },
        { id: 'en-n-20', display: '20', word: 'Twenty', imageUrl: 'https://picsum.photos/seed/twenty/200', isPremium: true },
    ],
    colors: [
      { id: 'en-c-1', display: 'Red', word: 'Red Apple', imageUrl: 'https://picsum.photos/seed/red/200', colorHex: '#ef4444' },
      { id: 'en-c-2', display: 'Blue', word: 'Blue Sky', imageUrl: 'https://picsum.photos/seed/blue/200', colorHex: '#3b82f6' },
      { id: 'en-c-3', display: 'Green', word: 'Green Grass', imageUrl: 'https://picsum.photos/seed/green/200', colorHex: '#22c55e' },
      { id: 'en-c-4', display: 'Yellow', word: 'Yellow Sun', imageUrl: 'https://picsum.photos/seed/yellow/200', colorHex: '#eab308' },
      { id: 'en-c-5', display: 'Orange', word: 'Orange Fruit', imageUrl: 'https://picsum.photos/seed/orange/200', colorHex: '#f97316' },
      { id: 'en-c-6', display: 'Purple', word: 'Purple Grapes', imageUrl: 'https://picsum.photos/seed/purple/200', colorHex: '#8b5cf6' },
      { id: 'en-c-7', display: 'Black', word: 'Black Cat', imageUrl: 'https://picsum.photos/seed/black/200', colorHex: '#1f2937' },
      { id: 'en-c-8', display: 'White', word: 'White Snow', imageUrl: 'https://picsum.photos/seed/white/200', colorHex: '#f9fafb' },
    ],
    storiesData: [
        { id: 'en-s-1', title: 'The Lost Kitten', content: ['Once upon a time, a little kitten got lost in the big city.', 'It was scared, but a kind girl found it and took it home.'], imageUrl: 'https://picsum.photos/seed/kitten/400/300', isPremium: false },
        { id: 'en-s-2', title: 'The Magical Tree', content: ['In a secret forest, there was a tree that grew candy!', 'All the forest animals would share the candy happily.'], imageUrl: 'https://picsum.photos/seed/magic-tree/400/300', isPremium: true },
        { id: 'en-s-3', title: 'The Brave Astronaut', content: ['Leo dreamed of flying to the moon. One night, his bed turned into a spaceship!', 'He floated among the stars and danced with friendly aliens.'], imageUrl: 'https://picsum.photos/seed/astronaut/400/300', isPremium: true },
        { id: 'en-s-4', title: 'The Friendly Dragon', content: ['In a high mountain, lived a dragon named Sparky. Sparky wasn\'t scary, he loved to play.', 'He would fly with the birds and help lost travelers find their way home.'], imageUrl: 'https://picsum.photos/seed/dragon/400/300', isPremium: false },
        { id: 'en-s-5', title: 'The Secret of the Deep Sea', content: ['Lila the mermaid found a shiny key at the bottom of the ocean.', 'The key opened a treasure chest filled with glowing pearls and singing seashells.'], imageUrl: 'https://picsum.photos/seed/mermaid/400/300', isPremium: true },
        { id: 'en-s-6', title: 'The Bear Who Loved Honey', content: ['Barnaby the bear loved honey more than anything.', 'One day he followed a bee to a giant honeycomb, and had a feast with all his friends.'], imageUrl: 'https://picsum.photos/seed/bear/400/300', isPremium: false },
        { id: 'en-s-7', title: 'The Flying Carpet Adventure', content: ['Jasmine and Ali found a flying carpet in their grandpa\'s attic.', 'It took them on a magical ride over pyramids and palaces.'], imageUrl: 'https://picsum.photos/seed/carpet/400/300', isPremium: true },
        { id: 'en-s-8', title: 'The Little Robot\'s Big Heart', content: ['Unit 7, a small robot, was built to sort bolts, but he wanted to help people.', 'He used his robot arms to rescue a cat from a tree and became a town hero.'], imageUrl: 'https://picsum.photos/seed/robot-hero/400/300', isPremium: true },
        { id: 'en-s-9', title: 'The Sleepy Owl', content: ['Oliver the owl loved to sleep during the day and hoot at the moon all night.', 'His friends, the fireflies, would light up the forest for him.'], imageUrl: 'https://picsum.photos/seed/owl/400/300', isPremium: false },
        { id: 'en-s-10', title: 'The Mystery of the Missing Toy', content: ['Timmy\'s favorite toy car was missing. He and his dog, Spot, became detectives.', 'They followed a trail of crumbs and found the car under the sofa.'], imageUrl: 'https://picsum.photos/seed/detective/400/300', isPremium: false },
        { id: 'en-s-11', title: 'The Enchanted Garden', content: ['A secret door in a wall led to a garden where flowers sang and butterflies painted the air with colors.', 'Lily spent the afternoon dancing with the musical flowers.'], imageUrl: 'https://picsum.photos/seed/garden/400/300', isPremium: true },
        { id: 'en-s-12', title: 'The Pirate with a Kind Heart', content: ['Captain Bluebeard was a pirate who didn\'t steal gold. He rescued sea turtles!', 'His treasure was a collection of beautiful shells given to him by his ocean friends.'], imageUrl: 'https://picsum.photos/seed/pirate/400/300', isPremium: true },
        { id: 'en-s-13', title: 'The First Day of School', content: ['Leo was nervous for his first day of school.', 'But he met a new friend, made a colorful painting, and couldn\'t wait to go back tomorrow.'], imageUrl: 'https://picsum.photos/seed/school/400/300', isPremium: false },
        { id: 'en-s-14', title: 'The Penguin Who Couldn\'t Swim', content: ['Percy the penguin was afraid of water.', 'With the help of a friendly seal, he learned to dive and found he was the fastest swimmer of all.'], imageUrl: 'https://picsum.photos/seed/penguin/400/300', isPremium: false },
        { id: 'en-s-15', title: 'The Invisible Friend', content: ['Mia had an invisible friend named Sparkle who could only be seen in puddles.', 'They would jump in puddles all day, creating rainbows with every splash.'], imageUrl: 'https://picsum.photos/seed/puddle/400/300', isPremium: true },
        { id: 'en-s-16', title: 'The Race of the Forest Animals', content: ['The tortoise and the hare decided to have a rematch.', 'This time, they worked together with the squirrel and the fox to finish the race as a team.'], imageUrl: 'https://picsum.photos/seed/race/400/300', isPremium: false },
        { id: 'en-s-17', title: 'The Boy Who Could Talk to Plants', content: ['Finn could hear what plants were saying. The roses asked for water, and the big oak tree told stories of the past.', 'He became the best gardener in the world.'], imageUrl: 'https://picsum.photos/seed/plant-talker/400/300', isPremium: true },
        { id: 'en-s-18', title: 'The Magical Snowman', content: ['One winter day, a snowman came to life. He showed the children a hidden ice skating rink made of frozen moonlight.', 'They skated all night until the sun came up.'], imageUrl: 'https://picsum.photos/seed/snowman/400/300', isPremium: true },
    ],
    matchingGameCards: [
        { id: 'card-1', content: 'Apple', imageUrl: 'https://picsum.photos/seed/apple/100', matchId: 'fruit' },
        { id: 'card-2', content: 'Apple', imageUrl: 'https://picsum.photos/seed/apple/100', matchId: 'fruit' },
        { id: 'card-3', content: 'Car', imageUrl: 'https://picsum.photos/seed/car/100', matchId: 'vehicle' },
        { id: 'card-4', content: 'Car', imageUrl: 'https://picsum.photos/seed/car/100', matchId: 'vehicle' },
        { id: 'card-5', content: 'Sun', imageUrl: 'https://picsum.photos/seed/sun/100', matchId: 'sky' },
        { id: 'card-6', content: 'Sun', imageUrl: 'https://picsum.photos/seed/sun/100', matchId: 'sky' },
    ],
    colorQuizQuestions: [
        { colorName: 'Red', correctColorHex: '#ef4444', options: ['#ef4444', '#3b82f6', '#22c55e'] },
        { colorName: 'Blue', correctColorHex: '#3b82f6', options: ['#f97316', '#3b82f6', '#eab308'] },
        { colorName: 'Green', correctColorHex: '#22c55e', options: ['#8b5cf6', '#ec4899', '#22c55e'] },
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
      premium: 'حصري',
    },
    games: {
      title: 'العب لعبة!',
      matchingGame: 'لعبة المطابقة',
      colorQuizGame: 'اختبار الألوان',
    },
     matchingGame: {
        title: 'لعبة المطابقة',
        moves: 'حركات',
        congrats: 'تهانينا! لقد فزت!',
        playAgain: 'العب مرة أخرى',
    },
    colorQuiz: {
        title: 'اختبار الألوان',
        score: 'النتيجة',
        congrats: 'أحسنت! لقد أنهيت الاختبار!',
        playAgain: 'العب مرة أخرى',
        question: (color: string) => `أي لون هو ${color}؟`,
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
      subscribe: 'اشترك لفتح كل المحتوى!',
      subscribed: 'أنت مشترك!',
      premiumUnlocked: 'تم فتح المحتوى المميز.',
      goToSubscribe: 'اشترك الآن',
    },
    subscribe: {
        title: 'احصل على النسخة المميزة',
        plan: 'الباقة المميزة',
        price: '١ دولار',
        priceDetails: 'دفعة محاكاة لمرة واحدة',
        features: ['فتح جميع القصص', 'فتح جميع الألعاب', 'فتح جميع المستويات التعليمية'],
        confirm: 'تأكيد الشراء',
        cancel: 'إلغاء',
        simulationNotice: 'هذه محاكاة فقط. لن يتم خصم أي مبلغ حقيقي.',
    },
    letters: [
        { id: 'ar-l-1', display: 'أ', word: 'أسد', imageUrl: 'https://picsum.photos/seed/lion/200' },
        { id: 'ar-l-2', display: 'ب', word: 'بطة', imageUrl: 'https://picsum.photos/seed/duck/200' },
        { id: 'ar-l-3', display: 'ت', word: 'تفاحة', imageUrl: 'https://picsum.photos/seed/apple-ar/200' },
        { id: 'ar-l-4', display: 'ث', word: 'ثعلب', imageUrl: 'https://picsum.photos/seed/fox/200' },
        { id: 'ar-l-5', display: 'ج', word: 'جمل', imageUrl: 'https://picsum.photos/seed/camel/200' },
        { id: 'ar-l-6', display: 'ح', word: 'حصان', imageUrl: 'https://picsum.photos/seed/horse/200' },
        { id: 'ar-l-7', display: 'خ', word: 'خروف', imageUrl: 'https://picsum.photos/seed/sheep/200' },
        { id: 'ar-l-8', display: 'د', word: 'ديك', imageUrl: 'https://picsum.photos/seed/rooster/200' },
        { id: 'ar-l-9', display: 'ذ', word: 'ذرة', imageUrl: 'https://picsum.photos/seed/corn/200' },
        { id: 'ar-l-10', display: 'ر', word: 'رجل', imageUrl: 'https://picsum.photos/seed/man/200' },
        { id: 'ar-l-11', display: 'ز', word: 'زرافة', imageUrl: 'https://picsum.photos/seed/giraffe/200' },
        { id: 'ar-l-12', display: 'س', word: 'سمكة', imageUrl: 'https://picsum.photos/seed/fish-ar/200' },
        { id: 'ar-l-13', display: 'ش', word: 'شمس', imageUrl: 'https://picsum.photos/seed/sun-ar/200' },
        { id: 'ar-l-14', display: 'ص', word: 'صاروخ', imageUrl: 'https://picsum.photos/seed/rocket/200' },
        { id: 'ar-l-15', display: 'ض', word: 'ضفدع', imageUrl: 'https://picsum.photos/seed/frog/200' },
        { id: 'ar-l-16', display: 'ط', word: 'طائرة', imageUrl: 'https://picsum.photos/seed/plane/200', isPremium: true },
        { id: 'ar-l-17', display: 'ظ', word: 'ظرف', imageUrl: 'https://picsum.photos/seed/envelope/200', isPremium: true },
        { id: 'ar-l-18', display: 'ع', word: 'عصفور', imageUrl: 'https://picsum.photos/seed/bird/200', isPremium: true },
        { id: 'ar-l-19', display: 'غ', word: 'غيمة', imageUrl: 'https://picsum.photos/seed/cloud/200', isPremium: true },
        { id: 'ar-l-20', display: 'ف', word: 'فيل', imageUrl: 'https://picsum.photos/seed/elephant-ar/200', isPremium: true },
        { id: 'ar-l-21', display: 'ق', word: 'قمر', imageUrl: 'https://picsum.photos/seed/moon-ar/200', isPremium: true },
        { id: 'ar-l-22', display: 'ك', word: 'كلب', imageUrl: 'https://picsum.photos/seed/dog-ar/200', isPremium: true },
        { id: 'ar-l-23', display: 'ل', word: 'ليمون', imageUrl: 'https://picsum.photos/seed/lemon/200', isPremium: true },
        { id: 'ar-l-24', display: 'م', word: 'موز', imageUrl: 'https://picsum.photos/seed/banana/200', isPremium: true },
        { id: 'ar-l-25', display: 'ن', word: 'نجمة', imageUrl: 'https://picsum.photos/seed/star/200', isPremium: true },
        { id: 'ar-l-26', display: 'هـ', word: 'هرم', imageUrl: 'https://picsum.photos/seed/pyramid/200', isPremium: true },
        { id: 'ar-l-27', display: 'و', word: 'وردة', imageUrl: 'https://picsum.photos/seed/rose/200', isPremium: true },
        { id: 'ar-l-28', display: 'ي', word: 'يد', imageUrl: 'https://picsum.photos/seed/hand/200', isPremium: true },
    ],
    numbers: [
        { id: 'ar-n-1', display: '١', word: 'واحد', imageUrl: 'https://picsum.photos/seed/one/200' },
        { id: 'ar-n-2', display: '٢', word: 'اثنان', imageUrl: 'https://picsum.photos/seed/two/200' },
        { id: 'ar-n-3', display: '٣', word: 'ثلاثة', imageUrl: 'https://picsum.photos/seed/three/200' },
        { id: 'ar-n-4', display: '٤', word: 'أربعة', imageUrl: 'https://picsum.photos/seed/four/200' },
        { id: 'ar-n-5', display: '٥', word: 'خمسة', imageUrl: 'https://picsum.photos/seed/five/200' },
        { id: 'ar-n-6', display: '٦', word: 'ستة', imageUrl: 'https://picsum.photos/seed/six/200' },
        { id: 'ar-n-7', display: '٧', word: 'سبعة', imageUrl: 'https://picsum.photos/seed/seven/200' },
        { id: 'ar-n-8', display: '٨', word: 'ثمانية', imageUrl: 'https://picsum.photos/seed/eight/200' },
        { id: 'ar-n-9', display: '٩', word: 'تسعة', imageUrl: 'https://picsum.photos/seed/nine/200' },
        { id: 'ar-n-10', display: '١٠', word: 'عشرة', imageUrl: 'https://picsum.photos/seed/ten/200' },
        { id: 'ar-n-11', display: '١١', word: 'أحد عشر', imageUrl: 'https://picsum.photos/seed/eleven/200', isPremium: true },
        { id: 'ar-n-12', display: '١٢', word: 'اثنا عشر', imageUrl: 'https://picsum.photos/seed/twelve/200', isPremium: true },
        { id: 'ar-n-13', display: '١٣', word: 'ثلاثة عشر', imageUrl: 'https://picsum.photos/seed/thirteen/200', isPremium: true },
        { id: 'ar-n-14', display: '١٤', word: 'أربعة عشر', imageUrl: 'https://picsum.photos/seed/fourteen/200', isPremium: true },
        { id: 'ar-n-15', display: '١٥', word: 'خمسة عشر', imageUrl: 'https://picsum.photos/seed/fifteen/200', isPremium: true },
        { id: 'ar-n-16', display: '١٦', word: 'ستة عشر', imageUrl: 'https://picsum.photos/seed/sixteen/200', isPremium: true },
        { id: 'ar-n-17', display: '١٧', word: 'سبعة عشر', imageUrl: 'https://picsum.photos/seed/seventeen/200', isPremium: true },
        { id: 'ar-n-18', display: '١٨', word: 'ثمانية عشر', imageUrl: 'https://picsum.photos/seed/eighteen/200', isPremium: true },
        { id: 'ar-n-19', display: '١٩', word: 'تسعة عشر', imageUrl: 'https://picsum.photos/seed/nineteen/200', isPremium: true },
        { id: 'ar-n-20', display: '٢٠', word: 'عشرون', imageUrl: 'https://picsum.photos/seed/twenty/200', isPremium: true },
    ],
    colors: [
      { id: 'ar-c-1', display: 'أحمر', word: 'تفاحة حمراء', imageUrl: 'https://picsum.photos/seed/red/200', colorHex: '#ef4444' },
      { id: 'ar-c-2', display: 'أزرق', word: 'سماء زرقاء', imageUrl: 'https://picsum.photos/seed/blue/200', colorHex: '#3b82f6' },
      { id: 'ar-c-3', display: 'أخضر', word: 'عشب أخضر', imageUrl: 'https://picsum.photos/seed/green/200', colorHex: '#22c55e' },
      { id: 'ar-c-4', display: 'أصفر', word: 'شمس صفراء', imageUrl: 'https://picsum.photos/seed/yellow/200', colorHex: '#eab308' },
      { id: 'ar-c-5', display: 'برتقالي', word: 'فاكهة البرتقال', imageUrl: 'https://picsum.photos/seed/orange/200', colorHex: '#f97316' },
      { id: 'ar-c-6', display: 'بنفسجي', word: 'عنب بنفسجي', imageUrl: 'https://picsum.photos/seed/purple/200', colorHex: '#8b5cf6' },
      { id: 'ar-c-7', display: 'أسود', word: 'قطة سوداء', imageUrl: 'https://picsum.photos/seed/black/200', colorHex: '#1f2937' },
      { id: 'ar-c-8', display: 'أبيض', word: 'ثلج أبيض', imageUrl: 'https://picsum.photos/seed/white/200', colorHex: '#f9fafb' },
    ],
    storiesData: [
        { id: 'ar-s-1', title: 'القطة الضائعة', content: ['ذات مرة، ضاعت قطة صغيرة في المدينة الكبيرة.', 'كانت خائفة، لكن فتاة لطيفة وجدتها وأخذتها إلى المنزل.'], imageUrl: 'https://picsum.photos/seed/kitten/400/300', isPremium: false },
        { id: 'ar-s-2', title: 'الشجرة السحرية', content: ['في غابة سرية، كانت هناك شجرة تنبت حلوى!', 'كانت جميع حيوانات الغابة تتشارك الحلوى بسعادة.'], imageUrl: 'https://picsum.photos/seed/magic-tree/400/300', isPremium: true },
        { id: 'ar-s-3', title: 'رائد الفضاء الشجاع', content: ['كان فارس يحلم بالطيران إلى القمر. في إحدى الليالي، تحول سريره إلى سفينة فضاء!', 'سبح بين النجوم ورقص مع كائنات فضائية لطيفة.'], imageUrl: 'https://picsum.photos/seed/astronaut/400/300', isPremium: true },
        { id: 'ar-s-4', title: 'التنين الصديق', content: ['في جبل عالٍ، عاش تنين اسمه شهاب. لم يكن شهاب مخيفًا، بل كان يحب اللعب.', 'كان يطير مع الطيور ويساعد المسافرين التائهين في العثور على طريقهم.'], imageUrl: 'https://picsum.photos/seed/dragon/400/300', isPremium: false },
        { id: 'ar-s-5', title: 'سر أعماق البحر', content: ['ليلى، حورية البحر، وجدت مفتاحًا لامعًا في قاع المحيط.', 'فتح المفتاح صندوق كنز مليئًا باللآلئ المتوهجة والأصداف المغنية.'], imageUrl: 'https://picsum.photos/seed/mermaid/400/300', isPremium: true },
        { id: 'ar-s-6', title: 'الدب الذي أحب العسل', content: ['الدب بَرْنَابِي أحب العسل أكثر من أي شيء آخر.', 'ذات يوم تبع نحلة إلى خلية نحل عملاقة، وأقام وليمة مع كل أصدقائه.'], imageUrl: 'https://picsum.photos/seed/bear/400/300', isPremium: false },
        { id: 'ar-s-7', title: 'مغامرة البساط السحري', content: ['ياسمين وعلي وجدا بساطًا سحريًا في علية جدهما.', 'أخذهما البساط في رحلة سحرية فوق الأهرامات والقصور.'], imageUrl: 'https://picsum.photos/seed/carpet/400/300', isPremium: true },
        { id: 'ar-s-8', title: 'الروبوت الصغير ذو القلب الكبير', content: ['وحدة 7، روبوت صغير، صُنع لفرز البراغي، لكنه أراد مساعدة الناس.', 'استخدم ذراعيه الآليتين لإنقاذ قطة من شجرة وأصبح بطل البلدة.'], imageUrl: 'https://picsum.photos/seed/robot-hero/400/300', isPremium: true },
        { id: 'ar-s-9', title: 'البومة النعسانة', content: ['أوليفر البومة أحب النوم نهارًا والصياح للقمر طوال الليل.', 'كان أصدقاؤه اليراعات يضيئون له الغابة.'], imageUrl: 'https://picsum.photos/seed/owl/400/300', isPremium: false },
        { id: 'ar-s-10', title: 'لغز اللعبة المفقودة', content: ['سيارة تامر المفضلة فُقدت. أصبح هو وكلبه "بقعة" محققين.', 'تتبعا أثر فتات الخبز ووجدا السيارة تحت الأريكة.'], imageUrl: 'https://picsum.photos/seed/detective/400/300', isPremium: false },
        { id: 'ar-s-11', title: 'الحديقة المسحورة', content: ['باب سري في جدار يؤدي إلى حديقة حيث تغني الزهور والفراشات ترسم الهواء بالألوان.', 'قضت ليلى فترة ما بعد الظهر ترقص مع الزهور الموسيقية.'], imageUrl: 'https://picsum.photos/seed/garden/400/300', isPremium: true },
        { id: 'ar-s-12', title: 'القرصان ذو القلب الطيب', content: ['الكابتن بلوبيرد كان قرصانًا لا يسرق الذهب، بل ينقذ السلاحف البحرية!', 'كان كنزه عبارة عن مجموعة من الأصداف الجميلة التي أهداها له أصدقاؤه في المحيط.'], imageUrl: 'https://picsum.photos/seed/pirate/400/300', isPremium: true },
        { id: 'ar-s-13', title: 'اليوم الأول في المدرسة', content: ['كان ليو متوترًا في أول يوم له في المدرسة.', 'لكنه التقى بصديق جديد، ورسم لوحة ملونة، ولم يستطع الانتظار للعودة غدًا.'], imageUrl: 'https://picsum.photos/seed/school/400/300', isPremium: false },
        { id: 'ar-s-14', title: 'البطريق الذي لم يستطع السباحة', content: ['البطريق بيرسي كان يخاف من الماء.', 'بمساعدة فقمة ودودة، تعلم الغوص واكتشف أنه أسرع سباح على الإطلاق.'], imageUrl: 'https://picsum.photos/seed/penguin/400/300', isPremium: false },
        { id: 'ar-s-15', title: 'الصديق الخفي', content: ['كان لدى ميا صديق خفي اسمه "سباركل" لا يمكن رؤيته إلا في البرك.', 'كانا يقفزان في البرك طوال اليوم، ويصنعان أقواس قزح مع كل رشة.'], imageUrl: 'https://picsum.photos/seed/puddle/400/300', isPremium: true },
        { id: 'ar-s-16', title: 'سباق حيوانات الغابة', content: ['قررت السلحفاة والأرنب إجراء سباق إعادة.', 'هذه المرة، عملا معًا مع السنجاب والثعلب لإنهاء السباق كفريق واحد.'], imageUrl: 'https://picsum.photos/seed/race/400/300', isPremium: false },
        { id: 'ar-s-17', title: 'الفتى الذي يستطيع التحدث إلى النباتات', content: ['كان فين يسمع ما تقوله النباتات. طلبت الورود الماء، وروت شجرة البلوط الكبيرة قصصًا من الماضي.', 'أصبح أفضل بستاني في العالم.'], imageUrl: 'https://picsum.photos/seed/plant-talker/400/300', isPremium: true },
        { id: 'ar-s-18', title: 'رجل الثلج السحري', content: ['في أحد أيام الشتاء، عاد رجل ثلج إلى الحياة. أظهر للأطفال حلبة تزلج على الجليد مخفية مصنوعة من ضوء القمر المتجمد.', 'تزلجوا طوال الليل حتى أشرقت الشمس.'], imageUrl: 'https://picsum.photos/seed/snowman/400/300', isPremium: true },
    ],
    matchingGameCards: [
        { id: 'card-1', content: 'تفاحة', imageUrl: 'https://picsum.photos/seed/apple/100', matchId: 'fruit' },
        { id: 'card-2', content: 'تفاحة', imageUrl: 'https://picsum.photos/seed/apple/100', matchId: 'fruit' },
        { id: 'card-3', content: 'سيارة', imageUrl: 'https://picsum.photos/seed/car/100', matchId: 'vehicle' },
        { id: 'card-4', content: 'سيارة', imageUrl: 'https://picsum.photos/seed/car/100', matchId: 'vehicle' },
        { id: 'card-5', content: 'شمس', imageUrl: 'https://picsum.photos/seed/sun/100', matchId: 'sky' },
        { id: 'card-6', content: 'شمس', imageUrl: 'https://picsum.photos/seed/sun/100', matchId: 'sky' },
    ],
    colorQuizQuestions: [
        { colorName: 'أحمر', correctColorHex: '#ef4444', options: ['#ef4444', '#3b82f6', '#22c55e'] },
        { colorName: 'أزرق', correctColorHex: '#3b82f6', options: ['#f97316', '#3b82f6', '#eab308'] },
        { colorName: 'أخضر', correctColorHex: '#22c55e', options: ['#8b5cf6', '#ec4899', '#22c55e'] },
    ]
  },
};
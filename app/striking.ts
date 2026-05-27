// Striking techniques — YouTube IDs from elite coaches/fighters.
// Videos require internet; text instructions work offline.
export type Technique = {
  id: string;
  title: string;
  category: 'striking' | 'grappling' | 'conditioning' | 'drills';
  subcategory: string;
  coach: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  youtubeId: string;
  duration: string;
  description: string;
  keyPoints: string[];
  commonMistakes: string[];
};

export const striking: Technique[] = [
  {
    id: 'str-001',
    title: 'The Jab — Foundation',
    category: 'striking',
    subcategory: 'Boxing',
    coach: 'Teddy Atlas',
    level: 'beginner',
    youtubeId: 'GUYr7vqOXMc',
    duration: '8:12',
    description: 'The jab is the most important punch in boxing. Range-finder, set-up, and defense in one.',
    keyPoints: [
      'Lead shoulder snaps forward, chin tucks behind it',
      'Rotate fist on contact (palm down)',
      'Rear hand stays glued to cheek',
      'Return the same path you threw it',
    ],
    commonMistakes: [
      'Dropping the rear hand',
      'Leaning forward over the front foot',
      'Telegraphing by loading the shoulder back',
    ],
  },
  {
    id: 'str-002',
    title: 'Cross — Power From The Ground',
    category: 'striking',
    subcategory: 'Boxing',
    coach: 'Freddie Roach',
    level: 'beginner',
    youtubeId: 'JEAHGUVK_8U',
    duration: '6:40',
    description: 'The straight right (orthodox) generates power from rear-foot pivot through hip rotation.',
    keyPoints: [
      'Pivot rear heel outward',
      'Rotate hip and shoulder together',
      'Punch through the target, not at it',
      'Exhale sharply on impact',
    ],
    commonMistakes: [
      'Arm-punching with no hip rotation',
      'Lifting the rear foot off the ground',
      'Dropping the lead hand on the way out',
    ],
  },
  {
    id: 'str-003',
    title: 'Lead Hook to Body & Head',
    category: 'striking',
    subcategory: 'Boxing',
    coach: 'Mike Tyson / Cus D\'Amato system',
    level: 'intermediate',
    youtubeId: 'gJ8GZ0qIM3o',
    duration: '9:55',
    description: 'Tyson-style peek-a-boo hook — short, vicious, fully rotational.',
    keyPoints: [
      'Pivot lead foot 90°',
      'Elbow at shoulder height (head) or rib height (body)',
      'Power from hip, not arm',
      'Keep rear hand glued to face',
    ],
    commonMistakes: [
      'Winding up the arm',
      'No foot pivot — kills all power',
      'Dropping the hook into a slap',
    ],
  },
  {
    id: 'str-004',
    title: 'Calf Kick — Modern MMA Staple',
    category: 'striking',
    subcategory: 'Muay Thai / MMA',
    coach: 'Henri Hooft',
    level: 'intermediate',
    youtubeId: '1m9p6PvKZE0',
    duration: '7:20',
    description: 'Low-line kick that wrecks the lead leg and steals mobility. Dominant weapon in modern MMA.',
    keyPoints: [
      'Step lead foot out 45°',
      'Strike with lower shin into the calf muscle',
      'Hip turns over completely',
      'Return leg fast to avoid the catch',
    ],
    commonMistakes: [
      'Kicking with the foot/instep',
      'No hip rotation — no damage',
      'Squaring up after the kick',
    ],
  },
  {
    id: 'str-005',
    title: 'Roundhouse Kick — Dutch Style',
    category: 'striking',
    subcategory: 'Kickboxing',
    coach: 'Ernesto Hoost',
    level: 'intermediate',
    youtubeId: 'h0H6Dq2c1Ck',
    duration: '10:05',
    description: 'Drive through the target with the shin like a baseball bat.',
    keyPoints: [
      'Plant foot turns 180°',
      'Strike with the shin, not the foot',
      'Hands stay up — opposite hand to the cheek',
      'Follow through, don\'t snap back',
    ],
    commonMistakes: [
      'Insufficient plant-foot pivot',
      'Dropping the opposite hand',
      'Kicking with the foot',
    ],
  },
  {
    id: 'str-006',
    title: 'Teep / Push Kick',
    category: 'striking',
    subcategory: 'Muay Thai',
    coach: 'Saenchai',
    level: 'beginner',
    youtubeId: 'L8M0FZl_h2s',
    duration: '5:30',
    description: 'The jab of the legs. Controls range, breaks rhythm, sets up everything else.',
    keyPoints: [
      'Knee up first, then extend',
      'Strike with ball of foot',
      'Push, don\'t kick',
      'Recoil immediately',
    ],
    commonMistakes: [
      'Pushing with toes pointed (injury risk)',
      'Leaning back too far',
      'Leaving the leg out',
    ],
  },
  {
    id: 'str-007',
    title: 'Slip & Counter — Head Movement',
    category: 'striking',
    subcategory: 'Boxing',
    coach: 'Lawrence Kenshin breakdown',
    level: 'advanced',
    youtubeId: 'YxsM_K8gZTo',
    duration: '12:10',
    description: 'Slip the jab, counter with cross. Foundational defensive offense.',
    keyPoints: [
      'Slip from the legs, not just head',
      'Eyes stay on opponent',
      'Counter lands before they recover',
      'Reset stance immediately',
    ],
    commonMistakes: [
      'Slipping with just the head — gets caught by the hook',
      'Closing eyes',
      'Standing tall after the counter',
    ],
  },
  {
    id: 'str-008',
    title: 'Spinning Back Kick',
    category: 'striking',
    subcategory: 'Taekwondo / MMA',
    coach: 'Edson Barboza',
    level: 'advanced',
    youtubeId: 'V8mtuM4_vlc',
    duration: '8:45',
    description: 'Devastating heel strike. High risk, high reward.',
    keyPoints: [
      'Look over shoulder first — find target',
      'Drive heel straight back through target',
      'Hands protect face during spin',
      'Land in stance, ready to follow up',
    ],
    commonMistakes: [
      'Spinning blind',
      'Round kicking instead of driving heel straight',
      'Falling forward after',
    ],
  },
];

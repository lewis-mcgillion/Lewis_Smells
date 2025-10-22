export interface Quote {
  id: number;
  text: string;
  character: string;
  context?: string;
  characterImage: string;
  characterImageUrl?: string;
}

export const CHARACTER_IMAGES: Record<string, string> = {
  "Dexter Morgan": "https://upload.wikimedia.org/wikipedia/en/5/56/Michael_C._Hall_as_Dexter_Morgan_publicity_photo%2C_2012.webp",
  "James Doakes": "https://preview.redd.it/u7lozj3xywo91.jpg?width=1080&crop=smart&auto=webp&s=3031b3dd9263f0cc01ccf4c567d5fb73373da915",
  "Debra Morgan": "https://static.wikia.nocookie.net/dexter/images/8/85/Debra_Morgan_Promo_444.jpg/revision/latest?cb=20200107185051",
  "Trinity Killer": "https://static.wikia.nocookie.net/villains/images/0/03/ArthurMitchell1.webp/revision/latest?cb=20240505001631",
  "Angel Batista": "https://upload.wikimedia.org/wikipedia/en/8/8c/Angel_Batista.jpg",
  "Harry Morgan": "https://static.wikia.nocookie.net/dexter/images/8/8e/HarryFace.jpg/revision/latest/thumbnail/width/360/height/450?cb=20101008012536"
};

export const quotes: Quote[] = [
  {
    id: 1,
    text: "Tonight's the night.",
    character: "Dexter Morgan",
    context: "Opening line",
    characterImage: "🩸"
  },
  {
    id: 2,
    text: "I'm not the monster he wants me to be. So I'm neither man nor beast. I'm something new entirely.",
    character: "Dexter Morgan",
    context: "Self-reflection",
    characterImage: "🩸"
  },
  {
    id: 3,
    text: "If I had a heart, it would be breaking right now.",
    character: "Dexter Morgan",
    context: "Emotional moment",
    characterImage: "🩸"
  },
  {
    id: 4,
    text: "Pretend. That's all I've ever done.",
    character: "Dexter Morgan",
    context: "Inner monologue",
    characterImage: "🩸"
  },
  {
    id: 5,
    text: "I just know there's something dark in me and I hide it.",
    character: "Dexter Morgan",
    context: "Confession",
    characterImage: "🩸"
  },
  {
    id: 6,
    text: "Surprise, motherf***er!",
    character: "James Doakes",
    context: "Iconic line",
    characterImage: "👮"
  },
  {
    id: 7,
    text: "You're a killer. I catch killers.",
    character: "James Doakes",
    context: "Confrontation",
    characterImage: "👮"
  },
  {
    id: 8,
    text: "I'm going to make you pay for what you did.",
    character: "Debra Morgan",
    context: "Emotional confrontation",
    characterImage: "👩‍✈️"
  },
  {
    id: 9,
    text: "You're the only person in the world who really knows me.",
    character: "Debra Morgan",
    context: "To Dexter",
    characterImage: "👩‍✈️"
  },
  {
    id: 10,
    text: "I own you.",
    character: "Trinity Killer",
    context: "Threatening Dexter",
    characterImage: "😈"
  },
  {
    id: 11,
    text: "It's already over.",
    character: "Trinity Killer",
    context: "Final confrontation",
    characterImage: "😈"
  },
  {
    id: 12,
    text: "I'm not a cop tonight.",
    character: "Dexter Morgan",
    context: "Dark passenger",
    characterImage: "🩸"
  },
  {
    id: 13,
    text: "Everyone hides who they are at least some of the time.",
    character: "Dexter Morgan",
    context: "Observation",
    characterImage: "🩸"
  },
  {
    id: 14,
    text: "I live in a world of death, pretending to be someone else entirely.",
    character: "Dexter Morgan",
    context: "Inner thoughts",
    characterImage: "🩸"
  },
  {
    id: 15,
    text: "I can kill a man, dismember his body, and be home in time for dinner.",
    character: "Dexter Morgan",
    context: "Routine thoughts",
    characterImage: "🩸"
  },
  {
    id: 16,
    text: "I'm a very neat monster.",
    character: "Dexter Morgan",
    context: "Self-description",
    characterImage: "🩸"
  },
  {
    id: 17,
    text: "Born in blood, both of us.",
    character: "Dexter Morgan",
    context: "Reflection on his past",
    characterImage: "🩸"
  },
  {
    id: 18,
    text: "The Dark Passenger has been with me since I was born.",
    character: "Dexter Morgan",
    context: "Origin story",
    characterImage: "🩸"
  },
  {
    id: 19,
    text: "I don't have feelings about anything, but if I could have feelings, I'd have them for Deb.",
    character: "Dexter Morgan",
    context: "About his sister",
    characterImage: "🩸"
  },
  {
    id: 20,
    text: "My name is Dexter, and I'm not sure what I am.",
    character: "Dexter Morgan",
    context: "Identity crisis",
    characterImage: "🩸"
  },
  {
    id: 21,
    text: "I'm a father, a serial killer, a blood spatter analyst, but I'm just a guy.",
    character: "Dexter Morgan",
    context: "Self-reflection",
    characterImage: "🩸"
  },
  {
    id: 22,
    text: "Harry was a great cop. He taught me everything I know about killing.",
    character: "Dexter Morgan",
    context: "About Harry Morgan",
    characterImage: "🩸"
  },
  {
    id: 23,
    text: "The Code of Harry - it's the only thing that keeps me from being a monster.",
    character: "Dexter Morgan",
    context: "Following the code",
    characterImage: "🩸"
  },
  {
    id: 24,
    text: "I fake it all. The smile, the nod, the awkward small talk.",
    character: "Dexter Morgan",
    context: "Social interactions",
    characterImage: "🩸"
  },
  {
    id: 25,
    text: "What would you call me? A vigilante? A killer with a conscience?",
    character: "Dexter Morgan",
    context: "Questioning his nature",
    characterImage: "🩸"
  },
  {
    id: 26,
    text: "I've never felt more human than when I'm about to take a life.",
    character: "Dexter Morgan",
    context: "Dark revelation",
    characterImage: "🩸"
  },
  {
    id: 27,
    text: "You can't play on my feelings when I don't have any.",
    character: "Dexter Morgan",
    context: "Confrontation",
    characterImage: "🩸"
  },
  {
    id: 28,
    text: "I need to blend in, not stand out. Hiding in plain sight.",
    character: "Dexter Morgan",
    context: "Strategy",
    characterImage: "🩸"
  },
  {
    id: 29,
    text: "Rita's a good person. She deserves better than me.",
    character: "Dexter Morgan",
    context: "About Rita",
    characterImage: "🩸"
  },
  {
    id: 30,
    text: "I'm not sure what's scarier - that I kill people or that I'm good at it.",
    character: "Dexter Morgan",
    context: "Self-awareness",
    characterImage: "🩸"
  },
  {
    id: 31,
    text: "Holy frankenfuck!",
    character: "Debra Morgan",
    context: "Classic Deb exclamation",
    characterImage: "👩‍✈️"
  },
  {
    id: 32,
    text: "You're a creep and a freak, but you're my brother and I love you.",
    character: "Debra Morgan",
    context: "To Dexter",
    characterImage: "👩‍✈️"
  },
  {
    id: 33,
    text: "What the f*** is wrong with you?",
    character: "Debra Morgan",
    context: "Frustrated outburst",
    characterImage: "👩‍✈️"
  },
  {
    id: 34,
    text: "I need a f***ing drink.",
    character: "Debra Morgan",
    context: "Stressful situation",
    characterImage: "👩‍✈️"
  },
  {
    id: 35,
    text: "You're like a breadcrumb trail of bodies.",
    character: "Debra Morgan",
    context: "Investigating",
    characterImage: "👩‍✈️"
  },
  {
    id: 36,
    text: "I may not be smart enough to be a detective, but I'm smart enough to know when I'm being lied to.",
    character: "Debra Morgan",
    context: "Confrontation",
    characterImage: "👩‍✈️"
  },
  {
    id: 37,
    text: "You make me a better person.",
    character: "Debra Morgan",
    context: "To Dexter",
    characterImage: "👩‍✈️"
  },
  {
    id: 38,
    text: "I've got your back, always.",
    character: "Debra Morgan",
    context: "Supporting Dexter",
    characterImage: "👩‍✈️"
  },
  {
    id: 39,
    text: "Shut your cakehole!",
    character: "James Doakes",
    context: "Angry warning",
    characterImage: "👮"
  },
  {
    id: 40,
    text: "I'm watching you, Morgan.",
    character: "James Doakes",
    context: "Suspicion",
    characterImage: "👮"
  },
  {
    id: 41,
    text: "There's something off about you.",
    character: "James Doakes",
    context: "To Dexter",
    characterImage: "👮"
  },
  {
    id: 42,
    text: "You give me the creeps, Morgan.",
    character: "James Doakes",
    context: "Expressing distrust",
    characterImage: "👮"
  },
  {
    id: 43,
    text: "I know what you are.",
    character: "James Doakes",
    context: "Confronting Dexter",
    characterImage: "👮"
  },
  {
    id: 44,
    text: "Don't tell me how to do my job!",
    character: "Angel Batista",
    context: "Defending himself",
    characterImage: "👔"
  },
  {
    id: 45,
    text: "We're family here. We look out for each other.",
    character: "Angel Batista",
    context: "Team spirit",
    characterImage: "👔"
  },
  {
    id: 46,
    text: "Let me buy you a drink, we'll talk about it.",
    character: "Angel Batista",
    context: "Being friendly",
    characterImage: "👔"
  },
  {
    id: 47,
    text: "Sometimes the truth is hard to swallow.",
    character: "Harry Morgan",
    context: "Teaching Dexter",
    characterImage: "👴"
  },
  {
    id: 48,
    text: "You have to blend in, Dexter. Appear normal.",
    character: "Harry Morgan",
    context: "The Code",
    characterImage: "👴"
  },
  {
    id: 49,
    text: "Never get caught. That's the most important rule.",
    character: "Harry Morgan",
    context: "Code of Harry",
    characterImage: "👴"
  },
  {
    id: 50,
    text: "You're different, Dexter. But that doesn't mean you can't have a good life.",
    character: "Harry Morgan",
    context: "Fatherly advice",
    characterImage: "👴"
  }
];

export const getRandomQuote = (): Quote => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

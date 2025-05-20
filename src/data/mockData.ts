
import { StartupIdea, Comment } from '../types/types';

export const mockIdeas: StartupIdea[] = [
  {
    id: '1',
    title: 'PetPal: AI Pet Companion',
    description: 'An AI-powered virtual pet companion app that provides personalized care advice, behavior analysis, and interactive games for pet owners.',
    category: 'Pet Tech',
    tags: ['AI', 'Pets', 'Mobile App'],
    author: 'Alex Johnson',
    dateCreated: '2023-04-15',
    likesCount: 245,
    dislikesCount: 12,
    viewsCount: 1280,
    sharesCount: 68
  },
  {
    id: '2',
    title: 'GreenThumb: Plant Care Assistant',
    description: 'A smart plant care system that uses sensors and machine learning to monitor your plants and provide tailored care recommendations.',
    category: 'AgTech',
    tags: ['IoT', 'Plants', 'Smart Home'],
    author: 'Maria Garcia',
    dateCreated: '2023-05-22',
    likesCount: 189,
    dislikesCount: 8,
    viewsCount: 945,
    sharesCount: 42
  },
  {
    id: '3',
    title: 'CodeBuddy: AI Programming Tutor',
    description: 'An AI-powered programming tutor that analyzes your code, provides personalized feedback, and creates custom lessons based on your skill level.',
    category: 'EdTech',
    tags: ['AI', 'Education', 'Programming'],
    author: 'David Kim',
    dateCreated: '2023-06-10',
    likesCount: 312,
    dislikesCount: 15,
    viewsCount: 1670,
    sharesCount: 89
  },
  {
    id: '4',
    title: 'MealPrep: Smart Recipe Planner',
    description: 'An app that generates personalized weekly meal plans and grocery lists based on your dietary preferences, budget, and available ingredients.',
    category: 'FoodTech',
    tags: ['Food', 'AI', 'Health'],
    author: 'Sarah Williams',
    dateCreated: '2023-07-05',
    likesCount: 278,
    dislikesCount: 23,
    viewsCount: 1450,
    sharesCount: 57
  },
  {
    id: '5',
    title: 'EcoTravel: Sustainable Tourism Platform',
    description: 'A platform that connects travelers with eco-friendly accommodations, activities, and transportation options to minimize environmental impact.',
    category: 'TravelTech',
    tags: ['Sustainability', 'Travel', 'Marketplace'],
    author: 'James Wilson',
    dateCreated: '2023-08-18',
    likesCount: 156,
    dislikesCount: 19,
    viewsCount: 820,
    sharesCount: 34
  }
];

export const mockComments: Record<string, Comment[]> = {
  '1': [
    {
      id: 'c1',
      ideaId: '1',
      userId: 'u1',
      username: 'techEnthusiast',
      content: "This is brilliant! I've been looking for something like this for my dog.",
      datePosted: '2023-04-16',
      likes: 12
    },
    {
      id: 'c2',
      ideaId: '1',
      userId: 'u2',
      username: 'petLover',
      content: 'How would this handle multiple pets with different needs?',
      datePosted: '2023-04-17',
      likes: 8
    }
  ],
  '2': [
    {
      id: 'c3',
      ideaId: '2',
      userId: 'u3',
      username: 'plantParent',
      content: 'I kill all my plants. This sounds perfect for me!',
      datePosted: '2023-05-23',
      likes: 15
    }
  ],
  '3': [
    {
      id: 'c4',
      ideaId: '3',
      userId: 'u4',
      username: 'coder101',
      content: 'As a CS teacher, I see huge potential for this in education.',
      datePosted: '2023-06-11',
      likes: 22
    },
    {
      id: 'c5',
      ideaId: '3',
      userId: 'u5',
      username: 'newbieDev',
      content: 'Would this support languages like Python and JavaScript?',
      datePosted: '2023-06-12',
      likes: 7
    },
    {
      id: 'c6',
      ideaId: '3',
      userId: 'u6',
      username: 'techStartup',
      content: "We'd love to partner with something like this for our junior dev program.",
      datePosted: '2023-06-13',
      likes: 9
    }
  ],
  '4': [
    {
      id: 'c7',
      ideaId: '4',
      userId: 'u7',
      username: 'healthyEater',
      content: 'This would save me so much time planning meals each week!',
      datePosted: '2023-07-06',
      likes: 11
    }
  ],
  '5': [
    {
      id: 'c8',
      ideaId: '5',
      userId: 'u8',
      username: 'ecoWarrior',
      content: 'Sustainable tourism is the future. Great idea!',
      datePosted: '2023-08-19',
      likes: 14
    },
    {
      id: 'c9',
      ideaId: '5',
      userId: 'u9',
      username: 'worldTraveler',
      content: 'Would love to see carbon offset integration for flights.',
      datePosted: '2023-08-20',
      likes: 6
    }
  ]
};

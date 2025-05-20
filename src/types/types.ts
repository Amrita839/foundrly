
export interface StartupIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  dateCreated: string;
  likesCount: number;
  dislikesCount: number;
  viewsCount: number;
  sharesCount: number;
}

export interface Comment {
  id: string;
  ideaId: string;
  userId: string;
  username: string;
  content: string;
  datePosted: string;
  likes: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
  bio: string;
  dateJoined: string;
  likedIdeas: string[];
  dislikedIdeas: string[];
  submittedIdeas: string[];
}

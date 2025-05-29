import { supabase } from '@/lib/supabase';
import { StartupIdea } from '@/types/types';

export const ideaService = {
  async createIdea(idea: Omit<StartupIdea, 'id'>) {
    const { data, error } = await supabase
      .from('ideas')
      .insert([idea])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getIdeas() {
    const { data, error } = await supabase
      .from('ideas')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async likeIdea(ideaId: string, userId: string) {
    const { error } = await supabase
      .from('likes')
      .insert([{ idea_id: ideaId, user_id: userId }]);
    
    if (error) throw error;
  },

  async dislikeIdea(ideaId: string, userId: string) {
    const { error } = await supabase
      .from('dislikes')
      .insert([{ idea_id: ideaId, user_id: userId }]);
    
    if (error) throw error;
  }
};
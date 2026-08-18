export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: '14.4';
  };
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string;
          id: string;
          name: string;
          sort_order: number;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
          sort_order?: number;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
          sort_order?: number;
        };
        Relationships: [];
      };
      experiences: {
        Row: {
          company: string;
          created_at: string;
          description: string;
          end_date: string | null;
          id: string;
          is_current: boolean;
          location: string;
          role: string;
          sort_order: number;
          start_date: string;
          updated_at: string;
        };
        Insert: {
          company?: string;
          created_at?: string;
          description?: string;
          end_date?: string | null;
          id?: string;
          is_current?: boolean;
          location?: string;
          role?: string;
          sort_order?: number;
          start_date?: string;
          updated_at?: string;
        };
        Update: {
          company?: string;
          created_at?: string;
          description?: string;
          end_date?: string | null;
          id?: string;
          is_current?: boolean;
          location?: string;
          role?: string;
          sort_order?: number;
          start_date?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      portfolio_settings: {
        Row: {
          about: string;
          contact_email: string;
          contact_github: string;
          contact_linkedin: string;
          contact_phone: string;
          created_at: string;
          hero_description: string;
          hero_name: string;
          hero_subtitle: string;
          id: string;
          profile_image: string;
          updated_at: string;
        };
        Insert: {
          about?: string;
          contact_email?: string;
          contact_github?: string;
          contact_linkedin?: string;
          contact_phone?: string;
          created_at?: string;
          hero_description?: string;
          hero_name?: string;
          hero_subtitle?: string;
          id?: string;
          profile_image?: string;
          updated_at?: string;
        };
        Update: {
          about?: string;
          contact_email?: string;
          contact_github?: string;
          contact_linkedin?: string;
          contact_phone?: string;
          created_at?: string;
          hero_description?: string;
          hero_name?: string;
          hero_subtitle?: string;
          id?: string;
          profile_image?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          cover_image: string;
          created_at: string;
          description: string;
          details: string;
          icon: string;
          id: string;
          images: string[];
          link: string;
          name: string;
          sort_order: number;
          tags: string[];
          type: string;
          updated_at: string;
        };
        Insert: {
          cover_image?: string;
          created_at?: string;
          description?: string;
          details?: string;
          icon?: string;
          id?: string;
          images?: string[];
          link?: string;
          name?: string;
          sort_order?: number;
          tags?: string[];
          type?: string;
          updated_at?: string;
        };
        Update: {
          cover_image?: string;
          created_at?: string;
          description?: string;
          details?: string;
          icon?: string;
          id?: string;
          images?: string[];
          link?: string;
          name?: string;
          sort_order?: number;
          tags?: string[];
          type?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      skills: {
        Row: {
          category: string;
          created_at: string;
          id: string;
          name: string;
          proficiency: number;
          sort_order: number;
          updated_at: string;
        };
        Insert: {
          category?: string;
          created_at?: string;
          id?: string;
          name?: string;
          proficiency?: number;
          sort_order?: number;
          updated_at?: string;
        };
        Update: {
          category?: string;
          created_at?: string;
          id?: string;
          name?: string;
          proficiency?: number;
          sort_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;

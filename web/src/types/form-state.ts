export type FormState = {
  success: boolean;
  fields?: Record<string, string | string[]>;
  errors?: Record<string, string[]>;
};

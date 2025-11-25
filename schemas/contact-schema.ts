import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  subject: z.string().min(3, "O assunto é obrigatorio"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactSchema = z.infer<typeof contactSchema>;

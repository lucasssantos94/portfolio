"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactSchema } from "@/schemas/contact-schema";
import { useState } from "react";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactSchema) {
    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      alert("Mensagem enviada com sucesso!");
      reset();
    } catch {
      alert("Erro ao enviar a mensagem.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nome */}
        <div>
          <label className="block tex-sm font-medium text-foreground mb-2">
            Nome
          </label>
          <input
            {...register("name")}
            className="w-full px-4 py-2 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground"
            placeholder="Seu nome"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground"
            placeholder="seu@email..."
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Assunto */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Assunto
        </label>
        <input
          {...register("subject")}
          className="w-full px-4 py-2 rounded-lg border border-border bg-secondary text-foreground"
          placeholder="Assunto da mensagem"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Mensagem */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Mensagem
        </label>
        <textarea
          {...register("message")}
          rows={6}
          className="w-full px-4 py-2 rounded-lg border border-border bg-secondary text-foreground resize-none"
          placeholder="Sua mensagem aqui..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 rounded-lg bg-primary/50 text-foreground hover:bg-primary/80 transition disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};

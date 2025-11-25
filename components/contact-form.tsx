export const ContactForm = () => {
  return (
    <form action="" className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block tex-sm font-medium text-foreground mb-2"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Assunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Assunto da mensagem"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-2 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Sua mensagem aqui..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 rounded-lg bg-primary/50 text-foreground hover:bg-primary/80 transition-colors"
      >
        Enviar
      </button>
    </form>
  );
};

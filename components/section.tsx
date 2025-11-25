interface ISectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Section = ({ children, id, className }: ISectionProps) => {
  return (
    <section id={id} className={`min-h-[calc(100vh-64px)] ${className}`}>
      {children}
    </section>
  );
};

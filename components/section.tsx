interface ISectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Section = ({ children, id, className }: ISectionProps) => {
  return (
    <section id={id} className={`min-h-[calc(100vh-64px)]  ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-border">
        {children}
      </div>
    </section>
  );
};

interface ITitleSectionProps {
  title: string;
}

export const TitleSection = ({ title }: ITitleSectionProps) => {
  return (
    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
      {title}
    </h2>
  );
};

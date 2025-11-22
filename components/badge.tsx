export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
      {children}
    </span>
  );
};

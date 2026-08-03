interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    </div>
  );
}
export default SectionHeader;

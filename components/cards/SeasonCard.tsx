interface SeasonCardProps {
    chapter: string;
    subtitle: string;
    image: string;
  }
  
  export default function SeasonCard({
    chapter,
    subtitle,
    image,
  }: SeasonCardProps) {
    return (
      <div className="relative h-80 w-64 shrink-0 overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={chapter}
          className="h-full w-full object-cover"
        />
  
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
  
        <div className="absolute bottom-6 left-6">
          <p className="text-sm text-white/70">{subtitle}</p>
          <h3 className="mt-1 text-3xl font-black text-white">
            {chapter}
          </h3>
        </div>
      </div>
    );
  }
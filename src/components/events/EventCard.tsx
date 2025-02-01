import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
  image: string;
  month: string;
  day: string;
  title: string;
  location: string;
  description: string;
  className?: string;
}

export function EventCard({
  image,
  month,
  day,
  title,
  location,
  description,
  className,
}: EventCardProps) {
  const navigate = useNavigate();

  const handleManageClick = () => {
    navigate("/register");
  };

  return (
    <article className={cn("bg-white rounded-lg shadow-md overflow-hidden", className)}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 bg-white px-3 py-1 rounded-tr-lg">
          <span className="text-sm font-medium text-gray-600">{month}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-2xl font-bold text-primary">{day}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">{location}</p>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
              />
            ))}
          </div>
          <button 
            onClick={handleManageClick}
            className="px-4 py-2 text-sm text-primary hover:bg-primary/10 rounded-md transition-colors"
          >
            Manage Event
          </button>
        </div>
      </div>
    </article>
  );
}
import { cn } from "@/lib/utils"

interface SocialsProps {
  networks: string[]
  size?: number
  className?: string
}

const socialIcons: Record<string, string> = {
  facebook: "📘",
  instagram: "📷",
  telegram: "✈️",
  viber: "💜",
  whatsapp: "💬"
}

function Socials({ networks, size = 24, className }: SocialsProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      {networks.map((network) => (
        <a
          key={network}
          href={`#${network}`}
          className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:bg-gray-100 transition-colors"
          style={{ width: size, height: size }}
        >
          <span className="text-lg">{socialIcons[network] || "🔗"}</span>
        </a>
      ))}
    </div>
  )
}

export default Socials

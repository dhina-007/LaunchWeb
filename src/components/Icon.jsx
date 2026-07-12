import {
  AppWindow,
  Cpu,
  Globe,
  LayoutTemplate,
  LifeBuoy,
  MessageSquare,
  Palette,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  Wrench,
  Zap,
} from 'lucide-react'

const icons = {
  Globe,
  LayoutTemplate,
  ShoppingBag,
  AppWindow,
  Palette,
  Search,
  Wrench,
  Zap,
  MessageSquare,
  Sparkles,
  Cpu,
  LifeBuoy,
  Target,
}

export function Icon({ name, className = 'h-5 w-5' }) {
  const Cmp = icons[name] || Globe
  return <Cmp className={className} strokeWidth={1.75} />
}

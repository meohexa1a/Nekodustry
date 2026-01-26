import { ArrowRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export interface FeatureItemProps {
  icon: LucideIcon
  title: string
  subtitle: string
  href?: string
  badge?: string
  className?: string
}

export function FeatureItem({
  title,
  subtitle,
  icon: Icon,
  href,
  badge,
  className,
}: FeatureItemProps) {
  const content = (
    <div
      className={cn(
        'group border-border border-b py-8 transition-all duration-300 hover:pl-4 group-focus-visible/link:pl-4',
        'relative flex w-full items-center justify-between',
        className,
      )}
    >
      <div className="flex items-center gap-6">
        <div className="bg-secondary text-muted-foreground group-hover:bg-foreground group-hover:text-background group-focus-visible/link:bg-foreground group-focus-visible/link:text-background flex h-12 w-12 items-center justify-center rounded-full transition-colors">
          <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-foreground font-mono text-lg">{title}</h3>
            {badge && (
              <Badge
                variant="secondary"
                className="group-hover:text-primary group-focus-visible/link:text-primary text-[10px] font-bold tracking-wider uppercase transition-colors"
              >
                {badge}
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground mt-1 text-sm font-light">
            {subtitle}
          </p>
        </div>
      </div>
      <ArrowRight
        className="text-muted-foreground group-hover:text-foreground group-focus-visible/link:text-foreground transition-transform duration-300 group-hover:-translate-x-2 group-focus-visible/link:-translate-x-2"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="group/link block w-full">
        {content}
      </Link>
    )
  }

  return <div className="w-full cursor-pointer">{content}</div>
}

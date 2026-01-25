import { ArrowUpRight, LucideIcon, GitCommitHorizontal } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface FeatureCardProps {
  name: string
  label?: string
  action: string
  detail: string
  icon?: LucideIcon
  href?: string
  className?: string
}

export function FeatureCard({
  name,
  label,
  action,
  detail,
  icon: Icon = GitCommitHorizontal,
  href,
  className,
}: FeatureCardProps) {

  const content = (
    <div
      className={cn(
        'group border-border/40 bg-background/40 hover:bg-background/80 hover:border-primary/50 relative block w-full rounded-lg border p-6 transition-all duration-300',
        className,
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        {/* Icon & Connector line visual */}
        <div className="hidden flex-col items-center gap-2 sm:flex">
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full">
            <Icon size={16} />
          </div>
          <div className="bg-border/50 group-hover:bg-primary/20 h-full w-px transition-colors" />
        </div>

        <div className="flex-1 space-y-2">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-foreground text-lg font-medium tracking-tight">
                {name}
              </h3>
              {label && (
                <span className="text-muted-foreground/60 font-mono text-xs font-light tracking-wider uppercase">
                  — {label}
                </span>
              )}
            </div>
            <ArrowUpRight
              className="text-muted-foreground/30 group-hover:text-primary transition-colors"
              size={18}
            />
          </div>

          {/* Core Action */}
          <p className="text-foreground font-mono text-sm font-medium">
            {action}
          </p>

          {/* Detail */}
          <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
            {detail}
          </p>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="w-full">
        {content}
      </Link>
    )
  }

  return content
}

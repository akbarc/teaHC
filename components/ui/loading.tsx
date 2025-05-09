import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200 dark:bg-gray-800",
        className
      )}
    />
  )
}

interface LoadingProps {
  text?: string
  className?: string
}

export function LoadingSpinner({ text, className }: LoadingProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-amber-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {text && <span>{text}</span>}
    </div>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Skeleton className="h-12" />
      <div className="p-4 space-y-4">
        <Skeleton className="aspect-square" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  )
}

export function FormFieldSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-10 w-full" />
    </div>
  )
} 
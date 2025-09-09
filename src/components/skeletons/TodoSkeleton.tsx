import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function TodoSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header Section Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-9 w-48" /> {/* Title */}
        <Skeleton className="h-5 w-56" /> {/* Subtitle */}
      </div>

      {/* Progress Overview Skeleton */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-5 w-36" /> {/* Progress Overview */}
              <Skeleton className="h-4 w-44" /> {/* Keep up the great work! */}
            </div>
            <div className="text-right space-y-1">
              <Skeleton className="h-8 w-12 ml-auto" /> {/* Percentage */}
              <Skeleton className="h-4 w-16" /> {/* Complete */}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Todo Items Skeleton */}
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} className="transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  {/* Status Icon */}
                  <div className="mt-1">
                    <Skeleton className="h-5 w-5 rounded-full" />
                  </div>

                  <div className="flex-1 space-y-2">
                    {/* Title */}
                    <Skeleton className="h-7 w-full max-w-sm" />

                    {/* Priority and Date Row */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Skeleton className="h-4 w-4" /> {/* Priority Icon */}
                        <Skeleton className="h-5 w-20 rounded-full" />{" "}
                        {/* Priority Badge */}
                      </div>

                      <div className="flex items-center gap-1">
                        <Skeleton className="h-4 w-4" /> {/* Calendar Icon */}
                        <Skeleton className="h-4 w-24" /> {/* Date */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

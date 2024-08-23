const LoadingSkeleton = () => {


    return (
        <div className="space-y-4">
            {/* Title Skeleton */}
            <div className="w-3/4 h-6 bg-gray-300 rounded animate-pulse"></div>

            {/* Paragraph Skeleton */}
            <div className="space-y-3">
                <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-5/6 h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-4/6 h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>

            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-300 rounded animate-pulse"></div>
        </div>
    )
}

export default LoadingSkeleton
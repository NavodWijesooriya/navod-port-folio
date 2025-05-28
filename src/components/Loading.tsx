'use client'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="flex space-x-2">
        {/* Dot 1 */}
        <span className="h-5 w-5 rounded-full bg-gray-800 animate-bounce" style={{ animationDelay: '0s' }}></span>
        {/* Dot 2 */}
        <span className="h-5 w-5 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: '0.1s' }}></span>
        {/* Dot 3 */}
        <span className="h-5 w-5 rounded-full bg-gray-800 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
        {/* Dot 4 */}
        <span className="h-5 w-5 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
        {/* Dot 5 */}
        <span className="h-5 w-5 rounded-full bg-gray-800 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
      </div>
    </div>
  )
}

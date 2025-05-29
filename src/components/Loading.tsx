'use client'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="flex space-x-3 mb-4">
        {/* Dot 1 */}
        <span 
          className="h-5 w-5 rounded-full bg-gray-800 animate-bounce shadow-lg shadow-gray-800/30" 
          style={{ animationDelay: '0s', animationDuration: '0.8s' }}
        ></span>
        {/* Dot 2 */}
        <span 
          className="h-6 w-6 rounded-full bg-green-600 animate-bounce shadow-lg shadow-green-600/40" 
          style={{ animationDelay: '0.1s', animationDuration: '0.8s' }}
        ></span>
        {/* Dot 3 */}
        <span 
          className="h-7 w-7 rounded-full bg-gray-800 animate-bounce shadow-lg shadow-gray-800/30" 
          style={{ animationDelay: '0.2s', animationDuration: '0.8s' }}
        ></span>
        {/* Dot 4 */}
        <span 
          className="h-6 w-6 rounded-full bg-green-600 animate-bounce shadow-lg shadow-green-600/40" 
          style={{ animationDelay: '0.3s', animationDuration: '0.8s' }}
        ></span>
        {/* Dot 5 */}
        <span 
          className="h-5 w-5 rounded-full bg-gray-800 animate-bounce shadow-lg shadow-gray-800/30" 
          style={{ animationDelay: '0.4s', animationDuration: '0.8s' }}
        ></span>
      </div>
      <p className="text-green-500 font-mono text-sm tracking-widest animate-pulse mt-4">
        LOADING
      </p>
    </div>
  )
}
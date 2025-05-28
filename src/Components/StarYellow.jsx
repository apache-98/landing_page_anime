import React from 'react'
import { Star, StarOff } from 'lucide-react'

export function StarYellow({ rating = 4, total = 5 }) {
  return (
    <div className="flex space-x-1 text-yellow-400">
      {[...Array(total)].map((_, index) => (
        index < rating ? <Star key={index} className="w-5 h-5 fill-current" /> :
                         <StarOff key={index} className="w-5 h-5" />
      ))}
    </div>
  )
}

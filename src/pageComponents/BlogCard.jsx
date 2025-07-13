import React from 'react'

function BlogCard({ title, author, date, description, imageUrl, authorImage }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300">
      <img
        src={imageUrl}
        alt="Blog Post"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={authorImage}
            alt="Author"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">{author}</p>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{description}</p>
        <button className="w-full bg-blue-900 text-white py-2 rounded-full hover:from-blue-600 hover:to-blue-800 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogCard

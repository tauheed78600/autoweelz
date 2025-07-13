import React from 'react'
import BlogCard from '../pageComponents/BlogCard'
import bike1 from '../../public/bike1.jpg';
import bike2 from '../../public/bike2.jpg';
import bike3 from '../../public/bike3.jpg';

function Blogs() {
  const blogPosts = [
    {
      title: "Top 5 Tips for Selling Your Used Bike Online",
      author: "Sarah Johnson",
      date: "Published on Oct 10, 2023",
      description:
        "Learn how to maximize your profits and attract serious buyers when selling your used bike online. Follow these simple tips to make the process smooth and hassle-free.",
      imageUrl: "../../public/bike1.jpg",
      authorImage: " https://randomuser.me/api/portraits/women/45.jpg ",
    },
    {
      title: "How to Determine the True Value of Your Used Bike",
      author: "Michael Brown",
      date: "Published on Sep 25, 2023",
      description:
        "Discover the key factors that influence the value of a used bike. Use our step-by-step guide to accurately price your bike and avoid leaving money on the table.",
      imageUrl: "../../public/bike2.jpg",
      authorImage: " https://randomuser.me/api/portraits/men/50.jpg ",
    },
    {
      title: "The Ultimate Guide to Preparing Your Bike for Resale",
      author: "Emily Davis",
      date: "Published on Aug 15, 2023",
      description:
        "Prepare your bike for resale with these expert tips. From cleaning to minor repairs, we’ll show you how to make your bike stand out in the market.",
      imageUrl: "../../public/bike1.jpg",
      authorImage: " https://randomuser.me/api/portraits/women/60.jpg ",
    },
  ];

  return (
    <div className="w-full py-10 px-4 md:px-12 bg-white">
      <div>
        <h2 className="text-4xl text-blue-900 font-extrabold text-center mb-10">
          Explore Our Blogs
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              author={post.author}
              date={post.date}
              description={post.description}
              imageUrl={post.imageUrl}
              authorImage={post.authorImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export default Blogs

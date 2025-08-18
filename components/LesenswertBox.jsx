import blogPosts from "../pages/blog/blogData/blogData";

const LesenswertBox = ({ currentSlug }) => {
  const filteredPosts = blogPosts
    .filter((post) => !post.href.includes(currentSlug))
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <aside className="bg-gradient-to-br from-[#F0F4FF] to-white border border-[#E0E7FF] p-6 rounded-2xl shadow-sm h-full flex flex-col flex-1">
      <h3 className="text-[20px] font-matt font-[800] text-[#0009FF] uppercase mb-4">
        AUCH LESENSWERT
      </h3>
      <ul className="space-y-3 font-matt text-[16px] text-black font-[300] leading-snug">
        {filteredPosts.map((post) => (
          <li key={post.href}>
            <a
              href={post.href}
              className="hover:text-[#0009FF] hover:underline transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LesenswertBox;

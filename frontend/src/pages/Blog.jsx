import React from "react";
import { ArrowRight, Bookmark } from "lucide-react";
import { asset, posts } from "../data/index";
import PageHero from "../components/PageHero";

function BlogSidebar() {
  const recent = [
    "From life was you fish",
    "The amazing Hubble",
    "Astronomy or Astrology",
    "Asteroids telescope",
  ];
  return (
    <aside className="blog-sidebar">
      <div className="sidebar-box">
        <h3>Category</h3>
        {["Restaurant food", "Travel news", "Modern technology", "Product", "Inspiration"].map((item) => (
          <a href="#/blog" key={item}>{item}</a>
        ))}
      </div>
      <div className="sidebar-box">
        <h3>Recent Posts</h3>
        {recent.map((item, index) => (
          <div className="mini-post" key={item}>
            <img src={asset(`post_${index + 1}.png.webp`)} alt="" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="sidebar-box tags">
        <h3>Tag Clouds</h3>
        {["travel", "style", "culture", "food", "resort", "guide"].map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </aside>
  );
}

export default function Blog({ itemId, notify }) {
  if (itemId) {
    const post = posts.find((item) => item.id === itemId) || posts[0];
    return (
      <>
        <img src={post.image} alt={post.title} style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }} />
        <section className="section article-detail">
          <article>
            <p className="eyebrow">Tripzen Journal</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>
              Dummy editorial note: every Tripzen route combines comfort, timing, local insight, and
              premium stays so the travel day feels calm instead of crowded.
            </p>
            <div className="article-actions">
              <a href="#/blog">Back to blog</a>
              <button type="button" onClick={() => notify("Article saved to your dummy reading list.")}>
                <Bookmark size={17} />
                Save article
              </button>
            </div>
          </article>
          <BlogSidebar />
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title="Blog" image={asset("bradcam4.png")} />
      <section className="section blog-layout">
        <div className="post-list">
          {posts.map((post, index) => (
            <article className="post-card" key={post.id}>
              <img src={post.image} alt={post.title} />
              <div>
                <time>{index + 12} May 2026</time>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <a href={`#/blog/${post.id}`}>
                  Read story <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <BlogSidebar />
      </section>
    </>
  );
}

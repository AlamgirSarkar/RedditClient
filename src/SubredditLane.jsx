import React from 'react';
import { useGetSubredditPostsQuery } from './api/redditApi';
import './App.css'
function SubredditLane({ subreddit }) {
  const { data, error, isLoading } = useGetSubredditPostsQuery(subreddit);
  if (isLoading) return <div>Loading {subreddit}...</div>;
  if (error) return <div>Error loading {subreddit}.</div>;
  return (
    <div className="subreddit-lane">
      <h2 className='subreddit-title'>{subreddit}</h2>
      {data?.data?.children.map((post) => (
        <div key={post.data.id} className="post">
          <h3>{post.data.title}</h3>
          <p>Author: {post.data.author}</p>
          <p>{post.data.ups} upvotes</p>
        </div>
      ))}
    </div>
  );
}

export default SubredditLane;

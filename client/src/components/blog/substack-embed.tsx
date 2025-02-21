import React, { useEffect } from "react";

export function SubstackEmbed() { //https://substackapi.com/feed
  useEffect(() => {
    // Create the script element for the feed
    const script = document.createElement("script");
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Set the feed widget options
    const widgetConfig = {
      substackUrl: "chasingingenuity.substack.com",
      posts: 3
    };
    window.SubstackFeedWidget = widgetConfig;

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="substack-feed-embed"></div>;
}

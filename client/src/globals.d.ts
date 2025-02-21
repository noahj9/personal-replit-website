// src/globals.d.ts or any file ending with .d.ts
declare global {
    interface Window {
      SubstackFeedWidget: {
        substackUrl: string;
        posts: number;
      };
    }
  }
  
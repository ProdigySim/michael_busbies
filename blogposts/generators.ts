import fs from 'fs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export interface BlogPostMetadata {
  title?: string;
}
export interface BlogPost {
  fileName: string;
  metadata: BlogPostMetadata;
  contents: MDXRemoteSerializeResult<Record<string, unknown>>;
}
export async function getLatestPosts(): Promise<BlogPost[]> {

  const files = fs.readdirSync('./blogposts').filter((f) => f.endsWith('.mdx'));

  return Promise.all(files.map(md => parseBlogPost(md, fs.readFileSync(`./blogposts/${md}`, 'utf-8'))));
}


async function parseBlogPost(fileName: string, fileContents: string): Promise<BlogPost> {
  const outputLines: string[] = [];
  const metadata = {};
  for(const line of fileContents.split('\n')) {
    const match = /^\/\/\s*@(\w+)\s+(.*)$/.exec(line);
    if(match) {
      metadata[match[1]] = match[2].trim();
    } else {
      outputLines.push(line);
    }
  }
  const serialized = await serialize(outputLines.join('\n').trim());

  return {
    fileName,
    metadata: metadata as BlogPostMetadata,
    contents: serialized,
  };
}

import Head from 'next/head';

export default function About() {
  return (
    <main className='about content-block'>
      <Head>
        <title> Michael Busby | About</title>
      </Head>
      <h2>About Michael</h2>
      <div>
        <p><em>I'm a software developer</em>. I write code. I don't have a great story about what kind of developer I am.
        I tend to focus in two directions: Low-level/hacking, and overall Software Development. I really enjoy new tools like
        React, TypeScript, and Rust, that bring new patterns to Software Engineers and expand the ways we can express code.
        But I also enjoy just building or taking apart brutally tricky things in x86, C++, or vanilla JS. I have an armchair degree in AppSec and love to think about it.
        </p>
        <p><em>I'm a former competitive gamer</em>. I played Left 4 Dead 2. I played on a number of teams from 2010-2020, 
          inluding the NA tournament champions "Team Royalty" in 2011. I've been heavily involved in the modding scene for L4D,
          which enables competitive play. 
          I served as admin for many community hubs, and built/hosted some as well.
          I was a prolific Shoutcaster for the game from 2011-2012 or so, and I've been a streamer in the community.<br/>
          I have a love/hate relationship with gaming. But it has provided me no end of new experiences and challenges.
          </p>
          <br/>
      </div>
    </main>
  )
}

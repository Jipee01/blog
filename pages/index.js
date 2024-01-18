import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[University of the Assumption: Student/Teacher's Evaluation]</p>
        <p>
        I'm John Patrick Talidong "JP/Talidong". I'm currently studying at the University of the Assumption, and currently taking the course of bachelor of Science in information Technology.
{' '}
<p>
          * I expect to know more about this subject and learn all things about it. <br></br>
          * I also want to expand my knowledge in backend.<br></br>
          * I hope that this subject can motivate me to become a better and professional someday in backend.
        </p><br></br>

        <p>
        1. Being on time<br></br>
        2. Work ethic<br></br>
        3. Effort<br></br>
        4. Body language<br></br>
        5. Energy<br></br>
        6. Attitude<br></br>
        7. Passion<br></br>
        8. Being coachable<br></br>
        9. Doing extra<br></br>
        10. Being prepared<br></br>
        </p>
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
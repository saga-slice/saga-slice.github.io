import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Reduced Boilerplate</>,
    imageUrl: 'img/boxes.svg',
    description: (
      <>
        No more touching 4 files to modify 1 thing.
        Combine reducers, types, actions and sagas into 1 file.
      </>
    ),
  },
  {
    title: <>Write Cleaner Code</>,
    imageUrl: 'img/code.svg',
    description: (
      <>
        Regular redux switch statements can get messy.
        Trying to mitigate that can be complicated and inconsisteny.
      </>
    ),
  },
  {
    title: <>Immutability</>,
    imageUrl: 'img/copy.svg',
    description: (
      <>
        Uses Immer to produce new states so you can modify your state
        as if it was regular javascript. Dost thou even hoist?
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} width={100} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={"Redux and Sagas made easy"}
      description="A simple abstraction intended to dramatically reduce boilerplate.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

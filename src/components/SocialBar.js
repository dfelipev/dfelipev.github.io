import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Icon from '@mdi/react';
import {
  mdiTwitter,
  mdiGithubFace,
  mdiHome,
  mdiLinkedin,
  mdiAttachment,
} from '@mdi/js';

import { rhythm } from '../utils/typography';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: rhythm(1),
  },
  centerColumn: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  otherColumn: {
    display: 'flex',
    flex: 1,
  },
};

function SocialBar() {
  return (
    <StaticQuery
      query={socialQuery}
      render={data => {
        const {
          cvUrl,
          social: { twitter, github, aboutme, linkedin },
        } = data.site.siteMetadata;
        return (
          <div style={styles.container}>
            <div style={styles.otherColumn} />
            <div style={styles.centerColumn}>
              <a href={`https://about.me/${aboutme}`}>
                <Icon path={mdiHome} size={0.8} />
              </a>
              <a href={`https://twitter.com/${twitter}`}>
                <Icon path={mdiTwitter} size={0.8} />
              </a>
              <a href={`https://github.com/${github}`}>
                <Icon path={mdiGithubFace} size={0.8} />
              </a>
              <a href={`https://www.linkedin.com/in/${linkedin}`}>
                <Icon path={mdiLinkedin} size={0.8} />
              </a>
              <a href={`${cvUrl}`}>
                <Icon path={mdiAttachment} size={0.8} />
              </a>
            </div>
            <div style={styles.otherColumn} />
          </div>
        );
      }}
    />
  );
}

const socialQuery = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        cvUrl
        social {
          twitter
          github
          aboutme
          linkedin
        }
      }
    }
  }
`;

export default SocialBar;

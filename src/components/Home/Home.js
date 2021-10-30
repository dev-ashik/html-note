import React from "react";
import Layout from "../Layout/Layout";
import commonStyles from "../Common/Common.module.css";
import { Link } from "react-router-dom";
import styles from './Home.module.css';
import audio from '../../media/audio.mp3';

const Home = () => {
  return (
    <div>
      <Layout>
        {/* A start */}
        <section id="a">
        <div className={commonStyles.typeDiv}>
            <h3 className={commonStyles.title}>
              <Link
                className={commonStyles.titleLink}
                to="/abbreviationsortitle"
              >
               Title
              </Link>
            </h3>
            <hr />
            <div className={commonStyles.content}>
              <p>
                Some text
              </p>
            </div>
          </div>

          <div className={commonStyles.typeDiv}>
            <h3 className={commonStyles.title}>
              <Link
                className={commonStyles.titleLink}
                to="/abbreviationsortitle"
              >
                abbreviations or Title
              </Link>
            </h3>
            <hr />
            <div className={commonStyles.content}>
              <p>
                The <abbr title="World Health Organization">WHO</abbr> was
                founded in 1948.
              </p>
            </div>
          </div>

          <div className={commonStyles.typeDiv}>
            <h3 className={commonStyles.title}>
              <Link
                className={commonStyles.titleLink}
                to="/address"
              >
                address for the author/owner
              </Link>
            </h3>
            <hr />
            <div className={commonStyles.content}>
                <address>
                  Written by Mahmud Md Ashik
                  <br />
                  Visit me at:{" "}
                  <a href="https://www.facebook.com/Ashik100100/">FB</a>
                  <br />
                  Yunnan, Kunming
                  <br />
                  China
                </address>
            </div>
          </div>

          <div className={commonStyles.typeDiv}>
            <h3 className={commonStyles.title}>
              <Link
                className={commonStyles.titleLink}
                to="/attributes"
              >
                Attributes
              </Link>
            </h3>
            <hr />
            <div className={commonStyles.content}>
              <h5>href, src, alt, height, width, <Link className={commonStyles.styleLink} to="/style">style</Link></h5>
              <section  className={commonStyles.codeRunDiv}>
              <code>
                    <code className={commonStyles.codeColorComment}>&lt;!-- good --&gt;</code><br/>
                    &lt;<span className={commonStyles.codeColorDarkRed}>link</span> <span className={commonStyles.codeColorGreen}>rel</span><span className={commonStyles.codeColorDarkRed}>=</span><span className={commonStyles.codeColorYellow}>"stylesheet"</span> <span className={commonStyles.codeColorGreen}>href</span><span className={commonStyles.codeColorDarkRed}>=</span><span className={commonStyles.codeColorYellow}>"styles.css"</span>&gt;<br/>

                    
                </code>
              </section>
            </div>
          </div>

          <div className={commonStyles.typeDiv}>
          <h3 className={commonStyles.title}>
              <Link
                className={commonStyles.titleLink}
                to="/media"
              >
                audio
              </Link>
            </h3>
            <hr/>
              <div  className={commonStyles.content}>
                  <audio controls>
                      <source src={audio} type="audio/ogg"/>
                    Your browser does not support the audio element.
                  </audio>
              </div>
          </div>

          <div className={commonStyles.typeDiv}>
          <h3 className={commonStyles.title}>
              <Link
                className={commonStyles.titleLink}
                to="/media"
              >
                API
              </Link>
            </h3>
            <hr/>
              <div  className={commonStyles.content}>
                <h3>Locate the User's Position</h3>
                <Link className={commonStyles.styleLink} to="/userPosition">User's Position</Link><br/>
                <Link className={commonStyles.styleLink} to="/dragAndDrop">Drag and Drop</Link>
              </div>
          </div>
        </section>
        {/* A end */}

        {/* B start */}
          <section id="b">
            <div className={commonStyles.typeDiv}>
              <h3 className={commonStyles.title}>
              <Link
                className={commonStyles.titleLink}
                to="/break"
              >
                break
              </Link>
              </h3>
              <hr />
              <div className={commonStyles.content}>
                <div  className={commonStyles.codeDiv}>
                <code>
                    &lt;<span className={commonStyles.codeColorDarkRed}>br/</span>&gt;
                </code>
            </div>
              </div>
            </div>

            <div className={commonStyles.typeDiv}>
              <h3 className={commonStyles.title}>
              <Link
                className={commonStyles.titleLink}
                to="/blockquote"
              >
                blockquote
              </Link>
              </h3>
              <hr />
              <div className={commonStyles.content}>
                <div  className={commonStyles.codeRunDiv}>
                <code>
                <p>Here is title</p>

                  <blockquote cite="http://www.worldwildlife.org/who/index.html">
                  Here is content
                  </blockquote>
                </code>
            </div>
              </div>
            </div>
          </section>
        {/* B end */}

        {/* C start */}
          <section>
          </section>
        {/* C end */}

        {/* D start */}
          <section>
          </section>
        {/* D end */}

        {/* E start */}
          <section>
          </section>
        {/* E end */}

        {/* F start */}
          <section>
          </section>
        {/* F end */}

        {/* G start */}
          <section>
          </section>
        {/* G end */}

        {/* H start */}
          <section>
          </section>
        {/* H end */}

        {/* I start */}
          <section>
          </section>
        {/* I end */}
        
        {/* J start */}
          <section>
          </section>
        {/* J end */}
        
        {/* K start */}
          <section>
          </section>
        {/* K end */}

        {/* L start */}
          <section>
          </section>
        {/* L end */}

        {/* M start */}
          <section>
          </section>
        {/* M end */}

        {/* N start */}
          <section>
          </section>
        {/* N end */}

        {/* O start */}
          <section>
          </section>
        {/* O end */}

        {/* P start */}
          <section>
          </section>
        {/* P end */}

        {/* Q start */}
          <section>
          </section>
        {/* Q end */}

        {/* R start */}
          <section>
          </section>
        {/* R end */}

        {/* S start */}
          <section>
          </section>
        {/* S end */}

        {/* T start */}
          <section>
          </section>
        {/* T end */}

        {/* U start */}
          <section>
          </section>
        {/* U end */}

        {/* V start */}
          <section>
          </section>
        {/* V end */}

        {/* W start */}
          <section>
          </section>
        {/* W end */}

        {/* X start */}
          <section>
          </section>
        {/* X end */}

        {/* Y start */}
          <section>
          </section>
        {/* Y end */}

        {/* Z start */}
          <section>
          </section>
        {/* Z end */}
      </Layout>
    </div>
  );
};

export default Home;

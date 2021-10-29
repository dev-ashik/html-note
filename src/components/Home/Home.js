import React from "react";
import Layout from "../Layout/Layout";
import commonStyles from "../Common/Common.module.css";
import { Link } from "react-router-dom";

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
        </section>
        {/* A end */}
      </Layout>
    </div>
  );
};

export default Home;

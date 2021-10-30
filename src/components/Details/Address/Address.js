import React from "react";
import commonStyles from '../../Common/Common.module.css';
import Layout from "../../Layout/Layout";

const Address = () => {
  return (
    <Layout>
      <h3 className={commonStyles.title}>address for the author/owner</h3>
      <div className={commonStyles.codeRunDiv}>
        <address>
          Written by Mahmud Md Ashik
          <br />
          Visit me at: <a href="https://www.facebook.com/Ashik100100/">FB</a>
          <br />
          Yunnan, Kunming
          <br />
          China
        </address>
      </div>
      <div className={commonStyles.codeDiv}>
        <code>
            
            &lt;<span className={commonStyles.codeColorDarkRed}>address</span>
            &gt;<br />
                &nbsp; &nbsp; Written by Mahmud Md Ashik<br />
                &nbsp; &nbsp; Visit me at: &lt;
            <span className={commonStyles.codeColorDarkRed}>a</span>
            <span className={commonStyles.codeColorGreen}>href</span>=
            <span className={commonStyles.codeColorYellow}>
              "https://www.facebook.com/Ashik100100/"
            </span>
            &gt;FB&lt;<span className={commonStyles.codeColorDarkRed}>/a</span>
            &gt;
            <br />
            &nbsp; &nbsp; Yunnan, Kunming
            <br />
            &nbsp; &nbsp; China
            <br />
            &lt;<span className={commonStyles.codeColorDarkRed}>/address</span>
            &gt;
        </code>
      </div>
    </Layout>
  );
};

export default Address;

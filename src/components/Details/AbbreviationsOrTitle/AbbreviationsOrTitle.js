import React from 'react';
import Layout from '../../Layout/Layout';
import commonStyles from '../../Common/Common.module.css';

const AbbreviationsOrTitle = () => {
    return (
        <Layout>
            <h3 className={commonStyles.title}>abbreviations Or Title</h3>
            <div  className={commonStyles.codeRunDiv}>
                <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
            </div>
            <div  className={commonStyles.codeDiv}>
                <code>
                    &lt;<span className={commonStyles.codeColorDarkRed}>p</span>&gt;The &lt;<span className={commonStyles.codeColorDarkRed}>abbr</span> <span className={commonStyles.codeColorGreen}>title</span>=<span className={commonStyles.codeColorYellow}>"World Health Organization"</span>&gt;WHO&lt;<span className={commonStyles.codeColorDarkRed}>/abbr</span>&gt; was founded in 1948.&lt;<span className={commonStyles.codeColorDarkRed}>/p</span>&gt;
                </code>
            </div>
        </Layout>
    );
};

export default AbbreviationsOrTitle;
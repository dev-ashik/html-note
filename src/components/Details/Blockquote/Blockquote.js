import React from 'react';
import Layout from '../../Layout/Layout';
import commonStyles from '../../Common/Common.module.css';

const Blockquote = () => {
    return (
        <Layout>
            <h3 className={commonStyles.title}>Blockquote</h3>
            <div  className={commonStyles.codeRunDiv}>
                <p>Here is title</p>

                <blockquote cite="http://www.worldwildlife.org/who/index.html">
                Here is content
                </blockquote>
            </div>
            <div  className={commonStyles.codeDiv}>
                <code>
                    &lt;<span className={commonStyles.codeColorDarkRed}>p</span>&gt;
                        Here is title
                    &lt;<span className={commonStyles.codeColorDarkRed}>/p</span>&gt;<br />
                    &lt;<span className={commonStyles.codeColorDarkRed}>blockquote</span> <span className={commonStyles.codeColorGreen}>cite</span><span className={commonStyles.codeColorDarkRed}>=</span><span className={commonStyles.codeColorYellow}>"http://www.worldwildlife.org/who/index.html"</span>&gt;<br />
                       &nbsp; &nbsp; Here is title <br />
                    &lt;<span className={commonStyles.codeColorDarkRed}>/blockquote</span>&gt;
                    
                </code>
            </div>
        </Layout>
    );
};

export default Blockquote;
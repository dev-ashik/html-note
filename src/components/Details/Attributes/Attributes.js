import React from 'react';
import Layout from '../../Layout/Layout';
import commonStyles from '../../Common/Common.module.css';
import {Link} from 'react-router-dom';

const Attributes = () => {
    return (
        <Layout>
            <h3 className={commonStyles.title}>Attributes</h3>
            <h5>href, src, alt, height, width, <Link className={commonStyles.styleLink} to="/style">style</Link></h5>
            <div  className={commonStyles.codeRunDiv}>
                <p>don't use space before and after equal.</p>
            </div>
            <div  className={commonStyles.codeDiv}>
                <code>
                    <code className={commonStyles.codeColorComment}>&lt;!-- good --&gt;</code><br/>
                    &lt;<span className={commonStyles.codeColorDarkRed}>link</span> <span className={commonStyles.codeColorGreen}>rel</span><span className={commonStyles.codeColorDarkRed}>=</span><span className={commonStyles.codeColorYellow}>"stylesheet"</span> <span className={commonStyles.codeColorGreen}>href</span><span className={commonStyles.codeColorDarkRed}>=</span><span className={commonStyles.codeColorYellow}>"styles.css"</span>&gt;<br/>

                    &lt;<span className={commonStyles.codeColorDarkRed}>img</span> <span className={commonStyles.codeColorGreen}>src</span><span className={commonStyles.codeColorDarkRed}>=</span><span className={commonStyles.codeColorYellow}>"../picture/imageMap.jpg"</span> <span className={commonStyles.codeColorGreen}>alt</span><span className={commonStyles.codeColorDarkRed}>=</span><span className={commonStyles.codeColorYellow}>"imageMap"</span>&gt;
                    
                    <br/><br/>

                    <code className={commonStyles.codeColorComment}>&lt;!-- bad --&gt;</code><br/>
                    &lt;<span className={commonStyles.codeColorDarkRed}>link</span> <span className={commonStyles.codeColorGreen}>rel</span><span className={commonStyles.codeColorDarkRed}> = </span> <span className={commonStyles.codeColorYellow}>"stylesheet"</span> <span className={commonStyles.codeColorGreen}>href</span><span className={commonStyles.codeColorDarkRed}> = </span><span className={commonStyles.codeColorYellow}>"styles.css"</span>&gt;<br/>

                    &lt;<span className={commonStyles.codeColorDarkRed}>img</span> <span className={commonStyles.codeColorGreen}>src</span><span className={commonStyles.codeColorDarkRed}> = </span><span className={commonStyles.codeColorYellow}>"../picture/imageMap.jpg"</span> <span className={commonStyles.codeColorGreen}>alt</span><span className={commonStyles.codeColorDarkRed}> = </span><span className={commonStyles.codeColorYellow}>"imageMap"</span>&gt;
                </code>
            </div>
        </Layout>
    );
};

export default Attributes;
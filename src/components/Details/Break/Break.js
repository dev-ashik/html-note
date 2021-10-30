import React from 'react';
import Layout from '../../Layout/Layout';
import commonStyles from '../../Common/Common.module.css';

const Break = () => {
    return (
        <Layout>
            <h3 className={commonStyles.title}>break</h3>
            <div  className={commonStyles.codeRunDiv}>
                <p>I am a student.<br/> I live in china.</p>
            </div>
            <div  className={commonStyles.codeDiv}>
                <code>
                    &lt;<span className={commonStyles.codeColorDarkRed}>p</span>&gt;
                        I am a student.
                        &lt;<span className={commonStyles.codeColorDarkRed}>br/</span>&gt;
                        I live in china.
                    &lt;<span className={commonStyles.codeColorDarkRed}>/p</span>&gt;
                </code>
            </div>
        </Layout>
    );
};

export default Break;
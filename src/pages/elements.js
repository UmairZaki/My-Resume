import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const Elements = props => (
  <Layout>
    <Helmet>
      <title>AI Projects</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Artificial Intelligence Projects</h2>
          
        </header>

        <section>
        <h2>Deep Learning</h2>
<h3>I trained the model with all following aspects:</h3>
<h3>01.Baseline Neural Network</h3>
<h3>02.Baseline Model With Data Standarization</h3>
<h3>03.Evaluate a Smaller Network</h3>
<h3>04.Evaluate a very Smaller Network</h3>
<h3>05.Evaluate a larger Network</h3>
<h3>06.Evaluate a very Larger Network</h3>
<h3>07.Tuning the Model (Change Optimizer and number of Epochs)</h3>
<h3>08.Keras Functional API</h3>
<h3>09.Keras K-fold Cross Validation without Scikit Learn</h3>
<h3>10.Keras Model Subclassing</h3>
            <h2>1-Binary Classification Sonar Dataset</h2>
            <p>to see my coding <a href="https://github.com/UmairZaki/Deep-Learning-Sonar-Dataset" target= "_blank">Click Here</a></p>
            <h2>2-Multiclass Classification Iris Dataset</h2>
            <p>to see my coding <a href="https://github.com/UmairZaki/Deep-Learning-Iris-Dataset" target= "_blank">Click Here</a></p>
            <h2>3-Regression Housing Dataset</h2>
            <p>to see my coding <a href="https://github.com/UmairZaki/Deep-Learning-Housing-Dataset" target= "_blank">Click Here</a></p>
            <p></p>
          </section>

         
      </div>
    </div>
  </Layout>
)

export default Elements

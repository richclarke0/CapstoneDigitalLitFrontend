
import React from 'react';
import {MDBContainer} from "mdb-react-ui-kit"
const App = () => ( 
<MDBContainer> 
  <h1>About The Developer</h1>
  <div className="row">
    <div className="col-md-3"><img className="rounded" src="https://github.com/richclarke0/richclarke0.github.io/blob/main/img/me-sm.jpg?raw=true" alt="" style={{"maxWidth":"20vw"}}/></div>
    <div className="col-md-9">
      <h3>Hi, I'm Rich. // <a href="https://dev.to/richclarke0">my dev.to blog</a> // <a href="https://github.com/richclarke0">my github</a></h3>
      <p>I'll be the first to say that this project is not my best work. It went really well at first, but I ran into a lot of issues
        with implementing auth using JWT tokens and getting React to behave the way I wanted to. Due to time constraints, I had to 
        roll back my firebase backend functions to where they had no authentication, then I could finally proceed with using axios
        and getting react to render stuff. I also used MDBootstrap for their frontend components which saved me a bit of time writing some CSS.
      </p>
      <h5>Technologies:</h5>
      <ul>
        <li>Firebase</li>
        <li>React</li>
        <li>Axios</li>
        <li>MDBootstrap</li>
        <li>Node</li>
        <li>Express</li>
        <li><s>react-foundation</s> (dropped because it just wasn't that great)</li>
        <li><s>axios-hooks</s> (didn't work the way I wanted it to)</li>
      </ul>
    </div>
  </div>
</MDBContainer>
);
export default App;
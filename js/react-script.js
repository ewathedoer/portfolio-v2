var SubpageLink = React.createClass({
  render() {
    return (
      <li>
        <ReactRouter.Link to={this.props.href} className="btn-wide">
          {this.props.children}
        </ReactRouter.Link>
      </li>
    )
  }
});

var Applications = React.createClass({
  render() {
    return (<div className="col-subpages">
        <h2>here there will be applications yupiiii</h2>
      </div>     
    );
  }
});

var Websites = React.createClass({
  render() {
    return (<div className="col-subpages">
        <h2>here there will be websites huray</h2>
      </div>
    );
  }
});

var Design = React.createClass({
  render() {
    return (<div className="col-subpages">
        <h2>here there will be design cases</h2>
      </div>
    );
  }
});
    
var Portfolio = React.createClass({
  render() {
    return (<div>
      <div className="wrapper flex-center">
        <div className="wrapper flex-center col-one-side">
          <div className="col-1-2">
            <h2>My skills at work</h2>
            <p>
              I keep on learning and implementing new ideas. Have a look at the projects where I've worked on design and code. 
            </p>
          </div>
        </div>
        <div className="col-one-side">
          <ul className="portfolio-subpages">
            <SubpageLink href="/portfolio/applications">
              applications
            </SubpageLink>
            <SubpageLink href="/portfolio/websites">
              websites
            </SubpageLink>
            <SubpageLink href="/portfolio/design">
              design
            </SubpageLink>
          </ul>
        </div>
      </div>
      
      {this.props.children}
    </div>);
  }
});

/**/

ReactDOM.render(
  <ReactRouter.Router>
    <ReactRouter.Route path="/" component={Portfolio}>
      <ReactRouter.Route path="portfolio/applications" component={Applications} />
      <ReactRouter.Route path="portfolio/websites" component={Websites} />
      <ReactRouter.Route path="portfolio/design" component={Design} />
      <ReactRouter.Route path="*" />
    </ReactRouter.Route>
  </ReactRouter.Router>
  , document.getElementById("react-container")
);
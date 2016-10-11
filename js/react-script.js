var SubpageLink = React.createClass({
  render() {
    return (
      <li>
        <button href={this.props.href} className="btn-wide">
          {this.props.children}
        </button>
      </li>
    )
  }
});

var Subpage = React.createClass({
  getInitialState: function() {
    return {
      pageContent: ''
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.href, function (result) {
      this.setState({
        pageContent: result
      });
      ReactDOM.render(<ul>
                  <SubpageLink href="subpages/applications.html">
                    applications
                  </SubpageLink>
                  <SubpageLink href="subpages/websites.html">
                    websites
                  </SubpageLink>
                  <SubpageLink href="subpages/design.html">
                    design
                  </SubpageLink>
                </ul>
                , document.getElementById("portfolio-subpages"));
    }.bind(this));
  },
  
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  
  render() {
    return (<div dangerouslySetInnerHTML={{__html: this.state.pageContent}}></div>)
  }
});

/**/

ReactDOM.render(<Subpage href="subpages/portfolio.html" />, document.getElementById("react-container"));
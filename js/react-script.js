var SubpageLink = React.createClass({
  scroll() {
    var targetOffset = $("#subpages").offset().top;
    $('html,body').animate({scrollTop: targetOffset}, 1000);
  },
  
  render() {
    return (
      <li>
        <ReactRouter.Link to={this.props.href} className="btn-wide" onClick={this.scroll}>
          {this.props.children}
        </ReactRouter.Link>
      </li>
    )
  }
});

var Applications = React.createClass({
  render() {
    return (<div className="col-subpages">
        
        <section id="applications" className="col-desktop-narrow">    
          <section className="wraper flex-center">
            
            <div className="wrapper flex-space-around">
              <div className="col-520">
                <div className="thumbnail img-portfolio">
                  <a href="https://s.codepen.io/thedoer/debug/EKbrpO" target="_blank">
                    <img src="images/portfolio/wiki.png" alt="wikipedia viewer application" />
                  </a>
                </div>
              </div>
              <div className="col-1-2 order-first">
                <h3>Wikipedia Viewer</h3>
                <p>
                  The app is directed at young explorers. Users can search the term through the extracts of Wikipedia articles and filter them.
                </p>
                <div className="btn-box">
                  <a href="http://codepen.io/thedoer/pen/EKbrpO" target="_blank" className="btn-portfolio btn">code</a>
                  <a href="https://s.codepen.io/thedoer/debug/EKbrpO" target="_blank" className="btn-portfolio btn">live site</a>
                </div>
              </div>
            </div>
            
            <div className="wrapper flex-space-around">
              <div className="col-520">
                <div className="thumbnail img-portfolio">
                  <a href="http://theonewhodo.es/pomodoro/" target="_blank">
                    <img src="images/portfolio/pomodoro.png" alt="pomodoro clock application" />
                  </a>
                </div>
              </div>
              <div className="col-1-2 order-first">
                <h3>Pomodoro Clock</h3>
                <p>
                  Time management app. Users can customize the time of sessions, declare the goal, tweet their progress and analyze the history of finished cycles.
                </p>
                <div className="btn-box">
                  <a href="https://github.com/ewathedoer/pomodoro-clock" target="_blank" className="btn-portfolio btn">code</a>
                  <a href="http://theonewhodo.es/pomodoro/" target="_blank" className="btn-portfolio btn">live site</a>
                </div>
              </div>
            </div> 
            
            <div className="wrapper flex-space-around">
              <div className="col-520">
                <div className="thumbnail img-portfolio">
                  <a href="http://theonewhodo.es/simon-game/" target="_blank">
                    <img src="images/portfolio/simon.png" alt="simon game application" />
                  </a>
                </div>
              </div>
              <div className="col-1-2 order-first">
                <h3>Simon Game</h3>
                <p>
                  The memory game where a user has to repeat the sequence of 20 sounds in order to win. As the game progresses, the number of buttons to be pressed increases.
                </p>
                <div className="btn-box">
                  <a href="https://github.com/ewathedoer/simon-game" target="_blank" className="btn-portfolio btn">code</a>
                  <a href="http://theonewhodo.es/simon-game/" target="_blank" className="btn-portfolio btn">live site</a>
                </div>
              </div>
            </div> 
            
            <div className="wrapper flex-space-around">
              <div className="col-520">
                <div className="thumbnail img-portfolio">
                  <a href="http://theonewhodo.es/tictactoe/" target="_blank">
                    <img src="images/portfolio/tictactoe.png" alt="tic tac toe application" />
                  </a>
                </div>
              </div>
              <div className="col-1-2 order-first">
                <h3>Tic Tac Toe Game</h3>
                <p>
                  The game has two modes implemented: a beginner and an advanced player logic. Users can play multiple round and change both mode and symbol.
                </p>
                <div className="btn-box">
                  <a href="https://github.com/ewathedoer/tictactoe" target="_blank" className="btn-portfolio btn">code</a>
                  <a href="http://theonewhodo.es/tictactoe/" target="_blank" className="btn-portfolio btn">live site</a>
                </div>
              </div>
            </div> 
            
          </section> 
        </section>
        
        
            
      </div>     
    );
  }
});

var Websites = React.createClass({
  render() {
    return (<div className="col-subpages">
        
        <section id="websites" className="col-desktop-narrow">    
          <section className="wraper flex-center">
            
            <div className="wrapper flex-space-around">
              <div className="col-520">
                <div className="thumbnail img-portfolio">
                  <a href="https://procreative.eu/" target="_blank">
                    <img src="images/portfolio/procreative.png" alt="company website" />
                  </a>
                </div>
              </div>
              <div className="col-1-2 order-first">
                <h3>ProCreative Website</h3>
                <p>
                  Company site built using Polymer. I worked on code, design, copy, cartoons, and movies.
                </p>
                <div className="btn-box">
                  <a href="https://github.com/ewathedoer/procreative" target="_blank" className="btn-portfolio btn">code</a>
                  <a href="https://procreative.eu/" target="_blank" className="btn-portfolio btn">live site</a>
                </div>
              </div>
            </div>
            
            <div className="wrapper flex-space-around">
              <div className="col-520 yt-video">
                <div className="video">
                  <iframe width="520" height="293" src="https://www.youtube.com/embed/2ksR9B5J7SA" frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
              <div className="col-1-2 order-first">
                <p>
                  The goal was to present the small software company, its portfolio, and motivate users to start cooperation.
                </p>
                <p>
                  For user testing I used Typeform, Adobe Spark Page, Gooogle Hangout, Skype, Linkedin.
                </p>
              </div>
            </div> 
              
          </section>
        </section>
            
      </div>
    );
  }
});

var Design = React.createClass({
  render() {
    return (<div className="col-subpages">
        
        <section id="design" className="col-desktop-narrow">    
          <section className="wraper flex-center">
            
            <p>Here there will be design cases</p>
              
          </section>
        </section>    
            
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
      
      <div id="subpages">
        {this.props.children}
      </div>
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
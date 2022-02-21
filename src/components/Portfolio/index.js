import React from 'react';


function Portfolio () {
    const projectsList = [
      {
        name: 'Password Generator',
        technology: 'HTML, CSS, Javascript',
        gitHubRepo: 'https://github.com/ChiaraNS/password-Generator.git',
        image: './images/generator.jpg',
      },
        {
          name: 'Get Fed',
          technology: ' HTML, CSS, JavaScript, React, ReactStrap,  Node.js, MySQL, Sequelize.js',
          gitHubRepo: 'https://github.com/ChiaraNS/team-cuisine-project-3.git',
          image: './images/get-fed.jpg',
        },
        {
          name: 'ByteMe',
          technology: 'HTML, CSS, JavaScript, Handlebars, Node.js, MySQL, REST api, JawsDB',
          gitHubRepo: 'https://github.com/Kevin-Hernandez-Garza/BM-E-Commerce-Project.git',
          image: './images/byteme.png',
        },
        {
          name: 'Weather Dashboard',
          technology: 'HTML, CSS, JavaScript, Bootstrap, Jquery, Moment.js',
          gitHubRepo: 'https://github.com/ChiaraNS/weather-dash.git',
          image: './images/weather-sc.png',
        },
        {
          name: 'Note Taker',
          technology: 'HTML, CSS, JavaScript, Express.js, Inquirer, Express.js',
          gitHubRepo: 'https://github.com/ChiaraNS/note-Taker.git',
          image: './images/notetaker-sc.png',
        },
        {
          name: 'Work Day Scheduler',
          technology: 'HTML, CSS, JavaScript',
          gitHubRepo: 'https://github.com/ChiaraNS/work-day.git',
          image: './images/work-day-sc.png',
        },
      ];
      

      return (
          <div className="flex-row stuff">
            {projectsList.map((Portfolio) => (
              <div className="work-card" key={Portfolio.name}>
                <h3 className="work-card-title">{Portfolio.name}</h3>
                <img className="img-fluid work-card-image" src={require(`${Portfolio.image}`)} alt={Portfolio.altText} key={Portfolio.name} />
                    <p>Technology: {Portfolio.technology}</p>
                    <p><a href={Portfolio.gitHubRepo} target="_blank" rel='noreferrer'>GithubRepo</a></p>
              </div>
            ))}
          </div>
      );
}

export default Portfolio;
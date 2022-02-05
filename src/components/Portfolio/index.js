import React from 'react';


function Project (props) {
    const projectsList = [
      {
        name: 'Password Generator',
        technology: 'HTML, CSS, Javascript',
        gitHubRepo: 'https://github.com/ChiaraNS/password-Generator.git',
        image: './images/images/generator.jpg',
      },
        {
          name: 'Get Fed',
          technology: ' HTML, CSS, JavaScript, React, ReactStrap,  Node.js, MySQL, Sequelize.js',
          gitHubRepo: 'https://github.com/ChiaraNS/team-cuisine-project-3.git',
          image: './images/images/get-fed.jpg',
        },
        {
          name: 'ByteMe',
          technology: 'HTML, CSS, JavaScript, Handlebars, Node.js, MySQL, REST api, JawsDB',
          gitHubRepo: 'https://github.com/Kevin-Hernandez-Garza/BM-E-Commerce-Project.git',
          image: './images/images/byteme.png',
        },
        {
          name: 'Weather Dashboard',
          technology: 'HTML, CSS, JavaScript, Bootstrap, Jquery, Moment.js',
          gitHubRepo: 'https://github.com/ChiaraNS/weather-dash.git',
          image: './images/images/weather-sc.png',
        },
        {
          name: 'Note Taker',
          technology: 'HTML, CSS, JavaScript, Express.js, Inquirer, Express.js',
          gitHubRepo: 'https://github.com/ChiaraNS/note-Taker.git',
          image: './images/images/notetaker-sc.png',
        },
        {
          name: 'Work Day Scheduler',
          technology: 'jQuery, Bootstrap, Moment.js, HTML, JavaScript',
          gitHubRepo: 'https://github.com/AllysonMcGrath/jquery-workday-scheduler.git',
          image: './images/images/work-day-sc.png',
        },
      ];
      

      return (
          <div className="flex-row">
            {projectsList.map((project) => (
              <div className="work-card" key={project.name}>
                <h3 className="work-card-title">{project.name}</h3>
                <img className="img-fluid work-card-image" src={require(`../../assets/images/${project.image}`)} alt={project.altText} key={project.name} />
                    <p>Technology: {project.technology}</p>
                    <p><a href={project.gitHubRepo} target="_blank" rel='noreferrer'>GithubRepo</a></p>
              </div>
            ))}
          </div>
      );
}

export default Project;
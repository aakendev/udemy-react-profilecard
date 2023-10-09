import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className='avatar' src='images/profile.png' alt='Aldy Rizky Putra' />
  );
}

function Intro() {
  return (
    <div>
      <h1>Aldy Rizky Putra</h1>
      <p>
        My name is Aldy Rizky Putra. I am Stated in Surabaya, East Java,
        Indonesia. Now i am working as Freelance Web Developer. I am capable of
        Web Development such as HTML, CSS, and JavaScript. I am also work with
        Version Control by using GitHub. Feel free to ask me if you have any
        inquiries. Thank you.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill skills={skill} />
      ))}
    </div>
  );
}

function Skill({ skills }) {
  return (
    <div className='skill' style={{ backgroundColor: skills.color }}>
      <span>{skills.skill}</span>
      <span>
        {skills.level === 'advanced' && '💪'}
        {skills.level === 'intermediate' && '👍'}
        {skills.level === 'beginner' && '👶'}
      </span>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

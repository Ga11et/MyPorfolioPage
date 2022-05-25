import React, { FC } from 'react';
import css from './app.module.css'
import lendingPhoto from './assets/lending.jpg'
import SocialNetworkPhoto from './assets/socialNetwork.jpg'
import weatherApp from './assets/weatherApp.jpg'
import hotelBooking from './assets/hotelBooking.jpg'
import courses from './assets/courses.jpg'

function App() {
  return <>
    <Header />
    <Projects />
  </>
}

const Header: FC<{}> = (props) => {
  return <header className={css.header}>
    <h1>Sivkov Fyodor portfolio</h1>
  </header>
}

const projectsData = [
  {id: 1, photo: hotelBooking, name: 'hotelBooking', href: 'https://ga11et.github.io/hotelBooking/'},
  {id: 2, photo: courses, name: 'Courses', href: 'https://ga11et.github.io/Courses/'},
  {id: 3, photo: weatherApp, name: 'Weather App', href: 'https://ga11et.github.io/WeatherApp/'},
  {id: 4, photo: SocialNetworkPhoto, name: 'Social Network', href: 'https://ga11et.github.io/MyReactProject/'},
  {id: 5, photo: lendingPhoto, name: 'Lending', href: 'https://ga11et.github.io/Lending/'},
  {id: 6, photo: '', name: '...', href: ''},
]

const Projects: FC<{}> = (props) => {
  return <section className={css.projects}>
    {projectsData.map( el => <Project key={el.id}
      name={el.name}
      photo={el.photo}
      href={el.href}/>)}
  </section>
}

type projectType = {
  photo: string
  name: string
  href: string
}

const placeholderPhoto = 'https://via.placeholder.com/150'

const Project: FC<projectType> = ({photo,name,href}) => {
  return <a href={href}>
      <div className={css.back}>
        <h2>{name}</h2>
      </div>
      <img src={photo ? photo : placeholderPhoto} alt='sitePhoto' />
    </a>
}



export default App;

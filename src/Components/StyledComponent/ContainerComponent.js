import React, { Component } from 'react'
import './Container.scss'
import {Card} from './Card'
import movies from './data'


class ContainerComponent extends Component {
    render() {
        return (
            <main>
      {movies.map(movie => (
        <Card classes="mr" key={`${movie.id}`}>
          <Card.Image src={movie.image} alt={movie.title} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.desc}</Card.Text>
            <Card.Button>{movie.ctaText}</Card.Button>
          </Card.Body>
        </Card>
      ))}
    </main>
        )
    }
}
export default ContainerComponent
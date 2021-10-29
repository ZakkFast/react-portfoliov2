import React, { Fragment } from 'react'


export default function ProjectCard(props) {
    return (
      <Fragment>
      <div className="hover">
        <figure>
          <a target="_blank" href={props.url}><img src={props.img} /></a>
        </figure>
      </div>
      <div>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        Browse the repo <a href={props.repo}> here,</a> or click the image to see the deployed site.
      </div>
      </Fragment>

    )
}

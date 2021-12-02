import React from 'react'
import { myProjects } from './Projects'
import { useParams } from 'react-router-dom'

export default function ProjectDetails() {
	const params = useParams()

	const projectId = params.id

	const project = myProjects.find(project => project.id === projectId)

	console.log(params)
	return (
		<div>
			<h1>Project Details: </h1>
			<h3>{project.name}</h3>
			<h3>Used technologies: {project.technologies}</h3>
			<h4>{project.description}</h4>
		</div>
	)
}

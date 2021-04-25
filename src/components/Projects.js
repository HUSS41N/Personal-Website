import React from "react"
import Project from "./Project"

const Projects = () => {
  return (
    <div>
      <section className="projects" id="projects">
      <Project/>
      <Project/>
      <Project/>
			<div className="more">
				<button>View All</button>
			</div>
		</section>
    </div>
  )
}

export default Projects
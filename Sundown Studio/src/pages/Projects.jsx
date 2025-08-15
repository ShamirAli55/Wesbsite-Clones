import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
const projects = [
    {
        name: "Play New kidvision", brand: "Nike", env: "Environment",
        src: "https://images.unsplash.com/photo-1754898284154-62daf743b909?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "SOHO NYC", brand: "NIKE", env: "Experiential",
        src: "https://images.unsplash.com/photo-1743595738944-8652106902c4?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Makers Studio HOI", brand: "NIKE", env: "Experiential",
        src: "https://images.unsplash.com/photo-1754634026426-4bc23801b618?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "SOHO 2023", brand: "CONVERSE", env: "Environment",
        src: "https://plus.unsplash.com/premium_photo-1669828436341-4a229f3e6a79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "NYFW Popup", brand: "AT ELWRY", env: "Experiential",
        src: "https://images.unsplash.com/photo-1754436412955-e2aae088a979?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Air Force 1 2021", brand: "NIKE", env: "Experiential",
        src: "https://images.unsplash.com/photo-1658226500474-9a01f528a93b?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "50th Anniversary", brand: "NIKE", env: "Experiential",
        src: "https://images.unsplash.com/photo-1754462642749-200ce41c11df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const Projects = () => {
    return (
        <section className='min-h-screen w-screen px-6'>
            <div className='flex items-center'>
                <div className='dot h-3 w-3 mr-2 mt-0'></div>
                <h4 className='uppercase'>Featured Projects</h4>
            </div>
            <div className='pt-22 cursor-pointer'>
                {projects.map((project, index) => (
                    <ProjectCard name={project.name} brand={project.brand} env={project.env} src={project.src} />
                ))}
            </div>
            <div className='mt-14 mb-24'>
                <Button name={"All Projects->"} />
            </div>

            <div className='min-h-screen flex bg-black text-white mx-2 rounded-[30px] mb-12 overflow-hidden'>
                <div className='h-full w-1/2 py-38 px-34'>
                    <div className='flex justify-center flex-col border-l-1 border-l-white text-6xl font-bold'>
                        <h1>Design</h1>
                        <h1 className='ml-6 mt-3 text-[#726a6a86]'>Project</h1>
                        <h1 className='ml-6 mt-3 text-[#726a6a86]'>Execution</h1>
                    </div>
                    <p className='leading-[15px] pt-4'>Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.</p>
                </div>

                <div className='h-[110vh] w-1/2 '>
                    <img className='h-full object-center'
                        src="/page4.webp" alt="image" />
                </div>
            </div>

        </section>
    )
}

export default Projects
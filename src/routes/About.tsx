import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="mx-auto text-center flex flex-col">
      <h2 className="font-serif text-gray-900 p-2">Version 1.0</h2>
      <h2 className="font-serif text-gray-900 p-2">
        <a className="text-blue-800" href="https://m.youtube.com/watch?v=w7ejDZ8SWv8">Link</a> for the video used as a reference
      </h2>
      <Link to="/" className="p-2 font-serif hover:text-blue-600 hover:ring-blue-600">Go back</Link>
    </div>
  )
}

export default About;

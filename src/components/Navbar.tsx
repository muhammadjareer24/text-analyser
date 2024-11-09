import { CgWebsite } from 'react-icons/cg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 bg-tertiary-background shadow-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center">
          <span className="text-primary-text font-semibold text-base md:text-lg">
            Text Analyser
          </span>
          <ul className="flex flex-row ">
            {/* Social Links */}
            <li className="ml-4 md:ml-5">
              <a href="" target="_blank" rel="noreferrer">
                <CgWebsite className="w-6 h-6" />
              </a>
            </li>
            <li className="ml-4 md:ml-5">
              <a href="" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </li>
            <li className="ml-4 md:ml-5">
              <a href="" target="_blank" rel="noreferrer">
                <FaGithub className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

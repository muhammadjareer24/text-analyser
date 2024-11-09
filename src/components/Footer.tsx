const Footer = () => {
  return (
    <footer className="py-4 bg-tertiary-background shadow-md">
      <div className="container mx-auto px-5">
        <div className="flex flex-row justify-between items-center">
          <p className="text-primary-text text-sm md:text-base font-medium ">
            Build by{' '}
            <a
              className="underline"
              href="https://jareer-portfolio.vercel.app/"
            >
              Muhammad Jareer
            </a>
          </p>
          <ul className="flex flex-row gap-2">
            <li className="text-primary-text text-sm md:text-base font-medium cursor-pointer">
              About
            </li>
            <li className="text-primary-text text-sm md:text-base font-medium">
              |
            </li>
            <li className="text-primary-text text-sm md:text-base font-medium cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

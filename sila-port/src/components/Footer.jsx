import { profile } from '../data/portfolio.js'

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.nativeName}. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

import Link from 'next/link'

export default function Footer(){
    return(
        <div className="card-footer">
              <Link href='/formSubmit' className="start-button">
                Start Quiz
              </Link>
        </div>
    )
}
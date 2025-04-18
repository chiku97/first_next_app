import Image from "next/image";

import './page.css'

const Globe = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
)

const Code = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
)

const BookOpen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
)



function Home() {
  const quizData = [
    {
      id: "wap",
      title: "Web Application Programming (WAP)",
      description: "Test your knowledge of web technologies, HTML, CSS, and JavaScript.",
      colorClass: "wap-category",
    },
    {
      id: "psp",
      title: "Problem Solving & Programming (PSP)",
      description: "Challenge yourself with algorithmic problems and programming concepts.",
      colorClass: "psp-category",
    },
    {
      id: "dsa",
      title: "Data Structures & Algorithms (DSA)",
      description: "Evaluate your understanding of data structures and algorithm design.",
      colorClass: "dsa-category",
    },
  ]


  // function callback(item) {
  //   return  <div className= "quiz-card" key={item.id}>
  //   <div className="card-header">Web Application Programming (WAP)</div>
  //   <div className="card-body">Test your knowledge of web technologies, HTML, CSS, and JavaScript.</div>
  //   <div className="start-button"> Start Quiz</div>
  // </div>
  // }
  // const quizCards = quizData.map(callback)

  // quizCards

  return (
    <div>
      <div>
          {
            quizData.map((item)=>{
                return <div className= "quiz-card" key={item.id}>
                <div className="card-header">{item.title}</div>
                <div className="card-body">{item.description}</div>
                <div className="start-button"> Start Quiz</div>
              </div>
            })
          }
        
      </div>
    </div>
    );
}

export default Home;
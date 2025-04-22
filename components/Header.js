export default function Header({category}){
    return(
        <div className={`card-header ${category.colorClass}`}>
              <div className="icon-title">
                <span className="icon">{category.icon}</span>
                <h2 className="category-title">{category.title}</h2>
              </div>
            </div>
    )
}
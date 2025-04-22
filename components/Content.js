export default function Content({category}){
    
    return(
        <div className="card-body">
             <p className="category-description">{category.description}</p>
        </div>
    )
}
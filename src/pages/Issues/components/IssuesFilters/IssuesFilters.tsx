import './IssuesFilters.css'

export const IssuesFilters = () => {
    return (
        <div className="filters">
            <span className='filterLabel'>Filter by label:</span>
            <div className='filterButtons'>
                <button>Bug</button>
                <button>Suggestion</button>
                <button>Duplicate</button>
            </div>
        </div>
    )
}
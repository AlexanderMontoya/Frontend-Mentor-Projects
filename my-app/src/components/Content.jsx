import './Content.css'
export function Content(){
    return (
        <div className="content">
            <div className="content__details">
                <div className="content__new">NEW</div>
                <p className="content__sub">MONOGRAPH DASHBOARD</p>
            </div>
            <h1 className='content__title'>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
            <p className="content__paragraph">
                Project planning and time tracking for agile teams
            </p>
            <div className="content__demo">
                <button className="content__btn--demo">SHEDULE A DEMO</button>
                <p className="content__sub">TO SEE A PREVIEW</p>
            </div>
        </div>
        
    )
}
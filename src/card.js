const Card = props => {
    return (
        <div style={{ margin: '1em' }} className="card mx-auto col-lg-4 col-md-6" >
            <h3 style={{ fontWeight: 'bold', color: 'black' }} > {props.login} </h3>
            <div className="row my-2">
                <div className="col-4">
                    <img alt="avatar" style={{ width: '120px' }} src={props.avatar_url} />
                </div>
                <div className="col-8">
                    <p>{props.name}</p>
                    <p>{props.id}</p>
                    <p>{props.company}</p>
                    <p>{props.email}</p>
                    <p>{props.url}</p>
                    <p>{props.type}</p>
                    <a href={props.blog}> {props.blog} </a>
                </div>
            </div>
        </div>
    )
}
export default Card;                  
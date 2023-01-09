import '../estaticos/css/Picture.css'
export const Picture=(props)=>{
    return (
        <div className='image-container'>
            <img src={props.imagen}></img>
            <p>{props.texto}</p>
        </div>
    )
}
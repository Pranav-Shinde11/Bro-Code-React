import profilePic from '../assets/Pranav.jpg'


function Card(){
    return(
        <div className="card">
            <img className="card-image"src={profilePic} alt='profile picture'></img>
            <h1 className='card-title'>Pranav Shinde</h1>
            <p  className='card-text'>Software engineer with expertise in building secure and scalable applications. Skilled in Django, React.js, and MySQL, focused on enhancing user satisfaction and operational efficiency</p>
        </div>
    )

}

export default Card
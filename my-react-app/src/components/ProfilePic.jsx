import image from '../assets/Pranav.jpg'

function ProfilePic (){
    //   const imageurl = '../assets/Pranav.jpg';

      const handelevent = (e) => e.target.style.display ="none"

      return<img    onClick={(e) =>handelevent(e)}  src ={image} ></img>
}

export default ProfilePic
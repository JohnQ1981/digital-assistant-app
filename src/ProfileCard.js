function ProfileCard ({title, handle, platform, color , image}){
    const style ={color:color};
    //const {title, handle, platform} = props;
    return (
        <div className ="App"> 
            <img src={image} alt="Logo images"/>
            <div><h1 style ={style}>Title is {title}.</h1></div>
            <div>Handle is {handle}.</div>
            <div>Platform it uses is {platform}.</div>

        </div>
    );
}
export default ProfileCard;
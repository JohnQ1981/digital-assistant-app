function ProfileCard ({title, handle, platform, color}){
    const style ={color:color};
    //const {title, handle, platform} = props;
    return (
        <div> 
            <div><h1 style ={style}>Title is {title}.</h1></div>
            <div>Handle is {handle}.</div>
            <div>Platform it uses is {platform}.</div>

        </div>
    );
}
export default ProfileCard;
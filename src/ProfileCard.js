function ProfileCard({ title, handle, platform, color, image }) {
  const style = { color: color };
  //const {title, handle, platform} = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="Logo images" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
        <p  className="title is-4">
          <h1 style={style}>Title is {title}.</h1>
        </p>
        <p className="subtitle is-6">Handle is {handle}.</p>
        <div className="content"><p className="subtitle is-8">Platform it uses is {platform}.</p></div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;

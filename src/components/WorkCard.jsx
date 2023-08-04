import Image from "next/image";

function WorkCard({
  id,
  imageLink,
  link,
  title,
  position,
  location,
  years,
  description,
  imageHalfSize = false,
}) {
  return (
    <div className="row">
      <div className="col-md-7">
        <div
          // className="card-img-container"
          style={{ width: "100%", maxWidth: "100%", paddingTop: "50px" }}
        >
          <a href={link} target="_blank">
            <Image
              height={200}
              width={200}
              className="img-fluid rounded mb-3 mb-md-0 center-block"
              src={imageLink}
              alt={`${id} work image`}
              style={
                imageHalfSize
                  ? { width: "30%", display: "block", margin: "0 auto" }
                  : { width: "75%", display: "block", margin: "0 auto" }
              }
            />
          </a>
        </div>
      </div>
      <div className="col-md-5 mt-3">
        <a href={link} className="link-style" target="_blank">
          <h3>{title}</h3>
        </a>
        <h4>{position}</h4>
        <p>{location}</p>
        <p>{years}</p>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default WorkCard;

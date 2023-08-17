import Image from "next/image";

function ProjectCard({ id, imageLink, link, title, description }) {
  return (
    <div className="col-lg-6 mb-5">
      <div
        className="card h-100"
        style={{ backgroundColor: "transparent", color: "white" }}
      >
        <div
          style={{
            minHeight: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href={link} target="_blank">
            <Image
              width={300}
              height={300}
              className="card-img-top center-block project-card-img"
              src={imageLink}
              alt={`${id} screen`}
              // style={{ marginTop: "auto", marginBottom: "auto" }}
            />
          </a>
        </div>
        <div className="card-body" style={{ backgroundColor: "transparent" }}>
          <h4 className="card-title">
            <a href={link} className={"link-style"} target="_blank">
              {title}
            </a>
          </h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

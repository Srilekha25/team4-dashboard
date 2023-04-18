const Card = ({ info }) => {
    return (
        <div>
            <h1> Hackerank User Info</h1>
            <p>Name: {info.name ?? "No name"}</p>
            <p>username: {info.username ?? "No username"}</p>
            <p>clan: {info?.clan ?? "No clan"}</p>
            <p>ranks: {info.skills ?? "No skills"}</p>
        </div>
    );
};

export default Card;

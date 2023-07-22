export function Person({ name, nickName, images }) {
  const img = images?.[0]?.small?.url || "default_avatar";
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px", height: "50px" }} />
      <h4>{name}</h4>
      <p>Nick Name : {nickName || "No Nick Name"}</p>
    </div>
  );
}

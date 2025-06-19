interface TechTypes{
    name:string,
    img:string,
}
function TechComponent({img,name}:TechTypes) {
    return (
        <div className="flex gap-2 items-center border-green-600 border-2 p-1 px-3 rounded-2xl ">
            <img src={img} width={24} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default TechComponent

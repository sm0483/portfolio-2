import { experienceType } from '#/types/experience.type'

const Exp = ({ title, role, duration, responsibilities }: experienceType) => {
    return (
        <div className="">
            <h3 className=" ">{title}</h3>
            <p className=" ">
                {role} | {duration}
            </p>
            <ul className="text-sm">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </div>
    )
}

export default Exp

import { experienceType } from '#/types/experience.type'

const Exp = ({ title, role, duration, responsibilities }: experienceType) => {
    return (
        <div className="glass text-white text-opacity-70  ">
            <h3 className="font-bold  capitalize opacity-100">{title}</h3>
            <p className=" capitalize">
                {role} | {duration}
            </p>
            <ul className="min-w-md mt-2 text-sm  ">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </div>
    )
}

export default Exp

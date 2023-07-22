import { TechType } from '#/types/tech.div'

const Tech = ({ technology }: TechType) => {
    return (
        <div
            className="mr-3 flex 
    items-center
   rounded-full bg-red/10 px-3
 py-1 text-xs font-medium capitalize leading-5 text-red"
        >
            {technology}
        </div>
    )
}

export default Tech

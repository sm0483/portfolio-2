import { positionType } from '#/types/div.type'

const Cursor = ({ divPosition }: positionType) => {
    return (
        <div
            className="cursor"
            style={{
                top: divPosition.top,
                left: divPosition.left,
            }}
        ></div>
    )
}

export default Cursor

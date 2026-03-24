import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function Item({id, name}) {
    const {
        setNodeRef,
        listeners,
        attributes,
        transform,
        transition
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: 'grab'
    }

    return (
        <li ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <p>{name}</p>
        </li>
    );
}
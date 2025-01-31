import { AppNode } from "@/types/appNode";
import { TaskType } from "@/types/task";
import { v4 as uuidv4 } from "uuid";

export function CreateFlowNode (
    nodeType: TaskType,
    position?: {x:number; y:number}
): AppNode {
    return {
        id: uuidv4(),
        type: "Node",
        data: {
            type: nodeType,
            inputs: {},
        },
        position: position ?? {x:0, y:0}
    }
}
"use client"

import { Workflow } from '@prisma/client'
import { Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react'
import React from 'react'

function FlowEditor({workflow}:{workflow:Workflow}) {
    const [nodes, setNodes, onNodesChange] = useNodesState([
        {
            id: "1",
            position: {x:0, y:0},
            data: {
                label:"example"
            }
        }
    ]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    
    return (
        <main className="h-full w-full">
            <ReactFlow 
                nodes={nodes} 
                edges={edges} 
                onEdgesChange={onEdgesChange}
                onNodesChange={onNodesChange}
            >
                <Controls position="top-left" />
                <Background variant={BackgroundVariant.Dots} gap={12} />
            </ReactFlow>
        </main>
    )
}

export default FlowEditor
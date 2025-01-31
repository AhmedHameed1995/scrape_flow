"use client"
import { Workflow } from '@prisma/client'
import React from 'react'
import { ReactFlowProvider } from "@xyflow/react"
import FlowEditor from './FlowEditor'
import '@xyflow/react/dist/style.css';

const Editor = ({workflow}:{workflow:Workflow}) => {
    return (
        <ReactFlowProvider>
            <div className="flex flex-col h-full w-full overflow-hidden">
                <div className="flex h-full overflow-auto">
                    <FlowEditor workflow={workflow} />
                </div>
            </div>
        </ReactFlowProvider>  
    )
}

export default Editor
"use server"

import React from 'react'
import { TicketAssigneePicker } from './ticket-assignee-picker'
import { prisma } from '@/lib/prisma'

export default async function TicketAssigneeDialog() {


    const groups = await prisma.group.findMany({
        select: {
            id: true,
            name: true,
            users: {
                select: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                    photo: true,
                }
            }
        },
        // include: {
        //     users: {
        //         select: {
        //             id: true,
        //             first_name: true,
        //             last_name: true,
        //             email: true,
        //             photo: true,
        //         }
        //     }
        // }
    })


    console.log(groups);

    return (
        <div>
            {/* <TicketAssigneePicker groups={groups} /> */}
        </div>
    )
}



import React from 'react'
import { Button } from './ui/button'
import { auth } from '@/auth';

async function NoItems() {
  const session = await auth();

  return (
    <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            {session?.user?.email}
         
          </h3>
          <h3 className="text-2xl font-bold tracking-tight">
          {session?.user?.credits}
          </h3>
          <p className="text-sm text-muted-foreground">
            You are logged in.
          </p>
          {/* <Button className="mt-4">Add Item</Button> */}
        </div>
      </div>
  )
}

export default NoItems
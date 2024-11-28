'use client'

import {
    LiveblocksProvider,
    RoomProvider as RoomProviderWraper,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";
import LoadingSpinner from "./LoadingSpinner";



function RoomProvider({roomID, children}:{
    roomID: string;
    children: React.ReactNode;
}) {
  return (
    <RoomProviderWraper
        id={roomID}
        initialPresence={{
            cursor: null,
        }}
        initialStorage={{

        }}
    >
        <ClientSideSuspense fallback={<LoadingSpinner/>}>
        <LiveCursorProvider>{children}</LiveCursorProvider>
        
        </ClientSideSuspense>
        
        </RoomProviderWraper>
  )
}

export default RoomProvider